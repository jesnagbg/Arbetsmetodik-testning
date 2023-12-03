import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App Component', () => {
  const user = userEvent.setup();

  it('renders with correct heading', () => {
    render(<App />);
    // Check that the heading is rendered
    expect(screen.getByText('Dictionary')).toBeInTheDocument();
  });

  it('renders search results for "example"', async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(
      'Enter a word'
    ) as HTMLInputElement;
    const buttonElement = screen.getByRole('button') as HTMLButtonElement;

    // Type a word into the input field and click the search button
    await user.type(inputElement, 'example');
    user.click(buttonElement);

    // Check that the word is rendered
    expect(await screen.findByText('example')).toBeInTheDocument();
  });
});
