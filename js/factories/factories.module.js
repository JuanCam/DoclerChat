import chatFactory from "./chat.factory";
import userFactory from "./user.factory";
import sessionStorageFactory from "./sessionStorage.factory";

const moduleName = "chatApp.factories";

angular
  .module(moduleName, [])
  .factory("chatFactory", chatFactory)
  .factory("sessionStorageFactory", sessionStorageFactory)
  .factory("userFactory", userFactory);

export default moduleName;
