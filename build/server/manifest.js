const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["defineV21-ADaM.xml","favicon.ico","favicon.png","sample-rule-invalid.yaml","sample-rules.yaml"]),
	mimeTypes: {".xml":"text/xml",".png":"image/png",".yaml":"text/yaml"},
	_: {
		client: {start:"_app/immutable/entry/start.CXaxSQ5l.js",app:"_app/immutable/entry/app.Be63YdgA.js",imports:["_app/immutable/entry/start.CXaxSQ5l.js","_app/immutable/chunks/qnRMzYzX.js","_app/immutable/entry/app.Be63YdgA.js","_app/immutable/chunks/qnRMzYzX.js"],stylesheets:["_app/immutable/assets/vendor.BpcL6yKj.css","_app/immutable/assets/vendor.BpcL6yKj.css"],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-B85w2emr.js')),
			__memo(() => import('./chunks/1-gd78RbR4.js')),
			__memo(() => import('./chunks/2-Dhr3BhRH.js')),
			__memo(() => import('./chunks/3-Cl0VF3yc.js')),
			__memo(() => import('./chunks/4-BUVzPnH7.js')),
			__memo(() => import('./chunks/5-CR9EEvnW.js')),
			__memo(() => import('./chunks/6-rRVY1BSi.js')),
			__memo(() => import('./chunks/7-UsMD_E9S.js')),
			__memo(() => import('./chunks/8-DTz6oUpg.js')),
			__memo(() => import('./chunks/9-C1L3ZILX.js')),
			__memo(() => import('./chunks/10-BzIhuxoS.js')),
			__memo(() => import('./chunks/11-BXptnzU2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/datasets",
				pattern: /^\/datasets\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/datasets/[id]",
				pattern: /^\/datasets\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/dev/test-app-state",
				pattern: /^\/dev\/test-app-state\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/dev/test-data-loading",
				pattern: /^\/dev\/test-data-loading\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dev/test-enhanced-state",
				pattern: /^\/dev\/test-enhanced-state\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dev/test-metadata-explorer",
				pattern: /^\/dev\/test-metadata-explorer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
