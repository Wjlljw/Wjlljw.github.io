// 实现图片切换功能
let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/1.jpg'){
		myImage.setAttribute('src','images/2.jpg');
	}
	else{
		myImage.setAttribute('src','images/1.jpg');
	}
}

//实现个性化登录功能
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	//prompt函数功能类似于python中的input函数，既能在显示器中输出，又可以从键盘获得信息
	let myName = prompt('请输入你的名字。');
	
	//检查输入是否为null或者空字符
	if(!myName){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.textContent = 'ilan,' + myName ;
	}
	
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'ilan, ' + storedName;
}


myButton.onclick = function(){
	setUserName();
}