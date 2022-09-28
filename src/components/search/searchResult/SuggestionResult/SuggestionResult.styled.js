import styled from '@emotion/styled';

const SuggestionKeywordBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px;
`;

const InputKeywordBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px 0px 0px 20px;
`;

const InputKeyword = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 25px;
  :hover {
    background-color: azure;
  }
  column-gap: 10px;
`;

const SubText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: gray;
`;

export { InputKeywordBox, InputKeyword, SubText, SuggestionKeywordBox };
