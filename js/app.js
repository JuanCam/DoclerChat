import angular from "angular";
import chatModule from "./chat/chat.module";
import directivesModule from "./directives/directives.module";
import factoriesModule from "./factories/factories.module";
import routeConfig from "./config/routes.config";
import userModule from "./user/user.module";

angular
  .module("chatApp", [
    require("angular-route"),
    chatModule,
    userModule,
    directivesModule,
    factoriesModule
  ])
  .config(routeConfig);
