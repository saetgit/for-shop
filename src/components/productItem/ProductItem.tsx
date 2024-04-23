type ProductItem=Products
function ProductItem({title,price,description,image}:ProductItem) {
    return (
        <div className="shadow border rounded pb-4">
            <img className="h-20" src={image} />
            <div className="flex justify-between px-4 mt-2">
                <h3 className="font-bold line-clamp-1">{title}</h3>
                <span>{price}$</span>
            </div>
            <div className="px-4 mt-1 text-right">
                <p className="line-clamp-2">
                    {description}
                </p>
            </div>
        </div>
    )
}
export default ProductItem