import TodoList from '@/components/TodoList';

export default function TodosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Todo List</h1>
        <TodoList />
      </div>
    </div>
  );
}