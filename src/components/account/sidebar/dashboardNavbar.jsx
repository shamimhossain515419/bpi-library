'use client';
import { GlobalContext } from '@/AuthProvider/AuthProvider';
import { toggle } from '@/redux/features/sidebarToggle/sidebarToggleSlice';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../../assets/logo.png';

const DashboardNavbar = () => {
  const dispatch = useDispatch();
  const { user } = useContext(GlobalContext);
  const { value } = useSelector(state => state.sidebarToggle);
  return (
    <div className="   ">
      <header className="border-b-1     fixed top-0   z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 ">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <Link
              href={'/account'}
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            >
              <Link href="/">
                {' '}
                <Image
                  width={80}
                  height={80}
                  src={logo}
                  className="  block   w-full   h-full"
                  alt="image"
                />{' '}
              </Link>
            </Link>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                value
                  ? 'visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 '
                  : ''
              }
            `}
              onClick={() => dispatch(toggle())}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute  hidden  top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                value ? 'visible opacity-100 backdrop-blur-sm' : ''
              }`}
            >
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/"
                >
                  <span>Home</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex items-center gap-2 py-4 0 transition-colors duration-300 hover:text-emerald-600 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/all-books"
                >
                  <span>All books</span>
                </Link>
              </li>
              <li role="none" className="flex items-stretch">
                <Link
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="/about"
                >
                  <span>About Us</span>
                </Link>
              </li>
            </ul>
            <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
              <a
                href="#"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <Image
                  src={user?.photoURL}
                  alt="user name"
                  title={user?.displayName}
                  width={70}
                  height={70}
                  className="max-w-full rounded-full"
                />
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
                  <span className="sr-only"> 7 new emails </span>
                </span>
              </a>
              {/*        <!-- End Avatar --> */}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default DashboardNavbar;
