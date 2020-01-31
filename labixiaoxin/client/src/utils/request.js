import axios from 'axios';
export default (method, url, param = []) => {
    let config = {};
    config.method = method;
    config.url = url;
    let type = method === 'get' ? 'params' : 'data';
    config[type] = param;
    config.headers = {};
    return axios(config).catch(error => {
        switch (error.reponse.status) {
            case 404:
                alert('客户端出错了');
                break;
            case 500:
                alert('服务端出错了');
                break;
        }
    });
};