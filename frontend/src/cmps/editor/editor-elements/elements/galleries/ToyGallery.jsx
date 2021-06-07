import { utilService } from '../../../../../service/util-service';

export function getToyGallery() {
    return (
        {
            id: utilService.makeId(),
            type: 'div',
            role: 'div',
            isContainer: true,
            prefs: {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
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
                    role: 'row-container',
                    isContainer: true,
                    prefs: {
                        style: {
                            display: 'flex',
                            flexGrow: 1,
                            gap: '16px'
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
                                    flexGrow: 1,
                                    flexBasis: '50%',
                                    borderStyle: 'solid',
                                    borderBlockStartWidth: '1px',
                                    borderBlockStartColor: '#555555',
                                    borderInlineEndWidth: '1px',
                                    borderInlineEndColor: '#555555',
                                    borderBlockEndWidth: '1px',
                                    borderBlockEndColor: '#555555',
                                    borderInlineStartWidth: '1px',
                                    borderInlineStartColor: '#555555',
                                    borderRadius: '5px',
                                    backgroundImage: 'url("https://i.ibb.co/SyWr8zk/vintage-hand-drawn-toys-pattern-seamless-doll-airplane-whirligig-rocket-39357826.jpg")',
                                    backgroundPosition: '50% 50%',
                                    backgroundSize: 'cover',
                                    height: '250px',
                                    width: '500px'
                                }
                            },
                        },
                    ]
                },
                {
                    id: utilService.makeId(),
                    type: 'div',
                    role: 'row-container',
                    isContainer: true,
                    prefs: {
                        style: {
                            display: 'flex',
                            flexGrow: 1,
                            gap: '16px',
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
                                    flexGrow: 1,
                                    flexBasis: '50%',
                                    borderStyle: 'solid',
                                    borderBlockStartWidth: '1px',
                                    borderBlockStartColor: '#555555',
                                    borderInlineEndWidth: '1px',
                                    borderInlineEndColor: '#555555',
                                    borderBlockEndWidth: '1px',
                                    borderBlockEndColor: '#555555',
                                    borderInlineStartWidth: '1px',
                                    borderInlineStartColor: '#555555',
                                    borderRadius: '5px',
                                    backgroundImage: 'url("https://i.ibb.co/BT7kxsR/385.jpg")',
                                    backgroundPosition: '50% 50%',
                                    backgroundSize: 'cover',
                                    height: '200px',
                                    width: '300px'
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
                                    flexGrow: 1,
                                    flexBasis: '50%',
                                    borderStyle: 'solid',
                                    borderBlockStartWidth: '1px',
                                    borderBlockStartColor: '#555555',
                                    borderInlineEndWidth: '1px',
                                    borderInlineEndColor: '#555555',
                                    borderBlockEndWidth: '1px',
                                    borderBlockEndColor: '#555555',
                                    borderInlineStartWidth: '1px',
                                    borderInlineStartColor: '#555555',
                                    borderRadius: '5px',
                                    backgroundImage: 'url("https://i.ibb.co/wBRQ6jH/toys-group-cartoon-coloring-book-vector-17479391.jpg")',
                                    backgroundPosition: '50% 50%',
                                    backgroundSize: 'cover',
                                    height: '200px',
                                    width: '300px'
                                }
                            },
                        },
                    ]
                },
            ],
        }
    )
}