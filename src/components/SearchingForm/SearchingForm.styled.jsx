import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  margin: 10px 0;
  align-items: center;
`;

export const Input = styled.input`
  width: 200px;
  height: 35px;
  border-radius: 5px;
  border: dashed;
  color: mediumvioletred;
  background-color: antiquewhite;
  padding: 7px;
  font-size: 15px;
`;

export const Button = styled.button`
  width: 40px;
  border-radius: 10px;
  border: dashed;
  color: mediumvioletred;
  background-color: antiquewhite;
  height: 40px;
  cursor: pointer;
  :hover {
    background: darkmagenta;
    color: aquamarine;
  }
`;
