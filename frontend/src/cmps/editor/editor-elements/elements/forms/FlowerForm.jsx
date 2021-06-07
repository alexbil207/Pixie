import { utilService } from '../../../../../service/util-service.js';

export function getFlowerForm() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                backgroundColor: '#eeeeee',
                paddingBlockStart: '30px',
                paddingBlockEnd: '30px',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    className: 'flower-form-img-container',
                    style: {
                        backgroundImage: 'url("https://c.stocksy.com/a/xeK000/z9/79419.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        borderRadius: '5px',
                    }
                },
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'form-container',
                isContainer: true,
                prefs: {
                    className: 'flower-form-text-container',
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
                                color: '#EF903A',
                                fontSize: '32px',
                                fontFamily: 'Josefine Sans',
                                marginBlockEnd: '30px'
                            }
                        },
                        txt: 'Contact us.'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                fontSize: '20px',
                                fontFamily: 'Montserrat',
                                marginBlockEnd: '30px'
                            }
                        },
                        txt: 'Have a question? Want to place an order? Feel free to contact us, we responds 24/7!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'contact-container',
                        isContainer: true,
                        prefs: {
                            style: {
                                display: 'flex',
                                flexWrap: 'wrap'
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'container',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        flexBasis: '100%',
                                        justifyContent: 'space-between',
                                        gap: '30px',
                                        marginBlockEnd: '15px',
                                    }
                                },
                                childs: [
                                    {
                                        id: utilService.makeId(),
                                        type: 'input',
                                        role: 'childsless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                                bortderStyle: 'solid',
                                                borderBlockStartWidth: '0px',
                                                borderInlineStartWidth: '0px',
                                                borderInlineEndWidth: '0px',
                                                borderBlockEndWidth: '1px',
                                                borderBlockEndColor: '#EF903A',
                                                backgroundColor: 'unset',
                                                fontFamily: 'Montserrat',
                                                paddingBlockStart: '5px',
                                                paddingBlockEnd: '5px',
                                                paddingInlineStart: '5px',
                                                paddingInlineEnd: '5px',
                                                width: '100%',
                                                outline: 'none',
                                            }
                                        },
                                        placeholder: 'Full name *'
                                    },
                                    {
                                        id: utilService.makeId(),
                                        type: 'input',
                                        role: 'childsless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                                bortderStyle: 'solid',
                                                borderBlockStartWidth: '0px',
                                                borderInlineStartWidth: '0px',
                                                borderInlineEndWidth: '0px',
                                                borderBlockEndWidth: '1px',
                                                borderBlockEndColor: '#EF903A',
                                                backgroundColor: 'unset',
                                                fontFamily: 'Montserrat',
                                                paddingBlockStart: '5px',
                                                paddingBlockEnd: '5px',
                                                paddingInlineStart: '5px',
                                                paddingInlineEnd: '5px',
                                                width: '100%',
                                                outline: 'none',
                                            }
                                        },
                                        placeholder: 'E-mail *'
                                    },
                                ]
                            },
                            {
                                id: utilService.makeId(),
                                type: 'div',
                                role: 'container',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        flexBasis: '100%',
                                        justifyContent: 'space-between',
                                        gap: '30px',
                                        marginBlockEnd: '15px',
                                    }
                                },
                                childs: [
                                    {
                                        id: utilService.makeId(),
                                        type: 'input',
                                        role: 'childsless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                                bortderStyle: 'solid',
                                                borderBlockStartWidth: '0px',
                                                borderInlineStartWidth: '0px',
                                                borderInlineEndWidth: '0px',
                                                borderBlockEndWidth: '1px',
                                                borderBlockEndColor: '#EF903A',
                                                backgroundColor: 'unset',
                                                fontFamily: 'Montserrat',
                                                paddingBlockStart: '5px',
                                                paddingBlockEnd: '5px',
                                                paddingInlineStart: '5px',
                                                paddingInlineEnd: '5px',
                                                width: '100%',
                                                outline: 'none',
                                            }
                                        },
                                        placeholder: 'Address'
                                    },
                                    {
                                        id: utilService.makeId(),
                                        type: 'input',
                                        role: 'childsless',
                                        prefs: {
                                            style: {
                                                display: 'flex',
                                                bortderStyle: 'solid',
                                                borderBlockStartWidth: '0px',
                                                borderInlineStartWidth: '0px',
                                                borderInlineEndWidth: '0px',
                                                borderBlockEndWidth: '1px',
                                                borderBlockEndColor: '#EF903A',
                                                backgroundColor: 'unset',
                                                fontFamily: 'Montserrat',
                                                paddingBlockStart: '5px',
                                                paddingBlockEnd: '5px',
                                                paddingInlineStart: '5px',
                                                paddingInlineEnd: '5px',
                                                width: '100%',
                                                outline: 'none',
                                            }
                                        },
                                        placeholder: 'Zip code'
                                    },
                                ]
                            },
                            {
                                id: utilService.makeId(),
                                type: 'input',
                                role: 'childsless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        bortderStyle: 'solid',
                                        borderBlockStartWidth: '0px',
                                        borderInlineStartWidth: '0px',
                                        borderInlineEndWidth: '0px',
                                        borderBlockEndWidth: '1px',
                                        borderBlockEndColor: '#EF903A',
                                        backgroundColor: 'unset',
                                        fontSize: '18px',
                                        fontFamily: 'Montserrat',
                                        paddingBlockStart: '5px',
                                        paddingBlockEnd: '5px',
                                        paddingInlineStart: '5px',
                                        paddingInlineEnd: '5px',
                                        marginBlockEnd: '15px',
                                        width: '100%',
                                        outline: 'none',
                                    }
                                },
                                placeholder: 'What\'s on your mind?'
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
                                borderRadius: '5px',
                                backgroundColor: '#EF903A',
                                fontSize: '18px',
                                fontWeight: 'bold',
                                paddingInlineStart: '20px',
                                paddingInlineEnd: '20px',
                                paddingBlockStart: '5px',
                                paddingBlockEnd: '5px',
                                fontFamily: 'Raleway',
                                width: 'max-content'
                            }
                        },
                        txt: 'SEND!'
                    }
                ]
            }
        ]
    })
}

