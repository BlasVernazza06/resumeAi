// app/components/mobile-menu-context.tsx
"use client";

import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext(null);

export function MobileMenuProvider({ children }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <MobileMenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export const useMobileMenu = () => useContext(MobileMenuContext);
