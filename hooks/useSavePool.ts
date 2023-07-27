import SavePoolContext, { Ipool, Property } from '@/contexts/SavePollContext';
import { useContext } from 'react';

export function useSavePool() {
  const { savePool } = useContext(SavePoolContext);

  return savePool;
}

export function useSaveArrowPool() {
  const { setSavePool } = useContext(SavePoolContext);
  function addArrow({properties}: {properties: Property[]}) {
    setSavePool((prev: Ipool) => ({...prev, Elements: [...prev.Elements, {Type: "Arrow" , Properties: [...properties]}]}))
  }
  return addArrow;
}


export function useSetSavePool() {
  const { setSavePool } = useContext(SavePoolContext);

  return setSavePool;
}