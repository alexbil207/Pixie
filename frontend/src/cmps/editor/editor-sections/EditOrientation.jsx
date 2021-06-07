import React from 'react';
import { editorService } from '../../../service/editor-service';
import Select from 'react-select';
import Slider from 'rc-slider';

export class EditOrientation extends React.Component {
    flexDirectionOptions = [
        { value: 'row', label: 'Left to right' },
        { value: 'row-reverse', label: 'Right to left' },
        { value: 'column', label: 'Top to bottom' },
        { value: 'column-reverse', label: 'Bottom to top' }
    ]

    justifyContentOptions = [
        { value: 'flex-start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'flex-end', label: 'End' },
        { value: 'space-between', label: 'Space between' },
        { value: 'space-around', label: 'Space around' },
        { value: 'space-evenly', label: 'Space evenly' }
    ]

    justifyContentTextOptions = [
        { value: 'flex-start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'flex-end', label: 'End' },
    ]

    alignItemsAndSelfOptions = [
        { value: 'flex-start', label: 'Start' },
        { value: 'center', label: 'Center' },
        { value: 'flex-end', label: 'End' },
        { value: 'baseline', label: 'Baseline' },
        { value: 'stretch', label: 'Stretch' }
    ]

    render() {
        let { role, flexGrow,
            marginBlockStart, marginBlockEnd, marginInlineStart, marginInlineEnd,
            paddingBlockStart, paddingBlockEnd, paddingInlineStart, paddingInlineEnd,
            onChangeSpecialInput } = this.props;

        // Handle flex grow
        flexGrow = (flexGrow) ? flexGrow : 0;

        // Handle parameters with 'px'
        const strippedPropsFromPx = {
            marginBlockStart: (marginBlockStart) ? editorService.stripFromPx(marginBlockStart) : 0,
            marginBlockEnd: (marginBlockEnd) ? editorService.stripFromPx(marginBlockEnd) : 0,
            marginInlineStart: (marginInlineStart) ? editorService.stripFromPx(marginInlineStart) : 0,
            marginInlineEnd: (marginInlineEnd) ? editorService.stripFromPx(marginInlineEnd) : 0,
            paddingBlockStart: (paddingBlockStart) ? editorService.stripFromPx(paddingBlockStart) : 0,
            paddingBlockEnd: (paddingBlockEnd) ? editorService.stripFromPx(paddingBlockEnd) : 0,
            paddingInlineStart: (paddingInlineStart) ? editorService.stripFromPx(paddingInlineStart) : 0,
            paddingInlineEnd: (paddingInlineEnd) ? editorService.stripFromPx(paddingInlineEnd) : 0,
        }

        return (
            <>
                <div className="accordion-inner-title">Flow</div>

                {(role === 'section') &&
                    <div className="accordion-inner-content">
                        {/* Edit flex direction */}
                        <div className="flex align-center editor-pref-warper">
                            <span className="editor-label">Direction: </span>
                            <Select
                                className="edit-select"
                                placeholder={"Direction"}
                                onChange={(selectedOption) => onChangeSpecialInput('flexDirection', selectedOption.value)}
                                options={this.flexDirectionOptions}
                            />
                        </div>

                        {/* Edit justify content */}
                        <div className="flex align-center editor-pref-warper">
                            <span className="editor-label">Main Axis: </span>
                            <Select
                                className="edit-select"
                                placeholder={"Direction"}
                                onChange={(selectedOption) => onChangeSpecialInput('justifyContent', selectedOption.value)}
                                options={this.justifyContentOptions}
                            />
                        </div>

                        {/* Edit align items */}
                        <div className="flex align-center editor-pref-warper">
                            <span className="editor-label">Sub Axis: </span>
                            <Select
                                className="edit-select"
                                placeholder={"Direction"}
                                onChange={(selectedOption) => onChangeSpecialInput('alignItems', selectedOption.value)}
                                options={this.alignItemsAndSelfOptions}
                            />
                        </div>
                    </div>}

                {(role === 'text') &&
                    <div className="accordion-inner-content">
                        {/* Edit justify self */}
                        <div className="flex align-center editor-pref-warper">
                            <span className="editor-label">Main Axis: </span>
                            <Select
                                className="edit-select"
                                placeholder={"Direction"}
                                onChange={(selectedOption) => onChangeSpecialInput('justifyContent', selectedOption.value)}
                                options={this.justifyContentTextOptions}
                            />
                        </div>
                    </div>
                }


                <div className="accordion-inner-content">
                    {/* Edit flex grow */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Grow: </span>
                        <Slider min={0} max={10} value={flexGrow} onChange={(value) => onChangeSpecialInput('flexGrow', value)} />
                        <span className="editor-indicator">{flexGrow}</span>
                    </div>
                </div>

                <div className="accordion-inner-title">Outer spacing</div>
                <div className="accordion-inner-content">
                    {/* Edit margin block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Top:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.marginBlockStart} onChange={(value) => onChangeSpecialInput('marginBlockStart', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.marginBlockStart} px</span>
                    </div>

                    {/* Edit margin block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Bottom:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.marginBlockEnd} onChange={(value) => onChangeSpecialInput('marginBlockEnd', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.marginBlockEnd} px</span>
                    </div>

                    {/* Edit margin block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Left:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.marginInlineStart} onChange={(value) => onChangeSpecialInput('marginInlineStart', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.marginInlineStart} px</span>
                    </div>

                    {/* Edit margin block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Right:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.marginInlineEnd} onChange={(value) => onChangeSpecialInput('marginInlineEnd', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.marginInlineEnd} px</span>
                    </div>
                </div>

                <div className="accordion-inner-title">Inner spacing</div>
                <div className="accordion-inner-content">
                    {/* Edit padding block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Top:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.paddingBlockStart} onChange={(value) => onChangeSpecialInput('paddingBlockStart', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.paddingBlockStart} px</span>
                    </div>

                    {/* Edit padding block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Bottom:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.paddingBlockEnd} onChange={(value) => onChangeSpecialInput('paddingBlockEnd', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.paddingBlockEnd} px</span>
                    </div>

                    {/* Edit padding block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Left:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.paddingInlineStart} onChange={(value) => onChangeSpecialInput('paddingInlineStart', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.paddingInlineStart} px</span>
                    </div>

                    {/* Edit padding block start */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Right:</span>
                        <Slider min={0} max={100} value={strippedPropsFromPx.paddingInlineEnd} onChange={(value) => onChangeSpecialInput('paddingInlineEnd', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.paddingInlineEnd} px</span>
                    </div>
                </div>
            </>
        )
    }
}