import { getUserProfile, getProducts } from '@/lib/actions';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('API Actions', () => {
  describe('getUserProfile', () => {
    const mockUserData = {
      name: 'John Doe',
      email: 'john@example.com',
      username: 'johndoe',
      phone: '1-770-736-8031',
      website: 'hildegard.org',
      company: { name: 'Test Company' }
    };

    beforeEach(() => {
      mockedAxios.get.mockReset();
    });

    it('fetches and transforms user data correctly', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockUserData });
      
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
    });

    it('handles API errors gracefully', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));
      
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
        category: 'Test Category'
      }
    ];

    beforeEach(() => {
      mockedAxios.get.mockReset();
    });

    it('fetches and transforms products correctly', async () => {
      mockedAxios.get.mockResolvedValueOnce({ data: mockProducts });
      
      const result = await getProducts();
      
      expect(result).toEqual([{
        id: '1',
        name: 'Test Product',
        price: 99.99,
        description: 'Test Description',
        image: 'https://example.com/image.jpg',
        category: 'Test Category'
      }]);
    });

    it('handles API errors gracefully', async () => {
      mockedAxios.get.mockRejectedValueOnce(new Error('API Error'));
      
      await expect(getProducts()).rejects.toThrow('Failed to fetch products');
    });
  });
});