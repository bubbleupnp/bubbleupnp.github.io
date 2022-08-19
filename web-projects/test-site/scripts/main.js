// let myHeading=document.querySelector('h1');
// myHeading.textContent='Hello word!';
// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//   alert('我最喜欢巧克力冰激淋了。');
// } else {
//   alert('但是巧克力才是我的最爱呀……');
// }
// document.querySelector('html').onclick = function() {
//     alert('别戳我，我怕疼。');
// }
//点击更换图片
let myImage=document.querySelector('img')
myImage.onclick=function(){
    let mySrc=myImage.getAttribute('src');
    if(mySrc==='images/1.png'){
        myImage.setAttribute('src','images/2.png');
    }
    else{
        myImage.setAttribute('src','images/1.png');
    }
}
//添加个性化欢迎
let myButton=document.querySelector('button');//将获取新按钮和标题引用保存至变量中
let myHeading=document.querySelector('h1');
//添加个性化欢迎信息，提供两种调用方式
//prompt()函数类似alert函数但需要用户输入数据，并将确定后的数据存储在myName变量中
//调用localStorage的API，可以将数据存储在浏览器中，后续使用
//这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它。
//textContent 属性设置为一个欢迎字符串加上这个新设置的名字。
function setUserName(){
    let myName=prompt('请输入你的名字。');
    localStorage.setItem('name',myName);
    myHeading.textContent='Mozilla酷毙了，'+myName;   
}

if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
 }

 function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
  }
  
  