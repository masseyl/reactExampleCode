import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  padding: .5em;
  margin-bottom: 5px;
  background-color: ${(props) => props.correct ? 'rgba(0, 200, 0, 0.2)' : 'rgba(200, 0, 0, 0.2)'};
  border: 1px dashed rgba(100,175, 255, 0.5);
`;

export default Wrapper;
