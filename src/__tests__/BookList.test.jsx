import { render, screen } from '@testing-library/react'
import BookList from '../components/BookList'
import fantasy from '../data/fantasy.json'

describe('BookList Component', () => {
    it('renders the correct number of Bootstrap cards', () => {
       
      
        render(<BookList books={fantasy} />)
      
       
        const bookImages = screen.getAllByRole('img')
      
        
        expect(bookImages.length).toBe(fantasy.length)
      })
      
});
