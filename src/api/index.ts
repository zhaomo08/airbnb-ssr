import IndexedDB from '../utils/indexedDB'

const  airbnbDB = new IndexedDB('airbnb')


// export function getTicketList(){
//     return http.HttpGet('http://localhost:8002/business/daily-train-ticket/query-list',{})
// }

// Mock 接口
export async function fetchRoom(){
    await airbnbDB.openStore('room','id',['nose','ear'])
    const result = await airbnbDB.getList('room').then(res =>{
        return {
            code:'000000',message:'操作成功',result: res, success: true
        }
    })
    return result
}
