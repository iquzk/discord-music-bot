// example of `run.js`

const config = {
  // these 3 are always required.
  token: 'YwZHXgA7nsdfLfdPSJn2nsPW3qiLI6Sip',
  serverId: '581286818037891112',
  textChannelId: '581286818037891114',

  // TODO: other options
};

const musicbot = new MusicBot(config);
musicbot.run();
