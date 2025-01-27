import styled from 'styled-components';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Wrapper>
      <Text>The Silverback Guarantee | 2024</Text>
    </Wrapper>
  );
}

const Wrapper = styled(Paper)`
  background: #262262;
  border-radius: 0;
  padding: 20px;
  text-align: center;
`;

const Text = styled(Typography)`
  color: #ffffff;
  font-weight: 500;
`;
