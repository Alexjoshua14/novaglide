import { FC, HTMLAttributes } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface ImageReelProps extends HTMLAttributes<HTMLDivElement> {
  images: {
    src: string
    alt: string
  }[]
  onTileClick: (index: number) => void
  currentImage: number
}

const ImageReel: FC<ImageReelProps> = ({ images, onTileClick, currentImage, className }) => {
  return (
    <div className={cn("hidden sm:flex sm:min-h-[72px] w-full h-full overflow-x-auto no-scrollbar", className)}>
      <div className="flex w-full gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-full aspect-square grid place-items-center rounded-lg overflow-clip border-2 ${index === currentImage ? 'border-orange' : 'border-transparent'}`}
            onClick={() => onTileClick(index)}
          >
            <div className={`z-30 absolute w-full h-full bg-white transition-opacity ${index === currentImage ? 'bg-opacity-70' : 'bg-opacity-0 hover:bg-opacity-40'}`} />
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </button>

        ))}
      </div>
    </div>
  )
}

export default ImageReel