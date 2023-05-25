import { apiInstance } from "./index.js";

const api = apiInstance();

function getMyAttractions(userid, success, fail) {
    api.get(`/plan/myplan/${userid}`).then(success).catch(fail);
}

function deleteMyAttraction(userid, content_id, success, fail) {
    api.delete(`/plan/myplan/${userid}/${content_id}`).then(success).catch(fail);
}

export { getMyAttractions, deleteMyAttraction };