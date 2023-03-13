import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TabPanel from '../../components/TabPanel';
import ListProducts from '../../components/ListProduct';
import Basket from '../../components/Basket';


function CategoryPage({ products, categories, mt }) {
    return (
        <>
            <Head>
                <title>Crossale</title>
                <link rel="icon" href="/icon3.ico" />
            </Head>
            <Header />
            <Basket />
            {/* <TabPanel categories={categories} products={products} mt={'0'} /> */}
            <ListProducts categories={categories} products={products} />
            <Footer />
        </>
    )
}

export async function getServerSideProps({ params }) {

    const res = await fetch(`http://sotencgm.beget.tech/api/category/${params.slug}`);
    const products = await res.json();

    const ress = await fetch("http://sotencgm.beget.tech/api/category/");
    const categories = await ress.json();


    return {
        props: {
            products,
            categories,
        },
    };

}


export default CategoryPage