const getAllProducts = async ({ limit, skip = 0 }) => {
    const productsUrl = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    const response = await fetch(productsUrl)
    if (!response.ok || !(response.status === 200)) {
        return ({
            success: false,
            message: 'Internal server error. Try again!'
        })
    }
    const data = await response.json()
    return { ...data, success: true, message: 'Products fetched successfully' };
}


export { getAllProducts }