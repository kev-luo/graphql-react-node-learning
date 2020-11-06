(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{78:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n(0),i=n.n(a),r=n(30),s=n.n(r),o=(n(78),n(59)),l=n(10),j=n(35),d=n(12),h=n(43),b=n(44),u=n(36),O=n(53),x=n(51),p=n(96),m=n(55),f=n(63),v=n.n(f);function y(){var e=Object(m.a)(["\nquery($id: ID) {\n  project(id: $id) {\n    id\n    name\n    description\n    skills {\n      name\n      projects {\n        name\n        id\n      }\n    }\n  }\n}\n"]);return y=function(){return e},e}function k(){var e=Object(m.a)(["\n  {\n    skills {\n      name\n      id\n    }\n  }\n"]);return k=function(){return e},e}function g(){var e=Object(m.a)(["\n{\n  projects {\n    name\n    description\n    id\n  }\n}\n"]);return g=function(){return e},e}var w=v()(g()),C=(v()(k()),v()(y())),I=n(89),L=n(92),S=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"displayProjectDetails",value:function(){var e=this.props.data.project;return e?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(L.a.Header,{children:Object(c.jsx)(L.a.Title,{children:e.name})}),Object(c.jsxs)(L.a.Body,{children:[Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("h6",{children:"Skills and Other Projects: "}),Object(c.jsx)("ul",{children:e.skills.map((function(t){return t.projects.length>1?Object(c.jsxs)("li",{children:[t.name,Object(c.jsx)("ul",{children:t.projects.map((function(t){return t.id!==e.id?Object(c.jsx)("li",{children:t.name}):void 0}))})]}):Object(c.jsx)("li",{children:t.name})}))})]})]}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(L.a.Header,{closeButton:!0,children:Object(c.jsx)(L.a.Title,{children:"Project details loading..."})})})}},{key:"render",value:function(){return Object(c.jsx)(c.Fragment,{children:this.displayProjectDetails()})}}]),n}(a.Component),H=Object(p.a)(C,{options:function(e){return{variables:{id:e.projectId}}}})(S),B=function(e){Object(O.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(h.a)(this,n),(c=t.call(this,e)).handleShow=c.handleShow.bind(Object(u.a)(c)),c.handleClose=c.handleClose.bind(Object(u.a)(c)),c.state={selected:null,show:!1},c}return Object(b.a)(n,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"displayProjects",value:function(){var e=this,t=this.props.data;return t.loading?Object(c.jsx)("div",{children:"Loading projects..."}):t.projects.map((function(t){return Object(c.jsx)("div",{className:"portfolioCard",onClick:function(n){e.setState({selected:t.id,show:!0})},children:Object(c.jsx)("h3",{children:t.name})},t.id)}))}},{key:"render",value:function(){return Object(c.jsxs)(I.a,{children:[Object(c.jsx)("div",{className:"container",children:this.displayProjects()}),Object(c.jsx)(L.a,{show:this.state.show,onHide:this.handleClose,"aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:Object(c.jsx)(H,{setShow:this.state.show,projectId:this.state.selected})})]})}}]),n}(a.Component),N=Object(p.a)(w)(B),A=n(90),P=n(72),T=n(97);function M(){return Object(c.jsx)(I.a,{fluid:!0,children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(P.a,{xs:2}),Object(c.jsx)(P.a,{xs:8,children:Object(c.jsxs)(T.a,{children:[Object(c.jsx)(T.a.Header,{className:"cardHead",children:"About Me"}),Object(c.jsxs)(T.a.Body,{children:["Welcome to my portfolio site! The launch of this site marks the beginning of my work towards becoming a web developer. While there's not much to look at in its current state, the plan is to add content over the duration of the coding bootcamp I'm enrolled in. All good things take time and consistent effort, and I hope to prove that in the coming months.",Object(c.jsx)("br",{}),"A little about my background... I grew up in Austin, TX and went to college at Case Western Reserve University in Cleveland, OH, where i received a BS and Master's in Accountancy. I transitioned to a full-time role at a forensic-accounting firm, Meaden & Moore, where i worked for two and a half years. Through the daily use of Excel formulas and a little VBA, I gained an interest for coding. In my spare time I enjoy playing soccer, reading, and cycling.",Object(c.jsx)("br",{}),"To view my complete portfolio, please click on the Github icon to the left. If you'd like to reach out, please click on the LinkedIn icon to the left. Alternatively, you can reach me at ",Object(c.jsx)("a",{href:"#",children:"kvn.luo@gmail.com"}),".",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(T.a.Link,{href:"https://www.linkedin.com/in/kevinluo49/",children:"LinkedIn"}),Object(c.jsx)(T.a.Link,{href:"https://github.com/kev-luo",children:"Github"})]})]})}),Object(c.jsx)(P.a,{xs:2})]})})}var G=n(93),D=n(91);var E=function(){return Object(c.jsx)(I.a,{fluid:!0,children:Object(c.jsxs)(A.a,{children:[Object(c.jsx)(P.a,{xs:3}),Object(c.jsx)(P.a,{xs:6,children:Object(c.jsxs)(T.a,{children:[Object(c.jsx)(T.a.Header,{className:"cardHead",children:" Contact"}),Object(c.jsx)(T.a.Body,{children:Object(c.jsxs)(G.a,{children:[Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"Name"}),Object(c.jsx)(G.a.Control,{type:"text",placeholder:"John Smith"})]}),Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"Email"}),Object(c.jsx)(G.a.Control,{type:"email",placeholder:"johnsmith@mail.com"})]}),Object(c.jsxs)(G.a.Group,{children:[Object(c.jsx)(G.a.Label,{children:"Message"}),Object(c.jsx)(G.a.Control,{as:"textarea",placeholder:"Textarea"})]}),Object(c.jsx)(D.a,{className:"mr-2",children:"Submit"}),Object(c.jsx)(D.a,{children:"Cancel"})]})})]})}),Object(c.jsx)(P.a,{xs:3})]})})},F=n(95),J=n(94);var W=function(){return Object(c.jsxs)(F.a,{bg:"dark",className:"mb-5",children:[Object(c.jsx)(F.a.Brand,{children:"Kevin Luo"}),Object(c.jsxs)(J.a,{className:"justify-content-end",children:[Object(c.jsx)(J.a.Link,{children:Object(c.jsx)(j.b,{to:"/",children:"Home"})}),Object(c.jsx)(J.a.Link,{children:Object(c.jsx)(j.b,{to:"/portfolio",children:"Portfolio"})}),Object(c.jsx)(J.a.Link,{children:Object(c.jsx)(j.c,{to:"/contact",children:"Contact"})})]})]})},q=new o.a({uri:"/graphql"});var $=function(){return Object(c.jsx)(l.b,{client:q,children:Object(c.jsxs)(j.a,{children:[Object(c.jsx)(W,{}),Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/",component:M}),Object(c.jsx)(d.a,{path:"/portfolio",component:N}),Object(c.jsx)(d.a,{path:"/contact",component:E})]})]})})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)($,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.b45c82c1.chunk.js.map