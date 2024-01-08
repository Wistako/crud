import styles from './Post.module.scss';
import { useParams } from 'react-router';
import { Link }from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { deletePost } from '../../../redux/postsRedux';
import { Button, Modal } from 'react-bootstrap';
import { useState } from 'react';
import dateToString from '../../../utils/dateToString';


const Post = () => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const handleShow = e => {
    e.preventDefault();
    setShowModal(true);
  }
  const handleClose = e => {
    e.preventDefault();
    setShowModal(false);
  }
  const delatePost = e => {
    e.preventDefault();
    dispatch(deletePost({postId}));
  }
  const { postId } = useParams();
  const post = useSelector(state => getPostById(state, postId));
  
  
  if(!post) return <Navigate to='/' />;
  else return (
    <div className={styles.wrapper}>
      <div className={styles.buttons}>
        <Link to={`/post/edit/${post.id}`} className='btn btn-outline-info'>Edit</Link>
        <Button variant="outline-danger" onClick={handleShow}>Delete</Button>{' '}
      </div>
      <div className={styles.post}>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.author}><span>Author: </span>{post.author}</p>
        <p className={styles.date}><span>Published: </span>{dateToString(post.publishedDate)}</p>        
        <p className={styles.category}><span>Category: </span>{post.category}</p>
        <p dangerouslySetInnerHTML={{ __html: post.content }} />

      </div>
      <Modal 
        show={showModal}
        onHide={handleClose}
        >
          <Modal.Header>
            <Modal.Title>Are you sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            This operation will completely remove the post from the app.<br></br> Are you sure you want to do this?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="danger" onClick={delatePost}>Remove</Button>
          </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Post;