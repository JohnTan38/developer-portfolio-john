"use client";
// @flow strict
import Link from "next/link";
import ThemeToggle from "./theme/theme-toggle";

function Navbar() {
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" className=" text-theme-accent text-3xl font-bold">
            John Tan
          </Link>
        </div>

        <ul
          className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:items-center md:space-x-1 md:border-0 md:opacity-100"
          id="navbar-default"
        >
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/#about"
            >
              <div className="text-sm text-theme-primary transition-colors duration-300 hover:text-theme-accent">
                ABOUT
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/experience-skills#experience"
            >
              <div className="text-sm text-theme-primary transition-colors duration-300 hover:text-theme-accent">
                EXPERIENCE
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/experience-skills#skills"
            >
              <div className="text-sm text-theme-primary transition-colors duration-300 hover:text-theme-accent">
                SKILLS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/projects#projects"
            >
              <div className="text-sm text-theme-primary transition-colors duration-300 hover:text-theme-accent">
                PROJECTS
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/education-contact#education"
            >
              <div className="text-sm text-theme-primary transition-colors duration-300 hover:text-theme-accent">
                EDUCATION
              </div>
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 no-underline outline-none hover:no-underline"
              href="/education-contact#contact"
            >
              <div className="text-sm text-theme-primary transition-colors duration-300 hover:text-theme-accent">
                CONTACT
              </div>
            </Link>
          </li>
          <li className="px-4 py-2">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
