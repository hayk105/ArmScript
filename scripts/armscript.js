function _getObject() {
    return { aj: "Right", dzax: "Left", verev: "Top", nerqev: "Bottom" };
}
function tpel(...t) {
    alert(t);
}
class Console {
    s = (...t) => console.log(...t);
    sxal = (...t) => console.error(...t);
    zgush = (...t) => console.warn(...t);
    cucak = (...t) => console.table(...t);
    maqrel = () => console.clear();
}
class Math2 {
    constructor() {
        (this._result = 0),
            (this._fResetResultAndFlat = (t) => ((t = t.flat(1 / 0)), (this._result = t[0]), t)),
            (this._algorithmHG = (t, e) => {
                let s = (t = t.flat(1 / 0))[0];
                for (let n = 1; n < t.length; n++) s += t[n] * e;
                return s;
            });
    }
    pi = 3.141592653589793;
    klor = (n) => ~~(n + 0.5);
    nerqev = (n) => ~~n;
    verev = (n) => ~~n + (n % 1 != 0 ? 1 : 0);
    modul = (n) => (n > 0 ? n : -1 * t);
    astican = (n, d) => n ** d;
    sinus = (n) => Math.sin(n);
    cosinus = (n) => Math.cos(n);
    tanges = (n) => Math.tan(n);
    lg = (n) => Math.log10(n);
    log2 = (n) => Math.log2(n);
    minimal(...t) {
        t = this._fResetResultAndFlat(t);
        for (let e = 1; e < t.length; e++) (this._arg = t[e]), this._arg < this._result && (this._result = this._arg);
        return this._result;
    }
    maximal(...t) {
        t = this._fResetResultAndFlat(t);
        for (let e = 1; e < t.length; e++) (this._arg = t[e]), this._arg > this._result && (this._result = this._arg);
        return this._result;
    }
    patahakan(t, e) {
        return void 0 !== t && void 0 !== e ? t + ~~(Math.random() * (e - t)) : Math.random();
    }
    gumarel(...n) {
        return this._algorithmHG(n, 1);
    }
    hanel(...n) {
        return this._algorithmHG(n, -1);
    }
    hashvelArt(art){ //BETA
        return eval(art);
    }
}

