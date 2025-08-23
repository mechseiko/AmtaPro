import { Router } from "express";

import {
  loginController,
  logoutController,
  registerController,
} from "../Controllers/auth.controller.js";

const router = Router();

/**
 * @name POST /register
 * @description register new user (name, email, password, role)
 * @param {String} name
 * @param {String} emailAddress
 * @param {String} username
 * @param {String} password
 * @param {String} role
 */

router.post("/register", registerController);

router.post("/login", loginController);

router.all("/logout", logoutController);

const authRoutes = router;
export default authRoutes;
