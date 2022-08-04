import { useState } from "react"


type Product = {
    id: number
    title: string
    price: number
    description: string
    categoryId: number
    image: string
}
type Category = {
    id: number
    image: string
}

function CategoryItem() {


    const [products, setProducts] = useState<Product[]>([])
    const [categories, setCategories] = useState<Category[]>([])
    return (
       


    )
}


export default CategoryItem