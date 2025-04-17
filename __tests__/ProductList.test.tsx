import { render, screen } from '@testing-library/react';
import { ProductList } from '@/components/ProductList';

jest.mock('next/navigation', () => ({
  useSearchParams: () => ({
    get: () => null,
  }),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img alt='imgTest'{...props} />,
}));

describe('ProductList', () => {
  const mockProducts = [
    {
      id: '1',
      name: 'Test Product',
      price: 99.99,
      description: 'Test Description',
      image: 'https://example.com/image.jpg',
      category: 'Test Category'
    },
  ];

  it('renders products correctly', () => {
    render(<ProductList initialProducts={mockProducts} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
    expect(screen.getByText('€99.99')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
  });

  it('filters products based on search term', () => {
    jest.mock('next/navigation', () => ({
      useSearchParams: () => ({
        get: () => 'test',
      }),
    }));

    render(<ProductList initialProducts={mockProducts} />);
    expect(screen.getByText('Test Product')).toBeInTheDocument();
  });
});