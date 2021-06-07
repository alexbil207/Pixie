import React from 'react';
import { editorService } from '../../../service/editor-service';
import { cloudinaryService } from '../../../service/cloudinary-service';
import Slider from 'rc-slider';
import Select from 'react-select';

export class EditBoxStyling extends React.Component {
    backgroundImgPositionOptions = [
        { value: 'left top', label: 'Left top' },
        { value: 'left center', label: 'Left center' },
        { value: 'left bottom', label: 'Left bottom' },
        { value: 'center top', label: 'Middle top' },
        { value: 'center center', label: 'Middle center' },
        { value: 'center bottom', label: 'Middle bottom' },
        { value: 'right top', label: 'Right top' },
        { value: 'right center', label: 'Right center' },
        { value: 'right bottom', label: 'Right bottom' }
    ]

    backgroundImgSizeOptions = [
        { value: 'cover', label: 'Cover' },
        { value: 'contain', label: 'Contain' },
        { value: 'initial', label: 'Initial' }
    ]

    backgroundImgRepeatOptions = [
        { value: 'repeat', label: 'Repeat' },
        { value: 'no-repeat', label: 'No repeat' },
        { value: 'repeat-x', label: 'Repeat x' },
        { value: 'repeat-y', label: 'Repeat y' },
        { value: 'round', label: 'Round' },
        { value: 'space', label: 'Space' }
    ]

    backgroundImgAttachmentOptions = [
        { value: 'scroll', label: 'Scroll' },
        { value: 'fixed', label: 'Fixed' },
        { value: 'local', label: 'Local' }
    ]

    uploadImg = async (ev) => {
        const { onChangeSpecialInput } = this.props;
        const { url } = await cloudinaryService.uploadImg(ev);

        onChangeSpecialInput('backgroundImage', `url('${url}')`);
    }

    render() {
        let { isImg, backgroundColor, backgroundImage,
            borderRadius, height, width, onChangeSpecialInput, onChangeValue } = this.props;

        // assign default values if the given value is undefined
        backgroundColor = !backgroundColor ? '#ffffff' : backgroundColor;

        // Handle parameters with 'px'
        const strippedPropsFromPx = {
            borderRadius: (borderRadius) ? editorService.stripFromPx(borderRadius) : 0,
            height: (height) ? editorService.stripFromPx(height) : 100,
            width: (width) ? editorService.stripFromPx(width) : 100
        }

        return (
            <>
                <div className="accordion-inner-title">Background</div>
                <div className="accordion-inner-content">
                    {/* Edit background color */}
                    <div className="flex align-center editor-pref-warper">
                        <label className="editor-label" htmlFor="backgroundColor">Color: </label>
                        <input type="color" id="color" name="backgroundColor" value={backgroundColor} onChange={onChangeValue} />
                        <span className="editor-indicator">{backgroundColor}</span>
                    </div>

                    {/* Edit circling */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Circling:</span>
                        <Slider min={0} max={50} value={strippedPropsFromPx.borderRadius} onChange={(value) => onChangeSpecialInput('borderRadius', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.borderRadius} px</span>
                    </div>

                    {/* Upload background-image */}
                    {!isImg && <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Upload:</span>
                        <input type="file" onChange={this.uploadImg} />
                    </div>}
                </div>

                {backgroundImage &&
                    <>
                        <div className="accordion-inner-title">Background image</div>
                        <div className="accordion-inner-content">
                            {/* Edit background image position */}
                            <div className="flex align-center editor-pref-warper">
                                <span className="editor-label">Position: </span>
                                <Select
                                    className="edit-select"
                                    placeholder={"Position"}
                                    onChange={(selectedOption) => onChangeSpecialInput('backgroundPosition', selectedOption.value)}
                                    options={this.backgroundImgPositionOptions}
                                />
                            </div>

                            {/* Edit background image size */}
                            <div className="flex align-center editor-pref-warper">
                                <span className="editor-label">Size: </span>
                                <Select
                                    className="edit-select"
                                    placeholder={"Size"}
                                    onChange={(selectedOption) => onChangeSpecialInput('backgroundSize', selectedOption.value)}
                                    options={this.backgroundImgSizeOptions}
                                />
                            </div>

                            {/* Edit background image repeat */}
                            <div className="flex align-center editor-pref-warper">
                                <span className="editor-label">Repeat: </span>
                                <Select
                                    className="edit-select"
                                    placeholder={"Repeat"}
                                    onChange={(selectedOption) => onChangeSpecialInput('backgroundRepeat', selectedOption.value)}
                                    options={this.backgroundImgRepeatOptions}
                                />
                            </div>

                            {/* Edit background image attachment */}
                            <div className="flex align-center editor-pref-warper">
                                <span className="editor-label">Attachment: </span>
                                <Select
                                    className="edit-select"
                                    placeholder={"Attachment"}
                                    onChange={(selectedOption) => onChangeSpecialInput('backgroundAttachment', selectedOption.value)}
                                    options={this.backgroundImgAttachmentOptions}
                                />
                            </div>
                        </div>
                    </>
                }

                <div className="accordion-inner-title">Sizing</div>
                <div className="accordion-inner-content">
                    {/* Edit box height */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Height:</span>
                        <Slider min={10} max={1000} value={strippedPropsFromPx.height} onChange={(value) => onChangeSpecialInput('height', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.height} px</span>
                    </div>

                    {/* Edit box width */}
                    <div className="flex align-center editor-pref-warper">
                        <span className="editor-label">Width:</span>
                        <Slider min={10} max={1000} value={strippedPropsFromPx.width} onChange={(value) => onChangeSpecialInput('width', value)} />
                        <span className="editor-indicator">{strippedPropsFromPx.width} px</span>
                    </div>
                </div>
            </>
        )
    }
}