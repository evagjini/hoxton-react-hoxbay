import { useEffect, useState } from "react"
import { Link, Navigate, useParams } from "react-router-dom"

type Product = {
    id: number
    title: string
    price: number
    description: string
    categoryId: number
    image: string
}


function SingleProductDetails() {


    const [product, setProduct] = useState<null | Product>(null)
    const [basket, setBasket] = useState<Product[]>([])
    const params = useParams()


    useEffect(() => {

        fetch(`http://localhost:4000/products/${params.id}`)
            .then(resp => resp.json())
            .then(productFromServer => setProduct(productFromServer))
    }, [])


    if (product === null)
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )

    if (product.id === undefined) return <Navigate to='/home' />

    return (
        <section className="product-detail main-wrapper">
            <img
                src={product.image}
                alt={product.title}

            />

            <div className="product-detail__side" >
                <h3></h3>
                <h2>{product.title}</h2>
                <p>
                    {product.description}
                </p>

                <p> £{product.price}</p>

                < Link to={`/basket`}>


                    <button onClick={() => {
                        fetch(`http:localhost:4000/basket`, {
                            method: 'POST',
                            headers: {
                                "Content - type": "application/json"
                            },
                            body: JSON.stringify({
                                productId: product.id,
                                quantity: 1,
                                image: product.image,
                                title: product.title,
                                price: product.price.toFixed(2)


                            })
                        })
                            .then((resp) => resp.json())
                            .then(product => setBasket([...basket, product]))
                    }}>Add to basket</button>
                </Link>
            </div>
        </section>


    )
}


export default SingleProductDetails