import React from 'react';
import * as Styled from '@/components/search/SearchKeywordTab/SearchKeywordTab.styled';
import RecentResult from '@/components/search/searchResult/RecentResult/RecentResult';
import SuggestionResult from '@/components/search/searchResult/SuggestionResult/SuggestionResult';

const SearchKeywordTab = ({ searchKeyword, openBox }) => {
  return (
    <div>
      {openBox === false ? null : (
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
