import { useLoaderData } from 'react-router';
import { ClientOnly } from 'remix-utils';
import { getPosts } from '@/services/posts.server';
import PostsList from '@/components/PostsList';
import { PostProperties } from './interfaces';

export const meta = () => {
  return {
    title: 'GuitarLA - Blog',
  };
};

export const loader = async () => {
  const { data } = await getPosts();

  return data;
};

const Blog = () => {
  const posts = useLoaderData() as PostProperties[];

  return (
    <ClientOnly fallback={<p>Cargando...</p>}>
      {() => (
        <>
          <h2 className='heading'>Blog</h2>
          <section className='blog'>
            <PostsList posts={posts} />
          </section>
        </>
      )}
    </ClientOnly>
  );
};

export default Blog;
