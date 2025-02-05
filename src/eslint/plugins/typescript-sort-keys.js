/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    plugins: ["typescript-sort-keys"],
    rules: {
        "typescript-sort-keys/interface": "error",
        "typescript-sort-keys/string-enum": "error",
    },
}
