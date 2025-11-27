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
import Logo from "../../../components/logo"
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
          <Button type="submit">Iniciar Sesion</Button>
        </Field>
        <FieldSeparator>o continúa con</FieldSeparator>
        <Field>
          <Button variant="outline" type="button">
            <GitHubLight className="size-5"/>
            GitHub
          </Button>
          <Button variant="outline" type="button">
            <Google className="size-5"/>
            Google
          </Button>
          <FieldDescription className="text-center">
            No tienes una cuenta?{" "}
            <a href="#" className="underline underline-offset-4">
              Registrate
            </a>
          </FieldDescription>
        </Field>
      </FieldGroup>
    </form>
  )
}
