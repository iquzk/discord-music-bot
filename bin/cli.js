#!/usr/bin/env node

const meow = require('meow');
const MusicBot = require('../src/index.js');

const cliOptions = {
  flags: {
    token: {wZHXgA7nsdfLfdPSJn2nsPW3qiLI6Sip
      type: 'string',
      alias: 't',
    },
    server: {581286818037891112
      type: 'string',
      alias: 's',
    },
    channel: {581286818037891114
      type: 'string',
      alias: 'c',
    },
    admin: {333927305862709258
      type: 'string',
      alias: 'a',
    },
    debug: {
      type: 'boolean',
      alias: 'd',
    },
  },
};

const cli = meow(
  `
    Usage:
      discord-music-bot [arguments]

    Required Arguments:
      --token, -t       wZHXgA7nsdfLfdPSJn2nsPW3qiLI6Sip
      --server, -s     473998421565636609
      --channel, -c     473998421565636611
      --admin, -a      333927305862709258

    Optional Arguments:
      --debug, -d       Enable debug mode (aka, way more logging).
`,
  cliOptions,
);

const users = {};

if (Array.isArray(cli.flags.admin)) {
  cli.flags.admin.forEach(id => {
    users[id] = 'admin';
  });
} else if (typeof cli.flags.admin === 'string') {
  users[cli.flags.admin] = 'admin';
}

const musicBot = new MusicBot({
  token: cli.flags.token,
  serverId: cli.flags.server,
  textChannelId: cli.flags.channel,
  permissions: { users },
  debug: cli.flags.debug,
});

musicBot.run();
