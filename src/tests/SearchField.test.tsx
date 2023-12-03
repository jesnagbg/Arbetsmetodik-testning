import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it } from 'vitest';
import SearchField from '../components/SearchField';

describe('SearchField Component', () => {
  const user = userEvent.setup();
  let inputElement: HTMLInputElement;
  let buttonElement: HTMLButtonElement;

  beforeEach(() => {
    // Render the SearchField component before each test
    render(<SearchField handleSearch={() => {}} />);

    // Get the input and button elements for use in the tests
    inputElement = screen.getByPlaceholderText('Enter a word');
    buttonElement = screen.getByRole('button');
  });

  it('allows user to enter a word', async () => {
    // Simulate user typing a word into the input field
    await user.type(inputElement, 'test');

    // Check that the input field's value matches the word typed
    expect(inputElement.value).toBe('test');
  });

  it('clears the input field when the search button is clicked', async () => {
    // Type a word into the input field and click the search button
    await user.type(inputElement, 'testword');
    await user.click(buttonElement);

    // Verify that the input field clears after the search
    expect(inputElement.value).toBe('');
  });

  it('displays an error message if the search button is clicked without entering a word', async () => {
    // Trigger an error by clicking the search button with no input
    await user.click(buttonElement);

    // Check that the error message is displayed
    const errorMessage = screen.getByText('Please enter a word');
    expect(errorMessage).toBeInTheDocument();
  });

  it('clears the error message when a valid word is entered after an error', async () => {
    // Trigger an error by clicking the search button with no input
    await user.click(buttonElement);

    // Check that the error message is displayed
    const errorMessage = screen.queryByText('Please enter a word');
    expect(errorMessage).toBeInTheDocument();

    // Enter a valid word to clear the error and perform a new search
    await user.type(inputElement, 'test');
    await userEvent.click(buttonElement);

    // Check that the error message is no longer displayed
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('displays an error message passed down as a prop', async () => {
    // Render the searchbar with a specific error message passed as a prop
    const errorMessage = 'Could not find a definition, please try another word';
    render(<SearchField handleSearch={() => {}} errorMessage={errorMessage} />);

    // Check that the provided error message is displayed
    const displayedErrorMessage = screen.getByText(errorMessage);
    expect(displayedErrorMessage).toBeInTheDocument();
  });
});
