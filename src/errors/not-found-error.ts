export function notFoundError(): ApplicationError {
  return {
    name: 'NotFoundError',
    message: 'No result for this search!',
  };
}

export type ApplicationError = {
    name: string;
    message: string;
  };