import axios, { AxiosError } from "axios"
import { useEffect, useState } from "react"
import { IProduct } from "../models"

export function useProducts(){
    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    function addProduct(product : IProduct){
      setProducts(products => [...products, product])
    }
  
    async function fetchProduct() {
      try{
        setError("")
        setLoading(true)
        const response = await axios.get<IProduct[]>("https://fakestoreapi.com/products")
        setProducts(response.data)
        setLoading(false)
      }catch(e:unknown){
        const error = e as AxiosError
        setLoading(false)
        setError(error.message)
      }
    }
  
    useEffect(()=>{
      fetchProduct()
    }, [])  

    return {products, error, loading, addProduct}
}