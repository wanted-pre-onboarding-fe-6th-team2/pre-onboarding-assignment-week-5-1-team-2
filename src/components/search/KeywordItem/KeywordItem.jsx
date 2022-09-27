import React from 'react';
import * as Styled from '@/components/search/KeywordItem/KeywordItem.styled';
import SearchIcon from '@/components/search/UI/SearchIcon';

const KeywordItem = ({ item }) => {
  return (
    <Styled.RecentKeyword>
      <SearchIcon />
      &nbsp; {item}
    </Styled.RecentKeyword>
  );
};

export default KeywordItem;
