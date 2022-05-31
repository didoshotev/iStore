import { API_URL } from "../config";

const getProducts = async (category) => {
    let promise
    if (category !== 'products') {
        // promise = await fetch(`https://istore-nodejs.herokuapp.com/api/products/${category}`)
        promise = await fetch(`${API_URL}/api/products/${category}`)
    } else {
        promise = await fetch(`${API_URL}/api/products`)
    }
    const products = await promise.json()
    return products
}

const isVerified = async (token) => {
    const promise = await fetch(`${API_URL}/api/user/verify`, {
        method: 'POST',
        body: JSON.stringify({
            token
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const result = await promise.json()
    return result
}

export {
    getProducts,
    isVerified
}