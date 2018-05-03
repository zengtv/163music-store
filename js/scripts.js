var user = document.getElementById('user');
var userList = document.getElementById('userList');
var userI = document.getElementById('userI');
var searchList = document.getElementById('searchList');
var searchIpt = document.getElementById('searchIpt');
var banner = document.getElementsByClassName('banner')[0];
var bannerImg = document.getElementById('bannerImg');
var bannerList = document.getElementsByClassName('banner-list')[0];
var aPoint = bannerList.getElementsByTagName('span');

var aBannerColor = ['#F8E7D5','#6bCEED','#AEB2BD','#39BA91','#0C3B73','#0078E6'];
var aBannerImg = ["images/banner-1.jpg","images/banner-2.jpg","images/banner-3.jpg","images/banner-4.jpg","images/banner-5.jpg","images/banner-6.jpg"];
var btnLeft = document.getElementsByClassName('banner-btnleft')[0];
var btnRight = document.getElementsByClassName('banner-btnright')[0];
var aside = document.getElementsByTagName('aside')[0];
var fixed = document.getElementsByClassName('fixed')[0];


//初始化
var num = 0;

aPoint[0].style.backgroundColor = 'red';
aPoint[0].style.opacity = '1';


//左右按钮悬浮事件
btnLeft.onmouseover = function () {
    this.style.opacity = '0.7';
};
btnLeft.onmouseout = function () {
    this.style.opacity = '0.4';
};
btnRight.onmouseover = function () {
    this.style.opacity = '0.7';
};
btnRight.onmouseout = function () {
    this.style.opacity = '0.4';
};



//个人菜单
user.onmouseover = function () {
    userList.style.display = 'block';
    userI.style.display = 'inline-block';
};
user.onmouseout = function () {
    userList.style.display = 'none';
    userI.style.display = 'none';
};

//搜索栏
searchIpt.onfocus = function () {
    searchList.style.display = 'block';
};
searchIpt.onblur = function () {
    searchList.style.display = 'none';
};
searchIpt.oninput = function () {
    searchList.firstElementChild.className += 'color';
    if (searchIpt.value.length = 1) {
        searchList.firstElementChild.innerHTML = '搜索“'+searchIpt.value+'”相关商品';
    }
};


//定时切换banner图片
function animate() {
    Timer = setInterval(function () {
        if (num!==aBannerImg.length-1){
            num++;
            bannerImg.src = aBannerImg[num];
            banner.style.background = aBannerColor[num];
            for (i=0;i<aPoint.length;i++){
                aPoint[i].style ='';
            }
            aPoint[num].style.backgroundColor = 'red';
            aPoint[num].style.opacity = '1';
        }else {
            num = 0;
            bannerImg.src = aBannerImg[num];
            banner.style.background = aBannerColor[num];
            for (i=0;i<aPoint.length;i++){
                aPoint[i].style ='';
            }
            aPoint[num].style.backgroundColor = 'red';
            aPoint[num].style.opacity = '1';
        }
    },2000)
}


//鼠标悬停banner处清除定时器
animate();
banner.onmouseover = function () {
    clearInterval(Timer);
};
banner.onmouseout = function () {
    animate();
};



//左右按钮切换图片
btnRight.onclick = function () {
    if (num!==aBannerImg.length-1){
        num++;
        bannerImg.src = aBannerImg[num];
        banner.style.background = aBannerColor[num];
        for (var i=0;i<aPoint.length;i++){
            aPoint[i].style ='';
        }
        aPoint[num].style.backgroundColor = 'red';
        aPoint[num].style.opacity = '1';
    }else {
        num = 0;
        bannerImg.src = aBannerImg[num];
        banner.style.background = aBannerColor[num];
        for (var i=0;i<aPoint.length;i++){
            aPoint[i].style ='';
        }
        aPoint[num].style.backgroundColor = 'red';
        aPoint[num].style.opacity = '1';
    }
};
btnLeft.onclick = function () {
    if (num!==0){
        num--;
        bannerImg.src = aBannerImg[num];
        banner.style.background = aBannerColor[num];
        for (var i=0;i<aPoint.length;i++){
            aPoint[i].style ='';
        }
        aPoint[num].style.backgroundColor = 'red';
        aPoint[num].style.opacity = '1';
    }else {
        num = aBannerImg.length-1;
        bannerImg.src = aBannerImg[num];
        banner.style.background = aBannerColor[num];
        for (var i=0;i<aPoint.length;i++){
            aPoint[i].style ='';
        }
        aPoint[num].style.backgroundColor = 'red';
        aPoint[num].style.opacity = '1';
    }
};


//小圆点切换图片（使用闭包把i作为参数传递，否则i值为固定值）
for (var i=0;i<aPoint.length;i++){
    (function (arg) {
        aPoint[i].onclick = function () {
            for (var j=0;j<aPoint.length;j++){
                aPoint[j].style = '';
            }
            this.style.backgroundColor = 'red';
            this.style.opacity = '1';
            num = arg;
            bannerImg.src = aBannerImg[num];
            banner.style.background = aBannerColor[num];
        }
    })(i);
}


//
window.onscroll = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    if (t >= 320) {
        fixed.style.display = 'block';
        aside.style.display = 'none';
    }else {
        aside.style.display = 'block';
        fixed.style.display = 'none';
    }
};
var toTop = document.getElementsByClassName('totop');

toTop[0].onclick = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    t = 0;
};
toTop[1].onclick = function () {
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    t = 0;
};
