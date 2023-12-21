'use client'

import { FC, useState } from 'react'
import { Dialog, DialogContent, DialogTrigger, DialogHeader } from '../ui/dialog'
import { DialogProps } from '@radix-ui/react-dialog'
import Image from 'next/image'
import ArrowButton from '../productImage/arrowButton'
import ImageReel from '../productImage/imageReel'

interface lightboxProps extends DialogProps {
  images: {
    src: string
    alt: string
  }[]
}

const Lightbox: FC<lightboxProps> = ({ images, children }) => {
  const [currentImage, setCurrentImage] = useState(0)

  const prevImage = () => {
    setCurrentImage(prev => {
      return prev === 0 ? images.length - 1 : prev - 1
    })
  }

  const nextImage = () => {
    setCurrentImage(prev => (prev + 1) % images.length)
  }


  return (
    <Dialog>
      <DialogTrigger className='w-full'>
        {children}
      </DialogTrigger>
      <DialogContent className="bg-transparent border-transparent shadow-none flex flex-col items-center justify-center">
        <div className="h-[75vh] max-h-[700px] flex flex-col gap-8">
          <div className="relative h-3/4 aspect-square">
            <ArrowButton
              className="z-20 absolute top-1/2 -translate-y-1/2 left-0 -translate-x-1/2"
              onClick={prevImage}
            >
              <Image src="/images/icon-previous.svg" alt="prev" width={14} height={14} className="-translate-x-[2px]" />
            </ArrowButton>

            <div className="relative w-full h-full rounded-xl overflow-clip">
              <Image
                src={images[currentImage].src}
                alt={images[currentImage].alt}
                fill
              />
            </div>

            <ArrowButton
              className="z-20 absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/2"
              onClick={prevImage}
            >
              <Image src="/images/icon-next.svg" alt="prev" width={14} height={14} className="translate-x-[2px]" />
            </ArrowButton>
          </div>
          <div className="h-[86px]">
            <ImageReel images={images} currentImage={currentImage} onTileClick={(index) => setCurrentImage(index)} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Lightbox