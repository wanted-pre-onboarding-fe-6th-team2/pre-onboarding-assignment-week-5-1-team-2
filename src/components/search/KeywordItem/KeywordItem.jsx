import React from 'react';
import * as Styled from '@/components/search/KeywordItem/KeywordItem.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';

const KeywordItem = ({ item }) => {
  return (
    <Styled.RecentKeyword>
      <SearchIcon />
      {item}
    </Styled.RecentKeyword>
  );
};

export default KeywordItem;
