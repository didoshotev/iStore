const getProducts = async (category) => {
    let promise
    if (category !== 'products') {
        promise = await fetch(`http://localhost:5000/api/products/${category}`)
    } else {
        promise = await fetch(`http://localhost:5000/api/products`)
    }
    const products = await promise.json()
    return products
}

const isVerified = async (token) => {
    const promise = await fetch('http://localhost:5000/api/user/verify', {
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