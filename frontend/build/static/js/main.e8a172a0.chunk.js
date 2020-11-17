(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(22),i=a.n(c),l=a(16),o=a(7),d=a(3),u=(a(51),a(6)),j=a.n(u),b=a(5),m=a.n(b),p=a(10),h=a(9),O=a.n(h),f=function(e){e?O.a.defaults.headers.common.Authorization="Token ".concat(e):delete O.a.defaults.headers.common.Authorization},x="USER_LOADED",g="AUTH_FAIL",v="LOGIN_SUCCESS",y="LOGIN_FAIL",N="LOGOUT",w="REGISTER_SUCCESS",L="REGISTER_FAIL",k="CLEAR_MESSAGE",S="CLEAR_ERROR",I="GET_LISTS",_="LISTS_ERROR",E="ADD_LIST",A="DELETE_LIST",C="GET_LIST",T="ADD_ITEM",D="ADD_DEPARTMENT",R="ADD_SAVED_ITEM",P="REMOVE_ITEM",M="DELETE_ITEM",F="EDIT_ITEM",U="CLEAR_CURRENT",q="CLEAR_LISTS",G="CLEAR_LISTS_ERROR",J="SET_LOADING",Y="http://bchristensen.pythonanywhere.com",B={headers:{"Content-Type":"application/json"}},Q="http://bchristensen.pythonanywhere.com",W=function(){return function(e){e({type:U})}},z=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{logout:function(){return function(e){e({type:N})}},clearCurrent:W,clearLists:function(){return function(e){e({type:q})}}})((function(e){var t=e.logout,a=e.isAuthenticated,r=e.clearCurrent,c=e.clearLists;Object(s.useEffect)((function(){}),[a]);var i=function(){t(),r(),c(),j.a.toast({html:"<strong>You have been logged out!</strong>",displayLength:5e3,classes:"amber black-text"})},o=Object(n.jsx)(s.Fragment,{children:Object(n.jsx)("li",{className:"amber darken-2",children:Object(n.jsx)("strong",{children:Object(n.jsx)("a",{href:"#!",className:"indigo-text text-darken-4",onClick:i,children:"Logout"})})})}),d=Object(n.jsx)(s.Fragment,{children:Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"#!",className:"amber-text",onClick:i,children:[Object(n.jsx)("i",{className:"far fa-sign-out-alt fa-lg amber-text"})," Logout"]})})}),u=Object(n.jsx)(s.Fragment,{children:Object(n.jsx)("li",{className:"indigo",children:Object(n.jsxs)("span",{className:"amber-text nav-username",children:[Object(n.jsx)("i",{className:"far fa-user fa-lg amber-text"})," ",localStorage.getItem("username")]})})});return Object(n.jsxs)("div",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("div",{className:"nav-wrapper grey darken-3",children:[Object(n.jsxs)(l.b,{to:"/",className:"brand-logo",children:[Object(n.jsx)("span",{className:"nav-logo amber darken-2 indigo-text",children:"BC"}),Object(n.jsxs)("span",{className:"logo-text amber-text text-darken-2",children:[Object(n.jsx)("span",{className:"amber-text",children:"b"}),"christensen"]}),Object(n.jsx)("span",{className:"amber-text",children:".net"})]}),Object(n.jsx)("a",{href:"#!","data-target":"mobile-side-nav",className:"sidenav-trigger amber-text",children:Object(n.jsx)("i",{className:"material-icons",children:"menu"})}),Object(n.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(n.jsx)("li",{children:Object(n.jsx)(l.b,{to:"/shopping-list-api/",className:"amber-text",children:"Shopping List API"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",className:"amber-text",children:"Experience"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"#!",className:"amber-text",children:"Projects"})}),a?u:"",a?o:""]})]})}),Object(n.jsxs)("ul",{className:"sidenav grey darken-3 sidenav-close",id:"mobile-side-nav",children:[Object(n.jsx)("li",{children:Object(n.jsxs)(l.b,{to:"/",className:"amber-text",children:[Object(n.jsx)("i",{className:"far fa-home fa-lg amber-text"})," Home"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)(l.b,{to:"/shopping-list-api/",className:"amber-text",children:[Object(n.jsx)("i",{className:"far fa-list-ul fa-lg amber-text"})," Shopping List API"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"!#",className:"amber-text",children:[Object(n.jsx)("i",{className:"far fa-file-user fa-lg amber-text"})," Experience"]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{href:"!#",className:"amber-text",children:[Object(n.jsx)("i",{className:"far fa-brackets-curly fa-lg amber-text"})," Projects"]})}),a?d:""]})]})})),H=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Welcome to bchristensen.net!"}),Object(n.jsx)("p",{className:"flow-text",children:"This my personal website where I display some of the work I've done."}),Object(n.jsx)("p",{className:"flow-text",children:"It's a work in progress..."})]})},V=function(){return Object(n.jsx)("div",{className:"login-btn",children:Object(n.jsx)("a",{className:"indigo btn-large waves-effect waves-light modal-trigger",href:"#login-modal",children:"Login"})})},K=a(8),X=Object(d.b)(null,{login:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,O.a.post("".concat(Y,"/api/users/auth/token/"),JSON.stringify(e),n);case 4:s=t.sent,a({type:v,payload:s.data}),localStorage.token&&f(localStorage.token),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),a({type:y,payload:t.t0.response.data.non_field_errors[0]});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.login,a=Object(s.useState)(""),r=Object(K.a)(a,2),c=r[0],i=r[1],l=Object(s.useState)(""),o=Object(K.a)(l,2),d=o[0],u=o[1];return Object(n.jsxs)("div",{id:"login-modal",className:"modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"Login"}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"UserName",name:"username",value:c,onChange:function(e){return i(e.target.value)}})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:d,onChange:function(e){return u(e.target.value)}})})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){""===c||""===d?j.a.toast({html:"Please enter both your username and password!"}):(t({username:c,password:d}),i(""),u(""))},className:"modal-close waves-effect indigo btn-large",children:"Login"})})]})})),Z=function(){return Object(n.jsx)("div",{className:"register-btn",children:Object(n.jsx)("a",{className:"amber darken-4 btn-large waves-effect waves-light modal-trigger",href:"#register-modal",children:"Register"})})},$=Object(d.b)(null,{register:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={headers:{"Content-Type":"application/json"}},t.prev=1,t.next=4,O.a.post("".concat(Y,"/api/users/register/"),JSON.stringify(e),n);case 4:s=t.sent,a({type:w,payload:s.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),a({type:L,payload:t.t0.response.data.username[0]});case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.register,a=Object(s.useState)(""),r=Object(K.a)(a,2),c=r[0],i=r[1],l=Object(s.useState)(""),o=Object(K.a)(l,2),d=o[0],u=o[1];return Object(n.jsxs)("div",{id:"register-modal",className:"modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"Register"}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"UserName",name:"regUsername",value:c,onChange:function(e){return i(e.target.value)}})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"regPassword",value:d,onChange:function(e){return u(e.target.value)}})})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){""===c||""===d?j.a.toast({html:"Please enter a username and password!"}):(t({username:c,password:d}),i(""),u(""))},className:"modal-close waves-effect indigo btn-large",children:"Register"})})]})})),ee=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Shopping List Frontend and API"}),Object(n.jsxs)("p",{className:"flow-text",children:["This is a shopping list web app using React, Redux and Axios on the frontend and Django REST Framework for the backend API.  Give it a try, register your own username or login with username ",Object(n.jsx)("span",{className:"amber-text text-darken-4",children:"guest"})," and password ",Object(n.jsx)("span",{className:"amber-text text-darken-4",children:"SecretPassword"}),"."]})]})},te=Object(d.b)(null,{getList:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.get("".concat(Q,"/api/shopping-list/").concat(e,"/detail/"));case 3:n=t.sent,a({type:C,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},setLoading:function(){return function(e){e({type:J})}}})((function(e){var t=e.list,a=e.getList,s=e.setLoading;return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"shopping-list-btn-div",children:Object(n.jsx)("a",{href:"#!",onClick:function(){s(),a(t.id)},className:"indigo btn-large waves-effect waves-light",children:t.name})})})})),ae=Object(d.b)(null,{addNewList:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("".concat(Q,"/api/shopping-lists/"),e,B);case 3:n=t.sent,a({type:E,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addNewList,a=Object(s.useState)(""),r=Object(K.a)(a,2),c=r[0],i=r[1],l=localStorage.getItem("user_id");return Object(n.jsxs)("div",{id:"new-list-modal",className:"modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{children:"New Shopping List"}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"Enter List or Store Name",name:"name",value:c,onChange:function(e){return i(e.target.value)}})})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){""===c?j.a.toast({html:"<strong>Please enter a name for your new list!</strong>",classes:"red lighten-3 black-text"}):(t({user:l,name:c}),i(""))},className:"modal-close waves-effect indigo btn-large",children:"Submit"})})]})})),ne=function(e){var t=e.department;return Object(n.jsx)("option",{value:t.id,children:t.name})},se=Object(d.b)(null,{updateItem:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.put("".concat(Q,"/api/shopping-list/item/").concat(e.id,"/"),e,B);case 3:n=t.sent,a({type:F,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.departments,a=e.currentListItem,r=e.updateItem,c=Object(s.useState)(""),i=Object(K.a)(c,2),l=i[0],o=i[1],d=Object(s.useState)(""),u=Object(K.a)(d,2),j=u[0],b=u[1],m=Object(s.useState)(""),p=Object(K.a)(m,2),h=p[0],O=p[1];Object(s.useEffect)((function(){o(a.item),b(a.quantity),O(a.department)}),[a.item,a.quantity,a.department]);return Object(n.jsxs)("div",{id:"edit-item-modal-".concat(a.id),className:"modal edit-item-modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{className:"center-align",children:"Edit Item"}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"Item Name",name:"item",value:l,onChange:function(e){return o(e.target.value)}})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"number",placeholder:"Quantity",name:"quantity",value:j,onChange:function(e){return b(e.target.value)}})}),Object(n.jsx)("div",{className:"input-field col s12",children:Object(n.jsxs)("select",{name:"department",value:h,className:"browser-default",onChange:function(e){return O(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Select Department or..."}),t.map((function(e){return Object(n.jsx)(ne,{department:e},e.id)}))]})})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){var e={id:a.id,user:localStorage.getItem("user_id"),shopping_list:a.shopping_list,item:l,quantity:j,department:h,on_list:!0};r(e)},className:"modal-close btn indigo",children:"Update Item"})})]})})),re=Object(d.b)((function(e){return{currentListID:e.list.currentList.id}}),{removeItemFromList:function(e,t){return function(){var a=Object(p.a)(m.a.mark((function a(n){var s;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,O.a.put("".concat(Q,"/api/shopping-list/item/").concat(t,"/"),JSON.stringify(e),B);case 3:s=a.sent,n({type:P,payload:s.data}),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),n({type:_,payload:a.t0.response.data});case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(e){return a.apply(this,arguments)}}()}})((function(e){var t,a=e.currentListItem,s=e.departments,r=e.currentListID,c=e.removeItemFromList;return Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col s3 m4",children:a.item}),Object(n.jsx)("div",{className:"col s2",children:a.quantity}),Object(n.jsx)("div",{className:"col s3 m4",children:(t=a.department,s.filter((function(e){return e.id===t}))[0].name)}),Object(n.jsxs)("div",{className:"col s2 m1",children:[Object(n.jsx)("a",{href:"#edit-item-modal-".concat(a.id),className:"modal-trigger",children:Object(n.jsx)("i",{className:"far fa-edit fa-lg indigo-text"})}),Object(n.jsx)(se,{departments:s,currentListItem:a})]}),Object(n.jsx)("div",{className:"col s2 m1",children:Object(n.jsx)("a",{href:"#!",onClick:function(){var e={user:localStorage.getItem("user_id"),shopping_list:r,item:a.item,on_list:!1};c(e,a.id)},children:Object(n.jsx)("i",{className:"fas fa-trash-alt fa-lg indigo-text"})})})]})})})),ce=Object(d.b)(null,{addSavedItem:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.put("".concat(Q,"/api/shopping-list/item/").concat(e.id,"/"),e,B);case 3:n=t.sent,a({type:R,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},deleteItem:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.delete("".concat(Q,"/api/shopping-list/item/").concat(e,"/"));case 3:a({type:M,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addSavedItem,a=e.item,s=e.deleteItem;return Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col s8 m10",children:a.item}),Object(n.jsx)("div",{className:"col s2 m1",children:Object(n.jsx)("a",{href:"#!",onClick:function(){a.on_list=!0,t(a)},children:Object(n.jsx)("i",{className:"far fa-plus-square fa-lg indigo-text"})})}),Object(n.jsx)("div",{className:"col s2 m1",children:Object(n.jsx)("a",{href:"#!",onClick:function(){window.confirm("".concat(a.item," will be permanently deleted from your shopping list! Proceed?"))&&s(a.id)},children:Object(n.jsx)("i",{className:"fas fa-trash-alt fa-lg indigo-text"})})})]})})})),ie=Object(d.b)(null,{addDepartment:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("".concat(Q,"/api/shopping-list/").concat(e.shopping_list,"/depts/"),e,B);case 3:n=t.sent,a({type:D,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.addDepartment,a=e.currentListID,r=Object(s.useState)(""),c=Object(K.a)(r,2),i=c[0],l=c[1];return Object(n.jsxs)("div",{id:"add-dept-modal",className:"modal",children:[Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsx)("h4",{className:"center-align",children:"Add Department"}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"Department",name:"department",value:i,onChange:function(e){return l(e.target.value)}})})]}),Object(n.jsx)("div",{className:"modal-footer",children:Object(n.jsx)("a",{href:"#!",onClick:function(){if(""===i)j.a.toast({html:"<strong>Please enter a department name</strong>",displayLength:6e3,classes:"red lighten-3 black-text"});else{var e={user:localStorage.getItem("user_id"),name:i,shopping_list:a};t(e),j.a.toast({html:"<strong>".concat(i," has been added to the select list</strong>"),displayLength:6e3,classes:"amber black-text"}),l("")}},className:"modal-close btn indigo",children:"Submit"})})]})})),le=Object(d.b)((function(e){return{currentListID:e.list.currentList.id}}),{addItem:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.post("".concat(Q,"/api/shopping-list/").concat(e.shopping_list,"/items/"),e,B);case 3:n=t.sent,a({type:T,payload:n.data}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.departments,a=e.currentListID,r=e.addItem,c=e.savedItems,i=Object(s.useState)(""),l=Object(K.a)(i,2),o=l[0],d=l[1],u=Object(s.useState)(""),b=Object(K.a)(u,2),m=b[0],p=b[1],h=Object(s.useState)(""),O=Object(K.a)(h,2),f=O[0],x=O[1];Object(s.useEffect)((function(){j.a.AutoInit()}));return Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"collapsible",children:[Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{className:"collapsible-header",children:[Object(n.jsx)("i",{className:"far fa-plus-square fa-2x indigo-text"})," Saved Items"]}),Object(n.jsx)("div",{className:"collapsible-body saved-items-collapse",children:Object(n.jsxs)("ul",{className:"collection",children:[0===c.length?Object(n.jsx)("li",{className:"collection-item",children:'Click "Add New Item" to add an item to your list, it will automatically be saved. Saved items that are added to your list will not appear here until they are removed from your list.'}):"",c.map((function(e){return Object(n.jsx)(ce,{item:e},e.id)}))]})})]}),Object(n.jsxs)("li",{children:[Object(n.jsxs)("div",{className:"collapsible-header",children:[Object(n.jsx)("i",{className:"far fa-plus-square fa-2x indigo-text"})," Add New Item"]}),Object(n.jsxs)("div",{className:"collapsible-body",children:[Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"text",placeholder:"Item Name",name:"item",value:o,onChange:function(e){return d(e.target.value)}})}),Object(n.jsx)("div",{className:"input-field",children:Object(n.jsx)("input",{type:"number",placeholder:"Quantity",name:"quantity",value:m,onChange:function(e){return p(e.target.value)}})}),Object(n.jsx)("div",{className:"input-field col s12",children:Object(n.jsxs)("select",{name:"department",value:f,className:"browser-default",onChange:function(e){return x(e.target.value)},children:[Object(n.jsx)("option",{value:"",disabled:!0,children:"Select Department or..."}),t.map((function(e){return Object(n.jsx)(ne,{department:e},e.id)}))]})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("a",{className:"waves-effect waves-light indigo btn modal-trigger",href:"#add-dept-modal",children:"Add New Department"}),Object(n.jsx)(ie,{currentListID:a})]}),Object(n.jsx)("div",{className:"input-field col s12 right-align",children:Object(n.jsx)("a",{href:"#!",onClick:function(){if(""===o)j.a.toast({html:"<strong>Please enter an item!</strong>",displayLength:6e3,classes:"red lighten-3 black-text"});else if(""===m)j.a.toast({html:"<strong>Please enter quantity!</strong>",displayLength:6e3,classes:"red lighten-3 black-text"});else if(""===f)j.a.toast({html:"<strong>Please select a department!</strong>",displayLength:6e3,classes:"red lighten-3 black-text"});else{var e={user:localStorage.getItem("user_id"),shopping_list:a,item:o,quantity:m,department:f};r(e),d(""),p(""),x("")}},className:"btn-large indigo waves-effect",children:"Add Item"})})]})]})]})})})),oe=Object(d.b)(null,{clearCurrent:W,deleteList:function(e){return function(){var t=Object(p.a)(m.a.mark((function t(a){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,O.a.delete("".concat(Q,"/api/shopping-list/").concat(e));case 3:a({type:A,payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),a({type:_,payload:t.t0.response.data});case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.currentList,a=e.clearCurrent,r=e.deleteList;Object(s.useEffect)((function(){j.a.AutoInit()}));var c=t.list_items.filter((function(e){return!e.on_list}));return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsx)(l.b,{to:"/shopping-list-api/",onClick:function(){a()},className:"btn indigo",children:"Back to Lists"}),Object(n.jsxs)("a",{href:"#!",onClick:function(){window.confirm("Warning! This will PERMANENTLY delete the current list and all saved items! Are you sure?")&&(r(t.id),a())},className:"btn red darken-4 right",children:["Delete List ",Object(n.jsx)("i",{className:"fal fa-trash-alt"})]})]}),Object(n.jsxs)("ul",{className:"collection with-header",children:[Object(n.jsx)("li",{className:"collection-header",children:Object(n.jsx)("h4",{children:t.name})}),Object(n.jsx)("li",{className:"collection-item",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col s3 m4",children:Object(n.jsx)("strong",{children:"Item"})}),Object(n.jsx)("div",{className:"col s2",children:Object(n.jsx)("strong",{children:"Qty"})}),Object(n.jsx)("div",{className:"col s5 m4",children:Object(n.jsx)("strong",{children:"Dept."})})]})}),0===t.list_items.filter((function(e){return e.on_list})).length?Object(n.jsx)("li",{className:"collection-item",children:"Your list is currently empty. Add saved items to your list or add a new item."}):"",t.list_items.filter((function(e){return e.on_list})).map((function(e){return Object(n.jsx)(re,{currentListItem:e,departments:t.departments},e.id)}))]}),Object(n.jsx)(le,{departments:t.departments,savedItems:c})]})})),de=function(){return Object(n.jsx)("div",{className:"preloader-container valign-wrapper",children:Object(n.jsx)("div",{className:"preloader-wrapper big active",children:Object(n.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(n.jsx)("div",{className:"circle-clipper left",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"gap-patch",children:Object(n.jsx)("div",{className:"circle"})}),Object(n.jsx)("div",{className:"circle-clipper right",children:Object(n.jsx)("div",{className:"circle"})})]})})})},ue=Object(d.b)((function(e){return{list:e.list,loading:e.loading}}),{getLists:function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(Q,"/api/shopping-lists/"));case 3:a=e.sent,t({type:I,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:_,payload:e.t0.response.data});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},clearListsError:function(){return function(e){e({type:G})}}})((function(e){var t=e.list,a=t.lists,r=t.error,c=t.currentList,i=t.loading,l=e.getLists,o=e.clearListsError;return Object(s.useEffect)((function(){l(),""!==r&&(r.non_field_errors&&j.a.toast({html:"<strong>".concat(r.non_field_errors,"</strong>"),displayLength:6e3,classes:"red lighten-3 black-text"}),o())}),[l,o,r]),i?Object(n.jsx)(de,{}):Object(n.jsx)("div",{children:null!==c?Object(n.jsx)(oe,{currentList:c}):Object(n.jsxs)("div",{className:"my-shopping-lists",children:[Object(n.jsx)("h3",{children:"My Shopping Lists"}),Object(n.jsx)("div",{className:"shopping-list-btn-div",children:Object(n.jsx)("a",{href:"#new-list-modal",className:"amber darken-3 black-text btn-large waves-effect waves-light modal-trigger",children:Object(n.jsx)("strong",{children:"New List"})})}),Object(n.jsx)(ae,{}),null===a||0===a.length?Object(n.jsx)("p",{children:"No lists to show...."}):a.map((function(e){return Object(n.jsx)(te,{list:e},e.id)}))]})})})),je=Object(d.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,message:e.auth.message,error:e.auth.error}}),{loadUser:function(){return function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.username&&localStorage.user_id?t({type:x}):t({type:g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},clearError:function(){return function(e){e({type:S})}},clearMessage:function(){return function(e){e({type:k})}}})((function(e){var t=e.isAuthenticated,a=e.loadUser,r=e.message,c=e.error,i=e.clearError,l=e.clearMessage;return Object(s.useEffect)((function(){a(),j.a.AutoInit(),""!==r&&(j.a.toast({html:"<strong>".concat(r,"</strong>"),displayLength:6e3,classes:"amber black-text"}),l()),""!==c&&(j.a.toast({html:"<strong>".concat(c,"</strong>"),displayLength:6e3,classes:"red lighten-3 black-text"}),i())})),Object(n.jsx)(s.Fragment,{children:Object(n.jsxs)("div",{children:[t?"":Object(n.jsx)(ee,{}),t?"":Object(n.jsx)(V,{}),t?"":Object(n.jsx)(X,{}),t?"":Object(n.jsx)(Z,{}),t?"":Object(n.jsx)($,{}),t?Object(n.jsx)(ue,{}):""]})})})),be=a(17),me=a(40),pe=a(41),he=a(2),Oe={token:localStorage.getItem("token"),isAuthenticated:null,user:null,error:"",message:""},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(he.a)(Object(he.a)({},e),{},{user:{username:localStorage.username,id:localStorage.user_id},isAuthenticated:!0,error:""});case v:return localStorage.setItem("token",t.payload.token),localStorage.setItem("username",t.payload.user.username),localStorage.setItem("user_id",t.payload.user.id),Object(he.a)(Object(he.a)(Object(he.a)({},e),t.payload),{},{user:t.payload.user,isAuthenticated:!0,error:"",message:"You are now logged in!"});case w:return Object(he.a)(Object(he.a)({},e),{},{user:{id:t.payload.id,username:t.payload.username},isAuthenticated:!1,error:"",message:"You may now log in to your account"});case g:return Object(he.a)(Object(he.a)({},e),{},{token:null,isAuthenticated:!1,user:null});case y:case L:return Object(he.a)(Object(he.a)({},e),{},{token:null,isAuthenticated:!1,user:null,error:t.payload,message:""});case N:return localStorage.removeItem("token"),localStorage.removeItem("username"),localStorage.removeItem("user_id"),Object(he.a)(Object(he.a)({},e),{},{token:null,isAuthenticated:!1,user:null,error:"",message:""});case S:return Object(he.a)(Object(he.a)({},e),{},{error:""});case k:return Object(he.a)(Object(he.a)({},e),{},{message:""});default:return e}},xe=a(18),ge={lists:null,error:"",currentList:null,loading:!0},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(he.a)(Object(he.a)({},e),{},{lists:t.payload,currentList:null,loading:!1});case E:return Object(he.a)(Object(he.a)({},e),{},{lists:[t.payload].concat(Object(xe.a)(e.lists)),loading:!1});case C:return Object(he.a)(Object(he.a)({},e),{},{currentList:t.payload[0],loading:!1});case A:return Object(he.a)(Object(he.a)({},e),{},{lists:e.lists.filter((function(e){return t.payload!==e.id})),loading:!1});case T:return Object(he.a)(Object(he.a)({},e),{},{currentList:Object(he.a)(Object(he.a)({},e.currentList),{},{list_items:[].concat(Object(xe.a)(e.currentList.list_items),[t.payload])}),loading:!1});case R:case F:case P:return Object(he.a)(Object(he.a)({},e),{},{currentList:Object(he.a)(Object(he.a)({},e.currentList),{},{list_items:Object(xe.a)(e.currentList.list_items.map((function(e){return e.id===t.payload.id?t.payload:e})))}),loading:!1});case M:return Object(he.a)(Object(he.a)({},e),{},{currentList:Object(he.a)(Object(he.a)({},e.currentList),{},{list_items:e.currentList.list_items.filter((function(e){return e.id!==t.payload}))}),loading:!1});case D:return Object(he.a)(Object(he.a)({},e),{},{currentList:Object(he.a)(Object(he.a)({},e.currentList),{},{departments:[t.payload].concat(Object(xe.a)(e.currentList.departments))}),loading:!1});case U:return Object(he.a)(Object(he.a)({},e),{},{currentList:null});case q:return Object(he.a)(Object(he.a)({},e),{},{lists:null});case _:return Object(he.a)(Object(he.a)({},e),{},{error:t.payload,loading:!1});case G:return Object(he.a)(Object(he.a)({},e),{},{error:""});case J:return Object(he.a)(Object(he.a)({},e),{},{loading:!0});default:return Object(he.a)({},e)}},ye=Object(be.combineReducers)({auth:fe,list:ve}),Ne=[pe.a],we=Object(be.createStore)(ye,{},Object(me.composeWithDevTools)(be.applyMiddleware.apply(void 0,Ne)));localStorage.token&&f(localStorage.token);var Le=function(){return Object(s.useEffect)((function(){})),Object(n.jsx)(d.a,{store:we,children:Object(n.jsx)(s.Fragment,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(z,{}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)(o.c,{children:[Object(n.jsx)(o.a,{exact:!0,path:"/",component:H}),Object(n.jsx)(o.a,{exact:!0,path:"/shopping-list-api/",component:je})]})})]})})})};a(71);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Le,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.e8a172a0.chunk.js.map