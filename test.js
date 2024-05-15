//(non-essential) FOR RUNNING SNIPPETS AND DEBUGGING OF CODE
// import * as THREE from 'three';
// import { OrbitControls } from 'OrbitControls';
// import { FontLoader } from 'FontLoader';
// import Stats from 'https://unpkg.com/three@0.161.0/examples/jsm/libs/stats.module.js';
// import * as GeometryUtils from 'https://unpkg.com/three@0.161.0/examples/jsm/utils/GeometryUtils.js';
// //import { TextGeometry } from 'TextGeometry';
// //import * as CatenaryCurve from "https://unpkg.com/@gsimone/three-catenary@0.1.0/dist/gsimone-three-catenary.cjs.dev.js";

//html code
/*
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Strings</h1>
<p id="new"></p>

<p id="demo"></p>


<script>
var a = Math.random();

const sentence = 'Long noncoding RNA CRNDE stabilized by hnRNPUL 2 accelerates cell proliferation and migration in colorectal carcinoma via activating Ras/MAPK signaling pathways';
const lwrcase = sentence.toLowerCase();

const word = '2';

let result = lwrcase.includes(word);

document.getElementById("demo").innerHTML = result;
document.getElementById("new").innerHTML = a;
</script>

</body>
</html>

*/

// //see three.js version
// //console.log(THREE.REVISION);


// const word_and_coord = {};

// //3 basic needs to display aanything in three js
// let camera, scene, renderer;

// //stores each title 
// let message;

// const title_and_coord = {};

// init();
// //render();

// function init() {


//     //adding a camera
//     camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
//     camera.position.set(0, 0, 1500);

//     //adding a scene
//     scene = new THREE.Scene();
//     scene.background = new THREE.Color(0xf0f0f0);

//     //creating a font and using it as the geometry
//     const loader = new FontLoader();

//     loader.load('./fonts/Montserrat_Regular.json', function (font) {

//         const color = 0x000000;
//         const matLite = new THREE.MeshBasicMaterial({
//             color: color,
//             opacity: 1.0,
//             side: THREE.DoubleSide
//         });

//         for (let i = 0; i < sentences.length - 400; i++) {
            
//             var title_coord = new THREE.Vector3();
//             message = sentences[i];

//             const shapes = font.generateShapes(message, 100);
//             const geometry = new THREE.ShapeGeometry(shapes);

//             //generate a 1 or -1
//             var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
//             var plusOrMinus2 = Math.round(Math.random()) * 2 - 1;
            
//             var title = new THREE.Mesh(geometry, matLite);
//                 title.position.x = i*100*plusOrMinus*Math.random();

//                 title.position.y = plusOrMinus2 * (300 + ((Math.random()*100) + 0) + (Math.random()*1000));

//                 title.position.z = i*100;
//                 // plusOrMinus * ( 900 + ((Math.random()*10) + 0) + (Math.random()*100) + (Math.random()*1000) );

//                 // title.position.z = plusOrMinus2 * (900 + ((Math.random()*10) + 0) + (Math.random()*100) + (Math.random()*1000));

//                 // title.position.y = plusOrMinus2 * ( 900 + ((Math.random()*10) + 0) + (Math.random()*100) + (Math.random()*1000) );

//                 // title.rotateY(Math.random() * 1.1 * 3.14 * plusOrMinus2);
//                 title.scale.setScalar(0.9)
                
//                 scene.add(title);
//                 title_and_coord[message] = title.getWorldPosition(title_coord);

//                 //printing each title's coord
                
//                 //console.log(title.getWorldPosition(title_coord));
//                 //scene.add( line );

//         //title loop finishes here
//         }

//         //setting up line objects 
//         // const material = new THREE.LineDashedMaterial({color: 0xc90076, dashSize: 20, gapSize: 7.5});
//         // const points = [];
//         // points.push( new THREE.Vector3(- 200, 0, 0) );
//         // points.push( new THREE.Vector3(0, 200, 0) );
//         // points.push( new THREE.Vector3(0, 0, 200) );

