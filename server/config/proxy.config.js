module.exports = function (env) {
    return env === 'production'
        ? {
            api: 'http://10.94.239.58:8002'
        }
        : {
            api: 'http://10.77.132.75:8004',
        };
};