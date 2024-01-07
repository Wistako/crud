import { useState } from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import styles from './PostForm.module.scss';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PostForm = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = props.id;
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [publishedDate, setPublishedDate] = useState(props.publishedDate);
  const [shortDescription, setShortDescription] = useState(props.shortDescription);
  const [content, setContent] = useState(props.content);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(props.action({id, title, author, publishedDate, shortDescription, content }));
    navigate('/');
  };

  return (
    <main className={styles.wrapper}>
      <PageTitle>{props.name} post</PageTitle>
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
          <Button variant="primary" type="submit">{props.name}</Button>
        </div>
      </form>
    </main>
  );
};

export default PostForm;