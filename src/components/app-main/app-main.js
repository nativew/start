import { Element } from 'nativeweb';
import { ExampleComponent } from '../example-component';

import styles from './app-main.css.js';

export class AppMain extends Element {
	constructor() {
		super(styles);
	}

	render() {
		return `
			<example-component></example-component>
        `;
	}
}

customElements.define('app-main', AppMain);
