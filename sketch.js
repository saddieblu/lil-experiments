let egg;

function preload() {
  // Assuming 'egg.obj' and 'egg.mtl' are in the same folder.
  egg = loadModel('egg.obj');
}

function addRock() {
  // Generate a random 3D position.
  let x = random(-250, 250);
  let y = random(-100, 100);
  let z = random(-250, 250);
  
  // Create a vector to store the position and add it to our array.
  let rockPosition = createVector(x, y, z);
  rocks.push(rockPosition);
}

function setup() {
  createCanvas(500, 500, WEBGL);
   let rockButton = createButton('Add Rock'); // I fixed the text a bit
  rockButton.position(19, 19);
  
  // Tell the button to call our addRock function when pressed.
  rockButton.mousePressed(addRock);
}


function draw() {
    noStroke(); 

   // 1. Add some light
  // This is a general light for the whole scene.
  ambientLight(240,234,214); 
  directionalLight(100, 100, 100, 0, 4, -4); 

  // 2. Give the egg a material
  // This makes the object a shiny white.
  specularMaterial(500); 
  background(0, 200, 800);
   scale(50); 
  orbitControl();
  
  
  
  model(egg);
}