const createError = ({ message, transKey, path, type}) => {
    return {
        message,
        transKey,
        details: [
            {
                path,
                type,
                message
            }
        ]
    }
};

module.exports = createError;
