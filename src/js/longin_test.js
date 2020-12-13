// class Login extends Reg{
// 	constructor(){
// 		super();
// 		this.arr = [false,false];
// 	}
// 	addEvent(){
// 		this.name.onblur = function(){
// 			let re =  /^(15|13|17|19)\d{9}$/;
// 			let upwd = this.pwd.value;
// 			if(re.test(upwd)){
// 				this.arr[1] = true
// 			}else{
// 				alert('请输入正确的密码');
// 				this.arr[1] = false;
// 			}
// 		}.bind(this);
// 		// 
// 		this.pwd.onblur = function(){
// 			let re =/^\d+$/;
// 			let uname = this.name.value;
// 			if(re.test(uname)){
// 				this.arr[0] = true
// 			}else{
// 				alert('请输入正确的用户名')
// 				this.arr[0] = false;
// 			}
// 		}.bind(this);
// 		this.sub.onclick = function(){
// 			if(this.arr.indexOf(false === -1)){
// 				let uname = this.name.value;
// 				let upwd = this.pwd.value;
// 				// cookie
// 				let cookie_str = getCookie('registers');
// 				// alert(cookie_str)
// 				let cookie_obj = this.StrToObj(cookie_str);
// 				// 判断用户名是否存在，如果存在是否正确
// 				if(uname in cookie_obj){
// 					if(upwd === cookie_obj[uname]){
// 						alert('登陆成功');
// 						location.href = '../../dist/index.html';
// 					}else{
// 						alert('密码错误'); 
// 					}
// 				}else{
// 					alert('用户名不存在');
// 				}
// 			}else{
// 				alert('完善信息');
// 			}
// 		}.bind(this);
// 	}
	
// }
// new Login();

window.onload = function(){
    let arr = [false,false];
    $('#uname').blur(function(){
        let re = /^(15|13|17|19)\d{9}$/;
        if(re.test($('#upwd').val())){
            arr[1] = true;
        }else{
			alert('请输入正确的密码');
            arr[1] = false;
        }
    })
  
    $('#upwd').blur(function(){
        let re = /^\d+$/;
        if(re.test($('#uname').val())){
            arr[0] = true;
        }else{
			alert("请输入正确的用户名");
            arr[0] = false;
        }
    })
    
	$('#sub').click(function(){
		 // console.log($.cookie())
        if(arr.indexOf(false === -1)){
            let upwd = $('#upwd').val();
            let uname = $('#uname').val();
            
            let cookie_str = $.cookie('register') ? $.cookie('register'):'';
            let cookie_obj = convertCookieStrToCookieObj(cookie_str);
           if(uname in cookie_obj){
			   // alert(cookie_obj)
					if(upwd === cookie_obj[uname]){
						alert('登陆成功');
						location.href = '../../dist/index.html';
					}else{
						alert('密码错误'); 
					}
				}else{
					alert('用户名不存在');
				}
			}else{
				alert('完善信息');
			}
    })
}
function convertCookieStrToCookieObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}