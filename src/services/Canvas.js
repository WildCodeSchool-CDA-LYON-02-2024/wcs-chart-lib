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
    this.canvas.height = height;
    this.canvas.width = width;
    this.spacing = 100;
    this.background = this.context.fillStyle = backgroundColor;
    this.drawCanvas = this.context.fillRect(0, 0, width, height);
  }
}

export default CanvasConfig;
