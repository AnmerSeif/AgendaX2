import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
    phablet  : "770px",
    tablet : "820px",
    laptop  : "1010px",
    desktop   : "1440px",
    desktopXL   : "1900px",
    desktopXXL   : "2500px"
});

export default customMedia;