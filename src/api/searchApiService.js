import http from '@/api';

export const getSick = async keyword => {
  try {
    const response = await http.get(`/sick?q=${keyword}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