class Selector {
    gtnel = (t) => document.querySelector(t);
    gtnelBolory = (t) => document.querySelectorAll(t);
    gtnelId = (t) => document.getElementById(t);
    gtnelClass = (t) => document.getElementsByClassName(t);
}
class Function{
    constructor() {
        this.dataFunctions = {};
    }
    avelacnel(name, f){
        if(!this.dataFunctions[name]){
            this.dataFunctions[name] = [f];
            return;
        }
        this.dataFunctions[name].push(f)
    }
    jnjel(name, index){
        if(!index){
            this.dataFunctions[name] = [];
            return;
        }
        this.dataFunctions[name].splice(index, 1);
    }
    katarel(arrName, index){
        if(!arrName&&!index){
            for(const elm in this.dataFunctions){
                for(let i = 0; i < this.dataFunctions[elm].length; i++){
                    (this.dataFunctions[elm][i])();
                }
            }
            return;
        }
        if(!index){
            if(!Array.isArray(arrName)){
                const f = this.dataFunctions[arrName];
                for(let i = 0; i<f.length; i++) {
                    (f[i])()
                }return;
            }
            for(let i = 0; i < arrName.length; i++){
                for(let j = 0; j < this.dataFunctions[arrName[i]].length; j++){
                    (this.dataFunctions[arrName[i]][j])();
                }
            }
            return;
        }
        for(let i = 0; i < arrName.length; i++){
            (this.dataFunctions[arrName[i]][index])();
        }
    }
}
const htmlElementProto = function () {
        (this.erexaner = function (t) {
            const e = this.childNodes;
            if (t) {
                const s = [];
                for (let n = 0; n < e.length; n++) {
                    const i = e[n];
                    t.includes(i.localName) && s.push(i);
                }
                return s;
            }
            return e;
        }),
            (this.gtnel = function (t) {
                return this.querySelector(t);
            }),
            (this.gtnelBolory = function (t) {
                return this.querySelectorAll(t);
            }),
            (this.gtnelId = function (t) {
                return this.getElementById(t);
            }),
            (this.gtnelClass = function (t) {
                return this.getElementsByClassName(t);
            }),
            (this.gnal = function (t, e, s) {
                if (((this.style.position = "absolute"), !s)) return (this.style.left = t + "px"), void (this.style.top = e + "px");
                (this.style.left = t + s), (this.style.top = e + s);
            }),
            (this.text = function (t, e) {
                if (!t) return this.innerText;
                this.innerText = (e ? this.innerText : "") + t;
            }),
            (this.avelacnelHatkanish = function (t, e) {
                if ("object" != typeof t) this.setAttribute(t, e);
                else for (const e in t) this.setAttribute(e, t[e]);
            }),
            (this.arjeq = function (t, e) {
                if (!t) return this.value;
                this.value = (e ? this.value : "") + t;
            }),
            (this.html = function (t, e) {
                if (!t) return this.innerHTML;
                this.innerHTML = (e ? this.innerHTML : "") + t;
            }),
            (this.cnox = function () {
                return this.parentElement;
            }),
            (this.cnoxner = function (t) {
                for (this._arr = [], this._elm = this; this._elm.parentElement; )
                    (this.loc = this._elm.parentElement.localName), (t && this.loc !== t && !t.includes(this.loc)) || this._arr.push(this._elm.parentElement), (this._elm = this._elm.parentElement);
                return this._arr;
            }),
            (this.dzev = function (t, e) {
                if ("object" != typeof t) {
                    if (!e) return this.style[t];
                    this.style[t] = e;
                } else for (const e in t) this.style[e] = t[e];
            }),
            (this.taqcnel = function () {
                this.classList.add("hide");
            }),
            (this.cuyctal = function () {
                this.classList.remove("hide");
            }),
            (this.poxel = function(){
                if(this.classList.contains("hide")){
                    this.classList.remove("hide")
                    return;
                }
                this.classList.add('hide')
            }),
            (this.sxmel = function (t) {
                this.addEventListener("click", (e) => {
                    t(e);
                });
            }),
            (this.hrel = function (t, e) {
                e ? (this.style[`margin${_getObject()[e] || ""}`] = t) : (this.style.margin = t);
            }),
            (this.arajavel = function (html)  {
                this.innerHTML = html + this.innerHTML;
            }),
            (this.avelacnel = function (html) {
                this.innerHTML += html;
            }),
            (this.avelacnelClass = function (t) {
                for (const e of t.split(" ")) this.classList.add(e);
            }),
            (this.jnjelClass = function (t) {
                for (const e of t.split(" ")) this.classList.remove(e);
            }),
            (this.stugelClass = function (t) {
                return this.classList.contains(t);
            }),
            (this.gorciq = function () {
                const t = open("../armscriptTest/armscriptTools.html", "_blank");
                t.onload = () => {
                    (t.document.getElementById("_toolPage").innerHTML = document.querySelector("body").outerHTML), (t.document.querySelector("head").innerHTML = document.querySelector("head").outerHTML);
                };
            });
    },
    nodeListProto = function () {
        (this.text = function (...t) {
            if (((this._result = []), !t)) {
                for (let t = 0; t < this.length; t++) this._result.push(this[t].innerText);
                return this._result;
            }
            for (let e = 0; e < this.length; e++) {
                const s = t[e];
                this[e].innerText = s || t[t.length - 1];
            }
        }),
        (this.html = function (...t) {
            if (((this._result = []), !t)) {
                for (let t = 0; t < this.length; t++) this._result.push(this[t].innerHTML);
                return this._result;
            }
            for (let e = 0; e < this.length; e++) {
                const s = t[e];
                this[e].innerHTML = s || t[t.length - 1];
            }
        }),
        (this.dzev = function (t, e) {
            if(!this){
                return;
            }
            if ("object" != typeof t) {
                if (e) {
                    for (let s = 0; s < this.length; s++) {
                        this[s].style[t] = e;
                    }
                }
                return;
            }
            for (const e in t) {
                for (let s = 0; s < this.length; s++){
                    this[s].style[e] = t[e];
                }
            }
        }),
        (this.ztel = function (str) { //BETA
            str = str.trim().split(' ');
            const result = [];

            for (let j = 0; j < this.length; j++) {
                const elm2 = this[j];
                let sxal = false;

                for (let i = 0; i < str.length; i++) {
                    const elm = str[i];
                    const z = elm[0];

                    if (
                        (z === '.' && !elm2.classList.contains(elm.slice(1))) ||
                        (z === '#' && elm2.getAttribute('id') !== elm.slice(1))
                    ) {
                        sxal = true
                        break;
                    }
                }

                if (!sxal) {
                    result.push(elm2);
                }
            }

            return result;
        });
    },
    arrayProto = function () {

    },
    grel = new Console(),
    matem = new Math2(),
    element = new Selector();
const f = new Function();
htmlElementProto.call(HTMLElement.prototype), nodeListProto.call(NodeList.prototype), arrayProto.call(Array.prototype);
export { grel, matem, element, f, tpel};
