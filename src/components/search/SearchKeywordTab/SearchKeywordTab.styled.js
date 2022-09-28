import styled from '@emotion/styled';

const Container = styled.div`
  width: 490px;
  min-height: 230px;
  max-height: 460px;
  box-shadow: 0 5px 3px 3px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  background-color: white;
  margin-top: 15px;
`;

const RecentKeywordBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px;
`;

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
`;

const SubText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: gray;
`;

const RecommandKeywordWrraper = styled.div`
  border-top: 1px solid lightgray;
  width: 450px;
  height: 100%;
  padding: 20px;
`;

const SuggestionKeyword = styled.button`
  min-width: 50px;
  height: 40px;
  border: 1px solid aliceblue;
  border-radius: 25px;
  margin-top: 15px;
  margin-right: 10px;
  padding: 0 15px;
  background-color: aliceblue;
  color: #007be9;
  font-size: 14px;
  font-weight: bold;
`;

const RecommandKeywordBox = styled.div``;
export {
  Container,
  RecentKeywordBox,
  InputKeywordBox,
  InputKeyword,
  SubText,
  RecommandKeywordWrraper,
  SuggestionKeyword,
  SuggestionKeywordBox,
  RecommandKeywordBox,
};
