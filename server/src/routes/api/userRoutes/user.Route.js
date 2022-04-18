import express from "express";
import {
    register,
    verifyEmail,
    authenticate,
    revokeToken,
    forgotPassword,
    resetPassword,
    refreshToken,
    update,
    _delete,
    getAll,
    getById,
    verifyCode
} from "../../../controllers/userControllers/user.Controller.js"
import {
    registerValidation,
    authenticateValidation,
    forgotPasswordValidation,
    resetPasswordValidation,
    updateValidation
} from "../../../validations/userValidation/user.Validation.js"
import authorize from "../../../middlewares/authorize.js"
const router = express.Router();


router.post('/register', register);
router.get('/verify-email', verifyEmail);
router.post('/authenticate', authenticate);

router.post('/forgot-password', forgotPassword);
router.post("/VerifyTokenforpass", verifyCode);

router.post("/resetpassword", resetPassword);
router.post('/refresh-token', refreshToken);


export default router