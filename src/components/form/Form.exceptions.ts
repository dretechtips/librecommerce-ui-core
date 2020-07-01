export class FormSubmissionFailureException extends Error {
  constructor() {
    super();
    this.name = "FormSubmissionFailureException";
    this.message = "The form has failed to submit please try again later.";
  }
}
