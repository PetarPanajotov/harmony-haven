exports.logRequest = (req, res, next) => {
    const timestamp = new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });
    const method = req.method;
    const url = req.url;

    console.log(`(${timestamp}) ${method} ${url}`);

    next();
};