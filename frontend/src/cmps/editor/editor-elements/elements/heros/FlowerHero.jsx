import { utilService } from '../../../../../service/util-service';
import heroImg from '../../../../../assets/img/svg-white-borders.svg';

export function getFlowerHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-hero',
            style: {
                display: 'flex',
                alignItems: 'center',
                backgroundImage: `url(${heroImg})`,
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundColor: '#FFB2DF',
                paddingBlockStart: '30px',
                paddingInlineStart: '30px',
                paddingBlockEnd: '30px',
                paddingInlineEnd: '30px',
            }
        },
        childs: [
            {
                id: utilService.makeId(), //container
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-hero-container',
                    style: {
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        gap: '15px',
                        height: '100%',
                        width: '100%',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(), //container
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                display: 'flex',
                                backgroundImage: 'url("https://i.ibb.co/DY0Xvzy/ghivdhlwzsgbrcnbk05n.png")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                minHeight: '400px',
                                minWidth: '320px',
                                width: '40%',
                            }
                        },
                    },
                    {
                        id: utilService.makeId(), //container
                        type: 'div',
                        role: 'div',
                        isContainer: true,
                        prefs: {
                            className: 'flower-hero-text',
                            style: {
                                display: 'flex',
                                gap: '24px',
                                flexDirection: 'column',
                                alignItems: 'center',
                                fontFamily: 'Josefine Sans',
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
                                        color: '#eeeeee',
                                        fontSize: '64px',
                                        lineHeight: '80px'
                                    }
                                },
                                txt: '“It\'s never too late to have a happy childhood„'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'span',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        color: '#53440c',
                                        fontSize: '20px',
                                        maxWidth: '40ch'
                                    }
                                },
                                txt: 'Tom Robbins defined the secret of life. Don\'t you fill the same? Just grab a new toy and feel like a HAPPY child once again!'
                            },
                            {
                                id: utilService.makeId(),
                                type: 'button',
                                role: 'childless',
                                prefs: {
                                    style: {
                                        display: 'flex',
                                        border: 'none',
                                        borderRadius: '30px',
                                        backgroundColor: '#ffc935',
                                        color: '#53440c',
                                        fontSize: '18px',
                                        fontFamily: 'Raleway',
                                        fontWeight: 'bold',
                                        paddingBlockStart: '16px',
                                        paddingInlineStart: '32px',
                                        paddingBlockEnd: '16px',
                                        paddingInlineEnd: '32px',
                                    }
                                },
                                txt: 'LET\'S BUY!'
                            },
                        ]
                    }
                ]
            }
        ]
    })
}