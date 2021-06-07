import { utilService } from '../../../../service/util-service.js'

export function getVideo(src) {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'video-container',
        isContainer: true,
        prefs: {
            className: "video-product-container"
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'iframe',
                role: 'video',
                prefs: {
                    className: "video-product",
                    src: src
                },
                txt: '',
            }
        ],
    })
}
