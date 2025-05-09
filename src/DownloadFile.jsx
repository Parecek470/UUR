import React, { useRef, useState } from 'react';

const DownloadFile = () => {
    const inputFile = useRef(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [imageName, setImageName] = useState('');

    const handleChange = () => {
        const file = inputFile.current.files[0];
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file);
            setImagePreview(url);
            setImageName(file.name);
        } else {
            alert('Please upload a valid image file.');
        }
    };

    const handleDownload = () => {
        if (!imagePreview) return;
        const a = document.createElement('a');
        a.href = imagePreview;
        a.download = imageName || 'downloaded-image.png';
        a.click();
    };

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" ref={inputFile} onChange={handleChange} accept="image/*" />
            {imagePreview && (
                <div>
                    <img src={imagePreview} alt="Preview" style={{ maxWidth: '300px', marginTop: '10px' }} />
                    <div>
                        <button onClick={handleDownload}>Download Image</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DownloadFile;
