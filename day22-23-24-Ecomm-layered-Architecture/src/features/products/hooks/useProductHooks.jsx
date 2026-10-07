import { useQuery } from "@tanstack/react-query"
import {getAllProductsApi, getProductByCategory, getProductsCategories} from "../api/productApi"
import { useEffect, useState } from "react";

export  const useAllProduct = ( )=> {
    const [search, setSearch] = useState(null);
    const [debounceSearch, setDebounceSearch] = useState(null)

    
useEffect(() => {
   let timeout= setTimeout(()=> {
    setDebounceSearch(search);
    },1000);
    return ()=>  clearTimeout(timeout)
},[search])


    let {data, isPending, error} = useQuery({
        queryKey: ["products",debounceSearch],
        queryFn: () => getAllProductsApi(debounceSearch),
    });

    console.log("product data", data);
    return {
        data,
        isPending,
        error,
        search,
        setSearch,
    };
 };


 export const useAllCategories = ()=> {
    return useQuery({
        queryKey:["AllCategories"],
        queryFn: getProductsCategories,
    })
 }

 export const useProductByCategory = () => {
    const [category, setCategory] = useState(null)

console.log("ye category hai" , category);

    let {data} = useQuery ({
        queryKey:["productsByCategory",category],
        queryFn:()=> getProductByCategory(category)
    });

    return {
        data,
        category,
        setCategory,
    }
 }