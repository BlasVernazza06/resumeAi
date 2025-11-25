// app/components/mobile-menu-button.tsx
"use client";

import { Menu } from "lucide-react";
import { useMobileMenu } from "@/lib/context/mobile-menu-context";

export default function MobileMenuButton() {
  const { setOpen, open } = useMobileMenu();

  return (
    <button
      onClick={() => setOpen(!open)}
      className="p-2 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200"
      aria-label="Abrir menú"
    >
      <Menu className="size-5 text-gray-700" />
    </button>
  );
}