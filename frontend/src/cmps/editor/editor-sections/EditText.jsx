import React from 'react';
import { editorService } from '../../../service/editor-service';
import Slider from 'rc-slider';
import Select from 'react-select';

export class EditText extends React.Component {
    state = {
        fontStyle: null,
        textDecoration: null
    }

    componentDidMount() {
        const { fontStyle, textDecoration } = this.props;
        this.setState({ fontStyle, textDecoration });
    }


    onChangeDecoration(decoration) {
        const { fontStyle, textDecoration } = this.state
        const { onChangeSpecialInput } = this.props
        switch (decoration) {
            case 'fontStyle':
                if (fontStyle === 'italic') {
                    onChangeSpecialInput('fontStyle', 'normal');
                    this.setState({ ...this.state, fontStyle: 'normal' });
                } else {
                    onChangeSpecialInput('fontStyle', 'italic');
                    this.setState({ ...this.state, fontStyle: 'italic' });
                }
                break;
            case 'textDecoration':
                if (textDecoration === 'underline') {
                    onChangeSpecialInput('textDecoration', 'none');
                    this.setState({ ...this.state, textDecoration: 'none' });
                } else {
                    onChangeSpecialInput('textDecoration', 'underline');
                    this.setState({ ...this.state, textDecoration: 'underline' });
                }
                break;
            default: return;
        }
    }


    fontWeightOptions = [
        { value: '200', label: 'Thin' },
        { value: '400', label: 'Normal' },
        { value: 'bold', label: 'Bold' },
        { value: '900', label: 'Boldest' },
    ]

    fontFamilyOptions = [
        { value: 'Arial', label: 'Arial' },
        { value: 'David', label: 'David' },
        { value: 'CrimsonPro', label: 'CrimsonPro' },
        { value: 'Caveat', label: 'Caveat' },
        { value: 'DancingScript', label: 'DancingScript' },
        { value: 'Grandstander', label: 'Grandstander' },
        { value: 'GrenzeGotisch', label: 'GrenzeGotisch' },
        { value: 'Inconsolata', label: 'Inconsolata' },
        { value: 'Inter', label: 'Inter' },
        { value: 'JetBrainsMono', label: 'JetBrainsMono' },
        { value: 'Orbitron', label: 'Orbitron' },
        { value: 'Oxanium', label: 'BoOxaniumld' },
        { value: 'Raleway', label: 'Raleway' },
        { value: 'RobotoMono', label: 'RobotoMono' },
        { value: 'RobotoSlab', label: 'RobotoSlab' },
    ]


    render() {
        let { txt, textAlign, fontStyle, textDecoration, fontSize, color, letterSpacing, lineHeight, onChangeSpecialInput, onChangeValue } = this.props;

        // assign default values if the given value is undefined
        color = !color ? '#ffffff' : color;

        // Handle parameters with 'px'
        const strippedPropsFromPx = {
            fontSize: (fontSize) ? editorService.stripFromPx(fontSize) : 20,
            letterSpacing: (letterSpacing) ? editorService.stripFromPx(letterSpacing) : 0,
            lineHeight: (lineHeight) ? editorService.stripFromPx(lineHeight) : 0
        }

        return (
            <>
                {/* Edit text */}
                <div className="accordion-inner-title">Text</div>
                <div className="accordion-inner-content">
                    <textarea className="edit-text-textarea" type="text" id="txt" placeholder="Insert text" name="txt" value={txt} onChange={onChangeValue} />
                </div>

                <div className="accordion-inner-title">Styling</div>

                {/* Edit font flow & style */}
                <div className="flex space-between">
                    <div className="flex editor-text-pref-warper">
                        <span className={"fas editor-text-pref-icn left" + (textAlign === 'left' ? ' active' : '')}
                            onClick={() => onChangeSpecialInput('textAlign', 'left')}></span>
                        <span className={"fas editor-text-pref-icn center" + (textAlign === 'center' ? ' active' : '')}
                            onClick={() => onChangeSpecialInput('textAlign', 'center')}></span>
                        <span className={"fas editor-text-pref-icn right" + (textAlign === 'right' ? ' active' : '')}
                            onClick={() => onChangeSpecialInput('textAlign', 'right')}></span>
                    </div>

                    <div className="flex editor-text-pref-warper">
                        <span className={"fas editor-text-pref-icn italic" + (fontStyle === 'italic' ? ' active' : '')}
                            onClick={() => this.onChangeDecoration('fontStyle')}></span>
                        <span className={"fas editor-text-pref-icn underline" + (textDecoration === 'underline' ? ' active' : '')}
                            onClick={() => {
                                onChangeSpecialInput('textDecoration', 'underline')
                                this.onChangeDecoration('textDecoration')
                            }}></span>
                    </div>
                </div>

                {/* Edit font size */}
                <div className="accordion-inner-content">
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Size:</span>
                        <Slider min={10} value={strippedPropsFromPx.fontSize} onChange={(value) => onChangeSpecialInput('fontSize', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.fontSize} px</span>
                    </div>

                    {/* Edit font color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="color">Color: </label>
                        <input type="color" id="color" name="color" value={color} onChange={onChangeValue} />
                        <span className="editor-indicator">{color}</span>
                    </div>

                    {/* Edit font weight */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Weight: </span>
                        <Select
                            className="edit-select"
                            placeholder={"Weight"}
                            onChange={(selectedOption) => onChangeSpecialInput('fontWeight', selectedOption.value)}
                            options={this.fontWeightOptions}
                        />
                    </div>

                    {/* Edit font family */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Family: </span>
                        <Select
                            className="edit-select"
                            placeholder={"Family"}
                            isSearchable
                            onChange={(selectedOption) => onChangeSpecialInput('fontFamily', selectedOption.value)}
                            options={this.fontFamilyOptions}
                        />
                    </div>

                    {/* Edit letter spacing */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Space:</span>
                        <Slider max={40} value={strippedPropsFromPx.letterSpacing} onChange={(value) => onChangeSpecialInput('letterSpacing', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.letterSpacing} px</span>
                    </div>

                    {/* Edit line height */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Height:</span>
                        <Slider max={100} value={strippedPropsFromPx.lineHeight} onChange={(value) => onChangeSpecialInput('lineHeight', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.lineHeight} px</span>
                    </div>
                </div>
            </>
        )
    }
}