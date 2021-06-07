import { utilService } from '../service/util-service';

export const data = {
    _id: 'i133',
    settings: {
        name: 'MMuki site',
        createdBy: {
            email: 'MMlexbil90@gmail.com',
            _id: 'i1004'
        },
        title: 'MMUKI site'
    },

    app: {
        id: utilService.makeId(),
        name: 'site container',
        type: 'section',
        role: 'container',
        prefs: {
            style: {
                minHeight: '500px',
                backgroundImage: 'URL(https://fomantic-ui.com/images/wireframe/white-image.png)',
                backgroundSize: 'cover'
            }
        },
        childs: []
    }
}