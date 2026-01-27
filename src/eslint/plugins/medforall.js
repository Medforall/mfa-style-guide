import { noCommentedOutCode } from "../rules/no-commented-out-code/no-commented-out-code.js"

/** @type {import("@eslint/config-helpers").Config} */
export const medforall = {
    plugins: {
        medforall: {
            rules: {
                "no-commented-out-code": noCommentedOutCode,
            },
        },
    },
    rules: {
        "medforall/no-commented-out-code": "error",
    },
}
