import $ from 'jquery';

export function getCities(provinceId = 1) {
    return new Promise((resolve, reject) => {
        $.get(`/api/cities/${provinceId}`, function (cityRes) {
            if (typeof cityRes !== 'object') {
                // 解析JSON数据
                cityRes = JSON.parse(cityRes)
            }

            if (cityRes.code === 200) {
                resolve(cityRes.data);
            } else {
                reject(new Error('获取城市数据失败'));
            }
        });
    })
}