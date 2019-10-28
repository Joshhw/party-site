import React from 'react';
import style from 'styled-components';

const BodyWrapper = style.div`
  position: relative;
  min-height: 100vh;
`;
const Body: React.FC = () => {
  return (
    <BodyWrapper>
      <p>Coming Soon.</p>
    </BodyWrapper>
  );
};

export default Body;
