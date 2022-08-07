import {atom} from 'jotai';
import {persistedAtom} from '../utils/persistance';

export const _redditPicsDetails = persistedAtom<any[] | null>(
  '_redditPicsDetails',
  null,
);

export const _redditPicsLoading = atom(false);

export const _redditFavorites = persistedAtom<any>('_redditFavorites', {});
