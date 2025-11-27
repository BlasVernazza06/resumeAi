import { NextResponse } from "next/server"

const protectedRoutes = [
    "/dashboard",
];

const authPages = [
    "/checkout"
]

export async function middleware(req){    
}