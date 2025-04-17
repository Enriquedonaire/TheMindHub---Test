/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, within } from '@testing-library/react';
import TodoList from '@/components/TodoList';

describe('TodoList', () => {
  it('adds a new todo when the add button is clicked', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'New Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  it('deletes a todo when the delete button is clicked', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: 'Todo to delete' } });
    fireEvent.click(addButton);
    
    const todoItem = screen.getByText('Todo to delete').closest('li');
    if (!todoItem) {
      throw new Error('Todo item not found');
    }
    
    const deleteButton = within(todoItem).getByRole('button', { name: /delete todo/i });
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
  });

  it('adds a todo when Enter key is pressed', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    
    fireEvent.change(input, { target: { value: 'Enter Todo' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(screen.getByText('Enter Todo')).toBeInTheDocument();
  });

  it('does not add empty todos', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add');
    
    fireEvent.change(input, { target: { value: '   ' } });
    fireEvent.click(addButton);
    
    const todos = screen.queryAllByRole('listitem');
    expect(todos).toHaveLength(0);
  });
});