import axios  from "axios";
const client =axios.create({
    baseURL:"http://localhost:8000",
})

export async function getProducts(){
    const {data}= await client("/product")
    return data
}

export async function getProduct(id){
    const {data}= await client(`/product/${id}`)
    return data
}