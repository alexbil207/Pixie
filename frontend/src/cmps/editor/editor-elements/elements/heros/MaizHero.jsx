import { utilService } from '../../../../../service/util-service'

export function getMaizHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'maiz-hero',
            style: {
                display: 'flex',
                backgroundImage: 'url("https://i.ibb.co/3NV1m47/o8c98nc0dms1ihyu1jmg.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                fontFamily: 'Montserrat',
                lineHeight: '1.6',
                height: '800px',
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'maiz-hero-container',
                    style: {
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                        margin: 'auto',
                        height: '100%',
                        width: '80%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            className: 'container12',
                            style: {
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                height: '350px',
                                width: '390px',
                            }
                        },
                        childs: [
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                className: "maiz-hero-span",
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        fontSize: '42px',
                                        color: '#FBA91A',
                                        fontWeight: 900,
                                    }
                                },
                                txt: '#STARTWITHWHY'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        color: '#EEEEEE',
                                        fontWeight: 900,
                                    }
                                },
                                txt: 'Because Mcdonalds speed and Indigo Deli quality is a thing – its called fast casual.'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        color: '#EEEEEE',
                                    }
                                },
                                txt: 'Fast casual is fast food reinvented. Fresh ingredients, actual cooking, super-quick live preparation, and easy on the calories and your wallet.'
                            },
                        ]
                    }
                ]
            }
        ]
    })
}