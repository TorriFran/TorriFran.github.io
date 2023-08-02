
console.log(1);

const containerComponent = document.querySelector(".container-card-components")
const containerPerifericos = document.querySelector(".container-card-perifericos")


const createCardComponent = (imagen,name)=>{
    const cardPc = document.createElement("DIV")
    const imgPc = document.createElement("DIV")
    const containerDescription = document.createElement("DIV")
    const descrptionPC = document.createElement("p")

    cardPc.classList.add("card-pc")
    imgPc.classList.add("img-pc")
    containerDescription.classList.add("description-pc")

    imgPc.style.backgroundImage = `url("${imagen}")`
    descrptionPC.textContent = name

    containerDescription.appendChild(descrptionPC)
    cardPc.appendChild(imgPc)
    cardPc.appendChild(containerDescription)

    return cardPc
}

const cargarCardPc = async (container,json)=>{
    const request = await fetch(`${json}`)
    const arr = await request.json()
    console.log(arr);
    const documentFragment = document.createDocumentFragment()

    arr.forEach(objeto =>{
        let generateCard = createCardComponent(objeto.img,objeto.descripcion)

        documentFragment.appendChild(generateCard)
    })

    container.appendChild(documentFragment)
}


const cargarCardPcPerifericos = async (container,json)=>{
    const request = await fetch(`${json}`)
    const arr = await request.json()
    console.log(arr);
    const documentFragment = document.createDocumentFragment()

    arr.forEach(objeto =>{
        let generateCard = createCardComponent(objeto.img,objeto.descripcion)

        documentFragment.appendChild(generateCard)
    })

    container.appendChild(documentFragment)
}

cargarCardPc(containerComponent,"json/json-Mipc-components.txt") 
cargarCardPc(containerPerifericos,"json/json-Mipc-perifericos.txt") 

