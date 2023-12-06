(() => {
    const backgroundSelect = document.getElementById('background')
    const backgroundColorS =document.getElementById('backgroundColorS')
    const backgroundImageS =document.getElementById('backgroundImageS')
    const previewImage = document.getElementById("previewImage");
    const backgroundImageI = document.getElementById("backgroundImageI");
    const previewImageElement = document.getElementById("previewImageElement");
    const inputName = document.getElementById('inputName')
    const tools = document.getElementById("tools");
    const childTools = tools.querySelectorAll('select, input')
    const borderValueI = document.getElementById("borderValueI");
    const borderValue = document.getElementById('borderValue')
    const color = document.getElementById('color')
    const borderType = document.getElementById('borderType')
    const colorBorderInput = document.getElementById('colorBorderInput')
    if(!tools||!inputName||!backgroundSelect||!backgroundColorS||!backgroundImageS||!previewImage||!backgroundImageI||!previewImageElement||!borderValueI||!borderValue||!color||!borderType||!colorBorderInput){
        alert("Error 404! not found element please refresh this page");
        return;
    }
    check();
    let search;
    function check(){
        const name=inputName.value.trim();
        if(!name){
            addD()
            return;
        }
        search=opener.document.querySelectorAll(name);
        if(search.length){
            removeD()
            return;
        }
        addD();
    }
    function render(style, value){
        for(let i = 0; i < search.length; i++){
            search[i].style[style] = value;
        }
    }
    color.oninput = (e) => {
        render('color', color.value)
    }
    inputName.oninput = (e) => {
        check();
    }
    function border(){
        render("border", borderValueI.value + 'px ' + borderType.value + ' ' + colorBorderInput.value)
    }
    borderValueI.oninput = e => {
        const value = e.target.value;
        borderValue.innerText = value;
        border();
    }
    borderType.oninput = e=>{
        border();
    }
    colorBorderInput.oninput = e=>{
        border();
    }
    function addD(){
        tools.classList.add("disabled")
        tools.setAttribute("disabled", 'true')
        for(const el of childTools) {
            el.setAttribute("disabled", 'true')
        }
    }
    function removeD(){
        tools.classList.remove("disabled")
        tools.removeAttribute("disabled")
        for(const el of childTools) {
            el.removeAttribute('disabled')
        }
    }
    backgroundSelect.onchange= e => {
        check();
        const v = e.target.value;
        if(v === "backgroundColor"){
            backgroundColorS.classList.add("show");
            backgroundColorS.classList.remove("hide");

            backgroundImageS.classList.add("hide");
            backgroundImageS.classList.remove("show");
            return;
        }
        backgroundColorS.classList.add("hide");
        backgroundColorS.classList.remove("show");
        backgroundImageS.classList.add("show");
        backgroundImageS.classList.remove("hide");
    }
    backgroundColorS.oninput = e=>{
        render('backgroundColor', backgroundColorI.value)
    }
    backgroundImageI.onchange = e => {
        check();
        const [file] = backgroundImageI.files;
        if (file) {
            previewImageElement.src = URL.createObjectURL(file);
            console.log(URL.createObjectURL(file))
            render("backgroundImage", "url(" + URL.createObjectURL(file) + ")")
        }
    };

})()