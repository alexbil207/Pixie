import { utilService } from '../service/util-service';

export const data = {
    _id: 'i123',
    settings: {
        name: 'Puki site',
        createdBy: {
            email: 'alexbil90@gmail.com',
            _id: 'i1001'
        },
        title: 'Puki site'
    },

    app: {
        id: utilService.makeId(),
        name: 'site container',
        type: 'section',
        role: 'container',
        prefs: {
            style: {
            }
        },
        childs: [{
            id: utilService.makeId(),
            name: 'herobero',
            type: 'div',
            role: 'hero',
            prefs: {
                style: {
                    height: '400px',
                    width: '100%',
                    backgroundImage: 'URL(https://www.ppt-backgrounds.net/thumbs/jungles-hd-pictures--live-hd-hq-pictures-images---frame-slides.jpeg)',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }
            },
            childs: [
                {
                    id: utilService.makeId(),
                    type: 'span',
                    role: 'childless',
                    prefs: {
                        style: {
                            fontSize: '30px',
                            color: '#FFFFFF'
                        },
                    },
                    txt: 'IM BIG HERO!!!'
                },
                {
                    type: 'button',
                    id: utilService.makeId(),
                    role: 'childless',
                    prefs: {
                        style: {
                            height: '50px',
                            width: '80px',
                            backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            borderRadius: '10px',
                            marginTop: '15px'
                        }
                    },
                    txt: 'take me!'
                }]
        }]
    }
}