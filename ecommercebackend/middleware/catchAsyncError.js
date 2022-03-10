module.exports = (aFuncCheck) => (req, res, next) => {
  Promise.resolve(aFuncCheck(req, res, next)).catch(next);
};
