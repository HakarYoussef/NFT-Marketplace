import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

export const MoonIcon = styled(FiMoon)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;

export const SunIcon = styled(FiSun)`
  color: ${(props) => props.theme.text};
  cursor: pointer;
`;
