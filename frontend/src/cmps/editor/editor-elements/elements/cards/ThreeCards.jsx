import { utilService } from '../../../../../service/util-service';

export function getThreeCards() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                txt: 'Our Dishes',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        fontSize: '35px',
                        fontFamily: 'caveat',
                    }
                }
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-evenly',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                border: '1px solid #ccc',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '5px',
                                paddingInlineEnd: '5px',
                                marginBlockStart: '15px',
                                marginBlockEnd: '15px',
                                margininlineStart: '15px',
                                marginInlineEnd: '15px',
                                height: '350px',
                                width: '250px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'img',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1610452220299-5edf90b8a6ed")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '80%',
                                        width: '100%',
                                    }
                                },
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                txt: 'Pad Thai',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '25px',
                                        fontFamily: 'caveat',
                                    }
                                }
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                border: '1px solid #cccccc',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '5px',
                                paddingInlineEnd: '5px',
                                marginBlockStart: '15px',
                                marginBlockEnd: '15px',
                                margininlineStart: '15px',
                                marginInlineEnd: '15px',
                                height: '350px',
                                width: '250px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'img',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '80%',
                                    }
                                },
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                txt: 'Curry Soup',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '25px',
                                        fontFamily: 'caveat',
                                    }
                                }
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                border: '1px solid #cccccc',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '5px',
                                paddingInlineEnd: '5px',
                                marginBlockStart: '15px',
                                marginBlockEnd: '15px',
                                margininlineStart: '15px',
                                marginInlineEnd: '15px',
                                height: '350px',
                                width: '250px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'img',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        backgroundImage: 'url("https://images.unsplash.com/photo-1514540746696-d285708190bb")',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '80%',
                                        width: '100%',
                                    }
                                },
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                txt: 'Mushroom Soup',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        fontSize: '25px',
                                        fontFamily: 'caveat',
                                    }
                                }
                            },
                        ]
                    },
                ]
            }
        ]
    })
}