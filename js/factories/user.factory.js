import { DEFAULT_SETTINGS } from "../constants/settings";

const userFactory = sessionStorageFactory => {
  const { userName, userSettings } = DEFAULT_SETTINGS;

  sessionStorageFactory.set("userName", userName);
  sessionStorageFactory.set(userName, JSON.stringify(userSettings));

  return {
    getUserName: () => {
      return sessionStorageFactory.get("userName");
    },
    setUserName: userName => {
      sessionStorageFactory.set("userName", userName);
    },
    getSettings: userName => {
      return JSON.parse(sessionStorageFactory.get(userName));
    },
    setSettings: (userName, settings) => {
      sessionStorageFactory.set(userName, JSON.stringify(settings));
    },
    getMenuItems: () => {
      return DEFAULT_SETTINGS["menuItems"];
    },
    setMenuItems: href => {
      const { menuItems } = DEFAULT_SETTINGS;
      DEFAULT_SETTINGS["menuItems"] = menuItems.map(menuItem => {
        return { ...menuItem, active: href === menuItem.href };
      });
    },
    isValidUser: userName => {
      return !!sessionStorageFactory.get(userName);
    },
    removeUserSettings: userName => {
      sessionStorageFactory.remove(userName);
    },
    removeUser: () => {
      sessionStorageFactory.remove("userName");
    },
    getUserTheme(userName) {
      const settings = this.getSettings(userName);
      return settings.selectedColor;
    },
    resetSettings(userName) {
      this.setUserName("");
      this.removeUserSettings(userName);
      this.setSettings("", { ...DEFAULT_SETTINGS });
      return { ...DEFAULT_SETTINGS };
    }
  };
};

userFactory.$inject = ["sessionStorageFactory"];

export default userFactory;
