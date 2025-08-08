import { render, screen } from '@testing-library/react';
import Hero from '../../components/Hero';

describe('Hero', () => {
  it('renders heading', () => {
    render(<Hero />);
    expect(screen.getByText('Adamstown Cricket Club')).toBeInTheDocument();
  });
});