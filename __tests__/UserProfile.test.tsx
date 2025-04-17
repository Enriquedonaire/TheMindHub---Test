import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserProfile } from '@/components/UserProfile';

describe('UserProfile', () => {
  const mockUser = {
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://example.com/avatar.jpg',
    username: 'johndoe',
    phone: '123-456-7890',
    website: 'https://enriquedonaire.github.io/PicFinder-App',
    company: 'PrisMatter'
  };

  it('renders user information correctly', () => {
    render(<UserProfile user={mockUser} />);
    
    expect(screen.getByText(mockUser.name)).toBeInTheDocument();
    expect(screen.getByText(`@${mockUser.username}`)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByText(mockUser.phone)).toBeInTheDocument();
    expect(screen.getByText('PicFinder')).toBeInTheDocument();
    expect(screen.getByText(mockUser.company)).toBeInTheDocument();
  });

  it('renders portfolio link correctly', () => {
    render(<UserProfile user={mockUser} />);
    
    const portfolioLink = screen.getByText('enriquedonaire.github.io/Portfolio-Web-Dev');
    expect(portfolioLink).toBeInTheDocument();
    expect(portfolioLink).toHaveAttribute('href', 'https://enriquedonaire.github.io/Portfolio-Web-Dev');
  });
});