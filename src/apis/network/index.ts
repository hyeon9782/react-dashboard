import { instance } from "../instance"

const getProteinNetworkTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/protein/network/regulate-tables/${analysisNo}`)
}

const getProteinNetworkCharts = async (analysisNo: string) => {
    return await instance.get(`/v2/api/protein/network/regulate-charts/${analysisNo}`)
}

const getGlycoproteinNetworkTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/network/regulate-tables/${analysisNo}`)
}

const getGlycoproteinNetworkCharts = async (analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/network/regulate-charts/${analysisNo}`)
}

export {getProteinNetworkTables, getProteinNetworkCharts, getGlycoproteinNetworkTables, getGlycoproteinNetworkCharts }