import { FC } from 'react';
import { CourseProps } from './interfaces';

const Course: FC<CourseProps> = props => {
  const { course } = props;
  const { content, title, image } = course.attributes;

  const imageUrl = image.data.attributes.url;

  const style = {
    backgroundImage: `linear-gradient( to right, rgb( 0 0 0 / .65 ), rgb( 0 0 0 / .7) ), url(${imageUrl})`,
  };

  return (
    <section className='course' style={style}>
      <div className='container course-grid'>
        <div className='content'>
          <h2 className='heading'>{title}</h2>
          <p className='content'>{content}</p>
        </div>
      </div>
    </section>
  );
};

export default Course;
