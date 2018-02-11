document.getElementById('openbut').addEventListener('click', function(){
    document.getElementById('menu').style.left='0px';
});

document.getElementById('closebut').addEventListener('click', function(){
    document.getElementById('menu').style.left='-110px';
});

document.getElementById('makebg_but').addEventListener('click', function(){
    document.getElementById('bg').style.backgroundImage=document.getElementById('zoom').style.backgroundImage;
});

document.getElementById('reset_but').addEventListener('click', function(){
    document.getElementById('bg').style.backgroundImage='none';
});

document.getElementById('showapp_but').addEventListener('click', function(){
    document.getElementById('zoom').style.display='block';
    document.getElementById('controls').style.display='block';
});

document.getElementById('hideapp_but').addEventListener('click', function(){
    document.getElementById('zoom').style.display='none';
    document.getElementById('controls').style.display='none';
});

document.getElementById('zoom').addEventListener('click', function(){
    document.getElementById('zoomcontrols').style.display='block';
});