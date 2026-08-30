"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

/**
 * Cookie consent banner.
 *
 * Deliberate design: this site currently has NO analytics and sets NO cookies,
 * so there is nothing to consent to and the banner does not render. It only
 * appears once NEXT_PUBLIC_GA_ID is set — and then it genuinely gates the
 * script: gtag.js is never inserted into the page unless the visitor accepts.
 * No "load it anyway and pretend" consent theater.
 *
 * Keep /cookie-policy in sync with whatever this component does.
 */

const STORAGE_KEY = "cookie-consent"
const MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000 // ask again after 12 months

const ANALYTICS_ID = process.env.NEXT_PUBLIC_GA_ID

type Choice = "accepted" | "essential"
type Stored = { choice: Choice; at: number }

function readChoice(): Choice | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Stored
    if (parsed.choice !== "accepted" && parsed.choice !== "essential") return null
    if (Date.now() - parsed.at > MAX_AGE_MS) return null
    return parsed.choice
  } catch {
    return null
  }
}

function loadAnalytics(id: string) {
  if (document.getElementById("ga-script")) return

  const w = window as unknown as { dataLayer?: unknown[] }
  const dataLayer = (w.dataLayer = w.dataLayer || [])
  // gtag.js reads dataLayer entries positionally, so a real array works the
  // same as the `arguments` object the official snippet pushes.
  const gtag = (...args: unknown[]) => dataLayer.push(args)

  const script = document.createElement("script")
  script.id = "ga-script"
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)

  gtag("js", new Date())
  gtag("config", id, { anonymize_ip: true })
}

export default function CookieConsent() {
  const { t } = useLanguage()
  const [visible, setVisible] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)
  const restoreFocusTo = useRef<Element | null>(null)

  useEffect(() => {
    if (!ANALYTICS_ID) return // nothing to consent to — stay out of the way
    const choice = readChoice()
    if (choice === "accepted") loadAnalytics(ANALYTICS_ID)
    if (choice === null) setVisible(true)
  }, [])

  const decide = useCallback((choice: Choice) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() } satisfies Stored))
    } catch {
      // storage blocked (private mode / cookies disabled) — nothing to gate anyway
    }
    if (choice === "accepted" && ANALYTICS_ID) loadAnalytics(ANALYTICS_ID)
    setVisible(false)
    if (restoreFocusTo.current instanceof HTMLElement) restoreFocusTo.current.focus()
  }, [])

  useEffect(() => {
    if (!visible) return
    restoreFocusTo.current = document.activeElement
    panelRef.current?.focus()

    // Escape resolves to the privacy-preserving answer, never to silent consent.
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") decide("essential")
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [visible, decide])

  if (!visible) return null

  return (
    <div
      ref={panelRef}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-text"
      tabIndex={-1}
      // Left-anchored so it never sits under the floating WhatsApp button
      // (fixed bottom-5 right-5, 3.5rem wide) in the bottom-right corner.
      className="fixed bottom-5 left-4 right-[5.75rem] sm:right-auto sm:left-5 sm:max-w-md z-40 rounded-2xl border border-border/60 bg-background/95 p-5 shadow-xl backdrop-blur outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{
        bottom: "calc(1.25rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      <h2 id="cookie-consent-title" className="text-sm font-semibold text-foreground mb-1.5">
        {t("cookie.banner.title")}
      </h2>
      <p id="cookie-consent-text" className="text-sm text-muted-foreground leading-relaxed mb-4">
        {t("cookie.banner.text")}{" "}
        <Link
          href="/cookie-policy"
          className="text-primary underline underline-offset-4 hover:text-primary/80 transition-colors"
        >
          {t("cookie.banner.link")}
        </Link>
      </p>
      <div className="flex flex-wrap gap-2">
        <Button size="sm" onClick={() => decide("accepted")}>
          {t("cookie.banner.accept")}
        </Button>
        <Button size="sm" variant="outline" onClick={() => decide("essential")}>
          {t("cookie.banner.reject")}
        </Button>
      </div>
    </div>
  )
}
