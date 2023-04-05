import http from "../http-common";

class StudentDataService{
    get(sid)
    {
        return http.get(`/students/${sid}`);
    }
}

export default new StudentDataService();