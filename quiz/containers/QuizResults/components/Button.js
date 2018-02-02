import styled from 'styled-components';

const Button = styled.div`
margin-bottom: 5px;
margin-left: 25%;
display:inline-block;
padding: .3em;
border: 1px, solid, rgba(0,0,100,0.5);
background-color: rgba(0, 220, 100, 0.2);
border-radius: 4px;
width: 50%;
&:hover {
  background-color: rgba(0, 220, 100, 0.6);
}
`;

export default Button;
