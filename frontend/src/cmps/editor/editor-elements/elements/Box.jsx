import { utilService } from '../../../../service/util-service.js'

export function getBox() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                width: '100%',
                minHeight: '50px'
            }
        },
        childs: []
    })
}