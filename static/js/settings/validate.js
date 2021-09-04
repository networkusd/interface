module.exports = {
    checkEmpty(value) {
        if (value.length) {
            return false;
        }
        return true;
    },
    checkEmail(value) {
        if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
                value
            )) {
            return true;
        }
        return false;
    },
    checkLength(value, length) {
        if (value.length >= length) {
            return false;
        }
        return true;
    },
};