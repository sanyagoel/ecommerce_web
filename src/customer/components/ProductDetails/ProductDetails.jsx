/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
  }
  ```
*/
import { StarIcon } from '@heroicons/react/20/solid'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ProductDetailsReviewCard from './ProductDetailsReviewCard';


const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { id: 'white', name: 'White', classes: 'bg-white checked:outline-gray-400' },
    { id: 'gray', name: 'Gray', classes: 'bg-gray-200 checked:outline-gray-400' },
    { id: 'black', name: 'Black', classes: 'bg-gray-900 checked:outline-gray-900' },
  ],
  sizes: [
 
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true }
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  return (
    <div className="bg-white lg:px-20">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    fill="currentColor"
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
            
              
              <section className='grid grid-cols-1 lg:grid-cols-2 gap-4 p-4 mt-4 mb-20'>
                  
                          {/* Image gallery */}
                  <div className="flex flex-col items-center px-25">
                      <div className='w-[28rem] h-auto'>
          <img
            alt={product.images[0].alt}
            src={product.images[0].src}
            className="row-span-2 aspect-3/4  w-full h-full  rounded-lg object-cover object-left-top"
                          />
                          </div>

                      <div className='rounded-lg p-2 flex gap-x-5 mt-2 w-fit ' >
                          {product.images.map((image) => {
                             return <img
                                  alt={image.alt}
                                  src={image.src}
                                  className="w-[6rem] h-[6rem]  rounded-lg object-cover  max-lg:hidden"
                              />
                          })}
                           
                          
                          </div>
    
        </div>

        {/* Product info */}
                {/* <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"> */}

<div className="px-4 pb-16 sm:px-6 lg:px-8  lg:pb-24">
          <div className="lg:col-span-2lg:pr-8">
                          <h1 className="text-sm font-medium tracking-tight text-gray-900 sm:text-xl">UniversalOutfit</h1>
                          <p className="text-xl  tracking-tight text-gray-400 sm:text-xl mt-1">Casual Puff Sleeves Sold Women White Top</p>
                            <div className="flex space-x-2  text-lg mt-7">
                        <p className="font-semibold">&#8377; 199</p>
                        <p className="line-through text-gray-500 font-semibold">&#8377;1599</p>
                        <p className="text-green-600 font-semibold">70% off</p>
                          </div>
                          
                          
<div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
      <Rating name="read-only" value={4} readOnly />
                </div>
                                  <p className="sr-only">{reviews.average} out of 5 stars</p>
                                  <p className='text-gray-400 ml-3'>43560 Ratings</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
                          </div>
                          
                           <div className='mt-9'>
                <h3 className="text-sm font-medium text-gray-900">Color</h3>

                <fieldset aria-label="Choose a color" className="mt-4">
                  <div className="flex items-center gap-x-3">
                    {product.colors.map((color) => (
                      <div key={color.id} className="flex rounded-full outline -outline-offset-1 outline-black/10">
                        <input
                          defaultValue={color.id}
                          defaultChecked={color === product.colors[0]}
                          name="color"
                          type="radio"
                          aria-label={color.name}
                          className={classNames(
                            color.classes,
                            'size-8 appearance-none rounded-full forced-color-adjust-none checked:outline-2 checked:outline-offset-2 focus-visible:outline-3 focus-visible:outline-offset-3',
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </fieldset>
                          </div>
                          
                           <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">Size</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                    Size guide
                  </a>
                </div>

                <fieldset aria-label="Choose a size" className="mt-4">
                  <div className="grid grid-cols-13 gap-3">
                    {product.sizes.map((size) => (
                      <label
                        key={size.id}
                        aria-label={size.name}
                        className="group relative flex items-center justify-center rounded-md border border-gray-300 bg-white p-3 pb-5 pt-5 has-checked:border-indigo-600 has-checked:bg-indigo-600 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 has-disabled:border-gray-400 has-disabled:bg-gray-200 has-disabled:opacity-25"
                      >
                        <input
                          defaultValue={size.id}
                          defaultChecked={size === product.sizes[2]}
                          name="size"
                          type="radio"
                          disabled={!size.inStock}
                          className="absolute inset-0 appearance-none focus:outline-none disabled:cursor-not-allowed"
                        />
                        <span className="text-sm font-medium uppercase group-has-checked:text-white">{size.name}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                          </div>
                          
                          {/* <button
                type="submit"
                className="mt-8 flex w-[9rem] text-sm items-center justify-center rounded-md border border-transparent bg-purple-600 px-5 py-4 font-medium   text-white hover:bg-purple-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                ADD TO CART
              </button> */}

              <Button variant="contained" color="secondary" sx={{px : "2rem", py : "1rem", mt : 4, bgcolor:"#9155fd", '&:hover':{ bgcolor: "#4b0076"}}}>Add to Cart</Button>
          </div>

          {/* Options */}
          {/* <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>

            

            <form className="mt-10"> */}
              {/* Colors */}
             

              {/* Sizes */}
             

              {/* <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
              >
                Add to bag
              </button>
            </form>
          </div> */}

          <div className="py-0 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-0">
            {/* Description and details
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div> */}

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>

            </div>
          </div>
        </div>
                  
              </section>

              {/* Recent reviews and ratings product card */}

              <section className=''>
                  <h2 className='mb-4 font-semibold'>Recent Reviews & Ratings</h2>
                  
                  { [1,1,1].map(()=>{return <ProductDetailsReviewCard/>})} 
                  </section>

      </div>
    </div>
  )
}
