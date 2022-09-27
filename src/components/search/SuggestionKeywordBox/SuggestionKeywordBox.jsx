import React from 'react';
import * as Styled from '@/components/search/SuggestionKeywordBox/SuggestionKeywordBox.styled';
import SearchIcon from '@/components/search/UI/SearchIcon';
import KeywordItem from '../KeywordItem/KeywordItem';

const SuggestionKeywordBox = () => {
  const recentArr = ['B형간염', '비만', '관절염', '우울증', '동맥경화', '독감', '일본뇌염'];

  return (
    <Styled.Container>
      {recentArr.length === 7 ? (
        <>
          <Styled.InputKeywordBox>
            <Styled.InputKeyword>
              <SearchIcon />
              &nbsp; e.target.value
            </Styled.InputKeyword>
          </Styled.InputKeywordBox>
          <Styled.RecentKeywordBox>
            <Styled.SubText>추천검색어</Styled.SubText>
            {recentArr.map((item, i) => (
              <KeywordItem item={item} key={i} />
            ))}
          </Styled.RecentKeywordBox>
        </>
      ) : (
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
              <Styled.RecommandKeyword>B형 간염</Styled.RecommandKeyword>
              <Styled.RecommandKeyword>비만</Styled.RecommandKeyword>
              <Styled.RecommandKeyword>관절염</Styled.RecommandKeyword>
              <Styled.RecommandKeyword>우울증</Styled.RecommandKeyword>
              <Styled.RecommandKeyword>식도염</Styled.RecommandKeyword>
            </Styled.RecommandKeywordBox>
          </Styled.RecommandKeywordWrraper>
        </>
      )}
    </Styled.Container>
  );
};

export default SuggestionKeywordBox;
