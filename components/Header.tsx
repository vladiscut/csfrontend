import Image from "next/image"
import Link from "next/link"
import React from 'react'

import {
  SearchIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";

function Header() {
  const session = false;
  const items = useSelector(selectBasketItems)

  return (
    <header className="sticky top-0 z-30 flex w-full items-center justify-between bg-[#E7ECEE] p-4">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative w-14 h-14 cursor-pointer opacity-75 
          transition hover:opacity-100">
            <Image src="/icon3.png" alt='icon' fill />
          </div>
        </Link>
      </div>
      <div className="hidden flex-1 font-semibold items-center justify-center space-x-8 md:flex">
        <a className="headerLink">Заказы</a>
        <a className="headerLink">Поддержка</a>
        <a className="headerLink">Партнерам</a>
        <a className="headerLink">Адреса </a>
      </div>
      <div className="flex items-center justify-center gap-x-4 md:w-1/5">
        <SearchIcon className='headerIcon' />
        <Link href="/checkout" >
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute -right-1 -top-1 z-50 flex h-5 w-5 items-center
                                justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-300">
                {items.length}
              </span>)
            }
            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>
        {session ? (
          <Image
            src={
              // session.user&.image ||
              "https://www.gravatar"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
          //onClick={()=>singOut()}
          />
        )
          : (
            <UserIcon className="headerIcon" /> //onClick={() => signIn()}
          )}
      </div>
    </header>
  );
}

export default Header