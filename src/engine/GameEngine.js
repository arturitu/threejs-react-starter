import * as THREE from 'three'

export default class GameEngine {
  constructor(container) {
    this.isRunning = false

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    this.renderer.setSize(window.innerWidth, window.innerHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    if (container) {
      container.appendChild(this.renderer.domElement)
    }
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    this.camera.position.set(0, 0, 5)
    this.scene = new THREE.Scene()
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    })
    this.cube = new THREE.Mesh(geometry, material)

    this.scene.add(this.cube)

    this.setupListeners()
  }

  setupListeners() {
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    })
  }

  start = () => {
    if (this.isRunning) {
      return
    } else {
      this.isRunning = true
      this.animate()
    }
  }

  stop = () => {
    this.isRunning = false
  }

  animate = () => {
    if (!this.isRunning) {
      return
    } else {
      this.cube.rotation.x += 0.01
      this.cube.rotation.y += 0.01
      this.renderer.render(this.scene, this.camera)

      requestAnimationFrame(this.animate)
    }
  }
}
