import Image from 'next/image'

interface PlaceholderImageProps {
  width: number
  height: number
}

export function PlaceholderImage({ width, height }: PlaceholderImageProps) {
  return (
    <div 
      style={{ width, height }} 
      className="bg-muted flex items-center justify-center text-muted-foreground"
    >
      {width}x{height}
    </div>
  )
}