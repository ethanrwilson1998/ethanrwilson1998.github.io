(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{EOjV:function(t,e,n){"use strict";n.r(e),n.d(e,"ion_route",function(){return u}),n.d(e,"ion_route_redirect",function(){return s}),n.d(e,"ion_router",function(){return D}),n.d(e,"ion_router_link",function(){return S});var o=n("mrSG"),r=n("aiep"),i=(n("wc4K"),n("j5a+")),a=n("l1ru"),u=function(){function t(t){Object(r.m)(this,t),this.url="",this.ionRouteDataChanged=Object(r.d)(this,"ionRouteDataChanged",7)}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],o=e?Object.keys(e):[];if(n.length===o.length)for(var r=0,i=n;r<i.length;r++){var a=i[r];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:!0,configurable:!0}),t}(),s=function(){function t(t){Object(r.m)(this,t),this.ionRouteRedirectChanged=Object(r.d)(this,"ionRouteRedirectChanged",7)}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"watchers",{get:function(){return{from:["propDidChange"],to:["propDidChange"]}},enumerable:!0,configurable:!0}),t}(),c=function(t){return"/"+t.filter(function(t){return t.length>0}).join("/")},h=function(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e},l=function(t,e,n,r,i){return void 0===i&&(i=!1),o.b(void 0,void 0,void 0,function(){var a,u,s,c;return o.e(this,function(o){switch(o.label){case 0:return o.trys.push([0,6,,7]),a=d(t),r>=e.length||!a?[2,i]:[4,a.componentOnReady()];case 1:return o.sent(),[4,a.setRouteId((u=e[r]).id,u.params,n)];case 2:return(s=o.sent()).changed&&(n="root",i=!0),[4,l(s.element,e,n,r+1,i)];case 3:return i=o.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:o.sent(),o.label=5;case 5:return[2,i];case 6:return c=o.sent(),console.error(c),[2,!1];case 7:return[2]}})})},f=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",d=function(t){if(t)return t.matches(f)?t:t.querySelector(f)||void 0},p=function(t,e){return e.find(function(e){return function(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var o=0;o<n.length;o++){var r=n[o];if("*"===r)return!0;if(r!==t[o])return!1}return n.length===t.length}(t,e)})},g=function(t,e){for(var n=Math.min(t.length,e.length),o=0;o<n&&t[o].toLowerCase()===e[o].id;o++);return o},v=function(t,e){for(var n,o=new w(t),r=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])r=!0;else{for(var u=0,s=a;u<s.length;u++){var c=s[u],h=o.next();if(":"===c[0]){if(""===h)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=h}else if(h!==c)return null}r=!1}}return r&&r!==(""===o.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:b(t.params,n[e])}}):e},b=function(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0},m=function(t){for(var e=1,n=1,o=0,r=t;o<r.length;o++)for(var i=0,a=r[o].path;i<a.length;i++){var u=a[i];":"===u[0]?e+=Math.pow(1,n):""!==u&&(e+=Math.pow(2,n)),n++}return e},w=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}(),y=function(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=O(t,"to");return{from:h(O(t,"from")),to:null==e?void 0:h(e)}})},R=function(t){return P(C(t))},C=function(t,e){return void 0===e&&(e=t),Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var n=O(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:h(O(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:C(t,e)}})},O=function(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null},P=function(t){for(var e=[],n=0,o=t;n<o.length;n++)j([],e,o[n]);return e},j=function(t,e,n){var o=t.slice();if(o.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var r=0,i=n.children;r<i.length;r++)j(o,e,i[r]);else e.push(o)},D=function(){function t(t){Object(r.m)(this,t),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0,this.ionRouteWillChange=Object(r.d)(this,"ionRouteWillChange",7),this.ionRouteDidChange=Object(r.d)(this,"ionRouteDidChange",7)}return t.prototype.componentWillLoad=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,d(document.body)?Promise.resolve():new Promise(function(t){window.addEventListener("ionNavWillLoad",t,{once:!0})})];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){window.addEventListener("ionRouteRedirectChanged",Object(a.e)(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",Object(a.e)(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return console.debug("[ion-router] URL changed -> update nav",e,t),this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.back()})},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,e);var n=h(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.back=function(){return window.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(t){return console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),function(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});console.debug("%c "+c(e),"font-weight: bold; padding-left: 20px","=>\t","("+n.join(", ")+")")},n=0,o=t;n<o.length;n++)e(o[n]);console.groupEnd()}(R(this.el)),function(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var o=n[e];o.to&&console.debug("FROM: ","$c "+c(o.from),"font-weight: bold"," TO: ","$c "+c(o.to),"font-weight: bold")}console.groupEnd()}(y(this.el)),[2]})})},t.prototype.navChanged=function(t){return o.b(this,void 0,void 0,function(){var e,n,r,i,a,u;return o.e(this,function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,(c=window.document.body,o.b(void 0,void 0,void 0,function(){var t,e,n,r;return o.e(this,function(o){switch(o.label){case 0:t=[],n=c,o.label=1;case 1:return(e=d(n))?[4,e.getRouteId()]:[3,3];case 2:return(r=o.sent())?(n=r.element,r.element=void 0,t.push(r),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:t,outlet:e}]}})}))];case 1:return e=s.sent(),n=e.ids,r=e.outlet,i=R(this.el),(a=function(t,e){for(var n=null,o=0,r=t.map(function(t){return t.id}),i=0,a=e;i<a.length;i++){var u=a[i],s=g(r,u);s>o&&(n=u,o=s)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:b(e.params,t[n]&&t[n].params)}}):null}(n,i))?(u=function(t){for(var e=[],n=0,o=t;n<o.length;n++)for(var r=o[n],i=0,a=r.path;i<a.length;i++){var u=a[i];if(":"===u[0]){var s=r.params&&r.params[u.slice(1)];if(!s)return null;e.push(s)}else""!==u&&e.push(u)}return e}(a))?(console.debug("[ion-router] nav changed -> update URL",n,u),this.setPath(u,t),[4,this.safeWriteNavState(r,a,"root",u,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]);case 2:return s.sent(),[2,!0]}var c})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&p(t,y(this.el))&&this.writeNavStateRoot(t,"root")},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),"root")},t.prototype.historyDirection=function(){var t=window;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?"forward":e<n?"back":"root"},t.prototype.writeNavStateRoot=function(t,e){return o.b(this,void 0,void 0,function(){var n,r,i,a,u;return o.e(this,function(o){return t?(n=y(this.el),r=p(t,n),i=null,r&&(this.setPath(r.to,e),i=r.from,t=r.to),a=R(this.el),(u=function(t,e){for(var n=null,o=0,r=0,i=a;r<i.length;r++){var u=v(t,i[r]);if(null!==u){var s=m(u);s>o&&(o=s,n=u)}}return n}(t))?[2,this.safeWriteNavState(document.body,u,e,t,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,e,n,r,i,a){return void 0===a&&(a=0),o.b(this,void 0,void 0,function(){var u,s,c;return o.e(this,function(o){switch(o.label){case 0:return[4,this.lock()];case 1:u=o.sent(),s=!1,o.label=2;case 2:return o.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,r,i,a)];case 3:return s=o.sent(),[3,5];case 4:return c=o.sent(),console.error(c),[3,5];case 5:return u(),[2,s]}})})},t.prototype.lock=function(){return o.b(this,void 0,void 0,function(){var t,e;return o.e(this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.writeNavState=function(t,e,n,r,i,a){return void 0===a&&(a=0),o.b(this,void 0,void 0,function(){var u,s;return o.e(this,function(o){switch(o.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(u=this.routeChangeEvent(r,i))&&this.ionRouteWillChange.emit(u),[4,l(t,e,n,a)]);case 1:return s=o.sent(),this.busy=!1,s&&console.debug("[ion-router] route changed",r),u&&this.ionRouteDidChange.emit(u),[2,s]}})})},t.prototype.setPath=function(t,e){this.state++,function(t,e,n,o,r,i){var a=c(h(e).concat(o));n&&(a="#"+a),"forward"===r?t.pushState(i,"",a):t.replaceState(i,"",a)}(window.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return function(t,e,n){var o=t.pathname;if(n){var r=t.hash;o="#"===r[0]?r.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(h(e),h(o))}(window.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,o=c(t);return this.previousPath=o,o===n?null:{from:n,redirectedFrom:e?c(e):null,to:o}},Object.defineProperty(t.prototype,"el",{get:function(){return Object(r.f)(this)},enumerable:!0,configurable:!0}),t}(),S=function(){function t(t){var e=this;Object(r.m)(this,t),this.routerDirection="forward",this.onClick=function(t){Object(i.d)(e.href,t,e.routerDirection)}}return t.prototype.render=function(){var t,e=Object(r.e)(this),n={href:this.href,rel:this.rel,target:this.target};return Object(r.i)(r.a,{onClick:this.onClick,class:Object.assign({},Object(i.a)(this.color),(t={},t[e]=!0,t["ion-activatable"]=!0,t))},Object(r.i)("a",Object.assign({},n),Object(r.i)("slot",null)))},Object.defineProperty(t,"style",{get:function(){return":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}"},enumerable:!0,configurable:!0}),t}()}}]);