var point = 0;
var arr = ["456905","133","BASİT","6/3","70","Vücudun gereksinim duyduğu susuzluğu giderir.","40","M maddesi sıkıştıralabilir.","Sıvılar konulduğu kabın şeklini alır.","Timsah"]; // soruların doğru cevapları
var pointArr = [0,0,0,0,0,0,0,0,0,0];
function control(qn,ans){
  var par_id = document.getElementById("qp" + qn);
  if (arr[qn-1] == ans){ // cevap doğru ise
    par_id.style.backgroundColor = "#5cfa91";
    if(pointArr[qn-1]==0){
      point += 10;
    }
    pointArr[qn-1] = 1;
  }
  else{ // cevap yanlış ise
    par_id.style.backgroundColor = "#ffcac4";
    if(pointArr[qn-1]==1){
      point -= 10;
    }
    pointArr[qn-1] = 0;
  }
  document.getElementById("point").innerHTML = "Puan: " + point;
}

var time_id = document.getElementById("time");
var seconds = 600;
t_int = setInterval(timer,1000);


function timer(){
  if(seconds <=0){
    time_id.innerHTML = "SÜRENİZ DOLDU";
    time_id.style.color="red";
  }
  else{
    var m = Math.floor(seconds / 60);
    var s = seconds % 60;
    if(m<10){
      m = "0" + m;
    }
    if(s<10){
      s = "0" + s;
    }
    time_id.innerHTML = "Süre: " + m + ":" + s;
    seconds--;
  }
}