import http from '@/api';

export const searchBySickName = async ({ keyword }) => {
  try {
    const response = await http.get(`/sick?sickNm_like=${keyword}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
