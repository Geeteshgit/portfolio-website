"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineDocumentText } from "react-icons/hi2";
import Link from "next/link";
import ShinyText from "../ShinyText";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["about", "profiles", "projects", "skills"];
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (item: string) => {
    const id = item.toLowerCase();

    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });

      setIsOpen(false);
      return;
    }

    router.push(`/#${id}`);
    setIsOpen(false);
  };

  const renderNavButtons = () =>
    navItems.map((item) => {
      return (
        <button
          key={item}
          type="button"
          onClick={() => scrollToSection(item)}
          className="group relative cursor-pointer text-xl tracking-widest transition-all duration-200 sm:text-sm
            after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0
            after:bg-primary after:transition-all after:duration-300
            after:content-[''] hover:after:w-full"
        >
          {item.toUpperCase()}
        </button>
      );
    });

  return (
    <header className="sticky top-0 z-999 w-full">
      <div className="w-full border-b border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-8 lg:px-16">
          {/* Mobile Header */}
          <nav className="relative md:hidden">
            <div className="flex h-15 items-center justify-between">
              {/* Logo */}
              <Link href="/" onClick={() => setIsOpen(false)}>
                <ShinyText
                  text="</geetesh>"
                  color="var(--foreground)"
                  shineColor="var(--primary)"
                  speed={2.5}
                  className="text-lg font-medium tracking-tight"
                />
              </Link>

              {/* Menu */}
              <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                className="cursor-pointer"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <RxCross2 size={24} /> : <IoMenu size={24} />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="flex w-full flex-col items-start gap-8 bg-background p-4">
                {renderNavButtons()}
                <ResumeButton setIsOpen={setIsOpen} />
              </div>
            )}
          </nav>

          {/* Desktop Header */}
          <nav className="hidden h-15 items-center justify-between md:flex">
            {/* Logo */}
            <Link href="/">
              <ShinyText
                text="</geetesh>"
                color="var(--foreground)"
                shineColor="var(--primary)"
                speed={2.5}
                className="text-lg font-medium tracking-tight"
              />
            </Link>

            {/* Navigation */}
            <div className="flex items-center gap-12">{renderNavButtons()}</div>

            {/* Resume */}
            <ResumeButton setIsOpen={setIsOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

const ResumeButton = ({
  setIsOpen,
}: {
  setIsOpen: (isOpen: boolean) => void;
}) => {
  return (
    <Link
      href="/resume"
      onClick={() => {
        setIsOpen(false);
      }}
      className="group flex items-center gap-2 rounded-xs border border-border p-2 transition-all duration-200 hover:border-primary/50 hover:text-primary"
    >
      <HiOutlineDocumentText size={18} />
      <span>Resume</span>
    </Link>
  );
};

export default Header;
