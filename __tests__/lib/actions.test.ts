/**
 * @jest-environment jsdom
 */
import { getUserProfile, getProducts } from '@/lib/actions';
import axios from 'axios';

describe('API Actions', () => {
  describe('getUserProfile', () => {
    const mockUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      username: 'johndoe',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      company: { name: 'Test Company' },
    };

    beforeEach(() => {
      (axios.get as jest.Mock).mockReset();
      // Suprimir console.error para todas las pruebas
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      // Restaurar console.error después de cada prueba
      jest.spyOn(console, 'error').mockRestore();
    });

    it('fetches and transforms user data correctly', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockUserData });

      const result = await getUserProfile();

      expect(result).toEqual({
        name: mockUserData.name,
        email: mockUserData.email,
        avatar: expect.stringContaining('api.dicebear.com'),
        username: mockUserData.username,
        phone: mockUserData.phone,
        website: mockUserData.website,
        company: mockUserData.company.name,
      });
      expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users/1');
    });

    it('handles API errors gracefully', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

      await expect(getUserProfile()).rejects.toThrow('Failed to fetch user profile');
    });
  });

  describe('getProducts', () => {
    const mockProducts = [
      {
        id: 1,
        title: 'Test Product',
        price: 99.99,
        description: 'Test Description',
        image: 'https://example.com/image.jpg',
        category: 'Test Category',
      },
    ];

    beforeEach(() => {
      (axios.get as jest.Mock).mockReset();
      // Suprimir console.error para todas las pruebas
      jest.spyOn(console, 'error').mockImplementation(() => {});
    });

    afterEach(() => {
      // Restaurar console.error después de cada prueba
      jest.spyOn(console, 'error').mockRestore();
    });

    it('fetches and transforms products correctly', async () => {
      (axios.get as jest.Mock).mockResolvedValueOnce({ data: mockProducts });

      const result = await getProducts();

      expect(result).toEqual([
        {
          id: '1',
          name: 'Test Product',
          price: 99.99,
          description: 'Test Description',
          image: 'https://example.com/image.jpg',
          category: 'Test Category',
        },
      ]);
      expect(axios.get).toHaveBeenCalledWith('https://fakestoreapi.com/products');
    });

    it('handles API errors gracefully', async () => {
      (axios.get as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

      await expect(getProducts()).rejects.toThrow('Failed to fetch products');
    });
  });
});