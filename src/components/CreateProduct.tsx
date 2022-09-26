import axios from "axios"
import { useState } from "react"
import { IProduct } from "../models"
import { ErrorMessage } from "./ErrorMessage"

const productData : IProduct =  {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating:{
        rate: 5,
        count: 12
    }
}

interface CreateProductProps{
    onCreate : (product : IProduct) => void
}

export const CreateProduct = ({onCreate} : CreateProductProps)=>{

    const [value, setValue] = useState("")
    const [error, setError] = useState("")

    const submitHandler = async (event:React.FormEvent)=>{
        event.preventDefault()

        setError("")

        if(value.trim().length === 0){
            setError("Enter valid title!")
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)
        
        setValue("")
        onCreate(response.data)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" onChange={event => setValue(event.target.value)} value={value} placeholder="Enter product title..." className="border py-2 px-4 mb-2 mt-2 w-full rounded outline-0" />
            {error && <ErrorMessage error={error}/>}
            <button type="submit" className="py-2 px-4 border rounded bg-yellow-400 mx-auto block hover:text-white">Create</button>
        </form>
    )
}