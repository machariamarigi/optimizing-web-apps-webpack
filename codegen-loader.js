module.exports = async function (compileTimeModule) {
  const loaderContext = this;
  const codeGenerator = loadModule(compileTimeModule, loaderContext);
  const codeGeneration = codeGenerator();
  const generatedRuntimeModule = await codeGeneration;
  return generatedRuntimeModule.code;
}

const Module = require("module");

function loadModule(code, loaderContext) {
  const fileName = loaderContext.resource;
  const module = new Module(fileName, loaderContext);
  module.paths = Module._nodeModulePaths(loaderContext.context);
  module.filename = fileName;
  module._compile(code, fileName);
  return module.exports;
}
