class CanvasConfig {
  constructor(ref, height = 100, width = 100, backgroundColor = 'white') {
    this.ref = ref;
    this.canvas = this.ref.current;
    this.context = this.canvas.getContext('2d');
    this.spacing = 100;
    this.defaultRatio = 101;

    this.ratioHeight = height / this.defaultRatio;
    this.ratioWidth = width / this.defaultRatio;
    this.canvas.height = innerHeight * this.ratioHeight;

    this.canvas.width = innerWidth * this.ratioWidth;
    this.background = this.context.fillStyle = backgroundColor;
    this.drawCanvas = this.context.fillRect(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }
}

export default CanvasConfig;
