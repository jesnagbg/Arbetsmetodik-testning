import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('App Component', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    // Render the App component before each test
    render(<App />);
  });

  it('renders with correct heading', () => {
    // Check that the heading is rendered
    expect(screen.getByText('Dictionary')).toBeInTheDocument();
  });

  it('renders search results for "example"', async () => {
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
