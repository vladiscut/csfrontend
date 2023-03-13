import { Tab } from '@headlessui/react';
import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Basket from '../components/Basket';
import Header from '../components/Header'
import Landing from '../components/Landing';
import Product from '../components/Product';
import Footer from '../components/Footer';
import { fetchCategories } from '../utils/fetchCategories';
import { fetchProducts } from '../utils/fetchProducts';
import TabPanel from '../components/TabPanel';

interface Props{
  categories: Category[];
  products: Product[];
}

const Home = ({categories, products}: Props) => {
  console.log(categories)
  console.log(products)


  return (
    <div className="">
      <Head>
        <title>Crossale</title>
        <link rel="icon" href="/icon3.ico" />
      </Head>
      <Header />

      <Basket />

      <main className='relative min-h-screen bg-[#E7ECEE]'>
        <Landing categories={categories} />
      </main>
      <TabPanel categories={categories} products={products} mt={'200'}/>
      <Footer/>
   </div>
  );
};

export default Home;


// Backend
export const getServerSideProps: GetServerSideProps<Props> = async ()=>{
  const res = await fetch("http://sotencgm.beget.tech/api/");
  const products = await res.json();

  const ress = await fetch("http://sotencgm.beget.tech/api/category/");
  const categories = await ress.json();

  return{
    props:{
      categories,
      products,
    },
  };
};

// export async function getStaticProps() {
//   const res = await fetch("http://127.0.0.1:8000/api/");
//   const products = await res.json();

//   const ress = await fetch("http://127.0.0.1:8000/api/category/");
//   const categories = await ress.json();
  
//   return {
//     props: {
//       products,
//       categories,
//     },
//   };
// }