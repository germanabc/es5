/*
* @Author: Administrator
* @Date:   2017-11-17 13:56:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-17 15:32:47
*/

// 判定元素是否滚动到底
//由于scrollTop可能是小数，所以用Math.round四舍五入取整
function checkReading() { 
	console.log('我在滚动');
	console.log(this.scrollHeight);
	console.log(this.scrollTop);
	console.log(Math.round(this.scrollTop));
    if (checkReading.read) {
        return;
    } 
    checkReading.read = this.scrollHeight - Math.round(this.scrollTop) === this.clientHeight; 
    document.registration.accept.disabled = document.getElementById("nextstep").disabled = !checkReading.read; 
    checkReading.noticeBox.innerHTML = checkReading.read ? "Thank you." : "Please, scroll and read the following text.";
}

onload = function() { 
    var oToBeRead = document.getElementById("rules"); 
    checkReading.noticeBox = document.createElement("span"); 
    document.registration.accept.checked = false; 
    checkReading.noticeBox.id = "notice"; 
    oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead); 
    oToBeRead.parentNode.insertBefore(document.createElement("br"), oToBeRead); 
    oToBeRead.onscroll = checkReading; 
    checkReading.call(oToBeRead);
}