import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Link from '@material-ui/core/Link';

const ToolbarWrapper = styled.div`
  border-bottom: 1px solid black;
  flex-grow: 1;
`;

const StyledLink = styled(Link)`
  font-weight: bold;
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
                <Typography variant="h6">
                  <StyledLink color="textPrimary" href="#">
                    Josh
                  </StyledLink>
                </Typography>
              </Grid>
              <Grid item lg>
                <Typography variant="h6">
                  <StyledLink color="textPrimary" href="#">
                    Jess
                  </StyledLink>
                </Typography>
              </Grid>
              <Grid item lg>
                <Typography variant="h6">
                  <StyledLink color="textPrimary" href="">
                    Travel
                  </StyledLink>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </ToolbarWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Header;
