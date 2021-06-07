import { utilService } from '../../../../service/util-service.js'

export function getImg(src) {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'img',
        prefs: {
            style: {
                display: 'flex',
                backgroundImage: `URL(${src})`,
                backgroundSize: 'cover',
                height: '100px',
                width: '100px',
            }
        },
        txt: ''
    })
}