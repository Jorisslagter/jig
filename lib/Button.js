define([
  'jig/Container',
  'jig/components/Animated'
],
function(Container,
         Animated) {
  var Button = function(upState, overState, downState) {
    Container.call(this);
    
    this.addComponent(Animated);
    
    this.upState = upState;
    this.overState = overState || upState;
    this.downState = downState || overState || upState;
    
    this.interactive = this.buttonMode = true;
    this.addChild(this.upState);
    
    this._action = null;
  };
  
  extend(Button, Container);
  
  Button.prototype.action = function(callback) {
    this._action = callback;
  }
  
  Button.prototype.mouseover = function() {
    this.removeChild(this.upState);
    this.addChild(this.overState);
  };
  
  Button.prototype.mouseout = function() {
    this.removeChild(this.overState);
    this.addChild(this.upState);
  };
  
  Button.prototype.mousedown = function() {
    this.removeChild(this.overState);
    this.addChild(this.downState);
  };
  
  Button.prototype.mouseup = function() {
    this.removeChild(this.downState);
    this.addChild(this.overState);
    
    if((this._action) && (this._action.call)) {
      this._action.call(this);
    }
  };
  
  return Button;
});
