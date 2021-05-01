import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useTabListener from '../../hooks/use-tab-listener';
import SEO, { ISEO } from '../seo/seo';
import Styles from './page.styles';

interface PageProps {
  seo?: ISEO;
  children: React.ReactNode;
}

const Page = ({ seo, children }: PageProps) => {
  useTabListener(true);
  const router = useRouter();

  return (
    <>
      <SEO {...seo} />
      <Styles.Page>
        <Styles.Content>{children}</Styles.Content>

        {router.route !== '/' && (
          <Styles.Return>
            <Styles.ReturnLink href='/'>
              <Styles.ReturnText forwardedAs='span'>Back</Styles.ReturnText>
            </Styles.ReturnLink>
          </Styles.Return>
        )}
      </Styles.Page>
    </>
  );
};

export default Page;
