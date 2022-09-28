import styled from '@emotion/styled';

const RecentKeyword = styled.div`
  display: flex;
  align-items: center;
  vertical-align: middle;
  height: 25px;
  margin: 10px 0px;
  :hover {
    background-color: azure;
  }
  column-gap: 10px;
`;

const SearchKeywordHighlight = styled.em`
  font-style: normal;
  font-weight: 700;
`;

export { RecentKeyword, SearchKeywordHighlight };
