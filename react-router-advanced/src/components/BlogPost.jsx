import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { Id } = useParams();

  return <div>Displaying post with ID: {Id}</div>;
};

export default BlogPost;
