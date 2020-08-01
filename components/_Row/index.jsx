import styled from 'styled-components';
import breakpoints from '../../breakpoints';

const Row = styled.div`
    max-width:65em;
    margin:0 auto;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    flex-wrap: wrap;
    max-width:65em;
    margin:0 auto;
    
  ${breakpoints.greaterThan('laptop')`
    display: flex;
    justify-content: space-between;
    `}
`;

export default Row;