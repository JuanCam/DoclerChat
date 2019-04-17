const chatFactory = () => {
  const socket = io();
  return {
    sendChatMessage: messsageObj => {
      socket.emit("chat message", messsageObj);
    },
    recieveChatMessage: callback => {
      socket.on("chat message", callback);
    }
  };
};

export default chatFactory;
