import { Link } from "react-router-dom"
import Container from "../../components/container/Container"
import ProductItem from "../../components/productItem/ProductItem"

function Store() {
    return (
        <div>
            <Container>
                <h1 className="text-right mt-5">جدید ترین محصولات</h1>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <Link to={`/product/${1}`}>
                    <ProductItem />
                    </Link>
                </div>
            </Container>
        </div>
    )
}
export default Store