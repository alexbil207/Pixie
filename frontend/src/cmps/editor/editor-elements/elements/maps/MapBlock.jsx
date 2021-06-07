import { utilService } from '../../../../../service/util-service';

export function getMapBlock() {
    return {
        id: utilService.makeId(),
        type: 'div',
        role: 'map-container',
        isContainer: true,
        className: 'responsive-card1',
        prefs: {
            style: {
                display: 'flex',
                padding: '30px',
                height: '500px'
            }
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'map',
                prefs: {
                    style: {
                        margin: '50px auto',
                        width: '400px',
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
                            src: `https://maps.google.com/maps?q=Tel-Aviv&z=15&output=embed`
                        },
                    }
                ]
            }
        ]
    }
};
