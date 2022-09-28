import styled from '@emotion/styled';

const SearchTabContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 100px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #cfebfc;
`;

const SearchTabHeader = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  line-height: 1.6;
  margin: 0 0 20px 0;
`;

const SearchTabForm = styled.form`
  width: 50%;
  padding: 10px 10px 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 0;
  border-radius: 42px;
`;

const SearchTabInput = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  font-size: 1rem;
  :focus {
    outline: none;
  }
`;

const SearchTabButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 42px;
  border: 0;
  background-color: #3e8df4;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export { SearchTabContainer, SearchTabHeader, SearchTabForm, SearchTabInput, SearchTabButton };
