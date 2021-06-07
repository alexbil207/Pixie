import { utilService } from '../../../../../service/util-service.js';

export function getAlwaysCenterText() {
    return ({
        id: utilService.makeId(),
        type: 'span',
        role: 'childless',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                margin: '0 auto'
            }
        },
        txt: 'Always center text!'
    })
}

