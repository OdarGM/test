function tabSwitch(pageName, elmnt, color){
    var i, contxd, tabs;
    contxd = document.getElementsByClassName("contxd");
    for(i = 0; i< contxd.length; i++){
        contxd[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for(i = 0; i < tabs.length; i++){
        tabs[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block"
    elmnt.style.backgroundColor = color

}

//document.getElementById("defshow").click();
