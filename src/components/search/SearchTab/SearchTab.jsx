import React, { useEffect, useMemo, useState } from 'react';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import * as Styled from '@/components/search/SearchTab/SearchTab.styled';
import SearchKeywordTab from '@/components/search/SearchKeywordTab/SearchKeywordTab';
import { searchBySickName } from '@/api/searchApiService';
import debounce from '@/utils/debounce';

const SearchTab = () => {
  const [searchSuggestList, setSearchSuggestList] = useState({});
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isTabOpen, setIsTabOpen] = useState(false);

  const onChangeSearchKeyword = e => {
    setSearchKeyword(e.target.value);
  };

  const debounceSearchBySickName = useMemo(() => {
    return debounce(({ keyword }) => {
      if (searchSuggestList[keyword]) return;

      searchBySickName({ keyword }).then(response => {
        setSearchSuggestList(prevSearchSuggestList => ({
          ...prevSearchSuggestList,
          [keyword]: response,
        }));
      });
    }, 500);
  }, [searchSuggestList]);

  useEffect(() => {
    if (searchKeyword) debounceSearchBySickName({ keyword: searchKeyword });
  }, [searchKeyword, debounceSearchBySickName]);

  return (
    <Styled.SearchTabContainer>
      <Styled.SearchTabHeader>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Styled.SearchTabHeader>
      <Styled.SearchTabForm>
        <Styled.SearchTabInput
          type="text"
          placeholder="질환명을 입력해 주세요."
          onFocus={() => {
            setIsTabOpen(true);
          }}
          onBlur={e => {
            e.target.placeholder = '질환명을 입력해 주세요.';
            setIsTabOpen(false);
          }}
          onChange={onChangeSearchKeyword}
          value={searchKeyword}
        />
        <Styled.SearchTabButton type="submit">
          <SearchIcon />
        </Styled.SearchTabButton>
      </Styled.SearchTabForm>
      <SearchKeywordTab
        searchSuggestList={searchSuggestList[searchKeyword] ?? []}
        searchKeyword={searchKeyword}
        isTabOpen={isTabOpen}
      />
    </Styled.SearchTabContainer>
  );
};

export default SearchTab;
