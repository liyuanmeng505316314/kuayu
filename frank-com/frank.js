//封装一个JSONP函数

 jsonp=(url)=>{
     return new Promise((resolve,reject)=>{
        const randomName = 'lee+'+Math.random()
        window[randomName]=(data)=>{
            resolve(data)
            };
         const script =document.createElement('script');
         script.src=`${url}?callback=${randomName}`;
         script.onload=()=>{
            script.remove();
         }
         script.onerror=()=>{
            reject();
         }
         document.body.appendChild(script);
     });
 }
 jsonp('http://qq.com:8888/friends.js')
    .then((data)=>{console.log(data)})


// // ----------------------------------------
// // 现在，B网站使用的回调函数的名字是我给的，而不是双方默认的
// const randomName = 'lee'+Math.random()
// console.log(randomName)
// window[randomName]=(data)=>{
//     console.log(data)
// }
// // 此处window.xxx就是一个标准的回调，即我只先声明函数window.xxx
// // 然后等目标网站，自己往这个函数里面传参数然后执行
// const script =document.createElement('script')
// script.src =`http://qq.com:8888/friends.js?functionName=${randomName}`
// script.onload=()=>{
//     script.remove()
// }
// document.body.appendChild(script)

// -------------------------------------------------------------------
//这是以前双方默认使用XXXH回调
// window.xxx=(data)=>{
//     console.log(data)
// }
// // 此处window.xxx就是一个标准的回调，即我只先声明函数window.xxx
// // 然后等目标网站，自己往这个函数里面传参数然后执行
// const script =document.createElement('script')
// script.src ='http://qq.com:8888/friends.js'
// document.body.appendChild(script)



// 底下是用AJAX请求JSON数据
// const request =new XMLHttpRequest()
// request.open('GET','http://qq.com:8888/friends.json')
// request.onreadystatechange=()=>{
//     if(request.readyState===4&&request.status===200)
//     {
//         console.log(request.response)
//     }
// }
// request.send()