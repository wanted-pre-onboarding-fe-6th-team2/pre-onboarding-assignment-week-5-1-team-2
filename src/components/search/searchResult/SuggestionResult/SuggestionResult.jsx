import React from 'react';
import * as Styled from '@/components/search/searchResult/SuggestionResult/SuggestionResult.styled';
import SearchIcon from '@/components/search/UI/SearchIcon';
import KeywordItem from '@/components/search/KeywordItem/KeywordItem';

const SuggestionResult = ({ searchSuggestList, searchKeyword }) => {
  const sliceSearchSuggestList = searchSuggestList.slice(0, 10);

  return (
    <>
      <Styled.InputKeywordBox>
        <Styled.InputKeyword>
          <SearchIcon />
          &nbsp; {searchKeyword}
        </Styled.InputKeyword>
      </Styled.InputKeywordBox>
      <Styled.SuggestionKeywordBox>
        <Styled.SubText>추천검색어</Styled.SubText>
        {searchSuggestList.length === 0 ? (
          <Styled.NotMatchSearchKeyword>검색어 없음</Styled.NotMatchSearchKeyword>
        ) : (
          sliceSearchSuggestList.map(item => <KeywordItem item={item.sickNm} key={item.sickCd} />)
        )}
      </Styled.SuggestionKeywordBox>
    </>
  );
};

export default SuggestionResult;
