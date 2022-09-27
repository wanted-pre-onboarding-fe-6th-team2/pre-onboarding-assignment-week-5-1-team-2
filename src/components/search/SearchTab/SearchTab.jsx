import SearchIcon from '@/components/search/UI/SearchIcon';
import * as Styled from '@/components/search/SearchTab/SearchTab.styled';

const SearchTab = () => {
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
          }}
          onBlur={e => {
            e.target.placeholder = '질환명을 입력해 주세요.';
          }}
        />
        <Styled.SearchTabButton type="submit">
          <SearchIcon />
        </Styled.SearchTabButton>
      </Styled.SearchTabForm>
    </Styled.SearchTabContainer>
  );
};

export default SearchTab;
