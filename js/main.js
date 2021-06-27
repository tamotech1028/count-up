$(function(){

    $('#start').on('click',function(){
        let $count1 = $('#count1'),
            $count2 = $('#count2'),
            $count3 = $('#count3'),
            easing = ['easeOutQuart','easeOutQuad','easeInCubic'];
        countUp(0, 100, 2000, easing[0], $count1);
        countUp(40, 900, 4000, easing[1], $count2);
        countUp(5, 75, 3000, easing[2], $count3);      
    })

    function countUp (start, stop, duration, easing, element){
        $({percent: start}).animate({percent: stop},{
            duration : duration,
            easing : easing,
            progress : function(){
                element.text(Math.round(this.percent));
                console.log(Math.round(this.percent));
            }
        });
    }

});