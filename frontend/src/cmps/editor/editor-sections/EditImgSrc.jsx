import React from 'react';
import { cloudinaryService } from '../../../service/cloudinary-service';

export const EditImgSrc = ({ onChangeSrc }) => {
    const uploadImg = async (ev) => {
        const { url } = await cloudinaryService.uploadImg(ev);
        onChangeSrc('backgroundImage', `url('${url}')`);
    }

    return (
        <div className="flex align-center edit-img-src">
            <span className="editor-label">Upload:</span>
            <input type="file" onChange={uploadImg} />
        </div>
    )
}
