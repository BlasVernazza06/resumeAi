// app/checkout/components/login-form.tsx
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { GitHubLight, Google } from "@ridemountainpig/svgl-react"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center text-2xl font-bold">
            <span>
              Acceder a la App
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-balance">
            Ingresa el email con el que vas a acceder
          </p>
        </div>
        
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input id="email" type="email" placeholder="tucorreo@example.com" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Contraseña</FieldLabel>
          <Input id="password" type="password" placeholder="Tu contraseña" required />
        </Field>

        <div className="flex justify-between items-center text-xs">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" />
            <span>Recuerda mi contraseña</span>
          </label>
          <a href="#" className="underline underline-offset-2 text-primary hover:text-primary/80">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        
        <Field>
          <Button type="submit" className="w-full">Iniciar Sesión</Button>
        </Field>

        <FieldSeparator>o continúa con</FieldSeparator>

        <Field>
          <Button variant="outline" type="button" className="w-full">
            <GitHubLight className="size-5"/>
            GitHub
          </Button>
          <Button variant="outline" type="button" className="w-full">
            <Google className="size-5"/>
            Google
          </Button>
        </Field>
      </FieldGroup>
    </form>
  )
}