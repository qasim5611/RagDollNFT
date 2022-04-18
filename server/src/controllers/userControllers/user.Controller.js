import userService from "../../services/userServices/user.Service.js"
export {
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
  verifyCode,
};
import { validationResult } from "express-validator";
import userModel from "../../models/userModel/user.Model.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { jwt_secret_key } from "../../config/jwtConfig.js";
import refreshTokenModel from "../../models/userModel/refreshToken.Model.js";
// helper functoins

var code = Math.floor(100000 + Math.random() * 900000);

// import sendEmail from "./../../services/EmailSender/sendmail";

function randomTokenString() {
    return crypto.randomBytes(40).toString('hex');
}

function hash(password) {
    return bcrypt.hashSync(password, 10);
}

function generateJwtToken(user) {

    // create a jwt token containing the account id that expires in 15 minutes
    return jwt.sign({ sub: user.id, id: user.id }, jwt_secret_key, { expiresIn: '15m' });
}

function generateRefreshToken(user, ipAddress) {
    // create a refresh token that expires in 7 days
    return new refreshTokenModel({
        userId: user.id,
        token: randomTokenString(),
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        createdByIp: ipAddress
    });
}


async function register(req, res, next) {


    console.log(req.body.name);
    console.log(req.body);
    //  const origin = req.hostname;
     const origin = "http://localhost:8073";


     const result =  await userModel.findOne({ email: req.body.email })
     if(result) {
        // send already registered error in email to prevent user enumeration
        console.log("Email alredy exist");
     return res.send({
              msg: "Email Already Exist",
            });
       
    }

    // create user object
    const user = new userModel(req.body);
    console.log(user);

    // first registered user is an admin
    const isFirstUser = (await userModel.countDocuments({})) === 0;
    user.role = isFirstUser ? "Admin" : "User";
    user.verificationToken = randomTokenString();

    // hash password
    user.passwordHash = hash(req.body.password);

    // save user
    await user.save();
    console.log(user);
    // send email
   await sendVerificationEmail(user, origin);
     return res.send({
       msg: "Verify your mail Now Plz",
     });
   
  



 
}



async function sendVerificationEmail(user, origin) {
  let message;
  if (origin) {
    const verifyUrl = `${origin}/user/verify-email?token=${user.verificationToken}`;
    message = `<p>Please click the below link to verify your email address:</p>
                   <p><a href="${verifyUrl}">${verifyUrl}</a></p>`;
  } else {
    message = `<p>Please use the below token to verify your email address with the <code>/user/verify-email</code> api route:</p>
                   <p><code>${user.verificationToken}</code></p>`;
  }


  console.log({
    to: user.email,
    subject: "Sign-up Verification API - Verify Email",
    html: `<h4>Verify Email</h4>
               <p>Thanks for registering!</p>
               ${message}`,
  });

  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    // ssl:     true,
    secure: false,
    requireTLS: true,
    auth: {
      user: "qasimtahir5611@gmail.com",
      pass: "Qasim@1048576",
    },
    tls: {rejectUnauthorized: false}
  });

  // await sendmail(message, user, origin);

  // await sendEmail(message, user, origin);
  //   console.log("code", message);
  const mailOptions = {
    from: `"Verify Your Accout by Token" <qasimtahir5611@gmail.com>`,
    to: `${user.email}`,
    subject: "Please Vrifiy your Email account",
    html: `
     <h3 style="font-family: cursive">Hy ${user.name} RagDoll Cat NFT wansts to Verify your Email click button </h3>
     <h3>${message}</h3>`,
  };
  console.log(mailOptions);
  smtpTransport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log(response);
        return true;
    }
  });
}

async function verifyEmail(req, res, next) {
    try {
        console.log(req.query.token);
        console.log(req.query.token);
  let token = req.query.token;

  
        const user = await userModel.findOne({ verificationToken: token });
        console.log(token)
        if (!user){
                return res.send({
              msg: "Verification Failed",
            });
        }
        user.verified = Date.now();
        user.verificationToken = undefined;
        await user.save();
          return res.send({
            msg: "Verification Successful, Close this AND Go to Login Now",
          });
    }
    catch (err) {
         return res.json("Server Error");
    }
    // userService.verifyEmail(req.body.Token)
    //     .then(() => res.json({ message: 'Verification successful, you can now login' }))
    //     .catch(next);
}


function basicDetails(user) {
    const { id, name, referral, email, role, created, updated, isVerified } = user;
    return { id, name, referral, email, role, created, updated, isVerified };
}

async function authenticate(req, res, next) {

    console.log(req);
    console.log(req);
   
    const { email, password } = req.body;
    const ipAddress = req.ip;

    const user = await userModel.findOne({ email });
    
    console.log(user);
    console.log(user);

  
    if (!user) {

        return res.send({
          auth: false,
          token: null,
          msg: "Not available email"
        });
    }

     var passwordIsValid = bcrypt.compareSync(password, user.passwordHash);

      var userIsVerifed = user.isVerified;

         if (passwordIsValid == true) {
           if (userIsVerifed == true) {
               const jwtToken = generateJwtToken(user);
               const refreshToken = generateRefreshToken(user, ipAddress);

               // save refresh token
               await refreshToken.save();

               // return basic details and token
               
                return res.send({
                  ...basicDetails(user),
                  jwtToken,
                  refreshToken: refreshToken.token,
                  msg: "Login Successfull",
                });
           } else if (userIsVerifed == false) {
             let mailret = user.email;
             console.log("mailret", mailret);

             console.log("user.name", user.name);
             console.log("user.email", user.email);
            //  console.log("code", code);

             // sendEmail(user.email, user.name, code);
             // console.log("sendEmail", code);

             return res.send({
               auth: false,
               token: null,
               msg: "NOT Verified, Check Mail, We Already Have Send you Email", // + redirect to verify page
               user,
             });
           }
         }


      return res.send({
        auth: false,
        token: null,
        msg: "Password Not Correct",
        user,
      });
}

