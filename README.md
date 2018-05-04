# 163music-store

html+css+javascript 制作[网易云音乐商城首页](https://music.163.com/store/product)

## 项目详情

- [Source](https://github.com/zengtv/163music-store/blob/master/index.html)
- [Demo](http://zengtv.com/163music-store/)

## 一些思考

- banner图我采用定时器，定时更换图片src以及两侧的图片主题色，结果发现由于加载图片需要一定时间，而切换主题色几乎不耗时。出现了一定时间内（第一次加载所有图片）banner图片与主题色不一致的bug。而后我的解决方法是，同时加载所有banner图，浏览器得以缓存，再讲除第一张图外的所有图片设置为display:none;
- fixed边栏最初用top和right定位，后来调试发现浏览区大小横向改变时效果很差，于是选中间作为基准。用margin-left定位
