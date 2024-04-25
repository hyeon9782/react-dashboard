import { instance } from "../instance"

const getProteinProcessingTables = (analysisNo: string) => {
    return instance.get(`/v2/api/protein/statistics/processing-tables/${analysisNo}`)
}

const getProteinProcessingVennCharts = (type: string , analysisNo: string) => {
    return instance.get(`/v2/api/protein/statistics/processing-charts/venn/${type}/${analysisNo}`)
}

const getProteinProcessingQqplotCharts = (groupName: string , analysisNo: string) => {
    return instance.get(`/v2/api/protein/statistics/processing-charts/qqplot/${groupName}/${analysisNo}`)
}

const getProteinNormalizationTables = (analysisNo: string) => {
    return instance.get(`/v2/api/protein/statistics/normalization-tables/${analysisNo}`)
}

const getProteinNormalizationChartsType = (analysisNo: string, dataType: string) => {
    return instance.get(`/v2/api/protein/statistics/normalization-charts-type/${dataType}/${analysisNo}`)
}

const getProteinNormalizationChartsGroup = (analysisNo: string, type: string, name: string) => {
    return instance.get(`/v2/api/protein/statistics/normalization-charts-group/${type}/${name}/${analysisNo}`)
}

const getProteinDifferentialTables = (analysisNo: string) => {
    return instance.get(`/v2/api/protein/statistics/differential-tables/${analysisNo}`)
}

const getProteinDifferentialCharts = (analysisNo: string, type: string, dataType: string) => {
    return instance.get(`/v2/api/protein/statistics/differential-charts/${type}/${dataType}/${analysisNo}`)
}

/* ======================================================================================================== */

const getGlycoproteinProcessingTables = (analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/processing-tables/${analysisNo}`)
}

const getGlycoproteinProcessingVennCharts = (type: string , analysisNo: string, name: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/processing-charts/venn/${type}/${name}/${analysisNo}`)
}

const getGlycoproteinProcessingQqplotCharts = (groupName: string , analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/processing-charts/qqplot/${groupName}/${analysisNo}`)
}

const getGlycoproteinNormalizationTables = (analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/normalization-tables/${analysisNo}`)
}

const getGlycoproteinNormalizationChartsType = (analysisNo: string, dataType: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/normalization-charts-type/${dataType}/${analysisNo}`)
}

const getGlycoproteinNormalizationChartsGroup = (analysisNo: string, type: string, name: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/normalization-charts-group/${type}/${name}/${analysisNo}`)
}

const getGlycoproteinDifferentialTables = (analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/differential-tables/${analysisNo}`)
}

const getGlycoproteinDifferentialCharts = (analysisNo: string, type: string, dataType: string) => {
    return instance.get(`/v2/api/glycoprotein/statistics/differential-charts/${type}/${dataType}/${analysisNo}`)
}

export {getProteinProcessingTables, getProteinProcessingVennCharts, getProteinProcessingQqplotCharts, getProteinNormalizationTables, getProteinNormalizationChartsType, getProteinNormalizationChartsGroup, getProteinDifferentialTables, getProteinDifferentialCharts, 


    getGlycoproteinProcessingTables, getGlycoproteinProcessingVennCharts, getGlycoproteinProcessingQqplotCharts, getGlycoproteinNormalizationTables, getGlycoproteinNormalizationChartsType, getGlycoproteinNormalizationChartsGroup, getGlycoproteinDifferentialTables, getGlycoproteinDifferentialCharts
 }
