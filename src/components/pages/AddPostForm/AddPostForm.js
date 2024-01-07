
import { addPost } from '../../../redux/postsRedux';
import PostForm from '../../features/PostForm/PostForm';

const AddPostForm = () => {
  return (
    <main >
      <PostForm name={'Add'} action={addPost}/>
    </main>
  );
};

export default AddPostForm;