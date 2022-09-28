import React from 'react';
import * as Styled from '@/components/search/SuggestionKeywordItem/SuggestionKeywordItem.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';

const boldText = (suggestedKeyword, searchKeyword) => {
  if (!searchKeyword) {
    return {};
  }

  const searchKeywordIndex = suggestedKeyword.indexOf(searchKeyword);
  const prevStrOfSearchKeyword = suggestedKeyword.slice(0, searchKeywordIndex);
  const nextStrOfSearchKeyword = suggestedKeyword.slice(searchKeywordIndex + searchKeyword.length);
  return { prevStrOfSearchKeyword, nextStrOfSearchKeyword };
};

const SuggestionKeywordItem = ({
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
              <Styled.IconWarraper>
                <SearchIcon />
              </Styled.IconWarraper>
              {prevStrOfSearchKeyword}
              <Styled.SearchKeywordHighlight>{searchKeyword}</Styled.SearchKeywordHighlight>
              {nextStrOfSearchKeyword}
            </>
          )}
        </Styled.FocusedRecentKeyword>
      ) : (
        <Styled.RecentKeyword onClick={() => handleSuggestionItemClick(suggestedKeyword)}>
          {searchKeyword && (
            <>
              <Styled.IconWarraper>
                <SearchIcon />
              </Styled.IconWarraper>
              {prevStrOfSearchKeyword}
              <Styled.SearchKeywordHighlight>{searchKeyword}</Styled.SearchKeywordHighlight>
              {nextStrOfSearchKeyword}
            </>
          )}
        </Styled.RecentKeyword>
      )}
    </div>
  );
};

export default SuggestionKeywordItem;
