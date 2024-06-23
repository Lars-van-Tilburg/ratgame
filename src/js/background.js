import { Actor, Color, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'

export class Background extends Actor {
    onInitialize(){
        const sprite = Resources.Land.toSprite();
        sprite.scale = new Vector(0.5,0.5)
        this.graphics.use(sprite);
        this.pos = new Vector(750, 450)
    }
}
        