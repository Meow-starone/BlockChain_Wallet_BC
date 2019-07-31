export default function flexMove(obj,att,target,velocity){
  obj.timeId=null;
  clearInterval(obj.timeId);
  var speed = 0;
  obj.timeId = setInterval(function(){
    speed += (target - parseInt(obtainStyle(obj,att)))/8;
    //摩擦系数一般选0.7或0.5
    speed *= 0.9;
    if(Math.abs(speed) < 1 && Math.abs(target - parseInt(obtainStyle(obj,att))) < 1) {
      clearInterval(obj.timeId);
      obj.style[att] = target + 'px';
    }else{
      obj.style[att] = parseInt(obtainStyle(obj,att)) + speed + 'px';
    }
  },velocity);
}
function obtainStyle(obj,att) {
  if(obj.currentStyle){
    return obj.currentStyle[att];
  } else {
    return getComputedStyle(obj)[att];
  }
}
