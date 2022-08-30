import styled from "styled-components";

export const Container = styled.div`
  background: #3936c0;
  width: 414px;
  min-height: 896px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  img {
    margin-top: 50px;
  }
  span {
    color: red;
    font-size: 0.9em;
  }

  textarea {
    width: 342px;
    height: 138px;
    background: #ffffff;
    border-radius: 10px;
    margin: 25px 0;
    padding: 10px;
  }
`;

export const List = styled.ul`
  li {
    display: flex;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
    background: rgba(255, 255, 255, 0.14);
    width: 342px;
    height: 68px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    color: white;
    list-style-type: none;
  }
`;

export const Button = styled.button`
  background: ${(props) => (props.isOn ? "#000000" : "gray")};
  color: white;
  border-radius: 10px;
  width: 342px;
  height: 64px;
  border: none;
  font-size: 17px;
  cursor: pointer;
`;
