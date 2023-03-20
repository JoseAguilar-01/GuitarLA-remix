import { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from 'react-router';
import { getPostByUrl } from '@/services/posts.server';
import { formatDate } from '@/utils/helpers';
import { PostProperties } from './interfaces';

export const meta = (props: any) => {
  if (!props.data) {
    return {
      title: 'GuitarLA - Post no encontrado',
    };
  }

  const { title } = props.data.attributes;

  return {
    title: `GuitarLA - ${title}`,
  };
};

export const loader = async (props: LoaderArgs) => {
  const { params } = props;

  const { data } = await getPostByUrl(params.postUrl as string);

  if (data.length === 0) {
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw new Response('', {
      status: 404,
      statusText: 'Post no encontrado',
    });
  }

  return data[0];
};

const Post = () => {
  const post = useLoaderData() as PostProperties;
  const { content, image, title, publishedAt } = post.attributes;

  const imageUrl = image.data.attributes.url;

  return (
    <article className='post mt-5'>
      <img className='image' src={imageUrl} alt={`post-${title}`} />
      <div className='content'>
        <h3 className='title'>{title}</h3>
        <p className='date'>{formatDate(publishedAt)}</p>
        <p className='resume'>{content}</p>
      </div>
    </article>
  );
};

export default Post;
