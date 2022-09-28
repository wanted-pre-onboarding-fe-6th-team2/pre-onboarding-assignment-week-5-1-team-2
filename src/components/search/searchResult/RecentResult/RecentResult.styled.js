import styled from '@emotion/styled';

const RecentKeywordBox = styled.div`
  width: 450px;
  height: 100%;
  padding: 20px;
`;

const SubText = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: gray;
`;

const SuggestionKeywordWrraper = styled.div`
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

export { RecentKeywordBox, SubText, SuggestionKeywordWrraper, SuggestionKeyword };
