(this["webpackJsonpOnly Exams"]=this["webpackJsonpOnly Exams"]||[]).push([[0],{114:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(29),c=r.n(n),s=(r(86),r(64)),o=r(3),i=r(9),u=r(117),l=(r(87),r(69)),j=r(0);var d=function(e){var t=e.variant,r=e.heading,n=e.message,c=Object(a.useState)(!0),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(a.useState)(null),b=Object(o.a)(d,2),h=b[0],O=b[1];return console.log(h),Object(a.useEffect)((function(){var e=setTimeout((function(){return u(!1)}),5e3);return O(e),function(){clearTimeout(h)}}),[]),Object(j.jsx)(l.a,{variant:t,onClose:function(){return u(!1)},dismissible:!0,show:i,children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(l.a.Heading,{children:r}),Object(j.jsx)("p",{className:"alert-body",children:n})]})})},b=r(81),h=r(50),O=r(80),x=r(10),m=(r(92),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.c,{to:"/courses/",className:"nav-link",children:"Courses"}),Object(j.jsx)(x.c,{to:"/courses/create/",className:"nav-link",children:"Add Course"}),Object(j.jsx)(x.c,{to:"/change-password/",className:"nav-link",children:"Change Password"}),Object(j.jsx)(x.c,{to:"/profile/",className:"nav-link",children:"Profile"}),Object(j.jsx)(x.c,{to:"/sign-out/",className:"nav-link",children:"Sign Out"})]})),p=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.c,{to:"/courses/",className:"nav-link",children:"Courses"}),Object(j.jsx)(x.c,{to:"/change-password/",className:"nav-link",children:"Change Password"}),Object(j.jsx)(x.c,{to:"/profile/",className:"nav-link",children:"Profile"}),Object(j.jsx)(x.c,{to:"/sign-out/",className:"nav-link",children:"Sign Out"})]}),v=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.c,{to:"/courses/",className:"nav-link",children:"Find A Course"}),Object(j.jsx)(x.c,{to:"/courses/enrolled/",className:"nav-link",children:"Your Courses"}),Object(j.jsx)(x.c,{to:"/change-password/",className:"nav-link",children:"Change Password"}),Object(j.jsx)(x.c,{to:"/profile/",className:"nav-link",children:"Profile"}),Object(j.jsx)(x.c,{to:"/sign-out/",className:"nav-link",children:"Sign Out"})]}),f=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(x.c,{to:"/sign-up/",className:"nav-link",children:"Sign Up"}),Object(j.jsx)(x.c,{to:"/sign-in/",className:"nav-link",children:"Sign In"})]}),g=Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(x.c,{to:"/",className:"nav-link",children:"Home"})}),k=function(e){var t=e.user,r=e.userType;return Object(j.jsx)(h.a,{bg:"primary",variant:"dark",expand:"md",children:Object(j.jsxs)(O.a,{children:[Object(j.jsx)(h.a.Brand,{children:Object(j.jsx)(x.b,{to:"/",style:{color:"#FFF",textDecoration:"none"},children:Object(j.jsx)("img",{className:"navLogo",src:"https://i.imgur.com/E9e7s2r.png"})})}),Object(j.jsx)(h.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(j.jsx)(h.a.Collapse,{id:"basic-navbar-nav",children:Object(j.jsxs)(b.a,{className:"ms-auto",children:[t&&Object(j.jsxs)("span",{className:"navbar-text me-2",children:["Welcome, ",t.email,"(",r,")"]}),g,"Student"===r?v:"Tutor"===r?p:"Author"===r?m:f]})})]})})},w=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("h1",{children:"Welcome"})})},C=r(7),y=r.n(C),S=r(11),N="https://capstone-proj-api.herokuapp.com",T="http://localhost:8000",A="localhost"===window.location.hostname?T:N,F=r(14),E=r.n(F),D=function(e,t,r,a){return E.a.post(A+"/sign-up/",{credentials:{email:e,password:t,password_confirmation:r},userType:a})},M=function(e,t){return E.a.post(A+"/sign-in/",{credentials:{email:e,password:t}})},I=function(e){return E.a.delete(A+"/sign-out/",{headers:{Authorization:"Token ".concat(e.token)}})},P=function(e,t,r){return E.a.patch(A+"/change-password/",{passwords:{old:e,new:t}},{headers:{Authorization:"Token ".concat(r.token)}})},z=r(5),G=r(12),L=function(e){var t=e.msgAlert,r=e.setUser,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),m=x[0],p=x[1],v=Object(a.useState)(""),f=Object(o.a)(v,2),g=f[0],k=f[1],w=Object(a.useState)(!1),C=Object(o.a)(w,2),N=C[0],T=C[1],A=function(){var e=Object(S.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,D(s,b,m,g);case 4:return e.next=6,M(s,b);case 6:n=e.sent,r(n.data.user),t({heading:"Sign Up Success",message:"Succesfully registered! You've been signed in as well.",variant:"success"}),T(!0),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),u(""),h(""),p(""),t({heading:"Sign Up Failed with error: "+e.t0.message,message:"Registration failed. Email may be taken, or passwords don't match.",variant:"danger"});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return N?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign Up"}),Object(j.jsxs)(z.a,{onSubmit:A,children:[Object(j.jsxs)(z.a.Group,{controlId:"email",children:[Object(j.jsx)(z.a.Label,{children:"Email address"}),Object(j.jsx)(z.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"password",children:[Object(j.jsx)(z.a.Label,{children:"Password"}),Object(j.jsx)(z.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"passwordConfirmation",children:[Object(j.jsx)(z.a.Label,{children:"Password Confirmation"}),Object(j.jsx)(z.a.Control,{required:!0,name:"passwordConfirmation",value:m,type:"password",placeholder:"Confirm Password",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsx)("br",{}),Object(j.jsxs)(z.a.Group,{controlId:"userType",children:[Object(j.jsx)(z.a.Label,{children:"User Type"}),Object(j.jsxs)("div",{className:"mb-3",children:[Object(j.jsx)(z.a.Check,{inline:!0,label:"Student",name:"userType",value:"is_student",type:"radio",id:"inline-radio}-1",onChange:function(e){return k(e.target.value)}}),Object(j.jsx)(z.a.Check,{inline:!0,label:"Tutor",name:"userType",value:"is_tutor",type:"radio",id:"inline-radio}-2",onChange:function(e){return k(e.target.value)}}),Object(j.jsx)(z.a.Check,{inline:!0,label:"Author",name:"userType",value:"is_author",type:"radio",id:"inline-radio}-3",onChange:function(e){return k(e.target.value)}})]},"inline-radio}")]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},q=function(e){var t=e.msgAlert,r=e.setUser,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(!1),x=Object(o.a)(O,2),m=x[0],p=x[1],v=function(){var e=Object(S.a)(y.a.mark((function e(a){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,M(s,b);case 4:n=e.sent,r(n.data.user),t({heading:"Sign In Success",message:"Welcome!",variant:"success"}),p(!0),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),u(""),h(""),t({heading:"Sign In Failed with error: "+e.t0.message,message:"Failed to sign in. Check your email and password and try again.",variant:"danger"});case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return m?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Sign In"}),Object(j.jsxs)(z.a,{onSubmit:v,children:[Object(j.jsxs)(z.a.Group,{controlId:"email",children:[Object(j.jsx)(z.a.Label,{children:"Email address"}),Object(j.jsx)(z.a.Control,{required:!0,type:"email",name:"email",value:s,placeholder:"Enter email",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"password",children:[Object(j.jsx)(z.a.Label,{children:"Password"}),Object(j.jsx)(z.a.Control,{required:!0,name:"password",value:b,type:"password",placeholder:"Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},U=function(e){var t=e.msgAlert,r=e.clearUser,n=e.user,c=Object(a.useState)(!1),s=Object(o.a)(c,2),u=s[0],l=s[1];return Object(a.useEffect)((function(){(function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(n);case 2:t({heading:"Signed Out Successfully",message:"Come back soon!",variant:"success"}),r(),l(!0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),!n||u?Object(j.jsx)(i.a,{to:"/"}):""},B=function(e){var t=e.msgAlert,r=e.user,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(!1),x=Object(o.a)(O,2),m=x[0],p=x[1],v=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,P(s,b,r);case 4:t({heading:"Change Password Success",message:"Password changed successfully!",variant:"success"}),p(!0),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),u(""),h(""),t({heading:"Change Password Failed with error: "+e.t0.message,message:"Failed to change passwords. Check your old password and try again.",variant:"danger"});case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!r||m?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Change Password"}),Object(j.jsxs)(z.a,{onSubmit:v,children:[Object(j.jsxs)(z.a.Group,{controlId:"oldPassword",children:[Object(j.jsx)(z.a.Label,{children:"Old password"}),Object(j.jsx)(z.a.Control,{required:!0,name:"oldPassword",value:s,type:"password",placeholder:"Old Password",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"newPassword",children:[Object(j.jsx)(z.a.Label,{children:"New Password"}),Object(j.jsx)(z.a.Control,{required:!0,name:"newPassword",value:b,type:"password",placeholder:"New Password",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},_=function(e,t,r){return E.a.post(A+"/courses/create/",{course:{name:t,description:r}},{headers:{Authorization:"Token ".concat(e.token)}})},H=function(e){return E.a.get(A+"/courses/",{headers:{Authorization:"Token ".concat(e.token)}})},W=function(e){return E.a.get(A+"/courses/available/",{headers:{Authorization:"Token ".concat(e.token)}})},Y=function(e,t){return E.a.get(A+"/courses/".concat(t,"/"),{headers:{Authorization:"Token ".concat(e.token)}})},J=function(e,t,r,a){return E.a.patch(A+"/courses/".concat(t,"/"),{course:{name:r,description:a}},{headers:{Authorization:"Token ".concat(e.token)}})},R=function(e,t){return E.a.delete(A+"/courses/".concat(t,"/"),{headers:{Authorization:"Token ".concat(e.token)}})},K=function(e,t){return E.a.post(A+"/courses/".concat(t,"/enrol/"),{enrol:{student:e.id,course:t}},{headers:{Authorization:"Token ".concat(e.token)}})},Q=function(e){return E.a.get(A+"/courses/enrolled/",{headers:{Authorization:"Token ".concat(e.token)}})},V=function(e){var t=e.msgAlert,r=e.user,n=Object(a.useState)(!1),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),m=x[0],p=x[1],v=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,_(r,b,m);case 4:t({heading:"Course Creation Successful!",message:"Course ".concat(b," Created Successfully!"),variant:"success"}),u(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({heading:"Create Course Failed with error: "+e.t0.message,message:"Failed to create a new course",variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return!r||s?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Course"}),Object(j.jsxs)(z.a,{onSubmit:v,children:[Object(j.jsxs)(z.a.Group,{controlId:"courseName",children:[Object(j.jsx)(z.a.Label,{children:"Course Name"}),Object(j.jsx)(z.a.Control,{required:!0,name:"courseName",value:b,type:"text",placeholder:"Course Name",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"courseDescription",children:[Object(j.jsx)(z.a.Label,{children:"Course Description"}),Object(j.jsx)(z.a.Control,{required:!0,name:"courseDescription",value:m,type:"text",as:"textarea",rows:"6",placeholder:"Course Description",onChange:function(e){return p(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})})},X=r(34),Z=function(e){var t=e.msgAlert,r=e.user,n=e.userType,c=Object(a.useState)([]),s=Object(o.a)(c,2),u=s[0],l=s[1],d=Object(a.useState)(!0),b=Object(o.a)(d,2),h=b[0],O=b[1];if(Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var a,c;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,"Student"!==n){e.next=9;break}return e.next=4,W(r);case 4:a=e.sent,l(a.data.courses),O(!1),e.next=14;break;case 9:return e.next=11,H(r);case 11:c=e.sent,l(c.data.courses),O(!1);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),t({heading:"No Courses",message:"There are no courses available right now.",variant:"danger"});case 19:case"end":return e.stop()}}),e,null,[[0,16]])}))),[]),!r)return Object(j.jsx)(i.a,{to:"/"});var m=u.map((function(e){return"Student"!==n?Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.b,{to:"/courses/".concat(e.id,"/"),children:Object(j.jsx)("h1",{children:e.name})}),Object(j.jsx)("h5",{children:e.description}),Object(j.jsx)("hr",{})]})},e.id):Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{children:e.name}),Object(j.jsx)("h5",{children:e.description}),Object(j.jsx)(G.a,{variant:"success",value:e.id,onClick:function(e){return v(e)},children:"Enrol"}),Object(j.jsx)("hr",{})]})},e.id)})),p=Object(j.jsx)("ul",{children:m}),v=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,K(r,a.target.value);case 3:t({heading:"Successfully enrolled!",message:"You have successfully enrolled in this course!",variant:"success"}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),t({heading:"Error enrolling",message:"There was an error enrolling in this course.",variant:"danger"});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Courses:"}),h?Object(j.jsx)(X.a,{animation:"border",variant:"primary"}):p]})},$=function(e){var t=e.msgAlert,r=e.user,n=(e.userType,Object(a.useState)([])),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(!0),d=Object(o.a)(l,2),b=d[0],h=d[1];if(Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q(r);case 3:a=e.sent,n=a.data.enrolled_courses.map((function(e){return{id:e.course.id,name:e.course.name,description:e.course.description}})),u(n),h(!1),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),t({heading:"No Courses",message:"There are no courses. Please enrol in a Course.",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[]),!r)return Object(j.jsx)(i.a,{to:"/"});var O=s.map((function(e){return Object(j.jsx)("li",{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(x.b,{to:"/courses/".concat(e.id,"/"),children:Object(j.jsx)("h1",{children:e.name})}),Object(j.jsx)("h5",{children:e.description}),Object(j.jsx)("hr",{})]})},e.id)})),m=Object(j.jsx)("ul",{children:O});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h3",{children:"Your Enrolled Courses:"}),b?Object(j.jsx)(X.a,{animation:"border",variant:"primary"}):m]})},ee=r(18),te=r(30),re=function(e,t,r,a){return E.a.post(A+"/courses/modules/create/",{module:{name:t,content:r,course:a}},{headers:{Authorization:"Token ".concat(e.token)}})},ae=function(e,t){return E.a.get(A+"/courses/".concat(t,"/modules/"),{headers:{Authorization:"Token ".concat(e.token)}})},ne=function(e,t,r){return E.a.get(A+"/courses/modules/".concat(t,"/"),{headers:{Authorization:"Token ".concat(e.token)}})},ce=function(e,t,r,a,n){return E.a.patch(A+"/courses/modules/".concat(t,"/"),{module:{course:n,name:r,content:a}},{headers:{Authorization:"Token ".concat(e.token)}})},se=function(e,t,r){return E.a.delete(A+"/courses/".concat(r,"/modules/").concat(t,"/"),{headers:{Authorization:"Token ".concat(e.token)}})},oe=function(e,t){return E.a.post(A+"/courses/modules/".concat(t,"/complete/"),{complete:{module_complete:t,student:e.id}},{headers:{Authorization:"Token ".concat(e.token)}})},ie=function(e,t){return E.a.get(A+"/courses/".concat(t,"/modules/completed/"),{headers:{Authorization:"Token ".concat(e.token)}})},ue=function(e,t,r){return E.a.patch(A+"/profile/",{userData:{firstName:e,lastName:t}},{headers:{Authorization:"Token ".concat(r.token)}})},le=function(e){return E.a.get(A+"/profile/",{headers:{Authorization:"Token ".concat(e.token)}})},je=function(e){return E.a.get(A+"/tutors/",{headers:{Authorization:"Token ".concat(e.token)}})},de=function(e,t,r){return E.a.post(A+"/tutors/assign/",{assign:{tutor:t,course:r}},{headers:{Authorization:"Token ".concat(e.token)}})},be=function(e,t){return E.a.get(A+"/courses/".concat(t,"/tutors/"),{headers:{Authorization:"Token ".concat(e.token)}})},he=function(e){var t=e.msgAlert,r=e.user,n=(e.userType,Object(a.useState)([])),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(""),m=Object(o.a)(O,2),p=m[0],v=m[1],f=Object(a.useState)(!1),g=Object(o.a)(f,2),k=g[0],w=g[1],C=Object(a.useState)([]),N=Object(o.a)(C,2),T=N[0],A=N[1],F=Object(a.useState)([]),E=Object(o.a)(F,2),D=E[0],M=E[1],I=Object(a.useState)([]),P=Object(o.a)(I,2),L=P[0],q=P[1],U=Object(a.useState)(!1),B=Object(o.a)(U,2),_=B[0],H=B[1],W=Object(a.useState)(!1),K=Object(o.a)(W,2),Q=K[0],V=K[1],Z=Object(a.useState)(!1),$=Object(o.a)(Z,2),re=$[0],ne=$[1],ce=Object(a.useState)(!1),se=Object(o.a)(ce,2),oe=se[0],ie=se[1],ue=Object(a.useState)(!1),le=Object(o.a)(ue,2),he=le[0],Oe=le[1],xe=Object(a.useState)(!1),me=Object(o.a)(xe,2),pe=me[0],ve=me[1],fe={id:Object(i.h)().id};if(!r)return Object(j.jsx)(i.a,{to:"/"});Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var t,a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(r,fe.id);case 3:return t=e.sent,u(t.data.course),h(t.data.course.name),v(t.data.course.description),e.prev=7,e.next=10,ae(r,fe.id);case 10:return a=e.sent,A(a.data.modules),ne(!1),e.prev=13,e.next=16,be(r,fe.id);case 16:n=e.sent,M(n.data.assigned_tutors),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.error(e.t0);case 23:e.next=28;break;case 25:e.prev=25,e.t1=e.catch(7),console.error(e.t1);case 28:e.next=33;break;case 30:e.prev=30,e.t2=e.catch(0),console.error(e.t2);case 33:case"end":return e.stop()}}),e,null,[[0,30],[7,25],[13,20]])}))),[pe]);var ge=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,J(r,fe.id,b,p);case 4:w(!1),ve(!0),t({heading:"Course Edit Successful!",message:"Course ".concat(b," Edited Successfully!"),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({heading:"Edit Course Failed with error: "+e.t0.message,message:"Failed to edit the course",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),ke=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,R(r,fe.id);case 4:w(!1),ie(!0),t({heading:"Course Deletion Successful!",message:"Course ".concat(b," Deleted Successfully!"),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({heading:"Delete Course Failed with error: "+e.t0.message,message:"Failed to delete the course",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),we=function(){var e=Object(S.a)(y.a.mark((function e(t){var a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,je(r);case 4:a=e.sent,n=a.data.tutors.filter(Ce),q(n),H(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),Ce=function(e){return e.email!==D[0].tutor.email};if(oe)return Object(j.jsx)(i.a,{to:"/courses/"});if(he)return Object(j.jsx)(i.a,{to:"/courses/".concat(fe,"/modules/create/"),state:{value:fe.id}});var ye=T.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)(x.b,{to:"/courses/modules/".concat(e.id,"/"),state:{value:fe},children:Object(j.jsx)("h3",{className:"container shadow-lg",children:e.name})}),Object(j.jsx)("hr",{})]},e.id)})),Se=Object(j.jsx)("ol",{className:"container",children:ye}),Ne=D.map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:e.tutor.email}),Object(j.jsx)("hr",{})]},e.id)})),Te=Object(j.jsx)("ol",{className:"container",children:Ne}),Ae=L.map((function(e,t){return Object(j.jsx)("option",{value:t,children:e.email},e.id)})),Fe=function(){var e=Object(S.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,de(r,Q.id,fe.id);case 4:H(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)(G.a,{onClick:function(){return ie(!0)},children:"Back"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsxs)("div",{className:"container shadow",children:[Object(j.jsx)("h2",{children:s.name}),Object(j.jsx)("h5",{children:s.description}),Object(j.jsx)(G.a,{onClick:function(){return w(!0)},children:"Edit"}),Object(j.jsx)(G.a,{variant:"danger",onClick:ke,children:"Delete"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"container shadow",children:[Object(j.jsx)("h5",{children:"Tutors:"}),Te,Object(j.jsx)(G.a,{onClick:we,children:"Assign Tutors"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]})]}),Object(j.jsxs)("div",{className:"col-6 container",children:[Object(j.jsx)("h3",{children:"Modules:"}),re?Object(j.jsx)(X.a,{animation:"border",variant:"primary"}):Se,Object(j.jsx)(G.a,{onClick:function(){return Oe(!0)},children:"Add Module"})]})]})})]}),Object(j.jsx)("div",{children:Object(j.jsxs)(ee.a,{show:k,onHide:function(){return w(!1)},children:[Object(j.jsx)(ee.a.Header,{closeButton:!0,children:Object(j.jsx)(ee.a.Title,{children:"Edit Course Information"})}),Object(j.jsx)(ee.a.Body,{children:Object(j.jsxs)(z.a,{children:[Object(j.jsx)(z.a.Group,{controlId:"courseName",children:Object(j.jsx)(te.a,{label:"Course Name",children:Object(j.jsx)(z.a.Control,{required:!0,name:"courseName",value:b,type:"text",placeholder:"Course Name",onChange:function(e){return h(e.target.value)}})})}),Object(j.jsx)(z.a.Group,{controlId:"courseDescription",children:Object(j.jsx)(te.a,{label:"Course Description",children:Object(j.jsx)(z.a.Control,{required:!0,name:"courseDescription",value:p,type:"text",as:"textarea",rows:"6",placeholder:"Course Description",onChange:function(e){return v(e.target.value)}})})})]})}),Object(j.jsxs)(ee.a.Footer,{children:[Object(j.jsx)(G.a,{variant:"secondary",onClick:function(){return w(!1)},children:"Close"}),Object(j.jsx)(G.a,{variant:"primary",onClick:ge,children:"Save Changes"})]})]})}),Object(j.jsx)("div",{children:Object(j.jsxs)(ee.a,{show:_,onHide:function(){return H(!1)},children:[Object(j.jsx)(ee.a.Header,{closeButton:!0,children:Object(j.jsx)(ee.a.Title,{children:"Assign Tutor"})}),Object(j.jsx)(ee.a.Body,{children:Object(j.jsx)(te.a,{label:"Assign Tutor",children:Object(j.jsxs)(z.a.Control,{"aria-label":"Default select example",as:"select",value:Ae.value,onChange:function(e){return function(e){return V(L[e.target.value])}(e)},children:["options=",Ae]})})}),Object(j.jsx)(ee.a.Footer,{children:Object(j.jsx)(G.a,{variant:"primary",onClick:Fe,children:"Save Changes"})})]})})]})},Oe=function(e){e.msgAlert;var t=e.user,r=Object(a.useState)(""),n=Object(o.a)(r,2),c=n[0],s=n[1],u=Object(a.useState)(""),l=Object(o.a)(u,2),d=l[0],b=l[1],h=Object(a.useState)(!1),O=Object(o.a)(h,2),x=O[0],m=O[1];Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le(t);case 3:r=e.sent,console.log(r.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[]);var p=function(){var e=Object(S.a)(y.a.mark((function e(r){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,ue(c,d,t);case 4:m(!0),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return!t||x?Object(j.jsx)(i.a,{to:"/"}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Update profile"}),Object(j.jsxs)(z.a,{onSubmit:p,children:[Object(j.jsxs)(z.a.Group,{controlId:"firstName",children:[Object(j.jsx)(z.a.Label,{children:"First Name"}),Object(j.jsx)(z.a.Control,{name:"firstName",value:c,type:"text",placeholder:"First Name",onChange:function(e){return s(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"lastName",children:[Object(j.jsx)(z.a.Label,{children:"Last Name"}),Object(j.jsx)(z.a.Control,{name:"lastName",value:d,type:"text",placeholder:"Last Name",onChange:function(e){return b(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Update"})]})]})})},xe=function(e){var t=e.msgAlert,r=e.user,n=Object(a.useState)(""),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(!1),x=Object(o.a)(O,2),m=x[0],p=x[1],v=Object(i.f)().state.value,f=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,re(r,s,b,v);case 4:t({heading:"Module Creation Successful!",message:"Module ".concat(s," Created Successfully!"),variant:"success"}),p(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({heading:"Create Module Failed with error: "+e.t0.message,message:"Failed to create a new Module",variant:"danger"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r?m?Object(j.jsx)(i.a,{to:"/courses/".concat(v,"/")}):Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-sm-10 col-md-8 mx-auto mt-5",children:[Object(j.jsx)("h3",{children:"Create Module"}),Object(j.jsxs)(z.a,{onSubmit:f,children:[Object(j.jsxs)(z.a.Group,{controlId:"moduleName",children:[Object(j.jsx)(z.a.Label,{children:"Module Name"}),Object(j.jsx)(z.a.Control,{required:!0,name:"moduleName",value:s,type:"text",placeholder:"Module Name",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)(z.a.Group,{controlId:"moduleContent",children:[Object(j.jsx)(z.a.Label,{children:"Module Content"}),Object(j.jsx)(z.a.Control,{required:!0,name:"moduleContent",value:b,type:"text",as:"textarea",rows:"10",placeholder:"Module Content",onChange:function(e){return h(e.target.value)}})]}),Object(j.jsx)(G.a,{className:"mt-2",variant:"primary",type:"submit",children:"Submit"})]})]})}):Object(j.jsx)(i.a,{to:"/"})},me=function(e){var t=e.msgAlert,r=e.user,n=(e.userType,Object(a.useState)([])),c=Object(o.a)(n,2),s=c[0],u=c[1],l=Object(a.useState)(""),d=Object(o.a)(l,2),b=d[0],h=d[1],O=Object(a.useState)(""),x=Object(o.a)(O,2),m=x[0],p=x[1],v=Object(a.useState)(!1),f=Object(o.a)(v,2),g=f[0],k=f[1],w=Object(a.useState)(!1),C=Object(o.a)(w,2),N=C[0],T=C[1],A=Object(a.useState)(!1),F=Object(o.a)(A,2),E=F[0],D=F[1],M={id:Object(i.h)().id},I=Object(i.f)().state.value;if(!r)return Object(j.jsx)(i.a,{to:"/"});Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne(r,M.id);case 3:t=e.sent,u(t.data.module),h(t.data.module.name),p(t.data.module.content),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])}))),[E]);var P=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,ce(r,M.id,b,m,I);case 4:k(!1),D(!0),t({heading:"Module Edit Successful!",message:"Module ".concat(b," Edited Successfully!"),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({heading:"Edit Module Failed with error: "+e.t0.message,message:"Failed to edit the Module",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(S.a)(y.a.mark((function e(a){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,se(r,M.id,I);case 4:k(!1),T(!0),t({heading:"Module Deletion Successful!",message:"Module ".concat(b," Deleted Successfully!"),variant:"success"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({heading:"Delete Module Failed with error: "+e.t0.message,message:"Failed to delete the Module",variant:"danger"});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return N?Object(j.jsx)(i.a,{to:"/courses/".concat(I,"/")}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)(G.a,{onClick:function(){return T(!0)},children:"Back"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-3",children:Object(j.jsxs)("div",{className:"container shadow",children:[Object(j.jsx)("h2",{children:s.name}),Object(j.jsx)("h5",{children:s.content}),Object(j.jsx)(G.a,{onClick:function(){return k(!0)},children:"Edit"}),Object(j.jsx)(G.a,{variant:"danger",onClick:L,children:"Delete"})]})})})})]}),Object(j.jsx)("div",{children:Object(j.jsxs)(ee.a,{show:g,onHide:function(){return k(!1)},children:[Object(j.jsx)(ee.a.Header,{closeButton:!0,children:Object(j.jsx)(ee.a.Title,{children:"Edit Module Information"})}),Object(j.jsx)(ee.a.Body,{children:Object(j.jsxs)(z.a,{children:[Object(j.jsx)(z.a.Group,{controlId:"moduleName",children:Object(j.jsx)(te.a,{label:"Module Name",children:Object(j.jsx)(z.a.Control,{required:!0,name:"moduleName",value:b,type:"text",placeholder:"Module Name",onChange:function(e){return h(e.target.value)}})})}),Object(j.jsx)(z.a.Group,{controlId:"moduleContent",children:Object(j.jsx)(te.a,{label:"Module Content",children:Object(j.jsx)(z.a.Control,{required:!0,name:"moduleContent",value:m,type:"text",as:"textarea",rows:"6",placeholder:"Module Content",onChange:function(e){return p(e.target.value)}})})})]})}),Object(j.jsxs)(ee.a.Footer,{children:[Object(j.jsx)(G.a,{variant:"secondary",onClick:function(){return k(!1)},children:"Close"}),Object(j.jsx)(G.a,{variant:"primary",onClick:P,children:"Save Changes"})]})]})})]})},pe=function(e){e.msgAlert;var t=e.user,r=(e.userType,Object(a.useState)([])),n=Object(o.a)(r,2),c=n[0],s=n[1],u=Object(a.useState)([]),l=Object(o.a)(u,2),d=l[0],b=l[1],h=Object(a.useState)([]),O=Object(o.a)(h,2),m=O[0],p=O[1],v=Object(a.useState)(!1),f=Object(o.a)(v,2),g=f[0],k=f[1],w=Object(a.useState)(!1),C=Object(o.a)(w,2),N=C[0],T=C[1],A={id:Object(i.h)().id};if(!t)return Object(j.jsx)(i.a,{to:"/"});Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var r,a,n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(t,A.id);case 3:return r=e.sent,s(r.data.course),e.prev=5,e.next=8,ae(t,A.id);case 8:return a=e.sent,b(a.data.modules),k(!1),e.prev=11,e.next=14,ie(t,A.id);case 14:n=e.sent,p(n.data.completed_module.map((function(e){return e.module_complete.id}))),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(11),console.error(e.t0);case 21:e.next=26;break;case 23:e.prev=23,e.t1=e.catch(5),console.error(e.t1);case 26:e.next=31;break;case 28:e.prev=28,e.t2=e.catch(0),console.error(e.t2);case 31:case"end":return e.stop()}}),e,null,[[0,28],[5,23],[11,18]])}))),[]);var F=d.filter((function(e){return m.includes(e.id)?(e.completed="\u2705",e):e}),[g]).map((function(e){return Object(j.jsxs)("li",{children:[Object(j.jsx)(x.b,{to:"/courses/modules/".concat(e.id,"/"),state:{course:A.id,completed:e.completed},children:Object(j.jsxs)("h3",{className:"container shadow-lg",children:[e.completed,e.name]})}),Object(j.jsx)("hr",{})]},e.id)})),E=Object(j.jsx)("ol",{className:"container",children:F});return N?Object(j.jsx)(i.a,{to:"/courses/enrolled/"}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)(G.a,{onClick:function(){return T(!0)},children:"Back"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-3",children:[Object(j.jsxs)("div",{className:"container shadow",children:[Object(j.jsx)("h1",{children:c.name}),Object(j.jsx)("h5",{children:c.description}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"col-6 container",children:[Object(j.jsx)("h3",{children:"Modules:"}),g?Object(j.jsx)(X.a,{animation:"border",variant:"primary"}):E]})]})})]})})},ve=function(e){e.msgAlert;var t=e.user,r=(e.userType,Object(a.useState)([])),n=Object(o.a)(r,2),c=n[0],s=n[1],u=Object(a.useState)(!1),l=Object(o.a)(u,2),d=l[0],b=l[1],h=Object(a.useState)(!1),O=Object(o.a)(h,2),x=O[0],m=O[1],p={id:Object(i.h)().id},v=Object(i.f)(),f=v.state.course,g=v.state.completed;if(!t)return Object(j.jsx)(i.a,{to:"/"});Object(a.useEffect)(Object(S.a)(y.a.mark((function e(){var r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"\u2705"===g&&m(!0),e.next=4,ne(t,p.id);case 4:r=e.sent,s(r.data.module),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[]);var k=function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe(t,p.id);case 3:b(!0),e.next=8;break;case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return d?Object(j.jsx)(i.a,{to:"/courses/".concat(f,"/")}):Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{children:[Object(j.jsx)("br",{}),Object(j.jsx)(G.a,{onClick:function(){return b(!0)},children:"Back"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-12",children:[Object(j.jsxs)("div",{className:"container",style:{textAlign:"center"},children:[Object(j.jsx)("h1",{children:c.name}),Object(j.jsx)("hr",{}),Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{children:Object(j.jsx)("h5",{style:{textAlign:"center"},children:c.content})}),Object(j.jsx)("div",{children:x?Object(j.jsx)("p",{style:{position:"absolute",bottom:"5vh",right:"5vw",fontWeight:"bold",color:"red"},children:"Already Completed"}):Object(j.jsx)("a",{style:{position:"absolute",bottom:"5vh",right:"5vw",textDecoration:"underline",color:"blue",cursor:"pointer"},onClick:function(){return k()},children:"Mark Completed"})})]})})})]})})},fe=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),r=t[0],n=t[1],c=Object(a.useState)([]),l=Object(o.a)(c,2),b=l[0],h=l[1],O=Object(a.useState)(null),x=Object(o.a)(O,2),m=x[0],p=x[1],v=function(e){var t=e.heading,r=e.message,a=e.variant,n=Object(u.a)();h((function(e){return[].concat(Object(s.a)(e),[{heading:t,message:r,variant:a,id:n}])}))};Object(a.useEffect)((function(){r&&(r.isStudent?p("Student"):r.isTutor?p("Tutor"):r.isAuthor&&p("Author"))}),[r]);var f=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{path:"/courses/:id/",element:Object(j.jsx)(pe,{msgAlert:v,user:r,userType:m})}),Object(j.jsx)(i.b,{path:"/courses/enrolled/",element:Object(j.jsx)($,{msgAlert:v,user:r,userType:m})}),Object(j.jsx)(i.b,{path:"/courses/modules/:id/",element:Object(j.jsx)(ve,{msgAlert:v,user:r,userType:m})})]}),g=Object(j.jsx)(j.Fragment,{}),C=Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(i.b,{path:"/courses/:id/",element:Object(j.jsx)(he,{msgAlert:v,user:r,userType:m})}),Object(j.jsx)(i.b,{path:"/courses/modules/:id/",element:Object(j.jsx)(me,{msgAlert:v,user:r,userType:m})})]});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(k,{user:r,userType:m}),b.map((function(e){return Object(j.jsx)(d,{heading:e.heading,variant:e.variant,message:e.message,id:e.id},e.id)})),Object(j.jsx)("main",{className:"container",children:Object(j.jsxs)(i.d,{children:[Object(j.jsx)(i.b,{path:"/sign-up/",element:Object(j.jsx)(L,{msgAlert:v,setUser:n})}),Object(j.jsx)(i.b,{path:"/sign-in/",element:Object(j.jsx)(q,{msgAlert:v,setUser:n})}),Object(j.jsx)(i.b,{path:"/sign-out/",element:Object(j.jsx)(U,{msgAlert:v,user:r,clearUserType:function(){return p(null)},clearUser:function(){return n(null)}})}),Object(j.jsx)(i.b,{path:"/change-password/",element:Object(j.jsx)(B,{msgAlert:v,user:r})}),Object(j.jsx)(i.b,{path:"/profile/",element:Object(j.jsx)(Oe,{msgAlert:v,user:r})}),Object(j.jsx)(i.b,{path:"/",element:Object(j.jsx)(w,{userType:m})}),Object(j.jsx)(i.b,{path:"/courses/",element:Object(j.jsx)(Z,{user:r,userType:m})}),"Student"===m?f:"Tutor"===m?g:"Author"===m?C:"",Object(j.jsx)(i.b,{path:"/courses/create/",element:Object(j.jsx)(V,{msgAlert:v,user:r})}),Object(j.jsx)(i.b,{path:"/courses/:id/modules/create/",element:Object(j.jsx)(xe,{msgAlert:v,user:r})})]})})]})},ge=Object(j.jsx)(x.a,{basename:"/Only-Exams-Client",children:Object(j.jsx)(fe,{})});c.a.render(ge,document.getElementById("root"))},86:function(e,t,r){},87:function(e,t,r){},92:function(e,t,r){}},[[114,1,2]]]);
//# sourceMappingURL=main.a2a628b5.chunk.js.map