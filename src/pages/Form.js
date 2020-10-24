import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import * as axios from "axios";

import "./Form.scss"

import {FormDrop} from "../components/FormDrop";

export const Form = () => {
    const [response, setResponse] = useState("")
    const [errorMgs, setErrorMsg] = useState("")
    const [uploadedPhoto, setUploadedPhoto] = useState(null)
    const {register, handleSubmit} = useForm();


    const onSubmit = async (values) => {
        const data = {
            action: "send_data",
            id: 1,
            image: uploadedPhoto,
            contact: [values.name, values.surname, values.patronymic]
        }

        if (data.image) {
            setErrorMsg("")
            const res = await axios.post("https://test-job.pixli.app/send.php", data)
            if (res && res.data.msg) {
                setResponse(res.data.msg)
            }
        } else setErrorMsg("Загрузите изображение")
    }


    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-input">
                <label>Имя</label>
                <input
                    type="text"
                    name="name"
                    ref={register}
                />
            </div>

            <div className="form-input">
                <label>Фамилия</label>
                <input
                    type="text"
                    name="surname"
                    ref={register}
                />
            </div>

            <div className="form-input">
                <label>Отчество</label>
                <input
                    type="text"
                    name="patronymic"
                    ref={register}
                />
            </div>

            <FormDrop
                setUploadedPhoto={setUploadedPhoto}
                setErrorMsg={setErrorMsg}
                uploadedPhoto={uploadedPhoto}
            />

            {errorMgs && <div className="error">
                {errorMgs}
            </div>}

            <button className="form-submit btn primary">
                Сохранить
            </button>

            <div className="form-textarea">
                <label>Response</label>
                <textarea readOnly rows={8} value={response}/>
            </div>
        </form>
    );
};