'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ListTodo, User, ShoppingBag } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? 'bg-zinc-700' : 'hover:bg-zinc-700';
  };

  return (
    <nav className="bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16">
          <Link 
            href="/" 
            className="text-xl font-bold mr-8"
          >
            Technical Test
          </Link>
          <div className="flex space-x-4">
            <Link
              href="/todos"
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${isActive('/todos')}`}
            >
              <ListTodo className="w-4 h-4 mr-2" />
              Todos
            </Link>
            <Link
              href="/profile"
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${isActive('/profile')}`}
            >
              <User className="w-4 h-4 mr-2" />
              Profile
            </Link>
            <Link
              href="/products"
              className={`flex items-center px-4 py-2 rounded-md transition-colors ${isActive('/products')}`}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Products
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}