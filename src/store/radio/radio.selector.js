import { createSelector } from 'reselect';

const selectRadio = (state) => state.radio;

export const selectCollections = createSelector(
  [selectRadio],
  (radio) => radio.results
);

// export const selectCollectionsForPreview = createSelector(
//   [selectCollections],
//   (collections) =>
//     collections ? Object.keys(collections).map((key) => collections[key]) : []
// );

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) =>
      collections.filter((doc) => doc.guide_id === collectionUrlParam)[0] ?? {}
  );
