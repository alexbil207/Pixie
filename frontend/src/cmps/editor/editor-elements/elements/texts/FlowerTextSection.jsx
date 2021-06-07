import { utilService } from '../../../../../service/util-service';

export function getFlowerTextSection() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-text-section',
            style: {
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                justifyContent: 'space-between',
                backgroundColor: '#eeeeee',
                paddingBlockStart: '30px',
                paddingInlineEnd: '30px',
                paddingBlockEnd: '30px',
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
                    className: 'flower-text-section-container',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        justifyContent: 'center',
                        flexGrow: 1,
                        width: '100%',
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
                                fontSize: '64px',
                                fontFamily: 'Josefine Sans',
                            }
                        },
                        txt: 'Variety of flowers, at a phone call reach.'
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
                            }
                        },
                        txt: 'Flowers and plants are always a great gift for those you hold dear, or even yourself. Whether you\'re shopping for birthday flowers for your mom or you want to surprise your husband at the office with a lush bonsai plant, we\'ve got you covered.'
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'img',
                prefs: {
                    className: 'flower-text-section-img',
                    style: {
                        display: 'flex',
                        backgroundImage: 'url("https://i.ibb.co/cLsDqjw/tphkq3tozqklg261ku8x.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top',
                        borderRadius: '5px',
                        height: '400px',
                        width: '100%',
                    }
                },
            }
        ]
    })
}