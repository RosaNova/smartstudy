import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";
import postcssPresetEnv from "postcss-preset-env";

const config = {
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssPresetEnv({
      stage: 0, // enable experimental CSS features like @property
      features: {
        "custom-properties": true, // enable CSS variables
        "nesting-rules": true
      }
    }),
  ],
};

export default config;
