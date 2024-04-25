import { instance } from "../instance"

const getProteinSummaryTables = (analysisNo: string) => {
    return instance.get(`/v2/api/protein/summary-tables/${analysisNo}`)
}

const getProteinSummaryCharts = (fileId: string) => {
    return instance.get(`/v2/api/protein/summary-charts/${fileId}`)
}

const getProteinQuantificationTables = (fileIds: string) => {
    return instance.get(`/v2/api/protein/quantification-tables/${fileIds}`)
}

const getProteinQuantificationTablesAll = (fileIds: string) => {
    return instance.get(`/v2/api/protein/quantification-tables/${fileIds}/all`)
}

const getProteinQuantificationCharts = (type: string, fileIds: string) => {
    return instance.get(`/v2/api/protein/quantification-charts/${type}/${fileIds}`)
}

const getProteinIdentificationTables = (fileIds: string) => {
    return instance.get(`/v2/api/protein/identification-tables/${fileIds}`)
}

const getProteinIdentificationTablesAll = (fileIds: string) => {
    return instance.get(`/v2/api/protein/identification-tables/${fileIds}/all`)
}

const getProteinIdentificationCharts = (type: string, fileIds: string) => {
    return instance.get(`/v2/api/protein/identification-charts/${type}/${fileIds}`)
}


export {getProteinSummaryTables, getProteinSummaryCharts,getProteinQuantificationTables, getProteinQuantificationTablesAll,getProteinQuantificationCharts, getProteinIdentificationTables, getProteinIdentificationTablesAll,  getProteinIdentificationCharts  }