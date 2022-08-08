import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

type Product = {
    id: number
    title: string
    price: number
    description: string
    categoryId: number
    image: string
}




function Products() {



    const [products, setProducts] = useState<Product[]>([]);


    useEffect(() => {
        fetch('')
            .then(resp => resp.json())
            .then(productsFromServer => setProducts(productsFromServer))

    }, [])



    return (
        <div className="products-container">
            <ul className="products-container__list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        <Link to={`/products/${product.id}`} >
                            <img src={product.image} />
                            <h3>{product.title}</h3>
                        </Link>
                    </li>

                ))}
            </ul>
        </div >

    )
}

export default Products