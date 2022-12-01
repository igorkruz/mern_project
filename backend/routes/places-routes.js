const express = require("express");

const placesControllers = require("../controllers/places-controllers");

const router = express.Router();

router.get("/:pid", placesControllers.getPlacesById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);

routes.patch("/:pid", placesControllers.updatePlace);

routes.delete("/:pid", placesControllers.deletePlace);

module.exports = router;
