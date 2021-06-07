import { utilService } from '../../../../../service/util-service.js'

export function getMaizFooter() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer',
        isContainer: true,
        prefs: {
            className: 'maiz-footer',
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '15px',
                backgroundColor: '#262931',
                color: '#eeeeee',
                fontSize: '18px',
                fontFamily: 'Montserrat',
                paddingBlockStart: '30px',
                paddingBlockEnd: '30px',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex'
                    }
                },
                txt: '© 2019 Maiz Hospitality Pvt Ltd.'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        color: '#FBA91A',
                        fontSize: '24px',
                    }
                },
                txt: 'MAIZ'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex'
                    }
                },
                txt: 'Privacy Policy | About'
            },
        ]
    })
}

