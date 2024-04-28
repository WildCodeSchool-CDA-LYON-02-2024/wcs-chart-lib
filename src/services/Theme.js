class Theme {
  constructor(theme) {
    console.log('theme :', theme);
    this.backGroundColor = theme?.backgroundColor;
    this.fillColor = theme?.fillColor;
    this.strokeColor = theme?.strokeColor;
    this.lineColor = theme?.lineColor;
    this.bordcolor = theme?.bordcolor;
  }

  selectedTheme = (theme) => {
    switch (theme) {
      case 'first':
        this.backGroundColor = 'rgb(245, 245, 220)';
        this.fillColor = 'black';
        this.strokeColor = 'yellow';
        this.lineColor = 'green'
        break;
      case 'wild':
        this.backGroundColor = 'white';
        this.fillColor = '#FF1493';
        this.strokeColor = 'yellow';
        this.lineColor = '#FF1493';
        break;
        case 'sun':
          this.backGroundColor = 'rgb(240,230,140)git';
          this.fillColor = '	red';
          this.strokeColor = 'brown';
          this.lineColor = '	black';
          this.bordcolor = 'black';
    }
    

  };
}

export default Theme;
