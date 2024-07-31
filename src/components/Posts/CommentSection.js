import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchComments, addComment } from '../../redux/actions/commentActions';

const CommentSection = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const auth = useSelector((state) => state.auth);
  
  const [content, setContent] = useState('');

  useEffect(() => {
    dispatch(fetchComments(postId));
  }, [dispatch, postId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      dispatch(addComment(postId, { content }));
      setContent('');
    }
  };

  return (
    <div>
      <h3>Comments</h3>
      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <p><strong>{comment.author.name}:</strong> {comment.content}</p>
          </div>
        ))}
      </div>
      {auth.isAuthenticated && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write a comment..."
            required
          />
          <button type="submit">Add Comment</button>
        </form>
      )}
      {!auth.isAuthenticated && <p>You need to be logged in to comment.</p>}
    </div>
  );
};

export default CommentSection;
