// Your code goes here
//change header background color on click
document.querySelector('header').addEventListener('click', (event) => {
    event.target.style.background = 'red';
    event.stopPropagation();
  })
//change background of nav on click
  document.querySelector('nav').addEventListener('click', (event) => {
    event.target.style.background = 'blue';
    event.stopPropagation();
  })
//stop age from refreshing on home click
  document.querySelector('nav a').addEventListener('click', (event) => {
    event.target.style.background = 'green';
    event.stopPropagation();
    event.preventDefault();
  })
//turn Home into UPERCASE on mouseover
  document.querySelector('nav a').addEventListener('mouseover', (event) => {
    event.target.style.textTransform = 'uppercase'
  })
  //turn home back to capitalize when mouse moves off
  document.querySelector('nav a').addEventListener('mouseout', (event) => {
    event.target.style.textTransform = 'capitalize'
  })
//lowercase all text on keypress
  document.addEventListener('keydown', (event) => {
    event.target.style.textTransform = 'lowercase'
  })
//uppercase all text on page with scroll
document.addEventListener('scroll', (event) => {
    document.querySelector('*').style.textTransform = 'uppercase'
  })
//change home link background to purple on drag
document.querySelector('nav').addEventListener('drag', (event) => {
    event.target.style.background = 'purple'
  })
  //change home link background to yellow on drag release
  document.querySelector('nav').addEventListener('dragend', (event) => {
    event.target.style.background = 'yellow'
  })
//dblclick to remove the image
  document.querySelector('.intro img').addEventListener('dblclick', (event) => {
    event.target.style.display = "none";
  })
 //change background color on resize
 window.addEventListener('resize', (event) => {
    document.querySelector('body').style.background = 'blue'
  })
//highlight on copy
document.querySelector('.intro p').addEventListener('copy', (event) => {
    event.target.style.color = "white";
    event.target.style.background = "yellow"
  })
//hide on cut
  document.querySelector('.intro p').addEventListener('cut', (event) => {
    event.target.style.display = "none";
  })


