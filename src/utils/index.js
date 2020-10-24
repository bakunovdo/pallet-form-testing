export const readImage = (file) => {
    const reader = new FileReader()
    let result = null
    let message = ""

    if (file) {
        if (/^image/.test(file.type)) {
            reader.readAsDataURL(file)
            reader.onabort = () => message = "Чтение файла было прервано"
            reader.onerror = () => message = "Чтение файла не удалось"
            reader.onloadend = () => result = reader.result
        } else message = "Неверный формат изображения"
    }

    if (message) return {error: message}
    console.log(reader.result)
    return {data: result}
}