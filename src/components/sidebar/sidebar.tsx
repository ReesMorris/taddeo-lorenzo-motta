import React from 'react';
import Link from 'next/link';
import Styles from './sidebar.styles';
import { pages } from '../../themes/_consts';

const Sidebar: React.FunctionComponent = () => {
  return (
    <Styles.Sidebar>
      <Styles.Title>
        <Styles.TitleSpan size='large'>
          <Link href={pages.home}>Taddeo Lorenzo Motta</Link>
        </Styles.TitleSpan>
        <Styles.TitleSpan size='small'>
          <Link href={pages.home}>TLM</Link>
        </Styles.TitleSpan>
      </Styles.Title>
      <nav>
        <Styles.NavItems>
          <Styles.NavItem>
            <Link href={pages.about}>About</Link>
          </Styles.NavItem>
          <Styles.NavItem>
            <Link href={pages.contact}>Contact</Link>
          </Styles.NavItem>
        </Styles.NavItems>
      </nav>
    </Styles.Sidebar>
  );
};

export default Sidebar;
