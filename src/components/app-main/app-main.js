import { component, Element } from "nativeweb";
import { ExampleComponent } from "../example-component";
import styles from ".";

@component("app-main", styles)
export class AppMain extends Element {
	render() {
		return `
			<example-component></example-component>
        `;
	}
}
