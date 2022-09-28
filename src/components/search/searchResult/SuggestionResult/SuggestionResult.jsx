import React from 'react';
import * as Styled from '@/components/search/searchResult/SuggestionResult/SuggestionResult.styled';
import SearchIcon from '@/components/search/UI/SearchIcon';
import KeywordItem from '@/components/search/KeywordItem/KeywordItem';

const SuggestionResult = ({
  searchKeyword,
  handleSuggestionItemClick,
  options,
  selected,
  hasText,
}) => {
  console.log(options);
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
        {options.map((item, i) => (
          <KeywordItem
            item={item}
            key={i}
            idx={i}
            handleSuggestionItemClick={handleSuggestionItemClick}
            selected={selected}
            hasText={hasText}
          />
        ))}
      </Styled.SuggestionKeywordBox>
    </>
  );
};

export default SuggestionResult;
