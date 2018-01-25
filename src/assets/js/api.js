import Axios from 'axios';
import {postMode} from './config';
import {isEmpty, cloneDeep} from './util';

let isTest = false;
let isDeAuth = false;

export const apiUrlWx = (url, type) => `https://${type && type === 'img' ? 'static' : 'www'}.jiemo${isTest ? 'dou' : ''}.net/Wxapi/${url || ''}`;

export const postJson = (url, data, cb) => {
    constructParam(data, theData => {
        /*
                wx.showLoading({
                    title: '数据加载中',
                    mask: true
                });
                wx.showNavigationBarLoading();
        */
        Axios
            .post({
                url: apiUrlWx(url),
                header: {
                    'content-type': 'application/json',
                },
                method: 'POST',
                data: theData
            })
            .then((res) => {
                // console.log('返回参数');
                // console.table(res.data);
                if (!isEmpty(res.data.token)) {
                    // App.globalData.token = res.data.token;
                    localStorage.setItem('token', res.data.token);
                }
                // wx.hideNavigationBarLoading();
                // wx.hideLoading();
                if (res.data.result === -1) {
                    console.log('===post_json_error====');
                    if (res.data.errormsg === '微信认证失败') {
                        console.log('===wechat auth failed====');
                        return false;
                    } else if (res.data.errormsg === '登录token过期') {
                        localStorage.setItem('token', '');
                        // App.globalData.token = '';
                        postJson(url, data, cb);
                    } else if (res.data.errormsg === '请鉴权') {
                        return false;
                    }
                }
                typeof cb === 'function' && cb(res);
            })
            .catch((err) => {
                // wx.hideToast();
                // wx.hideNavigationBarLoading();
                // wx.hideLoading();
            });
    });
};

const constructParam = (data, cb) => {
    let G = cloneDeep(postMode.G);
    if (isDeAuth) {
        G.nocheck = 1;
    }
    Object.assign(data, {G});
    // console.log('请求参数');
    // console.table(data.G,);
    return typeof cb === 'function' && cb(data);
};



