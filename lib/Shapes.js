define([
  'pixi'
],
function(PIXI) {
  var Shapes = {};

  Shapes.defaultFill = 0x00ff00;

  var bf = function(color) {
    color = (color || (color === 0x0)) || Shapes.defaultFill;
    var g = new PIXI.Graphics();
    g.beginFill(color);
    return g;
  };

  var ef = function(g) {
    g.endFill();
    return g;
  }

  Shapes.rect = function(width, height, color) {
    var g = bf(color);
    g.drawRect(-width / 2, -height / 2, width, height);
    return ef(g);
  };

  Shapes.circle = function(radius, color) {
    var g = bf(color);
    g.drawCircle(0, 0, radius);
    return ef(g);
  }

  return Shapes;
});
