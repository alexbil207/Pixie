import { utilService } from '../../../../../service/util-service';

export function getMaizHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                gap: '15px',
                alignItems: 'center',
                backgroundColor: '#262931',
                color: '#eeeeee',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                height: '90px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        flexGrow: 1,
                        color: '#FBA91A',
                        fontSize: '42px',
                        fontWeight: 'bold',
                    }
                },
                txt: 'MAIZ'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                    }
                },
                txt: 'HOME'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                    }
                },
                txt: 'MENU'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                    }
                },
                txt: 'CATERING'
            },
            {
                id: utilService.makeId(),
                type: 'button',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                        border: 'unset',
                        backgroundColor: '#FBA91A',
                        fontSize: '1rem',
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        paddingBlockStart: '10px',
                        paddingBlockEnd: '10px',
                        paddingInlineStart: '20px',
                        paddingInlineEnd: '20px',
                        padding: '10px 20px 10px 20px',
                    }
                },
                txt: 'ORDER NOW'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "fas hamburger-icon",
                    style: {
                        color: '#FBA91A',
                    }
                },
                txt: ''
            },
        ]
    })
}