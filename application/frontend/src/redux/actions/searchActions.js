export const setSearchResults = (searchResults) => ({
    type: 'SEARCH_RESULT_SET',
    searchResults,
});

export const setNoResult = (noResult) => ({
    type: 'NO_RESULT_SET',
    noResult,
});
