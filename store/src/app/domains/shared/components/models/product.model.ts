export interface product{
    id: number,
    title: string,
    price: number,
    category:{
        id: number,
        name: string,
        image: string,
    }
    images: string [],
    creationAt: string,
}