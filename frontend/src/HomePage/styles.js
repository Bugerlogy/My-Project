import styled from "@emotion/styled";

export const Container = styled.div `
background: black;
padding:0px 60px;
display:flex;
flex-direction: column;

`;

export const TextContainer = styled.div `
color:white;
justify-content:center;
display:flex;
font-size:60px;
padding-bottom:20px;
`;

export const Children = styled.div `
color: grey;
display:flex;
width: fit-content;
align-items: center;
flex-direction: column;
font-size: 25px;
padding:20px 0px;
font-family: Helvetica ,Helvetica,Arial,sans-serif;
margin: 50px 30px 50px 0px;
:hover .children-img {
    border: 3px solid white;
    border-radius: 4px;
    cursor: pointer;

}
:hover .children-text {
   color: white;
   cursor: pointer;

}
`;

export const ManageProfile = styled.div `
color: grey;
justify-content:center;
display:flex;
font-size: 25px;
width: fit-content;
border: 1px solid grey;
padding: 7px 40px;
:hover{
   color: white;
   border: 1px solid white;

}
`;