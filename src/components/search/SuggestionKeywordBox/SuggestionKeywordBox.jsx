import React from 'react';
import * as Styled from '@/components/search/SuggestionKeywordBox/SuggestionKeywordBox.styled';
import RecentResult from '@/components/search/searchResult/RecentResult/RecentResult';
import SuggestionResult from '@/components/search/searchResult/SuggestionResult/SuggestionResult';

const SuggestionKeywordBox = ({ searchKeyword, openBox }) => {
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

export default SuggestionKeywordBox;
