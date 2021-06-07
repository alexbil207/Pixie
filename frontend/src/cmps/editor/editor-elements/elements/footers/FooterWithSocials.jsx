import { utilService } from '../../../../../service/util-service';

export function getFooterWithSocails() {
    return ({
        id: utilService.makeId(),
        type: 'footer',
        role: 'footer-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#14b1ab',
                paddingInlineStart: '36px',
                paddingInlineEnd: '36px',
                paddingBlockStart: '16px',
                paddingBlockEnd: '16px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: 'FWS-copyrights',
                    style: {
                        display: 'flex',
                        color: '#eeeeee',
                        fontSize: '16px',
                        fontFamily: 'inter',
                        fontWeight: '200'
                    }
                },
                txt: '© All rights reserved'
            },
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: 'FWS-company-name',
                    style: {
                        display: 'flex',
                        color: '#eeeeee',
                        fontSize: '16px',
                        fontFamily: 'inter',
                        fontWeight: '200'
                    }
                },
                txt: 'Company name comes here'
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'socials-container',
                isContainer: true,
                prefs: {
                    className: 'socials-container',
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
                            className: 'fab FWS-facebook-icn',
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                color: '#eeeeee',
                                fontSize: '18px',
                                marginInlineEnd: '16px'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fab FWS-twiter-icn',
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                color: '#eeeeee',
                                fontSize: '18px',
                                marginInlineEnd: '16px'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fab FWS-instagram-icn',
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                color: '#eeeeee',
                                fontSize: '18px',
                                marginInlineEnd: '16px'
                            }
                        }
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            className: 'fab FWS-pinterest-icn',
                            style: {
                                cursor: 'pointer',
                                display: 'flex',
                                color: '#eeeeee',
                                fontSize: '18px',
                            }
                        }
                    }
                ]
            }
        ]
    })
}