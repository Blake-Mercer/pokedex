(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{45:function(e,t,a){},47:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s,c,n,r=a(1),i=a.n(r),l=a(37),o=a.n(l),d=(a(45),a(11)),h=a(12),j=a(14),b=a(13),m=a(20),p=a(2),u=(a(46),a(47),a.p,a(0)),x=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-md navbar-dark bg-dark fixed-top",children:Object(u.jsx)("a",{className:"navbar-brand col-sm-3 col-md-2 mr-0 align-items-center",href:"/",children:"Blak\xe9dex"})})})},O=a(8),v=a.n(O),f=a(15),g=a(19),N=a(9),k=a.n(N),w=a(21),y=a(22),C=y.a.img(s||(s=Object(w.a)(["\n  width: 5rem;\n  height: 5rem;\n  display: none;\n"]))),A=y.a.div(c||(c=Object(w.a)(["\n  box-shadow: 2px 2px 5px blue, 5px 5px 8px red, 10px 10px 6px green;\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  &:hover {\n    box-shadow: 5px 5px 8px blue, 10px 10px 8px red, 15px 15px 8px green;\n  }\n  -moz-user-select: none;\n  -website-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -o-user-select: none;\n"]))),F=Object(y.a)(m.b)(n||(n=Object(w.a)(["\n  text-decoration: none;\n  color: black;\n  &:focus,\n  &:visited,\n  &:link,\n  &:active {\n    text-decoration: none;\n  }\n"]))),S=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",imageUrl:"",pokeIndex:"",pokemonImg:null,loading:!0,error:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.url.split("/")[6],s="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a,".png");this.setState({pokeIndex:a,name:t,imageUrl:s})}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{className:"col-md-3 col-sm-3 col-6 mb-5",children:Object(u.jsx)(F,{to:"pokemon/".concat(this.state.pokeIndex),children:Object(u.jsxs)(A,{className:"card rounded-3 border-info",children:[Object(u.jsx)("div",{className:"card-header",children:this.state.pokeIndex}),this.state.loading?Object(u.jsx)("div",{className:"loader mx-auto"}):null,Object(u.jsx)(C,{className:"card-img-top rounded mx-auto mt-2",src:this.state.imageUrl,onLoad:function(){return e.setState({loading:!1})},onError:function(){return e.setState({error:!0})},style:this.state.error?{display:"none"}:this.state.loading?null:{display:"block"}}),this.state.error?Object(u.jsx)("h6",{className:"mx-auto",children:Object(u.jsx)("span",{className:"badge badge-danger mt-2",children:"Error Bro!"})}):null,Object(u.jsx)("div",{className:"card-body mx-auto",children:Object(u.jsx)("div",{className:"card-title",children:this.state.name.toLowerCase().split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})})]})})})}}]),a}(r.Component);function B(){var e=Object(r.useState)([]),t=Object(g.a)(e,2),a=t[0],s=t[1],c=Object(r.useState)(""),n=Object(g.a)(c,2),i=n[0],l=n[1],o=Object(r.useState)(""),d=Object(g.a)(o,2),h=d[0],j=d[1],b=Object(r.useState)(!0),m=Object(g.a)(b,2),p=m[0],x=m[1],O="https://pokeapi.co/api/v2/pokemon";Object(r.useEffect)((function(){function e(){return(e=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.a.get(O);case 2:t=e.sent,l(t.data.next),j(t.data.previous),s(t.data.results),x(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var N=function(){var e=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,k.a.get(i);case 3:t=e.sent,l(t.data.next),j(t.data.previous),s(t.data.results),x(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return x(!0),e.next=5,k.a.get(h);case 5:t=e.sent,l(t.data.next),j(t.data.previous),s(t.data.results),x(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=Object(u.jsx)("div",{className:"btn",children:Object(u.jsx)("button",{onClick:N,children:"Next"})});return null!=h&&(y=Object(u.jsxs)("div",{className:"btn",children:[Object(u.jsx)("button",{onClick:w,children:"Prev"}),Object(u.jsx)("button",{onClick:N,children:"Next"})]})),Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"col",children:[y,p?Object(u.jsx)("h1",{children:"Loading Pokemon"}):Object(u.jsx)("div",{className:"row",children:a.map((function(e){return Object(u.jsx)(S,{name:e.name,url:e.url},e.name)}))})]})})}var I={bug:"B1C12E",dark:"4F3A2D",dragon:"755EDF",electric:"FCBC17",fairy:"F4B1F4",fighting:"823551D",fire:"E73B0C",flying:"A3B3F7",ghost:"6060B2",grass:"74C236",ground:"D3B357",ice:"A3E7FD",normal:"C8C4BC",poison:"934594",psychic:"ED4882",rock:"B9A156",steel:"B5B5C3",water:"3295F6"},U=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var s=arguments.length,c=new Array(s),n=0;n<s;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={name:"",pokeIndex:"",imageUrl:"",types:[],description:"",stats:{hp:"",attack:"",defense:"",speed:""},height:"",weight:"",eggGroup:"",abilities:"",genderRatioMale:"",genderRatioFemale:"",evs:"",hatchSteps:""},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(f.a)(v.a.mark((function e(){var t,a,s,c,n,r,i,l,o,d,h,j,b,m,p,u=this;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.pokeIndex,a="https://pokeapi.co/api/v2/pokemon/".concat(t,"/"),s="https://pokeapi.co/api/v2/pokemon-species/".concat(t,"/"),e.next=5,k.a.get(a);case 5:return c=e.sent,n=c.data.name,r=c.data.sprites.front_default,"",i="".hp,l="".attack,o="".defense,d="".speed,c.data.stats.map((function(e){switch(e.stat.name){case"hp":i=e.base_stat;break;case"attack":l=e.base_stat;break;case"defense":o=e.base_stat;break;case"speed":d=e.base_stat;break;default:return e}})),h=Math.round(100*(.328084*c.data.height+1e-4))/100,j=Math.round(100*(.220462*c.data.weight+1e-4))/100,b=c.data.types.map((function(e){return e.type.name})),m=c.data.abilities.map((function(e){return e.ability.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),p=c.data.stats.filter((function(e){return e.effort>0})).map((function(e){return"".concat(e.effort," ").concat(e.stat.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" "))})).join(", "),e.next=17,k.a.get(s).then((function(e){var t="";e.data.flavor_text_entries.some((function(e){if("en"===e.language.name)return t=e.flavor_text}));var a=e.data.gender_rate,s=12.5*a,c=12.5*(8-a),n=Math.round(100/255*e.data.capture_rate),r=e.data.egg_groups.map((function(e){return e.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")})).join(", "),i=255*(e.data.hatch_counter+1);u.setState({description:t,genderRatioMale:c,genderRatioFemale:s,catchRate:n,eggGroups:r,hatchSteps:i})}));case 17:this.setState({imageUrl:r,pokeIndex:t,name:n,types:b,stats:{hp:i,attack:l,defense:o,speed:d},height:h,weight:j,abilities:m,evs:p});case 18:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=[];for(var t in this.state.stats)e.push({id:t,config:this.state.stats[t]});var a=e.map((function(e){return Object(u.jsxs)("div",{className:"row align-items-center",children:[Object(u.jsx)("div",{className:"col-12 col-md-3",children:e.id.toLowerCase().split("special").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}),Object(u.jsx)("div",{className:"col-12 col-md-9",children:Object(u.jsx)("div",{className:"progress",children:Object(u.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(e.config,"%")},"aria-valuenow":"25","aria-valuemax":"100","aria-valuemin":"0",children:Object(u.jsx)("small",{children:e.config})})})})]},e.id)}));return Object(u.jsx)("div",{className:"col",children:Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("div",{className:"card-header",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-5",children:Object(u.jsx)("h5",{children:this.state.pokeIndex})}),Object(u.jsx)("div",{className:"col-7",children:Object(u.jsx)("div",{className:"float-right",children:this.state.types.map((function(e){return Object(u.jsx)("span",{className:"badge badge-primary badge-pill mr-1",style:{backgroundColor:"#".concat(I[e]),color:"white"},children:e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")},e)}))})})]})}),Object(u.jsx)("div",{className:"card-body",children:Object(u.jsxs)("div",{className:"row align-items-center",children:[Object(u.jsx)("div",{className:"col-sm-3",children:Object(u.jsx)("img",{src:this.state.imageUrl,className:"card-img-top rounded mx-auto mt-2",alt:""})}),Object(u.jsxs)("div",{className:"col-sm-9",children:[Object(u.jsx)("h4",{className:"mx-auto",children:this.state.name.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.substring(1)})).join(" ")}),a]}),Object(u.jsx)("div",{className:"row mt-1",children:Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("p",{className:"p-2",children:this.state.description})})})]})}),Object(u.jsx)("hr",{}),Object(u.jsxs)("div",{className:"card-body",children:[Object(u.jsx)("h5",{className:"card-title text-center",children:"Profile"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Height:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("h6",{className:"float-left",children:[this.state.height," ft."]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Weight:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("h6",{className:"float-left",children:[this.state.weight," lbs"]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Catch Rate:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("h6",{className:"float-left",children:[this.state.catchRate,"%"]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Gender Ratio:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("div",{className:"progress",children:[Object(u.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioFemale,"%"),backgroundColor:"#c2185b"},"aria-valuenow":"15","aria-valuemin":"0","aria-valuemax":"100",children:Object(u.jsx)("small",{children:this.state.genderRatioFemale})}),Object(u.jsx)("div",{className:"progress-bar",role:"progressbar",style:{width:"".concat(this.state.genderRatioMale,"%"),backgroundColor:"#1976d2"},"aria-valuenow":"30","aria-valuemin":"0","aria-valuemax":"100",children:Object(u.jsx)("small",{children:this.state.genderRatioMale})})]})})]})}),Object(u.jsx)("div",{className:"col-md-6",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Egg Groups:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsxs)("h6",{className:"float-left",children:[this.state.eggGroups," "]})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Hatch Steps:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-left",children:this.state.hatchSteps})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"Abilities:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-left",children:this.state.abilities})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-right",children:"EVs:"})}),Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("h6",{className:"float-left",children:this.state.evs})})]})})]})]}),Object(u.jsxs)("div",{className:"card-footer text-muted",children:["Sourced From"," ",Object(u.jsx)("a",{href:"https://pokeapi.co/",rel:"noreferrer",target:"_blank",className:"card-link",children:"PokeAPI.co"})]})]})})}}]),a}(r.Component),_=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(u.jsx)(m.a,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)(p.c,{children:[Object(u.jsx)(p.a,{path:"/",exact:!0,component:B}),Object(u.jsx)(p.a,{path:"/pokemon/:pokeIndex",exact:!0,component:U})]})})]})})}}]),a}(r.Component),R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(t){var a=t.getCLS,s=t.getFID,c=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),s(e),c(e),n(e),r(e)}))};o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(_,{})}),document.getElementById("root")),R()}},[[72,1,2]]]);
//# sourceMappingURL=main.afbf187f.chunk.js.map