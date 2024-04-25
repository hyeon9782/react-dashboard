import { instance } from "../instance"

const getProteinProcessingTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/protein/statistics/processing-tables/${analysisNo}`)
}

const getProteinProcessingVennCharts = async (type: string , analysisNo: string) => {
    return await instance.get(`/v2/api/protein/statistics/processing-charts/venn/${type}/${analysisNo}`)
}

const getProteinProcessingQqplotCharts = async (groupName: string , analysisNo: string) => {
    return await instance.get(`/v2/api/protein/statistics/processing-charts/qqplot/${groupName}/${analysisNo}`)
}

const getProteinNormalizationTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/protein/statistics/normalization-tables/${analysisNo}`)
}

const getProteinNormalizationChartsType = async (analysisNo: string, dataType: string) => {
    return await instance.get(`/v2/api/protein/statistics/normalization-charts-type/${dataType}/${analysisNo}`)
}

const getProteinNormalizationChartsGroup = async (analysisNo: string, type: string, name: string) => {
    return await instance.get(`/v2/api/protein/statistics/normalization-charts-group/${type}/${name}/${analysisNo}`)
}

const getProteinDifferentialTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/protein/statistics/differential-tables/${analysisNo}`)
}

const getProteinDifferentialCharts = async (analysisNo: string, type: string, dataType: string) => {
    return await instance.get(`/v2/api/protein/statistics/differential-charts/${type}/${dataType}/${analysisNo}`)
}

/* ======================================================================================================== */

const getGlycoproteinProcessingTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/processing-tables/${analysisNo}`)
}

const getGlycoproteinProcessingVennCharts = async (type: string , analysisNo: string, name: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/processing-charts/venn/${type}/${name}/${analysisNo}`)
}

const getGlycoproteinProcessingQqplotCharts = async (groupName: string , analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/processing-charts/qqplot/${groupName}/${analysisNo}`)
}

const getGlycoproteinNormalizationTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/normalization-tables/${analysisNo}`)
}

const getGlycoproteinNormalizationChartsType = async (analysisNo: string, dataType: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/normalization-charts-type/${dataType}/${analysisNo}`)
}

const getGlycoproteinNormalizationChartsGroup = async (analysisNo: string, type: string, name: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/normalization-charts-group/${type}/${name}/${analysisNo}`)
}

const getGlycoproteinDifferentialTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/differential-tables/${analysisNo}`)
}

const getGlycoproteinDifferentialCharts = async (analysisNo: string, type: string, dataType: string) => {
    return await instance.get(`/v2/api/glycoprotein/statistics/differential-charts/${type}/${dataType}/${analysisNo}`)
}

export {getProteinProcessingTables, getProteinProcessingVennCharts, getProteinProcessingQqplotCharts, getProteinNormalizationTables, getProteinNormalizationChartsType, getProteinNormalizationChartsGroup, getProteinDifferentialTables, getProteinDifferentialCharts, 


    getGlycoproteinProcessingTables, getGlycoproteinProcessingVennCharts, getGlycoproteinProcessingQqplotCharts, getGlycoproteinNormalizationTables, getGlycoproteinNormalizationChartsType, getGlycoproteinNormalizationChartsGroup, getGlycoproteinDifferentialTables, getGlycoproteinDifferentialCharts
 }
