export async function getProducts() {
    try {
        const response = await fetch(`https://api.escuelajs.co/api/v1/products`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('smth went wrong', error);
    }

}

