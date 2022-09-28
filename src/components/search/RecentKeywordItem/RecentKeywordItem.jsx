import React from 'react';
import * as Styled from '@/components/search/RecentKeywordItem/RecentKeywordItem.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';

const RecentKeywordItem = ({ recentKeywordList }) => {
  return (
    <Styled.RecentKeyword>
      <SearchIcon />
      &nbsp; {recentKeywordList}
    </Styled.RecentKeyword>
  );
};

export default RecentKeywordItem;
