import { component, Element } from "nativeweb";
import styles from ".";

@component("example-component", styles)
export class ExampleComponent extends Element {
	render() {
		return `
			<h1>🤳 Native Web</h1>
        `;
	}
}
