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
		client: {start:"_app/immutable/entry/start.BtFGcYP5.js",app:"_app/immutable/entry/app.6qf9f5KP.js",imports:["_app/immutable/entry/start.BtFGcYP5.js","_app/immutable/chunks/DBULfDCC.js","_app/immutable/entry/app.6qf9f5KP.js","_app/immutable/chunks/CgvsJPj0.js","_app/immutable/chunks/DBULfDCC.js"],stylesheets:["_app/immutable/assets/vendor.BpcL6yKj.css","_app/immutable/assets/vendor.BpcL6yKj.css"],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-D_IyBxUz.js')),
			__memo(() => import('./chunks/1-BFuh1k34.js')),
			__memo(() => import('./chunks/2-DlhakBaS.js')),
			__memo(() => import('./chunks/3-DDX260cS.js')),
			__memo(() => import('./chunks/4-CF9HRM3Z.js')),
			__memo(() => import('./chunks/5-Canb8x4h.js')),
			__memo(() => import('./chunks/6-BYRoR8iP.js')),
			__memo(() => import('./chunks/7-Do6nKynw.js')),
			__memo(() => import('./chunks/8-y7xKMV4M.js')),
			__memo(() => import('./chunks/9-BfIu58Um.js')),
			__memo(() => import('./chunks/10-BEC-kbzM.js')),
			__memo(() => import('./chunks/11-Bqirs9O_.js')),
			__memo(() => import('./chunks/12-jNqMF5az.js')),
			__memo(() => import('./chunks/13-AnGhgIqb.js')),
			__memo(() => import('./chunks/14-YoApJ1f6.js')),
			__memo(() => import('./chunks/15-w8vePVat.js')),
			__memo(() => import('./chunks/16-DNzXUX_K.js')),
			__memo(() => import('./chunks/17-BcFn_NHF.js')),
			__memo(() => import('./chunks/18-Dgh1UkSf.js')),
			__memo(() => import('./chunks/19-CzTkJ7MB.js')),
			__memo(() => import('./chunks/20-BNGRuH01.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/datasets",
				pattern: /^\/datasets\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/datasets/[id]",
				pattern: /^\/datasets\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/dev/test-app-state",
				pattern: /^\/dev\/test-app-state\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/dev/test-data-loading",
				pattern: /^\/dev\/test-data-loading\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/dev/test-enhanced-state",
				pattern: /^\/dev\/test-enhanced-state\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/dev/test-metadata-explorer",
				pattern: /^\/dev\/test-metadata-explorer\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/metadata/codelists/[oid]",
				pattern: /^\/metadata\/codelists\/([^/]+?)\/?$/,
				params: [{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/metadata/comments/[oid]",
				pattern: /^\/metadata\/comments\/([^/]+?)\/?$/,
				params: [{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/metadata/methods/[oid]",
				pattern: /^\/metadata\/methods\/([^/]+?)\/?$/,
				params: [{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/metadata/variables/[oid]",
				pattern: /^\/metadata\/variables\/([^/]+?)\/?$/,
				params: [{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/metadata/whereclauses/[oid]",
				pattern: /^\/metadata\/whereclauses\/([^/]+?)\/?$/,
				params: [{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/metadata/[type]/[oid]",
				pattern: /^\/metadata\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false},{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/metadata/[type]/[oid]/vlm",
				pattern: /^\/metadata\/([^/]+?)\/([^/]+?)\/vlm\/?$/,
				params: [{"name":"type","optional":false,"rest":false,"chained":false},{"name":"oid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,3,], errors: [1,4,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/rules",
				pattern: /^\/rules\/?$/,
				params: [],
				page: { layouts: [0,5,], errors: [1,,], leaf: 20 },
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
