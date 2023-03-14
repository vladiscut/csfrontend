import Image from "next/image"
import React, { Component, useState } from "react";
import Plx from "react-plx";
import Button from "./Button";
import Link from "next/link";
import Navbar from "./Navbar";

interface Props {
    categories: Category[];
}

function Landing({ categories }: Props) {
    const parallaxData = [
        {
            start: 0,
            end: 700,
            // startOffset:-50,
            properties: [
                {
                    startValue: 0,
                    endValue: 700,
                    property: "translateY",
                },
                {
                    startValue: 0,
                    endValue: 175,
                    property: "translateX",
                },
                {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                },
            ],
        },
    ];
    const parallaxData2 = [
        {
            start: 0,
            end: 700,
            // startOffset:-50,
            properties: [
                {
                    startValue: 0,
                    endValue: 700,
                    property: "translateY",
                },
                {
                    startValue: 0,
                    endValue: 100,
                    property: "translateX",
                },
                {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                },
            ],
        },
    ];
    const parallaxData3 = [
        {
            start: 0,
            end: 700,
            // startOffset:-50,
            properties: [
                {
                    startValue: 0,
                    endValue: 700,
                    property: "translateY",
                },
                {
                    startValue: 0,
                    endValue: -175,
                    property: "translateX",
                },
                {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                },
            ],
        },
    ];
    const parallaxData4 = [
        {
            start: 0,
            end: 700,
            // startOffset:-50,
            properties: [
                {
                    startValue: 0,
                    endValue: 700,
                    property: "translateY",
                },
                {
                    startValue: 0,
                    endValue: 200,
                    property: "translateX",
                },
                {
                    startValue: 0,
                    endValue: 360,
                    property: "rotate",
                },
            ],
        },
    ];
    return (
        <section className="sticky top-0 mx-auto flex min-h-screen max-w-[1350px] items-center justify-between px-10">
            <div className='space-y-8'>
                <h1 className='space-y-1 text-5xl font-semibold tracking-wide xl:text-6xl'>
                    <span className='block pb-2 bg-gradient-to-r from-red-600 to-black bg-clip-text text-transparent'>Лучшие цены</span>
                    <span className='block pb-2 text-red-900'>на модные вещи</span>
                    <span className='block pb-2 bg-gradient-to-b from-red-600 to-black bg-clip-text text-transparent'>Crossale</span>
                </h1>
                <div className="space-x-5">
                    <Button title="SALE 🔥" />
                    {/* <button className='link' onClick={toggleFullScreen}>Каталог 📖</button> */}
                    <Navbar>
                        <div className="dropdown">
                            <ul className="dropdown-content">
                                {categories.map((category) => <li className="dropdown__item"><Link href={`/category/${category.slug}`}>{category.name}</Link></li>)}
                                {/* <li className="dropdown__item"></li> */}
                            </ul>
                        </div>
                    </Navbar>
                </div>
            </div>
            <div className='hidden pr-6 xl:pr-0 md:grid md:grid-cols-4 h-[350px] w-[350px] xl:w-[550px] transition-all duration-500 lg:grid lg:grid-cols-4 lg:h-[350px]'>
                <div>
                </div>
                <div>
                    <Plx className="MyAwesomeParallax" parallaxData={parallaxData2}>
                        <div className='relative h-[125px] w-[125px] transiton-all duration-500
                    lg:h-[125px] lg:w-[125px] xl:h-[125px] xl:w-[125px]'>
                            <Image alt='img' className="absolute" src="/landingimgs/hoodie.png" fill />
                        </div>
                    </Plx>
                </div>
                <div>
                </div>
                <div>
                    <Plx className="MyAwesomeParallax" parallaxData={parallaxData3}>
                        <div className='relative h-[125px] w-[125px] transiton-all duration-500
                    lg:h-[125px] lg:w-[125px] xl:h-[125px] xl:w-[125px]'>
                            <Image alt='img' className="absolute" src="/landingImgs/shoes_bape_bg.jpg.png" fill />
                        </div>
                    </Plx>
                </div>
                <div>
                    <Plx className="MyAwesomeParallax" parallaxData={parallaxData4}>
                        <div className='relative h-[125px] w-[125px] transiton-all duration-500
                    lg:h-[125px] lg:w-[125px] xl:h-[125px] xl:w-[125px]'>
                            <Image alt='img' className="absolute" src="/landingImgs/shoe_nike.png" fill />
                        </div>
                    </Plx>
                </div>
                <div>
                </div>
                <div>
                    <Plx className="MyAwesomeParallax" parallaxData={parallaxData}>
                        <div className='relative h-[125px] w-[125px] transiton-all duration-500
                    lg:h-[125px] lg:w-[125px] xl:h-[125px] xl:w-[125px]'>
                            <Image alt='img' className="absolute" src="/landingImgs/joystick.png" fill />
                        </div>
                    </Plx>
                </div>
                <div>
                </div>
                <div>
                </div>
            </div>
        </section>
    );
}

export default Landing