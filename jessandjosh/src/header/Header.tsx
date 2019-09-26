import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const ToolbarWrapper = styled.div`
  border-bottom: 1px solid black;
  flex-grow: 1;
`;

const Header: React.FC = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <ToolbarWrapper>
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item lg>
                Josh
              </Grid>
              <Grid item lg>
                Jess
              </Grid>
              <Grid item lg>
                Travels
              </Grid>
            </Grid>
          </Toolbar>
        </ToolbarWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Header;
