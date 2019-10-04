const createError = ({generalMessage, transKey, ...options}) => {

    if (details) {
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
