import styles from './Categories.module.scss';
import { useSelector } from 'react-redux';
import { getAllCategories } from '../../../redux/categoriesRedux';
import PageTitle from '../../common/PageTitle/PageTitle';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(state => getAllCategories(state));
  return (
    <div className={styles.wrapper}>
      <PageTitle>All Categories</PageTitle>
      <ul className={styles.list}>
        {categories.map(category => (
          <li key={category.id} className={styles.categories}>
            <Link to={`/category/${category.name}`}>{category.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Categories;