function revokeToken(req, res, next) {

    // accept token from request body or cookie
    const token = req.body.token || req.cookies.refreshToken;
    const ipAddress = req.ip;

    if (!token) return res.status(400).json({ message: 'Token is required' });

    // users can revoke their own tokens and admins can revoke any tokens
    if (!req.user.ownsToken(token) && req.user.role !== "Admin") {
        return res.status(401).json({ message: 'Unauthorized erf' });
    }

    userService.revokeToken({ token, ipAddress })
        .then(() => res.json({ message: 'Token revoked' }))
        .catch(next);
}


async function forgotPassword(req, res, next) {

  let { email } = req.body;

  console.log(email);

  userModel.findOne({ email: email }, async function (err, user) {
    console.log("user", user);

    console.log("user", user);

    if (err) {
      return res.json("Error On Server");
    } else if (!user) {
      // return res.send({ msg: "Email Not Found" });

      return res.send({
        msg: "Email Not Found.",
        user,
      });
    }

    await userModel.updateOne(
      {
        email: email,
      },
      {
        $set: {
          code: code,
        },
      }
    );

    sendPasswordResetEmail(user.email, user.name, code);

    console.log("sendEmail", code);

    // let mailret = user.email;
    // console.log("mailret", mailret);

    return res.send({
      msg: "Cool Email Found, Redirecting to Change Password",
      user,
    });

    // return res.send({
    //   msg: "Cool Email Found, Redirecting to Change Password",
    //   user,
    // });
  });

}





async function sendPasswordResetEmail(email, name, code) {

  console.log(name);
  console.log(email);
  console.log(code);




  var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    // ssl:     true,
    secure: false,
    requireTLS: true,
    auth: {
      user: "qasimtahir5611@gmail.com",
      pass: "Qasim@1048576",
    },
    tls: { rejectUnauthorized: false },
  });

 
    console.log("code", code);
     const mailOptions = {
       from: `"Verify Your Accout by Token" <qasimtahir5611@gmail.com>`,
       to: `${email}`,
       subject: "Please Vrifiy your Email account",
       html: `
     <h3 style="font-family: cursive">Hy ${name} TechSchema wansts to Verify your Email by Token... </h3>
     <h3>${code}</h3>`,
     };
  
    console.log(mailOptions);
    smtpTransport.sendMail(mailOptions, function (error, response) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log(response);
        return response;
      }
    });

}




async function verifyCode(req, res) {

 let email = req.body.email;

 console.log("emailid", email);
 console.log("token2", req.body.values.token);

 console.log("token2", req.body.values.token);

 var Usertoken = req.body.values.token;

 // let code = values.token;
 console.log("Usertoken", Usertoken);

 let mytb1 = await userModel.findOne({ email });

 console.log("is user is find?", mytb1);

 console.log("is user is find?", mytb1);

//  console.log("is user is find?", mytb1.name);

 console.log("is user is find?", mytb1.code);

 if (mytb1) {
   if (mytb1.code == Usertoken) {
     return res.send({
       msg: "You Have Been Verified for Password Update. Redirecting...",
       email,
     });
   }

   return res.send({
     msg: "Sorry Your Token Is Not Correct",
     email,
   });
 }
}




async function resetPassword(req, res) {

 let { email, values } = req.body;

 console.log("emailid", email);
 console.log("token2", values.password);

 let code = values.password;

 let mytb1 = await userModel.findOne({ email });

 console.log("is user is find?", mytb1);



 console.log("is user is find?", mytb1.code);

 console.log("is user is find?", mytb1.passwordHash);

 code = await bcrypt.hash(code, 10);

 if (mytb1) {
   let isUpdates = await userModel.updateOne(
     {
       email: email,
     },
     {
       $set: {
         passwordHash: code,
       },
     }
   );

   if (isUpdates) {
     return res.send({
       msg: "Password Updated",
       isUpdates,
     });
   }

   return res.send({
     msg: "Password Not Updated",
     isUpdates,
   });
 }
    
}


function refreshToken(req, res, next) {
    const token = req.cookies.refreshToken;
    const ipAddress = req.ip;
    userService.refreshToken({ token, ipAddress })
        .then(({ refreshToken, ...user }) => {
            setTokenCookie(res, refreshToken);
            res.json(user);
        })
        .catch(next);
}


function update(req, res, next) {

    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
        return res.status(400).json(validationErrors.array()[0]) // 400 for bad request
    }
    // users can update their own account and admins can update any account
    if (req.params.id !== req.user.id && req.user.role !== "Admin") {
        return res.status(401).json({ message: 'Unauthorized dfv' });
    }

    userService.update(req.params.id, req.body)
        .then(user => res.json(user))
        .catch(next);
}


function _delete(req, res, next) {
    // users can delete their own account and admins can delete any account
    if (req.params.id !== req.user.id && req.user.role !== Role.Admin) {
        return res.status(401).json({ message: 'Unauthorized fv' });
    }

    userService.delete(req.params.id)
        .then(() => res.json({ message: 'Account deleted successfully' }))
        .catch(next);
}


function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

function getById(req, res, next) {
    // users can get their own account and admins can get any account
    if (req.params.id !== req.user.id && req.user.role !== "Admin") {
        return res.status(401).json({ message: 'Unauthorized ff' });
    }

    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(next);
}


// helper functions

function setTokenCookie(res, token) {
    // create cookie with refresh token that expires in 7 days
    const cookieOptions = {
        httpOnly: true,
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    };
    res.cookie('refreshToken', token, cookieOptions);
}