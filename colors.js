var Links = {
    setColor:function (color){
        var Alist = document.querySelectorAll('a');
        var i = 0;
        while(i < Alist.length) {
            Alist[i].style.color = color;
            i = i + 1;
        }
    }  
}
var Body = {
    setColor:function (color){
        document.querySelector('body').style.color = color;
    },
    setBackgroundColor:function (color) {
        document.querySelector('body').style.backgroundColor = color;
    }
}
function nightDayHandler(self) {
    var target = document.querySelector('body');
    if (self.value==='night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        Links.setColor('pink');
    } else {
        Body.setBackgroundColor('ivory'); 
        Body.setColor('black');
        self.value='night';
        Links.setColor('brown');
    }
}