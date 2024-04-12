class CanvasConfig {
  constructor(ref, height = innerHeight / 2, width = innerWidth) {
    this.ref = ref;
    this.canvas = this.ref.current;
    this.context = this.canvas.getContext('2d');
    this.canvas.height = height;
    this.canvas.width = width;
  }
}

export default CanvasConfig;
