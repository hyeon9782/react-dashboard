import { instance } from "../instance"

// page 아니야?
const getJobStatus = async (analysisNo: number) => {
    return await instance.get(`/api/v2/jobstatus/${analysisNo}`);
}

// 
const getJobStatusModifyParams = async (analysisNo: number) => {
    return await instance.get(`/api/v2/jobstatus/modifyParams/${analysisNo}`);
}

/* =================================================================================================== */


export { getJobStatus, getJobStatusModifyParams}

