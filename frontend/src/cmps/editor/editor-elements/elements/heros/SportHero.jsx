import { utilService } from '../../../../../service/util-service';

export function getSportHero() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        isContainer: true,
        prefs: {
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundImage: 'url("https://i.ibb.co/PzBy6tX/tlrnc1ndp4iztizp6ppq.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '350px',
                width: '100%',
            }
        },
        childs: [{
            id: utilService.makeId(),
            type: 'span',
            role: 'childless',
            prefs: {
                style: {
                    display: 'flex',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(199, 1, 1, 0.5)',
                    color: '#ffffcc',
                    fontSize: '20px',
                    fontFamily: 'inter',
                    fontWeight: 'bold',
                    paddingInlineStart: '15px',
                    paddingInlineEnd: '15px',
                    paddingBlockStart: '5px',
                    paddingBlockEnd: '5px'
                }
            },
            txt: '75% Off! Only today!'
        },
        {
            id: utilService.makeId(),
            type: 'button',
            role: 'childless',
            prefs: {
                style: {
                    display: 'flex',
                    cursor: 'pointer',
                    borderInlineStartColor: '#1a1a1a',
                    borderInlineEndColor: '#1a1a1a',
                    borderBlockStartColor: '#1a1a1a',
                    borderBlockEndColor: '#1a1a1a',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(199, 1, 1, 0.7)',
                    color: '#ffffcc',
                    fontSize: '20px',
                    fontFamily: 'inter',
                    fontWeight: 'bold',
                    paddingInlineStart: '15px',
                    paddingInlineEnd: '15px',
                    paddingBlockStart: '5px',
                    paddingBlockEnd: '5px'
                }
            },
            txt: 'Start shopping!',
        }]
    })
}