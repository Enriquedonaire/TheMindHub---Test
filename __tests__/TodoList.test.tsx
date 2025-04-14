import { render, screen, fireEvent } from '@testing-library/react';
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
    
    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Todo to delete')).not.toBeInTheDocument();
  });

  it('adds a todo when Enter key is pressed', () => {
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    
    fireEvent.change(input, { target: { value: 'Enter Todo' } });
    fireEvent.keyPress(input, { key: 'Enter', code: 13, charCode: 13 });
    
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