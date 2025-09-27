// 开发环境下启用 mock
if (process.env.NODE_ENV === 'development') {
    require('../mock/index.js');
}

require('../mock/index.js');
import $ from 'jquery';
import { getCities } from "@/api/detail";
import queryString from "query-string";

const query = queryString.parse(location.search);
console.log('query:', query)

const title = $('.title').text(query?.name)
const cities = $('.cities')
getCities(query?.provinceId).then(cityRes => {
    console.log('城市数据:', cityRes)
    for (let city of cityRes) {
        let li = $('<dd>').text(city?.name).appendTo(cities)
    }
})
