(this["webpackJsonpCapstone-Project-Client"]=this["webpackJsonpCapstone-Project-Client"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(28),c=a.n(n),s=(a(83),a(61)),o=a(3),i=a(8),u=a(113),l=(a(84),a(66)),j=a(1);var d=function(e){var t=e.variant,a=e.heading,n=e.message,c=Object(r.useState)(!0),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(r.useState)(null),b=Object(o.a)(d,2),h=b[0],O=b[1];return console.log(h),Object(r.useEffect)((function(){var e=setTimeout((function(){return u(!1)}),5e3);return O(e),function(){clearTimeout(h)}}),[]),Object(j.jsx)(l.a,{variant:t,onClose:function(){return u(!1)},dismissible:!0,show:i,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l.a.Heading,{children:a}),Object(j.jsx)("p",{className:"alert-body",children:n})]})})},b=a(78),h=a(47),O=a(77),m=a(11),x=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{to:"/courses/",className:"nav-link",children:"Courses"}),Object(j.jsx)(m.c,{to:"/courses/create/",className:"nav-link",children:"Add Course"}),Object(j.jsx)(m.c,{to:"/change-password/",className:"nav-link",children:"Change Password"}),Object(j.jsx)(m.c,{to:"/profile/",className:"nav-link",children:"Profile"}),Object(j.jsx)(m.c,{to:"/sign-out/",className:"nav-link",children:"Sign Out"})]}),p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{to:"/sign-up/",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(m.c,{to:"/sign-in/",className:"nav-link",children:"Sign In"})]}),v=Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(m.c,{to:"/",className:"nav-link",children:"Home"})}),f=function(e){var t=e.user;return Object(j.jsx)(h.a,{bg:"primary",variant:"dark",expand:"md",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)(m.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:"E-Learning"})}),Object(j.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email]}),v,t?x:p]})})]})})},g=a(9),C=a.n(g),w=a(14),k="https://aqueous-atoll-85096.herokuapp.com",S="http://localhost:8000",y="localhost"===window.location.hostname?S:k,N=a(16),A=a.n(N),F=function(e,t,a,r){return A.a.post(y+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:a},userType:r})},I=function(e,t){return A.a.post(y+"/sign-in/",{credentials:{email:e,password:t}})},D=function(e){return A.a.delete(y+"/sign-out/",{headers:{Authorization:"Token ".concat(e.token)}})},T=function(e,t,a){return A.a.patch(y+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Token ".concat(a.token)}})},P=a(5),L=a(13),E=function(e){var t=e.msgAlert,a=e.setUser,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(r.useState)(""),m=Object(o.a)(O,2),x=m[0],p=m[1],v=Object(r.useState)(""),f=Object(o.a)(v,2),g=f[0],k=f[1],S=Object(r.useState)(!1),y=Object(o.a)(S,2),N=y[0],A=y[1],D=function(){var e=Object(w.a)(C.a.mark((function e(r){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,F(s,b,x,g);case 4:return e.next=6,I(s,b);case 6:n=e.sent,a(n.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),A(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),u(""),h(""),p(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return N?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(P.a,{onSubmit:D,children:[Object(j.jsxs)(P.a.Group,{controlId:"email",children:[Object(j.jsx)(P.a.Label,{children:"Email address"}),Object(j.jsx)(P.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"password",children:[Object(j.jsx)(P.a.Label,{children:"Password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(P.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(P.a.Control,{required:!0,name:"passwordConfirmation",value:x,type:"password",placeholder:"Confirm Password",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(P.a.Group,{controlId:"userType",children:[Object(j.jsx)(P.a.Label,{children:"User Type"}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(P.a.Check,{inline:!0,defaultChecked:!0,label:"Student",name:"userType",value:"is_student",type:"radio",id:"inline-radio}-1",onChange:function(e){return k(e.target.value)}}),Object(j.jsx)(P.a.Check,{inline:!0,label:"Tutor",name:"userType",value:"is_tutor",type:"radio",id:"inline-radio}-2",onChange:function(e){return k(e.target.value)}}),Object(j.jsx)(P.a.Check,{inline:!0,label:"Author",name:"userType",value:"is_author",type:"radio",id:"inline-radio}-3",onChange:function(e){return k(e.target.value)}})]},"inline-radio}")]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},G=function(e){var t=e.msgAlert,a=e.setUser,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(r.useState)(!1),m=Object(o.a)(O,2),x=m[0],p=m[1],v=function(){var e=Object(w.a)(C.a.mark((function e(r){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,I(s,b);case 4:n=e.sent,a(n.data.user),console.log(n.data),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),p(!0),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(1),u(""),h(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return x?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(P.a,{onSubmit:v,children:[Object(j.jsxs)(P.a.Group,{controlId:"email",children:[Object(j.jsx)(P.a.Label,{children:"Email address"}),Object(j.jsx)(P.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"password",children:[Object(j.jsx)(P.a.Label,{children:"Password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},q=function(e){var t=e.msgAlert,a=e.clearUser,n=e.user,c=Object(r.useState)(!1),s=Object(o.a)(c,2),u=s[0],l=s[1];return Object(r.useEffect)((function(){(function(){var e=Object(w.a)(C.a.mark((function e(){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(n);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),a(),l(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n||u?Object(j.jsx)(i.a,{to:"/"}):""},M=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(r.useState)(!1),m=Object(o.a)(O,2),x=m[0],p=m[1],v=function(){var e=Object(w.a)(C.a.mark((function e(r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,T(s,b,a);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),u(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||x?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(P.a,{onSubmit:v,children:[Object(j.jsxs)(P.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(P.a.Label,{children:"Old password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"oldPassword",value:s,type:"password",placeholder:"Old Password",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(P.a.Label,{children:"New Password"}),Object(j.jsx)(P.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},U=function(e,t,a){return A.a.post(y+"/courses/create/",{course:{name:t,description:a}},{headers:{Authorization:"Token ".concat(e.token)}})},z=function(e){return A.a.get(y+"/courses/",{headers:{Authorization:"Token ".concat(e.token)}})},B=function(e,t){return A.a.get(y+"/courses/".concat(t,"/"),{headers:{Authorization:"Token ".concat(e.token)}})},H=function(e,t,a,r){return A.a.patch(y+"/courses/".concat(t,"/"),{course:{name:a,description:r}},{headers:{Authorization:"Token ".concat(e.token)}})},_=function(e,t){return A.a.delete(y+"/courses/".concat(t,"/"),{headers:{Authorization:"Token ".concat(e.token)}})},J=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(!1),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(r.useState)(""),m=Object(o.a)(O,2),x=m[0],p=m[1],v=function(){var e=Object(w.a)(C.a.mark((function e(r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,U(a,b,x);case 4:t({heading:"Course Creation Successful!",message:"Course ".concat(b," Created Successfully!"),variant:"success"}),u(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({heading:"Create Course Failed with error: "+e.t0.message,message:"Failed to create a new course",variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!a||s?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Course"}),Object(j.jsxs)(P.a,{onSubmit:v,children:[Object(j.jsxs)(P.a.Group,{controlId:"courseName",children:[Object(j.jsx)(P.a.Label,{children:"Course Name"}),Object(j.jsx)(P.a.Control,{required:!0,name:"courseName",value:b,type:"text",placeholder:"Course Name",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"courseDescription",children:[Object(j.jsx)(P.a.Label,{children:"Course Description"}),Object(j.jsx)(P.a.Control,{required:!0,name:"courseDescription",value:x,type:"text",as:"textarea",rows:"6",placeholder:"Course Description",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},W=a(58),R=function(e){var t=e.user,a=Object(r.useState)([]),n=Object(o.a)(a,2),c=n[0],s=n[1],u=Object(r.useState)(!0),l=Object(o.a)(u,2),d=l[0],b=l[1];if(Object(r.useEffect)(Object(w.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,z(t);case 3:a=e.sent,s(a.data.courses),b(!1),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]),!t)return Object(j.jsx)(i.a,{to:"/"});var h=c.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)(m.b,{to:"/courses/".concat(e.id,"/"),children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("h5",{children:e.description})]})},e.id)})),O=Object(j.jsx)("ul",{children:h});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Courses:"}),d?Object(j.jsx)(W.a,{animation:"border",variant:"primary"}):O]})},Y=a(26),K=function(e,t,a,r){return console.log(e,t,a,r),A.a.post(y+"/courses/".concat(r,"/modules/create/"),{module:{name:t,content:a,course:r}},{headers:{Authorization:"Token ".concat(e.token)}})},Q=function(e,t){return A.a.get(y+"/courses/".concat(t,"/modules/"),{headers:{Authorization:"Token ".concat(e.token)}})},V=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)([]),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(r.useState)(""),m=Object(o.a)(O,2),x=m[0],p=m[1],v=Object(r.useState)(!1),f=Object(o.a)(v,2),g=f[0],k=f[1],S=Object(r.useState)([]),y=Object(o.a)(S,2),N=y[0],A=y[1],F=Object(r.useState)(""),I=Object(o.a)(F,2),D=I[0],T=I[1],E=Object(r.useState)(""),G=Object(o.a)(E,2),q=G[0],M=G[1],U=Object(r.useState)(!1),z=Object(o.a)(U,2),J=z[0],R=z[1],K=Object(r.useState)(!1),V=Object(o.a)(K,2),X=V[0],Z=V[1],$=Object(r.useState)(!1),ee=Object(o.a)($,2),te=ee[0],ae=ee[1],re=Object(r.useState)(!1),ne=Object(o.a)(re,2),ce=ne[0],se=ne[1],oe=Object(r.useState)(!1),ie=Object(o.a)(oe,2),ue=ie[0],le=ie[1],je={id:Object(i.h)().id};if(!a)return Object(j.jsx)(i.a,{to:"/"});Object(r.useEffect)(Object(w.a)(C.a.mark((function e(){var t,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(a,je.id);case 3:return t=e.sent,u(t.data.course),h(t.data.course.name),p(t.data.course.description),e.prev=7,e.next=10,Q(a,je.id);case 10:r=e.sent,A(r.data.modules),Z(!1),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(7),console.error(e.t0);case 18:e.next=23;break;case 20:e.prev=20,e.t1=e.catch(0),console.error(e.t1);case 23:case"end":return e.stop()}}),e,null,[[0,20],[7,15]])}))),[ue]);var de=function(){var e=Object(w.a)(C.a.mark((function e(r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,H(a,je.id,b,x);case 4:k(!1),le(!0),t({heading:"Course Edit Successful!",message:"Course ".concat(b," Edited Successfully!"),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({heading:"Edit Course Failed with error: "+e.t0.message,message:"Failed to edit the course",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),be=function(){var e=Object(w.a)(C.a.mark((function e(r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,_(a,je.id);case 4:k(!1),ae(!0),t({heading:"Course Deletion Successful!",message:"Course ".concat(b," Deleted Successfully!"),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({heading:"Delete Course Failed with error: "+e.t0.message,message:"Failed to delete the course",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();if(te)return Object(j.jsx)(i.a,{to:"/courses/"});var he=function(){return se(!0)};if(ce)return Object(j.jsx)(i.a,{to:"/courses/:id/modules/create/",state:{value:je}});var Oe=function(e){},me=N.map((function(e,t){return Object(j.jsxs)("li",{children:[Object(j.jsxs)("h3",{children:[t+1,": ",e.name]}),Object(j.jsx)("h5",{children:e.content}),Object(j.jsx)(L.a,{onClick:Oe,children:"Edit"}),Object(j.jsx)(L.a,{variant:"danger",children:"Delete"}),Object(j.jsx)("hr",{})]},e.id)})),xe=Object(j.jsx)("ul",{children:me});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)(L.a,{onClick:function(){return ae(!0)},children:"Back"}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsx)("h2",{children:s.name}),Object(j.jsx)("h5",{children:s.description}),Object(j.jsx)(L.a,{onClick:function(){return k(!0)},children:"Edit"}),Object(j.jsx)(L.a,{variant:"danger",onClick:function(){return be},children:"Delete"})]}),Object(j.jsxs)("div",{className:"col-6",children:[Object(j.jsx)("h5",{children:"Modules:"}),X?Object(j.jsx)(W.a,{animation:"border",variant:"primary"}):xe,Object(j.jsx)(L.a,{onClick:function(){return he},children:"Add Module"})]})]})})]}),Object(j.jsx)("div",{children:Object(j.jsxs)(Y.a,{show:g,onHide:function(){return k(!1)},children:[Object(j.jsx)(Y.a.Header,{closeButton:!0,children:Object(j.jsx)(Y.a.Title,{children:"Edit Course Information"})}),Object(j.jsx)(Y.a.Body,{children:Object(j.jsxs)(P.a,{children:[Object(j.jsxs)(P.a.Group,{controlId:"courseName",children:[Object(j.jsx)(P.a.Label,{children:"Course Name"}),Object(j.jsx)(P.a.Control,{required:!0,name:"courseName",value:b,type:"text",placeholder:"Course Name",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"courseDescription",children:[Object(j.jsx)(P.a.Label,{children:"Course Description"}),Object(j.jsx)(P.a.Control,{required:!0,name:"courseDescription",value:x,type:"text",as:"textarea",rows:"6",placeholder:"Course Description",onChange:function(e){return p(e.target.value)}})]})]})}),Object(j.jsxs)(Y.a.Footer,{children:[Object(j.jsx)(L.a,{variant:"secondary",onClick:function(){return k(!1)},children:"Close"}),Object(j.jsx)(L.a,{variant:"primary",onClick:function(){return de},children:"Save Changes"})]})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(Y.a,{show:J,onHide:function(){return R(!1)},children:[Object(j.jsx)(Y.a.Header,{closeButton:!0,children:Object(j.jsx)(Y.a.Title,{children:"Edit Module Information"})}),Object(j.jsx)(Y.a.Body,{children:Object(j.jsxs)(P.a,{children:[Object(j.jsxs)(P.a.Group,{controlId:"moduleName",children:[Object(j.jsx)(P.a.Label,{children:"Module Name"}),Object(j.jsx)(P.a.Control,{required:!0,name:"moduleName",value:D,type:"text",placeholder:"Module Name",onChange:function(e){return T(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"moduleContent",children:[Object(j.jsx)(P.a.Label,{children:"Module Content"}),Object(j.jsx)(P.a.Control,{required:!0,name:"moduleContent",value:q,type:"text",as:"textarea",rows:"6",placeholder:"Module Content",onChange:function(e){return M(e.target.value)}})]})]})}),Object(j.jsxs)(Y.a.Footer,{children:[Object(j.jsx)(L.a,{variant:"secondary",onClick:function(){return R(!1)},children:"Close"}),Object(j.jsx)(L.a,{variant:"primary",onClick:function(){return de},children:"Save Changes"})]})]})})]})},X=function(e,t,a){return A.a.patch(y+"/profile/",{userData:{firstName:e,lastName:t}},{headers:{Authorization:"Token ".concat(a.token)}})},Z=function(e){return A.a.get(y+"/profile/",{headers:{Authorization:"Token ".concat(e.token)}})},$=function(e){e.msgAlert;var t=e.user,a=Object(r.useState)(""),n=Object(o.a)(a,2),c=n[0],s=n[1],u=Object(r.useState)(""),l=Object(o.a)(u,2),d=l[0],b=l[1],h=Object(r.useState)(!1),O=Object(o.a)(h,2),m=O[0],x=O[1];Object(r.useEffect)(Object(w.a)(C.a.mark((function e(){var a;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z(t);case 3:a=e.sent,console.log(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var p=function(){var e=Object(w.a)(C.a.mark((function e(a){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,X(c,d,t);case 4:x(!0),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return!t||m?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Update profile"}),Object(j.jsxs)(P.a,{onSubmit:p,children:[Object(j.jsxs)(P.a.Group,{controlId:"firstName",children:[Object(j.jsx)(P.a.Label,{children:"First Name"}),Object(j.jsx)(P.a.Control,{name:"firstName",value:c,type:"text",placeholder:"First Name",onChange:function(e){return s(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"lastName",children:[Object(j.jsx)(P.a.Label,{children:"Last Name"}),Object(j.jsx)(P.a.Control,{name:"lastName",value:d,type:"text",placeholder:"Last Name",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Update"})]})]})})},ee=function(e){var t=e.msgAlert,a=e.user,n=Object(r.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(r.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(i.f)().state.value,m=function(){var e=Object(w.a)(C.a.mark((function e(r){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,K(a,s,b,O.id);case 4:t({heading:"Module Creation Successful!",message:"Module ".concat(s," Created Successfully!"),variant:"success"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t({heading:"Create Module Failed with error: "+e.t0.message,message:"Failed to create a new Module",variant:"danger"});case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return a?Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Module"}),Object(j.jsxs)(P.a,{onSubmit:m,children:[Object(j.jsxs)(P.a.Group,{controlId:"moduleName",children:[Object(j.jsx)(P.a.Label,{children:"Module Name"}),Object(j.jsx)(P.a.Control,{required:!0,name:"moduleName",value:s,type:"text",placeholder:"Course Name",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(P.a.Group,{controlId:"moduleContent",children:[Object(j.jsx)(P.a.Label,{children:"Module Content"}),Object(j.jsx)(P.a.Control,{required:!0,name:"moduleContent",value:b,type:"text",as:"textarea",rows:"10",placeholder:"Module Content",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(L.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})}):Object(j.jsx)(i.a,{to:"/"})},te=function(){var e=Object(r.useState)(null),t=Object(o.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)([]),l=Object(o.a)(c,2),b=l[0],h=l[1],O=function(e){var t=e.heading,a=e.message,r=e.variant,n=Object(u.a)();h((function(e){return[].concat(Object(s.a)(e),[{heading:t,message:a,variant:r,id:n}])}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{user:a}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/sign-up/",element:Object(j.jsx)(E,{msgAlert:O,setUser:n})}),Object(j.jsx)(i.b,{path:"/sign-in/",element:Object(j.jsx)(G,{msgAlert:O,setUser:n})}),Object(j.jsx)(i.b,{path:"/sign-out/",element:Object(j.jsx)(q,{msgAlert:O,clearUser:function(){return n(null)},user:a})}),Object(j.jsx)(i.b,{path:"/change-password/",element:Object(j.jsx)(M,{msgAlert:O,user:a})}),Object(j.jsx)(i.b,{path:"/profile/",element:Object(j.jsx)($,{msgAlert:O,user:a})}),Object(j.jsx)(i.b,{path:"/courses/create/",element:Object(j.jsx)(J,{msgAlert:O,user:a})}),Object(j.jsx)(i.b,{path:"/courses/",element:Object(j.jsx)(R,{user:a})}),Object(j.jsx)(i.b,{path:"/courses/:id/",element:Object(j.jsx)(V,{msgAlert:O,user:a})}),Object(j.jsx)(i.b,{path:"/courses/:id/modules/create/",element:Object(j.jsx)(ee,{msgAlert:O,user:a})})]})})]})},ae=Object(j.jsx)(m.a,{basename:"/Capstone-Project-Client",children:Object(j.jsx)(te,{})});c.a.render(ae,document.getElementById("root"))},83:function(e,t,a){},84:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.ca62af89.chunk.js.map