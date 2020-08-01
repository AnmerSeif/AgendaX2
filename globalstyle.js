import { createGlobalStyle } from 'styled-components';
import breakpoints from './breakpoints';

export default createGlobalStyle`

    body{
        background-color:#e9e8e9;
        
        .container{
            padding-top:8.3125em;
            
            ${breakpoints.greaterThan('desktop')`
                padding-top:0;
            `}
        }
        
    }
`;



