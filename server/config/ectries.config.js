
module.exports = [
    {
        "name": "每周项目录入",
        "type": "工作度量",
        "description": "管理者录入每周的项目",
        "tags": "项目管理-green;用户: 经理-orange",
        "roles": [2],
        "url": "/metrics/projects",
        "index": "metric",
        "icon": "portal_icon_1.svg",
        "isShownWithoutAuth": false
    },
    {
        "name": "每周工作录入",
        "type": "工作度量",
        "description": "录入每周在各个项目中的工作量",
        "tags": "工作录入-green",
        "roles": [2, 3, 4],
        "url": "/metrics/workloads",
        "index": "metric",
        "icon": "portal_icon_2.svg",
        "isShownWithoutAuth": false
    },
    {
        "name": "外包工作时长录入",
        "type": "工作度量",
        "description": "为外包同学录入每周工作情况",
        "tags": "工作录入-green;用户: 经理、工程师-orange",
        "url": "/metrics/vendorWorkloads",
        "roles": [2],
        "index": "metric",
        "icon": "portal_icon_3.svg",
        "isShownWithoutAuth": false
    },
    {
        "name": "个人统计数据",
        "type": "工作度量",
        "description": "查看自己各方面的统计数据",
        "tags": "数据报告-green",
        "url": "/metrics/personalStat",
        "roles": [1, 2, 3, 4],
        "index": "metric",
        "icon": "portal_icon_4.svg",
        "isShownWithoutAuth": false
    },
    {
        "name": "月度质量报告",
        "type": "工作度量",
        "description": "AIG/TG/MAP在质量、效率、流程上的每月度量数据",
        "tags": "数据报告-green",
        "url": "/metrics/monthlyReport",
        "roles": [1, 2],
        "index": "metric",
        "icon": "portal_icon_5.svg",
        "isShownWithoutAuth": false
    },
    {
        "name": "员工产能数据",
        "type": "工作度量",
        "description": "查看正式员工在项目上的投入及产出",
        "tags": "数据报告-green",
        "url": "/metrics/produces",
        "roles": [1, 2],
        "index": "metric",
        "icon": "portal_icon_6.svg",
        "isShownWithoutAuth": false
    },
    {
        "name": "外包产能数据",
        "type": "工作度量",
        "description": "查看外包员工在项目上的投入及产出",
        "tags": "数据报告-green",
        "url": "/metrics/vendorProduces",
        "roles": [1, 2],
        "index": "metric",
        "icon": "portal_icon_6.svg",
        "isShownWithoutAuth": false
    }
]
