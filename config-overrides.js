const { override, addWebpackAlias } = require("customize-cra");
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const path = require("path");

module.exports = override(
  // Добавляем алиасы
  addWebpackAlias({
    "/src": path.resolve(__dirname, "src"),
    "/components": path.resolve(__dirname, "src/components"),
  }),
  // Отключаем ModuleScopePlugin для разрешения импортов за пределами "src"
  (config) => {
    config.resolve.plugins = config.resolve.plugins.filter(
      (plugin) => !(plugin instanceof ModuleScopePlugin)
    );
    return config;
  }
);
