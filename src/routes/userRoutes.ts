import { Router } from "express";
import { UserController } from "../controller/userController";

const router = Router();
const userControler = new UserController();

router.post("/", userControler.create);
router.get("/", userControler.list);
router.get("/active", userControler.listActive);
router.get("/:id", userControler.lsitById);
router.delete("/:id", userControler.delete);
router.patch("/:id", userControler.update);
router.patch("/:id/toggle", (req, res) => userControler.toggleActive(req, res));

export const userRoutes = router;
