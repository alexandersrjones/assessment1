var num1 = 0
var num2 = 0

document.getElementById('bg1_but').addEventListener('click', function(){
    document.getElementById('ch1').src=('i1.jpg');
    document.getElementById('ch2').src=('i2.jpg');
    document.getElementById('ch3').src=('i3.jpg');
    document.getElementById('ch1').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i1.jpg)';
    });
    document.getElementById('ch2').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i2.jpg)';
    });
    document.getElementById('ch3').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i3.jpg)';
    });
});

document.getElementById('bg2_but').addEventListener('click', function(){
    document.getElementById('ch1').src=('i4.jpg');
    document.getElementById('ch2').src=('i5.jpg');
    document.getElementById('ch3').src=('i6.jpg');
    document.getElementById('ch1').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i4.jpg)';
    });
    document.getElementById('ch2').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i5.jpg)';
    });
    document.getElementById('ch3').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i6.jpg)';
    });
});

document.getElementById('bg3_but').addEventListener('click', function(){
    document.getElementById('ch1').src=('i7.jpg');
    document.getElementById('ch2').src=('i8.jpg');
    document.getElementById('ch3').src=('i9.jpg');
    document.getElementById('ch1').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i7.jpg)';
    });
    document.getElementById('ch2').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i8.jpg)';
    });
    document.getElementById('ch3').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i9.jpg)';
    });
});

document.getElementById('bg4_but').addEventListener('click', function(){
    document.getElementById('ch1').src=('i10.jpg');
    document.getElementById('ch2').src=('i11.jpg');
    document.getElementById('ch3').src=('i12.jpg');
    document.getElementById('ch1').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i10.jpg)';
    });
    document.getElementById('ch2').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i11.jpg)';
    });
    document.getElementById('ch3').addEventListener('mouseenter', function(){
        document.getElementById('zoom').style.backgroundImage='url(i12.jpg)';
    });
});

document.getElementById('zoomup').addEventListener('click', function(){
    num1 = num1 + 10;
    num2 = num2 + 7;
    document.getElementById('zoom').style.width = (100 + num1) + '%';
    document.getElementById('zoom').style.height = (70 + num2) + '%';
});

document.getElementById('zoomdown').addEventListener('click', function(){
    num1 = num1 - 10;
    num2 = num2 - 7;
    document.getElementById('zoom').style.width = (100 + num1) + '%';
    document.getElementById('zoom').style.height = (70 + num2) + '%';
});