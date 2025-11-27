// app/checkout/components/auth-form.tsx
'use client'

import { useState } from "react";
import { LoginForm } from "@/app/auth/login/login-form";
import { RegisterForm } from "@/app/auth/register/register-form";
import { cn } from "@/lib/utils";

export function AuthForm() {
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Tabs */}
      <div className="flex gap-2 bg-muted rounded-lg p-1">
        <button
          onClick={() => setAuthMode('login')}
          className={cn(
            "flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200",
            authMode === 'login'
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => setAuthMode('register')}
          className={cn(
            "flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors duration-200",
            authMode === 'register'
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          Registrarse
        </button>
      </div>

      {/* Forms */}
      <div className="min-h-[400px]">
        {authMode === 'login' ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}