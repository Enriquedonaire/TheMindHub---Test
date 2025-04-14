import axios from 'axios';

export async function getUserProfile() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
    const user = response.data;
    
    return {
      name: user.name,
      email: user.email,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`,
      username: user.username,
      phone: user.phone,
      website: user.website,
      company: user.company.name,
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw new Error('Failed to fetch user profile');
  }
}

export async function getProducts() {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data.map((product: any) => ({
      id: product.id.toString(),
      name: product.title,
      price: product.price,
      description: product.description,
      image: product.image,
      category: product.category,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}