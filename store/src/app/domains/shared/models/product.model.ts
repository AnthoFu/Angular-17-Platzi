import { category } from "./category.model";

export interface product{
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string,
    category: category
    images: string [],
}