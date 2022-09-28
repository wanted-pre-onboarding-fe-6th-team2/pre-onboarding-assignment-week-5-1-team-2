import { SEARCH_URL } from '@/constants/api';
import http from '@/api/core';

const searchApiService = {
  getSearch: async ({ keyword = '' }) => {
    const response = await http.get({
      url: SEARCH_URL,
      params: {
        q: keyword,
      },
    });
    return response.data;
  },
};

export default searchApiService;
