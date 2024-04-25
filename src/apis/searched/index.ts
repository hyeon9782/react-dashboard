import { instance } from "../instance"

const getProteinSummaryTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/protein/summary-tables/${analysisNo}`)
}

const getProteinSummaryCharts = async (fileId: string) => {
    return await instance.get(`/v2/api/protein/summary-charts/${fileId}`)
}

const getProteinQuantificationTables = async (fileIds: string) => {
    return await instance.get(`/v2/api/protein/quantification-tables/${fileIds}`)
}

const getProteinQuantificationTablesAll = async (fileIds: string) => {
    return await instance.get(`/v2/api/protein/quantification-tables/${fileIds}/all`)
}

const getProteinQuantificationCharts = async (type: string, fileIds: string) => {
    return await instance.get(`/v2/api/protein/quantification-charts/${type}/${fileIds}`)
}

const getProteinIdentificationTables = async (fileIds: string) => {
    return await instance.get(`/v2/api/protein/identification-tables/${fileIds}`)
}

const getProteinIdentificationTablesAll = async (fileIds: string) => {
    return await instance.get(`/v2/api/protein/identification-tables/${fileIds}/all`)
}

const getProteinIdentificationCharts = async (type: string, fileIds: string) => {
    return await instance.get(`/v2/api/protein/identification-charts/${type}/${fileIds}`)
}

/* =================================================================================================== */

const getGlycoproteinSummaryTables = async (analysisNo: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/summary-tables/${analysisNo}`)
}

const getGlycoproteinSummaryCharts = async (fileId: string, type: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/summary-charts/${type}/${fileId}`)
}

const getGlycoproteinQuantificationTables = async (fileIds: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/quantification-tables/${fileIds}`)
}

const getGlycoproteinQuantificationTablesAll = async (fileIds: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/quantification-tables/${fileIds}/all`)
}

const getGlycoproteinQuantificationCharts = async (type: string, fileIds: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/quantification-charts/${type}/${fileIds}`)
}

const getGlycoproteinIdentificationTables = async (fileIds: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/identification-tables/${fileIds}`)
}

const getGlycoproteinIdentificationTablesAll = async (fileIds: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/identification-tables/${fileIds}/all`)
}

const getGlycoproteinIdentificationCharts = async (type: string, fileIds: string) => {
    return await instance.get(`/v2/api/glycoprotein/searched/identification-charts/${type}/${fileIds}`)
}


export {getProteinSummaryTables, getProteinSummaryCharts,getProteinQuantificationTables, getProteinQuantificationTablesAll,getProteinQuantificationCharts, getProteinIdentificationTables, getProteinIdentificationTablesAll,  getProteinIdentificationCharts,

    getGlycoproteinSummaryTables, getGlycoproteinSummaryCharts,getGlycoproteinQuantificationTables, getGlycoproteinQuantificationTablesAll,getGlycoproteinQuantificationCharts, getGlycoproteinIdentificationTables, getGlycoproteinIdentificationTablesAll,  getGlycoproteinIdentificationCharts
  }