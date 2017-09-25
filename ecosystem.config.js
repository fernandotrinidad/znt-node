module.exports = {
  apps: [{
    name: 'znt-node',
    script: './app.js'
  }],
  deploy: {
    production: {
      user: 'ec2-user',
      host: 'ec2-34-234-124-209.compute-1.amazonaws.com',
      key: '~/.ssh/accesoaws.pem',
      ref: 'origin/master',
      repo: 'git@github.com:fernandotrinidad/znt-node.git',
      path: '/home/ec2-user/apis/',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
