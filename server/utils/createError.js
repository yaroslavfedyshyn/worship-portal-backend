const createError = ({generalMessage, transKey, ...options}) => {

    if (Object.keys(options).length) {
        return {
            message: generalMessage,
            transKey,
            details: [options]
        }
    } else {
        return {
            message: generalMessage,
            transKey,
        }
    }
};

module.exports = createError;
