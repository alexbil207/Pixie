import { utilService } from '../../../../../service/util-service.js'

export function getMaizCards() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            className: "maiz-cards-container",
            style: {
                display: 'flex',
                flexWrap: 'wrap',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                prefs: {
                    className: "maiz-cards",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundImage: 'url("https://i.ibb.co/wcR8v7f/rzhpqqp6rzvz6vybhwoj.jpg")',
                        backgroundSize: 'cover',
                        textAlign: 'center',
                        color: '#eeeeee',
                        paddingBlockStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineStart: '30px',
                        paddingInlineEnd: '30px',
                        height: '120vw',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                alignSelf: 'center',
                                display: 'flex',
                                fontSize: '42px',
                                fontFamily: 'Blenda Script',
                            }
                        },
                        txt: 'Authentic',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                display: 'flex',
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                            }
                        },
                        txt: 'We serve only one cuisine',
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                prefs: {
                    className: "maiz-cards",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundImage: 'url("https://i.ibb.co/sJbr4WS/xqyy1a9ow5l4z5vl2q4v.jpg")',
                        backgroundSize: 'cover',
                        color: '#eeeeee',
                        textAlign: 'center',
                        height: '120vw',
                        width: '100%',
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
                        role: 'childsless',
                        prefs: {
                            style: {
                                alignSelf: 'center',
                                display: 'flex',
                                fontSize: '42px',
                                fontFamily: 'Blenda Script',
                            }
                        },
                        txt: 'Healthy',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                display: 'flex',
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                            }
                        },
                        txt: 'You can eat our food without feeling guilty',
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                prefs: {
                    className: "maiz-cards",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        backgroundImage: 'url("https://i.ibb.co/FDTntSW/bonc9ea7ln4np4tcejzr.jpg")',
                        backgroundSize: 'cover',
                        textAlign: 'center',
                        color: '#eeeeee',
                        paddingBlockStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineStart: '30px',
                        paddingInlineEnd: '30px',
                        height: '120vw',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                alignSelf: 'center',
                                display: 'flex',
                                fontSize: '42px',
                                fontFamily: 'Blenda Script',
                            }
                        },
                        txt: 'Fresh',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                display: 'flex',
                                fontFamily: 'Montserrat',
                                fontSize: '12px',
                            }
                        },
                        txt: 'The produce is fresh, but so is the cooking',
                    },
                ]
            },
        ]
    })
}

