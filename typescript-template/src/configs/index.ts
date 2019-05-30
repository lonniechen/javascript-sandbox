var pcfEnv = process.env.PCF_ENV || 'local'

var config: any = {
    "local": require('./local/animal-config'),
    "dev": require('./dev/animal-config')
}

module.exports = config[pcfEnv]