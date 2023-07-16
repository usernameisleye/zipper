import { Dispatch, SetStateAction } from "react"

export interface Options {
    key: string
    value: string
}

export interface FilterProps {
    title: string
    options: Options[]
    filter?: Dispatch<SetStateAction<Options|string>>
}

export interface Products {
    id: number
    title: string
    brand: string
    description: string
    thumbnail: string
    price: number
    rating: number
    stock: number
} 