export interface product{
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string,
    category:{
        id: number,
        name: string,
        image: string,
    }
    
    images: string [],
}