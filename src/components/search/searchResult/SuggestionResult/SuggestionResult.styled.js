import styled from '@emotion/styled';

const SuggestionKeywordBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px;
  text-align: center;
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
`;

const SubText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: gray;
  text-align: left;
`;

const NotMatchSearchKeyword = styled.span`
  display: inline-block;
  margin-top: 30px;
`;

export { InputKeywordBox, InputKeyword, SubText, SuggestionKeywordBox, NotMatchSearchKeyword };
