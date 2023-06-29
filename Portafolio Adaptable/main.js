let app = document.getElementById('typewriter');
 
let  typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #DF0101;">Deseo hacer de esta nueva era tecnológica un recorrido ameno para los nuevos visitantes y los antiguos que buscan ponerse al corriente.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();