module.exports = {
  presets: [
    ["@babel/preset-env", {
      targets: "> 0.25%, not dead",
      modules: false,
      useBuiltIns: "usage",
    }]
  ],
  env: {
    test: {
      presets: [
        ["@babel/preset-env", {
          targets: {
            node: "current",
          },
        }]
      ],
    },
  },
}
