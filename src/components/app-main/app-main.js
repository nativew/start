import { component, Element } from "nativeweb";
import "../example-component";
import styles from ".";

@component("app-main", styles)
class Component extends Element {
	render() {
		return `
			<example-component></example-component>
        `;
	}
}
