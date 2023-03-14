import axios from "axios";

const baseURL = "http://localhost:9090/api";

//example of backend endpoint with queries is GET /api/articles?sort_by=created_at&order=desc&topic=coding
//backend endpoint without queries is GET /api/articles

//fetchArticles will be used to get all articles. You can pass in a sort_by, order and topic to filter the articles. If you don't pass in any of these, it will return all articles in the default order. And example of fetching all articles for the coding topic would be fetchArticles('created_at', 'desc', 'coding'). It will return an array of articles in the order of most recent to least recent.
export const fetchArticles = async (sort_by, order, topic) => {
  const { data } = await axios.get(`${baseURL}/articles`, {
    params: {
      sort_by: sort_by,
      order: order,
      topic: topic,
    },
  });
  return data.articles;
};

//backend endpoint is GET /api/topics
//fetchTopics will be used to get all topics. It will return an array of topics.
export const fetchTopics = async () => {
  const { data } = await axios.get(`${baseURL}/topics`);
  return data.topics;
};

//backend endpoint is GET /api/articles?topic=:topic
//fetchArticlesByTopic will be used to get all articles for a specific topic. An example of fetching all articles for the coding topic would be fetchArticlesByTopic('coding'). It will return an array of articles.
// export const fetchArticlesByTopic = async (topic) => {
//   console.log(topic, "param result from the api");
//   const { data } = await axios.get(`${baseURL}/articles?topic=${topic}`);
//   return data.articles;
// };

//backend endpoint is GET /api/articles/:article_id
// params accepted are (selectedArticle_id)
//fetchArticleById will be used to get a single article by its id. An example of fetching an article by its id would be fetchArticleById(1). It will return an object of the article.
export const fetchArticleById = async (article_id) => {
  const { data } = await axios.get(`${baseURL}/articles/${article_id}`);
  return data;
};

//backend endpoint is GET /api/articles/:article_id/comments
// params accepted are (article_id)
// fetchCommentsByArticleId will be used to get all comments for a specific article. An example of fetching all comments for an article with an id of 1 would be fetchCommentsByArticleId(1). It will return an array of comments.
export const fetchCommentsByArticleId = async (article_id) => {
  const { data } = await axios.get(
    `${baseURL}/articles/${article_id}/comments`
  );
  return data.comments;
};

//backend endpoint is PATCH /api/articles/:article_id
// params accepted are (article_id, inc_votes)
// updateArticleVotes will be used to update the votes for a specific article. An example of updating the votes for an article with an id of 6 would be updateArticleVotes(6, 1) . It will return an object of the article.
export const updateArticleVotes = async (article_id, vote) => {
  const { data } = await axios.patch(`${baseURL}/articles/${article_id}`, {
    inc_votes: vote,
  });
  return data;
};

// backend endpoint is POST /api/articles/:article_id/comments
// params accepted are (article_id, username, body)
// postCommentToArticle_id will be used to post a comment to a specific article. An example of posting a comment to an article with an id of 1 would be postCommentToArticle_id(1, 'jessjelly', 'this is a comment'). It will return an object of the comment.
export const postCommentToArticle_id = async (article_id, username, body) => {
  const { data } = await axios.post(
    `${baseURL}/articles/${article_id}/comments`,
    {
      username: username,
      body: body,
    }
  );
  return data;
};

//backend endpoint is DELETE /api/comments/:comment_id
// params accepted are (comment_id)
// deleteCommentById will be used to delete a comment by its id. An example of deleting a comment by its id would be deleteCommentById(1). It will return an object of the comment.
export const deleteCommentById = async (comment_id) => {
  const { data } = await axios.delete(`${baseURL}/comments/${comment_id}`);
  return data;
};

// backend endpoint is GET /api/users
//exports.selectUsers = () => {
//fetchUsers will be used to get all users. It will return an array of users.
export const fetchUsers = async () => {
  const { data } = await axios.get(`${baseURL}/users`);
  return data.users;
};
