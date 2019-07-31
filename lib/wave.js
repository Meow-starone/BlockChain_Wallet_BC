export default function wave(canvas){
  var ctx = canvas.getContext('2d');
  //range控件信息
  var rangeValue = 50;
  var nowRange = 20; //用于做一个临时的range
  //画布属性
  var mW = canvas.width = canvas.parentNode.offsetWidth;
  var mH = canvas.height = canvas.parentNode.offsetHeight;
 
  //Sin 曲线属性
  var sX = 0;
  var sY = mH / 2;
  var axisLength = mW; //轴长
  var waveWidth = 0.015 ; //波浪宽度,数越小越宽 
  var waveHeight = 20; //波浪高度,数越大越高
  var speed = 0.01; //波浪速度，数越大速度越快
  var xOffset = 0; //波浪x偏移量
 
  //画sin 曲线函数
  var drawSin = function(xOffset,xInit,waveWidth,waveHeight){
   ctx.save();
 
   var points=[]; //用于存放绘制Sin曲线的点
   xOffset=xOffset+xInit;
   ctx.beginPath();
   //在整个轴长上取点
   for(var x = sX; x < sX + axisLength; x += 20 / axisLength){
    //此处坐标(x,y)的取点，依靠公式 “振幅高*sin(x*振幅宽 + 振幅偏移量)”
    var y = -Math.sin((sX + x) * waveWidth + xOffset);
 
    var dY = mH * (1 - nowRange / 100 );
 
    points.push([x, dY + y * waveHeight]);
    ctx.lineTo(x, dY + y * waveHeight);  
   }
 
   //封闭路径
   ctx.lineTo(axisLength, mH);
   ctx.lineTo(sX, mH);
   ctx.lineTo(points[0][0],points[0][1]);
   ctx.fillStyle = 'rgba(239,244,251,0.7)';
   ctx.fill();
   ctx.restore();
  };
 
  var render = function(){
   ctx.clearRect(0, 0, mW, mH);
 
   if(nowRange < rangeValue){
    var tmp = 1;
    nowRange += tmp;
    speed=0.08;
   }
   if(nowRange == rangeValue){
    speed=0.02;
   }
 
   // if(nowRange > rangeValue){
   //  var tmp = 1;
   //  nowRange -= tmp;
   // }
 
   drawSin(xOffset,90,0.013,10);
   drawSin(xOffset,90,0.015,20);
   drawSin(xOffset,90,0.011,26);
   
 
   xOffset += speed;
   requestAnimationFrame(render);
  }
 
  render();
  // $(window).resize(function(){
  //   canvas.width = canvas.parentNode.offsetWidth;
  // })
}