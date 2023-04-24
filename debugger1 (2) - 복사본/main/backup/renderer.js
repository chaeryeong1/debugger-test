const { ipcRenderer } = require('electron');

document.getElementById('minimize').addEventListener('click', () => {
  ipcRenderer.send('minimize-window');
});

document.getElementById('maximize').addEventListener('click', () => {
  ipcRenderer.send('maximize-window');
});

document.getElementById('close').addEventListener('click', () => {
  ipcRenderer.send('close-window');
});

// 타이핑메세지
var text1 = "D-bugger에 오신것을 환영합니다! ";
var text2 = "친구와 함께 보안 설정을 해보세용";
var i = 0;
var i_temp = 0;
function typingEffect() {
  if (i < text1.length) {
    document.getElementById("typing-text1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typingEffect, 100); // 0.1초 후에 재귀호출
  }
  setTimeout(() => {}, 1000);
}
function typingEffect2() {
  if (i_temp ==0){
    if (i < text1.length) {
      i++;
      setTimeout(() => {}, 100);
      if(i == text1.length-2){
        i_temp = 1;
      }
    }
  }
  
  console.log(i_temp)
  if (i_temp ==1){
    if (i < text2.length) {
      document.getElementById("typing-text2").innerHTML += text2.charAt(i);
      i++;
      setTimeout(typingEffect2, 1000); // 0.1초 후에 재귀호출
    }
  }
  
  
}

typingEffect();

typingEffect2();
// function typingEffect2() {
//   if (i < text1.length) {
//     document.getElementById("typing-text2").innerHTML += text1.charAt(i);
//     i++;
  
//     setTimeout(typingEffect, 100); // 0.1초 후에 재귀호출
//   }
// }
// typingEffect2();


// 토글
const toggleSwitch = document.getElementById("toggleSwitch");

toggleSwitch.addEventListener("change", function () {
  if (this.checked) {
    // 스위치가 켜짐
    console.log("Switch is ON");
  } else {
    // 스위치가 꺼짐
    console.log("Switch is OFF");
  }
});
