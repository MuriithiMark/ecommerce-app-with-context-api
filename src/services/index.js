const getAllProducts = async ({ page, limit }) => {
    const productsUrl = `https://api.freeapi.app/api/v1/ecommerce/products?page=${page}&limit=${limit}`;
    const response = await fetch(productsUrl)
    const data = await response.json()
    return data;
}


export { getAllProducts }