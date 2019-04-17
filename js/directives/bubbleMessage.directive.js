const bubbleMessage = () => {
  return {
    restrict: "E",
    transclude: true,
    scope: {
      message: "=",
      isMe: "="
    },
    templateUrl: "./partials/directives/bubbleMessage.html",
    link: (scope, element, attrs) => {}
  };
};

export default bubbleMessage;
