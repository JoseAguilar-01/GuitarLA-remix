import classNames from 'classnames';
import { FC } from 'react';
import { AdvertProps } from './interfaces';

const Advert: FC<AdvertProps> = props => {
  const { message, error } = props;

  return (
    <div
      className={classNames(
        error ? 'advert-error' : 'advert-success',
        'container'
      )}
    >
      <h2>{message}</h2>
    </div>
  );
};

export default Advert;
