import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


type Category = {
    id: number
    name: string

}
function Categories() {

    const [categories, setCategories] = useState<Category[]>([])


    useEffect(() => {
        fetch('http://localhost:4000/categories')
            .then(resp => resp.json())
            .then((categoriesFromServer) => setCategories(categoriesFromServer))

    }
    )
    return (
        <div className="categories-container">
            <ul className="categories-container__list">
                {categories.map((category) => (
                    <li >
                        <Link to={`/categories/${category.id}`}></Link>
                        <a> {category.name} </a>
                    </li>

                ))}

            </ul>

        </div>


    )
}
export default Categories