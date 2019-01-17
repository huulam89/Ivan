//For slide show non-automatic//
let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
  showDivs(slideIndex += n)
};

fucntion showDivs(n){
  let i;
  let x = document.getElementsByClassName('myslide');
  if (n > x.length){slideIndex = 1}
  if (n <1) {slideIndex = x.length};
  for (i=0; i<x.length ; i++){
    x[i].style.display='none';
  }
x[slideIndex-1].style.display='block';
}

/*For automatic slide show
let slideIndex = 0;
carousel();
function carousel(){
  let i;
  let x = document.getElementsByClassName('myslide');
  for (i =0; i < x.length; i++){
    x[i].style.display ='none';
  }
  slideIndex ++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex -1].style.display ='block';
  setTimeout(carousel, 2000);
}*/
