import { utilService } from '../../../../../service/util-service'

export function getStyleHero() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'section',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundImage: 'url("https://images.unsplash.com/photo-1584500403203-c9727ebf2a0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")',
                backgroundSize: 'cover',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                height: '100vh',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        marginBlockStart: '10px',
                        marginBlockEnd: '10px',
                        height: '85px',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'span',
                        prefs: {
                            style: {
                                curson: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#ffffff',
                                fontSize: '32px',
                                fontFamily: 'Raleway',
                                fontWeight: 'bold',
                                flex: 1,
                                height: '100%',
                            }
                        },
                        txt: 'STYLEPONT'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            className: 'header-product-nav-btns',
                            style: {
                                alignItems: 'center',
                                height: '100%',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                        fontSize: '21px',
                                        fontFamily: 'Raleway',
                                        fontWeight: 'bold',
                                        height: '100%',
                                        outline: 'none',
                                    }
                                },
                                txt: 'Services'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                        fontSize: '21px',
                                        fontFamily: 'Raleway',
                                        fontWeight: 'bold',
                                        height: '100%',
                                        outline: 'none',
                                    }
                                },
                                txt: 'Collections'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        border: 'none',
                                        backgroundColor: 'transparent',
                                        color: '#fff',
                                        fontSize: '21px',
                                        fontFamily: 'Raleway',
                                        fontWeight: 'bold',
                                        height: '100%',
                                        outline: 'none',
                                    }
                                },
                                txt: 'About'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'button',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                        backgroundColor: 'transparent',
                                        outline: 'none',
                                        border: 'none',
                                        fontFamily: 'Raleway',
                                        fontSize: '1.3rem',
                                        fontWeight: 'bold',
                                        color: '#fff',
                                        cursor: 'pointer',
                                    }
                                },
                                txt: 'Blog'
                            }
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'button',
                        prefs: {
                            className: 'product-header-humburger-btn',
                            style: {
                                cursor: 'pointer',
                                alignItems: 'center',
                                border: 'none',
                                backgroundColor: 'transparent',
                                color: '#ffffff',
                                fontSize: '24px',
                                fontFamily: 'Raleway',
                                fontWeight: 'bold',
                                height: '100%',
                                outline: 'none',
                            }
                        },
                        txt: '☰'
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'span',
                prefs: {
                    style: {
                        display: 'flex',
                        justifyContent: 'center',
                        color: '#ffffff',
                        fontSize: '56px',
                        fontFamily: 'Raleway',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '0 0 5px #000000',
                    }
                },
                txt: 'Do you believe in style?'
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'span',
                        prefs: {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#ffffff',
                                fontSize: '25px',
                                fontFamily: 'Raleway',
                                fontWeight: 'bold',
                                textShadow: '0 0 5px #000000'
                            }
                        },
                        txt: 'scroll down'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'span',
                        prefs: {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                color: '#ffffff',
                                fontSize: '25px',
                                fontFamily: 'Raleway',
                                fontWeight: 'bold',
                                textShadow: '0 0 5px #000000'
                            }
                        },
                        txt: '⬇'
                    }
                ]
            }

        ]
    })
}
