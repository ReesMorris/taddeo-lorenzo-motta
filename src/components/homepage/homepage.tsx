import React from 'react';
import { IHomepageData } from '../../../models/homepage-data';
import getImagePath from '../../utils/get-image-path';
import Heading from '../heading';
import Page from '../page';
import Styles from './homepage.styles';

export interface HomepageProps {
  data: IHomepageData[];
}

const Homepage = ({ data }: HomepageProps) => {
  return (
    <Page>
      <Heading className='visually-hidden'>Taddeo Lorenzo Motta</Heading>
      <Styles.Grid>
        {data.map(item => (
          <Styles.GridItem key={item.label}>
            <Styles.Link href={item.link}>
              <Styles.Label>
                <Styles.LabelText>{item.label}</Styles.LabelText>
              </Styles.Label>
              <Styles.Image
                src={getImagePath(item.image)}
                alt={item.image_alt}
              />
            </Styles.Link>
          </Styles.GridItem>
        ))}
      </Styles.Grid>
    </Page>
  );
};

export default Homepage;
