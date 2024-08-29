
import { React } from 'react'
import { Card } from 'react-bootstrap'

const SingleBook = ({ book, selectedBook, changeState }) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={book.img}
        onClick={() => changeState(book.asin)}
        style={{
          border: selectedBook === book.asin ? '3px solid red' : 'none',
        }}
      />
      <Card.Body>
        <Card.Title style={{ color: 'black' }}>
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  )
}

export default SingleBook

