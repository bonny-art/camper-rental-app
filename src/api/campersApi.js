import axios from 'axios';
import { mockapiConstants } from 'constants/mockapiConstants';

axios.defaults.baseURL = mockapiConstants.BASE_URL;

export const getCampers = async () => {
  const { data } = await axios.get(mockapiConstants.CAMPERS_ENDPOINT);

  return data;
};
