import React, {useEffect, useState} from 'react';
import {ImagePlaceholder} from "../assets/ImagePlaceholder";
import classnames from "classnames"

export const FormDrop = ({setErrorMsg, setUploadedPhoto, uploadedPhoto}) => {
    const [dragging, setDragging] = useState(false)
    const [dragCounter, setDragCounter] = useState(-1)

    const photo = React.createRef()

    useEffect(() => {
        if (uploadedPhoto) {
            photo.current.src = uploadedPhoto
        }
    }, [uploadedPhoto, photo])

    const readImage = (file) => {
        const reader = new FileReader()
        if (file) {
            if (/^image/.test(file.type)) {
                reader.readAsDataURL(file)
                reader.onabort = () => setErrorMsg("Чтение файла было прервано")
                reader.onerror = () => setErrorMsg("Чтение файла не удалось")
                reader.onloadend = () => setUploadedPhoto(reader.result)
            } else setErrorMsg("Неверный формат изображения")
        }
    }

    const changeFileHandler = async (event) => {
        readImage(event.target.files[0])
    }

    const handleDragOver = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    const handleDragEnter = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setDragCounter(dragCounter + 1)
        setDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        e.stopPropagation()

        setDragCounter(dragCounter - 1)
        if (dragCounter === 0) setDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setDragging(false)
        setDragCounter(-1)

        readImage(e.dataTransfer.files[0])
    }

    const dropboxClasses = classnames({
        onEnter: dragging,
        dropbox: true,
    })

    return (
        <div className="form-drop-photo">
            <label>Фото</label>

            <label className={dropboxClasses}
                   onDragOver={handleDragOver}
                   onDragEnter={handleDragEnter}
                   onDragLeave={handleDragLeave}
                   onDrop={handleDrop}
            >
                <input
                    type="file"
                    id="photo"
                    onChange={changeFileHandler}
                    accept="image/*"
                    name="image"
                />

                {uploadedPhoto && <img ref={photo} alt="upload file"/>}

                <div className="placeholder-wrapper">
                    <ImagePlaceholder/>
                </div>
            </label>
        </div>
    );
};