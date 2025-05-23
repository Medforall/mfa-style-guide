/** @type {import("eslint").ESLint.ConfigData} */
module.exports = {
    plugins: ["es-x"],
    rules: {
        "es-x/no-iterator-prototype-drop": "error",
        "es-x/no-iterator-prototype-every": "error",
        "es-x/no-iterator-prototype-filter": "error",
        "es-x/no-iterator-prototype-find": "error",
        "es-x/no-iterator-prototype-flatmap": "error",
        "es-x/no-iterator-prototype-foreach": "error",
        "es-x/no-iterator-prototype-map": "error",
        "es-x/no-iterator-prototype-reduce": "error",
        "es-x/no-iterator-prototype-some": "error",
        "es-x/no-iterator-prototype-take": "error",
        "es-x/no-iterator-prototype-toarray": "error",
    },
}
