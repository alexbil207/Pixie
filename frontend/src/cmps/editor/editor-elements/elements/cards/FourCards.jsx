import { utilService } from '../../../../../service/util-service';

export function getFourCards() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'cards-container',
        isContainer: true,
        prefs: {
            className: 'four-cards-container',
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '30px',
                paddingInlineStart: '36px',
                paddingInlineEnd: '36px',
                marginBlockEnd: '30px'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'card-container',
                prefs: {
                    style: {
                        flexBasis: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '200px'
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
                                backgroundImage: `url("https://i.ibb.co/mFZYMtC/img4.png")`,
                                backgroundSize: 'cover',
                                marginBlockEnd: '16px',
                                height: '200px',
                                width: '100%'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '21px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '16px',
                            }
                        },
                        txt: 'Remote work'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                borderStyle: 'solid',
                                borderBlockStartWidth: '1px',
                                borderBlockStartColor: '#aaaaaa',
                                borderBlockEndWidth: '1px',
                                borderBlockEndColor: '#aaaaaa',
                                borderInlineStartWidth: '1px',
                                borderInlineStartColor: '#aaaaaa',
                                borderInlineEndWidth: '1px',
                                borderInlineEndColor: '#aaaaaa',
                                borderRadius: '20px',
                                backgroundColor: '#14b1ab',
                                color: '#eeeeee',
                                fontSize: '16px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '10px',
                                paddingInlineEnd: '10px',
                            }
                        },
                        txt: 'Read more'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'card-container',
                prefs: {
                    style: {
                        flexBasis: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '200px'
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
                                backgroundImage: `url("https://i.ibb.co/bg3zbXT/img6.png")`,
                                backgroundSize: 'cover',
                                marginBlockEnd: '16px',
                                height: '200px',
                                width: '100%'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '21px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '16px',
                            }
                        },
                        txt: 'LinkedIn premium'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                borderStyle: 'solid',
                                borderBlockStartWidth: '1px',
                                borderBlockStartColor: '#aaaaaa',
                                borderBlockEndWidth: '1px',
                                borderBlockEndColor: '#aaaaaa',
                                borderInlineStartWidth: '1px',
                                borderInlineStartColor: '#aaaaaa',
                                borderInlineEndWidth: '1px',
                                borderInlineEndColor: '#aaaaaa',
                                borderRadius: '20px',
                                backgroundColor: '#14b1ab',
                                color: '#eeeeee',
                                fontSize: '16px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '10px',
                                paddingInlineEnd: '10px',
                            }
                        },
                        txt: 'Read more'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'card-container',
                prefs: {
                    style: {
                        flexBasis: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '200px'
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
                                backgroundImage: `url("https://i.ibb.co/86KQ2HG/Jan-Business-team-3.png")`,
                                backgroundSize: 'cover',
                                marginBlockEnd: '16px',
                                height: '200px',
                                width: '100%'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '21px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '16px',
                            }
                        },
                        txt: 'Earn money'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                borderStyle: 'solid',
                                borderBlockStartWidth: '1px',
                                borderBlockStartColor: '#aaaaaa',
                                borderBlockEndWidth: '1px',
                                borderBlockEndColor: '#aaaaaa',
                                borderInlineStartWidth: '1px',
                                borderInlineStartColor: '#aaaaaa',
                                borderInlineEndWidth: '1px',
                                borderInlineEndColor: '#aaaaaa',
                                borderRadius: '20px',
                                backgroundColor: '#14b1ab',
                                color: '#eeeeee',
                                fontSize: '16px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '10px',
                                paddingInlineEnd: '10px',
                            }
                        },
                        txt: 'Read more'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'card-container',
                prefs: {
                    style: {
                        flexBasis: '20%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        minWidth: '200px'
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
                                backgroundImage: `url("https://i.ibb.co/vXYwTx1/5396346.png")`,
                                backgroundSize: 'cover',
                                marginBlockEnd: '16px',
                                height: '200px',
                                width: '100%'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '21px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '16px',
                            }
                        },
                        txt: 'Stay safe'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                borderStyle: 'solid',
                                borderBlockStartWidth: '1px',
                                borderBlockStartColor: '#aaaaaa',
                                borderBlockEndWidth: '1px',
                                borderBlockEndColor: '#aaaaaa',
                                borderInlineStartWidth: '1px',
                                borderInlineStartColor: '#aaaaaa',
                                borderInlineEndWidth: '1px',
                                borderInlineEndColor: '#aaaaaa',
                                borderRadius: '20px',
                                backgroundColor: '#14b1ab',
                                color: '#eeeeee',
                                fontSize: '16px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                paddingInlineStart: '10px',
                                paddingInlineEnd: '10px',
                            }
                        },
                        txt: 'Read more'
                    },
                ]
            },
        ]
    })
}