$(window).resize(function() {
    if(window.innerWidth >= 730)
    {
        if(document.getElementById("collapsable").style.display === 'none')
        {
            document.getElementById("collapsable").style.display = 'inline-flex';
        }
    }
    if(window.innerWidth < 730)
    {
        document.getElementById("collapsable").style.display = 'none'
    }
});

function toggleNav() {
    var state = document.getElementById("collapsable").style.display;

    if (state === 'inline-flex')
    {
        document.getElementById("collapsable").style.display = 'none';
    }
    else
    {
        document.getElementById("collapsable").style.display = 'inline-flex';
    }
}

const navBttn = document.getElementById("burgerButton");

navBttn.onkeydown = function(e){
    if (e.key == "Enter")
    {
        toggleNav();
    }
}