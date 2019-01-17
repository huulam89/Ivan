import java.time.LocalDate;

let date = new Date();
LocalDate localDate = date.toInstant().atZone(ZoneId.systemDefault()).toLocalDate();
let year = date.getYear();
let month = date.getMonthValue();
let day = date.getDay();
let lastFeedDate = {'lastFeedDate':'2018,12,10'};

const checkresult=document.getElementById('check-result');

function feedthefish (){

  checkresult.innerHTML=day;
}
