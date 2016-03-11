Countdown until 2050   
<h1 id="countdown-holder"></h1>  

<script src="/js/countdown.js"></script>  

<script>   
  var clock = document.getElementById("countdown-holder")   
    , targetDate = new Date(2050, 00, 01); // Jan 1, 2050   
  
  clock.innerHTML = countdown(targetDate).toString();    
</script>  

<script>   
  var clock = document.getElementById("countdown-holder")   
    , targetDate = new Date(2050, 00, 01); // Jan 1, 2050;   
  
  clock.innerHTML = countdown(targetDate).toString();   
  setInterval(function(){   
    clock.innerHTML = countdown(targetDate).toString();   
  }, 1000);   
</script>  

<script>   
  var clock = document.getElementById("countdown-holder")   
    , targetDate = new Date(2050, 00, 01); // Jan 1, 2050;   
  
  clock.innerHTML = countdown(targetDate).toString();   
  setInterval(function(){   
    clock.innerHTML = countdown(targetDate).toString();   
  }, 1000);   
</script>  

You will be logged out in <span id="logout-timer"></span>  
<script>   
  var timer = document.getElementById("logout-timer")   
    , now = new Date()   
    , deadline = new Date(now.getFullYear, now.getMonth, now.getDate, now.getHours, now.getMinutes + 15);   
  
  timer.innerHTML = countdown(deadline).toString();   
  setInterval(function(){   
    timer.innerHTML = countdown(deadline ).toString();   
  }, 1000);   
</script>  

<script>   
  var tdy = new Date()   
    , tmrw = new Date(tdy.getFullYear(), tdy.getMonth(), tdy.getDate() + 1);   
  
    console.debug(countdown(tmrw));   
</script>  
