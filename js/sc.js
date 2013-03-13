this.JSON||(this.JSON={}),function(){function f(a){return 10>a?"0"+a:a}function quote(a){return escapable.lastIndex=0,escapable.test(a)?'"'+a.replace(escapable,function(a){var b=meta[a];return"string"==typeof b?b:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function str(a,b){var c,d,e,f,h,g=gap,i=b[a];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(a)),"function"==typeof rep&&(i=rep.call(b,a,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?i+"":"null";case"boolean":case"null":return i+"";case"object":if(!i)return"null";if(gap+=indent,h=[],"[object Array]"===Object.prototype.toString.apply(i)){for(f=i.length,c=0;f>c;c+=1)h[c]=str(c,i)||"null";return e=0===h.length?"[]":gap?"[\n"+gap+h.join(",\n"+gap)+"\n"+g+"]":"["+h.join(",")+"]",gap=g,e}if(rep&&"object"==typeof rep)for(f=rep.length,c=0;f>c;c+=1)d=rep[c],"string"==typeof d&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));else for(d in i)Object.hasOwnProperty.call(i,d)&&(e=str(d,i),e&&h.push(quote(d)+(gap?": ":":")+e));return e=0===h.length?"{}":gap?"{\n"+gap+h.join(",\n"+gap)+"\n"+g+"}":"{"+h.join(",")+"}",gap=g,e}}"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;"function"!=typeof JSON.stringify&&(JSON.stringify=function(a,b,c){var d;if(gap="",indent="","number"==typeof c)for(d=0;c>d;d+=1)indent+=" ";else"string"==typeof c&&(indent=c);if(rep=b,b&&"function"!=typeof b&&("object"!=typeof b||"number"!=typeof b.length))throw Error("JSON.stringify");return str("",{"":a})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(a,b){var c,d,e=a[b];if(e&&"object"==typeof e)for(c in e)Object.hasOwnProperty.call(e,c)&&(d=walk(e,c),void 0!==d?e[c]=d:delete e[c]);return reviver.call(a,b,e)}var j;if(text+="",cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

var CryptoJS=CryptoJS||function(i,p){var f={},q=f.lib={},j=q.Base=function(){function a(){}return{extend:function(h){a.prototype=this;var d=new a;h&&d.mixIn(h);d.$super=this;return d},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var d in a)a.hasOwnProperty(d)&&(this[d]=a[d]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),k=q.WordArray=j.extend({init:function(a,h){a=
this.words=a||[];this.sigBytes=h!=p?h:4*a.length},toString:function(a){return(a||m).stringify(this)},concat:function(a){var h=this.words,d=a.words,c=this.sigBytes,a=a.sigBytes;this.clamp();if(c%4)for(var b=0;b<a;b++)h[c+b>>>2]|=(d[b>>>2]>>>24-8*(b%4)&255)<<24-8*((c+b)%4);else if(65535<d.length)for(b=0;b<a;b+=4)h[c+b>>>2]=d[b>>>2];else h.push.apply(h,d);this.sigBytes+=a;return this},clamp:function(){var a=this.words,b=this.sigBytes;a[b>>>2]&=4294967295<<32-8*(b%4);a.length=i.ceil(b/4)},clone:function(){var a=
j.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var b=[],d=0;d<a;d+=4)b.push(4294967296*i.random()|0);return k.create(b,a)}}),r=f.enc={},m=r.Hex={stringify:function(a){for(var b=a.words,a=a.sigBytes,d=[],c=0;c<a;c++){var e=b[c>>>2]>>>24-8*(c%4)&255;d.push((e>>>4).toString(16));d.push((e&15).toString(16))}return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c+=2)d[c>>>3]|=parseInt(a.substr(c,2),16)<<24-4*(c%8);return k.create(d,b/2)}},s=r.Latin1={stringify:function(a){for(var b=
a.words,a=a.sigBytes,d=[],c=0;c<a;c++)d.push(String.fromCharCode(b[c>>>2]>>>24-8*(c%4)&255));return d.join("")},parse:function(a){for(var b=a.length,d=[],c=0;c<b;c++)d[c>>>2]|=(a.charCodeAt(c)&255)<<24-8*(c%4);return k.create(d,b)}},g=r.Utf8={stringify:function(a){try{return decodeURIComponent(escape(s.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return s.parse(unescape(encodeURIComponent(a)))}},b=q.BufferedBlockAlgorithm=j.extend({reset:function(){this._data=k.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=g.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,d=b.words,c=b.sigBytes,e=this.blockSize,f=c/(4*e),f=a?i.ceil(f):i.max((f|0)-this._minBufferSize,0),a=f*e,c=i.min(4*a,c);if(a){for(var g=0;g<a;g+=e)this._doProcessBlock(d,g);g=d.splice(0,a);b.sigBytes-=c}return k.create(g,c)},clone:function(){var a=j.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});q.Hasher=b.extend({init:function(){this.reset()},
reset:function(){b.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=b.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,d){return a.create(d).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return e.HMAC.create(a,d).finalize(b)}}});var e=f.algo={};return f}(Math);
(function(i){var p=CryptoJS,f=p.lib,q=f.WordArray,f=f.Hasher,j=p.algo,k=[],r=[];(function(){function f(a){for(var b=i.sqrt(a),d=2;d<=b;d++)if(!(a%d))return!1;return!0}function g(a){return 4294967296*(a-(a|0))|0}for(var b=2,e=0;64>e;)f(b)&&(8>e&&(k[e]=g(i.pow(b,0.5))),r[e]=g(i.pow(b,1/3)),e++),b++})();var m=[],j=j.SHA256=f.extend({_doReset:function(){this._hash=q.create(k.slice(0))},_doProcessBlock:function(f,g){for(var b=this._hash.words,e=b[0],a=b[1],h=b[2],d=b[3],c=b[4],i=b[5],j=b[6],k=b[7],l=0;64>
l;l++){if(16>l)m[l]=f[g+l]|0;else{var n=m[l-15],o=m[l-2];m[l]=((n<<25|n>>>7)^(n<<14|n>>>18)^n>>>3)+m[l-7]+((o<<15|o>>>17)^(o<<13|o>>>19)^o>>>10)+m[l-16]}n=k+((c<<26|c>>>6)^(c<<21|c>>>11)^(c<<7|c>>>25))+(c&i^~c&j)+r[l]+m[l];o=((e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22))+(e&a^e&h^a&h);k=j;j=i;i=c;c=d+n|0;d=h;h=a;a=e;e=n+o|0}b[0]=b[0]+e|0;b[1]=b[1]+a|0;b[2]=b[2]+h|0;b[3]=b[3]+d|0;b[4]=b[4]+c|0;b[5]=b[5]+i|0;b[6]=b[6]+j|0;b[7]=b[7]+k|0},_doFinalize:function(){var f=this._data,g=f.words,b=8*this._nDataBytes,
e=8*f.sigBytes;g[e>>>5]|=128<<24-e%32;g[(e+64>>>9<<4)+15]=b;f.sigBytes=4*g.length;this._process()}});p.SHA256=f._createHelper(j);p.HmacSHA256=f._createHmacHelper(j)})(Math);

var _sociocast = _sociocast ||
{
	apikey		: "",
	secret		: "",
	clid		: "",
	timestamp 	: 0,
	q           : [],

	api_host	: '${serverHostAndPort}',
	version 	: '${apiVersion}',

	// Grab current http protocol
	HTTP_PROTOCOL : (("https:" == document.location.protocol) ? "https://" : "http://"),

	// CORS Available in browser
	USE_XHR : (window.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest()),
	
	// Build XHR object
	XHR : ((window.ActiveXObject) ? new ActiveXObject("Microsoft.XMLHTTP") : (XMLHttpRequest && new XMLHttpRequest()) || null),

	/**
	 * Instantiate the js library
	 */
	init : function (clid,apikey,secret)
	{
		sc = this;
		sc.apikey = apikey;
		sc.secret = secret;
		sc.clid   = clid;
	},

	/**
	 * Grab current system time
	 */
	ets : function()
	{
		return Math.round((new Date()).getTime() / 1000);
	},

	entity_observe : function (event, eid, obs, callback)
	{
	    sc.entity_observe_with_ts(event, eid, null, obs, callback);
	},
	
	entity_observe_with_ts : function (event, eid, ts, obs, callback)
	{
		var defaults = {
			'clid' : sc.clid,
			'ets' : ts || sc.ets(),
			'eid' : eid
		};

		var data 	= sc.util.extend(defaults,data||{});
		data['evt'] = event;
		data['obs'] = obs || {};
		data['obs'].ref = document.referrer;

		//var parsed = sc.util.url_parse(data['obs'].ref);
		//data['obs'].srchtrms = sc.util.srchtrms(parsed);
		//sc.util.extract_utm(data['obs'], parsed.queryKey);

		sc.send('entity/observe',data,callback);
	},

	entity_attributes_set : function(eid, data, callback){ sc.entity_attributes._do('set',eid, data, callback) },
	entity_attributes_add : function(eid, data, callback){ sc.entity_attributes._do('add',eid, data, callback) },
	entity_attributes_del : function(eid, data, callback){ sc.entity_attributes._do('del',eid, data, callback) },

	entity_attributes_modify : function(eid, data, callback)
	{
		var defaults = {
			'clid' : sc.clid,
			'eid' : eid
		};

		data = sc.util.extend(defaults,data||{});
		sc.send('entity/attributes',data, callback);
	},

	entity_attributes :
	{
		_do : function(type, eid, data, callback)
		{
			var defaults = {
				'clid' : sc.clid,
				'eid' : eid
			};

			defaults[type] = data || {};
			sc.send('entity/attributes',defaults, callback);
		}
	},

	entity_profile : function(eid, humanReadable, data, callback)
	{
	    var defaults = {
			'clid' : sc.clid,
			'eid' : eid,
			'humread' : humanReadable
		};

		data = sc.util.extend(defaults,data||{});
		sc.send('entity/profile',data, callback);
	},

	// private methods
	util : {

		/**
		 * Simple object extend
		 */
		extend: function(a,b){
			var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c
		},

		/**
		 * Hash data
		 */
		hash : function()
		{			
			var message = "apikey=" + sc.apikey + "&apisecret=" + sc.secret + "&ts=" + sc.ets();
			//compute the SHA256 hash and return as a string
			return CryptoJS.SHA256(message).toString(CryptoJS.enc.Hex);
		},

		url_parse: function(url)
		{
			var	o 	= {
						key: ["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],
						q:   {
							name:   "queryKey",
							parser: /(?:^|&)([^&=]*)=?([^&]*)/g
						},
						parser: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
					},
			m   	= o.parser.exec(document.referrer),
			uri 	= {},
			i   	= 14;

			while (i--) uri[o.key[i]] = m[i] || "";

			uri[o.q.name] = {};
			uri[o.key[12]].replace(o.q.parser, function ($0, $1, $2) {
				if ($1) uri[o.q.name][$1] = $2;
			});

			return uri;
		},

		srchtrms : function(parsed_url_object)
		{
			var s_keys = ["q","as_q","p","kw","what","where","query"];
			if(typeof(parsed_url_object.queryKey) != "undefined")
			{
				for (x in s_keys)
				{
					if(typeof(parsed_url_object.queryKey[s_keys[x]]) != "undefined")
						return parsed_url_object.queryKey[s_keys[x]];
				};
			}
			return "";
		},

		extract_utm : function(obs,bucket)
		{
			for(x in bucket)
			{
				var m = /utm_/g.exec(x);
				if(m) obs[m['input']] = bucket[m['input']] || '';
			}
			return obs;
		}
	},

	/**
	 * Send data to sociocast
	 */
	send : function(method, data, callback)
	{
		var vrsn = sc.version ? sc.version + '/' : '';
		var url = sc.HTTP_PROTOCOL + sc.api_host + '/' + vrsn + method + '?' + 'apikey=' + sc.apikey + "&ts=" + sc.ets() + "&sig=" + sc.util.hash();

		if (sc.USE_XHR)
		{
			sc.XHR.open("POST",url,true);
			sc.XHR.setRequestHeader("Content-type","application/json; charset=utf-8");
			sc.XHR.onreadystatechange = function (e) {
			    if (sc.XHR.readyState === 4) { // XMLHttpRequest.DONE == 4, except in safari 4
			        if (sc.XHR.status === 200) {
			            if (callback && callback.success) {
			                callback.success(sc.XHR.responseText);
			            }
			        } else {
			            if (callback && callback.error) {
			                callback.error(sc.XHR.status,sc.XHR.statusText,sc.XHR.responseText);
			            }
			        }
			    }
			};
			sc.XHR.send(JSON.stringify(data));
		}
		else
		{
			url = url + JSON.stringify(data);
			var script = document.createElement("script");
			    script.type = "text/javascript";
			    script.async = true;
			    script.defer = true;
			    script.src = url;
			var s = document.getElementsByTagName("script")[0];
			s.parentNode.insertBefore(script, s);
		}
	}
};