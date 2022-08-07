import {persistedAtom} from '../utils/persistance';

export const _redditPicsDetails = persistedAtom<any[] | null>(
  '_redditPicsDetails',
  null,
);
