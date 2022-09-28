import React, { useState, useEffect } from 'react';
import SearchIcon from '@/components/search/UI/SearchIcon';
import * as Styled from '@/components/search/SearchTab/SearchTab.styled';
import SearchKeywordTab from '@/components/search/SearchKeywordTab/SearchKeywordTab';

const SearchTab = () => {
  const arr = ['A형간염', '우울증', '감기', '코로나', '비염'];

  const [isTabOpen, setIsTabOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [hasText, setHasText] = useState(false);
  const [options, setOptions] = useState(arr);
  const [selected, setSelected] = useState(-1);

  const handleInputChange = e => {
    setSearchKeyword(e.target.value);
    setHasText(true);
  };

  const handleSuggestionItemClick = clickedKeyword => {
    setSearchKeyword(clickedKeyword);
  };

  const handleKeyDown = event => {
    if (hasText) {
      if (event.key === 'ArrowDown' && options.length - 1 > selected) {
        setSelected(selected + 1);
      }

      if (event.key === 'ArrowUp' && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.key === 'Enter' && selected >= 0) {
        handleSuggestionItemClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  useEffect(() => {
    if (searchKeyword === '') {
      setHasText(false);
      setOptions([]);
    }
    if (searchKeyword === '') {
      setOptions(
        arr.filter(el => {
          return el.includes(searchKeyword);
        })
      );
    }
  }, [searchKeyword]);

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
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsTabOpen(true);
          }}
          onBlur={() => {
            setIsTabOpen(false);
          }}
        />
        <Styled.SearchTabButton type="submit">
          <SearchIcon />
        </Styled.SearchTabButton>
      </Styled.SearchTabForm>
      <SearchKeywordTab
        searchKeyword={searchKeyword}
        isTabOpen={isTabOpen}
        hasText={hasText}
        handleSuggestionItemClick={handleSuggestionItemClick}
        options={options}
        selected={selected}
      />
    </Styled.SearchTabContainer>
  );
};

export default SearchTab;
