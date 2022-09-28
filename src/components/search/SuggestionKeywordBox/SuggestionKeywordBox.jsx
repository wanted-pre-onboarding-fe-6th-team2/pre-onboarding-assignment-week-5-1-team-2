import React from 'react';
import * as Styled from '@/components/search/SuggestionKeywordBox/SuggestionKeywordBox.styled';
import SearchIcon from '@/components/search/UI/SearchIcon';
import KeywordItem from '../KeywordItem/KeywordItem';

const SuggestionKeywordBox = ({ text }) => {
  const recentArr = ['B형간염', '비만', '관절염', '우울증', '동맥경화', '독감', '일본뇌염'];

  return (
    <Styled.Container>
      {text === '' ? (
        <>
          <Styled.RecentKeywordBox>
            <Styled.SubText>최근검색어</Styled.SubText>
            {recentArr.map((item, i) => (
              <KeywordItem item={item} key={i} />
            ))}
          </Styled.RecentKeywordBox>
          <Styled.RecommandKeywordWrraper>
            <Styled.SubText>추천 검색어로 검색해보세요</Styled.SubText>
            <Styled.RecommandKeywordBox>
              <Styled.SuggestionKeyword>B형 간염</Styled.SuggestionKeyword>
              <Styled.SuggestionKeyword>비만</Styled.SuggestionKeyword>
              <Styled.SuggestionKeyword>관절염</Styled.SuggestionKeyword>
              <Styled.SuggestionKeyword>우울증</Styled.SuggestionKeyword>
              <Styled.SuggestionKeyword>식도염</Styled.SuggestionKeyword>
            </Styled.RecommandKeywordBox>
          </Styled.RecommandKeywordWrraper>
        </>
      ) : (
        <>
          <Styled.InputKeywordBox>
            <Styled.InputKeyword>
              <SearchIcon />
              &nbsp; {text}
            </Styled.InputKeyword>
          </Styled.InputKeywordBox>
          <Styled.SuggestionKeywordBox>
            <Styled.SubText>추천검색어</Styled.SubText>
            {recentArr.map((item, i) => (
              <KeywordItem item={item} key={i} />
            ))}
          </Styled.SuggestionKeywordBox>
        </>
      )}
    </Styled.Container>
  );
};

export default SuggestionKeywordBox;
