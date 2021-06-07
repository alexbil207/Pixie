import { utilService } from '../../../../../service/util-service';

export function getPixieHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#1e1e1e',
                paddingRight: '30px',
                paddingLeft: '30px',
                height: '52px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    style: {
                        backgroundImage: 'url("https://i.ibb.co/b66nCcp/logo2.png")',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: '25px',
                        width: '79px'
                    }
                },
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                backgroundColor: '#1e1e1e',
                                color: '#06aabf',
                                fontSize: '18px',
                                fontFamily: 'inter',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                paddingInlineStart: '40px',
                            }
                        },
                        txt: 'Editor'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                backgroundColor: '#1e1e1e',
                                color: '#d6d6d6',
                                fontSize: '18px',
                                fontFamily: 'inter',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                paddingInlineStart: '40px',
                            }
                        },
                        txt: 'Templates'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                backgroundColor: '#1e1e1e',
                                color: '#d6d6d6',
                                fontSize: '18px',
                                fontFamily: 'inter',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                paddingInlineStart: '40px',
                            }
                        },
                        txt: 'About'
                    }
                ]
            }
        ]
    })
}