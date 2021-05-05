var red = false;

document.getElementById('12').onclick = function()
{
    red = !red;
    if(red){document.getElementById('12').style.backgroundColor = ('red')

    }
    else{
        document.getElementById('12').style.backgroundColor = ('white');
    }
}


function alap()
{
    if(egerfel){
        document.getElementById('11').style.backgroundColor = ('blue')
    }
    else{
        document.getElementById('11').style.backgroundColor = ('white')
    }
}
document.getElementById('11').onmouseover = function()
{
    egerfel = true;
    alap();
}
document.getElementById('11').onmouseout = function()
{
    egerfel = false;
    alap();
}