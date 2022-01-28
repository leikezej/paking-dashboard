import { render, screen } from '@testing-library/react';
import App from './App';

test('renders PakingALlIn Dashboard text', () => {
  render(<App />);
  const h1Element = screen.getByText(/Coming Soon/i);
  expect(h1Element).toBeInTheDocument();
});
