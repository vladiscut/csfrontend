import React from "react";
import Filters from "./Filters";

import Product from "./Product";

const ListProducts = ({ products, categories, }) => {
  // console.log(data);
  return (
    <section className="py-12 bg-[#E7ECEE]">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col md:flex-row -mx-4">
          <Filters />

          <main className="block m-auto lg:grid lg:grid-cols-2 xl:grid-cols-3 px-3 pr-10">
            {products?.map((product) => (
              <Product key={product?._id} product={product} className='px-10'/>
            ))}
          </main>
        </div>
      </div>
    </section>
  );
};

export default ListProducts;
