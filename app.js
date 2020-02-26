var currentMoney = 0;
var interval;
var h = 0;
var m = 0;
var s = 0;
    
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  function startTime() {
    document.getElementById('start_btn').disabled = true;
    document.getElementById('end_btn').disabled = false;
    var today = new Date();
    var hs = today.getHours();
    var ms= today.getMinutes();
    var ss = today.getSeconds();
    // add a zero in front of numbers<10
    ms = checkTime(ms);
    ss = checkTime(ss);
    return hs + ":" + ms + ":" + ss;
  }

  var startProcess = function() {
    // check right input
    if(document.getElementById('wage').value == ""){
            alert("Please enter a wage per hour");
        }else{                
            document.getElementById('startTime').value = startTime();
            interval = setInterval(updateTimeAndMoney,1000);
        }
  };


  function updateTimeAndMoney() {
    var today = new Date();
    var hc = today.getHours();
    var mc = today.getMinutes();
    var sc = today.getSeconds();
    mc = checkTime(mc);
    sc = checkTime(sc);
    document.getElementById('currentTime').value = hc + ":" + mc + ":" + sc;

    s++;
    if(s==60){
        s = 0;
        m++;
    };
    if(parseInt(m)==60){
        m = 0;
        h++;
    }
    document.getElementById('timePassed').value = checkTime(h) + ":" + checkTime(m) + ":" + checkTime(s);


    var wage = parseInt(document.getElementById('wage').value);
    currentMoney+=wage/3600;
    document.getElementById('currentMoney').value = currentMoney.toFixed(2);
  }

  function endProcess(){
    currentMoney = 0;
    clearInterval(interval);
    document.getElementById('start_btn').disabled = false;
    document.getElementById('end_btn').disabled = true;
    s = 0;
    m = 0;
    h = 0;
  }