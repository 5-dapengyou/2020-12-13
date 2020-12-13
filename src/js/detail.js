class Product{
	constructor(){
		this.$cart = $('#buy');
		this.$buy = $('.addToCart');
		console.log(this.$cart)
		this.add();	
		// this.init();
	}
	add(){
		let that = this;
		this.$cart.on('click',function(){
			// alert(1);
			location.href = '../../dist/pages/cart.html';
		});
		this.$buy.each(function(i,value){
			$(value).on('click',function(){
				//获取id
				let id = $(this).parent().attr('data-good-id');
				// alert(id);
				let src = $(this).siblings('img').attr('src')
				let name = $(this).prev().prev().text();
				let price = $(this).prev().text();
				// console.log(price)
				let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
				let cookie_obj = that.StrToObj(cookie_str);
				if(id in cookie_obj){
					cookie_obj[id].num ++;
				}else{
					cookie_obj[id] = {
						name,
						price,
						src,
						num : 1
					}
				}
				console.log(cookie_obj)
				// 加入cookie
				$.cookie('carts',JSON.stringify(cookie_obj),{expires : 5,path : '/'})
				
			})
		})
		
	}
	// init(){
	// 	let that = this;
	// 	let cookie_str = $.cookie('carts') ? $.cookie('carts') : '';
	// 	let cookie_obj = that.StrToObj(cookie_str);
	// 	let sum = 0;
	// 	for(let key in cookie_obj){
	// 		sum += cookie_obj[key].num;
	// 		}
	// 		this.$cart.val(`购物车(${num + 1})`);
	// 	} 
	 
	StrToObj(str){
		if(!str){
			return {};
		}else{
			return JSON.parse(str);
		}
	}
}
new Product();
 
			