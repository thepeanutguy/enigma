import { ExtendableError } from '../helpers/extendable-error';

class CableSelfReferenceError extends ExtendableError {}
class DuplicateCableError extends ExtendableError {}

export { CableSelfReferenceError, DuplicateCableError };
