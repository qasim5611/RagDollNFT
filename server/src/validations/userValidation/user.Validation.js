import { body, oneOf } from "express-validator"
export {
    registerValidation,
    authenticateValidation,
    forgotPasswordValidation,
    resetPasswordValidation,
    updateValidation
};


const registerValidation = [
  body("name")
    .trim()
    .isString()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ max: 20, min: 4 })
    .withMessage(
      "Name must be minimum of 4 characters and maximum of 20 characters"
    )
    .custom((value) => {
      if (value.includes("  ")) {
        throw new Error("Name field must be a proper name");
      }
      if (!value.match(/^[a-zA-Z0-9 ]+$/)) {
        throw new Error("Name field allowed characters A-Z, a-z, 0-9");
      }
      return true;
    }),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Email field must be a valid email"),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ max: 20, min: 6 })
    .withMessage(
      "Password must be minimum of 6 characters and maximum of 16 characters"
    )
    .custom((value) => {
      if (value.includes("  ")) {
        throw new Error("Password field must be a proper password");
      }
      return true;
    }),

  body("cpassword")
    .trim()
    .notEmpty()
    .withMessage("cPassword is required")
    .isLength({ max: 20, min: 6 })
    .withMessage(
      "cPassword must be minimum of 6 characters and maximum of 16 characters"
    )
    .custom((value) => {
      if (value.includes("  ")) {
        throw new Error("cPassword field must be a proper password");
      }
      return true;
    }),

  body("referral")
    .trim()
    .notEmpty()
    .withMessage("referral is required")
    .isLength({ max: 20, min: 4 })
    .withMessage(
      "referral must be minimum of 4 characters and maximum of 20 characters"
    )
    .custom((value) => {
      if (value.includes("  ")) {
        throw new Error("referral must be a proper name");
      }
      if (!value.match(/^[a-zA-Z0-9 ]+$/)) {
        throw new Error("referral allowed characters A-Z, a-z, 0-9");
      }
      return true;
    }),

  
];


const authenticateValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email field must be a valid email"),

    body("password")
        .trim()
        .notEmpty().withMessage("Password is required")

];

const forgotPasswordValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email field must be a valid email"),

];

const resetPasswordValidation = [
    body("password")
        .trim()
        .notEmpty().withMessage("Password is required")
        .isLength({ max: 20, min: 6 }).withMessage("Password must be minimum of 6 characters and maximum of 16 characters")
        .custom(value => {
            if (value.includes("  ")) {
                throw new Error("Password field must be a proper password")
            }
            return true;
        }),

];

const updateValidation = [
    body("email")
        .trim()
        .notEmpty().withMessage("Email is required")
        .isEmail().withMessage("Email field must be a valid email"),

    body("password")
        .trim()
        .notEmpty().withMessage("Password is required")
        .isLength({ max: 20, min: 6 }).withMessage("Password must be minimum of 6 characters and maximum of 16 characters")
        .custom(value => {
            if (value.includes("  ")) {
                throw new Error("Password field must be a proper password")
            }
            return true;
        }),

    body("firstName")
        .trim()
        .isString()
        .notEmpty().withMessage("First name is required")
        .isLength({ max: 20, min: 4 }).withMessage("First name must be minimum of 4 characters and maximum of 20 characters")
        .custom(value => {
            if (value.includes("  ")) {
                throw new Error("Name field must be a proper name")
            }
            if (!value.match(/^[a-zA-Z0-9 ]+$/)) {
                throw new Error("Name field allowed characters A-Z, a-z, 0-9")
            }
            return true;
        }),

    body("lastName")
        .trim()
        .notEmpty().withMessage("Last name is required")
        .isLength({ max: 20, min: 4 }).withMessage("Last name must be minimum of 4 characters and maximum of 20 characters")
        .custom(value => {
            if (value.includes("  ")) {
                throw new Error("Name field must be a proper name")
            }
            if (!value.match(/^[a-zA-Z0-9 ]+$/)) {
                throw new Error("Name field allowed characters A-Z, a-z, 0-9")
            }
            return true;
        }),

    body("title")
        .trim()
        .notEmpty().withMessage("Title is required")
        .isLength({ max: 100, min: 5 }).withMessage("Password must be minimum of 5 characters and maximum of 100 characters")
        .custom(value => {
            if (!value.match(/^[a-zA-Z0-9 ]+$/)) {
                throw new Error("Title field allowed characters A-Z, a-z, 0-9")
            }
            if (value.includes("  ")) {
                throw new Error("Title field must be a proper title")
            }
            return true;
        }),
];