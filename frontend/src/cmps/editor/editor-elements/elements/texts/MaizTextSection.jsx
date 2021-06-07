import { utilService } from '../../../../../service/util-service.js'

export function getMaizTextSection() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            style: {
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                fontSize: '24px',
                fontFamily: 'Montserrat',
                gap: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childsless',
                prefs: {
                    style: {
                    }
                },
                txt: 'Learn more about our philosophy and what differentiates us on our:'
            },
            {
                id: utilService.makeId(),
                type: 'button',
                role: 'childsless',
                prefs: {
                    style: {
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        backgroundColor: '#FBA91A',
                        border: 'unset',
                        padding: '10px 20px 10px 20px',
                        fontSize: '1rem',
                    }
                },
                txt: 'Brand Ethos',
            },
        ]
    })
}

