module.exports = {
	"name": "Bacra",							// 项目名称
	"alias": "bacra",							// 项目的默认二级域名
	"sync": false,									// fileMap文件同步目录
	"catalog": false,								// 项目内嵌的二级目录
	"baseLess": "common/b.less",					// less公共文件
	"MinCssName": false,							// 压缩样式名的前缀
	"hostname": false,								// 线上资源域名
	"defaultHeader": "common/header.html",			// 公共头部
	"defaultFooter": "common/footer.html",			// 公共尾部
	"dataAPI": false,								// 动态数据接口
	"HTML": {							// 配置项目HTML（公共部分）
		"index/index.html": {
			'index.html': {
				'title': 'An D2er'
			}
		},
		"license/license.html": {
			'license.html': {
				'title': 'MIT'
			}
		}
	},
	"fileMap": {						// 配置文件映射（公共部分）
		"css/base.min.css": [
			'common/reset.css',
			'common/base.css',
			'common/nav.less',

			"index/index.less",
			"license/license.less"
		],

		"js/base.min.js": [
			'common/nav.js',
			'common/nav.test.js',
			'common/google-analytics.js'
		]
	}
};