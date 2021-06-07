import { utilService } from '../../../../../service/util-service';

export function getText() {
    return ({
        id: utilService.makeId(),
        type: 'div',
        role: 'text-div',
        prefs: {
            className: "flex text-product-container"
        },
        childs: [
            {
                id: utilService.makeId(),
                type: 'span',
                role: 'childless',
                prefs: {
                    className: "flex text-product",
                    style: { width: '100%' }
                },
                txt: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum corrupti sed pariatur dignissimos laudantium quos expedita quibusdam illo deserunt, voluptate maxime minima, magnam culpa. Perferendis nam veritatis tempora cupiditate rem!
                Impedit laudantium ea recusandae excepturi sed atque culpa exercitationem fugiat nam consequuntur incidunt vitae suscipit error corrupti quam facere ratione, quos minima aliquam hic ex dolorum quia eos quae! Deleniti!
                Atque enim quos voluptatibus debitis consequatur quo. Dolor et autem vitae itaque veritatis atque modi enim ullam, qui adipisci corrupti fugit debitis maiores exercitationem molestias impedit! Ipsa omnis assumenda accusamus?`
            }
        ],
    })
}
