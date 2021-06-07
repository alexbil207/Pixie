import { utilService } from '../../../../../service/util-service';

export function getFullWidthCardTextFirst() {
    return ({
        id: utilService.makeId(),
        type: 'section',
        role: 'card-container',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                backgroundColor: '#1a1a1a',
                paddingInlineStart: '15px',
                paddingInlineEnd: '15px',
                paddingBlockStart: '5px',
                paddingBlockEnd: '5px',
                width: '100%',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'text-container',
                prefs: {
                    className: 'full-width-card-text-first-text',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        flexBasis: '50%',
                        flexGrow: 1,
                        textAlign: 'justify'
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
                                color: '#c70101',
                                fontSize: '20px',
                                fontFamily: 'inter',
                                fontWeight: 'bold'
                            }
                        },
                        txt: 'Cavani voted Player of the Month for May 2021'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#bbbbbb',
                                fontSize: '14px',
                                fontFamily: 'arial',
                                marginBlockStart: '10px',
                                marginBlockEnd: '10px',
                            }
                        },
                        txt: 'Written by system | 01/06/2021'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#ffffcc',
                                fontFamily: 'arial',
                            }
                        },
                        txt: 'After scoring 5 goals and added 2 assists in only 3 games, Cavani voted as the Primer League player of the month for May 2021!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#ffffcc',
                                fontFamily: 'arial',
                            }
                        },
                        txt: 'Cavani thanked the red supporters and told NBC news: "It is a great honor to win this trophy, we still have a lot of work to do, considering the league table. We are still on the championship race and we wont give up. we want to make our supporters happy, and we\'ll do what ever it taks for that.'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#ffffcc',
                                fontFamily: 'arial',
                            }
                        },
                        txt: 'Man UTD facing a tough month facing Chelsea, West Ham United and West Bromwich.'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                color: '#ffffcc',
                                fontFamily: 'arial',
                            }
                        },
                        txt: 'Tickets are now available on Man UTD\'s shop. Don\'t miss it!'
                    },
                    {
                        id: utilService.makeId(),
                        type: 'span',
                        role: 'childless',
                        prefs: {
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end',
                                alignItems: 'flex-end',
                                flexGrow: 1,
                                color: '#ffffcc',
                                fontFamily: 'arial',
                            }
                        },
                        txt: '15 comments'
                    }
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    className: 'full-width-card-img',
                    style: {
                        display: 'flex',
                        backgroundImage: 'url("https://i.ibb.co/9nxwML3/da4siydr3mzqwkk0wtpa.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: '30vw',
                        width: '30vh'
                    }
                }
            },
        ]
    })
}