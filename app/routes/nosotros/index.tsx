import styles from 'styles/nosotros.css';
import image from 'public/img/nosotros.jpg';

export const meta = () => {
  return {
    title: 'GuitarLA - Nosotros',
  };
};

export const links = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
    {
      rel: 'preload',
      href: image,
      as: 'image',
    },
  ];
};

const Nosotros = () => {
  return (
    <main className='container we'>
      <h2 className='heading'>Nosotros</h2>
      <div className='content'>
        <img src={image} alt='nosotros.jpg' />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
            corrupti unde, deleniti neque officiis dolore libero tempora ipsum
            quae ex quas aperiam similique itaque, sit culpa in maxime. Placeat
            quasi voluptates magni laborum amet molestiae, nemo hic maiores
            repellendus sequi quibusdam officia ex illo facilis? Laborum aperiam
            distinctio adipisci architecto.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore,
            corrupti unde, deleniti neque officiis dolore libero tempora ipsum
            quae ex quas aperiam similique itaque, sit culpa in maxime. Placeat
            quasi voluptates magni laborum amet molestiae, nemo hic maiores
            repellendus sequi quibusdam officia ex illo facilis? Laborum aperiam
            distinctio adipisci architecto.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Nosotros;
