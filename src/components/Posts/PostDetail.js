import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../../redux/actions/postActions';
import { useParams } from 'react-router-dom';
import CommentSection from './CommentSection';

const PostDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(fetchPost(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <CommentSection postId={post._id} />
    </div>
  );
};

export default PostDetail;
