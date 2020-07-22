import {User} from './User'
import {Company} from './Company'

import {CustomMap} from './CustomMap'

const myMap = new CustomMap()

myMap.addUserMarker(new User())
myMap.addUserMarker(new Company())