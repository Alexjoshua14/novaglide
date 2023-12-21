'use client'

import Image from 'next/image'
import { FC, useState } from 'react'
import Lightbox from '../lightbox/lightbox'
import ImageReel from './imageReel'

interface ProductContainerProps {
  images: {
    src: string
    alt: string
  }[]
}
const ProductContainer: FC<ProductContainerProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length)
  }

  const previousImage = () => {
    setCurrentImage(prev => {
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }

  return (
    <div
      className="w-full sm:w-[360px] flex flex-col items-center gap-8">
      <div className="hidden sm:block w-full">
        <Lightbox images={images}>
          <div className="relative w-full aspect-[5/4] sm:aspect-square grid place-items-center sm:rounded-xl sm:overflow-clip">
            <Image
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              fill
              id="product-image"
              className="object-cover"
              quality={100}
            />
          </div>
        </Lightbox>
      </div>
      <div className="relative w-full aspect-[5/4] sm:aspect-square grid place-items-center sm:rounded-xl sm:overflow-clip sm:hidden">
        <Image
          src={images[currentImage].src}
          alt={images[currentImage].alt}
          fill
          id="product-image"
          className="object-cover"
          quality={100}
        />

        <div className="text-xs sm:hidden">
          <button
            className="absolute p-5 bg-white rounded-full left-4 text-black"
            onClick={previousImage}
            aria-controls='product-image'
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-2/3 -translate-y-1/2">
              <Image src="/images/icon-previous.svg" alt="prev" width={10} height={10} />
            </div>
          </button>
          <button
            className="absolute p-5 flex bg-white rounded-full right-4 text-black"
            onClick={nextImage}
            aria-controls='product-image'
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/3 -translate-y-1/2">
              <Image src="/images/icon-next.svg" alt="next" width={10} height={10} />
            </div>
          </button>
        </div>
      </div>
      <ImageReel currentImage={currentImage} onTileClick={(index) => setCurrentImage(index)} images={images} />
    </div>
  )
}

export default ProductContainer