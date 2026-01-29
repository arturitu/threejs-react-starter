import * as THREE from 'three'
import useStore from '../store/useStore'

export default class GameEngine {
  constructor(container) {
    this.isRunning = true
    this.gameEnded = useStore.getState().gameEnded

    this.container = container

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
      1000
    )
    this.camera.position.set(0, 0, 5)

    this.scene = new THREE.Scene()

    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()

    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
      color: new THREE.Color(useStore.getState().avatarColor),
    })
    this.avatar = new THREE.Mesh(geometry, material)

    this.scene.add(this.avatar)

    this.setupStoreSubscriptions()
    this.setupListeners()

    this.animate = this.animate.bind(this)
    this.renderer.setAnimationLoop(this.animate)
  }

  setupStoreSubscriptions() {
    this.unsubscribeColor = useStore.subscribe(
      (state) => {
        return state.avatarColor
      },
      (color) => {
        const newColor = new THREE.Color(color)
        this.avatar.material.color.copy(newColor)
      }
    )

    this.unsubscribeGameEnded = useStore.subscribe(
      (state) => {
        return state.gameEnded
      },
      (ended) => {
        this.gameEnded = ended
      }
    )
  }

  setupListeners() {
    this.handleResize = () => {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    }

    this.handleClick = (event) => {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1

      this.raycaster.setFromCamera(this.mouse, this.camera)
      const intersects = this.raycaster.intersectObject(this.avatar)

      if (intersects.length > 0) {
        useStore.getState().setGameEnded(true)
      }
    }

    window.addEventListener('resize', this.handleResize)
    this.renderer.domElement.addEventListener('click', this.handleClick)
  }

  destroy = () => {
    window.removeEventListener('resize', this.handleResize)
    this.renderer.domElement.removeEventListener('click', this.handleClick)

    if (this.unsubscribeColor) {
      this.unsubscribeColor()
    }
    if (this.unsubscribeGameEnded) {
      this.unsubscribeGameEnded()
    }

    this.renderer.setAnimationLoop(null)
    this.renderer.dispose()
    this.container.innerHTML = ''
  }

  animate = () => {
    if (this.gameEnded) {
      return
    }

    this.avatar.rotation.x += 0.01
    this.avatar.rotation.y += 0.01
    this.renderer.render(this.scene, this.camera)
  }
}
