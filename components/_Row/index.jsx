import styled from 'styled-components';

const Row = styled.div`
    max-width:65em;
    margin:0 auto;
    display: flex;
    justify-content: ${props => props.justifyContent ? props.justifyContent : 'space-between'};
    flex-wrap: wrap;
    max-width:65em;
    margin:0 auto;
`;

export default Row;