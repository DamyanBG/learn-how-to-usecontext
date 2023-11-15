import jsPDF from "jspdf"
import Roboto from "../assets/Roboto-Light.ttf"

export const createPdfFromElement = (htmlElement, pdfCallback) => {
    const pdf = new jsPDF("p", "px", "a4", false)
    const clientWindowWidth = htmlElement.offsetWidth

    pdf.addFont(Roboto, 'Roboto', 'light');
    pdf.setFont('Roboto');

    console.log()

    pdf.html(htmlElement, {
        callback: pdfCallback,
        margin: [20, 20, 20, 20],
        autoPaging: "text",
        x: 0,
        y: 0,
        // width: 400,
        windowWidth: clientWindowWidth,
        html2canvas: {
            scale: 0.255,
            useCORS: true
        }
    })
}

export const createAddPagePdfCallback = (htmlElement, nestedCallback) => {
    const pdfCallback = (doc) => {
        const pageCount = doc.internal.getNumberOfPages()
        const pageSize = doc.internal.pageSize.getHeight()
        doc.addPage("a4", "p")
        doc.html(htmlElement, {
            callback: nestedCallback,
            margin: [20, 20, 20, 20],
            autoPaging: "text",
            x: 0,
            y: pageCount * pageSize - 20,
            width: 400,
            windowWidth: htmlElement.offsetWidth,
            html2canvas: {
                scale: 400 / htmlElement.offsetWidth
            }
        })
    }

    return pdfCallback
}