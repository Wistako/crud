import { useState } from 'react';
import styles from './PostForm.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
// Quill - text editor
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
// Date picker
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// react-hook-form => validation
import { set, useForm } from 'react-hook-form';
// components
import PageTitle from '../../common/PageTitle/PageTitle';

const PostForm = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = props.id;
  const [title, setTitle] = useState(props.title);
  const [author, setAuthor] = useState(props.author);
  const [publishedDate, setPublishedDate] = useState(props.publishedDate);
  const [shortDescription, setShortDescription] = useState(props.shortDescription);
  const [content, setContent] = useState(props.content);

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const handleSubmit = e => {
    setContentError(false);
    setDateError(false);
    if(content){
      if(content.length > 27 && publishedDate !== null) {
        console.log(content);
        dispatch(props.action({id, title, author, publishedDate, shortDescription, content }));
        navigate('/');
      } else if(content.length < 27 && publishedDate == null) {
        setContentError(true);
        setDateError(true);
      } else if(content.length < 27){
        setContentError(true);
      } else if(publishedDate === null) {
        setDateError(true);
      }
    } else {
      setContentError(true);
    }
  }
  return (
    <main className={styles.wrapper}>
      <PageTitle>{props.name} post</PageTitle>
      <form className={styles.form} onSubmit={validate(handleSubmit)}>

        <p>Title</p>
        <input {...register('title', { required: true, minLength: 3})}
         value={title}
         onChange={e => setTitle(e.target.value)}
         type='text'
         placeholder='Enter title' 
         />
         {errors.title && <small className="d-block form-text text-danger mt-2">This field is required</small>}

        <p>Author</p>
        <input {...register('author', { required: true , minLength: 3}) }
          value={author} 
          onChange={e => setAuthor(e.target.value)}
          type='text' 
          placeholder='Enter author'
        />
        {errors.author && <small className="d-block form-text text-danger mt-2">This field is required</small>}

        <p>Published</p>
        <DatePicker selected={publishedDate} onChange={date => setPublishedDate(date)} />
        {dateError && <small className="d-block form-text text-danger mt-2">This field is required</small>}

        <p>Short description</p>
        <textarea {...register('shortDescription', { required: true , minLength: 20})}
          value={shortDescription} 
          onChange={e => setShortDescription(e.target.value)} 
          placeholder='Leave a comment here'
        />
        {errors.shortDescription && <small className="d-block form-text text-danger mt-2">This field is required</small>}

        <p>Main content</p>
        <ReactQuill 
          theme='snow' 
          value={content} 
          onChange={setContent} 
          placeholder='Leace a content here'
          className={styles.editor}
        />
        {contentError && <small className="d-block form-text text-danger mt-2">This field is required</small>}

        <div className='text-end'>
          <Button variant="primary" type="submit">{props.name}</Button>
        </div>
      </form>
    </main>
  );
};

export default PostForm;