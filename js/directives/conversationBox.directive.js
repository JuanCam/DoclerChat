const conversationBox = () => {
  return {
    restrict: "E",
    scope: {
      messages: "=",
      unreadMessage: "=",
      peerUser: "=",
      selectedColor: "="
    },
    templateUrl: "./partials/directives/conversationBox.html",
    link: (scope, element, attrs) => {
      scope.$watchCollection(
        () => scope["messages"],
        value => {
          const conversationBoxElement = element[0].querySelector(
            ".conversation-box"
          );
          conversationBoxElement.scrollTo(
            0,
            conversationBoxElement.scrollHeight
          );
        }
      );
    }
  };
};

export default conversationBox;
