import React from 'react'
// import { urlFor } from '../sanity';
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../redux/basketSlice';
import toast from 'react-hot-toast';
import Link from 'next/link';

interface Props {
    product: Product;
}

function Product({ product }: Props) {

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket(product))
        toast.success(`${product.title} добавлен в корзину`, {
            position: "bottom-center",
        });
    };

    return (
        <div className='flex m-5 h-fit w-[250px] select-none flex-col space-y-3 rounded-xl
     bg-[#35383C] p-8 lg:h-[500px] xl:w-[300px] md:p-10'>
            <div className='relative'>
                <span className='absolute -top-7 -left-7 text-black bg-gradient-to-r from-red-900
             to-orange-600  rounded'>69%</span>
            </div>
            <div className="relative h-64 w-full md:h-72">
                <Image src={product.product_image[0]?.image}

                    alt=''
                    fill
                    objectFit="contain"
                />
            </div>
            <p className='space-y-2 text-lg text-white'>
                <Link key={product.id} href={`/product/${product.slug}`}>
                    {product.title}
                </Link>
            </p>
            <div className='flex flex-1 items-center justify-between space-x-3'>
                <div className='space-y-2 text-lg text-white md:text-xl'>
                    <span className='line-through text-slate-400 text-xs'>
                        {product.regular_price}
                    </span>
                    <p>
                        {product.price} ₽
                    </p>
                    {/* <span className='text-center text-[15px]'>
                        Доставят 4 февраля
                    </span> */}
                </div>
                <div className='flex h-16 w-16 flex-shrink-0 cursor-pointer items-center 
            justify-center rounded-full bg-gradient-to-r from-red-900
             to-orange-600 md:h-[70px] md:w-[70px]' onClick={addItemToBasket}>
                    <ShoppingCartIcon className='h-8 w-8 text-white' />
                </div>
            </div>
        </div>
    )
}

export default Product