const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require("tailwindcss")("./src/tailwind.config.js"),
        require('autoprefixer')
    ]
}
