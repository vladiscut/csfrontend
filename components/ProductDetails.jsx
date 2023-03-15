import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { addToBasket } from '../redux/basketSlice';
import StarRatings from "react-star-ratings";
import { toast } from 'react-hot-toast';
import BreadCrumbs from './BreadCrumbs';

const ProductDetails = (product) => {

    const imgRef = useRef(null);

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket(product.product))
        toast.success(`${product.product.title} добавлен в корзину`, {
            position: "bottom-center",
        });
    };

    const setImgPreview = (url) => {
        imgRef.current.src = url;
    };

    const breadCrumbs =[
        { name: "На главную", url: "/" },
        {
            name: `${product.product?.category?.name?.substring(0, 100)} ...`,
            url: `/category/${product.product?.category?.slug}`,
        },
        // { 
        //     name: `${product.product?.category?.parent?.name?.substring(0, 100)} ...`,
        //     url: `/category/${product.product?.category?.parent?.slug}`,
        // },
        // {
        //     name: `${product.product?.category?.parent?.parent?.name?.substring(0, 100)} ...`,
        //     url: `/category/${product.product?.category?.parent?.parent?.slug}`,
        // },
    ];


    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="bg-white py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-5">
                        <aside>
                            <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5">
                                <img
                                    ref={imgRef}
                                    className="object-cover inline-block"
                                    src={
                                        product.product?.product_image[0]
                                            ? product.product?.product_image[0].image
                                            : "/images/default_product.png"
                                    }
                                    alt="Product title"
                                    width="340"
                                    height="340"
                                />
                            </div>
                            <div className="space-x-2 overflow-auto text-center whitespace-nowrap">
                                {product.product?.product_image.map((img) => (
                                    <a
                                        className="inline-block border border-gray-200 p-1 rounded-md hover:border-blue-500 cursor-pointer"
                                        onClick={() => setImgPreview(img?.image)}
                                    >
                                        <img
                                            className="w-14 h-14"
                                            src={img.image}
                                            alt="Product title"
                                            width="500"
                                            height="500"
                                        />
                                    </a>
                                ))}
                            </div>
                        </aside>
                        <main>
                            <h2 className="font-semibold text-2xl mb-4">{product.product?.title}</h2>

                            <div className="flex flex-wrap items-center space-x-2 mb-2">
                                <div className="ratings">
                                    <StarRatings
                                        rating={
                                            product.product.reviews[0]
                                                ? product.product?.reviews[0]?.ratings
                                                : (0)
                                        }
                                        starRatedColor='#ffb829'
                                        numberOfStars={5}
                                        starDimension="20px"
                                        starSpacing="2px"
                                        name="rating"
                                    />
                                </div>
                                <span className="text-yellow-500">{
                                    product.product.reviews[0]
                                        ? product.product?.reviews[0]?.ratings
                                        : (0)
                                }</span>

                                <svg
                                    width="6px"
                                    height="6px"
                                    viewBox="0 0 6 6"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle cx="3" cy="3" r="3" fill="#DBDBDB" />
                                </svg>

                                <span className="text-green-500">Verified</span>
                            </div>

                            <p className="mb-4 font-semibold text-xl">{product.product?.price} ₽</p>

                            <p className="mb-4 text-gray-500">{product.product?.description}</p>

                            <div className="flex flex-wrap gap-2 mb-5">
                                <div className='m-auto flex h-16 w-16 flex-shrink-0 cursor-pointer items-center 
                                            justify-center rounded-full bg-gradient-to-r from-red-900
                                            to-orange-600 md:h-[70px] md:w-[70px]' onClick={addItemToBasket}>
                                    <ShoppingCartIcon className='h-8 w-8 text-white' />
                                </div>
                            </div>

                            <ul className="mb-5">
                                <li className="mb-1">
                                    {" "}
                                    {/* <b className="font-medium w-36 inline-block">Stock</b>
                                {inStock ? (
                                    <span className="text-green-500">In Stock</span>
                                ) : (
                                    <span className="text-red-500">Out of Stock</span>
                                )} */}
                                </li>
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium w-24 inline-block">Категория:</b>
                                    <span className="text-gray-500">{product.product?.category.name}</span>
                                </li>
                                <li className="mb-1">
                                    {" "}
                                    <b className="font-medium w-24 inline-block">
                                        Описание:
                                    </b>
                                    <span className="text-gray-500">{product.product?.description}</span>
                                </li>
                            </ul>
                        </main>
                    </div>

                    {/* <NewReview /> */}
                    <hr />

                    <div className="font-semibold">
                        <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
                            Other Customers Reviews
                        </h1>
                        {/* <Reviews /> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetails