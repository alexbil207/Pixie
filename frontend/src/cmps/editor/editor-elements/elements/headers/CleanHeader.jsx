import { utilService } from '../../../../../service/util-service';

export function getCleanHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#eeeeee',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                height: '50px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    style: {
                        backgroundImage: 'url("https://about.gitlab.com/images/press/logo/png/gitlab-icon-1-color-black-rgb.png")',
                        backgroundSize: 'contain',
                        height: '50px',
                        width: '50px'
                    }
                },
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        fontFamily: 'Oxanium',
                        color: '#1e1e1e'
                    }
                },
                txt: 'NAME HERE'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        fontFamily: 'RobotoMono',
                        color: '#1e1e1e'
                    }
                },
                txt: 'ABOUT'
            }
        ]
    })
}