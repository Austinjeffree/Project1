/* navigation for tabs in menu page */
function openMenu(evt, menuName) {
    /* assign varibles*/
    var i, tabcontent, tablinks; 
    /* assign the tab content to varible */
    tabcontent = document.getElementsByClassName("tabcontent");
    /* itterate through the content and change is tab display to none */
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    /* assign the tab links to varible */
    tablinks = document.getElementsByClassName("tablinks");
    /* itterate through the content and remove any active classes to ensure tabs close 
    once a new tab is seleceted */
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    /* change the display for the clicked tab to ignore prior display properties in place */
    document.getElementById(menuName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
