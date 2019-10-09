const createError = ({generalMessage, transKey, details}) => {

    if (Object.keys(options).length) {
        return {
            message: generalMessage,
            transKey,
            details
        }
    } else {
        return {
            message: generalMessage,
            transKey,
        }
    }
};

module.exports = createError;
