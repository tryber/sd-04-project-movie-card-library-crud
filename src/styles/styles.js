import styled from 'styled-components';

export const HeaderStyle = styled.header`
  align-items: center;
  background: linear-gradient(whitesmoke, #ffffff);
  display: flex;
  font-size: 25px;
  font-weight: 700;
  height: 10vh;
  justify-content: space-around;
  min-width: 100vw;
  a {
    color: black;
    font-size: 16px;
    text-decoration: none;
  }
`;

export const MovieListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: auto;
  margin: 5vh auto;
  justify-content: center;
  overflow: hidden;
`;

export const FormStyle = styled.div`
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 100%;
  textarea {
    border-radius: 4px;
    border: 2px solid #ccc;
    box-sizing: border-box;
    height: 100px;
    margin: 12px 0;
    padding: 6px 10px;
    resize: none;
  }
  select {
    border-radius: 4px;
    border: none;
    margin: 12px 0;
    padding: 12px 20px;
    width: 100%;
  }
  input {
    border-radius: 4px;
    border: 2px solid #ccc;
    box-sizing: border-box;
    display: inline-block;
    margin: 8px 0;
    padding: 12px 20px;
  }
  button {
    background-color: whitesmoke;
    border-radius: 4px;
    border: 2px solid #ccc;
    color: black;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
    margin: 4px 2px;
    padding: 16px 32px;
    text-decoration: none;
    width: fit-content;
  }
`;

export const MovieCardStyle = styled.div`
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: ${(props) => props.height};
  justify-content: flex-start;
  margin: 1vh 1vw 1vh 1vw;
  overflow: hidden;
  transition: 0.3s;
  padding: 1px;
  width: ${(props) => props.width};
  article {
    p {
      height: 100px;
    }
  }
  img {
    border-radius: 5px;
    width: 100%;
  }
  &:hover {
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.7);
    transition: 0.3s;
  }
`;
