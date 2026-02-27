function openGalleryTab(evt, tabName){
  var i, content, buttons;

  content=document.getElementsByClassName("g-content");
  for(i=0;i<content.length;i++){
    content[i].style.display="none";
  }

  buttons=document.getElementsByClassName("g-tab");
  for(i=0;i<buttons.length;i++){
    buttons[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display="block";
  evt.currentTarget.classList.add("active");
}