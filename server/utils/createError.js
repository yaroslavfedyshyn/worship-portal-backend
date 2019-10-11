const createError = ({generalMessage, transKey, details}) => {

    return {
        message: generalMessage,
        transKey,
        details
    }
};

module.exports = createError;
