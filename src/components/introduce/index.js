import Typewriter from "typewriter-effect/dist/core";
const app = document.getElementById("typewriter");

const typewriter = new Typewriter(app, {
  loop: true,
});
typewriter
  .typeString(
    "Frontend developer z ponad dwuletnim doświadczeniem"
  )
  .pauseFor(1500)
  .deleteAll()
  .typeString("specjalizujący się w ember.js oraz vue.js")
  .pauseFor(1500)
  .deleteAll()
  .typeString("korzystający również z express.js i mongoDB")
  .pauseFor(1500)
  .deleteAll()
  .start();
