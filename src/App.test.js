import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom'

test('renders iframe', () => {
  const {container} = render(<App />);
  const iframeElement = container.querySelector('iframe');
  console.log(iframeElement);
  expect(iframeElement).toBeInTheDocument();
  expect
});
