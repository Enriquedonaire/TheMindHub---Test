import { render, screen } from '@testing-library/react';
import { Navbar } from '@/components/Navbar';

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('Navbar', () => {
  it('renders navigation links correctly', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Todos')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Products')).toBeInTheDocument();
  });

  it('contains correct navigation hrefs', () => {
    render(<Navbar />);
    
    expect(screen.getByText('Todos').closest('a')).toHaveAttribute('href', '/todos');
    expect(screen.getByText('Profile').closest('a')).toHaveAttribute('href', '/profile');
    expect(screen.getByText('Products').closest('a')).toHaveAttribute('href', '/products');
  });
});