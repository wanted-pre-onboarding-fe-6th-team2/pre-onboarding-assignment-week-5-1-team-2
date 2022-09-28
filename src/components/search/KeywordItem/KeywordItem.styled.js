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

export { RecentKeyword, FocusedRecentKeyword };
