// Функції для роботи з бекендом
import axios from 'axios';
export async function getProductCategories() {
  const BASE_URL = 'https://dummyjson.com/products';
  const END_POINT = '/category-list';
  const url = `${BASE_URL}${END_POINT}`;
  try {
    const resp = await axios.get(url);
    return resp.data;
  } catch (err) {
    console.log(err);
  }
}
