module.exports = {
  verbose: true,
  setupFiles: [`./jest.setup.js`],
  moduleNameMapper: {
    "@components": `<rootDir>/src/components/`,
    "@consts": `<rootDir>/src/consts/`,
    "@utils": `<rootDir>/src/utils/`,
    "@hocs": `<rootDir>/src/hocs/`,
    "@store": `<rootDir>/src/store/`,
    "@api": `<rootDir>/src/api/api`,
    "@models": `<rootDir>/src/models/`,
    "@routes": `<rootDir>/src/routes/`
  }
};
