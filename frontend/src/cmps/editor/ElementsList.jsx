import React from 'react';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { cloudinaryService } from '../../service/cloudinary-service';
import { editorService } from '../../service/editor-service';
import {
    cleanHeader, pixieHeader, sportHeader, maizHeader, coffeeHeader, flowerHeader,
    waveHero, sportHero, maizHero, coffeeHero, styleHero, flowerHero,
    threeCards, fullWidthImgFirstCard, fullWidthTxtFirstCard, maizCards, coffeeCards, fourCards, flowerCards,
    coffeeForm, flowerForm,
    maizFooter, coffeeFooter, flowerFooter, withSocials,
    boxText, alwaysCenterText, styleText, maizText, coffeeText, flowerText,
    flowerGallery, toyGallery,
    mapBlock, mapBeforeText, textBeforeMap
} from '../../service/element-img-service';
import { UserMsg } from '../../cmps/UserMsg';


export class ElementsList extends React.Component {
    state = {
        src: '',
        isUserMsg: false,
        msg: '',
    }

    handleChanges = ({ target }) => {
        const name = target.name;
        const value = target.value;
        this.setState(prevState => ({ ...prevState, [name]: value }))

    }

    userMsgShow = (msg) => {
        this.setState(prevState => ({ ...prevState, isUserMsg: true, msg: msg }))
        setTimeout(() => {
            this.setState(prevState => ({ ...prevState, isUserMsg: false, msg: '' }))
        }, 2000)
    }

    uploadImg = async (ev) => {
        const { onAddElement } = this.props;
        const { url } = await cloudinaryService.uploadImg(ev);
        onAddElement('img', url);
    }

    onSubmit = () => {
        const { onAddSection } = this.props;
        const { src } = this.state;
        // empty src check
        if (!src) {
            this.userMsgShow('Not Found');
            return;
        }
        // regex src check
        const regexYoutube = new RegExp(/^((http(s)?:\/\/)?)(www\.)?((youtube\.com\/)|(youtu.be\/))[\S]+/i);
        if (!regexYoutube.test(src)) {
            this.userMsgShow('Broken Youtube URL');
            return;
        }
        const fixedSrc = editorService.getFixedYoutubeUrl(src);
        onAddSection('youtube', fixedSrc);
        this.setState({ src: '', isUserMsg: false, msg: '' });
    }

