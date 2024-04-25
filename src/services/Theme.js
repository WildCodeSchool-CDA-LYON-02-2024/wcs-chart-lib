class Theme {
  constructor(theme) {
    console.log('theme :', theme);
    this.backGroundColor = theme?.backgroundColor;
    this.fillColor = theme?.fillColor;
    this.strokeColor = theme?.strokeColor;
    this.lineColor = theme?.lineColor;
  }

  selectedTheme = (theme) => {
    switch (theme) {
      case 'aqua':
        this.backGroundColor = 'rgba(154, 160, 119, 0.8)';
        this.fillColor = 'blue';
        break;
      case 'nature':
        this.backGroundColor = 'green';
        this.fillColor = 'white';
        this.lineColor = 'white';
    }
  };
}

export default Theme;
