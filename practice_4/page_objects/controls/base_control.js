class BaseControl {

    constructor(protractorElement, controlName) {
        this.protractorElement = protractorElement;
        this.controlName = controlName;
    }

    async click() {
        console.log(`Clicking "${this.controlName}" element`);
        await this.protractorElement.click();
    }
}

module.exports = BaseControl;