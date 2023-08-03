function getMongooseError(error) {
    const errors = Object.keys(error.errors).map(key => error.errors[key].message);
    return errors[0];
};

exports.ErrorMessage = (error) => {
    switch (error.name) {
        case 'Error':
            console.log(error.message)
            return error.message;
        case 'ValidationError':
            return getMongooseError(error);
        default:
            return error.message;
    };
};