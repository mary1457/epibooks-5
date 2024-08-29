
import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome'

describe('Welcome Component', () => {
    it('dovrebbe montare correttamente e visualizzare il testo', () => {
        render(<Welcome />);

      
        const headingElement = screen.getByText('EpiBooks');
        expect(headingElement).toBeInTheDocument();

       
        const paragraphElement = screen.getByText(/Benvenuti alla EpiBooks/i);
        expect(paragraphElement).toBeInTheDocument();

       
        const subheadingElement = screen.getByText(/Leggi, scopri, sogna/i);
        expect(subheadingElement).toBeInTheDocument();
    });
});
