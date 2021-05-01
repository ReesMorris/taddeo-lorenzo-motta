import React from 'react';
import Styles from './image.styles';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className }: ImageProps) => {
  return <Styles.Image src={src} alt={alt} className={className} />;
};

export default Image;
