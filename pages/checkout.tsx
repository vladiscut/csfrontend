import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Currency from "react-currency-formatter";
import Button from '../components/Button'
import CheckoutProduct from '../components/CheckoutProduct'
import Header from '../components/Header'
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice'
import { ChevronDownIcon } from '@heroicons/react/outline';
import Footer from '../components/Footer';

const Checkout = () => {
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item)
      return results
    }, {} as { [key: string]: Product[] })

    setGroupedItemsInBasket(groupedItems)
  }, [items])

  return (
    <div className='min-h-screen overflow-hidden bg-[#E7ECEE]'>
      <Head>
        <title>Корзина - CROSSALE</title>
        <link rel='icon' href="/icon3.ico" />
      </Head>
      <Header />
      <main className='mx-auto max-w-5xl pb-24'>
        <div className='px-5'>
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl">
            {items.length > 0 ? 'Ваша корзина:' : 'Ваша корзина пуста :('}
          </h1>
          {items.length === 0 && (
            <Button
              title="Продолжить покупки"
              onClick={() => router.push("/")}
            />
          )}
        </div>

        {items.length > 0 && (
          <div className='mx-5 md:mx-8'>
            {Object.entries(groupedItemsInBasket).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}
            <div className="my-12 mt-6 ml-auto max-w-3xl">
              <div className="divide-y divide-gray-300">
                <div className="pb-4">
                  <div className="flex justify-between">
                    <p className='font-semibold'>Полная стоимость:</p>
                    <p className='font-semibold'>
                      <Currency quantity={basketTotal} currency="RUB" />
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p>Доставка</p>
                    <p>Бесплатно</p>
                  </div>
                </div>
                <div className="flex justify-between pt-4 text-xl font-semibold">
                  <h4>Итого</h4>
                  <h4>
                    <Currency quantity={basketTotal} currency="RUB" />
                  </h4>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold">
                  Оформление:
                </h4>
                <div className="flex flex-col gap-4 md:flex-row">

                  <div className="flex flex-1 flex-col items-center space-y-8 rounded-xl bg-gray-200 p-8 py-12 md:order-2">
                    <h4 className="mb-4 flex flex-col text-xl font-semibold">
                      Сумма к оплате
                      <span>
                        <Currency quantity={basketTotal} currency="RUB" />
                      </span>
                    </h4>

                    <Button
                      // loading={}
                      title="Оформить заказ"
                      width="w-full"
                      // onClick={}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
      <Footer/>
    </div>
  )
}

export default Checkout