import { ProductList } from '@/components/ProductList';
import { ProductFilter } from '@/components/ProductFilter';
import { getProducts } from '@/lib/actions';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Products</h1>
        <ProductFilter />
        <ProductList initialProducts={products} />
      </div>
    </div>
  );
}