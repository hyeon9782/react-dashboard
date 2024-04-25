import { instance } from "../instance"

const getDashboardUserStatistics = async () => {
    return await instance.get('/v2/api/dashboard/user/statistics')
}

const getDashboardRealtimeJobStatus = async () => {
    return await instance.get('/v2/api/dashboard/realtime/jobstatus')
}

const getDashboardJobResults =  async () => {
    return await instance.get('/v2/api/dashboard/job/results')
}

const getDashboardJobResultsRatio = async () => {
    return await instance.get('/v2/api/dashboard/job/results/ratio')
}

const getDashboardInstrumentUilization = async () => {
    return await instance.get('/v2/api/dashboard/instrument/utilication')
}

export { getDashboardUserStatistics, getDashboardRealtimeJobStatus, getDashboardJobResults, getDashboardJobResultsRatio, getDashboardInstrumentUilization}