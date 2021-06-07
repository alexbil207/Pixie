import { elements } from '../cmps/editor/editor-elements/elements';

// Export functions
export const elementService = {
    getElement,
    removeElementById,
    editElement,
    addElement,
    reorderElement,
};

// Get element
function getElement(type, src = null) {
    switch (type) {
        case 'box':
            return elements.getBox()

        // Headers
        case 'CleanHeader':
            return elements.getCleanHeader();
        case 'PixieHeader':
            return elements.getPixieHeader();
        case 'SportHeader':
            return elements.getSportHeader();
        case 'MaizHeader':
            return elements.getMaizHeader();
        case 'CoffeeHeader':
            return elements.getCoffeeHeader();
        case 'FlowerHeader':
            return elements.getFlowerHeader();

        // Heros
        case 'WaveHero':
            return elements.getWaveHero();
        case 'SportHero':
            return elements.getSportHero();
        case 'MaizHero':
            return elements.getMaizHero();
        case 'CoffeeHero':
            return elements.getCoffeeHero();
        case 'StyleHero':
            return elements.getStyleHero();
        case 'FlowerHero':
            return elements.getFlowerHero();

        // Cards
        case 'ThreeCards':
            return elements.getThreeCards();
        case 'FullWidthCardImgFirst':
            return elements.getFullWidthCardImgFirst();
        case 'FullWidthCardTxtFirst':
            return elements.getFullWidthCardTextFirst();
        case 'MaizCards':
            return elements.getMaizCards();
        case 'CoffeeCards':
            return elements.getCoffeeCards();
        case 'FourCards':
            return elements.getFourCards();
        case 'FlowerCards':
            return elements.getFlowerCards();

        // Forms
        case 'CoffeeForm':
            return elements.getCoffeeForm();
        case 'FlowerForm':
            return elements.getFlowerForm();

        // Footers
        case 'MaizFooter':
            return elements.getMaizFooter();
        case 'CoffeeFooter':
            return elements.getCoffeeFooter();
        case 'FlowerFooter':
            return elements.getFlowerFooter();
        case 'footerWithSocials':
            return elements.getFooterWithSocails();

        // Texts
        case 'Text':
            return elements.getText();
        case 'AlwaysCenterText':
            return elements.getAlwaysCenterText();
        case 'StyleTextSection':
            return elements.getStyleTextSection();
        case 'MaizTextSection':
            return elements.getMaizTextSection();
        case 'CoffeeTextSection':
            return elements.getCoffeeTextSection();
        case 'FlowerTextSection':
            return elements.getFlowerTextSection();

        // Galleries
        case 'FlowerGallery':
            return elements.getFlowerGallery();
        case 'ToyGallery':
            return elements.getToyGallery();

        // Images
        case 'img':
            return elements.getImg(src);

        // Maps
        case 'mapBlock':
            return elements.getMapBlock();
        case 'mapBeforeTxt':
            return elements.getMapBeforeTxt();
        case 'txtBeforeMap':
            return elements.getTxtBeforeMap();

        // Videos
        case 'youtube':
            return elements.getVideo(src);

        default: return;
    }
}

// REMOVE DONE
function removeElementById(data, elementId) {
    findTarget(data, elementId)

    return data;

    function findTarget(data, elementId) {
        if (!data.childs) return;
        const elementIdx = data.childs.findIndex(child => child.id === elementId);
        if (elementIdx !== -1) {
            data.childs.splice(elementIdx, 1);
            return
        } else {
            data.childs.forEach(child => findTarget(child, elementId));
        }
    }
}

// EDIT DONE
function editElement(data, elementId, newElement) {
    findTarget(data, elementId, newElement)

    return data;

    function findTarget(data, elementId, newElement) {
        if (!data.childs) return;
        const elementIdx = data.childs.findIndex(child => child.id === elementId);
        if (elementIdx !== -1) {
            data.childs.splice(elementIdx, 1, newElement);
            return
        } else {
            data.childs.forEach(child => findTarget(child, elementId, newElement));
        }
    }
}

//ADD ELEMENT
function addElement(data, elementId, elementType, src = null) {
    const newElement = getElement(elementType, src);

    findTarget(data, elementId, newElement);

    return data;

    function findTarget(data, elementId, newElement) {
        if (!data.childs) return;
        const parentIdx = data.childs.findIndex(child => child.id === elementId);
        if (parentIdx !== -1) {
            data.childs[parentIdx].childs.push(newElement);
            return;
        } else {
            data.childs.forEach(child => findTarget(child, elementId, newElement));
        }
    }
}

// UP / DOWN
function reorderElement(data, elementId, val) {
    findTarget(data, elementId, val)

    return data;

    function findTarget(data, elementId, val) {
        if (!data.childs) return;
        const elementIdx = data.childs.findIndex(child => child.id === elementId);
        if ((val === -1 && elementIdx === 0) || (val === 1 && elementIdx === data.childs.length - 1)) return;
        if (elementIdx !== -1) {
            [data.childs[elementIdx], data.childs[elementIdx + val]] = [data.childs[elementIdx + val], data.childs[elementIdx]]
            return
        } else {
            data.childs.forEach(child => findTarget(child, elementId, val));
        }
    }
}