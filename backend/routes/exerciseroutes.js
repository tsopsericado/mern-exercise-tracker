const router = require("express").Router();

let Exercise = require("../model/exerciseModel");
let User = require("../model/usersModel")

//Handler functions: Success
const respHandler = (res, exercise) => {
  console.log(exercise);
  return res.json({ status: "ok", exercise });
};

//Handler functions: Failure
const errorHandler = (res, err) => {
  let errorMsg = "an error occured:" + err;
  console.log(errorMsg);
  return res.json({ status: errorMsg });
};

// Getting all Exercise
router.get("/", function (req, res) {
  Exercise.find()
    .then((excercises) => res.json(excercises))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Creating an Exercise
router.post("/api/exercise/:id", async (req, res) => {

    const userId = req.body["userId"];
      const description = req.body.description;
      const duration = req.body.date;
      const date = req.body.date;
      console.log("this is user", userFound);
      if (!userFound){
        res.send("User not found");
      }
         const newExercise = new Exercise({
      userId,
      description,
      duration,
      date,
  });

  userExercise = {
    _id: userId,
    username: userfound.username,
    date:date,
    duration,
    description,
  };

  newExercise.save()
   .then(() => res.json('Exercise Added!'))
   .catch(err => res.status(400).json('Error:' + err));
});

    

  // const newExercise = req.body;
  // let userId = newExercise.userId;

  // const userEx = await User.find({_id: userId})

  // const created = await Exercise.create({...newExercise, userEx});

  // res.send(created);



// Getting an Exercise
router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise) => res.json(exercise))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Deleting an Exercise
router.route("/:id").delete((req, res) => {
  Exercise.findByIdDelete(req.params.id)
    .then(() => res.json("Exercise Deleted!"))
    .catch((err) => res.status(400).json("Error:" + err));
});

// Updating an Exercise
router.post("/update/:id", function(req, res) {
  Exercise.findById(req.params.id)
    .then((exercise) => {
      (exercise.username = req.body.username),
        (exercise.description = req.body.description),
        (exercise.duration = Number(req.body.duration)),
        (exercise.date = Date.parse(req.body.date));

      exercise
        .save()
        .then(() => res.json("Exercise Update!"))
        .catch((err) => res.status(400).json("Error:" + err));
    })

    .catch((err) => res.status(400).json("Error:" + err));
});

module.exports = router;
