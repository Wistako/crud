import PostForm from '../../features/PostForm/PostForm';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPostById } from '../../../redux/postsRedux';
import { editPost } from '../../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const PostEdit = () => {
  const { id } = useParams();
  const post = useSelector(state => getPostById(state, id));
  
  if(!post) return <Navigate to='/' />;
    return (
      <main>
        <PostForm name='Edit' action={editPost} id={id} {...post} />
      </main>
    );
};
export default PostEdit;