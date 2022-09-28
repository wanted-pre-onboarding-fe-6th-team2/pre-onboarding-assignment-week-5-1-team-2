import React, { useState } from 'react';
import SearchIcon from '@/components/search/UI/SearchIcon';
import * as Styled from '@/components/search/SearchTab/SearchTab.styled';
import SearchKeywordTab from '@/components/search/SearchKeywordTab/SearchKeywordTab';

const SearchTab = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [openBox, setOpenBox] = useState(false);

  const onChange = e => {
    setSearchKeyword(e.target.value);
  };

  return (
    <Styled.SearchTabContainer>
      <Styled.SearchTabHeader>
        국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
      </Styled.SearchTabHeader>
      <Styled.SearchTabForm>
        <Styled.SearchTabInput
          type="text"
          placeholder="질환명을 입력해 주세요."
          onFocus={e => {
            e.target.placeholder = '';
            setOpenBox(true);
          }}
          onBlur={e => {
            e.target.placeholder = '질환명을 입력해 주세요.';
            setOpenBox(false);
          }}
          onChange={onChange}
          value={searchKeyword}
        />
        <Styled.SearchTabButton type="submit">
          <SearchIcon />
        </Styled.SearchTabButton>
      </Styled.SearchTabForm>
      <SearchKeywordTab searchKeyword={searchKeyword} openBox={openBox} />
    </Styled.SearchTabContainer>
  );
};

export default SearchTab;
