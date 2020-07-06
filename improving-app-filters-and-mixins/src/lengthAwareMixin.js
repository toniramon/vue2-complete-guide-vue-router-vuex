export const lengthAwareMixin = {
    lengthAware() {
        return this.secondText + ' (' + this.secondText.length + ')';
    }
}