import React from 'react';
import * as Styled from '@/components/search/SearchKeywordTab/SearchKeywordTab.styled';
import RecentResult from '@/components/search/searchResult/RecentResult/RecentResult';
import SuggestionResult from '@/components/search/searchResult/SuggestionResult/SuggestionResult';

const SearchKeywordTab = ({ searchKeyword, isTabOpen }) => {
  return (
    <div>
      {isTabOpen === false ? null : (
        <Styled.Container>
          {searchKeyword === '' ? (
            <RecentResult />
          ) : (
            <SuggestionResult searchKeyword={searchKeyword} />
          )}
        </Styled.Container>
      )}
    </div>
  );
};

export default SearchKeywordTab;
