"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[136],{136:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var a=n(885),s=n(2791),r=n(8602),c=n(5264),i="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",o="ContactForm_input__Bl93P",u="ContactForm_btn__wll+u",m=n(9354),d=n(184);function h(){var e=(0,m.wY)().data,t=(0,m.F3)(),n=(0,a.Z)(t,2),h=n[0],f=n[1].isLoading,_=(0,s.useState)(""),p=(0,a.Z)(_,2),b=p[0],x=p[1],j=(0,s.useState)(""),v=(0,a.Z)(j,2),N=v[0],C=v[1],w=function(){return function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":x(a);break;case"number":C(a);break;default:return}}};return(0,d.jsxs)("form",{className:i,onSubmit:function(t){if(t.preventDefault(),e.find((function(e){return e.name===b})))return c.Notify.info("".concat(b," is already in the contact list"));h({name:b,number:N}),c.Notify.info("".concat(b," was added to the contact list")),x(""),C("")},children:[(0,d.jsx)("label",{className:l,htmlFor:"name",children:"Name"}),(0,d.jsx)("input",{className:o,type:"text",name:"name",value:b,onChange:w(),pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:l,htmlFor:"number",children:"Number"}),(0,d.jsx)("input",{className:o,type:"tel",name:"number",value:N,onChange:w(),pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:u,type:"submit",disabled:f,children:"Add contact"}),f&&(0,d.jsx)(r.s,{size:"30"})]})}var f=n(5048),_="Filter_label__vEd1E",p="Filter_input__N7T3z",b=n(1538);function x(){var e=(0,f.v9)(b.zK).name,t=(0,f.I0)();return(0,d.jsxs)("label",{className:_,children:["Find contacts by name",(0,d.jsx)("input",{className:p,type:"text",name:"filter",value:e,onChange:function(e){t((0,b.hX)(e.target.value))}})]})}var j="ContactList_list__csErn",v="ContactItem_item__pER5Q",N="ContactItem_btn__4QYtA",C="ContactItem_phone__rNUF7";function w(e){var t=e.id,n=e.name,s=e.number,i=(0,m.Wf)(),l=(0,a.Z)(i,2),o=l[0],u=l[1].isLoading;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("li",{className:v,children:[(0,d.jsx)("p",{children:n}),(0,d.jsx)("p",{className:C,children:s}),(0,d.jsx)("button",{className:N,type:"button",onClick:function(){return function(e){o(e),c.Notify.info("The contact with id ".concat(e," was deleted"))}(t)},children:"Delete"})]},t),u&&(0,d.jsx)(r.s,{size:"30"})]})}function y(){var e=(0,f.v9)(b.zK),t=(0,m.wY)(),n=t.data;if(t.isSuccess){var a=n.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}));return(0,d.jsx)("ul",{className:j,children:n&&a.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,d.jsx)(w,{id:t,name:n,number:a},t)}))})}}function F(){return(0,d.jsxs)("div",{style:{alignItems:"center",padding:"50px"},children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(h,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(x,{}),(0,d.jsx)(y,{})]})}}}]);
//# sourceMappingURL=136.e47a2c9b.chunk.js.map