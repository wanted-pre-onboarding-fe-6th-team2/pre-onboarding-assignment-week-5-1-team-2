import React from 'react';
import * as Styled from '@/components/search/SuggestionKeywordBox/SuggestionKeywordBox.styled';
import RecentResult from '@/components/search/searchResult/RecentResult/RecentResult';
import RecommandResult from '@/components/search/searchResult/RecommandResult/RecommandResult';

const SuggestionKeywordBox = ({ searchKeyword, openBox }) => {
  return (
    <div>
      {openBox === false ? null : (
        <Styled.Container>
          {searchKeyword === '' ? (
            <RecentResult />
          ) : (
            <RecommandResult searchKeyword={searchKeyword} />
          )}
        </Styled.Container>
      )}
    </div>
  );
};

export default SuggestionKeywordBox;
