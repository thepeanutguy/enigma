class ExtendableError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;

    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      // prettier-ignore
      this.stack = (new Error(message)).stack;
    }
  }
}

export { ExtendableError };
