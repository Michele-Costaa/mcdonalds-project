import styled from "styled-components";

export const Main = styled.main `
background-color: #FFC72C;
`;

export const sectionOne = styled.section `
display: flex;
justify-content: space-around;
align-items: center;

h1 {
    width: 28vw;
    font-size: 2.3rem;
    font-weight: bold;
    color: #FFFFFF;
}

span {
    color: #db0007;
}
`;

export const Snack = styled.figure `
height: 50vh;

#mac {
    width: 25vw;
    height: 50vh;
}
`;

export const Snacks = styled.section `
`;

export const Item = styled.div `
display: flex;
justify-content: center;
align-items: center;

img {
    width: 8vw;
    margin: 5px;
}
`;