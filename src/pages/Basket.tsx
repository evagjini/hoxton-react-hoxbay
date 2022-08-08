import { useEffect, useState } from "react"


type itemInBasket = {
    id: number
    title: string
    price: number
    description: string
    categoryId: number
    image: string
    quantity: number
}



function Basket() {
    const [basket, setBasket] = useState<itemInBasket[]>([]);


    useEffect(() => {
        fetch('http://localhost:4000/basket')
            .then(resp => resp.json())
            .then((basketFromServer) => setBasket(basketFromServer))

    }), []

    function getTotalPrice() {
        let total = 0
        for (const item of basket) {
            total += item.quantity * item.price
        }
        return total.toFixed(2)
    }



    return (
        <div className="basket-container">
            <h2>Your Basket</h2>
            <ul>
                {basket.map((product: any) => (
                    <li key={product.id}>
                        <div className="basket-container__item">
                            <img
                                src={product.image}
                                width="90"
                            />
                            <p>{product.title}</p>

                            Qty:
                            <select
                                value={product.quantity}
                                onChange={(event) => {
                                    fetch(`http://localhost:4000/basket/${product.id}`, {
                                        method: "PATCH",
                                        headers: {
                                            "Conent-Type": "application/json",
                                        },
                                        body: JSON.stringify({
                                            quantity: Number(event.target.value)
                                        }),

                                    })
                                        .then((resp) => resp.json())
                                        .then((itemInBasket) => {
                                            let basketCopy = structuredClone(basket)
                                            let product = basketCopy.find(item => item.id === itemInBasket.id)
                                            product.quantity = itemInBasket
                                            setBasket(basketCopy)
                                        })

                                }
                                }
                            >

                            </select>


                            <p>Item total : £${(product.price * product.quantity)}.toFixed(2)</p>
                        </div>
                    </li>

                ))}

            </ul>

            <h3>Your total: ${getTotalPrice()}</h3>
        </div>
    );

}
export default Basket

