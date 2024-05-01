class Theme {
  constructor(theme) {
    this.backGroundColor = theme?.backgroundColor;
    this.fillColor = theme?.fillColor;
    this.strokeColor = theme?.strokeColor;
    this.lineColor = theme?.lineColor;
    this.gridColor = theme?.gridColor;
    this.axiesColor = theme?.axiesColor;
    this.font = theme?.font;
    this.adaptFontSizeY = theme?.adaptFontSizeY;
    this.adaptFontSizeX = theme?.adaptFontSizeX;
    this.adaptFontSizeLabels = theme?.adaptFontSizeLabels;

    this.themeForChartPie = theme?.themeForChartPie
      ? theme?.themeForChartPie
      : [
          'cornflowerblue',
          'salmon',
          'gold',
          'mediumseagreen',
          'mediumpurple',
          'tomato',
          'lightskyblue',
          'lightcoral',
          'khaki',
          'lightgreen',
          'skyblue',
          'lightpink',
          'lightsteelblue',
          'palegreen',
          'orchid',
          'palegoldenrod',
          'lightseagreen',
          'lightblue',
          'thistle',
          'lightyellow',
        ];

    this.themeAqua = [
      ['#002d6e', '#c5dadd', ' #e6cfa3', '#c5dadd'],
      // Bleu foncé
      '#004999',
      '#0066c4',
      '#0082e0',
      '#009fff',
      '#36baff',
      '#6ed5ff',
      '#a1ffff',
      '#c5ffff',
      '#e9ffff', // Bleu clair
    ];

    this.themeNature = [
      '#321b0f', // Marron foncé
      '#472d1a',
      '#5e3f26',
      '#755133',
      '#8c633f',
      '#a2794c',
      '#b89059',
      '#ceb766',
      '#e4cd73',
      '#fbf380', // Marron clair
      '#1a321b', // Vert foncé
      ['#2a472c', '#8b4513', '#679267', '#f4e76e', '#654321'],
      '#3b5e3e',
      '#4d754f',
      '#5f8c61',
      '#709a70',
      '#82b182',
      '#94c794',
      '#a6e6a6',
      '#b8ffb8', // Vert clair
    ];
  }

  selectedTheme = (theme) => {
    switch (theme) {
      case 'sea':
        this.backGroundColor = 'white';
        this.fillColor = this.themeAqua[0];
        this.lineColor = this.themeAqua[0];
        this.gridColor = this.themeAqua[9];
        this.axiesColor = this.themeAqua[0];
        this.font = 'Arial';
        break;
      case 'nature':
        this.backGroundColor = 'white';
        this.fillColor = this.themeNature[11];
        this.lineColor = this.themeNature[11];
        this.gridColor = this.themeNature[19];
        this.axiesColor = this.themeNature[1];
        this.front = 'Arial';
        break;
      default:
        this.backGroundColor = 'white';
        this.fillColor = theme?.fillColor
          ? theme?.fillColor
          : this.themeAqua[0];
        this.lineColor = theme?.lineColor
          ? theme?.lineColor
          : this.themeAqua[0];
        this.gridColor = theme?.gridColor
          ? theme?.gridColor
          : this.themeAqua[9];
        this.axiesColor = theme?.axiesColor
          ? theme?.axiesColor
          : this.themeAqua[0];
        this.font = theme?.font ? theme?.font : 'Arial';
        break;
    }
  };
}

export default Theme;
