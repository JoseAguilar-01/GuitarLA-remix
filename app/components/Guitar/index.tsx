import { Link } from '@remix-run/react';
import { FC } from 'react';
import { GuitarProps } from './interfaces';

const Guitar: FC<GuitarProps> = props => {
  const { guitar } = props;
  const { name, price, description, image, url } = guitar.attributes;
  const imageUrl = image.data.attributes.formats.medium.url;

  return (
    <div className='guitar'>
      <img src={imageUrl} alt={`guitar-${name}.jpg`} />
      <div className='content'>
        <h3>{name}</h3>
        <p className='description'>{description}</p>
        <p className='price'>${price}</p>
        <Link to={`/guitarras/${url}`} className='link'>
          Ver guitarra
        </Link>
      </div>
    </div>
  );
};

export default Guitar;
