import './style/main.css'
import * as THREE from 'three'
import CANNON from 'cannon'

const   Cam = require('./models/Player.js'),
        GScene = require('./models/GameScene.js')

/**
 * Sizes
 */
const sizes = {}
sizes.width = window.innerWidth
sizes.height = window.innerHeight

window.addEventListener('resize', () =>
{
    // Save sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.threeCam.aspect = sizes.width / sizes.height
    camera.threeCam.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
})

/**
 * Environnements
 */
// Scene
const scene = new THREE.Scene()

const camera = new Cam(THREE, scene, {
})
	
const gameScene = new GScene(THREE, scene)



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('.webgl')
})
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(sizes.width, sizes.height)

/**
 * Loop
 */
const loop = (time) =>
{
    // Keep looping
    window.requestAnimationFrame(loop)

    renderer.render(scene, camera.threeCam)
}
loop()