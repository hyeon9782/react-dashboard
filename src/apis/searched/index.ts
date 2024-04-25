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

/* =================================================================================================== */

const getGlycoproteinSummaryTables = (analysisNo: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/summary-tables/${analysisNo}`)
}

const getGlycoproteinSummaryCharts = (fileId: string, type: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/summary-charts/${type}/${fileId}`)
}

const getGlycoproteinQuantificationTables = (fileIds: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/quantification-tables/${fileIds}`)
}

const getGlycoproteinQuantificationTablesAll = (fileIds: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/quantification-tables/${fileIds}/all`)
}

const getGlycoproteinQuantificationCharts = (type: string, fileIds: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/quantification-charts/${type}/${fileIds}`)
}

const getGlycoproteinIdentificationTables = (fileIds: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/identification-tables/${fileIds}`)
}

const getGlycoproteinIdentificationTablesAll = (fileIds: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/identification-tables/${fileIds}/all`)
}

const getGlycoproteinIdentificationCharts = (type: string, fileIds: string) => {
    return instance.get(`/v2/api/glycoprotein/searched/identification-charts/${type}/${fileIds}`)
}


export {getProteinSummaryTables, getProteinSummaryCharts,getProteinQuantificationTables, getProteinQuantificationTablesAll,getProteinQuantificationCharts, getProteinIdentificationTables, getProteinIdentificationTablesAll,  getProteinIdentificationCharts,

    getGlycoproteinSummaryTables, getGlycoproteinSummaryCharts,getGlycoproteinQuantificationTables, getGlycoproteinQuantificationTablesAll,getGlycoproteinQuantificationCharts, getGlycoproteinIdentificationTables, getGlycoproteinIdentificationTablesAll,  getGlycoproteinIdentificationCharts
  }