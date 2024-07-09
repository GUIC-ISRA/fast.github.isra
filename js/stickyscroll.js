
// detecter lorsqu'on scroll
window.onscroll = function() { sticky() };

//recuperer les elements
let header = document.getElementById('sticky-header');
let stickycomponent = header.offsetTop;

// faire la fonction
function sticky() {
    console.log(window.pageYoffset);
    if (window.pageYoffset > stickycomponent ) {
        header.classList.add('sticky');
    }
    else{
        header.ClassList.remove('sticky');
    }
}