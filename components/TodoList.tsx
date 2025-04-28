'use client';

import { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Todo {
  id: string;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const { toast } = useToast(); 
  const addTodo = () => {
    if (!newTodo.trim()) {
      toast({
        title: 'Error',
        description: 'El campo no puede estar vacío.',
      });
      return;
    }

    const newTodoItem = { id: crypto.randomUUID(), text: newTodo.trim() };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');

    toast({
      title: 'Todo agregado',
      description: `Se agregó "${newTodoItem.text}" a la lista.`,
    });
  };

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const filteredTodos = (id: string) => {
    return todos.filter((todo) => todo.id !== id);
  };

  const deleteTodo = (id: string) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    setTodos(filteredTodos(id));

    toast({
      title: 'Todo eliminado',
      description: `Se eliminó "${todoToDelete?.text}" de la lista.`,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          onKeyDown={handleKeyPress}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 focus:outline-none focus:border-zinc-500"
        />
        <button
          onClick={addTodo}
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between px-4 py-3 bg-zinc-800 rounded-lg group"
          >
            <span>{todo.text}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-zinc-500 hover:text-red-500 transition-colors"
              aria-label="Delete todo"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}