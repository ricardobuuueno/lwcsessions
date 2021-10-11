import { LightningElement, track } from "lwc";

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;

    @track cityList = [
        "São Paulo",
        "Curitiba",
        "Rio de Janeiro",
        "Belo Horizonte"
    ];

    showDivHandler(event) {
        this.displayDiv = event.target.checked;
    }
}
