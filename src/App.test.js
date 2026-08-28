// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NodeMeld title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NodeMeld/i);
    expect(titleElement).toBeInTheDocument();
});
