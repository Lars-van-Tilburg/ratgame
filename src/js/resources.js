import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import { StartScreen } from './startscreen'

const Resources = {
    Player: new ImageSource('./images/speler.png'),
    Land: new ImageSource('./images/wall.png'),
    Gun: new ImageSource('images/gun.png'),
    Platform: new ImageSource('images/BrownOnLarge.png'),
    Jump: new ImageSource('images/spring.png'),
    Coin: new ImageSource('images/kaas.png'),
    Stone: new ImageSource('./images/mes.png'),
    StartScreen: new Image('./images/wall.png'),
}
const ResourceLoader = new Loader([
    Resources.Player,
    Resources.Land,
    Resources.Gun,
    Resources.Platform,
    Resources.Jump,
    Resources.Coin,
    Resources.Stone,
    Resources.StartScreen,
])

export { Resources, ResourceLoader }
