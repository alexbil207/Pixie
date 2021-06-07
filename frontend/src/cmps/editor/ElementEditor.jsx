import React from 'react';
import { connect } from 'react-redux';
import debounce from 'react-debouncing';
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import { editorService } from '../../service/editor-service';
import { setEditingElement } from '../../store/actions/editor-actions';
import { EditText } from './editor-sections/EditText';
import { EditImgSrc } from './editor-sections/EditImgSrc';
import { EditVideoSrc } from './editor-sections/EditVideoSrc';
import { EditMapCenter } from './editor-sections/EditMapCenter';
import { EditOrientation } from './editor-sections/EditOrientation';
import { EditBoxStyling } from './editor-sections/EditBoxStyling';
import { EditBorder } from './editor-sections/EditBorder';

export class _ElementEditor extends React.Component {
    editFieldsWithPx = editorService.getFieldsWithPx();
    editFieldsWithDebounce = editorService.getFieldsWithDebounce();

    handleSpecialInputChange = (field, val) => {
        const { element } = this.props;

        if (this.editFieldsWithDebounce.includes(field)) return this.handleChangeWithDebounce({ element, field, val });

        const updatedElement = editorService.getNewElement(element, field, val);
        this.editElement(updatedElement);
    }

    handleRegInputChange = (ev) => {
        const { element } = this.props;
        const field = ev.target.name;
        let val = ev.target.value;

        if (this.editFieldsWithDebounce.includes(field)) return this.handleChangeWithDebounce({ element, field, val });

        const updatedElement = editorService.getNewElement(element, field, val);
        this.editElement(updatedElement);
    }

    handleChangeWithDebounce = debounce((editProps) => {
        const updatedElement = editorService.getNewElement(editProps.element, editProps.field, editProps.val);

        this.editElement(updatedElement);
    }, 10);

    editElement = (updatedElement) => {
        const { elementParentId, setEditingElement, onUpdateElement } = this.props;

        setEditingElement(updatedElement, elementParentId);
        onUpdateElement(updatedElement, elementParentId);
    }


    render() {
        const { element } = this.props;
        if (!element) return <div className="select-element-text">Click on an element to start editing</div>;
        const { txt, prefs } = element;
        let { style: {
            // Text style
            textAlign, fontStyle, textDecoration, fontSize, color, fontWeight, fontFamily, letterSpacing, lineHeight,
            // Box styling
            backgroundColor, backgroundImage, borderRadius,
            height, width,
            // Box Orientation
            flexGrow,
            paddingBlockStart, paddingBlockEnd, paddingInlineStart, paddingInlineEnd,
            marginBlockStart, marginBlockEnd, marginInlineStart, marginInlineEnd,
            // Borders
            borderStyle,
            borderBlockStartWidth, borderBlockEndWidth, borderInlineStartWidth, borderInlineEndWidth,
            borderBlockStartColor, borderBlockEndColor, borderInlineStartColor, borderInlineEndColor,
        } = {} } = prefs;

        return (
            <Accordion preExpanded={['txtAC', 'imgAc', 'videoAc', 'mapAc']} allowZeroExpanded={true} allowMultipleExpanded={false}>

                {('txt' in element && element.role !== 'img') &&
                    <AccordionItem uuid={'txtAC'}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Text
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <EditText
                                txt={txt}
                                textAlign={textAlign}
                                fontStyle={fontStyle}
                                textDecoration={textDecoration}
                                fontSize={fontSize}
                                color={color}
                                fontWeight={fontWeight}
                                fontFamily={fontFamily}
                                letterSpacing={letterSpacing}
                                lineHeight={lineHeight}
                                onChangeSpecialInput={this.handleSpecialInputChange}
                                onChangeValue={this.handleRegInputChange} />
                        </AccordionItemPanel>
                    </AccordionItem>}

                {
                    element.role === 'img' &&
                    <AccordionItem uuid={'imgAc'}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Source
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <EditImgSrc
                                onChangeSrc={this.handleSpecialInputChange} />
                        </AccordionItemPanel>
                    </AccordionItem>
                }

                {
                    element.role === 'video-container' &&
                    <AccordionItem uuid={'videoAc'}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Source
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <EditVideoSrc
                                element={element}
                                editElement={this.editElement}
                            />
                        </AccordionItemPanel>
                    </AccordionItem>
                }

                {
                    element.role === 'map' &&
                    <AccordionItem uuid={'mapAc'}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Location
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <EditMapCenter
                                element={element}
                                editElement={this.editElement}
                            />
                        </AccordionItemPanel>
                    </AccordionItem>
                }

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Styling
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <EditBoxStyling
                            isImg={(element.role === 'img') ? true : false}
                            backgroundColor={backgroundColor}
                            backgroundImage={backgroundImage}
                            borderRadius={borderRadius}
                            height={height}
                            width={width}
                            onChangeSpecialInput={this.handleSpecialInputChange}
                            onChangeValue={this.handleRegInputChange} />
                    </AccordionItemPanel>
                </AccordionItem>

                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Orientation
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <EditOrientation
                            role={`${"txt" in element ? 'text' : 'section'}`}
                            flexGrow={flexGrow}
                            marginBlockStart={marginBlockStart}
                            marginBlockEnd={marginBlockEnd}
                            marginInlineStart={marginInlineStart}
                            marginInlineEnd={marginInlineEnd}
                            paddingBlockStart={paddingBlockStart}
                            paddingBlockEnd={paddingBlockEnd}
                            paddingInlineStart={paddingInlineStart}
                            paddingInlineEnd={paddingInlineEnd}
                            onChangeSpecialInput={this.handleSpecialInputChange} />
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Borders
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <EditBorder
                            borderStyle={borderStyle}
                            borderBlockStartWidth={borderBlockStartWidth}
                            borderBlockEndWidth={borderBlockEndWidth}
                            borderBlockStartColor={borderBlockStartColor}
                            borderBlockEndColor={borderBlockEndColor}
                            borderInlineStartWidth={borderInlineStartWidth}
                            borderInlineEndWidth={borderInlineEndWidth}
                            borderInlineStartColor={borderInlineStartColor}
                            borderInlineEndColor={borderInlineEndColor}
                            onChangeSpecialInput={this.handleSpecialInputChange}
                            onChangeValue={this.handleRegInputChange} />
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion >
        )
    }
}


function mapStateToProps(state) {
    return {
        element: state.editorModule.editingElement,
    }
}

const mapDispatchToProps = {
    setEditingElement
}

export const ElementEditor = connect(mapStateToProps, mapDispatchToProps)(_ElementEditor)