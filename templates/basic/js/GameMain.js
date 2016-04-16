define([
  'jig/Container',
  'jig/Text'
],
function(Container,
         Text) {
  var GameMain = function() {
    Container.call(this);
    
    this.sayHello = new Text("It works!", {font: 'bold 70px monospace', fill: 0xffffff});
    
    this.phase = 0;
    
    this.addChild(this.sayHello);
  };
  
  extend(GameMain, Container);
  
  GameMain.prototype.update = function(delta) {
    this.sayHello.x = Math.cos(this.phase) * 300;
    this.sayHello.y = Math.sin(this.phase) * 300;
    
    this.phase += Math.PI * delta;
  };
  
  return GameMain;
});
