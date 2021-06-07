import { utilService } from '../../../../../service/util-service.js';

export function getCoffeeCards() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            className: "coffee-card-container",
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                gap: '30px',
                paddingBlockStart: '15px',
                paddingBlockEnd: '15px',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    className: 'Coffee-card',
                    style: {
                        display: 'flex',
                        backgroundColor: '#fbf5ef',
                        paddingBlockStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineStart: '30px',
                        paddingInlineEnd: '30px',
                        minHeight: '200px',
                        width: '100%',
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
                                backgroundImage: 'url("https://i.ibb.co/3B0fpzJ/jptgwhbuq1gklcukkk6h.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                borderRight: '1px #e0e0e0 solid',
                                borderInlineEnd: '1px solid #e0e0e0',
                                marginInlineEnd: '10px',
                                height: '100%',
                                width: '25%',
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
                                flexDirection: 'column',
                                gap: '15px',
                                width: '75%',
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
                                        fontSize: '24px',
                                        fontFamily: 'Montserrat',
                                    }
                                },
                                txt: 'COFFEE',
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        fontFamily: 'Mulish',
                                        color: '#6a6b6c',
                                    }
                                },
                                txt: 'Learn about coffee and all the various types of coffee beans, coffee roasts and coffee drinks!',
                            },
                        ]
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'container',
                isContainer: true,
                prefs: {
                    className: 'Coffee-card',
                    style: {
                        display: 'flex',
                        backgroundColor: '#fbf5ef',
                        paddingBlockStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineStart: '30px',
                        paddingInlineEnd: '30px',
                        minHeight: '200px',
                        width: '100%',
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
                                backgroundImage: 'url("https://i.ibb.co/3B0fpzJ/jptgwhbuq1gklcukkk6h.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                borderInlineEnd: '1px solid #e0e0e0',
                                marginInlineEnd: '10px',
                                height: '100%',
                                width: '25%',
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
                                flexDirection: 'column',
                                gap: '15px',
                                width: '75%',
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
                                        fontSize: '24px',
                                        fontFamily: 'Montserrat',
                                    }
                                },
                                txt: 'COFFEE',
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        fontFamily: 'Mulish',
                                        color: '#6a6b6c',
                                    }
                                },
                                txt: 'Learn about coffee and all the various types of coffee beans, coffee roasts and coffee drinks!',
                            },
                        ]
                    }
                ]
            }
        ]
    })
}

