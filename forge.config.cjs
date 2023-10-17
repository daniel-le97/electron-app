module.exports = {
  packagerConfig: {
    ignore: [
      /^\/src/,
      /(.eslintrc.json)|(.gitignore)|(electron.vite.config.ts)|(forge.config.cjs)|(tsconfig.*)/
    ]
  },
  rebuildConfig: {},
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'daniel-le97',
          name: 'electron-app'
        },
        prerelease: true
      }
    }
  ],
  makers: [
    // {
    //   name: '@electron-forge/maker-squirrel',
    //   config: {}
    // },

    {
      name: '@electron-forge/maker-zip'
    },

    {
      name: '@electron-forge/maker-dmg',
      config: {}
    }
    // {
    //   name: '@electron-forge/maker-deb',
    //   config: {}
    // },
    // {
    //   name: '@electron-forge/maker-rpm',
    //   config: {}
    // }
  ]
}
