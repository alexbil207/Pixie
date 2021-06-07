import { utilService } from '../../../../../service/util-service';

export function getFlowerFooter() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                backgroundColor: '#332a08',
                fontFamily: 'Raleway',
                paddingBlockStart: '10px',
                paddingInlineEnd: '30px',
                paddingBlockEnd: '10px',
                paddingInlineStart: '30px',
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
                                fontWeight: 'bold',
                                borderBottom: '1px solid #EEEEEE',
                                paddingBlockStart: '10px',
                                paddingInlineEnd: '15px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '15px',
                                marginBlockEnd: '10px',
                            }
                        },
                        txt: 'FLOWERTIN'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                paddingBlockStart: '10px',
                                paddingInlineEnd: '15px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '15px',
                                marginBlockEnd: '10px',
                            }
                        },
                        txt: 'FLOWERS'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                paddingBlockStart: '10px',
                                paddingInlineEnd: '15px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '15px',
                                marginBlockEnd: '10px',
                            }
                        },
                        txt: 'DELIVERIES'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                paddingBlockStart: '10px',
                                paddingInlineEnd: '15px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '15px',
                                marginBlockEnd: '10px',
                            }
                        },
                        txt: 'SHOP'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                paddingBlockStart: '10px',
                                paddingInlineEnd: '15px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '15px',
                                marginBlockEnd: '10px',
                            }
                        },
                        txt: 'FAQS'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    style: {
                        display: 'flex',
                        fontSize: '10px',
                    }
                },
                txt: '© FLOWERTIN'
            },
        ]
    })
}