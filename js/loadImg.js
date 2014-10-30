var arrImg=[
    "http://m.isux.us/touch_proj/proj-pad-report/img/bg2.32@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/sprite/style.32-coi140917145322@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/sprite/style-coi140917145322@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/pie-ios.32@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/pie-and.32@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/pop-7@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/radar-net@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/radar-inner@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/radar-pop@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/face-hit@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/share@2x.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/logo@2x.png?",
    /*下面是非2倍图*/
    "http://m.isux.us/touch_proj/proj-pad-report/img/bg2.32.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/sprite/style.32-coi140917145322.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/sprite/style-coi140917145322.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/pie-ios.32.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/pie-and.32.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/pop-7.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/radar-net.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/radar-inner.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/radar-pop.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/face-hit.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/share.png?",
    "http://m.isux.us/touch_proj/proj-pad-report/img/logo.png?"
];
/*单张图片加载完之后执行*/
var loading_single=function(numLoaded,length,src,obj){
    var width_pro=(numLoaded/length)*100;
    width_pro+="%";
    $('.loading-num').text(Math.floor((numLoaded/length)*100)+"%");
    $('.loading-inner').css("width",width_pro);
};
/*全部图片加载完之后执行*/
var loading_all=function(numError){
    $('#fullpage').show();
    $('.loadingPage').fadeOut();
    $('#fullpage').fullpage({
                verticalCentered: true,
                resize: true,
                scrollingSpeed: 700,
                easing: 'easeInQuart',
                css3: true,

                //events
                onLeave: function (index, direction) {
                    switch (index) {
                        case 4:
                            scene5_leave(index);
                            break;
                        case 5:
                            scene6_leave(index);
                            break;
                        case 6:
                            scene7_leave(index);
                            break;
                        case 7:
                            scene9_leave(index);
                            break;
                        default :
                            break;
                    }
                },
                afterLoad: function (anchorLink, index) {
                    console.log(anchorLink);
                    switch (index) {
                        case 4:
                            scene5(index);
                            break;
                        case 5:
                            scene6(index);
                            break;
                        case 6:
                            scene7(index);
                            break;
                        case 7:
                            scene9(index);
                            break;
                        default :
                            break;
                    }
                },
                afterRender: function () {
                },
                afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
                },
                onSlideLeave: function (anchorLink, index, slideIndex, direction) {
                }
            });
};
/*单张图片加载出现错误之后执行*/
var loading_error=function(numLoaded,length,src,obj){

};

function loadimg(arr,funLoading,funOnLoad,funOnError){
    var numLoaded=0,
    numError=0,
    isObject=Object.prototype.toString.call(arr)==="[object Object]" ? true : false;

    var arr=isObject ? arr.get() : arr;
    for(a in arr){
        var src=isObject ? $(arr[a]).attr("data-src") : arr[a];
        preload(src,arr[a]);
    }

    function preload(src,obj){
        var img=new Image();
        img.onload=function(){
            numLoaded++;
            funLoading && funLoading(numLoaded,arr.length,src,obj);
            funOnLoad && numLoaded==arr.length && funOnLoad(numError);
        };
        img.onerror=function(){
            numLoaded++;
            numError++;
            funOnError && funOnError(numLoaded,arr.length,src,obj);
        }
        img.src=src;
    }

}