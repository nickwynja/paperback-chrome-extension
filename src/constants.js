export const defaultValues = {
  darkMode: true,
  visibleActions: {
    readLater: true,
    saveBookmark: false,
    saveTabSet: false,
    openAllUnread: true,
    openAllBookmarks: false,
    openAllTabSets: false,
    openRandomUnread: false,
  },
};

export const actions = Object.keys(defaultValues.visibleActions);
