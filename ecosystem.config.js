module.exports = {
  apps : [{
    name: 'blobgame',
    script: 'gulp run',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    autorestart: true,
    watch: false
  }]
};
