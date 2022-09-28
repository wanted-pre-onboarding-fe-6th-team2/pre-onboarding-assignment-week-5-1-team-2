import React from 'react';
import * as Styled from '@/components/search/SearchKeywordTab/SearchKeywordTab.styled';
import RecentResult from '@/components/search/searchResult/RecentResult/RecentResult';
import SuggestionResult from '@/components/search/searchResult/SuggestionResult/SuggestionResult';

const SearchKeywordTab = ({
  searchKeyword,
  isTabOpen,
  hasText,
  handleSuggestionItemClick,
  options,
  selected,
}) => {
  return (
    <div>
      {isTabOpen === false ? null : (
        <Styled.Container>
          {hasText === false ? (
            <RecentResult />
          ) : (
            <SuggestionResult
              searchKeyword={searchKeyword}
              handleSuggestionItemClick={handleSuggestionItemClick}
              options={options}
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
