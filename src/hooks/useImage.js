import { useState, useEffect } from 'react';

const useImage = (url) => {
    const [image, setImage] = useState("")

    useEffect(() => {
        if (url.length === 0) {
            setImage('https://st2.depositphotos.com/6623886/9617/v/450/depositphotos_96170696-stock-illustration-blank-book-cover-vector-illustration.jpg')
        } else {
            setImage(url)
        }
    }, [url])

    return {image}
}

export default useImage