import React from 'react';
import { editorService } from '../../../service/editor-service';
import Select from 'react-select';
import Slider from 'rc-slider';

export class EditBorder extends React.Component {
    borderStyleOptions = [
        { value: 'none', label: 'None' },
        { value: 'solid', label: 'Line' },
        { value: 'dotted', label: 'Dotted' },
        { value: 'dashed', label: 'Dashed' },
        { value: 'double', label: 'Double' },
    ]


    render() {
        let { borderBlockStartWidth, borderBlockStartColor, borderBlockEndWidth, borderBlockEndColor,
            borderInlineStartWidth, borderInlineStartColor, borderInlineEndWidth, borderInlineEndColor,
            onChangeSpecialInput, onChangeValue } = this.props;

        // assign default values if the given value is undefined
        borderBlockStartColor = !borderBlockStartColor ? '#ffffff' : borderBlockStartColor;
        borderBlockEndColor = !borderBlockEndColor ? '#ffffff' : borderBlockEndColor;
        borderInlineStartColor = !borderInlineStartColor ? '#ffffff' : borderInlineStartColor;
        borderInlineEndColor = !borderInlineEndColor ? '#ffffff' : borderInlineEndColor;

        // Handle parameters with 'px'
        const strippedPropsFromPx = {
            borderBlockStartWidth: (borderBlockStartWidth) ? editorService.stripFromPx(borderBlockStartWidth) : 0,
            borderBlockEndWidth: (borderBlockEndWidth) ? editorService.stripFromPx(borderBlockEndWidth) : 0,
            borderInlineStartWidth: (borderInlineStartWidth) ? editorService.stripFromPx(borderInlineStartWidth) : 0,
            borderInlineEndWidth: (borderInlineEndWidth) ? editorService.stripFromPx(borderInlineEndWidth) : 0,
        }

        return (
            <>
                {/* Edit border style */}
                <div className="accordion-inner-title">Style</div>
                <div className="accordion-inner-content">
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Style: </span>
                        <Select
                            className="edit-select"
                            placeholder={"Style"}
                            onChange={(selectedOption) => onChangeSpecialInput('borderStyle', selectedOption.value)}
                            options={this.borderStyleOptions}
                        />
                    </div>
                </div>


                <div className="accordion-inner-title">Top</div>
                <div className="accordion-inner-content">
                    {/* Edit border top size */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Size:</span>
                        <Slider max={40} value={strippedPropsFromPx.borderBlockStartWidth} onChange={(value) => onChangeSpecialInput('borderBlockStartWidth', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.borderBlockStartWidth} px</span>
                    </div>

                    {/* Edit border top color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="color">Color: </label>
                        <input type="color" id="borderBlockStartColor" name="borderBlockStartColor" value={borderBlockStartColor} onChange={onChangeValue} />
                        <span className="editor-indicator">{borderBlockStartColor}</span>
                    </div>
                </div>


                <div className="accordion-inner-title">Bottom</div>
                <div className="accordion-inner-content">
                    {/* Edit border bottom size */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Size:</span>
                        <Slider max={40} value={strippedPropsFromPx.borderBlockEndWidth} onChange={(value) => onChangeSpecialInput('borderBlockEndWidth', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.borderBlockEndWidth} px</span>
                    </div>

                    {/* Edit border bottom color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="color">Color: </label>
                        <input type="color" id="borderBlockEndColor" name="borderBlockEndColor" value={borderBlockEndColor} onChange={onChangeValue} />
                        <span className="editor-indicator">{borderBlockEndColor}</span>
                    </div>
                </div>


                <div className="accordion-inner-title">Left</div>
                <div className="accordion-inner-content">
                    {/* Edit border left size */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Size:</span>
                        <Slider max={40} value={strippedPropsFromPx.borderInlineStartWidth} onChange={(value) => onChangeSpecialInput('borderInlineStartWidth', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.borderInlineStartWidth} px</span>
                    </div>

                    {/* Edit border left color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="color">Color: </label>
                        <input type="color" id="borderInlineStartColor" name="borderInlineStartColor" value={borderInlineStartColor} onChange={onChangeValue} />
                        <span className="editor-indicator">{borderInlineStartColor}</span>
                    </div>
                </div>


                <div className="accordion-inner-title">Right</div>
                <div className="accordion-inner-content">
                    {/* Edit border bottom size */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Size:</span>
                        <Slider max={40} value={strippedPropsFromPx.borderInlineEndWidth} onChange={(value) => onChangeSpecialInput('borderInlineEndWidth', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.borderInlineEndWidth} px</span>
                    </div>

                    {/* Edit border left color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="color">Color: </label>
                        <input type="color" id="borderInlineEndColor" name="borderInlineEndColor" value={borderInlineEndColor} onChange={onChangeValue} />
                        <span className="editor-indicator">{borderInlineEndColor}</span>
                    </div>
                </div>



                <div className="accordion-inner-title">Right border</div>
            </>
        )
    }
}