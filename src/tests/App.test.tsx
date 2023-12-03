import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import App from '../App';

describe('App Component', () => {
  const user = userEvent.setup();
  let inputElement: HTMLInputElement;
  let buttonElement: HTMLButtonElement;

  beforeEach(() => {
    // Render the App component before each test
    render(<App />);

    // Get the input and button elements for use in the tests
    inputElement = screen.getByPlaceholderText('Enter a word');
    buttonElement = screen.getByRole('button');
  });

  it('renders with correct heading', () => {
    // Check that the heading is rendered
    expect(screen.getByText('Dictionary')).toBeInTheDocument();
  });

  it('renders search results for "example"', async () => {
    // Type a word into the input field and click the search button
    await user.type(inputElement, 'example');
    user.click(buttonElement);

    // Check that the word is rendered
    expect(await screen.findByText('example')).toBeInTheDocument();
    expect(
      await screen.findByText(
        'Something that is representative of all such things in a group.'
      )
    ).toBeInTheDocument();
  });

  it('displays an error message for a non-existent word and does not render the word', async () => {
    // Type a word into the input field and click the search button
    await user.type(inputElement, 'nonexistentword');
    user.click(buttonElement);

    // Check that the error message is displayed
    expect(
      await screen.findByText(
        'Could not find a definition, please try another word'
      )
    ).toBeInTheDocument();

    // Check that the word is not rendered
    expect(screen.queryByText('nonexistentword')).not.toBeInTheDocument();
  });
});
