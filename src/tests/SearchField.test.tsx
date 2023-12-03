import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import SearchField from '../components/SearchField';

describe('SearchField Component', () => {
  const user = userEvent.setup();

  let inputElement: HTMLInputElement;
  let buttonElement: HTMLButtonElement;

  beforeEach(() => {
    render(<SearchField handleSearch={() => {}} />);
    inputElement = screen.getByPlaceholderText(
      'Enter a word'
    ) as HTMLInputElement;
    buttonElement = screen.getByRole('button');
  });

  it('allows user to enter a word', async () => {
    await user.type(inputElement, 'test');
    expect(inputElement.value).toBe('test');
  });

  it('clears the input field when the search button is clicked', async () => {
    await user.type(inputElement, 'testword');
    await user.click(buttonElement);
    expect(inputElement.value).toBe('');
  });

  it('displays an error message if the search button is clicked without entering a word', async () => {
    await user.click(buttonElement);
    const errorMessage = screen.getByText('Please enter a word');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears the error message when a valid word is entered after an error', async () => {
    await user.click(buttonElement); // Trigger error

    let errorMessage = screen.queryByText('Please enter a word');
    expect(errorMessage).toBeInTheDocument();

    await user.type(inputElement, 'testword'); // Enter a valid word
    await userEvent.click(buttonElement);

    errorMessage = screen.queryByText('Please enter a word');
    expect(errorMessage).not.toBeInTheDocument();
  });
});
