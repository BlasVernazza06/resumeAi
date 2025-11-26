// app/components/mobile-menu.tsx
"use client";

import { useMobileMenu } from "@/lib/context/mobile-menu-context";
import { ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { link: "/#features", label: "Features" },
  { link: "/#pricing", label: "Pricing" },
];

export default function MobileMenu() {
  const { open, setOpen } = useMobileMenu();

  // Prevenir scroll cuando el menú está abierto
 

  return (
    <nav className="absolute px-5 top-full left-0 right-0 bg-white shadow-lg border-t sm:hidden">
      {/* Links de navegación */}
      <ul className="flex flex-col pt-5">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.link}
              onClick={() => setOpen(false)}
              className="block px-6 py-2 text-gray-700 hover:bg-gray-50 hover:text-black transition-colors font-medium border-b last:border-b-0"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <div className="px-5 py-4">
        <Button 
          href={"/checkout"}
          className="w-full group transition-all duration-300 cursor-pointer items-center rounded-full"
        >
          <User className="size-5"/>
          <span>Inicia Sesion</span>
        </Button>
      </div>
    </nav>
  );
}