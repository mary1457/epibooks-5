
import { useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

const CommentArea = ({ newSelectedValue }) => {
  const [comments, setComments] = useState([])

  useEffect(() => {
    fetchReservations()
  }, [newSelectedValue])

  const fetchReservations = () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/' + newSelectedValue
    fetch(URL, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNTUzNGYyNjBjYzAwMTVjYzBkZDIiLCJpYXQiOjE3MjQ2OTQ4NjksImV4cCI6MTcyNTkwNDQ2OX0.nhff3SO7n3TIYxpWEOpNQoOEmIEfhCJugAXNwDnHzEw',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response)
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nella chiamata, response non OK')
        }
      })
      .then((arrayOfComments) => {
        console.log('COMMENTI DAL DB', arrayOfComments)
        setComments(arrayOfComments)
      })
      .catch((error) => {
        console.log('ERRORE!', error)
      })
  }

  return (
    <>
      <CommentList comments={comments} />
      <AddComment asin={newSelectedValue} />
    </>
  )
}

export default CommentArea
