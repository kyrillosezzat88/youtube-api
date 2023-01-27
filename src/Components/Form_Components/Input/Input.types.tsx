import{ ChangeEvent, ReactNode } from "react"

export type InputProps = {
    term:string,
    placeholder:string,
    onChange:(e:ChangeEvent<HTMLInputElement>) => void,
    size:"lg" | "md" | "sm",
    icon?:ReactNode
}