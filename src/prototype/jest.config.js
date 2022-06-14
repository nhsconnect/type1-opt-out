module.exports = {
    testEnvironment: "node",
    verbose: true,
    forceExit: true,
    setupFilesAfterEnv: [ require.resolve('regenerator-runtime/runtime') ],
}