export default class ChangeInputValue {
    constructor(protocol, protocolOther) {
        this.protocol = protocol;
        this.protocolOther = protocolOther;
    }
    value(input) {
        if (input.value.split(':')[0] === this.protocol) {
            console.log("no change",input.value);
        } else if (input.value.split(':')[0] === this.protocolOther){
            input.value = this.protocol + ':' + input.value.split(':')[1];
            console.log("change", input.value);
        } else {
            input.value = this.protocol + '://' + input.value;
        }

    }
}