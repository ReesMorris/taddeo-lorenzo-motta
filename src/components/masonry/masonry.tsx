import React from 'react';
import Styles from './masonry.styles';

interface MasonryProps {
  breakpointCols?: number | Record<'default' | number, number>;
  children: React.ReactNode;
}

const Masonry = ({
  breakpointCols = { default: 4, 1100: 3, 700: 2, 500: 1 },
  children
}: MasonryProps) => {
  return (
    <Styles.Masonry
      breakpointCols={breakpointCols}
      className='masonry'
      columnClassName='col'
    >
      {children}
    </Styles.Masonry>
  );
};

export default Masonry;
