export const fetchContent = (url, setState) => {
    fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        cache: 'default'
    })
        .then(res => res.text())
        .then(html => {
            const parser = new DOMParser()
            const doc = parser.parseFromString(html, 'text/html')

            console.log("conteúdo do html", doc)
            console.dir(doc)
            setState(doc)
        })
}