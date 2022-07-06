import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootState } from '../types/root-state/root-state';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
