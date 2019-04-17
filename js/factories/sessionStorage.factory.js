const sessionStorageFactory = $window => {
  return {
    get: item => {
      return $window.sessionStorage.getItem(item);
    },
    set: (item, value) => {
      $window.sessionStorage.setItem(item, value);
    },
    remove: (item, value) => {
      $window.sessionStorage.removeItem(item, value);
    }
  };
};

sessionStorageFactory.$inject = ["$window"];

export default sessionStorageFactory;
