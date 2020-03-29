var $banner =(function(){
  var $html =$(''
    +'<div class="box">'
        + '<div class="slider" id="slider">'
          + '<div class="slide"><img src="img/b5.png" alt=""></div>'
          + '<div class="slide"><img src="img/b1.png" alt=""></div>'
          + '<div class="slide"><img src="img/b2.png" alt=""></div>'
          + '<div class="slide"><img src="img/b3.png" alt=""></div>'
          + '<div class="slide"><img src="img/b4.png" alt=""></div>'
          + '<div class="slide"><img src="img/b5.png" alt=""></div>'
          + '<div class="slide"><img src="img/b1.png" alt=""></div>'
        + '</div>'
        + '<span id="left" disabled><</span>'
        + '<span id="right">></span>'
        + '<ul class="nav" id="navs">'
          + '<li class="active">1</li>'
          + '<li>2</li>'
          + '<li>3</li>'
          + '<li>4</li>'
          + '<li>5</li>'
        + '</ul>'
    +'</div>');
  var $slider = $html.find(".slider"),
      $span = $html.find("span"),
      $left = $html.find("#left"),
      $right= $html.find("#right"),
      $lis = $html.find("#navs li"),
      $index=1;

//实现轮播效果
  var timer = setInterval(next,2000)
  function next(){
    $index++;
    $slider.animate({left:-1200*$index},function(){
      if($index===6){
        $slider.css("left","-1200px");
        $index=1;
      }
    })
    addActive();
  }

  //鼠标移入，停止轮播，span显示
  $html.mouseover(function(){
    clearInterval(timer);
    $span.css({opacity:0.6});
  })
  //鼠标移出，继续轮播，span隐藏
  $html.mouseout(function(){
    $span.css({opacity:0});
    timer = setInterval(next,2000);
  })
  //点击左右箭头,实现切换
  $left.click(function(){
    //$left.unbind("click")
    $index--;
    $slider.animate({left:-1200*$index},function(){
      if($index===0){
        $slider.css("left","-6000px");
        $index=5;
      }
    })
    active();
  })
  //$left.bind("click");
  $right.click(function(){
    next();
  })  

  //li点击事件
  $lis.click(function(){
    $index = Number($(this).context.innerText)
    addActive();
    $slider.animate({left:-1200*$index})
  })
  //实现list对应样式 
  function addActive(){
    if($index===6){
      $lis.eq(0).addClass("active").siblings().removeClass("active");
    } 
    if($index ===0){
      $lis.eq(4).addClass("active").siblings().removeClass("active");
    }
    $lis.eq($index-1).addClass("active").siblings().removeClass("active")
  }
  //公开show方法
  function show(){
     $box.append($html);
  }
  return {show:show}
}());
