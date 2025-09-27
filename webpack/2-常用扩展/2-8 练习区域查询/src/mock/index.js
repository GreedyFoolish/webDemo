const Mock = require('mockjs');

// 省份数据
const provinces = [
    { id: 1, name: '北京市', level: 1, parentId: 0 },
    { id: 2, name: '广东省', level: 1, parentId: 0 },
    { id: 3, name: '江苏省', level: 1, parentId: 0 },
    { id: 4, name: '浙江省', level: 1, parentId: 0 }
];

// 城市数据
const cities = [
    { id: 11, name: '北京市', level: 2, parentId: 1 },
    { id: 21, name: '广州市', level: 2, parentId: 2 },
    { id: 22, name: '深圳市', level: 2, parentId: 2 },
    { id: 23, name: '东莞市', level: 2, parentId: 2 },
    { id: 31, name: '南京市', level: 2, parentId: 3 },
    { id: 32, name: '苏州市', level: 2, parentId: 3 },
    { id: 41, name: '杭州市', level: 2, parentId: 4 },
    { id: 42, name: '宁波市', level: 2, parentId: 4 }
];

// 模拟省份查询接口
Mock.mock('/api/provinces', 'get', {
    code: 200,
    message: 'success',
    data: provinces
});

// 模拟根据省份ID查询城市接口
Mock.mock(/^\/api\/cities\/\d+$/, 'get', function (options) {
    const url = options.url; // 例如: /api/cities/2
    const provinceId = parseInt(url.split('/').pop());

    const provinceCities = cities.filter(city => city.parentId === provinceId);

    return {
        code: 200,
        message: 'success',
        data: provinceCities
    };
});

// 模拟区域查询接口
Mock.mock('/api/area', 'get', {
    code: 200,
    message: 'success',
    'data|5-10': [{
        'id|+1': 1,
        name: '@province',
        'level|1-3': 1,
        'parentId|0-10': 0
    }]
});

// 可以添加更多接口模拟
Mock.mock('/api/area/detail', 'get', {
    code: 200,
    message: 'success',
    'data': {
        'id|1-100': 1,
        name: '@city',
        level: 2,
        parentId: 1
    }
});
