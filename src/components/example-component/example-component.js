import { component, Element } from "nativeweb";
import styles from ".";

@component("example-component", styles)
class Component extends Element {
	render() {
		return `
			<h1>🤳 Native Web</h1>
        `;
	}
}
