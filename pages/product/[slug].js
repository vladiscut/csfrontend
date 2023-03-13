import React from 'react'
// import { urlFor } from '../sanity';
import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/basketSlice';
import toast from 'react-hot-toast';
import Header from '../../components/Header'
import Basket from '../../components/Basket'
import Head from 'next/head';
import Breadcrumbs from 'nextjs-breadcrumbs';
import ProductDetails from '../../components/ProductDetails';




function Product({ product }) {
    console.log(product)

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        dispatch(addToBasket(product))
        toast.success(`${product.title} добавлен в корзину`, {
            position: "bottom-center",
        });
    };


    return (
        <div className='relative'>
            <Head>
                <title>Crossale</title>
                <link rel="icon" href="/icon3.ico" />
            </Head>
            <Header />
            <Basket />
            <main>
                <ProductDetails product={product} />
            </main>

        </div>

    )
}

// export async function getStaticPaths() {
//     return {
//         paths: [{ params: { slug: "boots-3" } }],
//         fallback: true,
//     };
// }

export async function getServerSideProps({ params }) {

    const res = await fetch(`http://sotencgm.beget.tech/api/${params.slug}`);
    const product = await res.json();

    const ress = await fetch("http://sotencgm.beget.tech/api/category/");
    const categories = await ress.json();


    return {
        props: {
            product,
            categories,
        },
    };

}

export default Product

// Backend
// export const getServerSideProps: GetServerSideProps<Props> = async () => {
//     const res = await fetch("http://127.0.0.1:8000/api/");
//     const products = await res.json();

//     const ress = await fetch("http://127.0.0.1:8000/api/category/");
//     const categories = await ress.json();

//     return {
//         props: {
//             categories,
//             products,
//         },
//     };
// };