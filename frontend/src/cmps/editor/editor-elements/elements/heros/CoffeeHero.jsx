import { utilService } from '../../../../../service/util-service'

export function getCoffeeHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: "coffee-hero",
            style: {
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#FBF5EF',
                paddingBlockStart: '30px',
                paddingBlockEnd: '30px',
                paddingInlineStart: '30px',
                paddingInlineEnd: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(), //HERO LEFT
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: "coffee-hero-left",
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        gap: '15px',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(), //HERO LEFT SPAN CONT
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            style: {
                                fontSize: '50px',
                                fontFamily: 'Literata',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                    }
                                },
                                txt: 'Don\'t let bad '
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        color: '#A67D69',
                                    }
                                },
                                txt: 'coffee '
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                    }
                                },
                                txt: 'spoil your day. Brew better coffee '
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        color: '#A67D69',
                                    }
                                },
                                txt: 'today!'
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
                                fontFamily: 'Mulish',
                                lineHeight: '28px',
                            }
                        },
                        txt: 'Learn about the latest coffee gear and brewing techniques today with our informative coffee guides. Brewing coffee shouldn\'t be rocket science. Let us help! Stay informed with the latest coffee information today with The Coffee Guru coffee blog!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'button',
                        role: 'childless',
                        prefs: {
                            style: {
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
                        txt: 'JOIN TODAY',
                    },
                ]
            },
            {
                id: utilService.makeId(), //HERO RIGHT 
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    style: {
                        display: 'flex',
                        flexBasis: '50%',
                        alignItems: 'flex-end',
                        justifyContent: 'flex-start',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                backgroundImage: 'url("https://i.ibb.co/3B0fpzJ/jptgwhbuq1gklcukkk6h.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                height: '150px',
                                width: '75%',
                            }
                        },
                    }
                ]
            }
        ]
    })
}