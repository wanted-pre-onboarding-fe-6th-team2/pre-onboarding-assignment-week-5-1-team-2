import React from 'react';
import * as Styled from '@/components/search/searchResult/SuggestionResult/SuggestionResult.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import KeywordItem from '@/components/search/KeywordItem/KeywordItem';

const SuggestionResult = ({ searchKeyword }) => {
  const suggestionKeywords = ['A형간염', '우울증', '감기', '코로나', '비염'];

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
        {suggestionKeywords.map((item, i) => (
          <KeywordItem item={item} key={i} />
        ))}
      </Styled.SuggestionKeywordBox>
    </>
  );
};

export default SuggestionResult;
