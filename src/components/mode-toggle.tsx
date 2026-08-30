"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

/**
 * Single-tap theme toggle.
 *
 * Was a three-item dropdown (Light / Dark / System) for what is a two-state
 * choice — two taps, a second popover in an already crowded header, and a
 * `Moon` positioned `absolute` inside a button that was never `relative`, so
 * it escaped to the sticky header's coordinate space.
 *
 * The icons stay CSS-driven (`dark:` variants) rather than reading
 * `resolvedTheme` during render, so there is nothing to hydrate and no
 * mounted-flag boilerplate.
 */
export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative"
      aria-label="Toggle light and dark theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[18px] w-[18px] rotate-0 scale-100 transition-transform dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[18px] w-[18px] rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  )
}
