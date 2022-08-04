import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"


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
    const [category, setCategory] = useState<Category>({} as Category)
    const params = (useParams())


    useEffect(() => {
        fetch("http://localhost:4000/products")
            .then(resp => resp.json())
            .then((productsFromServer) => setProducts(productsFromServer))
    }, [])
    console.log(products)

    useEffect(() => {
        fetch(`http://localhost:4000/categories/${params.id}`)
            .then((resp) => resp.json())
            .then((categoryFromServer) => setCategory(categoryFromServer))
    }, [])



    let categoryProducts = products.filter(product => product.categoryId === category.id)


    return (

        <div className="products-container">
            <ul className="products-container__list">
                {categoryProducts.map((product) => (
                    <Link to={`/products/${product.id}`} key={product.id}>
                        <li key={product.id} className="product-item">
                            <img src={product.image} alt="product" />
                            <h3>{product.title}</h3>

                        </li>
                    </Link>
                ))}

            </ul>

        </div>

    )
}


export default CategoryItem