import { http }  from "../utils/http"

export function getTicketList(){
    return http.HttpGet('http://localhost:8002/business/daily-train-ticket/query-list',{})
}