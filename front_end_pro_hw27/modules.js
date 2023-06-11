    async function getInfo(value, url) {
        try {
            const response = await fetch(url + `${value}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                const data = await response.json();
                return data;
            }
        } catch (err) {
            console.log('Something went wrong >>>>>>', err);
        }
    }

    function removeElement(elemClass) {
        const elem = document.querySelector(elemClass);
        if (elem) {
            elem.remove();
        }
    }

export { getInfo, removeElement }