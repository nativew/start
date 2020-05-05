import { Element } from 'nativeweb';

import styles from './example-component.css.js';

export class ExampleComponent extends Element {
	constructor() {
		super(styles);
	}

	render() {
		return `
			<h1>Start 🧨</h1>
		`;
	}
}

customElements.define('example-component', ExampleComponent);
