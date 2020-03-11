function openMenuList(evt, menuList) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tabContent");
    for (i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    tabLinks = getElementsByClassName("tabLinks");
    for (i=0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace("active", "")
    }
    document.getElementById(menuList).style.display = "block";
    evt.currentTarget.className += "active";
}

var slideInterval = 3500

function getImages() {
    return document.getElementsbyid('musicImgs').getElementsByTagName('figure');
}
function slideShow() {
    var pointer;
    var images = getImages();
    for (var i = 0; i < images.length; i++ ) {
        if (images[i].className == 'visible') {
            images[i].className = "";
            pointer = i
    }
        if (++pointer == images.length) {
            pointer = 0;
        }
        figures[pointer].className = 'visible';
        setTimeout(slideShow, slideInterval;)
    }
}
function startSlideshow() {    
        setTimeout(slideShow, slideInterval;)
}
startSlideshow();