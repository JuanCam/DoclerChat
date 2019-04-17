import bubbleMessage from "./bubbleMessage.directive";
import conversationBox from "./conversationBox.directive";
import navMenu from "./navMenu.directive";

const moduleName = "chatApp.directives";

angular
  .module(moduleName, [])
  .directive("bubbleMessage", bubbleMessage)
  .directive("conversationBox", conversationBox)
  .directive("navMenu", navMenu);

export default moduleName;
