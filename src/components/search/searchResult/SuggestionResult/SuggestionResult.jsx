import React from 'react';
import * as Styled from '@/components/search/searchResult/SuggestionResult/SuggestionResult.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import KeywordItem from '@/components/search/KeywordItem/KeywordItem';

const SuggestionResult = ({ searchSuggestList, searchKeyword }) => {
  const sliceSearchSuggestList = searchSuggestList.slice(0, 10);

  return (
    <>
      <Styled.InputKeywordBox>
        <Styled.InputKeyword>
          <SearchIcon />
          {searchKeyword}
        </Styled.InputKeyword>
      </Styled.InputKeywordBox>
      <Styled.SuggestionKeywordBox>
        <Styled.SubText>추천검색어</Styled.SubText>
        {sliceSearchSuggestList.length === 0 ? (
          <Styled.NotMatchSearchKeyword>검색어 없음</Styled.NotMatchSearchKeyword>
        ) : (
          sliceSearchSuggestList.map(item => (
            <KeywordItem
              suggestedKeyword={item.sickNm}
              searchKeyword={searchKeyword}
              key={item.sickCd}
            />
          ))
        )}
      </Styled.SuggestionKeywordBox>
    </>
  );
};

export default SuggestionResult;
