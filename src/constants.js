export default {
  API_ROOT: '/api/v1',
  status: {
    SUCCESS: 0,
    BAD_REQUEST: 1,
    NOT_FOUND: 2,
    LOGGED_IN: 10,
    NOT_LOGGED_IN: 11,
    DUPLICATED_USERNAME: 100,
    DUPLICATED_EMAIL: 101,
    VALIDATION_FAILED: 102,
    WRONG_USERNAME_OR_PASSWORD: 201,
    DUPLICATED_ALIAS: 300,
    NOT_ENOUGH_POINTS: 400,
    MEMBER_PARTICIPATED: 500,
    TEAM_PARTICIPATED: 501,
    NOT_MEMBER_OF_TEAM: 502,
    NOT_ADMIN_OF_TEAM: 503,
    PROCESSED: 600,
    TIMEOUT: 601,
    ALREADY_JOINED_IN_TEAM: 602,
    INVALID_INVITATION_TOKEN: 603,
    NOT_INVITED: 604,
    ALREADY_INVITED: 605,
    NO_SUCH_APPLICATION: 606,
    ALREADY_APPLIED: 607,
    CONTEST_PENDING: 700,
    CONTEST_STARTED: 701,
    CONTEST_ENDED: 702,
    INVALID_CAPTCHA_FOR: 800,
    SERVER_ERROR: -1,
    SESSION_EXPIRED: -2,
    PERMISSION_DENIED: -3,
    PARTLY_FAILED: -4,
    WRITE_CONFIG_FILE: -5,
    COOL_DOWN: -6,
    INVALID_CAPTCHA: -7,
    NOT_IN_WHITELIST: -8,
    DANGEROUS_OPERATION: -9,
    FAILED_TO_SEND_EMAIL: -10
  },
  contest_access: {
    REGISTER: 0,
    PRIVATE: 1
  },
  submission_result: {
    CORRECT: 1,
    WRONG: 2
  },
  invite_status: {
    PENDING: 1,
    ACCEPTED: 2,
    REJECTED: 3,
    FAILED: 4
  },
  submission_status: {
    CORRECT: 1,
    WRONG: 2
  }
}