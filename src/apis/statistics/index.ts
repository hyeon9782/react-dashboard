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

export {getProteinProcessingTables, getProteinProcessingVennCharts, getProteinProcessingQqplotCharts, getProteinNormalizationTables, getProteinNormalizationChartsType, getProteinNormalizationChartsGroup, getProteinDifferentialTables, getProteinDifferentialCharts }
