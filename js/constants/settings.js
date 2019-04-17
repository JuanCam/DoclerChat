const DEFAULT_SETTINGS = {
  userName: "",
  userSettings: {
    selectedColor: "Dark",
    selectedClockDisplay: 12,
    interfaceColor: ["Light", "Dark"],
    clockDisplay: [12, 24],
    sendMessagesOnCtrlEnter: false,
    languages: ["english"]
  },
  menuItems: [
    {
      value: "Chat",
      href: "/chat",
      active: true
    },
    {
      value: "Settings",
      href: "/settings",
      active: false
    }
  ]
};

export { DEFAULT_SETTINGS };
