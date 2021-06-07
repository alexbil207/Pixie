import { utilService } from '../../../../../service/util-service.js'

export function getCoffeeTextSection() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            style: {
                fontSize: '24px',
                fontFamily: 'Literata',
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                backgroundColor: '#EEEEEE',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childsless',
                prefs: {
                    style: {
                        color: '#1E1E1E',
                    }
                },
                txt: 'So, you want to learn about coffee? Let us help!'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childsless',
                prefs: {
                    style: {
                        color: '#A67D69',
                    }
                },
                txt: 'What would you like to learn about?',
            },
        ]
    })
}

