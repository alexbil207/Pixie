import { utilService } from '../../../../../service/util-service';

export function getCoffeeHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#FCF6F1',
                color: '#0C1115',
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                paddingBlockStart: '20px',
                paddingBlockEnd: '20px',
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
                        display: 'flex',
                        flexGrow: 1,
                        color: '#A67D69',
                        fontSize: '24px',
                        fontFamily: 'Literata',
                    }
                },
                txt: 'The Coffee Guru'
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
                txt: 'Coffee'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                        paddingInlineStart: '10px',
                        paddingInlineEnd: '10px',
                    }
                },
                txt: 'Brewing'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "nav-desktop",
                    style: {
                        paddingInlineStart: '10px',
                        paddingInlineEnd: '10px',
                    }
                },
                txt: 'Guide'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "fas hamburger-icon",
                    style: {
                        paddingInlineStart: '10px',
                        paddingInlineEnd: '10px',
                    }
                },
                txt: ''
            },
        ]
    })
}