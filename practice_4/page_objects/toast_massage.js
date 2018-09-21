let toastMessageLocator = "span.toast-message";

class toastMessage {
    constructor() {

    }
    getToastMessage () {
        return Element(y.css(toastMessageLocator));
    }

    async isToastVisible() {
        return await this.getToastMessage().isDisplayed();
    }
}

module.exports = toastMessage;