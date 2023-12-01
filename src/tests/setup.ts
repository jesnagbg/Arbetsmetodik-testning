import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// cleanup after each test
afterEach(() => {
  cleanup();
});
