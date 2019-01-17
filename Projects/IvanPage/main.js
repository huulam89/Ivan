//JQuery//
$(document).ready(()=>{
//  $('.boxes').hide();
  const $basicInfo = $('#basic-info');
  const $hobbies = $('#hobbies');
  const $career = $('#career');
 const $projects = $('#projects');
  const $education = $('#education');
//  $basicInfo.hide();
//  $hobbies.hide();
  //$career.hide();
//  $projects.hide();
//  $education.hide();
  $('#basic-info-a').on('click',()=> {$basicInfo.toggle()});
  //  $('#basic-info-a').on('mouseleave',()=>{ $basicInfo.hide()});
  $('#hobbies-a').on('click', ()=>{$hobbies.toggle()});
  // $('#hobbies-a').on('mouseleave',()=>{$hobbies.hide()});
  $('#career-a').on('click',()=>{$career.toggle()});
  //  $('#career-a').on('mouseleave',()=>{$career.hide()});
  $('#projects-a').on('click',()=>{$projects.toggle()});
//  $('#projects-a').on('mouseleave',()=>{ $projects.hide()});
  $('#education-a').on('click',()=>{$education.toggle()});
  // $('#education-a').on('mouseleave',()=>{ $education.hide()});
});

$('#ivan').on('mouseenter', event =>{
  $(event.currentTarget).addClass('photo-active')
}).on('mouseleave', event => {
  $(event.currentTarget).removeClass('photo-active')
});


//Code for rainbow effect//
const rainbow = document.getElementById('rainbow');
const rainbow1= document.getElementById('rainbow1');
const rainbow2= document.getElementById('rainbow2');

function random(num) {
  return Math.floor(Math.random() * num);
};

function changeColor(event) {
  const randomColor = 'rgba(' + random(255) + ',' + random(255) + ',' + random(255) + ',' + 0.3 + ')';
  event.target.style.backgroundColor = randomColor;
};

rainbow.onmouseover = changeColor;
rainbow1.onmouseover = changeColor;
rainbow2.onmouseover = changeColor;

//Code for slider to toogle image//
function mySlider(){
  const mycheck=document.getElementById('mycheck');
  const ivan=document.getElementById('ivan');
  if (mycheck.checked==true){
    ivan.style.display='block'} else {
      ivan.style.display='none'};
    };
//Code for close modal when clicking outside modal content//
const modal01 = document.getElementById('id01');
const modal02 = document.getElementById('id02');
window.onclick = function(event){
  if (event.target == modal01) {
    modal01.style.display='none';
  } else if (event.target == modal02) {
    modal02.style.display='none';
  }};
