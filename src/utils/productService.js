import axiosInstance from './axiosInstance';

export const fetchProducts = async (limit = 12) => {
  try {
    const response = await axiosInstance.get(`/products?limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductsById = async (id) => {
  try{
    const response = await axiosInstance.get(`products/${id}`);
    return response.data;
  }
  catch(error){
    console.error('Error fetching products:', error);
    throw error;
  }
}

export const fetchProductsByCategory = async (category) => {
  try{
    const response = await axiosInstance.get(`products/category/${category}`);
    return response.data;
  }
  catch(error){
    console.error('Error fetching products:', error);
    throw error;
  }
}
