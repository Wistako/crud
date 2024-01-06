import { useState } from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './PostForm.module.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addPost } from '../../../redux/postsRedux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

const PostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const id = shortid();
    console.log('click');
    dispatch(addPost({ id, title, author, publishedDate, shortDescription, content }));
    navigate(`/`);
  };

  return (
    <main className={styles.wrapper}>
      <PageTitle>Add post</PageTitle>
      <form className={styles.form} onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={e => setTitle(e.target.value)} type='text' placeholder='Enter title' required/>
        <p>Author</p>
        <input value={author} onChange={e => setAuthor(e.target.value)} type='text' placeholder='Enter author' required/>
        <p>Published</p>
        <input value={publishedDate} onChange={e => setPublishedDate(e.target.value)} type='text' placeholder='Enter date' required/>
        <p>Short description</p>
        <textarea value={shortDescription} onChange={e => setShortDescription(e.target.value)} placeholder='Leave a comment here' required/>
        <p>Main content</p>
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder='Leave a content here' required />
        <div className='text-end'>
          <Button variant="primary" type="submit">Add</Button>
        </div>
      </form>
    </main>
  );
};

export default PostForm;