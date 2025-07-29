"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Language, useLanguage } from "@/contexts/language-context"
import { ChevronDown, Globe } from "lucide-react"
import { useState } from "react"

const languageOptions = [
  {
    code: 'en' as Language,
    name: 'English',
    flag: '🇺🇸',
    country: 'USA'
  },
  {
    code: 'pt-BR' as Language,
    name: 'Português',
    flag: '🇧🇷',
    country: 'Brasil'
  }
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage = languageOptions.find(lang => lang.code === language)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center space-x-2 h-9 px-3 text-xs sm:text-sm"
        >
          <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
          <span className="hidden sm:inline">{currentLanguage?.flag}</span>
          <span className="hidden md:inline">{currentLanguage?.name}</span>
          <ChevronDown className="h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {languageOptions.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onClick={() => {
              setLanguage(option.code)
              setIsOpen(false)
            }}
            className={`flex items-center space-x-3 cursor-pointer ${language === option.code ? 'bg-primary/10 text-primary' : ''
              }`}
          >
            <span className="text-lg">{option.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium">{option.name}</span>
              <span className="text-xs text-muted-foreground">{option.country}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}