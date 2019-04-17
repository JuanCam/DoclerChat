class UserSettings {
  constructor(userFactory) {
    const initialUserName = userFactory.getUserName();
    const initialUserSettings = userFactory.getSettings(initialUserName);

    this.userName = initialUserName;
    this.userSettings = { ...initialUserSettings };
    this.changesSaved = false;

    this.updateUserSettings = updateSettings => {
      userFactory.setUserName(this.userName);
      this.userName = userFactory.getUserName();
      if (updateSettings) {
        userFactory.setSettings(this.userName, this.userSettings);
        this.userSettings = userFactory.getSettings(this.userName);
      } else {
        const { userSettings } = userFactory.resetSettings(this.userName);
        this.userName = "";
        this.userSettings = userSettings;
      }
      this.changesSaved = true;
    };
  }
}

UserSettings.$inject = ["userFactory"];

export default UserSettings;
