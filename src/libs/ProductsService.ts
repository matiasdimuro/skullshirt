import type { IProductEntity, IProductPreview } from "../types/interfaces/IProduct";
import type IProductsFilters from "../types/interfaces/IProductsFilters";
import type { ICategory } from "../types/interfaces/ICategory";

const HOST = "https://ecommerce-server-rgayv1jyy-dimuromatias.vercel.app";

export async function getProductsFromService({ type }: IProductsFilters): Promise<IProductPreview[]> {
    try {        
        const response = await fetch(`${HOST}/api/products${type ? '?category=' + type : ''}`)        
        if (!response.ok) {
            throw new Error("Cannot GET products from service")
        }
        const json = await response.json()
        return json

    } catch (error) {
        console.error("Cannot GET products from service.")
        console.error(error)
        return []
    }
}

export async function getProductByIdFromService(ID: string) : Promise<IProductEntity | {} >{
    try {
        const response = await fetch(`${HOST}/api/product/${ID}`)
        if (!response.ok) {
            throw new Error("Cannot GET product by id from service")
        }
        const json = await response.json()
        return json    
    } 
    catch (error) {
        console.error("Cannot GET product by id from service");
        console.error(error)
        return {}
    }
}

export async function getCategoriesFromService(): Promise<ICategory[]> {
    try {
        const response = await fetch(`${HOST}/api/categories`)
        if (!response.ok) {
            throw new Error("Cannot GET categories from service.")
        }
        const json = await response.json()
        return json
    } catch (error) {
        console.error("Cannot GET categories from service.")
        console.error(error)
        return []
    }
}