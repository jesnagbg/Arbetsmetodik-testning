import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders with correct heading', () => {
    render(<App />);
    expect(screen.getByText('Dictionary')).toBeInTheDocument();
  });
});
