(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(3),r=a.n(c),l=(a(12),a(1)),i=a(4),s=a.n(i);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{className:"header__logo",src:s.a,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var u=function(e){return o.a.createElement("li",{className:"element"},o.a.createElement("button",{className:"element__delete-button"}),o.a.createElement("img",{onClick:function(){e.onCardClick(e.card)},className:"element__image",src:e.link,alt:e.name}),o.a.createElement("div",{className:"element__heading"},o.a.createElement("h2",{className:"element__title"},e.name),o.a.createElement("div",{className:"element__like-container"},o.a.createElement("button",{className:"element__like-button"}),o.a.createElement("span",{className:"element__like-counter"},parseInt(e.likes)))))},m=a(5),_=a(6),d=new(function(){function e(t){var a=t.url,n=t.token;Object(m.a)(this,e),this._url=a,this._token=n}return Object(_.a)(e,[{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"likeCardToggle",value:function(e,t,a,n){t?t&&this._removeLike(e).then((function(e){n.classList.toggle("element__like-button_pressed"),a.textContent=parseInt(e.likes.length)})).catch((function(e){return console.log(e)})):this._setlike(e).then((function(e){n.classList.toggle("element__like-button_pressed"),a.textContent=parseInt(e.likes.length)})).catch((function(e){return console.log(e)}))}},{key:"_setlike",value:function(e){return fetch("".concat(this._url,"/cards/likes","/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"_removeLike",value:function(e){return fetch("".concat(this._url,"/cards/likes","/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e:Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"setAvatar",value:function(e){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e:Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"createCard",value:function(e,t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e)}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._url,"/cards","/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))})).catch((function(e){return console.log(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-14",token:"3afbb2b4-9ecc-4aaa-9813-505ad2c004fc"});var h=function(e){var t=o.a.useState(""),a=Object(l.a)(t,2),n=a[0],c=a[1],r=o.a.useState(""),i=Object(l.a)(r,2),s=i[0],p=i[1],m=o.a.useState(""),_=Object(l.a)(m,2),h=_[0],f=_[1],E=o.a.useState([]),k=Object(l.a)(E,2),b=k[0],N=k[1];return o.a.useEffect((function(){Promise.all([d.getUserInfo(),d.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),a=t[0],n=t[1];c(a.avatar),p(a.name),f(a.about),N(n)})).catch((function(e){console.log(e)}))}),[]),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("div",{className:"profile__avatar",onClick:e.onEditAvatar},o.a.createElement("img",{className:"profile__img",src:n,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),o.a.createElement("div",{className:"profile__user-info"},o.a.createElement("h1",{className:"profile__title"},s),o.a.createElement("p",{className:"profile__subtitle"},h)),o.a.createElement("button",{className:"profile__edit-button",onClick:e.onEditProfile}),o.a.createElement("div",{className:"profile__container"},o.a.createElement("button",{className:"profile__add-button",onClick:e.onAddPlace}))),o.a.createElement("section",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},b.map((function(t){return o.a.createElement(u,{key:t._id,link:t.link,name:t.name,likes:t.likes.length,card:t,onCardClick:e.onCardClick})})))))};var f=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))};var E=function(e){return o.a.createElement("section",{className:e.isOpen?"popup popup_type_".concat(e.name," popup_opened"):"popup popup_type_".concat(e.name)},o.a.createElement("div",{className:"popup__container popup__container_type_".concat(e.type)},o.a.createElement("h2",{className:"popup__title"}," ",e.title," "),o.a.createElement("div",{className:"popup__close-btn",onClick:e.onClose}),o.a.createElement("form",{name:"".concat(e.name),className:"popup__form",noValidate:!0},e.children)))};var k=function(e){return o.a.createElement("section",{className:e.card?"popup popup_type_photo popup_opened":"popup popup_type_photo"},o.a.createElement("figure",{className:"popup__container popup__container_type_photo"},o.a.createElement("div",{className:"popup__close-btn",onClick:e.onClose}),o.a.createElement("img",{className:"popup__image",src:e.card?e.card.link:"#",alt:e.card?e.card.name:""}),o.a.createElement("figcaption",{className:"popup__description"},e.card?e.card.name:"")))};var b=function(){function e(){c(!1),u(!1),b(!1),y(null)}var t=o.a.useState(!1),a=Object(l.a)(t,2),n=a[0],c=a[1],r=o.a.useState(!1),i=Object(l.a)(r,2),s=i[0],u=i[1],m=o.a.useState(!1),_=Object(l.a)(m,2),d=_[0],b=_[1],N=o.a.useState(null),g=Object(l.a)(N,2),v=g[0],y=g[1];return o.a.createElement("div",{className:"page"},o.a.createElement(p,null),o.a.createElement(h,{onEditAvatar:function(){c(!0)},onEditProfile:function(){u(!0)},onAddPlace:function(){b(!0)},onCardClick:function(e){y(e)}}),o.a.createElement(f,null),o.a.createElement(E,{name:"avatar-upd",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",type:"confirm",isOpen:n,onClose:e},o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{id:"link-input-avatar",name:"linkavatar",className:"popup__input popup__input_text_link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"link-input-avatar-error",className:"popup__error"})),o.a.createElement("button",{className:"popup__btn",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))),o.a.createElement(E,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",type:"form",isOpen:s,onClose:e},o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{id:"name-input",name:"name",className:"popup__input popup__input_text_name",type:"text",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),o.a.createElement("span",{id:"name-input-error",className:"popup__error"})),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{id:"job-input",name:"job",className:"popup__input popup__input_text_job",type:"text",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200"}),o.a.createElement("span",{id:"job-input-error",className:"popup__error"})),o.a.createElement("button",{className:"popup__btn",type:"submit"},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"))),o.a.createElement(E,{name:"add-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",type:"form",isOpen:d,onClose:e},o.a.createElement(o.a.Fragment,null,o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{id:"location-input",name:"location",className:"popup__input popup__input_text_location",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"2",maxLength:"30"}),o.a.createElement("span",{id:"location-input-error",className:"popup__error"})),o.a.createElement("label",{className:"popup__label"},o.a.createElement("input",{id:"link-input",name:"link",className:"popup__input popup__input_text_link",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0}),o.a.createElement("span",{id:"link-input-error",className:"popup__error"})),o.a.createElement("button",{className:"popup__btn",type:"submit"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))),o.a.createElement(E,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",type:"confirm",onClose:e},o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{className:"popup__btn popup__btn_type_confirm",type:"submit"},"\u0414\u0430"))),o.a.createElement(k,{card:v,onClose:e}))};r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root"))},4:function(e,t,a){e.exports=a.p+"static/media/logo.c6f11019.svg"},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.6215dbd0.chunk.js.map