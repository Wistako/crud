import styles from './Category.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostsByCategory } from '../../../redux/postsRedux';
import shortid from 'shortid';
import dateToString from '../../../utils/dateToString';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';
import { Navigate } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const posts = useSelector(state => getPostsByCategory(state, category));
  if(posts.length === 0) return <Navigate to='/' />;
  return (
    <div className={styles.wrapper}>
      <PageTitle>{category}</PageTitle>
      <div className={styles.posts}>
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
    </div>
  );
}
export default Category;