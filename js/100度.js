
$(function(){
	//搜索切换
	(function(){
		var aLi=$('#menu li');
		var oText=$('#search').find('.form .text');
		var arrText = [
				'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
				'例如：昌平区育新站龙旗广场2号楼609室',
				'例如：万达影院双人情侣券',
				'例如：东莞出事了，大老虎是谁？',
				'例如：北京初春降雪，天气变幻莫测'
		];
		var iNow=0;
		oText.val(arrText[iNow]);
		aLi.each(function(index){
			$(this).click(function(){
				aLi.attr('class','gradient');
				$(this).attr('class','active');
				iNow=index;
				oText.val(arrText[iNow]);
			})
		});
		oText.focus(function(){
			if ($(this).val()==arrText[iNow]) {
				$(this).val('');
			}
		})
		oText.blur(function(){
			if ($(this).val()=='') {
				$(this).val(arrText[iNow]);
			}
		});
	})();
	//options选项卡切换
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'),'click');
		fnTab($('.tabNav2'),$('.tabCon2'),'click');
		fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
		fnTab($('.tabNav4'),$('.tabCon4'),'mouseover');
		function fnTab(oNav,oCon,event){
			oCon.hide().eq(0).show();
			var aElem=oNav.children();
			aElem.each(function(index){
				$(this).on(event,function(){
					aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down_red');
					oCon.hide().eq(index).show();
				});
			});
		}
	})();
	//焦点图自动切换
	(function(){
		var oDiv=$('#fade');
		var aUlLi=oDiv.find('ul li');
		var aOlLi=oDiv.find('ol li');
		var oP=oDiv.find('p');
		var iNow=0;
		var timer=null;
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		
		fnFade();
		autoPlay();
		
		oDiv.hover(function(){clearInterval(timer)},autoPlay);
		
		aOlLi.click(function(){
			iNow=$(this).index();
			fnFade();
		});
		
		function autoPlay(){
			timer=setInterval(function(){
				fnFade();
				iNow++;
				iNow%=arr.length;
			},1000);
		}
		
		function fnFade(){
			aUlLi.each(function(index){
				if (index!=iNow) {
					aUlLi.eq(index).fadeOut().css('z-index',1);
					aOlLi.eq(index).removeClass('active');
				}else{
					$(this).fadeIn().css('z-index',2);
					aOlLi.eq(index).addClass('active');
				}
			});
			oP.text(arr[iNow]);
		}
	})();
	//日历
	(function(){
		var aSpan=$('.calendar h3 span');
		var aImg=$('.calendar .img');
		var oPrompt=$('.today_info');
		var oImg=oPrompt.find('img');
		var oStrong=oPrompt.find('strong');
		var oP=oPrompt.find('p');
		
		aImg.hover(function(){
			var iTop=$(this).parent().position().top-30;
			var iLeft=$(this).parent().position().left+55;
			var i=$(this).parent().index()%aSpan.length;
			
			//console.log($(this).parent().index());
			oPrompt.css({'top':iTop,'left':iLeft});
			oImg.attr('src',$(this).attr('src'));
			oP.text($(this).attr('info'));
			oStrong.text(aSpan.eq(i).text());
			oPrompt.show();
		},function(){
			oPrompt.hide();
		});
	})();
	//BBS高亮
	(function(){
		var aLi=$('.bbs ol li');
		aLi.mouseover(function(){
			aLi.removeClass('active');
			aLi.eq($(this).index()).addClass('active');
		});
	})();
	//hot阴影
	(function(){
		var aLi=$('.hot_area ul li');
		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
		
		aLi.mouseover(function(){
			if($(this).index()==0) return;
			aLi.find('p').remove();
			$(this).append('<p style="width:'+($(this).width()-12)+'px; height:'+($(this).height()-12)+'px">'+arr[$(this).index()]+'</p>');
		});
	})();
	//update滚动
	(function(){
		var oDiv=$('.update');
		var oUl=oDiv.find('ul');
		var Up=$('#updateUp');
		var Down=$('#updateDown');
		var oHeight=0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];
		var str='';
		var timer=null;
		var iNow=0;
		
		for (var i=0;i<arrData.length;i++) {
			str+='<li><a href="'+arrData[i].url+'"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇新文章：'+arrData[i].title+' ……</a></li>';
		}
		oUl.html(str);
		oHeight=oUl.find('li').height();
		Up.click(function(){
			doMove(-1);
		});
		Down.click(function(){
			doMove(1);
		});
		
		oDiv.hover(function(){ clearInterval(timer)},autoPlay);
		
		function autoPlay(){
			timer=setInterval(function(){
				doMove(-1);
			},2000);
		}
		
		autoPlay();
		
		function doMove(flag){
			iNow+=flag;
			if (Math.abs(iNow)>arrData.length-1) {
				iNow=0;
			}
			if (iNow>0) {
				iNow=-(arrData.length-1);
			}
			oUl.stop().animate({'top':oHeight*iNow},2000);
		}
	})();
});