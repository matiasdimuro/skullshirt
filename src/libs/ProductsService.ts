import type { IProductPreview } from "../types/interfaces/IProduct";

const URL = "https://ecommerce-server-five-mocha.vercel.app";

export async function getProductsFromService(): Promise<IProductPreview[]> {
    try {
        const response = await fetch(`${URL}/api/products`)
        const json = await response.json()
        return json
    } catch (error) {
        console.error("Cannot GET products from service.")
        console.error(error)
        return []
    }
}