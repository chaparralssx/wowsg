process.noDeprecation = true; //Added to remove deprecation message that fails deployments.
module.exports = {
    webpack: (config, { dev }) => {
        // Perform customizations to config

        // Important: return the modified config
        return config
    }
}