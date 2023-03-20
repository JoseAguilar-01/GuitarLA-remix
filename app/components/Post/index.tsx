import { Link } from '@remix-run/react';
import { FC } from 'react';
import { formatDate } from '@/utils/helpers';
import { PostProps } from './interfaces';

const Post: FC<PostProps> = props => {
  const { post } = props;
  const { content, image, title, publishedAt, url } = post.attributes;

  const imageUrl = image.data.attributes.formats.small.url;

  return (
    <article className='post'>
      <img className='image' src={imageUrl} alt={`post-${title}`} />
      <div className='content'>
        <h3 className='title'>{title}</h3>
        <p className='date'>{formatDate(publishedAt)}</p>
        <p className='resume'>{content}</p>
        <Link className='link' to={`/blog/${url}`}>
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Post;
