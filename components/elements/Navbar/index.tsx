"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";
import { NavbarItem } from "./const";
import { useState } from "react";
import Image from "~/lib/image";

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className="fixed top-0 left-0 z-100 flex h-20 w-full items-center justify-between bg-[#f8f4ff] px-8 py-2 shadow-[0_2px_8px_rgba(28,10,62,0.08)] xl:grid xl:h-24 xl:grid-cols-[96px_1fr_96px] xl:px-12">
      <Link className="relative aspect-square w-12 xl:w-16" href="/ambassador">
        <Image
          alt="Logo"
          className="h-full w-full"
          imageClassName="object-contain"
          src="/design-system/logo-no-bg.svg"
        />
      </Link>
      <div className="hidden items-center justify-center gap-8 xl:flex">
        {NavbarItem.map((item) => (
          <Link
            aria-disabled={item.disabled}
            className={`flex items-center gap-1 whitespace-nowrap transition-colors ${
              item.disabled
                ? "cursor-not-allowed text-neutral-500"
                : pathname === item.link
                  ? "text-tertiary-70"
                  : "text-primary-80 hover:text-primary-40"
            }`}
            href={item.disabled ? "#" : item.link}
            key={item.name}
            onClick={(event) => item.disabled && event.preventDefault()}
          >
            <item.icon className="size-[18px] stroke-2" />
            <span className="font-aileron text-[14px] leading-5 font-bold">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <Link className="hidden justify-self-end xl:block" href="/login">
        <Button
          className="h-12 w-20 min-w-0 px-4 text-[14px]"
          variant="primary"
        >
          Login
        </Button>
      </Link>
      <button
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
        className="bg-primary-10 text-primary-60 flex size-[42px] items-center justify-center rounded-lg border-0 xl:hidden"
        onClick={toggleMenu}
        type="button"
      >
        <div
          className={`relative flex flex-col justify-center ${
            isMenuOpen ? "items-center" : "items-end"
          } transition-colors`}
        >
          <span
            className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${isMenuOpen ? "translate-y-0.5 rotate-45" : "-translate-y-1"}`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-current transition-opacity ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${isMenuOpen ? "-translate-y-0.5 -rotate-45" : "translate-y-1"}`}
          />
        </div>
      </button>

      <div
        className={`absolute top-20 right-4 flex w-[220px] origin-top-right flex-col gap-2 rounded-xl bg-[#f8f4ff] p-4 shadow-xl transition-all duration-200 xl:hidden ${
          isMenuOpen
            ? "scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        {NavbarItem.map((item) => (
          <Link
            aria-disabled={item.disabled}
            className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[14px] font-bold ${
              item.disabled
                ? "cursor-not-allowed text-neutral-500"
                : pathname === item.link
                  ? "bg-tertiary-10 text-tertiary-70"
                  : "text-primary-80"
            }`}
            href={item.disabled ? "#" : item.link}
            key={item.name}
            onClick={(event) => {
              if (item.disabled) event.preventDefault();
              else setIsMenuOpen(false);
            }}
          >
            <item.icon className="size-4 stroke-2" />
            <span>{item.name}</span>
          </Link>
        ))}
        <Link href="/login" onClick={() => setIsMenuOpen(false)}>
          <Button className="mt-1" variant="primary">
            Login
          </Button>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
