import Link from "next/link";

export default function Navigation() {
  const links = [
    { link: "Projects", href: "/" },
    { link: "Members", href: "/" },
  ];
  return (
    <main>
      <nav className="flex justify-between items-center">
        <div>
          <Link href="/" className="cursor-pointer">
            <h1 className="text-white text-[1.75rem] tracking-[-0.1rem] FontMedium">
              Clamp Company
            </h1>
          </Link>
        </div>
        <div className="flex items-center">
          <div className="hidden items-center gap-3.5 md:flex">
            {links.map((item, idx) => (
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
          <div className="md:hidden block">
            <button className="PrimaryButton ">
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
          </div>
        </div>
      </nav>
    </main>
  );
}
