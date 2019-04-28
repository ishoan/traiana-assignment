const _config = {
  dev: {
    serverName: ''
  }
};

let selectedConfig = _config.dev;
selectedConfig.baseUrl = `http://${selectedConfig.serverName}`;

export default selectedConfig;
