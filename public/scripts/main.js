class t extends HTMLElement{constructor(t){super(),this.attachShadow({mode:"open"}),t&&this._setStyles(t)}connectedCallback(){this.constructor.properties&&this._setProperties(),this._insertRender(),this.constructor.events&&this._setEvents(!0),this.connected()}disconnectedCallback(){this._events&&this._setEvents(!1),this.disconnected()}_setStyles(t){"object"==typeof t?this.shadowRoot.adoptedStyleSheets=[t]:this._styles=t}_insertRender(){let t=this.render();this._styles&&(t=`<style>${this._styles}</style>${t}`),this.shadowRoot.innerHTML=t}_setEvents(t){this._events=this.constructor.events,this._checkEventTarget=this._checkEventTarget.bind(this),this._callExternalEventMethod=this._callExternalEventMethod.bind(this),Object.entries(this._events).forEach(([e,s])=>{if("string"==typeof s)t?this.addEventListener(e,this._callEventMethod):this.removeEventListener(e,this._callEventMethod);else{"mouseenter"===e&&console.warn(e+" doesn't work on a child, at the moment.");let n=!1;for(const r in s)if(r.startsWith("@"))n=!0;else{const s=`${r}-${e}`;t?window.addEventListener(s,this._callExternalEventMethod):window.removeEventListener(s,this._callExternalEventMethod)}n&&t?this.shadowRoot.addEventListener(e,this._checkEventTarget):this.shadowRoot.removeEventListener(e,this._checkEventTarget)}})}_setProperties(){Object.entries(this.constructor.properties).forEach(([t,e])=>{const s=this.getAttribute(t);switch(e){case String:this[t]=s||"";break;case Number:this[t]=Number(s)||"";break;case Boolean:this[t]=""===s||"true"===s||"";break;case Object:case Array:this[t]=JSON.parse(s)||""}})}_callEventMethod(t,e,s){const n=this._events[t.type];if(e){if(n.hasOwnProperty(s)){const r=n[s];Object.defineProperty(t,"currentTarget",{value:e}),this[r](t)}}else this[n](t)}_callExternalEventMethod(t){const e=t.type.split("-");this[this._events[e[1]][e[0]]](t)}_checkEventTarget(t){let e=t.composedPath();for(const s of e){if(s===this.shadowRoot)break;s.attributes&&s.attributes.length&&Array.from(s.attributes).filter(({name:t})=>t.startsWith("@")).forEach(e=>this._callEventMethod(t,s,e.name))}}connected(){}render(){return""}update(){this._insertRender()}disconnected(){}newEvent(t,e){return new CustomEvent(`${this.constructor.name}-${t}`,{detail:e})}$(t,e){const s=e||this,n=[t.indexOf("."),t.indexOf("#")].filter(t=>-1!=t);let r="";if(n.length){const e=Math.min(...n),s=t.slice(0,e);r=t.slice(e),t=s}return s.shadowRoot.querySelectorAll(`[\\${t}]${r}`)}parent(t,e){let s=e;for(;s&&s!==this.shadowRoot;){if(s.matches(`[\\${t}]`))return s;s=s.parentNode}}}const e=t=>{try{const e=new CSSStyleSheet;return e.replaceSync(t),e}catch{return t[0]}},s=e`
	:host {
		display: block;
		padding: 0 2rem;
	}
`;customElements.define("example-component",class extends t{constructor(){super(s)}render(){return"\n\t\t\t<h1>Start 🧨</h1>\n\t\t"}});const n=e`
	:host {
		display: block;
		font-family: sans-serif;
	}
`;customElements.define("app-main",class extends t{constructor(){super(n)}render(){return"\n\t\t\t<example-component></example-component>\n        "}});
//# sourceMappingURL=main.js.map