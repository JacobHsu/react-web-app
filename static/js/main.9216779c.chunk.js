(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(74)},41:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),i=a.n(r),s=a(13),l=a(2),o=a(3),m=a(5),u=a(4),d=a(6),p=a(10),_=a(76),h=a(78),v=a(77),E=(a(41),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.msg;return c.a.createElement("div",{className:"errorToast"},c.a.createElement("div",{className:"errorToast_text"},e))}},{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout(function(){e.props.clearError()},3e3)}},{key:"componentWillUnmount",value:function(){this.timer&&clearTimeout(this.timer)}}]),t}(n.Component)),f=a(7),g={error:null},O="APP/CLEAR_ERROR",b={clearError:function(){return{type:O}}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.error;return a===O?Object(f.a)({},e,{error:null}):n?Object(f.a)({},e,{error:n}):e},j=function(e){return e.app.error},y=a(20),k=a.n(y),T=(a(57),[[{name:"\u559c\u5287",src:"https://image.flaticon.com/icons/svg/1599/1599666.svg"},{name:"\u611b\u60c5",src:"https://image.flaticon.com/icons/svg/1306/1306596.svg"},{name:"\u61f8\u7591",src:"https://image.flaticon.com/icons/svg/1599/1599683.svg"},{name:"\u5947\u5e7b",src:"https://image.flaticon.com/icons/svg/1224/1224042.svg"},{name:"\u79d1\u5e7b",src:"https://image.flaticon.com/icons/svg/1599/1599682.svg"},{name:"\u6b4c\u821e",src:"https://image.flaticon.com/icons/svg/1599/1599677.svg"},{name:"\u6230\u722d",src:"https://image.flaticon.com/icons/svg/1599/1599657.svg"},{name:"\u6050\u6016",src:"https://www.flaticon.com/premium-icon/icons/svg/1385/1385820.svg"},{name:"\u707d\u96e3",src:"https://image.flaticon.com/icons/svg/733/733077.svg"},{name:"\u52d5\u4f5c",src:"https://image.flaticon.com/icons/svg/1484/1484841.svg"}],[{name:"\u9810\u544a",src:"https://image.flaticon.com/icons/svg/1599/1599691.svg"},{name:"\u8ce3\u5ea7",src:"https://image.flaticon.com/icons/svg/1599/1599672.svg"},{name:"\u7206\u7c73\u82b1",src:"https://image.flaticon.com/icons/svg/1599/1599652.svg"},{name:"\u5967\u65af\u5361",src:"https://image.flaticon.com/icons/svg/1599/1599645.svg"},{name:"\u91d1\u68d5\u6ada",src:"https://image.flaticon.com/icons/svg/1599/1599685.svg"},{name:"\u7d00\u9304\u7247",src:"https://image.flaticon.com/icons/svg/1599/1599662.svg"},{name:"\u526a\u63a5",src:"https://image.flaticon.com/icons/svg/1599/1599669.svg"},{name:"\u539f\u8072",src:"https://image.flaticon.com/icons/svg/1599/1599648.svg"},{name:"\u5c0e\u6f14",src:"https://image.flaticon.com/icons/svg/1599/1599664.svg"},{name:"\u670d\u88dd",src:"https://image.flaticon.com/icons/svg/1599/1599674.svg"}]]),w=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"category"},c.a.createElement(k.a,{dots:!0,arrows:!1,slidesToShow:1,swipeToSlide:!0,autoplay:!0},T.map(function(e,t){return c.a.createElement("div",{key:t},e.map(function(e,t){return c.a.createElement("div",{className:"category__section",key:t},c.a.createElement("img",{className:"category__icon",src:e.src,alt:"img"}),c.a.createElement("div",null,c.a.createElement("span",{className:"category__text"},e.name)))}))})))}}]),t}(n.Component),I=(a(58),[{pic:"https://upload.wikimedia.org/wikipedia/zh/2/2b/Captain_Marvel_Poster.jpg",title:"\u9006\u8f49\u7d42\u5c40\u4e4b\u6230\u7684\u95dc\u9375\u4eba\u7269\uff01\u6f2b\u5a01\u300c\u53f2\u4e0a\u6700\u5f37\u300d\u5973\u82f1\u96c4\u300a\u9a5a\u5947\u968a\u9577\u300b",url:"https://zh.wikipedia.org/wiki/\u9a5a\u5947\u968a\u9577_(\u96fb\u5f71)"},{pic:"https://upload.wikimedia.org/wikipedia/zh/8/8a/Avengers_Infinity_War_Poster.jpg",title:"\u3010\u9019\u5c40\u6211\u5e03\u4e8610 \u5e74\u3011\u6f2b\u5a01\u5982\u4f55\u752818 \u90e8\u96fb\u5f71\u92ea\u9673\u300a\u5fa9\u4ec7\u8005\u806f\u76df3\uff1a\u7121\u9650\u4e4b\u6230\u300b ",url:"https://zh.wikipedia.org/wiki/\u5fa9\u4ec7\u8005\u806f\u76df3\uff1a\u7121\u9650\u4e4b\u6230"},{pic:"https://upload.wikimedia.org/wikipedia/zh/7/76/Avengers_Endgame_Poster.jpg",title:"\u300a\u5fa9\u4ec7\u8005\u806f\u76df\uff1a\u7d42\u5c40\u4e4b\u6230\u300b\u526a\u8f2f\u5b98\u5ba3\u5b8c\u5de5\uff01\u96fb\u5f71\u6642\u9577\u4f9d\u820a\u672a\u77e5",url:"https://zh.wikipedia.org/wiki/\u5fa9\u4ec7\u8005\u806f\u76df\uff1a\u7d42\u5c40\u4e4b\u6230"}]),C=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"headline"},c.a.createElement("div",{className:"headline__logo"}),c.a.createElement("div",{className:"headline__slider"},c.a.createElement(k.a,{slidesToShow:1,swipeToSlide:!0,autoplay:!0,vertical:!0},I.map(function(e,t){return c.a.createElement("a",{key:t,className:"headline__sliderInner",href:e.url},c.a.createElement("div",{className:"headline__sliderTitle"},e.title),c.a.createElement("div",{className:"headline__sliderImgWrapper"},c.a.createElement("img",{className:"headline__sliderImg",src:e.pic,alt:"sliderImg"})))}))))}}]),t}(n.Component),A=a(75),M=(a(59),[{id:"m-1",url:"https://www.imdb.com/title/tt0848228/?ref_=nv_sr_5",shopId:"s-100",shop:"The Avengers",product:"The Avengers (2012)",currentPrice:190,oldPrice:390,picture:"https://m.media-amazon.com/images/M/MV5BMTM2MzY1ODc1Nl5BMl5BanBnXkFtZTcwNTg4OTY3Nw@@._V1_SX1777_CR0,0,1777,999_AL_.jpg"},{id:"m-2",url:"https://www.imdb.com/title/tt2395427/?ref_=nv_sr_8",shopId:"s-101",shop:"Age of Ultron",product:"Age of Ultron",currentPrice:190,oldPrice:390,picture:"https://m.media-amazon.com/images/M/MV5BNTk4NjQ2MTMxNV5BMl5BanBnXkFtZTgwOTY3MjQ0NDE@._V1_.jpg"},{id:"m-3",url:"https://www.imdb.com/title/tt4154756/?ref_=nv_sr_4",shopId:"s-102",shop:"Infinity War",product:"Infinity War",currentPrice:290,oldPrice:490,picture:"https://m.media-amazon.com/images/M/MV5BMjI5ODQwMjg5N15BMl5BanBnXkFtZTgwMTk2Njk5NDM@._V1_SX1777_CR0,0,1777,937_AL_.jpg"}]),F=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=M;return c.a.createElement("div",{className:"discount"},c.a.createElement("a",{className:"discount__header",href:"https://jacobhsu.github.io/react-web-app/"},c.a.createElement("span",{className:"discount__title"},"\u8d85\u503c\u7279\u60e0"),c.a.createElement("span",{className:"discount__more"},"\u66f4\u591a\u512a\u60e0"),c.a.createElement("span",{className:"discount__arrow"})),c.a.createElement("div",{className:"discount__content"},e.map(function(e,t){return c.a.createElement(A.a,{key:e.id,to:"/detail/".concat(e.id),className:"discount__item"},c.a.createElement("div",{className:"discount__itemPic"},c.a.createElement("img",{width:"100%",height:"100%",src:e.picture,alt:"itemPic"})),c.a.createElement("div",{className:"discount__itemTitle"},e.shop),c.a.createElement("div",{className:"discount__itemPriceWrapper"},c.a.createElement("ins",{className:"discount__itemCurrentPrice"},e.currentPrice),c.a.createElement("del",{className:"discount__itemOldPrice"},e.oldPrice)))})))}}]),t}(n.Component),D=(a(60),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.name,n=e.tag,r=e.picture,i=e.genre,s=e.currentPrice,l=e.oldPrice,o=e.year;return c.a.createElement(A.a,{className:"likeItem",to:"/detail/".concat(t)},c.a.createElement("div",{className:"likeItem__picContainer"},c.a.createElement("div",{className:"likeItem__picTag"},n),c.a.createElement("img",{className:"likeItem__pic",src:r,alt:"pic"})),c.a.createElement("div",{className:"likeItem__content"},c.a.createElement("div",{className:"likeItem__shop"},a),c.a.createElement("div",{className:"likeItem__genre"},i),c.a.createElement("div",{className:"likeItem__detail"},c.a.createElement("div",{className:"likeItem__price"},c.a.createElement("ins",{className:"likeItem__currentPrice"},s),c.a.createElement("del",{className:"likeItem__oldPrice"},l)),c.a.createElement("div",{className:"likeItem__sale"},o))))}}]),t}(n.Component)),S=(a(61),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"loading"},c.a.createElement("div",{className:"loading__img"}),c.a.createElement("span",null,"\u6b63\u5728\u52a0\u8f09..."))}}]),t}(n.Component)),P=(a(62),[{id:"m-1",shopId:"s-1",name:"Captain America: Civil War",tag:"",picture:"https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_UY190_CR0,0,128,190_AL_.jpg",genre:"Action | Adventure | Sci-Fi",currentPrice:190,oldPrice:290,year:"2016"},{id:"p-2",shopId:"s-2",name:"Doctor Strange",tag:"",picture:"https://m.media-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_UY190_CR0,0,128,190_AL_.jpg",genre:"Action | Adventure | Fantasy",currentPrice:190,oldPrice:290,year:"2016"},{id:"p-3",shopId:"s-3",name:"Guardians of the Galaxy",tag:"",picture:"https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_UY190_CR0,0,128,190_AL_.jpg",genre:"Action | Adventure | Comedy",currentPrice:190,oldPrice:290,year:"2014"},{id:"p-4",shopId:"s-4",name:"Thor: Ragnarok",tag:"",picture:"https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_UY190_CR0,0,128,190_AL_.jpg",genre:"Action | Adventure | Comedy",currentPrice:190,oldPrice:290,year:"2017"},{id:"p-5",shopId:"s-5",name:"Black Panther",tag:"",picture:"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_UY190_CR0,0,128,190_AL_.jpg",genre:"Action | Adventure | Sci-Fi",currentPrice:190,oldPrice:290,year:"2018"}]),B=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleScroll=function(){var e=document.documentElement.scrollTop||document.body.scrollTop,t=document.documentElement.clientHeight,n=a.myRef.current.offsetTop;if(e>=a.myRef.current.offsetHeight+n-t){var c=a.state.data.concat(P),r=a.state.loadTimes+1;setTimeout(function(){a.setState({data:c,loadTimes:r})})}},a.myRef=c.a.createRef(),a.state={data:P,loadTimes:1},a.removeListener=!1,a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.data,a=e.loadTimes;return c.a.createElement("div",{ref:this.myRef,className:"likeList"},c.a.createElement("div",{className:"likeList__header"},"\u731c\u4f60\u559c\u6b61"),c.a.createElement("div",{className:"likeList__list"},t.map(function(e,t){return c.a.createElement(D,{key:t,data:e})})),a<3?c.a.createElement(S,null):c.a.createElement("a",{className:"likeList__viewAll",href:"https://jacobhsu.github.io/react-web-app/"},"\u67e5\u770b\u66f4\u591a"))}},{key:"componentDidMount",value:function(){this.state.loadTimes<3?document.addEventListener("scroll",this.handleScroll):this.removeListener=!0,0===this.state.loadTimes&&this.props.fetchData()}},{key:"componentDidUpdate",value:function(){this.state.loadTimes>=3&&!this.removeListener&&(document.removeEventListener("scroll",this.handleScroll),this.removeListener=!0)}},{key:"componentWillUnmount",value:function(){this.removeListener||document.removeEventListener("scroll",this.handleScroll)}}]),t}(n.Component),L=(a(63),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"HomeHeader"},c.a.createElement("header",{className:"homeHeader__wrapper"},c.a.createElement("a",{className:"homeHeader__city"},"\u96fb\u5f71"),c.a.createElement(A.a,{to:"/search",className:"homeHeader__search"},"\u8f38\u5165\u540d\u7a31"),c.a.createElement(A.a,{to:"/user",className:"homeHeader__self"},c.a.createElement("div",{className:"homeHeader__portrait"}))))}}]),t}(n.Component)),U=(a(64),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"activity"},c.a.createElement("div",{className:"activity__block"},c.a.createElement("a",{className:"activity__content activity__content--pink",href:"https://www.ign.com/lists/avengers"},c.a.createElement("div",{className:"activity__title"},"\u5fa9\u4ec7\u8005\u806f\u76df\u6210\u54e1"),c.a.createElement("div",{className:"activity__subTitle activity__subTitle--pink"},"\u7968\u9078TOP 50"),c.a.createElement("img",{className:"activity__pic",alt:"activity1",src:"https://res.cloudinary.com/emazecom/image/fetch/c_limit,a_ignore,w_120,h_120/http%3A%2F%2Fvignette2.wikia.nocookie.net%2Fmarvelcinematicuniverse%2Fimages%2Fa%2Fad%2FAvengers_Logo.png%2Frevision%2Flatest%3Fcb%3D20160218131959"}))),c.a.createElement("div",{className:"activity__block"},c.a.createElement("a",{className:"activity__content activity__content--blue",href:"https://www.facebook.com/imoviesales/"},c.a.createElement("div",{className:"activity__title"},"\u512a\u60e0\u798f\u5229\u653e\u9001"),c.a.createElement("div",{className:"activity__subTitle activity__subTitle--blue"},"\u96fb\u5f71\u7279\u50f9\u5831"),c.a.createElement("img",{className:"activity__pic",alt:"activity2",src:"https://op.meituan.net/oppkit_pic/20160310032241-1e027deb-2/a9b8c52c341892600ff7260c89025a59.png"}))))}}]),t}(n.Component)),R=(a(65),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("a",{className:"footer__link",href:"https://github.com/JacobHsu"},"About"),c.a.createElement("br",null),c.a.createElement("p",{className:"footer__copyright"},"copyright \xa92019"))}}]),t}(n.Component)),H=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(L,null),c.a.createElement(w,null),c.a.createElement(C,null),c.a.createElement(U,null),c.a.createElement(F,null),c.a.createElement(B,null),c.a.createElement(R,null))}}]),t}(n.Component),z=(a(66),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.product,n=e.picture,r=e.description,i=e.currentPrice,s=e.oldPrice;return c.a.createElement("div",{className:"productOverview"},c.a.createElement("div",{className:"productOverview__header"},c.a.createElement("div",{className:"productOverview__imgContainer"},c.a.createElement("img",{alt:"",className:"productOverview__img",src:n})),c.a.createElement("div",{className:"productOverview__baseInfo"},c.a.createElement("div",{className:"productOverview__title"},a),c.a.createElement("div",{className:"productOverview__content"},r))),c.a.createElement("div",{className:"productOverview__purchase"},c.a.createElement("span",{className:"productOverview__symbol"},"TWD"),c.a.createElement("span",{className:"productOverview__price"},i),c.a.createElement("span",{className:"productOverview__price--old"},s),c.a.createElement(A.a,{className:"productOverview__btn",to:"/purchase/".concat(t)},"\u7acb\u5373\u8cfc\u8cb7")),c.a.createElement("ul",{className:"productOverview__remark"},c.a.createElement("li",{className:"productOverview__remarkItem"},c.a.createElement("i",{className:"productOverview__sign1"}),c.a.createElement("span",{className:"productOverview__desc"},"7\u65e5\u5167\u53ef\u9000")),c.a.createElement("li",{className:"productOverview__remarkItem"},c.a.createElement("i",{className:"productOverview__sign2"}),c.a.createElement("span",{className:"productOverview__desc"},"\u904e\u671f\u81ea\u52d5\u9000"))))}}]),t}(n.Component)),V=(a(67),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"shopInfo"},c.a.createElement("div",{className:"shopInfo__header"},"\u5546\u5e97",c.a.createElement("span",{className:"shopInfo__arrow"})),c.a.createElement("div",{className:"shopInfo__middle"},c.a.createElement("div",{className:"shopInfo__middleLeft"},c.a.createElement("div",{className:"shopInfo__shopName"},"iTunes"),c.a.createElement("div",{className:"shopInfo__starsWrapper"},c.a.createElement("span",{className:"shopInfo__stars"},c.a.createElement("i",{className:"shopInfo__stars--red",style:{width:"80%"},alt:"80% 4stars"})),c.a.createElement("span",{className:"shopInfo__distance"},"US"))),c.a.createElement("div",{className:"shopInfo__middleRight"},c.a.createElement("i",{className:"shopInfo__phoneIcon"}))),c.a.createElement("div",{className:"shopInfo__bottom"},c.a.createElement("i",{className:"shopInfo__locationIcon"}),"US"))}}]),t}(n.Component)),W=(a(68),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"detail"},c.a.createElement("div",{className:"detail__header"},c.a.createElement("span",null,"\u5546\u54c1\u8a73\u60c5"),c.a.createElement("i",{className:"detail__headerIcon"})),c.a.createElement("table",{cellPadding:"0",cellSpacing:"0",className:"detail__table"},c.a.createElement("tbody",null,c.a.createElement("tr",{className:"detail__row"},c.a.createElement("th",{colSpan:"3",className:"detail__category"},"\u96fb\u5f71")),c.a.createElement("tr",{className:"detail__row"},c.a.createElement("td",null,"Infinity War"),c.a.createElement("td",{className:"detail__td--alignRight"},"1"),c.a.createElement("td",{className:"detail__td--alignRight"},"490\u5143")),c.a.createElement("tr",{className:"detail__row"},c.a.createElement("td",null),c.a.createElement("td",{className:"detail__td--price"},"\u539f\u50f9",c.a.createElement("br",null),c.a.createElement("strong",{className:"detail__td--priceNew"},"\u512a\u60e0\u50f9")),c.a.createElement("td",{className:"detail__td--price"},"490\u5143",c.a.createElement("br",null),c.a.createElement("strong",{className:"detail__td--priceNew"},"290\u5143"))))),c.a.createElement("div",{className:"detail__remark"},"Extras"),c.a.createElement("div",{className:"detail__more"},c.a.createElement("span",null,"\u66f4\u591a\u5e55\u5f8c\u7279\u8f2f"),c.a.createElement("span",{className:"detail__notice"}),c.a.createElement("i",{className:"detail__arrow"})))}}]),t}(n.Component)),x=(a(69),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"remark"},c.a.createElement("div",{className:"remark__header"},"\u8cfc\u8cb7\u9808\u77e5",c.a.createElement("i",{className:"remark__icon"})),c.a.createElement("div",{className:"remark__list"},c.a.createElement("dl",{className:"remark__item"},c.a.createElement("dt",{className:"remark__itemTitle"},"\u6709\u6548\u671f"),c.a.createElement("dd",{className:"remark__itemDesc"},"\u7d42\u751f\u6709\u6548")),c.a.createElement("dl",{className:"remark__item"},c.a.createElement("dt",{className:"remark__itemTitle"},"\u9664\u5916\u65e5\u671f"),c.a.createElement("dd",{className:"remark__itemDesc"},"\u7121")),c.a.createElement("dl",{className:"remark__item"},c.a.createElement("dt",{className:"remark__itemTitle"},"\u4f7f\u7528\u6642\u9593"),c.a.createElement("dd",{className:"remark__itemDesc"},"\u555f\u7528\u5373\u53ef\u4f7f\u7528")),c.a.createElement("dl",{className:"remark__item"},c.a.createElement("dt",{className:"remark__itemTitle"},"\u9810\u7d04\u63d0\u9192"),c.a.createElement("dd",{className:"remark__itemDesc"},"\u7121\u9700\u9810\u7d04")),c.a.createElement("dl",{className:"remark__item"},c.a.createElement("dt",{className:"remark__itemTitle"},"\u898f\u5247\u63d0\u9192"),c.a.createElement("dd",{className:"remark__itemDesc"}))))}}]),t}(n.Component)),Q=(a(70),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("a",{className:"buyButton"},"\u7acb\u5373\u8cfc\u8cb7")}}]),t}(n.Component)),Y=(a(71),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleBack=function(){},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.grey,a=e.title,n=e.onBack,r=t?"#f0f0f0":"#fff";return c.a.createElement("header",{className:"header",style:{backgroundColor:r}},c.a.createElement("div",{className:"header__back",onClick:n},"\u8fd4\u56de"),c.a.createElement("div",{className:"header__title"},a))}}]),t}(n.Component)),X=a(11),Z=function(e){return"/mock/product_detail/".concat(e,".json")},q=function(e){return"/mock/shops/".concat(e,".json")},J=a(31),G=new Headers({Accept:"application/json","Content-type":"application/json"});function K(e,t){return 200===t.status?t.json():(console.error("Request failed. Url= ".concat(e)),Promise.reject({error:{message:"Request failed due to server error"}}))}var $=function(e,t){return(a=e,fetch(a,{method:"GET",headers:G}).then(function(e){return K(a,e)}).catch(function(e){return console.error("Request failed. Url = ".concat(a,". Message = ").concat(e)),Promise.reject({error:{message:"Request failed."}})})).then(function(e){return ee(e,t)});var a},ee=function(e,t){var a,n=t.id,c=t.name,r={},i=[];return Array.isArray(e)?e.forEach(function(e){r[e[n]]=e,i.push(e[n])}):(r[e[n]]=e,i.push(e[n])),a={},Object(X.a)(a,c,r),Object(X.a)(a,"ids",i),a},te=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return a.response&&a.response[e]?Object(f.a)({},t,a.response[e]):t}},ae={name:"shops",id:"id"},ne=te(ae.name),ce=function(e,t){return e.entities.shops[t]},re={name:"products",id:"id"},ie=te(re.name),se=function(e,t){var a=e.entities.products[t];return a&&a.detail&&a.purchaseNotes?a:null},le="DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",oe="DETAIL/FETCH_PRODUCT_DETAIL_SUCCES",me="DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",ue="DETAIL/FETCH_PRODUCT_DETAIL_REQUEST",de="DETAIL/FETCH_PRODUCT_DETAIL_SUCCES",pe="DETAIL/FETCH_PRODUCT_DETAIL_FAILURE",_e={product:{isFetching:!1,id:null},relatedShop:{isFetching:!1,id:null}},he={loadProductDetail:function(e){return function(t,a){if(se(a(),e))return t(fe(e));var n=Z(e);return console.log(n,t(ve(n,e))),t(ve(n,e))}},loadShopById:function(e){return function(t,a){if(ce(a(),e))return t(ge(e));var n=q(e);return t(Ee(n,e))}}},ve=function(e,t){var a;return a={},Object(X.a)(a,"FETCH DATA",{types:[le,oe,me],endpoint:e,schema:re}),Object(X.a)(a,"id",t),a},Ee=function(e,t){var a;return a={},Object(X.a)(a,"FETCH DATA",{types:[ue,de,pe],endpoint:e,schema:ae}),Object(X.a)(a,"id",t),a},fe=function(e){return{type:oe,id:e}},ge=function(e){return{type:de,id:e}},Oe=Object(p.c)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e.product,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case le:return Object(f.a)({},e,{isFetching:!0});case oe:return Object(f.a)({},e,{id:t.id,isFetching:!1});case me:return Object(f.a)({},e,{isFetching:!1,id:null});default:return e}},relatedShop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e.relatedShop,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ue:return Object(f.a)({},e,{isFetching:!0});case de:return Object(f.a)({},e,{id:t.id,isFetching:!1});case pe:return Object(f.a)({},e,{isFetching:!1,id:null});default:return e}}}),be=function(e,t){return se(e,t)},Ne=function(e,t){var a=function(e,t){return e.entities.products[t]}(e,t),n=a?a.nearestShop:null;return n?ce(e,n):null},je=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).handleBack=function(){a.props.history.goBack()},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.product;return c.a.createElement("div",null,c.a.createElement(Y,{title:"\u5546\u54c1\u8a73\u60c5",onBack:this.handleBack,grey:!0}),e&&c.a.createElement(z,{data:e}),c.a.createElement(V,null),c.a.createElement(W,null),c.a.createElement(x,null),c.a.createElement(Q,null))}},{key:"componentDidMount",value:function(){var e=this.props.product;if(e)this.props.relatedShop||this.props.detailActions.loadShopById(e.nearestShop);else{var t=this.props.match.params.id;this.props.detailActions.loadProductDetail(t)}}},{key:"componentDidUpdate",value:function(e){!e.product&&this.props.product&&this.props.detailActions.loadShopById(this.props.product.nearestShop)}}]),t}(n.Component),ye=Object(s.b)(function(e,t){var a=t.match.params.id;return{product:be(e,a),relatedShop:Ne(e,a)}},function(e){return{detailActions:Object(p.b)(he,e)}})(je),ke=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.error,a=e.appActions.clearError;return c.a.createElement("div",{className:"App"},c.a.createElement(_.a,null,c.a.createElement(h.a,null,c.a.createElement(v.a,{path:"/detail/:id",component:ye}),c.a.createElement(v.a,{path:"/",component:H}))),t?c.a.createElement(E,{msg:t,clearError:a}):null)}}]),t}(n.Component),Te=Object(s.b)(function(e,t){return{error:j(e)}},function(e){return{appActions:Object(p.b)(b,e)}})(ke),we=a(30),Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments.length>1&&arguments[1];return e},Ae=Object(p.c)({products:ie,shops:ne,orders:Ie,comments:Ce}),Me="HOME/FETCH_LIKES_REQUEST",Fe="HOME/FETCH_LIKES_SUCCESS",De="HOME/FETCH_LIKES_FAILURE",Se="HOME/FETCH_DISCOUNTS_REQUEST",Pe="HOME/FETCH_DISCOUNTS_SUCCESS",Be="HOME/FETCH_DISCOUNTS_FAILURE",Le={likes:{isFetching:!1,pageCount:0,ids:[]},discounts:{isFetching:!1,ids:[]}},Ue=Object(p.c)({discounts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le.discounts,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Se:return Object(f.a)({},e,{isFetching:!0});case Pe:return Object(f.a)({},e,{isFetching:!1,ids:e.ids.concat(t.response.ids)});case Be:return Object(f.a)({},e,{isFetching:!1});default:return e}},likes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le.likes,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(f.a)({},e,{isFetching:!0});case Fe:return Object(f.a)({},e,{isFetching:!1,pageCount:e.pageCount+1,ids:e.ids.concat(t.response.ids)});case De:return Object(f.a)({},e,{isFetching:!1});default:return e}}}),Re=Object(p.c)({entities:Ae,home:Ue,detail:Oe,app:N}),He=Object(p.d)(Re,Object(p.a)(we.a,function(e){return function(e){return function(t){var a=t["FETCH DATA"];if("undefined"===typeof a)return e(t);var n=a.endpoint,c=a.schema,r=a.types;if("string"!==typeof n)throw new Error("endpoint\u5fc5\u9808\u70ba\u5b57\u7b26\u4e32\u985e\u578b\u7684URL");if(!c)throw new Error("\u5fc5\u9808\u6307\u5b9a\u9818\u57df\u5be6\u9ad4\u7684schema");if(!Array.isArray(r)&&3!==r.length)throw new Error("\u9700\u8981\u6307\u5b9a\u4e00\u500b\u5305\u542b\u4e863\u500baction type\u7684\u6578\u7d44");if(!r.every(function(e){return"string"===typeof e}))throw new Error("action type\u5fc5\u9808\u70ba\u5b57\u7b26\u4e32\u985e\u578b");var i=function(e){var a=Object(f.a)({},t,e);return delete a["FETCH DATA"],a},s=Object(J.a)(r,3),l=s[0],o=s[1],m=s[2];return e(i({type:l})),$(n,c).then(function(t){return e(i({type:o,response:t}))},function(t){return e(i({type:m,error:t.message||"\u7372\u53d6\u6578\u64da\u5931\u6557"}))})}}}));a(73);i.a.render(c.a.createElement(s.a,{store:He},c.a.createElement(Te,null)),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9216779c.chunk.js.map