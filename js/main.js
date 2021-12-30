

if(checkbox.checked=== true){
  sumMonthly.style.display="none"
  sumAnually.style.display="block"

}else{

}


function check(){
  let checkbox = document.querySelector('.input-switcher');
  let sumMonthly = document.getElementsByClassName('sum-monthly');
  let sumAnually = document.getElementsByClassName('sum-anually');

  for (let i= 0; i < sumMonthly.length; i++) {
    if(checkbox.checked=== true){
      sumMonthly[i].style.display="none"
      sumAnually[i].style.display="block"

    }
    else if (checkbox.checked=== false){
      sumMonthly[i].style.display="block"
      sumAnually[i].style.display="none"

    }
  }


}
check();