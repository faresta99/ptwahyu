"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaMoon, FaSun } from 'react-icons/fa';
import Image from 'next/image';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-[#0074D9] dark:bg-[#001f3f] shadow">
      <div className="mx-auto px-4 lg:px-10">
        <div className="flex justify-between items-center h-16">
          {/* Left Section: Logo dan Nama Perusahaan */}
          <div className="flex items-center">
            <Image className="h-8 w-8" src="/logo.png" alt="Logo Perusahaan" width={100} height={100} />
            <span className="ml-2 font-bold text-xl text-white dark:text-[#FF914D]">
              PT. SFI
            </span>
          </div>

          {/* Center Section: Menu Navigasi (Desktop) */}
          <div className="hidden sm:flex sm:space-x-8">
            {['Home', 'About', 'Product', 'Karir', 'Blog', 'Contact'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="text-white dark:text-[#FF914D] hover:bg-[#0056b3] dark:hover:bg-[#003366] px-3 py-2 rounded-md text-sm font-medium">
                {item}
              </Link>
            ))}
          </div>

          {/* Right Section: Dark Mode & Login */}
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-white dark:text-[#FF914D] hover:bg-[#0056b3] dark:hover:bg-[#003366]"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <Link href="/login" className="ml-4 bg-[#FFC107] dark:bg-[#FF914D] text-[#0074D9] dark:text-white px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
