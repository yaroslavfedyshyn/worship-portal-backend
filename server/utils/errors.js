const httpStatus = require('http-status');

class HttpError {
  constructor(message, status, details) {
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.details = details;
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return {
      status: this.status,
      message: this.message,
      details: this.details,
    };
  }
}

class HttpForbiddenError extends HttpError {
  constructor(message, details) {
    super(message || httpStatus[httpStatus.FORBIDDEN], 403, details);
  }
}

class HttpNotFoundError extends HttpError {
  constructor(message, details) {
    super(message || httpStatus[httpStatus.NOT_FOUND], 404, details);
  }
}

class HttpBadRequestError extends HttpError {
  constructor(message, details) {
    super(message || httpStatus[httpStatus.BAD_REQUEST], 400, details);
  }
}

class HttpUnprocessableEntityError extends HttpError {
  constructor(message, details) {
    super(message || httpStatus[httpStatus.UNPROCESSABLE_ENTITY], 422, details);
  }
}

class HttpUnAuthorizedRequestError extends HttpError {
  constructor(message, details) {
    super(message || httpStatus[httpStatus.UNAUTHORIZED], 401, details);
  }
}

module.exports = {
  HttpForbiddenError,
  HttpNotFoundError,
  HttpBadRequestError,
  HttpError,
  HttpUnAuthorizedRequestError,
  HttpUnprocessableEntityError,
};
