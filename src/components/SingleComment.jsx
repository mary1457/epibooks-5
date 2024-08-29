
import { React } from 'react'
import { ListGroup } from 'react-bootstrap'

const SingleComment = ({ comment }) => {
  return (
    <>
      <ListGroup.Item className="rounded ">{comment.comment}</ListGroup.Item>
      <ListGroup.Item className="rounded ">{comment.rate}</ListGroup.Item>
      <ListGroup.Item className="rounded ">{comment.author}</ListGroup.Item>
    </>
  )
}

export default SingleComment
