import styled from 'styled-components';

const Row = styled.div`
    justify-content: ${props => props.justifyContent};
    max-width:65em;
    margin:0 auto;
`;

export default Row;