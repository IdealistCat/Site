import { returnVersion } from "./utilities/version-utility.js";

var element = document.getElementById('version');
var versionString = returnVersion('version-dev');
var fullasstring = `Dragging Site: ${versionString}`;

element.innerText = fullasstring;