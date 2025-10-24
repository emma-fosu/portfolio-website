import tailwindcss from "@tailwindcss/postcss";
import postcssPresetEnv from "postcss-preset-env";

export default {
  plugins: [
    tailwindcss(),
    postcssPresetEnv({
        stage: 1,
        features: {
            "custom-selectors": true
        },
        browsers: "last 2 versions"
    })
  ],
};
