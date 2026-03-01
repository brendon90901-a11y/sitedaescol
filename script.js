document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("search-toggle");
  const container = document.getElementById("search-container");
  const form = container.querySelector("form");

  let aberto = false;
  document.getElementById("ano").textContent = new Date().getFullYear();

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

  toggleBtn.addEventListener("click", () => {
    if (!aberto) {
      container.style.display = "block";
      setTimeout(() => {
        form.style.width = "250px";
      }, 10);
    } else {
      form.style.width = "0";
      setTimeout(() => {
        container.style.display = "none";
      }, 400);
    }
    aberto = !aberto;
  });
});