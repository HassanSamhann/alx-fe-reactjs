import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams();

  return <div>Displaying post with ID: {postId}</div>;
};

export default Post;
