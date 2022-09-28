import styled from '@emotion/styled';

const RecentKeyword = styled.li`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 25px;
  margin: 10px 0px;
  :hover {
    background-color: azure;
  }
`;

const FocusedRecentKeyword = styled.li`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 25px;
  margin: 10px 0px;
  background-color: lightgray;
`;

const SearchKeywordHighlight = styled.em`
  font-style: normal;
  font-weight: 700;
`;

const IconWarraper = styled.div`
  margin-right: 10px;
`;

export { FocusedRecentKeyword, RecentKeyword, SearchKeywordHighlight, IconWarraper };
