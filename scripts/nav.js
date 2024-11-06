// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("nav-o").style.top = "40px";
    document.getElementById("nav-o").style.position = "fixed";
    document.getElementById("nav-o").style.marginTop = "0";
    document.getElementById("nav-o").style.backgroundColor = "white";
    document.getElementById("nav-o").style.boxShadow = "0px 1px 3px gray";
    document.getElementById("nav-o").style.backgroundColor = "white";
    document.getElementById("nav-o").style.backgroundColor = "white";

  } else {
    document.getElementById("nav-o").style.top = "auto";
    document.getElementById("nav-o").style.position = "relative";
    document.getElementById("nav-o").style.backgroundColor = "transparent";
    document.getElementById("nav-o").style.boxShadow = "none";
    document.getElementById("nav-o").style.marginTop = "12px";

  }
}

/*window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
       setTimeout(function() {
          location.href = "/new-url";
       }, 1000)

    }
  };*/
  
  const defaul = document.querySelector('#def')
  const main = document.querySelector('#special')
  if(main.innerHTML === '') {
    defaul.innerHTML = `<div class="sci-cont">
    <div class="subject"><div class="p">Mathematics</div></div>
    <div class="subject"><div class="p">English</div></div>
    <div class="subject"><div class="p">Computer</div></div>
    <div class="subject"><div class="p">Chemistry</div></div>
    <div class="subject"><div class="p">Physics</div></div>
    <div class="subject"><div class="p">Biology</div></div>
    <div class="subject"><div class="p">Economics</div></div>
    <div class="subject"><div class="p">Agricultural Science</div></div>
  </div>`
  } else {
      defaul.innerHTML = ''
  }
 
  console.log(main.innerHTML)
  var contentDivs = document.getElementsByClassName('content');
  function hideAllContentDivs(){
    
    for (var i = 0; i < contentDivs.length; ++i) {
        var div = contentDivs[i];  
        div.style.fontSize='29px';
        div.style.fontWeight='bold';
        div.style.marginRight='6px';
        div.style.opacity='0.8';
        div.style.cursor='pointer';
       
    }
  };
  function science(x,y,z) {
    
            document.querySelector(`.${z}`).style.fontSize='46px';
            document.querySelector(`.${z}`).style.fontWeight='bold';
            document.querySelector(`.${z}`).style.opacity='1';
            document.querySelector(`.${z}`).style.marginBottom='-3px';
            document.querySelector(`.${z}`).style.cursor='pointer';
            document.querySelector(`.${z}`).style.fontFamily='Arial';
            document.querySelector(`.${z}`).style.transition='0.15s';
            document.querySelector(`.${z}`).style.marginRight='6px';
            const div = document.querySelector(`.${x}`)
            div.style.fontSize='29px';
            div.style.fontWeight='bold';
            div.style.marginRight='6px';
            div.style.opacity='0.8';
            div.style.cursor='pointer';
            div.style.fontFamily='Arial';
            div.style.transition='0.15s';
            const div2 = document.querySelector(`.${y}`)
            div2.style.fontSize='29px';
            div2.style.fontWeight='bold';
            div2.style.marginRight='6px';
            div2.style.opacity='0.8';
            div2.style.cursor='pointer';
            div2.style.fontFamily='Arial';
            div2.style.transition='0.15s';
  }
if(document.body.width <= 600) {
    location.reload()
}