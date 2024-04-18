function ProductItem() {
    return (
        <div className="shadow border rounded pb-4">
            <img src="https://cdn.nody.ir/files/2021/10/15/nody-%D8%A8%D9%87%D8%AA%D8%B1%DB%8C%D9%86-%D8%B9%DA%A9%D8%B3-%D8%B5%D9%81%D8%AD%D9%87-%D9%85%D9%88%D8%A8%D8%A7%DB%8C%D9%84-1634247622.jpg" />
            <div className="flex justify-between flex-row-reverse px-4 mt-2">
                <h3>عنوان محصول</h3>
                <span>33$</span>
            </div>
            <div className="px-4 mt-1 text-right">
                <p className="line-clamp-2">
                    این یک متن فارسی است.                این یک متن فارسی است.
                    این یک متن فارسی است.
                    این یک متن فارسی است.
                    این یک متن فارسی است.
                    این یک متن فارسی است.
                    این یک متن فارسی است.
                    این یک متن فارسی است.
                    این یک متن فارسی است.

                </p>
            </div>
        </div>
    )
}
export default ProductItem