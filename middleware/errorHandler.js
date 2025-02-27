const constants = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  console.log(statusCode);

  let errorTittle = "";
  switch (statusCode) {
    case constants.constants.VALIDATION_ERROR:
      errorTittle = "Validation Field";
      break;
    case constants.constants.NOT_FOUND:
      errorTittle = "Not Found";
      break;
    case constants.constants.UNAUTHORIZED:
      errorTittle = "Unauthorized";
      break;
    case constants.constants.FORBIDDEM:
      errorTittle = "Forbiddem";
      break;
    case constants.constants.SERVER_ERROR:
      errorTittle = "Server Error";
      break;
    default:
      errorTittle = "Unknown Error";
  }
  res.status(statusCode).json({
    tittle: errorTittle,
    message: err.message,
    stackTrace: err.stack,
  });
};
module.exports = errorHandler;
