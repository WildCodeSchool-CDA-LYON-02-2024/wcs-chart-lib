class CanvasConfig {
  constructor(
    ref,
    height = innerHeight / 2,
    width = innerWidth,
    backgroundColor = 'white'
  ) {
    this.ref = ref;
    this.canvas = this.ref.current;
    this.context = this.canvas.getContext('2d');
    this.spacing = 100;
    this.defaultRatioHeight = 101;
    this.defaultRatioWidth = 101;
    this.ratioHeight = height / this.defaultRatioHeight;
    this.ratioWidth = width / this.defaultRatioWidth;
    this.canvas.height = innerHeight * this.ratioHeight;

    this.canvas.width = innerWidth * this.ratioWidth;
    this.background = this.context.fillStyle = backgroundColor;
    this.drawCanvas = this.context.fillRect(0, 0, width, height);

    console.log('ratio :', this.ratioWidth);
    console.log('canvas width', this.canvas.width);
  }
}

export default CanvasConfig;
