import $ from 'jquery';

export function getProvinces() {
    return new Promise((resolve, reject) => {
        $.get('/api/provinces', function (provinceRes) {
            if (typeof provinceRes !== 'object') {
                // 解析JSON数据
                provinceRes = JSON.parse(provinceRes)
            }

            if (provinceRes.code === 200) {
                resolve(provinceRes.data);
            } else {
                reject(new Error('获取省份数据失败'));
            }
        });
    })
}