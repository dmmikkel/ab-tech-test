import { ZodIssue } from 'zod';

/**
 * Use dot-notation to extract an error message
 * for a given field from a collection of ZodIssues.
 */
export const extractError = (
  path: string,
  issues: ZodIssue[] | null | undefined
): string | undefined => {
  if (!issues) {
    return;
  }
  const issue = issues.find((issue) => issue.path.join('.') === path);
  return issue?.message;
};
