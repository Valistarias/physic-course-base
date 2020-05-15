const Base = require('./BaseModel.js')
 
module.exports = class Gamescene extends Base {
 
    constructor(THREE, scene) {
        super(THREE, scene)

        this._init()
    }
 
    _init() {
        this.interactiveElts = []
       
        this.mainMat = new this._Cnstr.MeshPhongMaterial({
            color: 0xffffff,
            shininess: 0
        })
       
        this.pointLight = new this._Cnstr.PointLight( 0xffffff, 1, 80 )  
        this.pointLight.castShadow = true
        this.pointLight.position.set( 10, 10, 10 )  

        this.pointLight.shadow.mapSize.width = 1024 
        this.pointLight.shadow.mapSize.height = 1024
        this.pointLight.shadow.camera.near = 0.5      
        this.pointLight.shadow.camera.far = 500 

        this._Scene.add( this.pointLight )
        
        this.floor = new this._Cnstr.Mesh(new this._Cnstr.BoxBufferGeometry(30, 1, 30), this.mainMat)
        this.floor.position.y = -0.5
        this.floor.receiveShadow = true
        this._Scene.add(this.floor)
        
        this.ceiling = new this._Cnstr.Mesh(new this._Cnstr.BoxBufferGeometry(30, 1, 30), this.mainMat)
        this.ceiling.position.y = 10
        this.ceiling.receiveShadow = true
        this._Scene.add(this.ceiling)
       
        this.nWall = this._createWall()
        this.nWall.position.z = 15
        this.nWall.receiveShadow = true
        this._Scene.add(this.nWall)
       
        this.sWall = this._createWall()
        this.sWall.position.z = -15
        this.sWall.receiveShadow = true
        this._Scene.add(this.sWall)
       
        this.eWall = this._createWall()
        this.eWall.position.x = -15
        this.eWall.receiveShadow = true
        this.eWall.rotation.y = this._Cnstr.Math.degToRad(90)
        this._Scene.add(this.eWall)
        
        this.wWall = this._createWall()
        this.wWall.position.x = 15
        this.wWall.receiveShadow = true
        this.wWall.rotation.y = this._Cnstr.Math.degToRad(90)
        this._Scene.add(this.wWall)

        const sphere = new this._Cnstr.Mesh(new this._Cnstr.SphereBufferGeometry(radius, 16, 16), this.mainMat)
        sphere.position.set(0, 5, 0)	
        sphere.castShadow = true
        this._Scene.add(sphere)

        super._init()
    }
       
    _bind() {
        super._bind()
    }
       
    _render() {
        super._render()
    }
       
    _createWall() {
        const newWall = new this._Cnstr.Mesh(new this._Cnstr.BoxBufferGeometry(30, 10, .1), this.mainMat)
        newWall.receiveShadow = true
        return newWall
    }
}