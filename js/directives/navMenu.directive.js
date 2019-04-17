const navMenu = (userFactory, $location) => {
  return {
    restrict: "E",
    scope: {},
    templateUrl: "./partials/directives/navMenu.html",
    link: (scope, element, attrs) => {
      const url = $location.path();

      scope.updateItems = href => {
        userFactory.setMenuItems(href);
        scope.items = userFactory.getMenuItems();
      };
      scope.updateItems(url);
    }
  };
};

navMenu.$inject = ["userFactory", "$location"];

export default navMenu;
