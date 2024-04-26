import { instance } from "../instance"

const getFileInfo = async () => {
    return await instance.get('/api/v2/fileupload/info')
}

const saveFileInfo = async (fileInfo: any) => {
    return await instance.post('/api/v2/fileupload/info', fileInfo)
}

const getS3Objects = async () => {
    return await instance.get('/api/v2/fileupload/s3/objects')
}

const deleteFileInfo = async (id: string) => {
    return await instance.delete(`/api/v2/fileupload/info/${id}`)
}

const deleteS3Object = async (analysisNo: string) => {
    return await instance.delete(`/api/v2/fileupload/S3/objects/${analysisNo}`)
}

export {getFileInfo, saveFileInfo,  getS3Objects, deleteFileInfo, deleteS3Object}