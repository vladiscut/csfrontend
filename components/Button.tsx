import React from 'react'

interface Props{
    title:string;
    onClick?: () => void;
    width?:string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

function  Button({ title, onClick, width, loading, padding, noIcon }: Props) {
  return (
    <button
      className={`relative px-5 py-3 overflow-hidden font-medium ${
        width ? width : "w-auto"
      } ${padding} cursor-pointer items-center justify-center  text-red-900 bg-[#E7ECEE] border border-gray-100 rounded-lg shadow-inner group transition-all duration-300 focus:outline-none`}
      onClick={onClick}
    >
      <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
      <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>

      <span className="relative font-bold text-xl transition-colors duration-300 delay-200 group-hover:text-white ease">
        {noIcon && (
          <svg
            className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        )}
        {loading ? "Loading..." : title}
      </span>
    </button>
  )
}

export default Button