    render() {
        const { onAddElement, onAddSection } = this.props;
        const { isUserMsg, msg } = this.state;
        return (
            <div className="editor-elements-list">
                <Accordion preExpanded={['boxAc']} allowZeroExpanded={true} allowMultipleExpanded={false}>
                    <AccordionItem uuid={'boxAc'}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Box
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="text-center pointer item" onClick={() => onAddSection('box')}>Empty Box</div>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Navigation bars
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={flowerHeader['default']} alt="Flower header" title="Flower header" onClick={() => onAddSection('FlowerHeader')} />
                            <img src={cleanHeader['default']} alt="Clean header" title="Clean header" onClick={() => onAddSection('CleanHeader')} />
                            <img src={pixieHeader['default']} alt="Pixie header" title="Pixie header" onClick={() => onAddSection('PixieHeader')} />
                            <img src={sportHeader['default']} alt="Sport header" title="Sport header" onClick={() => onAddSection('SportHeader')} />
                            <img src={maizHeader['default']} alt="Maiz header" title="Maiz header" onClick={() => onAddSection('MaizHeader')} />
                            <img src={coffeeHeader['default']} alt="Coffee header" title="Coffee header" onClick={() => onAddSection('CoffeeHeader')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Heros
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={flowerHero['default']} alt="Flower hero" title="Flower hero" className="lg-img" onClick={() => onAddSection('FlowerHero')} />
                            <img src={waveHero['default']} alt="Wave hero" title="Wave hero" className="lg-img" onClick={() => onAddSection('WaveHero')} />
                            <img src={sportHero['default']} alt="Sport hero" title="Sport hero" className="lg-img" onClick={() => onAddSection('SportHero')} />
                            <img src={maizHero['default']} alt="Maiz hero" title="Maiz hero" className="lg-img" onClick={() => onAddSection('MaizHero')} />
                            <img src={coffeeHero['default']} alt="Coffee hero" title="Coffe hero" className="lg-img" onClick={() => onAddSection('CoffeeHero')} />
                            <img src={styleHero['default']} alt="Style hero" title="Style hero" className="lg-img" onClick={() => onAddSection('StyleHero')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Cards
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={flowerCards['default']} alt="Flower cards" title="Flower cards" className="lg-img" onClick={() => onAddSection('FlowerCards')} />
                            <img src={threeCards['default']} alt="Three cards" title="Three cards" className="lg-img" onClick={() => onAddSection('ThreeCards')} />
                            <img src={fullWidthImgFirstCard['default']} alt="Full width img first card" title="Full image img first card" className="lg-img" onClick={() => onAddSection('FullWidthCardImgFirst')} />
                            <img src={fullWidthTxtFirstCard['default']} alt="Full width text first card" title="Full width text first card" className="lg-img" onClick={() => onAddSection('FullWidthCardTxtFirst')} />
                            <img src={maizCards['default']} alt="Maiz cards" title="Maiz cards" className="lg-img" onClick={() => onAddSection('MaizCards')} />
                            <img src={coffeeCards['default']} alt="Coffee cards" title="Coffee cards" className="lg-img" onClick={() => onAddSection('CoffeeCards')} />
                            <img src={fourCards['default']} alt="Four cards" title="Four cards" className="lg-img" onClick={() => onAddSection('FourCards')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Contact
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={coffeeForm['default']} alt="Coffee form" title="Coffee form" className="lg-img" onClick={() => onAddSection('CoffeeForm')} />
                            <img src={flowerForm['default']} alt="Flower form" title="Flower form" className="lg-img" onClick={() => onAddSection('FlowerForm')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Footers
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={maizFooter['default']} alt="Maiz footer" title="Maiz footer" onClick={() => onAddSection('MaizFooter')} />
                            <img src={coffeeFooter['default']} alt="Coffee footer" title="Coffee footer" onClick={() => onAddSection('CoffeeFooter')} />
                            <img src={flowerFooter['default']} alt="Flower footer" title="Flower footer" onClick={() => onAddSection('FlowerFooter')} />
                            <img src={withSocials['default']} alt="Footer with socials networks" title="Footer with socials networks" onClick={() => onAddSection('footerWithSocials')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Texts
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={flowerText['default']} alt="Flower text" title="Flower text" className="lg-img" onClick={() => onAddSection('FlowerTextSection')} />
                            <div className="text-center pointer item" onClick={() => onAddElement('Text')}>Inner text</div>
                            <img src={boxText['default']} alt="Box text" title="Box text" className="lg-img" onClick={() => onAddSection('Text')} />
                            <img src={alwaysCenterText['default']} alt="Always center text" title="Always center text" className="lg-img" onClick={() => onAddSection('AlwaysCenterText')} />
                            <img src={styleText['default']} alt="Style text" title="Style text" className="lg-img" onClick={() => onAddSection('StyleTextSection')} />
                            <img src={maizText['default']} alt="Maiz text" title="Maiz text" className="lg-img" onClick={() => onAddSection('MaizTextSection')} />
                            <img src={coffeeText['default']} alt="Cofee text" title="Cofee text" className="lg-img" onClick={() => onAddSection('CoffeeTextSection')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Galleries
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={toyGallery['default']} alt="Toy gallery" title="Toy gallery" className="lg-img" onClick={() => onAddSection('ToyGallery')} />
                            <img src={flowerGallery['default']} alt="Flower gallery" title="Flower gallery" className="lg-img" onClick={() => onAddSection('FlowerGallery')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Images
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="file-upload">
                                <input type="file"
                                    style={{ display: 'block', marginTop: '10px' }}
                                    onChange={this.uploadImg} />
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Maps
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className="elements-container">
                            <img src={mapBlock['default']} alt="Map block" title="Map block" className="lg-img" onClick={() => onAddSection('mapBlock')} />
                            <img src={textBeforeMap['default']} alt="Text before Map" title="Text before Map" className="lg-img" onClick={() => onAddSection('txtBeforeMap')} />
                            <img src={mapBeforeText['default']} alt="Map before text" title="Map before text" className="lg-img" onClick={() => onAddSection('mapBeforeTxt')} />
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Videos
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="flex column video">
                                <input type="text" value={this.state.src} name="src"
                                    placeholder="YouTube URL" onChange={this.handleChanges} />
                                <button className="text-center pointer" onClick={this.onSubmit}>OK</button>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
                {isUserMsg && <UserMsg msg={msg} />}
            </div>
        );
    }
}