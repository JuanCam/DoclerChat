const routeConfig = $routeProvider => {
  $routeProvider
    .when("/chat", {
      templateUrl: "./partials/chat/chat.html",
      controller: "ChatController as chat"
    })
    .when("/settings", {
      templateUrl: "./partials/user/userSettings.html",
      controller: "UserSettings as settings"
    })
    .otherwise({
      redirectTo: "/settings"
    });
};

routeConfig.$inject = ["$routeProvider"];

export default routeConfig;
