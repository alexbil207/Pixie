import { utilService } from '../../../../../service/util-service';

export function getMapBeforeTxt() {
    return {
        id: utilService.makeId(),
        type: 'div',
        role: 'map-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                paddingInlineStart: '16px',
                paddingInlineEnd: '16px',
                paddingBlockStart: '10px',
                paddingBlockEnd: '10px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'map',
                prefs: {
                    className: 'map-with-text-map-container',
                    style: {
                        height: '300px',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'iframe',
                        role: 'childless',
                        prefs: {
                            style: {
                                width: '100%',
                                height: '100%',
                                border: 'none',
                            },
                            src: `https://maps.google.com/maps?q=Old%20Trafford%20Stadium&z=15&output=embed`
                        },
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'text-container',
                isContainer: true,
                prefs: {
                    className: 'map-with-text-text-container',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        paddingInlineStart: '10px',
                        paddingInlineEnd: '10px',
                        paddingBlockStart: '10px',
                        paddingBlockEnd: '10px',
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
                                fontSize: '20px',
                                fontWeight: 'bold',
                                fontFamily: 'inter',
                                letterSpacing: '1px',
                                marginBlockEnd: '16px'
                            }
                        },
                        txt: 'Old Trafford Stadium',
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'info-container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap',
                                fontFamily: 'inter',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'text-section',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        flexBasis: '100%',
                                        fontFamily: 'inter',
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
                                                flexBasis: '20%',
                                                fontWeight: 'bold',
                                                marginInlineEnd: '10px'
                                            }
                                        },
                                        txt: 'Address:',
                                    },
                                    {
                                        id: utilService.makeId(),
                                        type: 'span',
                                        role: 'childless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                            }
                                        },
                                        txt: 'Sir Matt Busby Way, Old Trafford, Stretford, Manchester.',
                                    },
                                ]
                            },
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'text-section',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        flexBasis: '100%',
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
                                                flexBasis: '20%',
                                                fontWeight: 'bold',
                                                marginInlineEnd: '10px'
                                            }
                                        },
                                        txt: 'Capacity:',
                                    },
                                    {
                                        id: utilService.makeId(),
                                        type: 'span',
                                        role: 'childless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                            }
                                        },
                                        txt: '74,140 Wonderful supporters.',
                                    },
                                ]
                            },
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'text-section',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        flexBasis: '100%',
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
                                                flexBasis: '20%',
                                                fontWeight: 'bold',
                                                marginInlineEnd: '10px'
                                            }
                                        },
                                        txt: 'Opened:',
                                    },
                                    {
                                        id: utilService.makeId(),
                                        type: 'span',
                                        role: 'childless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                            }
                                        },
                                        txt: '19 February 1910; 111 years ago.',
                                    },
                                ]
                            },
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'text-section',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        flexBasis: '100%',
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
                                                flexBasis: '20%',
                                                fontWeight: 'bold',
                                                marginInlineEnd: '10px'
                                            }
                                        },
                                        txt: 'Record:',
                                    },
                                    {
                                        id: utilService.makeId(),
                                        type: 'span',
                                        role: 'childless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                            }
                                        },
                                        txt: '76,962 (25 March 1939).',
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'quote-container',
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                justifyContent: 'center',
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
                                        display: 'flex',
                                        fontSize: '25px',
                                        fontFamily: 'Caveat',
                                        fontWeight: '900',
                                        letterSpacing: '1px',
                                        textAlign: 'center',
                                        width: '25ch'
                                    }
                                },
                                txt: '"We\'ll keep our red flag flying high cause Man Untd will never die"',
                            },
                        ]
                    }
                ]
            }
        ]
    }
};
