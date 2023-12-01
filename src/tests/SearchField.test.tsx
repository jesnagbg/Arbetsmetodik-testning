import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearchField from '../components/SearchField';

describe('SearchField Component', () => {
  it('allows user to enter a word', () => {
    render(<SearchField handleSearch={() => {}} />);
    const input = screen.getByPlaceholderText(
      'Enter a word'
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('clears the input field when the search button is clicked', () => {
    render(<SearchField handleSearch={() => {}} />);
    const inputElement = screen.getByPlaceholderText(
      'Enter a word'
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole('button');

    fireEvent.change(inputElement, { target: { value: 'testword' } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });

  it('displays an error message if the search button is clicked without entering a word', () => {
    render(<SearchField handleSearch={() => {}} />);
    const buttonElement = screen.getByRole('button');

    fireEvent.click(buttonElement);

    const errorMessage = screen.getByText('Please enter a word');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears the error message when a valid word is entered after an error', () => {
    render(<SearchField handleSearch={() => {}} />);
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement); // Trigger error

    const inputElement = screen.getByPlaceholderText(
      'Enter a word'
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'validword' } });

    const errorMessage = screen.queryByText('Please enter a word');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
