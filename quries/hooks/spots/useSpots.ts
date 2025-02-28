import { spotsApi } from './../../../services/api';
import { useQuery } from '@tanstack/react-query';

import { TSpot } from '../../../lib/types/types';
import { QueryKeys } from '../../key';
import { toast } from 'react-toastify';

export const getSpots = async () => {
  const res = await spotsApi.getSpots();
  return res.data;
};

export const useSpots = () => {
  const { data: spots } = useQuery<TSpot[]>(
    [QueryKeys.spots],
    () => getSpots(),
    {
      staleTime: 1000 * 60 * 30,
      refetchOnWindowFocus: false,
      onError() {
        toast.error('지도를 불러오는데 실패하였습니다.');
      }
    }
  );
  return spots;
};
