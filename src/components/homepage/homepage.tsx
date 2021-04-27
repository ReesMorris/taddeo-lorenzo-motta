import React from 'react';
import { IHomepageData } from '../../../models/homepage-data';
import getImagePath from '../../utils/get-image-path';
import Page from '../page';
import Styles from './homepage.styles';

interface HomepageProps {
  data: IHomepageData[];
}

const Homepage = ({ data }: HomepageProps) => {
  return (
    <Page>
      <Styles.Grid>
        {data.map(item => (
          <Styles.GridItem key={item.label}>
            <Styles.Link href={item.link}>
              <Styles.Label>{item.label}</Styles.Label>
              <Styles.Image src={getImagePath(item.image)} alt={item.label} />
            </Styles.Link>
          </Styles.GridItem>
        ))}
      </Styles.Grid>
    </Page>
  );
};

export default Homepage;
