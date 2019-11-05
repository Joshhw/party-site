import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import jess from '../assets/jess.jpg';
import josh from '../assets/josh.jpg';
import stumpy from '../assets/stumpy.jpg';
import us from '../assets/us.jpg';
import style from 'styled-components';
import { Typography } from '@material-ui/core';

const Image = style.img`
width:100%;
height: auto;
`;
const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={1}>
        <Grid item md={4}>
          <Image src={jess} />
        </Grid>
        <Grid item md={4}>
          <Image src={stumpy} />
        </Grid>
        <Grid item md={4}>
          <Image src={josh} />
        </Grid>
        <Grid item md={12}>
          <Typography variant={'body1'}>
            Welcome to our site. This used be our wedding registration site and
            now we're hoping to bring more life to it. Some folks have asked us
            over time for various bits of information and we hope that this site
            will provide that output. We have pages for ourselves as well as
            some of our travel information. Hopefully you find some of this
            information relevant to your lives wether it's our map itinerary or
            our relationship goals and plans.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
