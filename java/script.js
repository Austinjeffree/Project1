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