define([
  './extend',
  './components/Updatable',
  './components/Events',
  './ComponentContainer',
  './Easing'
],
function(extend,
         Updatable,
         Events,
         ComponentContainer,
         Easing) {
  var Animation = function(totalTime, easing) {
    ComponentContainer.call(this);
    
    this.addComponents([Updatable, Events]);
    
    this.totalTime = totalTime || 1;
    
    this.easing = easing || Easing.default;
    
    this.finished = false;
    
    this._timePassed = 0;
    
    this.t = 0;
  };
  
  extend(Animation, ComponentContainer);
  
  Animation.prototype.isFinished = function(delta) {
    if(this.finished) {
      return true;
    }
    
    this.t = Math.min(this._timePassed / this.totalTime, 1);
    
    if(this._timePassed < this.totalTime) {
      this._timePassed += delta;
      return false;
    } else {
      this.finished = true;
    }
    
    return false;
  };
  
  return Animation;
});
