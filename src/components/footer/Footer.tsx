import Link from 'next/link';
import React from 'react'
import { FiLinkedin, FiGithub, FiArchive } from "react-icons/fi";
type Props = {}

export default function Footer({ }: Props) {
  return (
    <footer className='w-full px-[1rem] xs:px-[1.5rem] md:px-[1.5rem] lg:px-[1rem] bg-gray-100 dark:bg-[#15202b]'>
      <div className='w-full max-w-[1200px] mx-auto pt-[1.25rem] flex flex-col items-center'>
        <Link href={"/"}>
          <span className='font-bold text-[1.5rem] text-gray-800 dark:text-gray-400'>
            Daves Eatery
          </span>
        </Link>
        <p className='w-full max-w-[450px] font-normal text-[0.875rem]'>
          A simple, accessible and fast food site to but your favourite food and snacks safely and
          efficiently.
        </p>
        <div className="flex items-center gap-5 mt-10">
          <a
            href="https://www.linkedin.com/in"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="stroke-black dark:stroke-blue-500" size={24} />
          </a>
          <a href="https://github.com/santosdave" target="_blank" rel="noreferrer">
            <FiGithub className="stroke-black dark:stroke-blue-500" size={24} />
          </a>
          <a href="https://profile.codersrank.io/user/santosdave" target="_blank" rel="noreferrer">
            <FiArchive className="stroke-black dark:stroke-blue-500" size={24} />
          </a>
        </div>
        <div className="w-full max-[1200px] mx-auto border-1 border-white border-opacity-[0.6] border-dashed mt-[7.5rem]"></div>

        <h3 className="font-normal text-[0.875rem] text-gray-800 dark:text-gray-400 text-center my-[1.875rem]">
          Copyright © 2023 All Rights Reserved. Developed by{" "}
          <strong className="font-semibold">WycliffeDev</strong>
        </h3>
      </div>
    </footer>
  )
}