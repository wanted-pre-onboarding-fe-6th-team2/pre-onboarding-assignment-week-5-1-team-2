import React from 'react';
import * as Styled from '@/components/search/SearchKeywordTab/SearchKeywordTab.styled';
import RecentResult from '@/components/search/searchResult/RecentResult/RecentResult';
import SuggestionResult from '@/components/search/searchResult/SuggestionResult/SuggestionResult';

const SearchKeywordTab = ({
  searchSuggestList,
  searchKeyword,
  isTabOpen,
  hasText,
  handleSuggestionItemClick,
  selected,
}) => {
  return (
    <div>
      {isTabOpen && (
        <Styled.Container>
          {!hasText ? (
            <RecentResult />
          ) : (
            <SuggestionResult
              searchKeyword={searchKeyword}
              searchSuggestList={searchSuggestList}
              handleSuggestionItemClick={handleSuggestionItemClick}
              selected={selected}
              hasText={hasText}
            />
          )}
        </Styled.Container>
      )}
    </div>
  );
};

export default SearchKeywordTab;
