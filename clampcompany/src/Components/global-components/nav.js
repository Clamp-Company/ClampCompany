"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const desktopLinks = [
    { link: "Projects", href: "/" },
    { link: "Members", href: "/" },
  ];
  const mobileLinks = [
    { link: "Projects", href: "/" },
    { link: "Members", href: "/" },
  ];
  return (
    <main>
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="cursor-pointer">
            <h1 className="text-white text-[1.76rem] tracking-[-0.1rem] FontMedium">
              Clamp Company
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden items-center gap-3.5 sm:flex">
            {desktopLinks.map((item, idx) => (
              <Link key={idx} href={item.href} className="WhiteLinkButton">
                <p>{item.link}</p>
              </Link>
            ))}
            <button className="PrimaryButton">
              Contact us{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M5.83325 5.83331H14.1666V14.1666"
                  stroke="black"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.83325 14.1666L14.1666 5.83331"
                  stroke="black"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="sm:hidden block">
            {menuOpen ? (
              <button
                className="PrimaryButton "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Close{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            ) : (
              <button
                className="PrimaryButton "
                onClick={() => setMenuOpen(!menuOpen)}
              >
                Menu{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu-icon lucide-menu"
                >
                  <path d="M4 5h16" />
                  <path d="M4 12h16" />
                  <path d="M4 19h16" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col gap-1.5 fixed bottom-5 left-0 right-0 w-full max-w-full overflow-x-hidden px-5 sm:px-5">
          <div className="bg-[#1C1B1B] w-full flex-1 p-5 rounded-[8px] overflow-x-auto">
            <nav className="px-3.5 mb-3.5 flex items-center gap-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                viewBox="0 0 12 12"
                fill="none"
              >
                <rect x="5.4375" width="1.125" height="12" fill="#16DB65" />
                <rect
                  x="12"
                  y="5.4375"
                  width="1.125"
                  height="12"
                  transform="rotate(90 12 5.4375)"
                  fill="#16DB65"
                />
                <rect
                  x="10.6406"
                  y="9.84485"
                  width="1.125"
                  height="12"
                  transform="rotate(135 10.6406 9.84485)"
                  fill="#16DB65"
                />
                <rect
                  x="2.15527"
                  y="10.6403"
                  width="1.125"
                  height="12"
                  transform="rotate(-135 2.15527 10.6403)"
                  fill="#16DB65"
                />
              </svg>
              <h1 className="text-[12px] text-[#A8ADB2]">Navigation</h1>
            </nav>
            {mobileLinks.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <p className="group flex items-center active:scale-[95%] duration-100 ease-in-out justify-between text-white text-[18px] rounded-[8px] hover:text-[#16DB65] py-2 px-3.5 hover:bg-[rgba(22,219,101,0.15)]">
                  {item.link}
                  <svg
                    className="transition-colors duration-75 group-hover:text-[#16DB65]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4.66675 4.66669H11.3334V11.3334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.66675 11.3334L11.3334 4.66669"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </p>
              </Link>
            ))}{" "}
          </div>
          <div className="flex gap-1.5 w-full max-w-full">
            <div className="bg-[#1C1B1B] flex gap-1.5 p-5 rounded-[8px] min-w-0 overflow-x-auto">
              <div className="p-2 bg-[rgba(77,163,255,0.15)] w-fit rounded-full flex items-center justify-center">
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    width="24"
                    height="24"
                    className="aspect-square"
                    fill="none"
                  >
                    <path
                      d="M10.6667 5.33331C11.7276 5.33331 12.745 5.75474 13.4952 6.50489C14.2453 7.25503 14.6667 8.27245 14.6667 9.33331V14H12.0001V9.33331C12.0001 8.97969 11.8596 8.64055 11.6096 8.3905C11.3595 8.14046 11.0204 7.99998 10.6667 7.99998C10.3131 7.99998 9.97399 8.14046 9.72394 8.3905C9.47389 8.64055 9.33341 8.97969 9.33341 9.33331V14H6.66675V9.33331C6.66675 8.27245 7.08818 7.25503 7.83832 6.50489C8.58847 5.75474 9.60588 5.33331 10.6667 5.33331Z"
                      stroke="#4DA3FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.99992 6H1.33325V14H3.99992V6Z"
                      stroke="#4DA3FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2.66659 3.99998C3.40297 3.99998 3.99992 3.40303 3.99992 2.66665C3.99992 1.93027 3.40297 1.33331 2.66659 1.33331C1.93021 1.33331 1.33325 1.93027 1.33325 2.66665C1.33325 3.40303 1.93021 3.99998 2.66659 3.99998Z"
                      stroke="#4DA3FF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="p-2 bg-[rgba(138,79,255,0.15)] w-fit rounded-full flex items-center justify-center">
                <Link href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="24"
                    height="24"
                    className="aspect-square"
                    fill="none"
                  >
                    <path
                      d="M14.1667 1.66669H5.83341C3.53223 1.66669 1.66675 3.53217 1.66675 5.83335V14.1667C1.66675 16.4679 3.53223 18.3334 5.83341 18.3334H14.1667C16.4679 18.3334 18.3334 16.4679 18.3334 14.1667V5.83335C18.3334 3.53217 16.4679 1.66669 14.1667 1.66669Z"
                      stroke="#8A4FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M13.3333 9.47501C13.4361 10.1685 13.3176 10.8769 12.9947 11.4992C12.6718 12.1215 12.1609 12.6262 11.5346 12.9414C10.9083 13.2566 10.1986 13.3663 9.50641 13.255C8.81419 13.1436 8.17472 12.8167 7.67895 12.321C7.18318 11.8252 6.85636 11.1857 6.74497 10.4935C6.63359 9.8013 6.74331 9.09159 7.05852 8.46532C7.37374 7.83905 7.87841 7.32812 8.50074 7.00521C9.12307 6.68229 9.83138 6.56383 10.5249 6.66667C11.2324 6.77158 11.8873 7.10123 12.393 7.60693C12.8987 8.11263 13.2283 8.76757 13.3333 9.47501Z"
                      stroke="#8A4FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.5833 5.41669H14.5916"
                      stroke="#8A4FFF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="bg-[#1C1B1B] flex-1 p-5 rounded-[8px] min-w-0 overflow-x-auto">
              <button className="PrimaryButton w-full">
                Contact us{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.83325 5.83331H14.1666V14.1666"
                    stroke="black"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.83325 14.1666L14.1666 5.83331"
                    stroke="black"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>{" "}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
