'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductListProps {
  initialProducts: Product[];
}

export function ProductList({ initialProducts }: ProductListProps) {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get('search')?.toLowerCase();
  
  const filteredProducts = searchTerm
    ? initialProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
      )
    : initialProducts;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <div key={product.id} className="bg-zinc-800 rounded-lg p-6 flex flex-col">
          <div className="relative w-full h-48 mb-4 bg-white rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="flex-1">
            <div className="text-sm text-blue-400 mb-2">{product.category}</div>
            <h3 className="text-xl font-semibold mb-2 line-clamp-2">{product.name}</h3>
            <p className="text-zinc-400 mb-4 line-clamp-3">{product.description}</p>
            <p className="text-2xl font-bold">€{product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}