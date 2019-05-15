// JavaScript Document
function m_left_3(obj){
	var achild = obj.children;
	var d2_w = obj.clientWidth;
	for(var i=0;i<achild.length;i++){
		achild[i].style.position = 'absolute';
		achild[i].style.left = d2_w * (i-1) + 'px';;
	}
	setInterval(function(){
		for(let i=0;i<achild.length;i++){
			m_left_2(achild[i],d2_w * (i-1),d2_w);
		}
	},6000)
}
		function m_left_2(obj,s1,s2){
			m_left(obj,s1-s2);
			setTimeout(function(){
				m_left(obj,s1-s2*2,function(){
					obj.style.left = s1 + 'px';
				});
				
			},3000)
		}
		function m_left(obj,s,fn){
			var speed = -15;
			var l = 0;
			clearInterval(obj.timer)
			obj.timer = setInterval(function(){
				l = obj.offsetLeft + speed;
					if(l<=s){
						l = s;
					}
				obj.style.left = l + 'px';
				if(l==s){
					clearInterval(obj.timer);
					fn && fn();			  
				}
			},50)
		}


function m_left_4(obj){
	var achild = obj.children;
	var d2_w = obj.clientWidth;
	for(var i=0;i<achild.length;i++){
		achild[i].style.position = 'absolute';
		achild[i].style.left = d2_w * (i-1) + 'px';;
	}
	setInterval(function(){
		for(let i=0;i<achild.length;i++){
			m_left_4_1(achild[i],d2_w * (i-1),d2_w);
		}
	},8000)
}
		function m_left_4_1(obj,s1,s2){
			m_left_4_2(obj,s1-s2);
			setTimeout(function(){
				m_left_4_2(obj,s1-s2*2,function(){
					obj.style.left = s1 + 'px';
				});
				
			},4000)
		}
		function m_left_4_2(obj,s,fn){
			var speed = -25;
			var l = 0;
			clearInterval(obj.timer)
			obj.timer = setInterval(function(){
				l = obj.offsetLeft + speed;
					if(l<=s){
						l = s;
					}
				obj.style.left = l + 'px';
				if(l==s){
					clearInterval(obj.timer);
					fn && fn();			  
				}
			},50)
		}