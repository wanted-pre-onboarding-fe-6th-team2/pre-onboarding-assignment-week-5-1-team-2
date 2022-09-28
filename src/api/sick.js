import api from '@/api';

export const getSicks = async () => {
  try {
    const response = await api.get(`/sick`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export const getSick = async keyword => {
  try {
    const response = await api.get(`/sick?q=${keyword}`);

    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
