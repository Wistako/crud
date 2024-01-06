import styles from './Home.module.scss';
import { useSelector } from 'react-redux';
import { getAllPost } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import PageTitle from '../../common/PageTitle/PageTitle';

const Home = () => {
  const posts = useSelector(state => getAllPost(state));
  return (
    <main>
      <PageTitle>All posts</PageTitle>
      <div className={styles.wrapper}>
        {
          posts.map(post => (
            <div className={styles.post}>
              <h3 className={styles.title}>{post.title}</h3>
              <p className={styles.author}><span>Author: </span>{post.author}</p>
              <p className={styles.date}><span>Published: </span>{post.pubilshedDate}</p>
              <p>{post.shortDeescription}</p>
              <Link to={`/post/${post.id}`} className={styles.link}>Read more</Link>
            </div>
          ))
        }
      </div>
    </main>
  );
};
export default Home;