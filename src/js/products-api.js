// Функції для роботи з бекендом


async function getProducts(page = 1) {
    const skip = (page - 1) * 12;
    const url = `?limit=12&skip=${skip}`;

    
        const response = await axios.get(url);
        return response.data.products;


}
