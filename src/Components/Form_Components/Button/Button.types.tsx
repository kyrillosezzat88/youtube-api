import { MouseEvent, ReactNode } from "react"

export type ButtonPorps = {
    type:"submit" | "button",
    icon:ReactNode,
    onClick?:(e:MouseEvent<HTMLButtonElement>) => void,
    className?:string
}