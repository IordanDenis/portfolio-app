import "./ProductList.css"
import Product from "../Product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="prodlist">
            <div className="pl-texts">
                <h1 className="pl-title">Dream & create.</h1>
                <p className="pl-desc">
                    This is a work in progress.
                    In this section I will be posting some of the products, projects that I have been working on.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default ProductList
