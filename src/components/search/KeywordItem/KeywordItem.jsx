import React from 'react';
import * as Styled from '@/components/search/KeywordItem/KeywordItem.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';

const boldText = (suggestedKeyword, searchKeyword) => {
  if (!searchKeyword) {
    return {};
  }

  const searchKeywordIndex = suggestedKeyword.indexOf(searchKeyword);
  const prevStrOfSearchKeyword = suggestedKeyword.slice(0, searchKeywordIndex);
  const nextStrOfSearchKeyword = suggestedKeyword.slice(searchKeywordIndex + 1);

  return { prevStrOfSearchKeyword, nextStrOfSearchKeyword };
};

const KeywordItem = ({
  suggestedKeyword,
  searchKeyword,
  idx,
  handleSuggestionItemClick,
  selected,
  hasText,
}) => {
  const { prevStrOfSearchKeyword, nextStrOfSearchKeyword } = boldText(
    suggestedKeyword,
    searchKeyword
  );
  return (
    <div>
      {selected === idx && hasText ? (
        <Styled.FocusedRecentKeyword onClick={() => handleSuggestionItemClick(suggestedKeyword)}>
          {searchKeyword && (
            <>
              <SearchIcon />
              &nbsp; {prevStrOfSearchKeyword}
              <Styled.SearchKeywordHighlight>{searchKeyword}</Styled.SearchKeywordHighlight>
              {nextStrOfSearchKeyword}
            </>
          )}
        </Styled.FocusedRecentKeyword>
      ) : (
        <Styled.RecentKeyword onClick={() => handleSuggestionItemClick(suggestedKeyword)}>
          {searchKeyword && (
            <>
              <SearchIcon />
              &nbsp; {prevStrOfSearchKeyword}
              <Styled.SearchKeywordHighlight>{searchKeyword}</Styled.SearchKeywordHighlight>
              {nextStrOfSearchKeyword}
            </>
          )}
        </Styled.RecentKeyword>
      )}
    </div>
  );
};

export default KeywordItem;
