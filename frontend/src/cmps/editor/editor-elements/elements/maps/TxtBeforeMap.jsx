import { utilService } from '../../../../../service/util-service';

export function getTxtBeforeMap() {
    return {
        id: utilService.makeId(),
        type: 'div',
        role: 'map-container',
        isContainer: true,
        prefs: {
            className: 'text-before-map-container',
            style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '30px',
                backgroundColor: '#eeeeee',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
                paddingBlockStart: '10px',
                paddingBlockEnd: '10px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'txt-container',
                isContainer: true,
                prefs: {
                    className: 'text-before-map-text-container',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
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
                                fontSize: '27px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '30px'
                            }
                        },
                        txt: 'Open - air condition'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '20px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '30px'
                            }
                        },
                        txt: '"I came to this store to find some findings, and so it was! I found a lot of good founds!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#1e1e1e',
                                fontSize: '20px',
                                fontFamily: 'inter',
                                fontWeight: '200',
                                marginBlockEnd: '30px'
                            }
                        },
                        txt: 'There are no limits of what you can find here! from A to Z! absolutely everything!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#1e1e1e',
                                fontSize: '16px',
                                fontFamily: 'inter',
                            }
                        },
                        txt: 'Come visit us!'
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'map',
                prefs: {
                    class: 'text-before-map-map-container',
                    style: {
                        flexGrow: 1,
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
                            },
                            src: `https://maps.google.com/maps?q=Tzofar%20Israel&z=15&output=embed`
                        },
                    }
                ]
            },
        ]
    }
};
