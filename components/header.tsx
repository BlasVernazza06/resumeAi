// app/components/header.tsx  (SERVER COMPONENT)
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import MobileMenuButton from "./mobile-menu-button";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";

const navLinks = [
  { link: "/#features", label: "Features" },
  { link: "/#pricing", label: "Pricing" },
];

export default function Header() {
  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md ">
      <div className="max-w-4xl mx-auto w-full p-4 px-6 sm:px-10 flex items-center justify-between">
        
        <Logo/>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-7">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.link}
              className="hover:bg-muted cursor-pointer rounded-lg p-2 transition-colors"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* Try button */}
        <Link 
          href="/checkout"
          className="hidden sm:flex group transition-all duration-300 cursor-pointer items-center gap-2 btn-primary px-3 py-2 rounded-lg"
        >
          <p className="text-white text-sm">Try resumeAi</p>
          <ArrowRight className="size-5 sm:size-4 text-white group-hover:translate-x-1 transition-all duration-200" />
        </Link>

        {/* Mobile button (client component) */}
        <div className="sm:hidden">
          <MobileMenuButton />
        </div>
      </div>
      
      {/* Mobile menu */}
      <MobileMenu />
    </header>
  );
}