import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Technical Test Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Link 
            href="/todos" 
            className="block p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Todo List
              <ArrowRight className="w-4 h-4" />
            </h2>
            <p className="text-zinc-400">Manage your tasks with a simple and intuitive interface.</p>
          </Link>
          
          <Link 
            href="/profile" 
            className="block p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              User Profile
              <ArrowRight className="w-4 h-4" />
            </h2>
            <p className="text-zinc-400">View and manage your profile information.</p>
          </Link>
          
          <Link 
            href="/products" 
            className="block p-6 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors"
          >
            <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
              Products
              <ArrowRight className="w-4 h-4" />
            </h2>
            <p className="text-zinc-400">Browse and filter our product catalog.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}