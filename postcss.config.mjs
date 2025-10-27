import tailwindcss from "@tailwindcss/postcss";
import extend from "postcss-extend";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    tailwindcss(),
    extend(),
    postcssPresetEnv({
        stage: 1,
        features: {
            "custom-selectors": true,
            "nesting-rules": true,
        },
        browsers: "last 2 versions"
    })
  ],
};
