import { FC } from 'react';
import { ListGuitarsProps } from './interfaces';
import Guitar from '../Guitar';

const GuitarsList: FC<ListGuitarsProps> = props => {
  const { guitars } = props;

  return (
    <>
      <div className='guitars-grid'>
        {guitars.map(guitar => (
          <Guitar key={guitar.id} guitar={guitar} />
        ))}
      </div>
    </>
  );
};

export default GuitarsList;
