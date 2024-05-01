import express from "express"
const router = express.Router()
import guestController from "../controller/guestController.js"
router.get('/', guestController.getguest);    // data send to database
router.get('/create', guestController.formget);
router.post('/create', guestController.createGuest);  // data post ho gya table me--database se data client pr aa gya
router.get('/delete/:id', guestController.deleteData) // data delete ho gya table se and database se
router.get('/edit/:id', guestController.editForm)
router.post('/edit/:id', guestController.updateData) // update hokar data waps database pr show krana
export default router    