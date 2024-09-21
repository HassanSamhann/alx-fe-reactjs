import axios from 'axios';

export const searchGitHubUser = async (username) => {
  const response = await axios.get(`https://api.github.com/users/${username}`);
  return response.data;
};
