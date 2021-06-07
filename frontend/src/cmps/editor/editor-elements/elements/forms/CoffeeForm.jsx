import { utilService } from '../../../../../service/util-service.js';

export function getCoffeeForm() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                backgroundColor: '#eeeeee',
                paddingBlockStart: '30px',
                paddingBlockEnd: '30px',
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
                    style: {
                        display: 'flex',
                        gap: '30px',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: '#fbf5ef',
                        paddingBlockStart: '30px',
                        paddingBlockEnd: '30px',
                        paddingInlineStart: '30px',
                        paddingInlineEnd: '30px',
                        margin: 'auto',
                        maxWidth: '600px',
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
                                textAlign: 'center',
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
                                        fontSize: '10px',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'bold',
                                    }
                                },
                                txt: 'SUBSCRIBE TO'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childsless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        fontSize: '32px',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'bold',
                                    }
                                },
                                txt: 'THE COFFEE GURU'
                            },
                        ]
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childsless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#6A6B6C',
                                fontFamily: 'Mulish',
                            }
                        },
                        txt: 'Stay connected and stay informed with The Coffee Guru. Get the freshest coffee content straight to your inbox without having to miss a thing!'
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
                                borderBlockEndColor: '#6a6b6c',
                                backgroundColor: 'unset',
                                color: '#6a6b6c',
                                fontFamily: 'Mulish',
                                paddingBlockStart: '10px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '10px',
                                paddingInlineEnd: '10px',
                                width: '100%',
                                outline: 'none',
                            }
                        },
                        placeholder: 'NAME'
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
                                borderBlockEndColor: '#6a6b6c',
                                backgroundColor: 'unset',
                                color: '#6a6b6c',
                                fontFamily: 'Mulish',
                                paddingBlockStart: '10px',
                                paddingBlockEnd: '10px',
                                paddingInlineStart: '10px',
                                paddingInlineEnd: '10px',
                                width: '100%',
                                outline: 'none',
                            }
                        },
                        placeholder: 'EMAIL'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childsless',
                        prefs: {
                            style: {
                                display: 'flex',
                                border: 'none',
                                borderRadius: '30px',
                                backgroundColor: '#A67D69',
                                color: '#eeeeee',
                                fontFamily: 'Montserrat',
                                paddingBlockStart: '15px',
                                paddingBlockEnd: '15px',
                                paddingInlineStart: '20px',
                                paddingInlineEnd: '20px',
                            }
                        },
                        txt: 'SIGN ME UP'
                    },
                ]
            }
        ]
    })
}

