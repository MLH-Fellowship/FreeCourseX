const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: [
        require("tailwindcss")("./src/tailwind.js"),
        require('autoprefixer')
    ]
}
