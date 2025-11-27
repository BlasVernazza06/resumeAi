// app/components/header.tsx  (SERVER COMPONENT)
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";
import MobileMenuButton from "./mobile-menu-button";
import MobileMenu from "./mobile-menu";
import Logo from "./logo";
import { Button } from "./ui/button";

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
              className="hover:bg-gray-200 border border-transparent hover:border-gray-300 duration-150 cursor-pointer rounded-lg p-2 transition-colors"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/checkout" className="hidden sm:block">
          <Button 
            className="group transition-all duration-300 cursor-pointer items-center rounded-full gap-2 flex"
          >
            <Zap className="size-4"/>
            <span>Comenzar</span>
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform"/>
          </Button>
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