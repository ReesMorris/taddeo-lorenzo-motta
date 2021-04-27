/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import NextLink from 'next/link';

interface LinkWrapperProps {
  href: string;
  children: React.ReactNode;
}

const LinkWrapper = ({ href, children, ...rest }: LinkWrapperProps) => {
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  );
};

export default LinkWrapper;
