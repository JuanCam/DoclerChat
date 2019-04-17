class ChatController {
  constructor($scope, $interval, $document, userFactory, chatFactory) {
    const currentTitle = $document[0].title;
    const user = userFactory.getUserName();
    let notificationTimer;
    let unreadMessages = 0;

    this.userName = user;
    this.messages = [];
    this.message = this.peerUser = "";
    this.unreadMessage = false;
    this.selectedColor = userFactory.getUserTheme(user);
    const userSettings = userFactory.getSettings(user);

    this.sendMessage = $event => {
      const { message } = this;
      const usr = user;
      const { sendMessagesOnCtrlEnter } = userSettings;
      const isCtrlAndEnter = $event.ctrlKey && $event.keyCode == 13;
      if (
        (sendMessagesOnCtrlEnter && isCtrlAndEnter) ||
        $event.type !== "keydown"
      ) {
        chatFactory.sendChatMessage({ message, usr });
      }
    };

    this.focusTextField = () => {
      $document[0].title = currentTitle;
      this.unreadMessage = false;
      unreadMessages = 0;
      this.stopNotificationTimmer();
    };

    this.stopNotificationTimmer = () => {
      if (notificationTimer) {
        $interval.cancel(notificationTimer);
        notificationTimer = undefined;
      }
    };

    chatFactory.recieveChatMessage(({ message, usr }) => {
      $scope.$apply(() => {
        const isMe = user === usr;
        const { peerUser } = this;

        this.messages.push({
          isMe,
          text: message,
          user,
          peerUser
        });
        this.message = "";

        if (!isMe) {
          unreadMessages++;
          this.stopNotificationTimmer();
          notificationTimer = triggerNotification(
            $document,
            $interval,
            currentTitle,
            unreadMessages,
            700
          );
          this.unreadMessage = true;
          this.peerUser = usr;
        }
      });
    });

    const triggerNotification = (
      $document,
      $interval,
      currentTitle,
      unreadMessages,
      delay
    ) => {
      let visible = true;
      $document[0].activeElement.blur();

      return $interval(() => {
        $document[0].title = visible
          ? `${unreadMessages} Unread messages`
          : currentTitle;
        visible = !visible;
      }, delay);
    };
  }
}

ChatController.$inject = [
  "$scope",
  "$interval",
  "$document",
  "userFactory",
  "chatFactory"
];

export default ChatController;
