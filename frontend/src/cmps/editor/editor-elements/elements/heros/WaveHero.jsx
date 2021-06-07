import { utilService } from '../../../../../service/util-service';

export function getWaveHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'hero-container',
        isContainer: true,
        prefs: {
            className: 'hero-with-navbar-container',
            style: {
                display: 'flex',
                flexDirection: 'column',
                backgroundImage: 'url("https://i.ibb.co/QJPpgBK/op3liw5t.png")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#14b1ab',
                paddingBlockStart: '30px',
                paddingInlineStart: '36px',
                paddingInlineEnd: '36px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'hero-nav-container',
                isContainer: true,
                prefs: {
                    style: {
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'space-between',
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
                                color: '#1e1e1e',
                                fontSize: '32px',
                                fontFamily: 'Inter',
                                fontWeight: '200',
                            }
                        },
                        txt: 'HR'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fas hamburger-icn hero-with-navbar-hamburger',
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                color: '#eeeeee'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'navigation-container',
                        iscontainer: true,
                        prefs: {
                            className: 'hero-with-navbar-nav-container',
                            style: {
                                display: 'flex',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        color: '#eeeeee',
                                        fontFamily: 'Inter',
                                        marginInlineEnd: '30px',
                                        height: 'max-content'
                                    }
                                },
                                txt: 'Home'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        color: '#eeeeee',
                                        fontFamily: 'Inter',
                                        marginInlineEnd: '30px',
                                        height: 'max-content'
                                    }
                                },
                                txt: 'Services'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        color: '#eeeeee',
                                        fontFamily: 'Inter',
                                        marginInlineEnd: '30px',
                                        height: 'max-content'
                                    }
                                },
                                txt: 'Gallery'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        color: '#eeeeee',
                                        fontFamily: 'Inter',
                                        height: 'max-content'
                                    }
                                },
                                txt: 'About us'
                            }
                        ]
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'text-conainer',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        maxWidth: '550px'
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
                                color: '#1e1e1e',
                                fontSize: '60px',
                                fontFamily: 'Inter',
                                fontWeight: 'bold',
                                letterSpacing: '2px'
                            }
                        },
                        txt: 'Every strong headline'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '45px',
                                fontFamily: 'Inter',
                                fontWeight: '100',
                                marginBlockEnd: '40px'
                            }
                        },
                        txt: 'Has a strong subheading'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '25px',
                                fontFamily: 'Inter',
                                fontWeight: '100',
                                marginBlockEnd: '40px',
                                maxWidth: '500px'
                            }
                        },
                        txt: 'The single letter does not survive the translation from language to language, nor does the word.'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                borderRadius: '30px',
                                color: '#eeeeee',
                                backgroundColor: '#14b1ab',
                                fontSize: '16px',
                                fontFamily: 'Inter',
                                paddingBlockStart: '15px',
                                paddingBlockEnd: '15px',
                                paddingInlineStart: '30px',
                                paddingInlineEnd: '30px',
                                width: 'max-content'
                            }
                        },
                        txt: 'Show Me'
                    }
                ]
            }
        ]
    })
}