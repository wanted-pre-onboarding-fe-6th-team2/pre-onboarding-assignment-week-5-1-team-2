import React from 'react';
import * as Styled from '@/components/search/KeywordItem/KeywordItem.styled';
import SearchIcon from '@/components/search/UI/SearchIcon';

const KeywordItem = ({ item, idx, handleSuggestionItemClick, selected, hasText }) => {
  console.log(item);
  return (
    <div>
      {selected === idx && hasText === true ? (
        <Styled.FocusedRecentKeyword onClick={() => handleSuggestionItemClick(item)}>
          <SearchIcon />
          &nbsp; {item}
        </Styled.FocusedRecentKeyword>
      ) : (
        <Styled.RecentKeyword onClick={() => handleSuggestionItemClick(item)}>
          <SearchIcon />
          &nbsp; {item}
        </Styled.RecentKeyword>
      )}
    </div>
  );
};

export default KeywordItem;
