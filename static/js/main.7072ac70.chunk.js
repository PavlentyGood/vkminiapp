(this.webpackJsonproybotapp=this.webpackJsonproybotapp||[]).push([[0],{204:function(e,t,a){e.exports=a(311)},311:function(e,t,a){"use strict";a.r(t);a(205),a(231),a(233),a(234),a(236),a(237),a(238),a(239),a(240),a(241),a(242),a(243),a(245),a(246),a(247),a(248),a(249),a(250),a(251),a(252),a(253),a(254),a(256),a(257),a(258),a(259),a(260),a(261),a(262),a(263),a(264),a(265),a(266),a(267),a(268),a(269),a(270),a(271),a(272),a(273);var n=a(0),r=a.n(n),i=a(88),s=a.n(i),o=a(54),c=a.n(o),l=a(89),u=a.n(l),m=a(119),d=a(12),p=a(13),h=a(1),v=a(16),f=a(15),b=a(44),y=a.n(b),g=a(126),E=a.n(g),k=a(125),C=a.n(k),I=(a(282),a(56)),O=a.n(I),j=a(30),x=a.n(j),w=a(19),T=a.n(w),P=a(45),_=a.n(P),S=a(11),N=a.n(S),F=a(120),A=a.n(F),U=function(){function e(){Object(d.a)(this,e)}return Object(p.a)(e,null,[{key:"query",value:function(e,t,a){var n="GET"===e?e:"POST",r=new XMLHttpRequest;return r.open(n,"https://pavlentygood.fvds.ru/query.php?method=".concat(e,"&url=").concat(encodeURIComponent("http://91.240.84.91:8124/roybot/"+t),"&auth_url=").concat(encodeURIComponent(document.location.href)),!1),"POST"===e||"PUT"===e?(r.setRequestHeader("Content-Type","application/json"),r.send(JSON.stringify(a))):r.send(),"auth_error"===r.responseText?r.responseText:r.responseText.length>0?"error"===r.responseText?"error":JSON.parse(r.responseText):void 0}},{key:"getUser",value:function(e){return this.query("GET","app_info?userId=".concat(e))}},{key:"getAvailableCommunities",value:function(e){return this.query("GET","available_communities?userId=".concat(e))}},{key:"getUserCommands",value:function(e){return this.query("GET","simple_command?userId=".concat(e))}},{key:"addCommand",value:function(e){return this.query("POST","simple_command",e)}},{key:"updateCommand",value:function(e){return this.query("PUT","simple_command",e)}},{key:"deleteCommand",value:function(e){return this.query("DELETE","simple_command?id=".concat(e))}},{key:"vk",value:function(e){var t="https://api.vk.com/method/".concat(e,"&v=5.81&access_token=81025aad81025aad81025aad7c8173fe038810281025aaddfadd240e8df843a9e48e0fe"),a=new XMLHttpRequest;return a.open("GET","https://pavlentygood.fvds.ru/query.php?method=GET&url=".concat(encodeURIComponent(t),"&auth_url=").concat(encodeURIComponent(document.location.href)),!1),a.send(),"auth_error"===a.responseText?a.responseText:a.responseText.length>0?"error"===a.responseText?"error":JSON.parse(a.responseText).response:void 0}}]),e}(),B=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).state={dbinfo:U.getUser(e.userId)},n}return Object(p.a)(a,[{key:"render",value:function(){var e;return r.a.createElement(y.a,{id:this.props.id},this.props.user&&r.a.createElement(T.a,null,r.a.createElement(O.a,null,"RoyBot"),r.a.createElement(_.a,{before:r.a.createElement(A.a,{src:this.props.user.photo_200}),description:null!==(e=this.state.dbinfo.Nick)&&void 0!==e?e:"\u041d\u0435\u0442 \u043d\u0438\u043a\u0430"},"".concat(this.props.user.first_name," ").concat(this.props.user.last_name)),r.a.createElement(N.a,null,r.a.createElement(x.a,{size:"l",level:"2",onClick:this.props.go,"data-to":"com_list"},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043a\u043e\u043c\u0430\u043d\u0434"))))}}]),a}(r.a.Component),H=a(10),M=a(69),q=a.n(M),L=a(67),R=a.n(L),z=a(68),G=a.n(z),J=a(122),D=a.n(J),$=a(46),K=a.n($),V=a(47),W=a.n(V),X=Object(H.e)(),Q=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).openCommand=e.openCommand.bind(Object(h.a)(e)),e}return Object(p.a)(a,[{key:"openCommand",value:function(e){var t=this,a=e.currentTarget.dataset.comindex;this.props.app.setState((function(e){return e.activePanel="com_editor",t.props.app.command=t.props.app.comArr[a],e}))}},{key:"getList",value:function(){var e=this;return r.a.createElement(K.a,null,this.props.app.comArr.map((function(t,a){return r.a.createElement(_.a,{before:r.a.createElement(D.a,null),onClick:e.openCommand,"data-comindex":a},t.name)})))}},{key:"render",value:function(){return this.props.app.comArr=U.getUserCommands(this.props.userId),r.a.createElement(y.a,{id:this.props.id},r.a.createElement(O.a,{left:r.a.createElement(q.a,{onClick:this.props.go,"data-to":"home"},X===H.b?r.a.createElement(R.a,null):r.a.createElement(G.a,null))},"\u041a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043a\u043e\u043c\u0430\u043d\u0434"),r.a.createElement(T.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,{size:"l",onClick:this.props.go,"data-to":"com_constructor"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443"))),r.a.createElement(T.a,{header:r.a.createElement(W.a,null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u044b\u0445 \u043a\u043e\u043c\u0430\u043d\u0434")},r.a.createElement(N.a,null,r.a.createElement("h4",{hidden:this.props.app.comArr.length>0},"\u041f\u0443\u0441\u0442\u043e"),this.getList())))}}]),a}(r.a.Component),Y=a(53),Z=a.n(Y),ee=a(55),te=a.n(ee),ae=a(70),ne=a.n(ae),re=a(62),ie=a.n(re),se=a(71),oe=a.n(se),ce=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;return Object(d.a)(this,a),(e=t.call(this)).setItem=e.setItem.bind(Object(h.a)(e)),e}return Object(p.a)(a,[{key:"setItem",value:function(){var e=this;this.props.cc.setState((function(t){return t[e.props.item.name].status=!t[e.props.item.name].status,t}))}},{key:"render",value:function(){var e,t;return r.a.createElement(N.a,{hidden:null===(e=this.props)||void 0===e||null===(t=e.item)||void 0===t?void 0:t.status},r.a.createElement(x.a,{size:"m",onClick:this.setItem,mode:"commerce"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c ".concat(this.props.item.rusName)))}}]),a}(r.a.Component),le=a(124),ue=a.n(le),me=a(123),de=a.n(me),pe=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this)).state={item:e.item},n.selectItemType=n.selectItemType.bind(Object(h.a)(n)),n.setFieldHidden=n.setFieldHidden.bind(Object(h.a)(n)),n.changeField=n.changeField.bind(Object(h.a)(n)),n.deleteItem=n.deleteItem.bind(Object(h.a)(n)),n.changeTextField=n.changeTextField.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"selectItemType",value:function(e){var t=this,a=e.target.value;this.props.cc.setState((function(e){return t.state.item.type=0==a.length?null:a,e}))}},{key:"setFieldHidden",value:function(e){for(var t in e)if(e[t]===this.state.item.type)return!1;return!0}},{key:"changeField",value:function(e){var t=this,a=e.currentTarget.name,n=e.currentTarget.value;this.props.cc.setState((function(e){return""!==n&&"-"!==n&&"text"!==a&&isNaN(n)||(t.state.item[a]=n),e}))}},{key:"changeTextField",value:function(e){var t=this,a=e.currentTarget.name,n=e.currentTarget.value;this.props.cc.setState((function(e){return t.state.item[a]=n,e}))}},{key:"deleteItem",value:function(){var e=this;this.props.cc.setState((function(t){return e.state.item.status=!1,t}))}},{key:"render",value:function(){return r.a.createElement(T.a,{hidden:!this.state.item.status,header:r.a.createElement(W.a,{mode:"secondary",aside:r.a.createElement(de.a,{onClick:this.deleteItem})},this.state.item.rusName)},this.fields())}}]),a}(r.a.Component),he=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){return Object(d.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"fields",value:function(){return r.a.createElement(K.a,null,r.a.createElement(N.a,null,r.a.createElement(ue.a,{placeholder:"\u0422\u0435\u043a\u0441\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",name:"text",value:this.state.item.text,onChange:this.changeField})))}}]),a}(pe),ve=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changeCheckBox=n.changeCheckBox.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"changeCheckBox",value:function(e){var t=this,a=(e.target.name,e.target.checked);this.props.cc.setState((function(e){return t.state.item.withPinned=a,e}))}},{key:"fields",value:function(){return r.a.createElement(K.a,null,r.a.createElement(N.a,null,r.a.createElement(H.d,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f",value:this.state.item.type,onChange:this.selectItemType},r.a.createElement("option",{value:"reference"},"\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"),r.a.createElement("option",{value:"pinned"},"\u0417\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u0439"),r.a.createElement("option",{value:"number"},"\u041f\u043e \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u043e\u043c\u0443 \u043d\u043e\u043c\u0435\u0440\u0443"))),r.a.createElement(N.a,{hidden:this.setFieldHidden(["reference"])},r.a.createElement(H.c,{type:"text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043f\u043e\u0441\u0442",name:"reference",value:this.state.item.reference,onChange:this.changeTextField})),r.a.createElement(N.a,{hidden:this.setFieldHidden(["number","pinned"])},r.a.createElement(H.c,{type:"text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430",name:"owner",value:this.state.item.owner,onChange:this.changeTextField})),r.a.createElement(N.a,{hidden:this.setFieldHidden(["number"])},r.a.createElement(H.c,{type:"text",placeholder:"\u041f\u043e\u0440\u044f\u0434\u043a\u043e\u0432\u044b\u0439 \u043d\u043e\u043c\u0435\u0440",name:"number",value:this.state.item.number,onChange:this.changeField})),r.a.createElement(N.a,{hidden:this.setFieldHidden(["number"])},r.a.createElement(oe.a,{name:"withPinned",checked:this.state.item.withPinned,onChange:this.changeCheckBox},"\u0423\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u0437\u0430\u043a\u0440\u0435\u043f\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0441\u0442")))}}]),a}(pe),fe=a(72),be=a(127),ye=a(52),ge=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).getIdsMap=n.getIdsMap.bind(Object(h.a)(n)),n.addId=n.addId.bind(Object(h.a)(n)),n.deleteId=n.deleteId.bind(Object(h.a)(n)),n.changeId=n.changeId.bind(Object(h.a)(n)),n.checkIdsCount=n.checkIdsCount.bind(Object(h.a)(n)),n}return Object(p.a)(a,[{key:"selectItemType",value:function(e){var t=this;Object(be.a)(Object(ye.a)(a.prototype),"selectItemType",this).call(this,e),"reference"===e.target.value?this.props.cc.setState((function(e){return t.state.item.ids=[""],e})):this.props.cc.setState((function(e){return t.state.item.ids=[],e})),"id"!=e.target.value?this.props.cc.setState((function(e){return t.state.item.albumIds=[""],e})):this.props.cc.setState((function(e){return t.state.item.albumIds=[],e}))}},{key:"changeId",value:function(e){var t=this,a=e.currentTarget.name,n=e.currentTarget.value,r=e.currentTarget.dataset.field;this.props.cc.setState((function(e){return t.state.item[r][a]=n,e}))}},{key:"addId",value:function(e){var t=this,a=e.currentTarget.dataset.field;this.props.cc.setState((function(e){return t.state.item[a].push(""),e}))}},{key:"deleteId",value:function(e){var t=this,a=e.currentTarget.dataset.field,n=e.currentTarget.dataset.index;this.props.cc.setState((function(e){return t.state.item[a].splice(n,1),e}))}},{key:"checkIdsCount",value:function(){var e=0;return this.props.cc.idsItems.forEach((function(t){return e+=t.ids.length})),e<10}},{key:"getIdsMap",value:function(e,t,a){var n=this;return r.a.createElement(T.a,{hidden:this.setFieldHidden(a)},this.state.item[e].map((function(a,i){var s;return r.a.createElement(_.a,{asideContent:r.a.createElement(ie.a,{hidden:n.state.item[e].length<2,"data-index":i,"data-field":e,onClick:n.deleteId})},r.a.createElement(H.c,(s={name:i,value:a,type:"text",placeholder:t},Object(fe.a)(s,"value",n.state.item[e][i]),Object(fe.a)(s,"data-field",e),Object(fe.a)(s,"onChange",n.changeId),s)))})),r.a.createElement(N.a,null,r.a.createElement(x.a,{size:"s",before:r.a.createElement(ne.a,null),disabled:"ids"==e&&!this.checkIdsCount(),"data-field":e,onClick:this.addId},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}},{key:"fields",value:function(){return r.a.createElement(K.a,null,r.a.createElement(N.a,null,r.a.createElement(H.d,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f",value:this.state.item.type,onChange:this.selectItemType},r.a.createElement("option",{value:"reference"},"\u041f\u043e \u0441\u0441\u044b\u043b\u043a\u0435"),r.a.createElement("option",{value:"random"},"\u0421\u043b\u0443\u0447\u0430\u0439\u043d\u043e\u0435"),r.a.createElement("option",{value:"number"},"\u041f\u043e \u043d\u043e\u043c\u0435\u0440\u0443"),r.a.createElement("option",{value:"all"},"\u0412\u0441\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u0430"))),r.a.createElement(N.a,{hidden:this.setFieldHidden(["number","all"])},r.a.createElement(H.c,{type:"text",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u043b\u044c\u0431\u043e\u043c",name:0,"data-field":"albumIds",value:this.state.item.albumIds[0],onChange:this.changeId})),r.a.createElement(N.a,{hidden:this.setFieldHidden(["number"])},r.a.createElement(H.c,{type:"text",placeholder:"\u041d\u043e\u043c\u0435\u0440 \u043c\u0435\u0434\u0438\u0430\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f",name:"number",value:this.state.item.number,onChange:this.changeField})),this.getIdsMap("ids","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043c\u0435\u0434\u0438\u0430\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435",["reference"]),this.getIdsMap("albumIds","Cc\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u043b\u044c\u0431\u043e\u043c",["random"]))}}]),a}(pe),Ee=Object(H.e)(),ke=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={id:0,comName:"",priority:"",needPermission:!1,communities:[],text:{name:"text",rusName:"\u0442\u0435\u043a\u0441\u0442",status:!1,text:""},post:{name:"post",rusName:"\u043f\u043e\u0441\u0442",status:!1,type:null,withPinned:!1,owner:"",id:"",number:"",reference:""},image:{name:"image",rusName:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435",status:!1,type:null,owner:"",number:"",ids:[],albumIds:[]},video:{name:"video",rusName:"\u0432\u0438\u0434\u0435\u043e",status:!1,type:null,owner:"",number:"",ids:[],albumIds:[]}},n.idsItems=[n.state.image,n.state.video],n.changeName=n.changeName.bind(Object(h.a)(n)),n.validateEmpty=n.validateEmpty.bind(Object(h.a)(n)),n.getAlert=n.getAlert.bind(Object(h.a)(n)),n.validateStatus=n.validateStatus.bind(Object(h.a)(n)),n.validate=n.validate.bind(Object(h.a)(n)),n.deleteCommand=n.deleteCommand.bind(Object(h.a)(n)),n.changeField=n.changeField.bind(Object(h.a)(n)),n.selectCommunity=n.selectCommunity.bind(Object(h.a)(n)),n.getCommunities=n.getCommunities.bind(Object(h.a)(n)),n.addCommunity=n.addCommunity.bind(Object(h.a)(n)),n.deleteCommunity=n.deleteCommunity.bind(Object(h.a)(n)),n.changeCheckBox=n.changeCheckBox.bind(Object(h.a)(n)),n.communsList=U.getAvailableCommunities(e.userId),n}return Object(p.a)(a,[{key:"changeName",value:function(e){var t=this,a=e.currentTarget.value;this.setState((function(e){return a.includes(" ")||a.includes("\n")||(t.state.comName=a.toLowerCase()),e}))}},{key:"validateStatus",value:function(){var e=[this.state.text,this.state.post,this.state.image,this.state.video];for(var t in e){if(e[t].status)return!0}return!1}},{key:"validatePostEmpty",value:function(e,t){if(t.status)switch("reference"!=t.type&&e.push(t.owner),t.type){case"reference":e.push(t.reference);break;case"number":e.push(t.number)}}},{key:"validateMediaEmpty",value:function(e,t){if(t.status){if("reference"!=t.type)for(var a in t.albumIds)e.push(t.albumIds[a]);switch(t.type){case"reference":for(var a in t.ids)e.push(t.ids[a]);break;case"number":e.push(t.number)}}}},{key:"validateEmpty",value:function(){var e=[];for(var t in this.state.text.status&&e.push(this.state.text.text),this.validatePostEmpty(e,this.state.post),this.validateMediaEmpty(e,this.state.image),this.validateMediaEmpty(e,this.state.video),e){var a=e[t];if(null===a||""===a.trim())return!1}for(var t in this.state.communities){if(""===this.state.communities[t])return!1}return!0}},{key:"getAlert",value:function(e){var t=this;return r.a.createElement(Z.a,{actions:[{title:"\u041e\u041a",mode:"cancel",autoclose:!0}],onClose:function(){return t.props.app.setPopout(null)}},r.a.createElement("p",null,e))}},{key:"validate",value:function(){var e=this,t=function(t){return e.props.app.setPopout(e.getAlert(t))};return null==this.state.comName||""==this.state.comName.trim()?t("\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!"):this.validateStatus()?this.validateEmpty()?void this.prepareCommandBody():t("\u041d\u0435 \u0432\u0441\u0435 \u043f\u043e\u043b\u044f \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u044b!"):t("\u041e\u0442\u0432\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!")}},{key:"preparePostData",value:function(e){if("reference"===e.type){if(null==(a=e.reference).match(/vk.com\/wall.\d+_\d+$/))throw new Error("\u041f\u043e\u043b\u0435 \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u043f\u043e\u0441\u0442 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442!");var t=(a=a.replace(/^.*vk.com\/wall/,"")).split("_");e.owner=t[0],e.id=t[1]}if("pinned"===e.type||"number"===e.type){var a;if(null==(a=e.owner).match(/vk\.com\//))throw new Error("\u041f\u043e\u043b\u0435 \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442!");a=a.replace(/^.*vk\.com\//,"");var n=U.vk("groups.getById?group_id=".concat(a));if(void 0==n){var r=U.vk("users.get?user_ids=".concat(a));if(void 0==r)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0430!");e.owner=r[0].id+""}else e.owner="-"+n[0].id}}},{key:"prepareMediaData",value:function(e){if("reference"===e.type){var t=null,a=[];for(var n in e.ids){var r=e.ids[n];if(null==("image"===e.name?r.match(/vk\.com\/photo.\d+_\d+$/):r.match(/vk\.com\/video.\d+_\d+$/)))throw new Error("\u041f\u043e\u043b\u0435 \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u043c\u0435\u0434\u0438\u0430\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442!");var i=(r="image"===e.name?r.replace(/^.*vk\.com\/photo/,""):r.replace(/^.*vk\.com\/video/,"")).split("_");if(null!=t&&t!=i[0])throw new Error("\u0412\u0441\u0435 \u043c\u0435\u0434\u0438\u0430\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u043c\u0443 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0443!");t=i[0],a.push(i[1])}e.owner=t,e.ids=a}if("random"===e.type||"number"===e.type||"all"===e.type){t=null,a=[];for(var n in e.albumIds){if(null==(r=e.albumIds[n]).match(/vk\.com\/album.\d+_\d+$/))throw new Error("\u041f\u043e\u043b\u0435 \u0441\u043e \u0441\u0441\u044b\u043b\u043a\u043e\u0439 \u043d\u0430 \u0430\u043b\u044c\u0431\u043e\u043c \u0438\u043c\u0435\u0435\u0442 \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442!");i=(r=r.replace(/^.*vk\.com\/album/,"")).split("_");if(null!=t&&t!=i[0])throw new Error("\u0412\u0441\u0435 \u0430\u043b\u044c\u0431\u043e\u043c\u044b \u0434\u043e\u043b\u0436\u043d\u044b \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u043c\u0443 \u0432\u043b\u0430\u0434\u0435\u043b\u044c\u0446\u0443!");t=i[0],a.push(i[1])}e.owner=t,e.albumIds=a}}},{key:"prepareCommandBody",value:function(){var e,t=this,a=function(e){return Number(""==e.trim()?"0":e)},n=function(e){return e.map((function(e){return null==e||""===e?"":e})).join(" ")},r=function(e){return e.status&&null!=e.type&&e.type.length>0};try{this.preparePostData(this.state.post),this.prepareMediaData(this.state.image),this.prepareMediaData(this.state.video)}catch(s){return e=s.message,void t.props.app.setPopout(t.getAlert(e))}var i={id:0==this.state.id?void 0:this.state.id,name:this.state.comName,text:this.state.text.status?this.state.text.text:null,priority:a(this.state.priority),needPermission:this.state.needPermission,communityLinks:this.state.communities.map((function(e){return{tribe:{id:e}}})),author:{id:a(this.props.userId)},post:r(this.state.post)?{id:this.state.post.objId,type:this.state.post.type,ownerId:a(this.state.post.owner),postId:a(this.state.post.id),number:a(this.state.post.number),withPinned:this.state.post.withPinned}:null,image:r(this.state.image)?{id:this.state.image.objId,type:this.state.image.type,ownerId:a(this.state.image.owner),number:a(this.state.image.number),ids:n(this.state.image.ids),albumIds:n(this.state.image.albumIds)}:null,video:r(this.state.video)?{id:this.state.video.objId,type:this.state.video.type,ownerId:a(this.state.video.owner),number:a(this.state.video.number),ids:n(this.state.video.ids),albumIds:n(this.state.video.albumIds)}:null};console.log("send body: "+JSON.stringify(i)),this.action(i)}},{key:"deleteCommand",value:function(){var e=this,t=U.deleteCommand(this.state.id);this.props.app.go({currentTarget:{dataset:{to:"com_list"}}}),this.props.app.setPopout(r.a.createElement(Z.a,{actions:[{title:"\u041e\u041a",mode:"cancel",autoclose:!0}],onClose:function(){return e.props.app.setPopout(null)}},r.a.createElement("p",null,"error"===t?"\u041e\u0448\u0438\u0431\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b!":"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430!")))}},{key:"changeField",value:function(e){var t=this,a=e.currentTarget.name,n=e.currentTarget.value;this.setState((function(e){return""!==n&&"text"!==a&&isNaN(n)&&"-"!==n||(t.state[a]=n),e}))}},{key:"selectCommunity",value:function(e){var t=e.currentTarget.name,a=e.currentTarget.value;this.setState((function(e){return e.communities[t]=""===a?"":Number(a),e}))}},{key:"addCommunity",value:function(){this.setState((function(e){return e.communities.push(""),e}))}},{key:"deleteCommunity",value:function(e){var t=e.currentTarget.dataset.index;this.setState((function(e){return e.communities.splice(t,1),e}))}},{key:"getCommunities",value:function(){var e=this;return r.a.createElement(T.a,{header:r.a.createElement(W.a,null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0442\u0440\u0430\u0439\u0431\u043e\u0432")},r.a.createElement(H.a,null,this.state.communities.map((function(t,a){return r.a.createElement(_.a,{asideContent:r.a.createElement(ie.a,{"data-index":a,onClick:e.deleteCommunity})},r.a.createElement(H.d,{placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0440\u0430\u0439\u0431",name:a,value:t,onChange:e.selectCommunity},e.communsList.map((function(e){return r.a.createElement("option",{value:e.id},e.name)}))))})),r.a.createElement(x.a,{size:"s",before:r.a.createElement(ne.a,null),disabled:this.state.communities.length>=10,onClick:this.addCommunity},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0440\u0430\u0439\u0431")))}},{key:"changeCheckBox",value:function(e){e.target.name;var t=e.target.checked;this.setState((function(e){return e.needPermission=t,e}))}},{key:"render",value:function(){return r.a.createElement(y.a,{id:this.props.id},r.a.createElement(O.a,{left:r.a.createElement(q.a,{onClick:this.props.go,"data-to":"com_list"},Ee===H.b?r.a.createElement(R.a,null):r.a.createElement(G.a,null))},this.header),r.a.createElement(H.a,null,r.a.createElement(T.a,null,r.a.createElement(N.a,null,r.a.createElement(H.c,{type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",value:this.state.comName,onChange:this.changeName}))),r.a.createElement(te.a,null),r.a.createElement(T.a,{header:r.a.createElement(W.a,null,"\u041e\u0442\u0432\u0435\u0442 \u043a\u043e\u043c\u0430\u043d\u0434\u044b")},r.a.createElement(he,{cc:this,item:this.state.text}),r.a.createElement(ve,{cc:this,item:this.state.post}),r.a.createElement(ge,{cc:this,item:this.state.image}),r.a.createElement(ge,{cc:this,item:this.state.video}))),r.a.createElement(T.a,null,r.a.createElement(ce,{cc:this,item:this.state.text}),r.a.createElement(ce,{cc:this,item:this.state.post}),r.a.createElement(ce,{cc:this,item:this.state.image}),r.a.createElement(ce,{cc:this,item:this.state.video})),r.a.createElement(te.a,null),r.a.createElement(N.a,null,this.getCommunities(),r.a.createElement(T.a,{header:r.a.createElement(W.a,null,"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438")},r.a.createElement(H.a,null,r.a.createElement(H.c,{top:"\u041f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442",type:"text",name:"priority",value:this.state.priority,onChange:this.changeField}),r.a.createElement(oe.a,{name:"needPermission",checked:this.state.needPermission,onChange:this.changeCheckBox},"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u043f\u0440\u0430\u0432")))),r.a.createElement(te.a,null),r.a.createElement(N.a,null,r.a.createElement(T.a,null,r.a.createElement(N.a,null,r.a.createElement(x.a,{size:"xl",onClick:this.validate},this.actionText))),r.a.createElement(T.a,null,r.a.createElement(N.a,{hidden:0==this.state.id},r.a.createElement(x.a,{style:{color:"red"},size:"l",mode:"tertiary",onClick:this.deleteCommand},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443")))))}}]),a}(r.a.Component),Ce=(Object(H.e)(),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).header="\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",n.actionText="\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0443",n}return Object(p.a)(a,[{key:"createCommand",value:function(e){var t=this,a=U.addCommand(e);this.props.app.go({currentTarget:{dataset:{to:"com_list"}}}),this.props.app.setPopout(r.a.createElement(Z.a,{actions:[{title:"\u041e\u041a",mode:"cancel",autoclose:!0}],onClose:function(){return t.props.app.setPopout(null)}},r.a.createElement("p",null,"error"===a?"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u044b!":"\u041a\u043e\u043c\u0430\u043d\u0434\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430!")))}},{key:"action",value:function(e){this.createCommand(e)}}]),a}(ke)),Ie=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(e){var n;Object(d.a)(this,a),(n=t.call(this,e)).header="\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u044b",n.actionText="\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c";var r=function(e){return 0==e?"":e+""},i=e.app.command;console.log("receive com: "+JSON.stringify(i)),n.state.id=i.id,n.state.comName=i.name,n.state.priority=r(i.priority),n.state.needPermission=i.needPermission,i.communityLinks.forEach((function(e){return n.state.communities.push(e.tribe.id)})),null!=i.text&&""!=i.text&&(n.state.text.status=!0,n.state.text.text=i.text),null!=i.post&&(n.state.post.status=!0,n.state.post.objId=i.post.id,n.state.post.type=i.post.type,n.state.post.owner="vk.com/"+(i.post.ownerId>0?"id".concat(i.post.ownerId):"club".concat(-i.post.ownerId)),n.state.post.reference="vk.com/wall".concat(i.post.ownerId,"_").concat(i.post.postId),n.state.post.number=r(i.post.number),n.state.post.withPinned=i.post.withPinned);var s=function(e,t,a){null!=t&&(e.status=!0,e.objId=t.id,e.type=t.type,e.owner=r(t.ownerId),e.number=r(t.number),e.ids=t.ids.split(" ").map((function(e){return"vk.com/".concat(a).concat(t.ownerId,"_").concat(e)})),e.albumIds=t.albumIds.split(" ").map((function(e){return"vk.com/album".concat(t.ownerId,"_").concat(e)})))};return s(n.state.image,i.image,"photo"),s(n.state.video,i.video,"video"),n}return Object(p.a)(a,[{key:"updateCommand",value:function(e){var t=this,a=U.updateCommand(e);this.props.app.go({currentTarget:{dataset:{to:"com_list"}}}),this.props.app.setPopout(r.a.createElement(Z.a,{actions:[{title:"\u041e\u041a",mode:"cancel",autoclose:!0}],onClose:function(){return t.props.app.setPopout(null)}},r.a.createElement("p",null,"error"===a?"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439!":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u044b!")))}},{key:"action",value:function(e){this.updateCommand(e)}}]),a}(ke),Oe=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;function n(){return(n=Object(m.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.send("VKWebAppGetUserInfo");case 2:a=e.sent,t.setState((function(e){return e.fetchedUser=a,e.popout=null,e}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.a)(this,a),(e=t.call(this)).state={fetchedUser:null,activePanel:"home",popout:r.a.createElement(C.a,{size:"large"})},e.getParam=e.getParam.bind(Object(h.a)(e)),e.go=e.go.bind(Object(h.a)(e)),e.setPopout=e.setPopout.bind(Object(h.a)(e)),function(e){n.apply(this,arguments)}(Object(h.a)(e)),e}return Object(p.a)(a,[{key:"getParam",value:function(e){var t=window.location.search;return!!(t=t.match(new RegExp(e+"=([^&=]+)")))&&t[1]}},{key:"go",value:function(e){var t=e.currentTarget.dataset.to;this.setState((function(e){return e.activePanel=t,e}))}},{key:"setPopout",value:function(e){this.setState((function(t){return t.popout=e,t}))}},{key:"render",value:function(){var e=this.getParam("user_id");return r.a.createElement(E.a,{activePanel:this.state.activePanel,popout:this.state.popout},r.a.createElement(B,{id:"home",user:this.state.fetchedUser,go:this.go,userId:e,app:this}),r.a.createElement(Q,{id:"com_list",go:this.go,userId:e,app:this}),r.a.createElement(Ce,{id:"com_constructor",go:this.go,userId:e,app:this}),r.a.createElement(Ie,{id:"com_editor",go:this.go,userId:e,app:this}),r.a.createElement(y.a,{id:"auth_error"},r.a.createElement("h3",null,"\u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438!")))}}]),a}(r.a.Component);c.a.send("VKWebAppInit"),c.a.subscribe((function(e){var t=e.detail,a=t.type,n=t.data;if("VKWebAppUpdateConfig"===a){var r=document.createAttribute("scheme");r.value=n.scheme?n.scheme:"client_light",document.body.attributes.setNamedItem(r)}})),s.a.render(r.a.createElement(Oe,null),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.7072ac70.chunk.js.map