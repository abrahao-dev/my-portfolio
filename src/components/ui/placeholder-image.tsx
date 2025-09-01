import { ImageIcon } from 'lucide-react'

interface PlaceholderImageProps {
  width: number
  height: number
  alt?: string
  className?: string
}

export function PlaceholderImage({ width, height, alt = "Placeholder", className = "" }: PlaceholderImageProps) {
  return (
    <div
      style={{ width, height }}
      className={`bg-gradient-to-br from-muted to-muted/50 flex flex-col items-center justify-center text-muted-foreground border border-dashed border-muted-foreground/20 rounded-lg ${className}`}
    >
      <ImageIcon className="w-8 h-8 mb-2 opacity-50" />
      <span className="text-xs text-center px-2">{alt}</span>
      <span className="text-xs opacity-50 mt-1">{width}×{height}</span>
    </div>
  )
}