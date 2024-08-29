import { useState } from 'react'
import SingleBook from './SingleBook'
import { Col, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedBook, setSelectedBook] = useState(null)

  const changeState = (newSelectedValue) => {
    setSelectedBook(newSelectedValue)
  }

  return (
    <>
      <Row className="justify-content-center mt-3">
        <Col  xs={12} md={8} lg={6} className="text-center">
          <Form.Group>
            <Form.Control
              type="search"
              placeholder="Cerca un libro"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className="g-2 mt-3">
        <Col xs={6}>
          <Row>
            {books
              .filter((b) =>
                b.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((b) => (
                <Col xs={6}  key={b.asin}>
                  <SingleBook
                    book={b}
                    selectedBook={selectedBook}
                    changeState={changeState}
                  />
                </Col>
              ))}
          </Row>
        </Col>
        <Col xs={6}>
          <CommentArea newSelectedValue={selectedBook} />
        </Col>
      </Row>
    </>
  )
}

export default BookList
