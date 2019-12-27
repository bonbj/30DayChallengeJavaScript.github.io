//h1 with text
const title = document.querySelector(".title");
//how much he moves
const walk = 500; // 500px

//call the text shadow
shadow = (e) => {
  //position of title
  const { offsetWidth: width, offsetHeight: height } = title;
  //position of mouse
  let { offsetX: x, offsetY: y } = e;

  //check if it is in range
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  //much to walk
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  //text shadow
  title.style.textShadow = `
      ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
      ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
      ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
      ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    `;
    
}

//event
title.addEventListener('mousemove', shadow);