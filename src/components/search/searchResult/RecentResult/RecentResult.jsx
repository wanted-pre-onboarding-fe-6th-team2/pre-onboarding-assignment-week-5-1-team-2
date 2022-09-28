import React from 'react';
import * as Styled from '@/components/search/searchResult/RecentResult/RecentResult.styled';
import KeywordItem from '@/components/search/KeywordItem/KeywordItem';

const RecentResult = () => {
  const keywordHistory = ['B형간염', '비만', '관절염', '우울증', '동맥경화', '독감', '일본뇌염'];
  return (
    <>
      <Styled.RecentKeywordBox>
        <Styled.SubText>최근검색어</Styled.SubText>
        {keywordHistory.map((item, i) => (
          <KeywordItem item={item} key={i} />
        ))}
      </Styled.RecentKeywordBox>
      <Styled.SuggestionKeywordWrraper>
        <Styled.SubText>추천 검색어로 검색해보세요</Styled.SubText>
        <Styled.SuggestionKeywordBox>
          <Styled.SuggestionKeyword>B형 간염</Styled.SuggestionKeyword>
          <Styled.SuggestionKeyword>비만</Styled.SuggestionKeyword>
          <Styled.SuggestionKeyword>관절염</Styled.SuggestionKeyword>
          <Styled.SuggestionKeyword>우울증</Styled.SuggestionKeyword>
          <Styled.SuggestionKeyword>식도염</Styled.SuggestionKeyword>
        </Styled.SuggestionKeywordBox>
      </Styled.SuggestionKeywordWrraper>
    </>
  );
};

export default RecentResult;
