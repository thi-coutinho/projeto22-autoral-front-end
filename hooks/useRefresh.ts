import RefreshContext from '@/contexts/RefreshContext';
import { useContext } from 'react';

export function useRefresh() {
  const { refresh } = useContext(RefreshContext);

  return refresh;
}

export function useSetRefresh() {
  const { setRefresh } = useContext(RefreshContext);

  return setRefresh;
}