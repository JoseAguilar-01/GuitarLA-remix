import { FC } from 'react';
import { PostsListProps } from './interfaces';
import Post from '../Post';

const PostsList: FC<PostsListProps> = props => {
  const { posts } = props;

  return (
    <>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostsList;
