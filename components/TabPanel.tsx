import { Tab } from '@headlessui/react';
import React from 'react'
import Product from './Product';

interface Props{
    categories: Category[];
    products: Product[];
    mt: string;
  }


function TabPanel({categories, products, mt}: Props) {

const showProducts = (category: string) => {
    return products.filter((product) => product.category === category)
    .map((product) => <Product product={product} key={product.id} />);
    }


  return (
    <section className={`relative -mt-[${mt}vh] min-h-screen bg-[#1b1b1b]`}>
        <div className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white md:text-5xl'>
            {categories[0].name}
          </h1>
          
          <Tab.Group>
              <Tab.List className="flex justify-center">
                {categories.map((category) => (
                  <Tab
                    key={category.id}
                    id={category.id}
                    className={({ selected }) =>
                      `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                        selected
                          ? "borderGradient bg-[#35383C] text-white"
                          : "border-b-2 border-[#35383C] text-[#747474]"
                      }`
                    }
                  >
                    {category.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                <Tab.Panel className="tabPanel">{products.map((product) => <Product product={product} key={product.id} />)}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts('17')}</Tab.Panel>
                <Tab.Panel className="tabPanel">{showProducts('0')}</Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
            
        </div>
      </section> 
  )
}

export default TabPanel