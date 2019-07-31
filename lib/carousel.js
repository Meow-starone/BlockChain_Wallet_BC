// 幻灯片轮播 


$(document).ready(function () {
    var i = 0;
    var clone = $("#homeCarousel .img li").first().clone();//克隆第一张图片
    $("#homeCarousel .img").append(clone);//复制到列表最后

    var size = $("#homeCarousel .img li").size();
    for (var j = 0; j < size-1; j++) {
        $("#homeCarousel .num").append("<li></li>");
    }
    $("#homeCarousel .num li").first().addClass("on");


    /*自动轮播*/
    var t = setInterval(function () { i++; move();},4000);

    /*鼠标悬停事件*/
    $("#homeCarousel").hover(function () {
        clearInterval(t);//鼠标悬停时清除定时器
    }, function () {
        t = setInterval(function () { i++; move(); }, 4000); //鼠标移出时清除定时器
    });


    /* 获取窗口大小，使图片大小以及banner容器都随之变化*/
    var realwidth=window.innerWidth;
    $("#homeCarousel .img li img").css({
        "width":realwidth,
     });

    var imgheight= $("#homeCarousel .img li img").height();
    $("#homeCarousel").css({
        "height":imgheight,
     });
    

     /*鼠标滑入原点事件*/
    $("#homeCarousel .num li").hover(function () {
        var index = $(this).index();//获取当前索引值
        i = index;
        $("#homeCarousel .img").stop().animate({ left: -index * realwidth}, 1000);
        $(this).addClass("on").siblings().removeClass("on");
    });

    /*向左按钮*/
    $("#homeCarousel .btn_l").click(function () {
        i--;
        move();
    })

    /*向右按钮*/
    $("#homeCarousel .btn_r").click(function () {
        i++;
        move();
    })

    /*移动事件*/
    function move() {
        if (i == size) {
            $("#homeCarousel .img").css({ left: 0 });
            i = 1;
        }
        if (i == -1) {
            $("#homeCarousel .img").css({ left: -(size - 1) * realwidth });
            i = size - 2;
        }
        $("#homeCarousel .img").stop().animate({ left: -i * realwidth }, 1000);

        if (i == size - 1) {
            $("#homeCarousel .num li").eq(0).addClass("on").siblings().removeClass("on");
        } else {
            $("#homeCarousel .num li").eq(i).addClass("on").siblings().removeClass("on");
        }
    }
});
