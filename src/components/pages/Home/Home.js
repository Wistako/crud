import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import dateToString from '../../../utils/dateToString';
import shortid from 'shortid';

const Home = () => {
  const posts = useSelector(state => getAllPost(state));
  return (
    <main>
      <PageTitle>All posts</PageTitle>
      <div className={styles.wrapper}>
        {
          posts.map(post => (
            <div className={styles.post} key={shortid()}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.author}><span>Author: </span>{post.author}</p>
              <p className={styles.date}><span>Published: </span>{dateToString(post.publishedDate)}</p>
              <p className={styles.category}><span>Category: </span>{post.category}</p>
              <p>{post.shortDescription}</p>
              <Link to={`/post/${post.id}`} className={styles.link}>Read more</Link>
            </div>
          ))
        }
      </div>
      <div className='text-end'>
        <Link className="btn btn-primary" to="/post/add">Add post</Link>
      </div>
    </main>
  );
};
export default Home;