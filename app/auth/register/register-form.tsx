// app/checkout/components/register-form.tsx
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

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <div className="flex items-center text-2xl font-bold">
            <span>
              Crear Cuenta
            </span>
          </div>
          <p className="text-muted-foreground text-sm text-balance">
            Ingresa tus datos para crear tu cuenta
          </p>
        </div>

        <Field>
          <FieldLabel htmlFor="name">Nombre Completo</FieldLabel>
          <Input 
            id="name" 
            type="text" 
            placeholder="Tu nombre" 
            required 
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input 
            id="email" 
            type="email" 
            placeholder="tucorreo@example.com" 
            required 
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="password">Contraseña</FieldLabel>
          <Input 
            id="password" 
            type="password" 
            placeholder="Mínimo 8 caracteres" 
            required 
          />
        </Field>

        <Field>
          <FieldLabel htmlFor="confirmPassword">Confirmar Contraseña</FieldLabel>
          <Input 
            id="confirmPassword" 
            type="password" 
            placeholder="Confirma tu contraseña" 
            required 
          />
        </Field>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms" className="cursor-pointer">
            Acepto los{" "}
            <a href="#" className="underline underline-offset-2 text-foreground hover:text-primary">
              términos y condiciones
            </a>
          </label>
        </div>
        
        <Field>
          <Button type="submit" className="w-full">Crear Cuenta</Button>
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