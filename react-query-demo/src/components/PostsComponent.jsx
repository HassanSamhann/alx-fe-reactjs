import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { data, isError, isLoading, isFetching, refetch } = useQuery(
    'posts',
    fetchPosts,
    {
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes
      staleTime: 1000 * 60 * 1, // Data is fresh for 1 minute
      refetchOnWindowFocus: true, // Refetch on window focus
      keepPreviousData: true, // Keep previous data while fetching new data
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error: {isError.message}</div>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={refetch}>Refetch Posts</button>
      {isFetching && <div>Fetching new data...</div>}
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
