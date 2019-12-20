const config = [
    {
        name: 'blueWhale-online-instance',
        script: __dirname + '/../bin/www.js',
        instances: 1,
        'exec_mode': 'cluster',
        'max_memory_restart': '250M',
        env: {
            'NODE_ENV': 'production',
            'INSTANCE_PORT': 8111
        }
    }
];

module.exports = config;