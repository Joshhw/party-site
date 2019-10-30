import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const FooterWrapper = styled.div`
  border-top: 1px solid black;
  text-align: center;
  padding: 1em;
`;

const Footer: React.FC = () => {
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <FooterWrapper>
          <Typography variant="subtitle2" align="center">
            This is where I tell you something irrelevant
          </Typography>
        </FooterWrapper>
      </Container>
    </React.Fragment>
  );
};

export default Footer;
