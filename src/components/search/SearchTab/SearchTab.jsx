import React, { useEffect, useMemo, useState } from 'react';
import { ReactComponent as SearchIcon } from '@/assets/search.svg';
import * as Styled from '@/components/search/SearchTab/SearchTab.styled';
import SearchKeywordTab from '@/components/search/SearchKeywordTab/SearchKeywordTab';
import { searchBySickName } from '@/api/searchApiService';
import debounce from '@/utils/debounce';

const SearchTab = () => {
  const [hasText, setHasText] = useState(false);
  const [selected, setSelected] = useState(-1);
  const [searchSuggestList, setSearchSuggestList] = useState({});
  const [searchKeyword, setSearchKeyword] = useState('');
  const [isTabOpen, setIsTabOpen] = useState(false);

  const onChangeSearchKeyword = e => {
    setSearchKeyword(e.target.value);
    setHasText(true);
  };

  const handleSuggestionItemClick = clickedKeyword => {
    setSearchKeyword(clickedKeyword);
  };

  const handleKeyDown = event => {
    if (hasText) {
      if (event.key === 'ArrowDown' && searchSuggestList[searchKeyword].length - 1 > selected) {
        setSelected(selected + 1);
        return;
      }

      if (event.key === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
        return;
      }
      if (event.key === 'Enter' && selected >= 0) {
        handleSuggestionItemClick(searchSuggestList[searchKeyword][selected].sickNm);
        setSelected(-1);
      }
    }
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
    if (searchKeyword === '') {
      setHasText(false);
    }

    if (searchKeyword) debounceSearchBySickName({ keyword: searchKeyword });
  }, [searchKeyword, debounceSearchBySickName]);

  useEffect(() => {
    console.log(searchSuggestList);
    console.log(searchKeyword);
  }, [searchSuggestList]);

  return (
    <Styled.SearchTabContainer>
      <Styled.SearchTabHeader>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Styled.SearchTabHeader>
      <Styled.SearchTabForm>
        <Styled.SearchTabInput
          type="text"
          placeholder="질환명을 입력해 주세요."
          value={searchKeyword}
          onFocus={() => {
            setIsTabOpen(true);
          }}
          onBlur={() => {
            setIsTabOpen(false);
            setSelected(-1);
          }}
          onChange={onChangeSearchKeyword}
          onKeyDown={handleKeyDown}
        />
        <Styled.SearchTabButton type="submit">
          <SearchIcon />
        </Styled.SearchTabButton>
      </Styled.SearchTabForm>
      <SearchKeywordTab
        searchKeyword={searchKeyword}
        searchSuggestList={searchSuggestList[searchKeyword] ?? []}
        isTabOpen={isTabOpen}
        hasText={hasText}
        handleSuggestionItemClick={handleSuggestionItemClick}
        selected={selected}
      />
    </Styled.SearchTabContainer>
  );
};

export default SearchTab;
