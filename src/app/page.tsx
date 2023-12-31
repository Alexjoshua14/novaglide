import ProductInfo from '@/components/product/productInfo'
import ProductContainer from '@/components/productImage/productContainer'
import Image from 'next/image'

const productImages = [
  {
    src: '/images/image-product-1.jpg',
    alt: 'Feature image of the Fall Limited Edition Sneakers',
  },
  {
    src: '/images/image-product-2.jpg',
    alt: 'Fall Limited Edition Sneakers in a Fall environment',
  },
  {
    src: '/images/image-product-3.jpg',
    alt: 'Fall Limited Edition Sneakers balanced on rocks',
  },
  {
    src: '/images/image-product-4.jpg',
    alt: 'Fall Limited Edition Sneakers impossibly balanced on rocks',
  },
]

const productInfo = {
  name: 'Fall Limited Edition Sneakers',
  brand: 'Sneaker Company',
  description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
  price: 250,
  discount: .50,

}

export default function Home() {
  return (
    <main className="flex min-h-screen page-gutter-y lg:page-gutter  flex-col items-center justify-between">
      <div className="flex-1 z-10 w-full max-w-5xl flex flex-col lg:flex-row items-center justify-between text-sm ">

        <ProductContainer images={productImages} />

        <div className="flex-1 w-full page-gutter lg:px-10 py-6 flex items-center justify-center">
          <ProductInfo {...productInfo} />
        </div>
      </div>
    </main>
  )
}
