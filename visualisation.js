import * as THREE from "three";
import { OrbitControls } from "jsm/controls/OrbitControls.js";

//basic things needed to set up the scene in 3js: renderer, camera, scene object
const w = window.innerWidth;
const h = window.innerHeight;

//setting up renderer
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement); 



//setting up camera

//field of view for camera
//5 deg is too narrow, 90 is too wide
const fov = 75;
const aspect = w / h;
//0.1 is when it starts rendering, anything closer than that is invisible
const near = 0.1;
const far = 10;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 2;

const scene = new THREE.Scene();

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.03;

//simple geometries are primitives in 3js, we will use one here

//1 is size, 2 is detail
const geo = new THREE.IcosahedronGeometry(1.0, 2);
//this is material, within {} is its properties
const mat = new THREE.MeshStandardMaterial({
    color:0xffffff,
    flatShading: true
});

const mesh = new THREE.Mesh(geo, mat);
scene.add(mesh);

const wireMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
});
const wireMesh = new THREE.Mesh(geo, wireMat);
wireMesh.scale.setScalar(1.001);
mesh.add(wireMesh);

const hemiLight = new THREE.HemisphereLight(0x0099ff, 0xaa5500);
scene.add(hemiLight);


//reqAnima is an API
function animate(t = 0){
    requestAnimationFrame(animate);
    //changes scale of object
    //mesh.scale.setScalar(Math.cos(t * 0.001) + 1.0);
    mesh.rotation.y = t * 0.0001;
    renderer.render(scene, camera);
    controls.update();
}

animate();
