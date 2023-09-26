var bottomRoundEdge
var topRoundEdge
var alpha
var l1
var l2

const d1Element = document.getElementById("d1")
const d2Element = document.getElementById("d2")
const hElement = document.getElementById("h")
const button = document.getElementById("mainButton")

addValidateFunction(d1Element)
addValidateFunction(d2Element)
addValidateFunction(hElement)

function addValidateFunction(element) {
    element.addEventListener('input', (event) => {
        enableButton()
    })
}

function enableButton() {
    if (d1Element.value > 0 && d2Element.value > 0 && hElement.value > 0 && d2Element.value > d1Element.value)
        button.disabled = false
    else
        button.disabled = true
}

function validateInput(inputVal) {
    const sanitized = inputVal.replace(/\.*$/, '');
    return sanitized < 0 ? 1 : inputVal
}

function calculateMeasurements() {
    console.log("called")
    const d1 = parseFloat(d1Element.value)
    const d2 = parseFloat(d2Element.value)
    const h = parseFloat(hElement.value)

    const r1 = d1 / 2
    const r2 = d2 / 2

    var theta = Math.acos((r2 - r1) / h)

    bottomRoundEdge = Math.PI * d1
    topRoundEdge = Math.PI * d2

    alpha = 2 * Math.PI * Math.cos(theta)

    const l1 = r1 / Math.cos(theta)
    const l2 = l1 + h

    console.log(typeof (h))

    console.log("theta = " + Math.round(theta * (180 / Math.PI)))
    console.log("alpha = " + Math.round(alpha * (180 / Math.PI)))
    console.log("bottom edge = " + bottomRoundEdge.toFixed(1))
    console.log("top edge = " + topRoundEdge.toFixed(1))
    console.log("l1 = " + l1.toFixed(2))
    console.log("l2 = " + l2)
}