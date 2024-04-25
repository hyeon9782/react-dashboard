import { instance } from "../instance"

const getProteinNetworkTables = (analysisNo: string) => {
    return instance.get(`/v2/api/protein/network/regulate-tables/${analysisNo}`)
}

const getProteinNetworkCharts = (analysisNo: string) => {
    return instance.get(`/v2/api/protein/network/regulate-charts/${analysisNo}`)
}

const getGlycoproteinNetworkTables = (analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/network/regulate-tables/${analysisNo}`)
}

const getGlycoproteinNetworkCharts = (analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/network/regulate-charts/${analysisNo}`)
}

export {getProteinNetworkTables, getProteinNetworkCharts, getGlycoproteinNetworkTables, getGlycoproteinNetworkCharts }