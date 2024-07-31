import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPost, updatePost } from '../../redux/actions/postActions';

const EditPost = () => {
  const { id } = useParams(); // Get the post ID from the URL parameters
  const navigate = useNavigate(); // Initialize useNavigate for programmatic navigation
  const dispatch = useDispatch(); // Initialize useDispatch to dispatch actions
  const post = useSelector((state) => state.posts.post); // Get the post from the Redux store

  const [title, setTitle] = useState(''); // State for the post title
  const [content, setContent] = useState(''); // State for the post content

  // Fetch the post data when the component mounts or the ID changes
  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  // Update local state when the post data is fetched
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  // Handle form submission to update the post
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(id, { title, content }));
    navigate(`https://blog-app-6ubi.onrender.com/posts/${id}`); // Redirect to the updated post page or another route
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          required
        />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
