// 开发环境下启用 mock
if (process.env.NODE_ENV === 'development') {
    require('@/mock/index.js');
}

require('@/mock/index.js');
import $ from 'jquery';
import { getProvinces } from "@/api/list";

const provinces = $('.provinces')

getProvinces().then(provincesRes => {
    console.log('省份数据:', provincesRes)
    for (let province of provincesRes) {
        let li = $('<li>')
        let a = $('<a>').text(province?.name).appendTo(li)
        a.attr('href', `/detail.html?name=${province?.name}&provinceId=${province?.id}`)
        provinces.append(li)
    }
})