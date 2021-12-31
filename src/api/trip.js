
import Resource from "../api/resource";
import request from "../utils/request";

class Trip extends Resource {
    constructor() {
        super("trip");
}

list() {
    return request({
        url: `/preview/trips`,
        method: 'get',
    })
}

}

export { Trip as default };