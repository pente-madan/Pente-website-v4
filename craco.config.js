module.exports = {
  devServer: (devServerConfig) => {
    // Remove deprecated options and use the new setupMiddlewares
    delete devServerConfig.onBeforeSetupMiddleware;
    delete devServerConfig.onAfterSetupMiddleware;
    
    devServerConfig.setupMiddlewares = (middlewares) => {
      return middlewares;
    };
    
    return devServerConfig;
  },
};
