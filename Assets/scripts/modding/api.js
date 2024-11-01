import { MOD_DATA } from "./data.js";

export const MOD_API_VERSION = "0.2.1";
var MOD_CONSOLE = [];

/*
author: @IdealistCat
purpose: create a paragraph element for the page along with adding text to it.
*/
export function createParagraph(html='', id='') { 
    var paragraph = document.createElement('p');
    var node = document.createTextNode(html);
    paragraph.appendChild(node)
    paragraph.id = id;
    
    if (MOD_DATA.enabled) {
        document.body.appendChild(paragraph);
        MOD_CONSOLE.push('Created Paragraph with id: '+id);
    }
}

/*
author: @IdealistCat
purpose: create an image element for the page along with setting the source url.
*/
export function createImage(source='', ext="png", id="") { 
    var img = document.createElement('img');
    img.src = '../mods/'+MOD_DATA.name+'/images/'+source+"."+ext;
    img.id = id;
    
    if (MOD_DATA.enabled) {
        document.body.append(img);
        MOD_CONSOLE.push('Created Image with id: '+id);
    }
}

/*
author: @IdealistCat
purpose: replace a text element on the page
*/
export function replaceText(id='', html='') {
    var text = document.getElementById(id);

    if (MOD_DATA.enabled) {
        text.innerHTML = html;
        MOD_CONSOLE.push('Replaced Text with id: '+id);
    }
}

/*
author: @IdealistCat
purpose: replace an image element on the page
*/
export function replaceImg(id='', source='', ext='') {
    var image = document.getElementById(id);

    if (MOD_DATA.enabled) {
        image.src = '/Site/Assets/modding/'+MOD_DATA.name+'/images/'+source+"."+ext;
        MOD_CONSOLE.push('Replaced Image with id: '+id);
    }
}

/*
author: @IdealistCat
purpose: return the mod console variable
*/
export function returnModConsole() { return MOD_CONSOLE; }