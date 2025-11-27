import { auth } from "@/lib/auth/auth";
import { redirect } from "next/navigation";


export const signUp = async (email: string, password: string, name: string) => {
    const result = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            callbackURL: "/dashboard"
        },
    });

    return result;
};

export const signIn = async (email: string, password: string) => {
    const result = await auth.api.signInEmail({
        body: {
            email,
            password,
            callbackURL: "/dashboard"
        },
    });

    return result;
};

export const signInWithSocial = async (provider: string) => {
    const {url} = await auth.api.signInSocial({
        body: {
            provider,
            callbackURL: "/dashboard"
        },
    });

    if(url){
        redirect(url)
    }
};

