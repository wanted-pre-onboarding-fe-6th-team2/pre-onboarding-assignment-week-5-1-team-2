# 원티드 프리온보딩 7차 과제

> ## 2팀 소개

<table>
  <tr>
    <td height="50px" align="center"><a href="https://github.com/nknkcho">조남경<br>(팀장)</a></td>
    <td height="50px" align="center"><a href="https://github.com/Taak-e">김주탁</a></td>
    <td height="50px" align="center"><a href="https://github.com/
hyoungqu23">이형민</a></td>
    <td height="50px" align="center"><a href="https://github.com/
wldbszpflrxj">변지윤</a></td>
    <td height="50px" align="center"><a href="https://github.com/hasunghwa">하성화</a></td>
    <td height="50px" align="center"><a href="https://github.com/HaJunRyu">류하준</a></td>
  </tr>
  <tr>
    <td align="center" colspan="2">화면 UI / 
    <br/>키보드 인터렉션</td>
    <td align="center" colspan="2">API 호출</td>
    <td align="center" colspan="2">API 호출 최적화</td>
  </tr>
</table>

> ## 데모

> ## 실행 방법

```sh
yarn install

yarn api

yarn dev
```

> ## 목차

- [과제 내용](#과제-내용)
- [폴더 구조](#폴더-구조)
- [과제 요구사항 및 해결 방법](#과제-요구사항-및-해결-방법)
- [기술 스택](#기술-스택)

> ## 과제 내용

원티드 프리온보딩 프론트엔드 기업 협업 과제

- ### 주제

  - 검색창 구현 + 검색어 추천 기능 구현

- ### 기간
  - 2022년 9월 27일 ~ 9월 29일

> ## 폴더 구조

```
📦
├─api
├─assets
├─components
│  └─search
│      ├─KeywordItem
│      ├─SearchKeywordTab
│      ├─searchResult
│      │  ├─RecentResult
│      │  └─SuggestionResult
│      ├─SearchTab
│      └─UI
├─pages
│  └─Home
├─styles
└─utils

```

<br/>

> ## 과제 요구사항 및 해결 방법

### 화면 UI 및 키보드 인터렉션

**해결방법**

**트러블 슈팅**

### API 호출

**해결방법**

- 확장성을 고려해 Axios 인스턴스를 생성해 재사용되는 config를 처리했습니다.
- Axios의 request interceptor를 활용해 모든 api 요청에 요구사항 `console.info("calling api")`를 삽입했습니다.
- `json-server`의 Full Text Search를 활용해 검색 api를 추가했습니다.
- 전체 데이터를 가져오는 api의 경우 해당 과제에서 불필요하다고 생각해 제거했습니다.

**트러블 슈팅**

- 단순 keyword를 인자로 받아 API 호출을 하도록 처리했으나, 코드 리뷰 결과 확장성을 고려해 객체 형태로 인자의 데이터 타입을 변경했습니다.
- Axios의 request interceptor를 eject하는 경우를 대비하여 함수로 분리하는 방식을 고민했으나, 이번 과제에서는 불필요한 코드라고 생각되어 제거했습니다.

### API 호출 최적화

**해결방법**

**트러블 슈팅**

> ## 기술 스택

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
