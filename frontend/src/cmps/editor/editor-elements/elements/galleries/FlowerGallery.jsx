import { utilService } from '../../../../../service/util-service';

export function getFlowerGallery() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'div',
        isContainer: true,
        prefs: {
            className: 'flower-gallery',
            style: {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '10px',
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
                    className: 'flower-gallery-col',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        height: '120vw',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                display: 'flex',
                                borderRadius: '5px',
                                backgroundImage: 'url("https://i.ibb.co/NT0FTMM/xsknmmwcxaibl4fuxdfj.jpg")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                height: '33.3%',
                            }
                        },
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                display: 'flex',
                                borderRadius: '5px',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                backgroundImage: 'url("https://i.ibb.co/8zzSnjH/rawspbnxv91imayw3voj.jpg")',
                                height: '66.6%',
                            }
                        },
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-gallery-col',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        height: '120vw',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                display: 'flex',
                                borderRadius: '5px',
                                backgroundImage: 'url("https://i.ibb.co/rGKpVWb/mzckdgbrrrhnjqwvvawr.jpg")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                height: '100%',
                            }
                        },
                    },
                ]
            },
            {
                id: utilService.makeId(),
                type: 'div',
                role: 'div',
                isContainer: true,
                prefs: {
                    className: 'flower-gallery-col',
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                        height: '120vw',
                    }
                },
                childs: [
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                display: 'flex',
                                borderRadius: '5px',
                                backgroundImage: 'url("https://i.ibb.co/Y2Db1DK/hhv95tfr3rugrlwrhxpl.jpg")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                height: '66.6%',
                            }
                        },
                    },
                    {
                        id: utilService.makeId(),
                        type: 'div',
                        role: 'img',
                        prefs: {
                            style: {
                                display: 'flex',
                                borderRadius: '5px',
                                backgroundImage: 'url("https://i.ibb.co/VTGFsY3/jej7wrurmrikm9cwbgef.jpg")',
                                backgroundPosition: '50% 50%',
                                backgroundSize: 'cover',
                                height: '33.3%',
                            }
                        },
                    },
                ]
            }
        ],
    })
}