//         // const geometry = new THREE.BufferGeometry().setFromPoints(points);
//         // const line = new THREE.Line( geometry, material );
//         // line.computeLineDistances();
//         // scene.add(line);

//         /*
//         //Rendering lines across titles with shared words
        
//         PSEUDOCODE:
//         - Loop through each unique word in uniq_words dictionary (604 at present)
//             - Loop through all the titles (508 at present)
//                 - if the word appears in the title
//                     - Make a new dict/add to a dict 
//                       where the key is the word and value is the world coordinates of the title
//                       for example:
//                         {
//                           "ai" : [242.34, 234.989, 8756.21],
//                           "its" : [922.34, 834.989, 3177.21]
//                         }

//         Once dict is complete, loop through it and draw lines intersecting at all those coordinates
//          //loop through each unique word
//         for (const [key, value] of Object.entries(uniq_words)) {
//             //console.log(key, value);

//             //coords of titles that have shared words will be stored in this local var
//             //var sets to 0 with every new key/value pair aka every new word
//             var shared_coords = [];

//             //loop through every title
//             for (let i = 0; i < (sentences.length); i++) {

//                 message = sentences[i];
    
//                     //printing each title's coord
                    
//                     //console.log(title.getWorldPosition(title_coord));
//                     //scene.add( line );
                

//                 //converting each sentence/title to lowercase since dict has all lowercase words
//                 var lwrcase = message.toLowerCase();

//                 //if each sentence/title includes the word
//                 if (lwrcase.includes[key]){

//                     //append the coord of title to list/array initialized before the loop
//                     shared_coords.push(title.getWorldPosition(title_coord));
//                 }

//             //title loop finishes here
//             }

//             //continuing from line of code 6 steps above
//             //add this list of coords to the corresponding word in the new dict: word_and_coord
//             word_and_coord[key] = shared_coords;

//         //keyvalue dict loop ends here
//         }
//         */

//     }); //end load function

//     //Rendering lines across titles with shared words
        
//     // PSEUDOCODE:
//     // - Loop through each unique word in uniq_words dictionary (604 at present)
//     //     - Loop through all the titles (508 at present)
//     //         - if the word appears in the title
//     //             - Make a new dict/add to a dict 
//     //               where the key is the word and value is the world coordinates of the title
//     //               for example:
//     //                 {
//     //                   "ai" : [242.34, 234.989, 8756.21],
//     //                   "its" : [922.34, 834.989, 3177.21]
//     //                 }
//     // Once dict is complete, loop through it and draw lines intersecting at all those coordinates
    
    
//     // const material = new THREE.LineDashedMaterial({color: 0xc90076, dashSize: 20, gapSize: 7.5});
//     // const points = [];
//     // points.push( new THREE.Vector3(- 200, 0, 0) );
//     // points.push( new THREE.Vector3(0, 200, 0) );
//     // points.push( new THREE.Vector3(0, 0, 200) );

//     // const geometry = new THREE.BufferGeometry().setFromPoints(points);
//     // const line = new THREE.Line( geometry, material );
//     // line.computeLineDistances();
//     // scene.add(line);

//     renderer = new THREE.WebGLRenderer( {antialias: true} );
//     renderer.setPixelRatio(window.devicePixelRatio);
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     const controls = new OrbitControls(camera, renderer.domElement);
//     controls.target.set(0, 0, 0);
//     controls.update();
//     controls.addEventListener('change', render);
//     window.addEventListener('resize', onWindowResize);

// } // end init



// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     render();
// }


// //render the entire scene
// function render() {
//     renderer.render( scene, camera );
// }



// //iterateObject();

// //loop through each unique word


// //loads correctly!
// function iterate(){
//     for (let key in title_and_coord) {
//         console.log(key);
//     }
// }

// //console.log(title_and_coord);