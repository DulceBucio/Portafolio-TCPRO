let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Coding apassionate and trying to spread STEM knowledge')
  .pauseFor(200)
  .deleteChars(10)
  .start();
