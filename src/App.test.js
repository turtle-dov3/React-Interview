import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the page to the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/Enter a number/i);
  expect(linkElement).toBeInTheDocument();
});
