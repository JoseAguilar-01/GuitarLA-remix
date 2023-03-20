import { useLoaderData } from '@remix-run/react';
import { getGuitars } from '@/services/guitars.server';
import { getPosts } from '@/services/posts.server';
import { getCourse } from '@/services/curso.server';
import GuitarsList from '@/components/GuitarsList';
import PostsList from '@/components/PostsList';
import blogStyles from 'styles/blog.css';
import guitarrasStyles from 'styles/guitarras.css';
import cursoStyles from 'styles/curso.css';
import Course from '@/components/Course';

export const meta = () => {};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: blogStyles,
    },
    {
      rel: 'stylesheet',
      href: guitarrasStyles,
    },
    {
      rel: 'stylesheet',
      href: cursoStyles,
    },
  ];
};

export const loader = async () => {
  const [guitars, posts, course] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse(),
  ]);

  return { guitars: guitars.data, posts: posts.data, course: course.data };
};

const Index = () => {
  const { guitars, posts, course } = useLoaderData();

  return (
    <>
      <main className='container'>
        <h2 className='heading'>Nuestra colección</h2>
        {guitars.length > 0 && <GuitarsList guitars={guitars} />}
      </main>

      <Course course={course} />

      <div>
        <h2 className='heading'>Blog</h2>
        <section className='mt-5 container blog'>
          {posts.length > 0 && <PostsList posts={posts} />}
        </section>
      </div>
    </>
  );
};

export default Index;
