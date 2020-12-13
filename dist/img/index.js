function Slider(){
    //大盒子
    this.big_box = document.querySelector('#slide1');
    //所有的大图li
    this.ul_li = this.big_box.children[0].children;
    //计算大图数量
    this.num = this.ul_li.length;
    //完善页面且返回ol 中 的 li（小圆点)
    this.ol_li = this.addElements();
    //获取左按钮
    this.lt_btn = this.$('#ltBtn');
    //获取右按钮
    this.rt_btn = this.$('#rtBtn');
    //记录当前下标
    this.current_index = 0;
    //添加事件
    this.addEvent();
    //获取文字信息框
    this.message = this.$('#msg');
    //实现轮播
    this.slide();
    //计时器
    this.timer = null;
    this.autoPlayer();
}
Slider.prototype.autoPlayer = function(){
    //设置计时器，实现自动轮播
    this.timer = setInterval(() => {
        //当前下标 + 1
        this.current_index ++;
        //当前下标加到长度时，当前下标为0
        if(this.current_index === this.num){
            this.current_index = 0;
        }
        //调用轮播
        this.slide();
    }, 3000);
    //大盒子添加移入事件
    this.big_box.onmouseenter = function(){
        //取消计时器
        clearInterval(this.timer);
    }.bind(this);
    //大盒子添加移出事件
    this.big_box.onmouseleave = function(){
        //调用自动轮播
        this.autoPlayer();
    }.bind(this);
}
Slider.prototype.slide = function(){
    //遍历大图及圆点
    for(let i = 0;i < this.num;i ++){
        //所有大图none
        this.ul_li[i].style.display = 'none';
        //所有圆点 蓝色
        this.ol_li[i].style.backgroundColor = 'blue';
    }
    //当前大图block
    this.ul_li[this.current_index].style.display = 'block';
    //当前圆点 红色
    this.ol_li[this.current_index].style.backgroundColor = 'red';
    //设置文字信息
    this.message.innerText =  this.ul_li[this.current_index].children[0].children[0].alt;
}
Slider.prototype.addEvent = function(){
    //左按钮添加事件
    this.lt_btn.onclick = function(){
        //当前下标 - 1
        this.current_index --;
        //当前下标 == -1 时，当前下标为最大下标 
        if(this.current_index === -1){
            this.current_index = this.num - 1;
        }
        //调用轮播
        this.slide();
    }.bind(this);
    //右按钮添加事件
    this.rt_btn.onclick = function(){
        this.current_index ++;
        if(this.current_index === this.num){
            this.current_index = 0;
        }
        //调用轮播
        this.slide();
    }.bind(this);
    //小圆点
    //记录this
    let that = this;
    //遍历圆点
    for(var i = 0;i < this.num;i ++){
        //给每一个圆点添加一个自定义属性index，记录当前圆点的下标
        this.ol_li[i].index = i;
        //圆点添加移入事件
        this.ol_li[i].onmouseenter = function(){
            //将当下移入的下标给轮播当前的下标
            that.current_index = this.index;
            //调用轮播
            that.slide();
        }
    }
}
Slider.prototype.addElements = function(){
    //左按钮
    let left_span = this.createElement('span');
    //id
    left_span.id = 'ltBtn';
    //添加内容 <
    left_span.innerHTML = '&lt;';
    //添加到大盒子中
    this.big_box.appendChild(left_span);
    //右按钮
    let right_span = this.createElement('span');
    //id
    right_span.id = 'rtBtn';
    //内容 >
    right_span.innerHTML = '&gt;';
    //添加到大盒子中
    this.big_box.appendChild(right_span);
    //文字信息框
    let div_message = this.createElement('div');
    //id
    div_message.id = 'msg';
    //添加到大盒子中
    this.big_box.appendChild(div_message);
    //ol
    let ol = this.createElement('ol');
    //数组 li
    let arr_li = [];
    //遍历大图，创建li
    for(let i = 0;i < this.num;i ++){
        //创建li
        let li = this.createElement('li');
        //ol中
        ol.appendChild(li);
        //数组中
        arr_li.push(li);
    }
    //ol ==> 大盒子中
    this.big_box.appendChild(ol);
    //返回li
    return arr_li;
}
Slider.prototype.createElement = function(element){
    let o_element = document.createElement(element);
    return o_element;
}
Slider.prototype.$ = function(selector){
    return document.querySelector(selector);
}
new Slider();