(this["webpackJsonpmi-space"]=this["webpackJsonpmi-space"]||[]).push([[58],{496:function(e,a,t){"use strict";var l=t(19),s=t(49),n=t(2),r=t.n(n),i=t(61),c=t.n(i),o=t(489),m=t.n(o),u=t(490),f=c.a.oneOfType([c.a.number,c.a.string]),d=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),h={tag:u.q,xs:d,sm:d,md:d,lg:d,xl:d,className:c.a.string,cssModule:c.a.object,widths:c.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,n=e.widths,i=e.tag,c=Object(s.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(a,l){var s=e[a];if(delete c[a],s||""===s){var n=!l;if(Object(u.k)(s)){var r,i=n?"-":"-"+a+"-",f=g(n,a,s.size);o.push(Object(u.m)(m()(((r={})[f]=s.size||""===s.size,r["order"+i+s.order]=s.order||0===s.order,r["offset"+i+s.offset]=s.offset||0===s.offset,r)),t))}else{var d=g(n,a,s);o.push(d)}}})),o.length||o.push("col");var f=Object(u.m)(m()(a,o),t);return r.a.createElement(i,Object(l.a)({},c,{className:f}))};E.propTypes=h,E.defaultProps=p,a.a=E},497:function(e,a,t){"use strict";var l=t(19),s=t(49),n=t(2),r=t.n(n),i=t(61),c=t.n(i),o=t(489),m=t.n(o),u=t(490),f=c.a.oneOfType([c.a.number,c.a.string]),d={tag:u.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},h={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,i=e.tag,c=e.form,o=e.widths,f=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];o.forEach((function(a,t){var l=e[a];if(delete f[a],l){var s=!t;d.push(s?"row-cols-"+l:"row-cols-"+a+"-"+l)}}));var h=Object(u.m)(m()(a,n?"no-gutters":null,c?"form-row":"row",d),t);return r.a.createElement(i,Object(l.a)({},f,{className:h}))};p.propTypes=d,p.defaultProps=h,a.a=p},516:function(e,a,t){"use strict";var l=t(19),s=t(49),n=t(494),r=t(2),i=t.n(r),c=t(61),o=t.n(c),m=t(489),u=t.n(m),f=t(513),d=t(490),h=Object(n.a)({},f.Transition.propTypes,{children:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node]),tag:d.q,baseClass:o.a.string,baseClassActive:o.a.string,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])}),p=Object(n.a)({},f.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:d.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var a=e.tag,t=e.baseClass,n=e.baseClassActive,r=e.className,c=e.cssModule,o=e.children,m=e.innerRef,h=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),p=Object(d.o)(h,d.c),g=Object(d.n)(h,d.c);return i.a.createElement(f.Transition,p,(function(e){var s="entered"===e,f=Object(d.m)(u()(r,t,s&&n),c);return i.a.createElement(a,Object(l.a)({className:f},g,{ref:m}),o)}))}g.propTypes=h,g.defaultProps=p,a.a=g},789:function(e,a,t){"use strict";var l=t(19),s=t(49),n=t(494),r=t(2),i=t.n(r),c=t(61),o=t.n(c),m=t(489),u=t.n(m),f=t(490),d=t(516),h={children:o.a.node,className:o.a.string,closeClassName:o.a.string,closeAriaLabel:o.a.string,cssModule:o.a.object,color:o.a.string,fade:o.a.bool,isOpen:o.a.bool,toggle:o.a.func,tag:f.q,transition:o.a.shape(d.a.propTypes),innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},p={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:Object(n.a)({},d.a.defaultProps,{unmountOnExit:!0})};function g(e){var a=e.className,t=e.closeClassName,r=e.closeAriaLabel,c=e.cssModule,o=e.tag,m=e.color,h=e.isOpen,p=e.toggle,g=e.children,E=e.transition,b=e.fade,k=e.innerRef,v=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(f.m)(u()(a,"alert","alert-"+m,{"alert-dismissible":p}),c),O=Object(f.m)(u()("close",t),c),N=Object(n.a)({},d.a.defaultProps,{},E,{baseClass:b?E.baseClass:"",timeout:b?E.timeout:0});return i.a.createElement(d.a,Object(l.a)({},v,N,{tag:o,className:y,in:h,role:"alert",innerRef:k}),p?i.a.createElement("button",{type:"button",className:O,"aria-label":r,onClick:p},i.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,g)}g.propTypes=h,g.defaultProps=p,a.a=g},854:function(e,a,t){"use strict";t.r(a);var l=t(151),s=t(152),n=t(155),r=t(154),i=t(153),c=t(2),o=t.n(c),m=t(497),u=t(496),f=t(501),d=t(503),h=t(502),p=t(789),g=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var s;return Object(l.a)(this,t),(s=a.call(this,e)).state={visible:!0},s.onDismiss=s.onDismiss.bind(Object(n.a)(s)),s}return Object(s.a)(t,[{key:"onDismiss",value:function(){this.setState({visible:!1})}},{key:"render",value:function(){return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("div",{className:"card-header-actions"},o.a.createElement("a",{href:"https://reactstrap.github.io/components/alerts/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},o.a.createElement("small",{className:"text-muted"},"docs")))),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"primary"},"This is a primary alert \u2014 check it out!"),o.a.createElement(p.a,{color:"secondary"},"This is a secondary alert \u2014 check it out!"),o.a.createElement(p.a,{color:"success"},"This is a success alert \u2014 check it out!"),o.a.createElement(p.a,{color:"danger"},"This is a danger alert \u2014 check it out!"),o.a.createElement(p.a,{color:"warning"},"This is a warning alert \u2014 check it out!"),o.a.createElement(p.a,{color:"info"},"This is a info alert \u2014 check it out!"),o.a.createElement(p.a,{color:"light"},"This is a light alert \u2014 check it out!"),o.a.createElement(p.a,{color:"dark"},"This is a dark alert \u2014 check it out!")))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null," use ",o.a.createElement("code",null,".alert-link")," to provide links")),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"primary"},"This is a primary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"secondary"},"This is a secondary alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"success"},"This is a success alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"danger"},"This is a danger alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"warning"},"This is a warning alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"info"},"This is a info alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"light"},"This is a light alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."),o.a.createElement(p.a,{color:"dark"},"This is a dark alert with ",o.a.createElement("a",{href:"#",className:"alert-link"},"an example link"),". Give it a click if you like."))))),o.a.createElement(m.a,null,o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"additional content")),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"success"},o.a.createElement("h4",{className:"alert-heading"},"Well done!"),o.a.createElement("p",null,"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."),o.a.createElement("hr",null),o.a.createElement("p",{className:"mb-0"},"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."))))),o.a.createElement(u.a,{xs:"12",md:"6"},o.a.createElement(f.a,null,o.a.createElement(d.a,null,o.a.createElement("i",{className:"fa fa-align-justify"}),o.a.createElement("strong",null,"Alerts"),o.a.createElement("small",null,"dismissing")),o.a.createElement(h.a,null,o.a.createElement(p.a,{color:"info",isOpen:this.state.visible,toggle:this.onDismiss},"I am an alert and I can be dismissed!"))))))}}]),t}(c.Component);a.default=g}}]);
//# sourceMappingURL=58.baa097d5.chunk.js.map