import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

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

    if (product.id === undefined) return <Navigate to='/products' />

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

                {/* {<!-- Once you click in this button, the user should be redirected to the Basket page -->} */}
                <button>Add to basket</button>
            </div>
        </section>


    )
}


export default SingleProductDetails