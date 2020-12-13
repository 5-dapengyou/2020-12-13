// class Reg{
// 	constructor(){
// 		this.name = this.$('#uname');
// 		this.pwd = this.$('#upwd');
// 		this.sub = this.$('#sub');
// 		this.arr = [false,false];
// 		this.addEvent();
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
// 				let cookie_str = getCookie('register');
// 				// alert(cookie_str)
// 				let cookie_obj = this.StrToObj(cookie_str);
// 				if(uname in cookie_obj){
// 					alert('用户已存在');
// 				}else{
// 					cookie_obj[uname] = upwd;
// 					createCookie('registers',JSON.stringify(cookie_obj),{expires : 7,path: '/'});
// 					alert('注册成功')
// 					 location.href = '../../dist/pages/login.html';
// 				}
// 			}else{
// 				alert('完善信息');
				
// 			}
			
// 		}.bind(this);
// 	}
// 	$(selector){
// 		return document.querySelector(selector);
// 	}
// 	StrToObj(str){
// 			if(!str){
// 				return {};
// 			}
// 			return JSON.parse(str);
// 		}
// }
// new Reg();


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
		 console.log($.cookie())
        if(arr.indexOf(false === -1)){
            let upwd = $('#upwd').val();
            let uname = $('#uname').val();
            
            let cookie_str = $.cookie('register') ? $.cookie('register'):'';
            let cookie_obj = convertCookieStrToCookieObj(cookie_str);

            if(uname in cookie_obj){
                alert("用户已存在");
            }else{
				
                cookie_obj[uname] = upwd;
				$.cookie('register',JSON.stringify(cookie_obj),{expires : 10,path : '/'});
                alert('注册成功');
                location.href = '../../dist/pages/login.html';
				
            }
        }else{
            alert('信息不完整');
        }
    })
}
function convertCookieStrToCookieObj(str){
		if(!str){
			return {};
		}
		return JSON.parse(str);
	}
