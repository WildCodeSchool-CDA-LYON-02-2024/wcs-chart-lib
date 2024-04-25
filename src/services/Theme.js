class Theme {
  constructor(theme) {
    console.log('theme :', theme);
    this.backGroundColor = theme?.backgroundColor;
    this.fillColor = theme?.fillColor;
    this.strokeColor = theme?.strokeColor;
  }

  selectedTheme = (theme) => {
    switch (theme) {
      case 'aqua':
        this.backGroundColor = 'yellow';
        this.fillColor = 'blue';
        break;
      case 'nature':
        this.backGroundColor = 'green';
        this.fillColor = 'white';
    }
  };
}

export default Theme;
