(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{uQUw:function(t,i,e){"use strict";e.r(i),e.d(i,"ion_input",function(){return s});var n=e("S6Yj"),o=(e("OoTa"),e("pyhm")),a=e("9Xoc");const s=class{constructor(t){Object(n.m)(this,t),this.inputId=`ion-input-${l++}`,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=t=>{const i=t.target;i&&(this.value=i.value||""),this.ionInput.emit(t)},this.onBlur=()=>{this.hasFocus=!1,this.focusChanged(),this.emitStyle(),this.ionBlur.emit()},this.onFocus=()=>{this.hasFocus=!0,this.focusChanged(),this.emitStyle(),this.ionFocus.emit()},this.onKeydown=()=>{this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&this.clearTextInput(),this.didBlurAfterEdit=!1)},this.clearTextInput=t=>{this.clearInput&&!this.readonly&&!this.disabled&&t&&(t.preventDefault(),t.stopPropagation()),this.value="",this.nativeInput&&(this.nativeInput.value="")},this.ionInput=Object(n.d)(this,"ionInput",7),this.ionChange=Object(n.d)(this,"ionChange",7),this.ionBlur=Object(n.d)(this,"ionBlur",7),this.ionFocus=Object(n.d)(this,"ionFocus",7),this.ionInputDidLoad=Object(n.d)(this,"ionInputDidLoad",7),this.ionInputDidUnload=Object(n.d)(this,"ionInputDidUnload",7),this.ionStyle=Object(n.d)(this,"ionStyle",7)}debounceChanged(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)}disabledChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.ionChange.emit({value:this.value})}componentWillLoad(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0),this.emitStyle()}componentDidLoad(){this.debounceChanged(),this.ionInputDidLoad.emit()}componentDidUnload(){this.ionInputDidUnload.emit()}async setFocus(){this.nativeInput&&this.nativeInput.focus()}getInputElement(){return Promise.resolve(this.nativeInput)}getValue(){return this.value||""}emitStyle(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})}focusChanged(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0)}hasValue(){return this.getValue().length>0}render(){const t=Object(n.e)(this),i=this.getValue(),e=this.inputId+"-lbl",s=Object(a.f)(this.el);return s&&(s.id=e),Object(n.i)(n.a,{"aria-disabled":this.disabled?"true":null,class:Object.assign({},Object(o.a)(this.color),{[t]:!0,"has-value":this.hasValue(),"has-focus":this.hasFocus})},Object(n.i)("input",{class:"native-input",ref:t=>this.nativeInput=t,"aria-labelledby":e,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:i,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),this.clearInput&&!this.readonly&&!this.disabled&&Object(n.i)("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput}))}get el(){return Object(n.f)(this)}static get watchers(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}static get style(){return".sc-ion-input-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-md-h{--padding-start:0}.ion-color.sc-ion-input-md-h{color:var(--ion-color-base)}.native-input.sc-ion-input-md{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-md:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-md:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-md::-ms-clear{display:none}.native-input[disabled].sc-ion-input-md{opacity:.4}.cloned-input.sc-ion-input-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl] .sc-ion-input-md-h .cloned-input.sc-ion-input-md, [dir=rtl].sc-ion-input-md .cloned-input.sc-ion-input-md{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-md-h .input-clear-icon.sc-ion-input-md{visibility:visible}.has-focus.sc-ion-input-md-h{pointer-events:none}.has-focus.sc-ion-input-md-h a.sc-ion-input-md, .has-focus.sc-ion-input-md-h button.sc-ion-input-md, .has-focus.sc-ion-input-md-h input.sc-ion-input-md{pointer-events:auto}.sc-ion-input-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:8px;font-size:inherit}.item-label-floating.sc-ion-input-md-h, .item-label-floating .sc-ion-input-md-h, .item-label-stacked.sc-ion-input-md-h, .item-label-stacked .sc-ion-input-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}.input-clear-icon.sc-ion-input-md{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><polygon%20fill='var(--ion-color-step-600,%20%23666666)'%20points='405,136.798%20375.202,107%20256,226.202%20136.798,107%20107,136.798%20226.202,256%20107,375.202%20136.798,405%20256,285.798%20375.202,405%20405,375.202%20285.798,256'/></svg>\");width:30px;height:30px;background-size:22px}"}};let l=0}}]);