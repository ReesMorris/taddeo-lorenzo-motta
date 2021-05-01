import { useRouter } from 'next/dist/client/router';
import React from 'react';
import useTabListener from '../../hooks/use-tab-listener';
import Styles from './page.styles';

interface PageProps {
  children: React.ReactNode;
}

const Page = ({ children }: PageProps) => {
  useTabListener(true);
  const router = useRouter();

  return (
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
  );
};

export default Page;
