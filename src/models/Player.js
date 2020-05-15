const   Base = require('./BaseModel.js')

module.exports = class AnimateCamera extends Base {
 
    constructor(THREE, scene, cb) {
        super(THREE, scene, cb)
        this._init()
    }
 
    _init() {

        this.canvas = document.querySelector('.webgl')

        // Sizes
  
        this.sizes = {}
        this.sizes.width = window.innerWidth
        this.sizes.height = window.innerHeight
        
        // Camera
        
        this.threeCam = new this._Cnstr.PerspectiveCamera(75, this.sizes.width / this.sizes.height, 0.1, 100)

        this.threeCam.position.z = 15
        this.threeCam.position.y = 4

        this._Scene.add(this.threeCam)

        super._init()
    }
 
    _bind() {
        super._bind()
    }
 
    _render() {
        super._render()
    }
 
}