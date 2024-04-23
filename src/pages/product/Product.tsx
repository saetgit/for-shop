import Button from "../../components/button/Button"
import Container from "../../components/container/Container"

function Product() {
    return (
        <div>
            <Container>
                <div className="h-96 shadow mt-4 grid grid-cols-12">
                    <div className="col-span-10 p-4">
                        <h1 className="text-right">عنوان محصول</h1>
                        <div>
                            <p className="text-right">قیمت: ۲۵﷼</p>
                            <p className="text-right">
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.
                                این متن فارسی است.

                            </p>

                        </div>
                    </div>
                    <div className="bg-blue-400 col-span-2">
                        <img className="rounded" src="https://cdn.nody.ir/files/2021/10/15/nody-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%B9%DA%A9%D8%B3-%D8%B5%D9%81%D8%AD%D9%87-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-1634247622.jpg" />
                    </div>
                    <Button variant="primary" onClick={()=>{alert("sara jooooooon")}} className="btn-info" >
                        Add to Cart
                    </Button>
                </div>
            </Container>

        </div>
    )
}
export default Product