

import { useState } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const AddComment = ({ asin}) => {
  const [commentData, setCommentData] = useState({
    comment: '',
    rate: '',
    elementId: asin
  })

  const handleChange = (e, property) => {
    setCommentData({
      ...commentData,
      [property]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQzMjY2OTUsImV4cCI6MTcyNTUzNjI5NX0.rMDxqCJ_CyHQz520r-HqvWdsgDpX16i5r6th2UeIfZ0",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Commento salvato')
          alert('Grazie!')
          setCommentData({
            comment: '',
            rate: '',
            elementId: asin
          })
        } else {
          alert('Riprova più tardi')
          throw new Error('Errore!')
        }
      })
      .catch((err) => {
        alert(err)
      })
  }

  return (
    <Form onSubmit={handleSubmit} className='p-1'>
      <Row className='mb-2'>
        <Form.Group as={Col} xs={12} className='mb-1'>
          <Form.Control
            required
            type="text"
            placeholder="Comment"
            value={commentData.comment}
            onChange={(e) => handleChange(e, 'comment')}
          />
        </Form.Group>
        <Form.Group as={Col} xs={12}>
          <Form.Control
            type="number"
            placeholder="Rate"
            required
            value={commentData.rate}
            onChange={(e) => handleChange(e, 'rate')}
          />
        </Form.Group>
      </Row>
      <Button type="submit">Submit </Button>
    </Form>
  )
}

export default AddComment
