import { utilService } from '../../../../../service/util-service';

export function getSportHeader() {
    return ({
        id: utilService.makeId(),
        type: 'header',
        role: 'header',
        isContainer: true,
        prefs: {
            className: 'sports-header',
            style: {
                display: 'flex',
                flexDirection: 'column',
            }
        },
        childs: [{
            id: utilService.makeId(),
            type: 'div',
            role: 'top-part',
            isContainer: true,
            prefs: {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#1a1a1a',
                    paddingInlineStart: '16px',
                    paddingInlineEnd: '16px',
                    paddingBlockStart: '10px',
                    paddingBlockEnd: '10px'
                }
            },
            childs: [{
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    style: {
                        cursor: 'pointer',
                        display: 'flex',
                        backgroundImage: 'url("https://assets.manutd.com/AssetPicker/images/0/0/3/2/197240/Header-Logo1500994616801.png")',
                        backgroundSize: 'contain',
                        height: '75px',
                        width: '75px'
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
                        backgroundColor: '#c70101',
                        borderRadius: '5px',
                        color: '#ffffcc',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        fontFamily: 'JetBrainsMono',
                        fontStyle: 'italic',
                        paddingInlineStart: '15px',
                        paddingInlineEnd: '15px',
                        paddingBlockStart: '5px',
                        paddingBlockEnd: '5px'
                    }
                },
                txt: 'Powered by HCL'
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'navigation',
                prefs: {
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
                            className: 'fas hamburger',
                            style: {
                                cursor: 'pointer',
                                color: '#ffffcc'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'navigation-links-container',
                        prefs: {
                            className: 'links-container',
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        border: 0,
                                        borderStyle: 'dashed',
                                        borderInlineEndWidth: '1px',
                                        borderInlineEndColor: '#cccccc',
                                        backgroundColor: '#1a1a1a',
                                        color: '#ffffcc',
                                        fontSize: '18px',
                                        fontFamily: 'inter',
                                        fontWeight: 'bold',
                                        paddingInlineEnd: '10px'
                                    }
                                },
                                txt: 'Videos'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        border: 0,
                                        borderStyle: 'dashed',
                                        borderInlineEndWidth: '1px',
                                        borderInlineEndColor: '#cccccc',
                                        backgroundColor: '#1a1a1a',
                                        color: '#ffffcc',
                                        fontSize: '18px',
                                        fontFamily: 'inter',
                                        fontWeight: 'bold'
                                    }
                                },
                                txt: 'News'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        border: 0,
                                        borderStyle: 'dashed',
                                        borderInlineEndWidth: '1px',
                                        borderInlineEndColor: '#cccccc',
                                        backgroundColor: '#1a1a1a',
                                        color: '#ffffcc',
                                        fontSize: '18px',
                                        fontFamily: 'inter',
                                        fontWeight: 'bold'
                                    }
                                },
                                txt: 'Shop'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        cursor: 'pointer',
                                        display: 'flex',
                                        border: 0,
                                        backgroundColor: '#1a1a1a',
                                        color: '#ffffcc',
                                        fontSize: '18px',
                                        fontFamily: 'inter',
                                        fontWeight: 'bold'
                                    }
                                },
                                txt: 'Fixures'
                            },
                        ]
                    },
                ]
            },
            ]
        },
        {
            id: utilService.makeId(),
            type: 'div',
            role: 'bottom-part',
            isContainer: true,
            prefs: {
                style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#c70101',
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
                    role: 'left-part',
                    prefs: {
                        style: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            alignItems: 'baseline',
                        }
                    },
                    childs: [
                        {
                            id: utilService.makeId(),
                            type: 'span',
                            role: 'childless',
                            prefs: {
                                className: 'far user',
                                style: {
                                    display: 'flex',
                                    color: '#ffffcc',
                                    paddingInlineEnd: '10px'
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
                                    color: '#ffffcc',
                                    fontWeight: 'bold',
                                    paddingInlineEnd: '10px',
                                    letterSpacing: '1px'
                                }
                            },
                            txt: 'Pixie'
                        },
                        {
                            id: utilService.makeId(),
                            type: 'span',
                            role: 'childless',
                            prefs: {
                                style: {
                                    display: 'flex',
                                    cursor: 'pointer',
                                    color: '#ffffcc',
                                    fontSize: '12px',
                                    letterSpacing: '1px'
                                }
                            },
                            txt: '(Claim your 75% off NOW!)'
                        }
                    ]
                },
                {
                    id: utilService.makeId(),
                    type: 'span',
                    role: 'childless',
                    prefs: {
                        style: {
                            display: 'flex',
                            color: '#ffffcc',
                            fontWeight: 'bold',
                            letterSpacing: '1px',
                            textAlign: 'right'
                        }
                    },
                    txt: 'Main page'
                },
            ]
        }

        ]
    })
}