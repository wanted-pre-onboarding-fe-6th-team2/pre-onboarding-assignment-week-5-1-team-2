import React from 'react';
import * as Styled from '@/components/search/KeywordItem/KeywordItem.styled';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';

const boldText = (suggestedKeyword, searchKeyword) => {
  if (!searchKeyword) {
    return {};
  }

  const searchKeywordIndex = suggestedKeyword.indexOf(searchKeyword);
  const prevStrOfSearchKeyword = suggestedKeyword.slice(0, searchKeywordIndex);
  const nextStrOfSearchKeyword = suggestedKeyword.slice(searchKeywordIndex + 1);

  return { prevStrOfSearchKeyword, nextStrOfSearchKeyword };
};

const KeywordItem = ({ suggestedKeyword, searchKeyword }) => {
  const { prevStrOfSearchKeyword, nextStrOfSearchKeyword } = boldText(
    suggestedKeyword,
    searchKeyword
  );

  return (
    <Styled.RecentKeyword>
      {searchKeyword && (
        <>
          <SearchIcon />
          &nbsp; {prevStrOfSearchKeyword}
          <Styled.SearchKeywordHighlight>{searchKeyword}</Styled.SearchKeywordHighlight>
          {nextStrOfSearchKeyword}
        </>
      )}
    </Styled.RecentKeyword>
  );
};

export default KeywordItem;
