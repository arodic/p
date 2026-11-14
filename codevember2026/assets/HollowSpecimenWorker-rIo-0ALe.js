(function() {
	/**
	* @license
	* Copyright 2010-2026 Three.js Authors
	* SPDX-License-Identifier: MIT
	*/
	const t = 1001, e = 2300, s = 2301, i = 2302, r = "srgb", n = "srgb-linear", a = "linear";
	function createElementNS(t) {
		return document.createElementNS("http://www.w3.org/1999/xhtml", t);
	}
	const h = {};
	function enhanceLogMessage(t) {
		const e = t[0];
		if ("string" == typeof e && e.startsWith("TSL:")) {
			const e = t[1];
			e && e.isStackTrace ? t[0] += " " + e.getLocation() : t[1] = "Stack trace not available. Enable \"THREE.Node.captureStackTrace\" to capture stack traces.";
		}
		return t;
	}
	function warn(...t) {
		const e = "THREE." + (t = enhanceLogMessage(t)).shift();
		{
			const s = t[0];
			s && s.isStackTrace ? console.warn(s.getError(e)) : console.warn(e, ...t);
		}
	}
	function error(...t) {
		const e = "THREE." + (t = enhanceLogMessage(t)).shift();
		{
			const s = t[0];
			s && s.isStackTrace ? console.error(s.getError(e)) : console.error(e, ...t);
		}
	}
	function warnOnce(...t) {
		const e = t.join(" ");
		e in h || (h[e] = !0, warn(...t));
	}
	var o = class {
		addEventListener(t, e) {
			void 0 === this._listeners && (this._listeners = {});
			const s = this._listeners;
			void 0 === s[t] && (s[t] = []), -1 === s[t].indexOf(e) && s[t].push(e);
		}
		hasEventListener(t, e) {
			const s = this._listeners;
			return void 0 !== s && void 0 !== s[t] && -1 !== s[t].indexOf(e);
		}
		removeEventListener(t, e) {
			const s = this._listeners;
			if (void 0 === s) return;
			const i = s[t];
			if (void 0 !== i) {
				const t = i.indexOf(e);
				-1 !== t && i.splice(t, 1);
			}
		}
		dispatchEvent(t) {
			const e = this._listeners;
			if (void 0 === e) return;
			const s = e[t.type];
			if (void 0 !== s) {
				t.target = this;
				const e = s.slice(0);
				for (let s = 0, i = e.length; s < i; s++) e[s].call(this, t);
				t.target = null;
			}
		}
	};
	const l = [
		"00",
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"08",
		"09",
		"0a",
		"0b",
		"0c",
		"0d",
		"0e",
		"0f",
		"10",
		"11",
		"12",
		"13",
		"14",
		"15",
		"16",
		"17",
		"18",
		"19",
		"1a",
		"1b",
		"1c",
		"1d",
		"1e",
		"1f",
		"20",
		"21",
		"22",
		"23",
		"24",
		"25",
		"26",
		"27",
		"28",
		"29",
		"2a",
		"2b",
		"2c",
		"2d",
		"2e",
		"2f",
		"30",
		"31",
		"32",
		"33",
		"34",
		"35",
		"36",
		"37",
		"38",
		"39",
		"3a",
		"3b",
		"3c",
		"3d",
		"3e",
		"3f",
		"40",
		"41",
		"42",
		"43",
		"44",
		"45",
		"46",
		"47",
		"48",
		"49",
		"4a",
		"4b",
		"4c",
		"4d",
		"4e",
		"4f",
		"50",
		"51",
		"52",
		"53",
		"54",
		"55",
		"56",
		"57",
		"58",
		"59",
		"5a",
		"5b",
		"5c",
		"5d",
		"5e",
		"5f",
		"60",
		"61",
		"62",
		"63",
		"64",
		"65",
		"66",
		"67",
		"68",
		"69",
		"6a",
		"6b",
		"6c",
		"6d",
		"6e",
		"6f",
		"70",
		"71",
		"72",
		"73",
		"74",
		"75",
		"76",
		"77",
		"78",
		"79",
		"7a",
		"7b",
		"7c",
		"7d",
		"7e",
		"7f",
		"80",
		"81",
		"82",
		"83",
		"84",
		"85",
		"86",
		"87",
		"88",
		"89",
		"8a",
		"8b",
		"8c",
		"8d",
		"8e",
		"8f",
		"90",
		"91",
		"92",
		"93",
		"94",
		"95",
		"96",
		"97",
		"98",
		"99",
		"9a",
		"9b",
		"9c",
		"9d",
		"9e",
		"9f",
		"a0",
		"a1",
		"a2",
		"a3",
		"a4",
		"a5",
		"a6",
		"a7",
		"a8",
		"a9",
		"aa",
		"ab",
		"ac",
		"ad",
		"ae",
		"af",
		"b0",
		"b1",
		"b2",
		"b3",
		"b4",
		"b5",
		"b6",
		"b7",
		"b8",
		"b9",
		"ba",
		"bb",
		"bc",
		"bd",
		"be",
		"bf",
		"c0",
		"c1",
		"c2",
		"c3",
		"c4",
		"c5",
		"c6",
		"c7",
		"c8",
		"c9",
		"ca",
		"cb",
		"cc",
		"cd",
		"ce",
		"cf",
		"d0",
		"d1",
		"d2",
		"d3",
		"d4",
		"d5",
		"d6",
		"d7",
		"d8",
		"d9",
		"da",
		"db",
		"dc",
		"dd",
		"de",
		"df",
		"e0",
		"e1",
		"e2",
		"e3",
		"e4",
		"e5",
		"e6",
		"e7",
		"e8",
		"e9",
		"ea",
		"eb",
		"ec",
		"ed",
		"ee",
		"ef",
		"f0",
		"f1",
		"f2",
		"f3",
		"f4",
		"f5",
		"f6",
		"f7",
		"f8",
		"f9",
		"fa",
		"fb",
		"fc",
		"fd",
		"fe",
		"ff"
	];
	let u = 1234567;
	const c = Math.PI / 180, d = 180 / Math.PI;
	function generateUUID() {
		const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, s = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
		return (l[255 & t] + l[t >> 8 & 255] + l[t >> 16 & 255] + l[t >> 24 & 255] + "-" + l[255 & e] + l[e >> 8 & 255] + "-" + l[e >> 16 & 15 | 64] + l[e >> 24 & 255] + "-" + l[63 & s | 128] + l[s >> 8 & 255] + "-" + l[s >> 16 & 255] + l[s >> 24 & 255] + l[255 & i] + l[i >> 8 & 255] + l[i >> 16 & 255] + l[i >> 24 & 255]).toLowerCase();
	}
	function clamp(t, e, s) {
		return Math.max(e, Math.min(s, t));
	}
	function euclideanModulo(t, e) {
		return (t % e + e) % e;
	}
	function lerp(t, e, s) {
		return (1 - s) * t + s * e;
	}
	function getNormalizationScale(t) {
		switch (t.constructor) {
			case Uint32Array: return 4294967295;
			case Uint16Array: return 65535;
			case Uint8Array:
			case Uint8ClampedArray: return 255;
			case Int32Array: return 2147483647;
			case Int16Array: return 32767;
			case Int8Array: return 127;
			default: return;
		}
	}
	const p = {
		DEG2RAD: c,
		RAD2DEG: d,
		generateUUID,
		clamp,
		euclideanModulo,
		mapLinear: function mapLinear(t, e, s, i, r) {
			return i + (t - e) * (r - i) / (s - e);
		},
		inverseLerp: function inverseLerp(t, e, s) {
			return t !== e ? (s - t) / (e - t) : 0;
		},
		lerp,
		damp: function damp(t, e, s, i) {
			return lerp(t, e, 1 - Math.exp(-s * i));
		},
		pingpong: function pingpong(t, e = 1) {
			return e - Math.abs(euclideanModulo(t, 2 * e) - e);
		},
		smoothstep: function smoothstep$1(t, e, s) {
			return t <= e ? 0 : t >= s ? 1 : (t = (t - e) / (s - e)) * t * (3 - 2 * t);
		},
		smootherstep: function smootherstep(t, e, s) {
			return t <= e ? 0 : t >= s ? 1 : (t = (t - e) / (s - e)) * t * t * (t * (6 * t - 15) + 10);
		},
		randInt: function randInt(t, e) {
			return t + Math.floor(Math.random() * (e - t + 1));
		},
		randFloat: function randFloat(t, e) {
			return t + Math.random() * (e - t);
		},
		randFloatSpread: function randFloatSpread(t) {
			return t * (.5 - Math.random());
		},
		seededRandom: function seededRandom(t) {
			void 0 !== t && (u = t);
			let e = u += 1831565813;
			return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
		},
		degToRad: function degToRad(t) {
			return t * c;
		},
		radToDeg: function radToDeg(t) {
			return t * d;
		},
		isPowerOfTwo: function isPowerOfTwo(t) {
			return t > 0 && Number.isInteger(t) && 2 ** Math.round(Math.log2(t)) === t;
		},
		ceilPowerOfTwo: function ceilPowerOfTwo(t) {
			return Math.pow(2, Math.ceil(Math.log(t) / Math.LN2));
		},
		floorPowerOfTwo: function floorPowerOfTwo(t) {
			return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
		},
		setQuaternionFromProperEuler: function setQuaternionFromProperEuler(t, e, s, i, r) {
			const n = Math.cos, a = Math.sin, h = n(s / 2), o = a(s / 2), l = n((e + i) / 2), u = a((e + i) / 2), c = n((e - i) / 2), d = a((e - i) / 2), p = n((i - e) / 2), m = a((i - e) / 2);
			switch (r) {
				case "XYX":
					t.set(h * u, o * c, o * d, h * l);
					break;
				case "YZY":
					t.set(o * d, h * u, o * c, h * l);
					break;
				case "ZXZ":
					t.set(o * c, o * d, h * u, h * l);
					break;
				case "XZX":
					t.set(h * u, o * m, o * p, h * l);
					break;
				case "YXY":
					t.set(o * p, h * u, o * m, h * l);
					break;
				case "ZYZ":
					t.set(o * m, o * p, h * u, h * l);
					break;
				default: warn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
			}
		},
		normalize: function normalize(t, e) {
			if (e.constructor === Float32Array) return t;
			const s = getNormalizationScale(e);
			if (void 0 === s) throw new Error("THREE.MathUtils: Invalid component type.");
			return Math.round(t * s);
		},
		denormalize: function denormalize(t, e) {
			if (e.constructor === Float32Array) return t;
			const s = getNormalizationScale(e);
			if (void 0 === s) throw new Error("THREE.MathUtils: Invalid component type.");
			return Math.max(t / s, -1);
		}
	};
	var m = class {
		static {
			this.prototype.isVector2 = !0;
		}
		constructor(t = 0, e = 0) {
			this.x = t, this.y = e;
		}
		get width() {
			return this.x;
		}
		set width(t) {
			this.x = t;
		}
		get height() {
			return this.y;
		}
		set height(t) {
			this.y = t;
		}
		set(t, e) {
			return this.x = t, this.y = e, this;
		}
		setScalar(t) {
			return this.x = t, this.y = t, this;
		}
		setX(t) {
			return this.x = t, this;
		}
		setY(t) {
			return this.y = t, this;
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				default: throw new Error("THREE.Vector2: index is out of range: " + t);
			}
			return this;
		}
		getComponent(t) {
			switch (t) {
				case 0: return this.x;
				case 1: return this.y;
				default: throw new Error("THREE.Vector2: index is out of range: " + t);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y);
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this;
		}
		add(t) {
			return this.x += t.x, this.y += t.y, this;
		}
		addScalar(t) {
			return this.x += t, this.y += t, this;
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this;
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this;
		}
		sub(t) {
			return this.x -= t.x, this.y -= t.y, this;
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this;
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this;
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this;
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this;
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this;
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t);
		}
		applyMatrix3(t) {
			const e = this.x, s = this.y, i = t.elements;
			return this.x = i[0] * e + i[3] * s + i[6], this.y = i[1] * e + i[4] * s + i[7], this;
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this;
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this;
		}
		clamp(t, e) {
			return this.x = clamp(this.x, t.x, e.x), this.y = clamp(this.y, t.y, e.y), this;
		}
		clampScalar(t, e) {
			return this.x = clamp(this.x, t, e), this.y = clamp(this.y, t, e), this;
		}
		clampLength(t, e) {
			const s = this.length();
			return this.divideScalar(s || 1).multiplyScalar(clamp(s, t, e));
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
		}
		roundToZero() {
			return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this;
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this;
		}
		dot(t) {
			return this.x * t.x + this.y * t.y;
		}
		cross(t) {
			return this.x * t.y - this.y * t.x;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		angle() {
			return Math.atan2(-this.y, -this.x) + Math.PI;
		}
		angleTo(t) {
			const e = Math.sqrt(this.lengthSq() * t.lengthSq());
			if (0 === e) return Math.PI / 2;
			const s = this.dot(t) / e;
			return Math.acos(clamp(s, -1, 1));
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t));
		}
		distanceToSquared(t) {
			const e = this.x - t.x, s = this.y - t.y;
			return e * e + s * s;
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t);
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this;
		}
		lerpVectors(t, e, s) {
			return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this;
		}
		equals(t) {
			return t.x === this.x && t.y === this.y;
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this;
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t;
		}
		fromBufferAttribute(t, e) {
			return this.x = t.getX(e), this.y = t.getY(e), this;
		}
		rotateAround(t, e) {
			const s = Math.cos(e), i = Math.sin(e), r = this.x - t.x, n = this.y - t.y;
			return this.x = r * s - n * i + t.x, this.y = r * i + n * s + t.y, this;
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y;
		}
	}, y = class {
		constructor(t = 0, e = 0, s = 0, i = 1) {
			this.isQuaternion = !0, this._x = t, this._y = e, this._z = s, this._w = i;
		}
		static slerpFlat(t, e, s, i, r, n, a) {
			let h = s[i + 0], o = s[i + 1], l = s[i + 2], u = s[i + 3], c = r[n + 0], d = r[n + 1], p = r[n + 2], m = r[n + 3];
			if (u !== m || h !== c || o !== d || l !== p) {
				let t = h * c + o * d + l * p + u * m;
				t < 0 && (c = -c, d = -d, p = -p, m = -m, t = -t);
				let e = 1 - a;
				if (t < .9995) {
					const s = Math.acos(t), i = Math.sin(s);
					e = Math.sin(e * s) / i, h = h * e + c * (a = Math.sin(a * s) / i), o = o * e + d * a, l = l * e + p * a, u = u * e + m * a;
				} else {
					h = h * e + c * a, o = o * e + d * a, l = l * e + p * a, u = u * e + m * a;
					const t = 1 / Math.sqrt(h * h + o * o + l * l + u * u);
					h *= t, o *= t, l *= t, u *= t;
				}
			}
			t[e] = h, t[e + 1] = o, t[e + 2] = l, t[e + 3] = u;
		}
		static multiplyQuaternionsFlat(t, e, s, i, r, n) {
			const a = s[i], h = s[i + 1], o = s[i + 2], l = s[i + 3], u = r[n], c = r[n + 1], d = r[n + 2], p = r[n + 3];
			return t[e] = a * p + l * u + h * d - o * c, t[e + 1] = h * p + l * c + o * u - a * d, t[e + 2] = o * p + l * d + a * c - h * u, t[e + 3] = l * p - a * u - h * c - o * d, t;
		}
		get x() {
			return this._x;
		}
		set x(t) {
			this._x = t, this._onChangeCallback();
		}
		get y() {
			return this._y;
		}
		set y(t) {
			this._y = t, this._onChangeCallback();
		}
		get z() {
			return this._z;
		}
		set z(t) {
			this._z = t, this._onChangeCallback();
		}
		get w() {
			return this._w;
		}
		set w(t) {
			this._w = t, this._onChangeCallback();
		}
		set(t, e, s, i) {
			return this._x = t, this._y = e, this._z = s, this._w = i, this._onChangeCallback(), this;
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._w);
		}
		copy(t) {
			return this._x = t.x, this._y = t.y, this._z = t.z, this._w = t.w, this._onChangeCallback(), this;
		}
		setFromEuler(t, e = !0) {
			const s = t._x, i = t._y, r = t._z, n = t._order, a = Math.cos, h = Math.sin, o = a(s / 2), l = a(i / 2), u = a(r / 2), c = h(s / 2), d = h(i / 2), p = h(r / 2);
			switch (n) {
				case "XYZ":
					this._x = c * l * u + o * d * p, this._y = o * d * u - c * l * p, this._z = o * l * p + c * d * u, this._w = o * l * u - c * d * p;
					break;
				case "YXZ":
					this._x = c * l * u + o * d * p, this._y = o * d * u - c * l * p, this._z = o * l * p - c * d * u, this._w = o * l * u + c * d * p;
					break;
				case "ZXY":
					this._x = c * l * u - o * d * p, this._y = o * d * u + c * l * p, this._z = o * l * p + c * d * u, this._w = o * l * u - c * d * p;
					break;
				case "ZYX":
					this._x = c * l * u - o * d * p, this._y = o * d * u + c * l * p, this._z = o * l * p - c * d * u, this._w = o * l * u + c * d * p;
					break;
				case "YZX":
					this._x = c * l * u + o * d * p, this._y = o * d * u + c * l * p, this._z = o * l * p - c * d * u, this._w = o * l * u - c * d * p;
					break;
				case "XZY":
					this._x = c * l * u - o * d * p, this._y = o * d * u - c * l * p, this._z = o * l * p + c * d * u, this._w = o * l * u + c * d * p;
					break;
				default: warn("Quaternion: .setFromEuler() encountered an unknown order: " + n);
			}
			return !0 === e && this._onChangeCallback(), this;
		}
		setFromAxisAngle(t, e) {
			const s = e / 2, i = Math.sin(s);
			return this._x = t.x * i, this._y = t.y * i, this._z = t.z * i, this._w = Math.cos(s), this._onChangeCallback(), this;
		}
		setFromRotationMatrix(t) {
			const e = t.elements, s = e[0], i = e[4], r = e[8], n = e[1], a = e[5], h = e[9], o = e[2], l = e[6], u = e[10], c = s + a + u;
			if (c > 0) {
				const t = .5 / Math.sqrt(c + 1);
				this._w = .25 / t, this._x = (l - h) * t, this._y = (r - o) * t, this._z = (n - i) * t;
			} else if (s > a && s > u) {
				const t = 2 * Math.sqrt(1 + s - a - u);
				this._w = (l - h) / t, this._x = .25 * t, this._y = (i + n) / t, this._z = (r + o) / t;
			} else if (a > u) {
				const t = 2 * Math.sqrt(1 + a - s - u);
				this._w = (r - o) / t, this._x = (i + n) / t, this._y = .25 * t, this._z = (h + l) / t;
			} else {
				const t = 2 * Math.sqrt(1 + u - s - a);
				this._w = (n - i) / t, this._x = (r + o) / t, this._y = (h + l) / t, this._z = .25 * t;
			}
			return this._onChangeCallback(), this;
		}
		setFromUnitVectors(t, e) {
			let s = t.dot(e) + 1;
			return s < 1e-8 ? (s = 0, Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y, this._y = t.x, this._z = 0, this._w = s) : (this._x = 0, this._y = -t.z, this._z = t.y, this._w = s)) : (this._x = t.y * e.z - t.z * e.y, this._y = t.z * e.x - t.x * e.z, this._z = t.x * e.y - t.y * e.x, this._w = s), this.normalize();
		}
		angleTo(t) {
			return 2 * Math.acos(Math.abs(clamp(this.dot(t), -1, 1)));
		}
		rotateTowards(t, e) {
			const s = this.angleTo(t);
			if (0 === s) return this;
			const i = Math.min(1, e / s);
			return this.slerp(t, i), this;
		}
		identity() {
			return this.set(0, 0, 0, 1);
		}
		invert() {
			return this.conjugate();
		}
		conjugate() {
			return this._x *= -1, this._y *= -1, this._z *= -1, this._onChangeCallback(), this;
		}
		dot(t) {
			return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w;
		}
		lengthSq() {
			return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
		}
		length() {
			return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
		}
		normalize() {
			let t = this.length();
			return 0 === t ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1) : (t = 1 / t, this._x = this._x * t, this._y = this._y * t, this._z = this._z * t, this._w = this._w * t), this._onChangeCallback(), this;
		}
		multiply(t) {
			return this.multiplyQuaternions(this, t);
		}
		premultiply(t) {
			return this.multiplyQuaternions(t, this);
		}
		multiplyQuaternions(t, e) {
			const s = t._x, i = t._y, r = t._z, n = t._w, a = e._x, h = e._y, o = e._z, l = e._w;
			return this._x = s * l + n * a + i * o - r * h, this._y = i * l + n * h + r * a - s * o, this._z = r * l + n * o + s * h - i * a, this._w = n * l - s * a - i * h - r * o, this._onChangeCallback(), this;
		}
		slerp(t, e) {
			let s = t._x, i = t._y, r = t._z, n = t._w, a = this.dot(t);
			a < 0 && (s = -s, i = -i, r = -r, n = -n, a = -a);
			let h = 1 - e;
			if (a < .9995) {
				const t = Math.acos(a), o = Math.sin(t);
				h = Math.sin(h * t) / o, e = Math.sin(e * t) / o, this._x = this._x * h + s * e, this._y = this._y * h + i * e, this._z = this._z * h + r * e, this._w = this._w * h + n * e, this._onChangeCallback();
			} else this._x = this._x * h + s * e, this._y = this._y * h + i * e, this._z = this._z * h + r * e, this._w = this._w * h + n * e, this.normalize();
			return this;
		}
		slerpQuaternions(t, e, s) {
			return this.copy(t).slerp(e, s);
		}
		random() {
			const t = 2 * Math.PI * Math.random(), e = 2 * Math.PI * Math.random(), s = Math.random(), i = Math.sqrt(1 - s), r = Math.sqrt(s);
			return this.set(i * Math.sin(t), i * Math.cos(t), r * Math.sin(e), r * Math.cos(e));
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w;
		}
		fromArray(t, e = 0) {
			return this._x = t[e], this._y = t[e + 1], this._z = t[e + 2], this._w = t[e + 3], this._onChangeCallback(), this;
		}
		toArray(t = [], e = 0) {
			return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._w, t;
		}
		fromBufferAttribute(t, e) {
			return this._x = t.getX(e), this._y = t.getY(e), this._z = t.getZ(e), this._w = t.getW(e), this._onChangeCallback(), this;
		}
		toJSON() {
			return this.toArray();
		}
		_onChange(t) {
			return this._onChangeCallback = t, this;
		}
		_onChangeCallback() {}
		*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._w;
		}
	}, g = class {
		static {
			this.prototype.isVector3 = !0;
		}
		constructor(t = 0, e = 0, s = 0) {
			this.x = t, this.y = e, this.z = s;
		}
		set(t, e, s) {
			return void 0 === s && (s = this.z), this.x = t, this.y = e, this.z = s, this;
		}
		setScalar(t) {
			return this.x = t, this.y = t, this.z = t, this;
		}
		setX(t) {
			return this.x = t, this;
		}
		setY(t) {
			return this.y = t, this;
		}
		setZ(t) {
			return this.z = t, this;
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				default: throw new Error("THREE.Vector3: index is out of range: " + t);
			}
			return this;
		}
		getComponent(t) {
			switch (t) {
				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				default: throw new Error("THREE.Vector3: index is out of range: " + t);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z);
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this;
		}
		add(t) {
			return this.x += t.x, this.y += t.y, this.z += t.z, this;
		}
		addScalar(t) {
			return this.x += t, this.y += t, this.z += t, this;
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this;
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this;
		}
		sub(t) {
			return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this.z -= t, this;
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this;
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this.z *= t.z, this;
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this.z *= t, this;
		}
		multiplyVectors(t, e) {
			return this.x = t.x * e.x, this.y = t.y * e.y, this.z = t.z * e.z, this;
		}
		applyEuler(t) {
			return this.applyQuaternion(f.setFromEuler(t));
		}
		applyAxisAngle(t, e) {
			return this.applyQuaternion(f.setFromAxisAngle(t, e));
		}
		applyMatrix3(t) {
			const e = this.x, s = this.y, i = this.z, r = t.elements;
			return this.x = r[0] * e + r[3] * s + r[6] * i, this.y = r[1] * e + r[4] * s + r[7] * i, this.z = r[2] * e + r[5] * s + r[8] * i, this;
		}
		applyNormalMatrix(t) {
			return this.applyMatrix3(t).normalize();
		}
		applyMatrix4(t) {
			const e = this.x, s = this.y, i = this.z, r = t.elements, n = 1 / (r[3] * e + r[7] * s + r[11] * i + r[15]);
			return this.x = (r[0] * e + r[4] * s + r[8] * i + r[12]) * n, this.y = (r[1] * e + r[5] * s + r[9] * i + r[13]) * n, this.z = (r[2] * e + r[6] * s + r[10] * i + r[14]) * n, this;
		}
		applyQuaternion(t) {
			const e = this.x, s = this.y, i = this.z, r = t.x, n = t.y, a = t.z, h = t.w, o = 2 * (n * i - a * s), l = 2 * (a * e - r * i), u = 2 * (r * s - n * e);
			return this.x = e + h * o + n * u - a * l, this.y = s + h * l + a * o - r * u, this.z = i + h * u + r * l - n * o, this;
		}
		project(t) {
			return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix);
		}
		unproject(t) {
			return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld);
		}
		transformDirection(t) {
			const e = this.x, s = this.y, i = this.z, r = t.elements;
			return this.x = r[0] * e + r[4] * s + r[8] * i, this.y = r[1] * e + r[5] * s + r[9] * i, this.z = r[2] * e + r[6] * s + r[10] * i, this.normalize();
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this;
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t);
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this;
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this;
		}
		clamp(t, e) {
			return this.x = clamp(this.x, t.x, e.x), this.y = clamp(this.y, t.y, e.y), this.z = clamp(this.z, t.z, e.z), this;
		}
		clampScalar(t, e) {
			return this.x = clamp(this.x, t, e), this.y = clamp(this.y, t, e), this.z = clamp(this.z, t, e), this;
		}
		clampLength(t, e) {
			const s = this.length();
			return this.divideScalar(s || 1).multiplyScalar(clamp(s, t, e));
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this;
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this;
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this;
		}
		roundToZero() {
			return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this;
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t);
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this;
		}
		lerpVectors(t, e, s) {
			return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this.z = t.z + (e.z - t.z) * s, this;
		}
		cross(t) {
			return this.crossVectors(this, t);
		}
		crossVectors(t, e) {
			const s = t.x, i = t.y, r = t.z, n = e.x, a = e.y, h = e.z;
			return this.x = i * h - r * a, this.y = r * n - s * h, this.z = s * a - i * n, this;
		}
		projectOnVector(t) {
			const e = t.lengthSq();
			if (0 === e) return this.set(0, 0, 0);
			const s = t.dot(this) / e;
			return this.copy(t).multiplyScalar(s);
		}
		projectOnPlane(t) {
			return x.copy(this).projectOnVector(t), this.sub(x);
		}
		reflect(t) {
			return this.sub(x.copy(t).multiplyScalar(2 * this.dot(t)));
		}
		angleTo(t) {
			const e = Math.sqrt(this.lengthSq() * t.lengthSq());
			if (0 === e) return Math.PI / 2;
			const s = this.dot(t) / e;
			return Math.acos(clamp(s, -1, 1));
		}
		distanceTo(t) {
			return Math.sqrt(this.distanceToSquared(t));
		}
		distanceToSquared(t) {
			const e = this.x - t.x, s = this.y - t.y, i = this.z - t.z;
			return e * e + s * s + i * i;
		}
		manhattanDistanceTo(t) {
			return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z);
		}
		setFromSpherical(t) {
			return this.setFromSphericalCoords(t.radius, t.phi, t.theta);
		}
		setFromSphericalCoords(t, e, s) {
			const i = Math.sin(e) * t;
			return this.x = i * Math.sin(s), this.y = Math.cos(e) * t, this.z = i * Math.cos(s), this;
		}
		setFromCylindrical(t) {
			return this.setFromCylindricalCoords(t.radius, t.theta, t.y);
		}
		setFromCylindricalCoords(t, e, s) {
			return this.x = t * Math.sin(e), this.y = s, this.z = t * Math.cos(e), this;
		}
		setFromMatrixPosition(t) {
			const e = t.elements;
			return this.x = e[12], this.y = e[13], this.z = e[14], this;
		}
		setFromMatrixScale(t) {
			const e = this.setFromMatrixColumn(t, 0).length(), s = this.setFromMatrixColumn(t, 1).length(), i = this.setFromMatrixColumn(t, 2).length();
			return this.x = e, this.y = s, this.z = i, this;
		}
		setFromMatrixColumn(t, e) {
			return this.fromArray(t.elements, 4 * e);
		}
		setFromMatrix3Column(t, e) {
			return this.fromArray(t.elements, 3 * e);
		}
		setFromEuler(t) {
			return this.x = t._x, this.y = t._y, this.z = t._z, this;
		}
		setFromColor(t) {
			return this.x = t.r, this.y = t.g, this.z = t.b, this;
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z;
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this;
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t;
		}
		fromBufferAttribute(t, e) {
			return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this;
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this;
		}
		randomDirection() {
			const t = Math.random() * Math.PI * 2, e = 2 * Math.random() - 1, s = Math.sqrt(1 - e * e);
			return this.x = s * Math.cos(t), this.y = e, this.z = s * Math.sin(t), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z;
		}
	};
	const x = new g(), f = new y();
	var M = class {
		static {
			this.prototype.isMatrix3 = !0;
		}
		constructor(t, e, s, i, r, n, a, h, o) {
			this.elements = [
				1,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				1
			], void 0 !== t && this.set(t, e, s, i, r, n, a, h, o);
		}
		set(t, e, s, i, r, n, a, h, o) {
			const l = this.elements;
			return l[0] = t, l[1] = i, l[2] = a, l[3] = e, l[4] = r, l[5] = h, l[6] = s, l[7] = n, l[8] = o, this;
		}
		identity() {
			return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
		}
		copy(t) {
			const e = this.elements, s = t.elements;
			return e[0] = s[0], e[1] = s[1], e[2] = s[2], e[3] = s[3], e[4] = s[4], e[5] = s[5], e[6] = s[6], e[7] = s[7], e[8] = s[8], this;
		}
		extractBasis(t, e, s) {
			return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), s.setFromMatrix3Column(this, 2), this;
		}
		setFromMatrix4(t) {
			const e = t.elements;
			return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
		}
		multiply(t) {
			return this.multiplyMatrices(this, t);
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this);
		}
		multiplyMatrices(t, e) {
			const s = t.elements, i = e.elements, r = this.elements, n = s[0], a = s[3], h = s[6], o = s[1], l = s[4], u = s[7], c = s[2], d = s[5], p = s[8], m = i[0], y = i[3], g = i[6], x = i[1], f = i[4], M = i[7], _ = i[2], b = i[5], w = i[8];
			return r[0] = n * m + a * x + h * _, r[3] = n * y + a * f + h * b, r[6] = n * g + a * M + h * w, r[1] = o * m + l * x + u * _, r[4] = o * y + l * f + u * b, r[7] = o * g + l * M + u * w, r[2] = c * m + d * x + p * _, r[5] = c * y + d * f + p * b, r[8] = c * g + d * M + p * w, this;
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
		}
		determinant() {
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], h = t[6], o = t[7], l = t[8];
			return e * n * l - e * a * o - s * r * l + s * a * h + i * r * o - i * n * h;
		}
		invert() {
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], h = t[6], o = t[7], l = t[8], u = l * n - a * o, c = a * h - l * r, d = o * r - n * h, p = e * u + s * c + i * d;
			if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const m = 1 / p;
			return t[0] = u * m, t[1] = (i * o - l * s) * m, t[2] = (a * s - i * n) * m, t[3] = c * m, t[4] = (l * e - i * h) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (s * h - o * e) * m, t[8] = (n * e - s * r) * m, this;
		}
		transpose() {
			let t;
			const e = this.elements;
			return t = e[1], e[1] = e[3], e[3] = t, t = e[2], e[2] = e[6], e[6] = t, t = e[5], e[5] = e[7], e[7] = t, this;
		}
		getNormalMatrix(t) {
			return this.setFromMatrix4(t).invert().transpose();
		}
		transposeIntoArray(t) {
			const e = this.elements;
			return t[0] = e[0], t[1] = e[3], t[2] = e[6], t[3] = e[1], t[4] = e[4], t[5] = e[7], t[6] = e[2], t[7] = e[5], t[8] = e[8], this;
		}
		setUvTransform(t, e, s, i, r, n, a) {
			const h = Math.cos(r), o = Math.sin(r);
			return this.set(s * h, s * o, -s * (h * n + o * a) + n + t, -i * o, i * h, -i * (-o * n + h * a) + a + e, 0, 0, 1), this;
		}
		scale(t, e) {
			return warnOnce("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(_.makeScale(t, e)), this;
		}
		rotate(t) {
			return warnOnce("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(_.makeRotation(-t)), this;
		}
		translate(t, e) {
			return warnOnce("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(_.makeTranslation(t, e)), this;
		}
		makeTranslation(t, e) {
			return t.isVector2 ? this.set(1, 0, t.x, 0, 1, t.y, 0, 0, 1) : this.set(1, 0, t, 0, 1, e, 0, 0, 1), this;
		}
		makeRotation(t) {
			const e = Math.cos(t), s = Math.sin(t);
			return this.set(e, -s, 0, s, e, 0, 0, 0, 1), this;
		}
		makeScale(t, e) {
			return this.set(t, 0, 0, 0, e, 0, 0, 0, 1), this;
		}
		equals(t) {
			const e = this.elements, s = t.elements;
			for (let i = 0; i < 9; i++) if (e[i] !== s[i]) return !1;
			return !0;
		}
		fromArray(t, e = 0) {
			for (let s = 0; s < 9; s++) this.elements[s] = t[s + e];
			return this;
		}
		toArray(t = [], e = 0) {
			const s = this.elements;
			return t[e] = s[0], t[e + 1] = s[1], t[e + 2] = s[2], t[e + 3] = s[3], t[e + 4] = s[4], t[e + 5] = s[5], t[e + 6] = s[6], t[e + 7] = s[7], t[e + 8] = s[8], t;
		}
		clone() {
			return new this.constructor().fromArray(this.elements);
		}
	};
	const _ = new M(), b = new M().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), w = new M().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
	function createColorManagement() {
		const t = {
			enabled: !0,
			workingColorSpace: n,
			spaces: {},
			convert: function(t, e, s) {
				return !1 !== this.enabled && e !== s && e && s ? ("srgb" === this.spaces[e].transfer && (t.r = SRGBToLinear(t.r), t.g = SRGBToLinear(t.g), t.b = SRGBToLinear(t.b)), this.spaces[e].primaries !== this.spaces[s].primaries && (t.applyMatrix3(this.spaces[e].toXYZ), t.applyMatrix3(this.spaces[s].fromXYZ)), "srgb" === this.spaces[s].transfer && (t.r = LinearToSRGB(t.r), t.g = LinearToSRGB(t.g), t.b = LinearToSRGB(t.b)), t) : t;
			},
			workingToColorSpace: function(t, e) {
				return this.convert(t, this.workingColorSpace, e);
			},
			colorSpaceToWorking: function(t, e) {
				return this.convert(t, e, this.workingColorSpace);
			},
			getPrimaries: function(t) {
				return this.spaces[t].primaries;
			},
			getTransfer: function(t) {
				return "" === t ? a : this.spaces[t].transfer;
			},
			getToneMappingMode: function(t) {
				return this.spaces[t].outputColorSpaceConfig.toneMappingMode || "standard";
			},
			getLuminanceCoefficients: function(t, e = this.workingColorSpace) {
				return t.fromArray(this.spaces[e].luminanceCoefficients);
			},
			define: function(t) {
				Object.assign(this.spaces, t);
			},
			_getMatrix: function(t, e, s) {
				return t.copy(this.spaces[s].fromXYZ).multiply(this.spaces[e].toXYZ);
			},
			_getDrawingBufferColorSpace: function(t) {
				return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace;
			},
			_getUnpackColorSpace: function(t = this.workingColorSpace) {
				return this.spaces[t].workingColorSpaceConfig.unpackColorSpace;
			}
		}, e = [
			.64,
			.33,
			.3,
			.6,
			.15,
			.06
		], s = [
			.2126,
			.7152,
			.0722
		], i = [.3127, .329];
		return t.define({
			[n]: {
				primaries: e,
				whitePoint: i,
				transfer: a,
				toXYZ: b,
				fromXYZ: w,
				luminanceCoefficients: s,
				workingColorSpaceConfig: { unpackColorSpace: r },
				outputColorSpaceConfig: { drawingBufferColorSpace: r }
			},
			[r]: {
				primaries: e,
				whitePoint: i,
				transfer: "srgb",
				toXYZ: b,
				fromXYZ: w,
				luminanceCoefficients: s,
				outputColorSpaceConfig: { drawingBufferColorSpace: r }
			}
		}), t;
	}
	const z = createColorManagement();
	function SRGBToLinear(t) {
		return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
	}
	function LinearToSRGB(t) {
		return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
	}
	let v;
	var S = class {
		static getDataURL(t, e = "image/png") {
			if (/^data:/i.test(t.src)) return t.src;
			if ("undefined" == typeof HTMLCanvasElement) return t.src;
			let s;
			if (t instanceof HTMLCanvasElement) s = t;
			else {
				void 0 === v && (v = createElementNS("canvas")), v.width = t.width, v.height = t.height;
				const e = v.getContext("2d");
				t instanceof ImageData ? e.putImageData(t, 0, 0) : e.drawImage(t, 0, 0, t.width, t.height), s = v;
			}
			return s.toDataURL(e);
		}
		static sRGBToLinear(t) {
			if ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap) {
				const e = createElementNS("canvas");
				e.width = t.width, e.height = t.height;
				const s = e.getContext("2d");
				s.drawImage(t, 0, 0, t.width, t.height);
				const i = s.getImageData(0, 0, t.width, t.height), r = i.data;
				for (let t = 0; t < r.length; t++) r[t] = 255 * SRGBToLinear(r[t] / 255);
				return s.putImageData(i, 0, 0), e;
			}
			if (t.data) {
				const e = t.data.slice(0);
				for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? e[t] = Math.floor(255 * SRGBToLinear(e[t] / 255)) : e[t] = SRGBToLinear(e[t]);
				return {
					data: e,
					width: t.width,
					height: t.height
				};
			}
			return warn("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."), t;
		}
	};
	let T = 0;
	var k = class {
		constructor(t = null) {
			this.isTextureSource = !0, Object.defineProperty(this, "id", { value: T++ }), this.uuid = generateUUID(), this.data = t, this.dataReady = !0, this.version = 0;
		}
		getSize(t) {
			const e = this.data;
			return "undefined" != typeof HTMLVideoElement && e instanceof HTMLVideoElement ? t.set(e.videoWidth, e.videoHeight, 0) : "undefined" != typeof VideoFrame && e instanceof VideoFrame ? t.set(e.displayWidth, e.displayHeight, 0) : null !== e ? t.set(e.width || 0, e.height || 0, e.depth || 0) : t.set(0, 0, 0), t;
		}
		set needsUpdate(t) {
			!0 === t && this.version++;
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
			const s = {
				uuid: this.uuid,
				url: ""
			}, i = this.data;
			if (null !== i) {
				let t;
				if (Array.isArray(i)) {
					t = [];
					for (let e = 0, s = i.length; e < s; e++) i[e].isDataTexture ? t.push(serializeImage(i[e].image)) : t.push(serializeImage(i[e]));
				} else t = serializeImage(i);
				s.url = t;
			}
			return e || (t.images[this.uuid] = s), s;
		}
	};
	function serializeImage(t) {
		return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? S.getDataURL(t) : t.data ? {
			data: Array.from(t.data),
			width: t.width,
			height: t.height,
			type: t.data.constructor.name
		} : (warn("Texture: Unable to serialize Texture."), {});
	}
	let A = 0;
	const C = new g();
	var F = class Texture extends o {
		constructor(t = Texture.DEFAULT_IMAGE, e = Texture.DEFAULT_MAPPING, s = 1001, i = 1001, r = 1006, n = 1008, a = 1023, h = 1009, o = Texture.DEFAULT_ANISOTROPY, l = "") {
			super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: A++ }), this.uuid = generateUUID(), this.name = "", this.source = new k(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = s, this.wrapT = i, this.magFilter = r, this.minFilter = n, this.anisotropy = o, this.format = a, this.internalFormat = null, this.type = h, this.offset = new m(0, 0), this.repeat = new m(1, 1), this.center = new m(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new M(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = l, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
		}
		get width() {
			return this.source.getSize(C).x;
		}
		get height() {
			return this.source.getSize(C).y;
		}
		get depth() {
			return this.source.getSize(C).z;
		}
		get image() {
			return this.source.data;
		}
		set image(t) {
			this.source.data = t;
		}
		updateMatrix() {
			this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
		}
		addUpdateRange(t, e) {
			this.updateRanges.push({
				start: t,
				count: e
			});
		}
		clearUpdateRanges() {
			this.updateRanges.length = 0;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return this.name = t.name, this.source = t.source, this.mipmaps = t.mipmaps.slice(0), this.mapping = t.mapping, this.channel = t.channel, this.wrapS = t.wrapS, this.wrapT = t.wrapT, this.magFilter = t.magFilter, this.minFilter = t.minFilter, this.anisotropy = t.anisotropy, this.format = t.format, this.internalFormat = t.internalFormat, this.type = t.type, this.normalized = t.normalized, this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), this.rotation = t.rotation, this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrix.copy(t.matrix), this.generateMipmaps = t.generateMipmaps, this.mipmapsAutoUpdate = t.mipmapsAutoUpdate, this.premultiplyAlpha = t.premultiplyAlpha, this.flipY = t.flipY, this.unpackAlignment = t.unpackAlignment, this.colorSpace = t.colorSpace, this.renderTarget = t.renderTarget, this.isRenderTargetTexture = t.isRenderTargetTexture, this.isPMREMTexture = t.isPMREMTexture, this.isArrayTexture = t.isArrayTexture, this.userData = JSON.parse(JSON.stringify(t.userData)), this.needsUpdate = !0, this;
		}
		setValues(t) {
			for (const e in t) {
				const s = t[e];
				if (void 0 === s) {
					warn(`Texture.setValues(): parameter '${e}' has value of undefined.`);
					continue;
				}
				const i = this[e];
				void 0 !== i ? i && s && i.isVector2 && s.isVector2 || i && s && i.isVector3 && s.isVector3 || i && s && i.isMatrix3 && s.isMatrix3 ? i.copy(s) : this[e] = s : warn(`Texture.setValues(): property '${e}' does not exist.`);
			}
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t;
			if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
			const s = {
				metadata: {
					version: 4.7,
					type: "Texture",
					generator: "Texture.toJSON"
				},
				uuid: this.uuid,
				name: this.name,
				image: this.source.toJSON(t).uuid,
				mapping: this.mapping,
				channel: this.channel,
				repeat: [this.repeat.x, this.repeat.y],
				offset: [this.offset.x, this.offset.y],
				center: [this.center.x, this.center.y],
				rotation: this.rotation,
				wrap: [this.wrapS, this.wrapT],
				format: this.format,
				internalFormat: this.internalFormat,
				type: this.type,
				normalized: this.normalized,
				colorSpace: this.colorSpace,
				minFilter: this.minFilter,
				magFilter: this.magFilter,
				anisotropy: this.anisotropy,
				flipY: this.flipY,
				generateMipmaps: this.generateMipmaps,
				mipmapsAutoUpdate: this.mipmapsAutoUpdate,
				premultiplyAlpha: this.premultiplyAlpha,
				unpackAlignment: this.unpackAlignment
			};
			return Object.keys(this.userData).length > 0 && (s.userData = this.userData), e || (t.textures[this.uuid] = s), s;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		transformUv(e) {
			if (300 !== this.mapping) return e;
			if (e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1) switch (this.wrapS) {
				case 1e3:
					e.x = e.x - Math.floor(e.x);
					break;
				case t:
					e.x = e.x < 0 ? 0 : 1;
					break;
				case 1002: 1 === Math.abs(Math.floor(e.x) % 2) ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
			}
			if (e.y < 0 || e.y > 1) switch (this.wrapT) {
				case 1e3:
					e.y = e.y - Math.floor(e.y);
					break;
				case t:
					e.y = e.y < 0 ? 0 : 1;
					break;
				case 1002: 1 === Math.abs(Math.floor(e.y) % 2) ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
			}
			return this.flipY && (e.y = 1 - e.y), e;
		}
		set needsUpdate(t) {
			!0 === t && (this.version++, this.source.needsUpdate = !0);
		}
		set needsPMREMUpdate(t) {
			!0 === t && this.pmremVersion++;
		}
	};
	F.DEFAULT_IMAGE = null, F.DEFAULT_MAPPING = 300, F.DEFAULT_ANISOTROPY = 1;
	(class {
		static {
			this.prototype.isVector4 = !0;
		}
		constructor(t = 0, e = 0, s = 0, i = 1) {
			this.x = t, this.y = e, this.z = s, this.w = i;
		}
		get width() {
			return this.z;
		}
		set width(t) {
			this.z = t;
		}
		get height() {
			return this.w;
		}
		set height(t) {
			this.w = t;
		}
		set(t, e, s, i) {
			return this.x = t, this.y = e, this.z = s, this.w = i, this;
		}
		setScalar(t) {
			return this.x = t, this.y = t, this.z = t, this.w = t, this;
		}
		setX(t) {
			return this.x = t, this;
		}
		setY(t) {
			return this.y = t, this;
		}
		setZ(t) {
			return this.z = t, this;
		}
		setW(t) {
			return this.w = t, this;
		}
		setComponent(t, e) {
			switch (t) {
				case 0:
					this.x = e;
					break;
				case 1:
					this.y = e;
					break;
				case 2:
					this.z = e;
					break;
				case 3:
					this.w = e;
					break;
				default: throw new Error("THREE.Vector4: index is out of range: " + t);
			}
			return this;
		}
		getComponent(t) {
			switch (t) {
				case 0: return this.x;
				case 1: return this.y;
				case 2: return this.z;
				case 3: return this.w;
				default: throw new Error("THREE.Vector4: index is out of range: " + t);
			}
		}
		clone() {
			return new this.constructor(this.x, this.y, this.z, this.w);
		}
		copy(t) {
			return this.x = t.x, this.y = t.y, this.z = t.z, this.w = void 0 !== t.w ? t.w : 1, this;
		}
		add(t) {
			return this.x += t.x, this.y += t.y, this.z += t.z, this.w += t.w, this;
		}
		addScalar(t) {
			return this.x += t, this.y += t, this.z += t, this.w += t, this;
		}
		addVectors(t, e) {
			return this.x = t.x + e.x, this.y = t.y + e.y, this.z = t.z + e.z, this.w = t.w + e.w, this;
		}
		addScaledVector(t, e) {
			return this.x += t.x * e, this.y += t.y * e, this.z += t.z * e, this.w += t.w * e, this;
		}
		sub(t) {
			return this.x -= t.x, this.y -= t.y, this.z -= t.z, this.w -= t.w, this;
		}
		subScalar(t) {
			return this.x -= t, this.y -= t, this.z -= t, this.w -= t, this;
		}
		subVectors(t, e) {
			return this.x = t.x - e.x, this.y = t.y - e.y, this.z = t.z - e.z, this.w = t.w - e.w, this;
		}
		multiply(t) {
			return this.x *= t.x, this.y *= t.y, this.z *= t.z, this.w *= t.w, this;
		}
		multiplyScalar(t) {
			return this.x *= t, this.y *= t, this.z *= t, this.w *= t, this;
		}
		applyMatrix4(t) {
			const e = this.x, s = this.y, i = this.z, r = this.w, n = t.elements;
			return this.x = n[0] * e + n[4] * s + n[8] * i + n[12] * r, this.y = n[1] * e + n[5] * s + n[9] * i + n[13] * r, this.z = n[2] * e + n[6] * s + n[10] * i + n[14] * r, this.w = n[3] * e + n[7] * s + n[11] * i + n[15] * r, this;
		}
		divide(t) {
			return this.x /= t.x, this.y /= t.y, this.z /= t.z, this.w /= t.w, this;
		}
		divideScalar(t) {
			return this.multiplyScalar(1 / t);
		}
		setAxisAngleFromQuaternion(t) {
			this.w = 2 * Math.acos(t.w);
			const e = Math.sqrt(1 - t.w * t.w);
			return e < 1e-4 ? (this.x = 1, this.y = 0, this.z = 0) : (this.x = t.x / e, this.y = t.y / e, this.z = t.z / e), this;
		}
		setAxisAngleFromRotationMatrix(t) {
			let e, s, i, r;
			const n = .01, a = .1, h = t.elements, o = h[0], l = h[4], u = h[8], c = h[1], d = h[5], p = h[9], m = h[2], y = h[6], g = h[10];
			if (Math.abs(l - c) < n && Math.abs(u - m) < n && Math.abs(p - y) < n) {
				if (Math.abs(l + c) < a && Math.abs(u + m) < a && Math.abs(p + y) < a && Math.abs(o + d + g - 3) < a) return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				const t = (o + 1) / 2, h = (d + 1) / 2, x = (g + 1) / 2, f = (l + c) / 4, M = (u + m) / 4, _ = (p + y) / 4;
				return t > h && t > x ? t < n ? (s = 0, i = .707106781, r = .707106781) : (s = Math.sqrt(t), i = f / s, r = M / s) : h > x ? h < n ? (s = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(h), s = f / i, r = _ / i) : x < n ? (s = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(x), s = M / r, i = _ / r), this.set(s, i, r, e), this;
			}
			let x = Math.sqrt((y - p) * (y - p) + (u - m) * (u - m) + (c - l) * (c - l));
			return Math.abs(x) < .001 && (x = 1), this.x = (y - p) / x, this.y = (u - m) / x, this.z = (c - l) / x, this.w = Math.acos((o + d + g - 1) / 2), this;
		}
		setFromMatrixPosition(t) {
			const e = t.elements;
			return this.x = e[12], this.y = e[13], this.z = e[14], this.w = e[15], this;
		}
		min(t) {
			return this.x = Math.min(this.x, t.x), this.y = Math.min(this.y, t.y), this.z = Math.min(this.z, t.z), this.w = Math.min(this.w, t.w), this;
		}
		max(t) {
			return this.x = Math.max(this.x, t.x), this.y = Math.max(this.y, t.y), this.z = Math.max(this.z, t.z), this.w = Math.max(this.w, t.w), this;
		}
		clamp(t, e) {
			return this.x = clamp(this.x, t.x, e.x), this.y = clamp(this.y, t.y, e.y), this.z = clamp(this.z, t.z, e.z), this.w = clamp(this.w, t.w, e.w), this;
		}
		clampScalar(t, e) {
			return this.x = clamp(this.x, t, e), this.y = clamp(this.y, t, e), this.z = clamp(this.z, t, e), this.w = clamp(this.w, t, e), this;
		}
		clampLength(t, e) {
			const s = this.length();
			return this.divideScalar(s || 1).multiplyScalar(clamp(s, t, e));
		}
		floor() {
			return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this.z = Math.floor(this.z), this.w = Math.floor(this.w), this;
		}
		ceil() {
			return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this.z = Math.ceil(this.z), this.w = Math.ceil(this.w), this;
		}
		round() {
			return this.x = Math.round(this.x), this.y = Math.round(this.y), this.z = Math.round(this.z), this.w = Math.round(this.w), this;
		}
		roundToZero() {
			return this.x = Math.trunc(this.x), this.y = Math.trunc(this.y), this.z = Math.trunc(this.z), this.w = Math.trunc(this.w), this;
		}
		negate() {
			return this.x = -this.x, this.y = -this.y, this.z = -this.z, this.w = -this.w, this;
		}
		dot(t) {
			return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w;
		}
		lengthSq() {
			return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
		}
		length() {
			return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
		}
		manhattanLength() {
			return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
		}
		normalize() {
			return this.divideScalar(this.length() || 1);
		}
		setLength(t) {
			return this.normalize().multiplyScalar(t);
		}
		lerp(t, e) {
			return this.x += (t.x - this.x) * e, this.y += (t.y - this.y) * e, this.z += (t.z - this.z) * e, this.w += (t.w - this.w) * e, this;
		}
		lerpVectors(t, e, s) {
			return this.x = t.x + (e.x - t.x) * s, this.y = t.y + (e.y - t.y) * s, this.z = t.z + (e.z - t.z) * s, this.w = t.w + (e.w - t.w) * s, this;
		}
		equals(t) {
			return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w;
		}
		fromArray(t, e = 0) {
			return this.x = t[e], this.y = t[e + 1], this.z = t[e + 2], this.w = t[e + 3], this;
		}
		toArray(t = [], e = 0) {
			return t[e] = this.x, t[e + 1] = this.y, t[e + 2] = this.z, t[e + 3] = this.w, t;
		}
		fromBufferAttribute(t, e) {
			return this.x = t.getX(e), this.y = t.getY(e), this.z = t.getZ(e), this.w = t.getW(e), this;
		}
		random() {
			return this.x = Math.random(), this.y = Math.random(), this.z = Math.random(), this.w = Math.random(), this;
		}
		*[Symbol.iterator]() {
			yield this.x, yield this.y, yield this.z, yield this.w;
		}
	});
	var E = class Matrix4 {
		static {
			this.prototype.isMatrix4 = !0;
		}
		constructor(t, e, s, i, r, n, a, h, o, l, u, c, d, p, m, y) {
			this.elements = [
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				0,
				1
			], void 0 !== t && this.set(t, e, s, i, r, n, a, h, o, l, u, c, d, p, m, y);
		}
		set(t, e, s, i, r, n, a, h, o, l, u, c, d, p, m, y) {
			const g = this.elements;
			return g[0] = t, g[4] = e, g[8] = s, g[12] = i, g[1] = r, g[5] = n, g[9] = a, g[13] = h, g[2] = o, g[6] = l, g[10] = u, g[14] = c, g[3] = d, g[7] = p, g[11] = m, g[15] = y, this;
		}
		identity() {
			return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
		}
		clone() {
			return new Matrix4().fromArray(this.elements);
		}
		copy(t) {
			const e = this.elements, s = t.elements;
			return e[0] = s[0], e[1] = s[1], e[2] = s[2], e[3] = s[3], e[4] = s[4], e[5] = s[5], e[6] = s[6], e[7] = s[7], e[8] = s[8], e[9] = s[9], e[10] = s[10], e[11] = s[11], e[12] = s[12], e[13] = s[13], e[14] = s[14], e[15] = s[15], this;
		}
		copyPosition(t) {
			const e = this.elements, s = t.elements;
			return e[12] = s[12], e[13] = s[13], e[14] = s[14], this;
		}
		setFromMatrix3(t) {
			const e = t.elements;
			return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1), this;
		}
		extractBasis(t, e, s) {
			return 0 === this.determinantAffine() ? (t.set(1, 0, 0), e.set(0, 1, 0), s.set(0, 0, 1), this) : (t.setFromMatrixColumn(this, 0), e.setFromMatrixColumn(this, 1), s.setFromMatrixColumn(this, 2), this);
		}
		makeBasis(t, e, s) {
			return this.set(t.x, e.x, s.x, 0, t.y, e.y, s.y, 0, t.z, e.z, s.z, 0, 0, 0, 0, 1), this;
		}
		extractRotation(t) {
			if (0 === t.determinantAffine()) return this.identity();
			const e = this.elements, s = t.elements, i = 1 / V.setFromMatrixColumn(t, 0).length(), r = 1 / V.setFromMatrixColumn(t, 1).length(), n = 1 / V.setFromMatrixColumn(t, 2).length();
			return e[0] = s[0] * i, e[1] = s[1] * i, e[2] = s[2] * i, e[3] = 0, e[4] = s[4] * r, e[5] = s[5] * r, e[6] = s[6] * r, e[7] = 0, e[8] = s[8] * n, e[9] = s[9] * n, e[10] = s[10] * n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
		}
		makeRotationFromEuler(t) {
			const e = this.elements, s = t.x, i = t.y, r = t.z, n = Math.cos(s), a = Math.sin(s), h = Math.cos(i), o = Math.sin(i), l = Math.cos(r), u = Math.sin(r);
			if ("XYZ" === t.order) {
				const t = n * l, s = n * u, i = a * l, r = a * u;
				e[0] = h * l, e[4] = -h * u, e[8] = o, e[1] = s + i * o, e[5] = t - r * o, e[9] = -a * h, e[2] = r - t * o, e[6] = i + s * o, e[10] = n * h;
			} else if ("YXZ" === t.order) {
				const t = h * l, s = h * u, i = o * l, r = o * u;
				e[0] = t + r * a, e[4] = i * a - s, e[8] = n * o, e[1] = n * u, e[5] = n * l, e[9] = -a, e[2] = s * a - i, e[6] = r + t * a, e[10] = n * h;
			} else if ("ZXY" === t.order) {
				const t = h * l, s = h * u, i = o * l, r = o * u;
				e[0] = t - r * a, e[4] = -n * u, e[8] = i + s * a, e[1] = s + i * a, e[5] = n * l, e[9] = r - t * a, e[2] = -n * o, e[6] = a, e[10] = n * h;
			} else if ("ZYX" === t.order) {
				const t = n * l, s = n * u, i = a * l, r = a * u;
				e[0] = h * l, e[4] = i * o - s, e[8] = t * o + r, e[1] = h * u, e[5] = r * o + t, e[9] = s * o - i, e[2] = -o, e[6] = a * h, e[10] = n * h;
			} else if ("YZX" === t.order) {
				const t = n * h, s = n * o, i = a * h, r = a * o;
				e[0] = h * l, e[4] = r - t * u, e[8] = i * u + s, e[1] = u, e[5] = n * l, e[9] = -a * l, e[2] = -o * l, e[6] = s * u + i, e[10] = t - r * u;
			} else if ("XZY" === t.order) {
				const t = n * h, s = n * o, i = a * h, r = a * o;
				e[0] = h * l, e[4] = -u, e[8] = o * l, e[1] = t * u + r, e[5] = n * l, e[9] = s * u - i, e[2] = i * u - s, e[6] = a * l, e[10] = r * u + t;
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
		}
		makeRotationFromQuaternion(t) {
			return this.compose(N, t, O);
		}
		lookAt(t, e, s) {
			const i = this.elements;
			return R.subVectors(t, e), 0 === R.lengthSq() && (R.z = 1), R.normalize(), B.crossVectors(s, R), 0 === B.lengthSq() && (1 === Math.abs(s.z) ? R.x += 1e-4 : R.z += 1e-4, R.normalize(), B.crossVectors(s, R)), B.normalize(), U.crossVectors(R, B), i[0] = B.x, i[4] = U.x, i[8] = R.x, i[1] = B.y, i[5] = U.y, i[9] = R.y, i[2] = B.z, i[6] = U.z, i[10] = R.z, this;
		}
		multiply(t) {
			return this.multiplyMatrices(this, t);
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this);
		}
		multiplyMatrices(t, e) {
			const s = t.elements, i = e.elements, r = this.elements, n = s[0], a = s[4], h = s[8], o = s[12], l = s[1], u = s[5], c = s[9], d = s[13], p = s[2], m = s[6], y = s[10], g = s[14], x = s[3], f = s[7], M = s[11], _ = s[15], b = i[0], w = i[4], z = i[8], v = i[12], S = i[1], T = i[5], k = i[9], A = i[13], C = i[2], F = i[6], E = i[10], V = i[14], I = i[3], N = i[7], O = i[11], B = i[15];
			return r[0] = n * b + a * S + h * C + o * I, r[4] = n * w + a * T + h * F + o * N, r[8] = n * z + a * k + h * E + o * O, r[12] = n * v + a * A + h * V + o * B, r[1] = l * b + u * S + c * C + d * I, r[5] = l * w + u * T + c * F + d * N, r[9] = l * z + u * k + c * E + d * O, r[13] = l * v + u * A + c * V + d * B, r[2] = p * b + m * S + y * C + g * I, r[6] = p * w + m * T + y * F + g * N, r[10] = p * z + m * k + y * E + g * O, r[14] = p * v + m * A + y * V + g * B, r[3] = x * b + f * S + M * C + _ * I, r[7] = x * w + f * T + M * F + _ * N, r[11] = x * z + f * k + M * E + _ * O, r[15] = x * v + f * A + M * V + _ * B, this;
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
		}
		determinant() {
			const t = this.elements, e = t[0], s = t[4], i = t[8], r = t[12], n = t[1], a = t[5], h = t[9], o = t[13], l = t[2], u = t[6], c = t[10], d = t[14], p = t[3], m = t[7], y = t[11], g = t[15], x = h * d - o * c, f = a * d - o * u, M = a * c - h * u, _ = n * d - o * l, b = n * c - h * l, w = n * u - a * l;
			return e * (m * x - y * f + g * M) - s * (p * x - y * _ + g * b) + i * (p * f - m * _ + g * w) - r * (p * M - m * b + y * w);
		}
		determinantAffine() {
			const t = this.elements, e = t[0], s = t[4], i = t[8], r = t[1], n = t[5], a = t[9], h = t[2], o = t[6], l = t[10];
			return e * (n * l - a * o) - s * (r * l - a * h) + i * (r * o - n * h);
		}
		transpose() {
			const t = this.elements;
			let e;
			return e = t[1], t[1] = t[4], t[4] = e, e = t[2], t[2] = t[8], t[8] = e, e = t[6], t[6] = t[9], t[9] = e, e = t[3], t[3] = t[12], t[12] = e, e = t[7], t[7] = t[13], t[13] = e, e = t[11], t[11] = t[14], t[14] = e, this;
		}
		setPosition(t, e, s) {
			const i = this.elements;
			return t.isVector3 ? (i[12] = t.x, i[13] = t.y, i[14] = t.z) : (i[12] = t, i[13] = e, i[14] = s), this;
		}
		invert() {
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], h = t[6], o = t[7], l = t[8], u = t[9], c = t[10], d = t[11], p = t[12], m = t[13], y = t[14], g = t[15], x = e * a - s * n, f = e * h - i * n, M = e * o - r * n, _ = s * h - i * a, b = s * o - r * a, w = i * o - r * h, z = l * m - u * p, v = l * y - c * p, S = l * g - d * p, T = u * y - c * m, k = u * g - d * m, A = c * g - d * y, C = x * A - f * k + M * T + _ * S - b * v + w * z;
			if (0 === C) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const F = 1 / C;
			return t[0] = (a * A - h * k + o * T) * F, t[1] = (i * k - s * A - r * T) * F, t[2] = (m * w - y * b + g * _) * F, t[3] = (c * b - u * w - d * _) * F, t[4] = (h * S - n * A - o * v) * F, t[5] = (e * A - i * S + r * v) * F, t[6] = (y * M - p * w - g * f) * F, t[7] = (l * w - c * M + d * f) * F, t[8] = (n * k - a * S + o * z) * F, t[9] = (s * S - e * k - r * z) * F, t[10] = (p * b - m * M + g * x) * F, t[11] = (u * M - l * b - d * x) * F, t[12] = (a * v - n * T - h * z) * F, t[13] = (e * T - s * v + i * z) * F, t[14] = (m * f - p * _ - y * x) * F, t[15] = (l * _ - u * f + c * x) * F, this;
		}
		scale(t) {
			const e = this.elements, s = t.x, i = t.y, r = t.z;
			return e[0] *= s, e[4] *= i, e[8] *= r, e[1] *= s, e[5] *= i, e[9] *= r, e[2] *= s, e[6] *= i, e[10] *= r, e[3] *= s, e[7] *= i, e[11] *= r, this;
		}
		getMaxScaleOnAxis() {
			const t = this.elements, e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2], s = t[4] * t[4] + t[5] * t[5] + t[6] * t[6], i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
			return Math.sqrt(Math.max(e, s, i));
		}
		makeTranslation(t, e, s) {
			return t.isVector3 ? this.set(1, 0, 0, t.x, 0, 1, 0, t.y, 0, 0, 1, t.z, 0, 0, 0, 1) : this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, s, 0, 0, 0, 1), this;
		}
		makeRotationX(t) {
			const e = Math.cos(t), s = Math.sin(t);
			return this.set(1, 0, 0, 0, 0, e, -s, 0, 0, s, e, 0, 0, 0, 0, 1), this;
		}
		makeRotationY(t) {
			const e = Math.cos(t), s = Math.sin(t);
			return this.set(e, 0, s, 0, 0, 1, 0, 0, -s, 0, e, 0, 0, 0, 0, 1), this;
		}
		makeRotationZ(t) {
			const e = Math.cos(t), s = Math.sin(t);
			return this.set(e, -s, 0, 0, s, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
		}
		makeRotationAxis(t, e) {
			const s = Math.cos(e), i = Math.sin(e), r = 1 - s, n = t.x, a = t.y, h = t.z, o = r * n, l = r * a;
			return this.set(o * n + s, o * a - i * h, o * h + i * a, 0, o * a + i * h, l * a + s, l * h - i * n, 0, o * h - i * a, l * h + i * n, r * h * h + s, 0, 0, 0, 0, 1), this;
		}
		makeScale(t, e, s) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1), this;
		}
		makeShear(t, e, s, i, r, n) {
			return this.set(1, s, r, 0, t, 1, n, 0, e, i, 1, 0, 0, 0, 0, 1), this;
		}
		compose(t, e, s) {
			const i = this.elements, r = e._x, n = e._y, a = e._z, h = e._w, o = r + r, l = n + n, u = a + a, c = r * o, d = r * l, p = r * u, m = n * l, y = n * u, g = a * u, x = h * o, f = h * l, M = h * u, _ = s.x, b = s.y, w = s.z;
			return i[0] = (1 - (m + g)) * _, i[1] = (d + M) * _, i[2] = (p - f) * _, i[3] = 0, i[4] = (d - M) * b, i[5] = (1 - (c + g)) * b, i[6] = (y + x) * b, i[7] = 0, i[8] = (p + f) * w, i[9] = (y - x) * w, i[10] = (1 - (c + m)) * w, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
		}
		decompose(t, e, s) {
			const i = this.elements;
			t.x = i[12], t.y = i[13], t.z = i[14];
			const r = this.determinantAffine();
			if (0 === r) return s.set(1, 1, 1), e.identity(), this;
			let n = V.set(i[0], i[1], i[2]).length();
			const a = V.set(i[4], i[5], i[6]).length(), h = V.set(i[8], i[9], i[10]).length();
			r < 0 && (n = -n), I.copy(this);
			const o = 1 / n, l = 1 / a, u = 1 / h;
			return I.elements[0] *= o, I.elements[1] *= o, I.elements[2] *= o, I.elements[4] *= l, I.elements[5] *= l, I.elements[6] *= l, I.elements[8] *= u, I.elements[9] *= u, I.elements[10] *= u, e.setFromRotationMatrix(I), s.x = n, s.y = a, s.z = h, this;
		}
		makePerspective(t, e, s, i, r, n, a = 2e3, h = !1) {
			const o = this.elements, l = 2 * r / (e - t), u = 2 * r / (s - i), c = (e + t) / (e - t), d = (s + i) / (s - i);
			let p, m;
			if (h) p = r / (n - r), m = n * r / (n - r);
			else if (2e3 === a) p = -(n + r) / (n - r), m = -2 * n * r / (n - r);
			else {
				if (2001 !== a) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
				p = -n / (n - r), m = -n * r / (n - r);
			}
			return o[0] = l, o[4] = 0, o[8] = c, o[12] = 0, o[1] = 0, o[5] = u, o[9] = d, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = p, o[14] = m, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
		}
		makeOrthographic(t, e, s, i, r, n, a = 2e3, h = !1) {
			const o = this.elements, l = 2 / (e - t), u = 2 / (s - i), c = -(e + t) / (e - t), d = -(s + i) / (s - i);
			let p, m;
			if (h) p = 1 / (n - r), m = n / (n - r);
			else if (2e3 === a) p = -2 / (n - r), m = -(n + r) / (n - r);
			else {
				if (2001 !== a) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
				p = -1 / (n - r), m = -r / (n - r);
			}
			return o[0] = l, o[4] = 0, o[8] = 0, o[12] = c, o[1] = 0, o[5] = u, o[9] = 0, o[13] = d, o[2] = 0, o[6] = 0, o[10] = p, o[14] = m, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
		}
		equals(t) {
			const e = this.elements, s = t.elements;
			for (let i = 0; i < 16; i++) if (e[i] !== s[i]) return !1;
			return !0;
		}
		fromArray(t, e = 0) {
			for (let s = 0; s < 16; s++) this.elements[s] = t[s + e];
			return this;
		}
		toArray(t = [], e = 0) {
			const s = this.elements;
			return t[e] = s[0], t[e + 1] = s[1], t[e + 2] = s[2], t[e + 3] = s[3], t[e + 4] = s[4], t[e + 5] = s[5], t[e + 6] = s[6], t[e + 7] = s[7], t[e + 8] = s[8], t[e + 9] = s[9], t[e + 10] = s[10], t[e + 11] = s[11], t[e + 12] = s[12], t[e + 13] = s[13], t[e + 14] = s[14], t[e + 15] = s[15], t;
		}
	};
	const V = new g(), I = new E(), N = new g(0, 0, 0), O = new g(1, 1, 1), B = new g(), U = new g(), R = new g(), P = new E(), L = new y();
	var D = class Euler {
		constructor(t = 0, e = 0, s = 0, i = Euler.DEFAULT_ORDER) {
			this.isEuler = !0, this._x = t, this._y = e, this._z = s, this._order = i;
		}
		get x() {
			return this._x;
		}
		set x(t) {
			this._x = t, this._onChangeCallback();
		}
		get y() {
			return this._y;
		}
		set y(t) {
			this._y = t, this._onChangeCallback();
		}
		get z() {
			return this._z;
		}
		set z(t) {
			this._z = t, this._onChangeCallback();
		}
		get order() {
			return this._order;
		}
		set order(t) {
			this._order = t, this._onChangeCallback();
		}
		set(t, e, s, i = this._order) {
			return this._x = t, this._y = e, this._z = s, this._order = i, this._onChangeCallback(), this;
		}
		clone() {
			return new this.constructor(this._x, this._y, this._z, this._order);
		}
		copy(t) {
			return this._x = t._x, this._y = t._y, this._z = t._z, this._order = t._order, this._onChangeCallback(), this;
		}
		setFromRotationMatrix(t, e = this._order, s = !0) {
			const i = t.elements, r = i[0], n = i[4], a = i[8], h = i[1], o = i[5], l = i[9], u = i[2], c = i[6], d = i[10];
			switch (e) {
				case "XYZ":
					this._y = Math.asin(clamp(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-n, r)) : (this._x = Math.atan2(c, o), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-clamp(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(h, o)) : (this._y = Math.atan2(-u, r), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(clamp(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-n, o)) : (this._y = 0, this._z = Math.atan2(h, r));
					break;
				case "ZYX":
					this._y = Math.asin(-clamp(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(c, d), this._z = Math.atan2(h, r)) : (this._x = 0, this._z = Math.atan2(-n, o));
					break;
				case "YZX":
					this._z = Math.asin(clamp(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-l, o), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, d));
					break;
				case "XZY":
					this._z = Math.asin(-clamp(n, -1, 1)), Math.abs(n) < .9999999 ? (this._x = Math.atan2(c, o), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-l, d), this._y = 0);
					break;
				default: warn("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
			}
			return this._order = e, !0 === s && this._onChangeCallback(), this;
		}
		setFromQuaternion(t, e, s) {
			return P.makeRotationFromQuaternion(t), this.setFromRotationMatrix(P, e, s);
		}
		setFromVector3(t, e = this._order) {
			return this.set(t.x, t.y, t.z, e);
		}
		reorder(t) {
			return L.setFromEuler(this), this.setFromQuaternion(L, t);
		}
		equals(t) {
			return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order;
		}
		fromArray(t) {
			return this._x = t[0], this._y = t[1], this._z = t[2], void 0 !== t[3] && (this._order = t[3]), this._onChangeCallback(), this;
		}
		toArray(t = [], e = 0) {
			return t[e] = this._x, t[e + 1] = this._y, t[e + 2] = this._z, t[e + 3] = this._order, t;
		}
		_onChange(t) {
			return this._onChangeCallback = t, this;
		}
		_onChangeCallback() {}
		*[Symbol.iterator]() {
			yield this._x, yield this._y, yield this._z, yield this._order;
		}
	};
	D.DEFAULT_ORDER = "XYZ";
	var W = class {
		constructor() {
			this.mask = 1;
		}
		set(t) {
			this.mask = 1 << t >>> 0;
		}
		enable(t) {
			this.mask |= 1 << t;
		}
		enableAll() {
			this.mask = -1;
		}
		toggle(t) {
			this.mask ^= 1 << t;
		}
		disable(t) {
			this.mask &= ~(1 << t);
		}
		disableAll() {
			this.mask = 0;
		}
		test(t) {
			return 0 !== (this.mask & t.mask);
		}
		isEnabled(t) {
			return !!(this.mask & 1 << t);
		}
	};
	let q = 0;
	const j = new g(), H = new y(), Y = new E(), G = new g(), X = new g(), Z = new g(), J = new y(), Q = new g(1, 0, 0), $ = new g(0, 1, 0), K = new g(0, 0, 1), tt = { type: "added" }, et = { type: "removed" }, st = {
		type: "childadded",
		child: null
	}, it = {
		type: "childremoved",
		child: null
	};
	var rt = class Object3D extends o {
		constructor() {
			super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: q++ }), this.uuid = generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Object3D.DEFAULT_UP.clone();
			const t = new g(), e = new D(), s = new y(), i = new g(1, 1, 1);
			e._onChange(function onRotationChange() {
				s.setFromEuler(e, !1);
			}), s._onChange(function onQuaternionChange() {
				e.setFromQuaternion(s, void 0, !1);
			}), Object.defineProperties(this, {
				position: {
					configurable: !0,
					enumerable: !0,
					value: t
				},
				rotation: {
					configurable: !0,
					enumerable: !0,
					value: e
				},
				quaternion: {
					configurable: !0,
					enumerable: !0,
					value: s
				},
				scale: {
					configurable: !0,
					enumerable: !0,
					value: i
				},
				modelViewMatrix: { value: new E() },
				normalMatrix: { value: new M() }
			}), this.matrix = new E(), this.matrixWorld = new E(), this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new W(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
		}
		onBeforeShadow() {}
		onAfterShadow() {}
		onBeforeRender() {}
		onAfterRender() {}
		applyMatrix4(t) {
			this.matrixAutoUpdate && this.updateMatrix(), this.matrix.premultiply(t), this.matrix.decompose(this.position, this.quaternion, this.scale), null !== this.pivot && this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot);
		}
		applyQuaternion(t) {
			return this.quaternion.premultiply(t), this;
		}
		setRotationFromAxisAngle(t, e) {
			this.quaternion.setFromAxisAngle(t, e);
		}
		setRotationFromEuler(t) {
			this.quaternion.setFromEuler(t, !0);
		}
		setRotationFromMatrix(t) {
			this.quaternion.setFromRotationMatrix(t);
		}
		setRotationFromQuaternion(t) {
			this.quaternion.copy(t);
		}
		rotateOnAxis(t, e) {
			return H.setFromAxisAngle(t, e), this.quaternion.multiply(H), this;
		}
		rotateOnWorldAxis(t, e) {
			return H.setFromAxisAngle(t, e), this.quaternion.premultiply(H), this;
		}
		rotateX(t) {
			return this.rotateOnAxis(Q, t);
		}
		rotateY(t) {
			return this.rotateOnAxis($, t);
		}
		rotateZ(t) {
			return this.rotateOnAxis(K, t);
		}
		translateOnAxis(t, e) {
			return j.copy(t).applyQuaternion(this.quaternion), this.position.add(j.multiplyScalar(e)), this;
		}
		translateX(t) {
			return this.translateOnAxis(Q, t);
		}
		translateY(t) {
			return this.translateOnAxis($, t);
		}
		translateZ(t) {
			return this.translateOnAxis(K, t);
		}
		localToWorld(t) {
			return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
		}
		worldToLocal(t) {
			return this.updateWorldMatrix(!0, !1), t.applyMatrix4(Y.copy(this.matrixWorld).invert());
		}
		lookAt(t, e, s) {
			t.isVector3 ? G.copy(t) : G.set(t, e, s);
			const i = this.parent;
			this.updateWorldMatrix(!0, !1), X.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Y.lookAt(X, G, this.up) : Y.lookAt(G, X, this.up), this.quaternion.setFromRotationMatrix(Y), i && (Y.extractRotation(i.matrixWorld), H.setFromRotationMatrix(Y), this.quaternion.premultiply(H.invert()));
		}
		add(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this;
			}
			return t === this ? (error("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(tt), st.child = t, this.dispatchEvent(st), st.child = null) : error("Object3D.add: object not an instance of THREE.Object3D.", t), this);
		}
		remove(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this;
			}
			const e = this.children.indexOf(t);
			return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(et), it.child = t, this.dispatchEvent(it), it.child = null), this;
		}
		removeFromParent() {
			const t = this.parent;
			return null !== t && t.remove(this), this;
		}
		clear() {
			return this.remove(...this.children);
		}
		attach(t) {
			return this.updateWorldMatrix(!0, !1), Y.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Y.multiply(t.parent.matrixWorld)), t.applyMatrix4(Y), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(tt), st.child = t, this.dispatchEvent(st), st.child = null, this;
		}
		getObjectById(t) {
			return this.getObjectByProperty("id", t);
		}
		getObjectByName(t) {
			return this.getObjectByProperty("name", t);
		}
		getObjectByProperty(t, e) {
			if (this[t] === e) return this;
			for (let s = 0, i = this.children.length; s < i; s++) {
				const i = this.children[s].getObjectByProperty(t, e);
				if (void 0 !== i) return i;
			}
		}
		getObjectsByProperty(t, e, s = []) {
			this[t] === e && s.push(this);
			const i = this.children;
			for (let r = 0, n = i.length; r < n; r++) i[r].getObjectsByProperty(t, e, s);
			return s;
		}
		getWorldPosition(t) {
			return this.updateWorldMatrix(!0, !1), t.setFromMatrixPosition(this.matrixWorld);
		}
		getWorldQuaternion(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(X, t, Z), t;
		}
		getWorldScale(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(X, J, t), t;
		}
		getWorldDirection(t) {
			this.updateWorldMatrix(!0, !1);
			const e = this.matrixWorld.elements;
			return t.set(e[8], e[9], e[10]).normalize();
		}
		raycast() {}
		intersectsFrustum() {
			return !0;
		}
		traverse(t) {
			t(this);
			const e = this.children;
			for (let s = 0, i = e.length; s < i; s++) e[s].traverse(t);
		}
		traverseVisible(t) {
			if (!1 === this.visible) return;
			t(this);
			const e = this.children;
			for (let s = 0, i = e.length; s < i; s++) e[s].traverseVisible(t);
		}
		traverseAncestors(t) {
			const e = this.parent;
			null !== e && (t(e), e.traverseAncestors(t));
		}
		updateMatrix() {
			this.matrix.compose(this.position, this.quaternion, this.scale);
			const t = this.pivot;
			if (null !== t) {
				const e = t.x, s = t.y, i = t.z, r = this.matrix.elements;
				r[12] += e - r[0] * e - r[4] * s - r[8] * i, r[13] += s - r[1] * e - r[5] * s - r[9] * i, r[14] += i - r[2] * e - r[6] * s - r[10] * i;
			}
			this.matrixWorldNeedsUpdate = !0;
		}
		updateMatrixWorld(t) {
			this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || t) && (!0 === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, t = !0);
			const e = this.children;
			for (let s = 0, i = e.length; s < i; s++) e[s].updateMatrixWorld(t);
		}
		updateWorldMatrix(t, e, s = !1) {
			const i = this.parent;
			if (!0 === t && null !== i && i.updateWorldMatrix(!0, !1), this.matrixAutoUpdate && this.updateMatrix(), (this.matrixWorldNeedsUpdate || s) && (!0 === this.matrixWorldAutoUpdate && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix)), this.matrixWorldNeedsUpdate = !1, s = !0), !0 === e) {
				const t = this.children;
				for (let e = 0, i = t.length; e < i; e++) t[e].updateWorldMatrix(!1, !0, s);
			}
		}
		toJSON(t) {
			const e = void 0 === t || "string" == typeof t, s = {};
			e && (t = {
				geometries: {},
				materials: {},
				textures: {},
				images: {},
				shapes: {},
				skeletons: {},
				animations: {},
				nodes: {}
			}, s.metadata = {
				version: 4.7,
				type: "Object",
				generator: "Object3D.toJSON"
			});
			const i = {};
			function serialize(e, s) {
				return void 0 === e[s.uuid] && (e[s.uuid] = s.toJSON(t)), s.uuid;
			}
			if (i.uuid = this.uuid, i.type = this.type, i.name = this.name, i.castShadow = this.castShadow, i.receiveShadow = this.receiveShadow, i.visible = this.visible, i.frustumCulled = this.frustumCulled, i.renderOrder = this.renderOrder, i.static = this.static, i.matrixAutoUpdate = this.matrixAutoUpdate, Object.keys(this.userData).length > 0 && (i.userData = this.userData), i.layers = this.layers.mask, i.matrix = this.matrix.toArray(), i.up = this.up.toArray(), null !== this.pivot && (i.pivot = this.pivot.toArray()), void 0 !== this.morphTargetDictionary && (i.morphTargetDictionary = Object.assign({}, this.morphTargetDictionary)), void 0 !== this.morphTargetInfluences && (i.morphTargetInfluences = this.morphTargetInfluences.slice()), this.isInstancedMesh && (i.type = "InstancedMesh", i.count = this.count, i.instanceMatrix = this.instanceMatrix.toJSON(), null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())), this.isBatchedMesh && (i.type = "BatchedMesh", i.perObjectFrustumCulled = this.perObjectFrustumCulled, i.sortObjects = this.sortObjects, i.drawRanges = this._drawRanges, i.reservedRanges = this._reservedRanges, i.geometryInfo = this._geometryInfo.map((t) => ({
				...t,
				boundingBox: t.boundingBox ? t.boundingBox.toJSON() : void 0,
				boundingSphere: t.boundingSphere ? t.boundingSphere.toJSON() : void 0
			})), i.instanceInfo = this._instanceInfo.map((t) => ({ ...t })), i.availableInstanceIds = this._availableInstanceIds.slice(), i.availableGeometryIds = this._availableGeometryIds.slice(), i.nextIndexStart = this._nextIndexStart, i.nextVertexStart = this._nextVertexStart, i.geometryCount = this._geometryCount, i.maxInstanceCount = this._maxInstanceCount, i.maxVertexCount = this._maxVertexCount, i.maxIndexCount = this._maxIndexCount, i.geometryInitialized = this._geometryInitialized, i.matricesTexture = this._matricesTexture.toJSON(t), i.indirectTexture = this._indirectTexture.toJSON(t), null !== this._colorsTexture && (i.colorsTexture = this._colorsTexture.toJSON(t)), null !== this.boundingSphere && (i.boundingSphere = this.boundingSphere.toJSON()), null !== this.boundingBox && (i.boundingBox = this.boundingBox.toJSON())), this.isScene) this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(t).uuid)), this.environment && this.environment.isTexture && !0 !== this.environment.isRenderTargetTexture && (i.environment = this.environment.toJSON(t).uuid);
			else if (this.isMesh || this.isLine || this.isPoints) {
				i.geometry = serialize(t.geometries, this.geometry);
				const e = this.geometry.parameters;
				if (void 0 !== e && void 0 !== e.shapes) {
					const s = e.shapes;
					if (Array.isArray(s)) for (let e = 0, i = s.length; e < i; e++) {
						const i = s[e];
						serialize(t.shapes, i);
					}
					else serialize(t.shapes, s);
				}
			}
			if (this.isSkinnedMesh && (i.bindMode = this.bindMode, i.bindMatrix = this.bindMatrix.toArray(), void 0 !== this.skeleton && (serialize(t.skeletons, this.skeleton), i.skeleton = this.skeleton.uuid)), void 0 !== this.material) if (Array.isArray(this.material)) {
				const e = [];
				for (let s = 0, i = this.material.length; s < i; s++) e.push(serialize(t.materials, this.material[s]));
				i.material = e;
			} else i.material = serialize(t.materials, this.material);
			if (this.children.length > 0) {
				i.children = [];
				for (let e = 0; e < this.children.length; e++) i.children.push(this.children[e].toJSON(t).object);
			}
			if (this.animations.length > 0) {
				i.animations = [];
				for (let e = 0; e < this.animations.length; e++) {
					const s = this.animations[e];
					i.animations.push(serialize(t.animations, s));
				}
			}
			if (e) {
				const e = extractFromCache(t.geometries), i = extractFromCache(t.materials), r = extractFromCache(t.textures), n = extractFromCache(t.images), a = extractFromCache(t.shapes), h = extractFromCache(t.skeletons), o = extractFromCache(t.animations), l = extractFromCache(t.nodes);
				e.length > 0 && (s.geometries = e), i.length > 0 && (s.materials = i), r.length > 0 && (s.textures = r), n.length > 0 && (s.images = n), a.length > 0 && (s.shapes = a), h.length > 0 && (s.skeletons = h), o.length > 0 && (s.animations = o), l.length > 0 && (s.nodes = l);
			}
			return s.object = i, s;
			function extractFromCache(t) {
				const e = [];
				for (const s in t) {
					const i = t[s];
					delete i.metadata, e.push(i);
				}
				return e;
			}
		}
		clone(t) {
			return new this.constructor().copy(this, t);
		}
		copy(t, e = !0) {
			if (this.name = t.name, this.up.copy(t.up), this.position.copy(t.position), this.rotation.order = t.rotation.order, this.quaternion.copy(t.quaternion), this.scale.copy(t.scale), this.pivot = null !== t.pivot ? t.pivot.clone() : null, this.matrix.copy(t.matrix), this.matrixWorld.copy(t.matrixWorld), this.matrixAutoUpdate = t.matrixAutoUpdate, this.matrixWorldAutoUpdate = t.matrixWorldAutoUpdate, this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate, this.layers.mask = t.layers.mask, this.visible = t.visible, this.castShadow = t.castShadow, this.receiveShadow = t.receiveShadow, this.frustumCulled = t.frustumCulled, this.renderOrder = t.renderOrder, this.static = t.static, this.animations = t.animations.slice(), this.userData = JSON.parse(JSON.stringify(t.userData)), !0 === e) for (let s = 0; s < t.children.length; s++) {
				const e = t.children[s];
				this.add(e.clone());
			}
			return this;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	};
	rt.DEFAULT_UP = new g(0, 1, 0), rt.DEFAULT_MATRIX_AUTO_UPDATE = !0, rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
	const nt = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	}, at = {
		h: 0,
		s: 0,
		l: 0
	}, ht = {
		h: 0,
		s: 0,
		l: 0
	};
	function hue2rgb(t, e, s) {
		return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + 6 * (e - t) * s : s < .5 ? e : s < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - s) : t;
	}
	var ot = class {
		constructor(t, e, s) {
			return this.isColor = !0, this.r = 1, this.g = 1, this.b = 1, this.set(t, e, s);
		}
		set(t, e, s) {
			if (void 0 === e && void 0 === s) {
				const e = t;
				e && e.isColor ? this.copy(e) : "number" == typeof e ? this.setHex(e) : "string" == typeof e && this.setStyle(e);
			} else this.setRGB(t, e, s);
			return this;
		}
		setScalar(t) {
			return this.r = t, this.g = t, this.b = t, this;
		}
		setHex(t, e = r) {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, z.colorSpaceToWorking(this, e), this;
		}
		setRGB(t, e, s, i = z.workingColorSpace) {
			return this.r = t, this.g = e, this.b = s, z.colorSpaceToWorking(this, i), this;
		}
		setHSL(t, e, s, i = z.workingColorSpace) {
			if (t = euclideanModulo(t, 1), e = clamp(e, 0, 1), s = clamp(s, 0, 1), 0 === e) this.r = this.g = this.b = s;
			else {
				const i = s <= .5 ? s * (1 + e) : s + e - s * e, r = 2 * s - i;
				this.r = hue2rgb(r, i, t + 1 / 3), this.g = hue2rgb(r, i, t), this.b = hue2rgb(r, i, t - 1 / 3);
			}
			return z.colorSpaceToWorking(this, i), this;
		}
		setStyle(t, e = r) {
			function handleAlpha(e) {
				void 0 !== e && parseFloat(e) < 1 && warn("Color: Alpha component of " + t + " will be ignored.");
			}
			let s;
			if (s = /^(\w+)\(([^\)]*)\)/.exec(t)) {
				let i;
				const r = s[1], n = s[2];
				switch (r) {
					case "rgb":
					case "rgba":
						if (i = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(n)) return handleAlpha(i[4]), this.setRGB(Math.min(255, parseInt(i[1], 10)) / 255, Math.min(255, parseInt(i[2], 10)) / 255, Math.min(255, parseInt(i[3], 10)) / 255, e);
						if (i = /^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(n)) return handleAlpha(i[4]), this.setRGB(Math.min(100, parseFloat(i[1])) / 100, Math.min(100, parseFloat(i[2])) / 100, Math.min(100, parseFloat(i[3])) / 100, e);
						break;
					case "hsl":
					case "hsla":
						if (i = /^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(n)) return handleAlpha(i[4]), this.setHSL(parseFloat(i[1]) / 360, parseFloat(i[2]) / 100, parseFloat(i[3]) / 100, e);
						break;
					default: warn("Color: Unknown color model " + t);
				}
			} else if (s = /^\#([A-Fa-f\d]+)$/.exec(t)) {
				const i = s[1], r = i.length;
				if (3 === r) return this.setRGB(parseInt(i.charAt(0), 16) / 15, parseInt(i.charAt(1), 16) / 15, parseInt(i.charAt(2), 16) / 15, e);
				if (6 === r) return this.setHex(parseInt(i, 16), e);
				warn("Color: Invalid hex color " + t);
			} else if (t && t.length > 0) return this.setColorName(t, e);
			return this;
		}
		setColorName(t, e = r) {
			const s = nt[t.toLowerCase()];
			return void 0 !== s ? this.setHex(s, e) : warn("Color: Unknown color " + t), this;
		}
		clone() {
			return new this.constructor(this.r, this.g, this.b);
		}
		copy(t) {
			return this.r = t.r, this.g = t.g, this.b = t.b, this;
		}
		copySRGBToLinear(t) {
			return this.r = SRGBToLinear(t.r), this.g = SRGBToLinear(t.g), this.b = SRGBToLinear(t.b), this;
		}
		copyLinearToSRGB(t) {
			return this.r = LinearToSRGB(t.r), this.g = LinearToSRGB(t.g), this.b = LinearToSRGB(t.b), this;
		}
		convertSRGBToLinear() {
			return this.copySRGBToLinear(this), this;
		}
		convertLinearToSRGB() {
			return this.copyLinearToSRGB(this), this;
		}
		getHex(t = r) {
			return z.workingToColorSpace(lt.copy(this), t), 65536 * Math.round(clamp(255 * lt.r, 0, 255)) + 256 * Math.round(clamp(255 * lt.g, 0, 255)) + Math.round(clamp(255 * lt.b, 0, 255));
		}
		getHexString(t = r) {
			return ("000000" + this.getHex(t).toString(16)).slice(-6);
		}
		getHSL(t, e = z.workingColorSpace) {
			z.workingToColorSpace(lt.copy(this), e);
			const s = lt.r, i = lt.g, r = lt.b, n = Math.max(s, i, r), a = Math.min(s, i, r);
			let h, o;
			const l = (a + n) / 2;
			if (a === n) h = 0, o = 0;
			else {
				const t = n - a;
				switch (o = l <= .5 ? t / (n + a) : t / (2 - n - a), n) {
					case s:
						h = (i - r) / t + (i < r ? 6 : 0);
						break;
					case i:
						h = (r - s) / t + 2;
						break;
					case r: h = (s - i) / t + 4;
				}
				h /= 6;
			}
			return t.h = h, t.s = o, t.l = l, t;
		}
		getRGB(t, e = z.workingColorSpace) {
			return z.workingToColorSpace(lt.copy(this), e), t.r = lt.r, t.g = lt.g, t.b = lt.b, t;
		}
		getStyle(t = r) {
			z.workingToColorSpace(lt.copy(this), t);
			const e = lt.r, s = lt.g, i = lt.b;
			return "srgb" !== t ? `color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * s)},${Math.round(255 * i)})`;
		}
		offsetHSL(t, e, s) {
			return this.getHSL(at), this.setHSL(at.h + t, at.s + e, at.l + s);
		}
		add(t) {
			return this.r += t.r, this.g += t.g, this.b += t.b, this;
		}
		addColors(t, e) {
			return this.r = t.r + e.r, this.g = t.g + e.g, this.b = t.b + e.b, this;
		}
		addScalar(t) {
			return this.r += t, this.g += t, this.b += t, this;
		}
		sub(t) {
			return this.r = Math.max(0, this.r - t.r), this.g = Math.max(0, this.g - t.g), this.b = Math.max(0, this.b - t.b), this;
		}
		multiply(t) {
			return this.r *= t.r, this.g *= t.g, this.b *= t.b, this;
		}
		multiplyScalar(t) {
			return this.r *= t, this.g *= t, this.b *= t, this;
		}
		lerp(t, e) {
			return this.r += (t.r - this.r) * e, this.g += (t.g - this.g) * e, this.b += (t.b - this.b) * e, this;
		}
		lerpColors(t, e, s) {
			return this.r = t.r + (e.r - t.r) * s, this.g = t.g + (e.g - t.g) * s, this.b = t.b + (e.b - t.b) * s, this;
		}
		lerpHSL(t, e) {
			this.getHSL(at), t.getHSL(ht);
			const s = lerp(at.h, ht.h, e), i = lerp(at.s, ht.s, e), r = lerp(at.l, ht.l, e);
			return this.setHSL(s, i, r), this;
		}
		setFromVector3(t) {
			return this.r = t.x, this.g = t.y, this.b = t.z, this;
		}
		applyMatrix3(t) {
			const e = this.r, s = this.g, i = this.b, r = t.elements;
			return this.r = r[0] * e + r[3] * s + r[6] * i, this.g = r[1] * e + r[4] * s + r[7] * i, this.b = r[2] * e + r[5] * s + r[8] * i, this;
		}
		equals(t) {
			return t.r === this.r && t.g === this.g && t.b === this.b;
		}
		fromArray(t, e = 0) {
			return this.r = t[e], this.g = t[e + 1], this.b = t[e + 2], this;
		}
		toArray(t = [], e = 0) {
			return t[e] = this.r, t[e + 1] = this.g, t[e + 2] = this.b, t;
		}
		fromBufferAttribute(t, e) {
			return this.r = t.getX(e), this.g = t.getY(e), this.b = t.getZ(e), this;
		}
		toJSON() {
			return this.getHex();
		}
		*[Symbol.iterator]() {
			yield this.r, yield this.g, yield this.b;
		}
	};
	const lt = new ot();
	function convertArray(t, e) {
		return t && t.constructor !== e ? "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) : t;
	}
	function hasTangents(t) {
		return void 0 !== t && void 0 !== t.inTangents && void 0 !== t.outTangents;
	}
	ot.NAMES = nt;
	var ut = class {
		constructor(t, e, s, i) {
			this.parameterPositions = t, this._cachedIndex = 0, this.resultBuffer = void 0 !== i ? i : new e.constructor(s), this.sampleValues = e, this.valueSize = s, this.settings = null, this.DefaultSettings_ = {};
		}
		evaluate(t) {
			const e = this.parameterPositions;
			let s = this._cachedIndex, i = e[s], r = e[s - 1];
			t: {
				e: {
					let n;
					s: {
						i: if (!(t < i)) {
							for (let n = s + 2;;) {
								if (void 0 === i) {
									if (t < r) break i;
									return s = e.length, this._cachedIndex = s, this.copySampleValue_(s - 1);
								}
								if (s === n) break;
								if (r = i, i = e[++s], t < i) break e;
							}
							n = e.length;
							break s;
						}
						if (!(t >= r)) {
							const a = e[1];
							t < a && (s = 2, r = a);
							for (let n = s - 2;;) {
								if (void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
								if (s === n) break;
								if (i = r, r = e[--s - 1], t >= r) break e;
							}
							n = s, s = 0;
							break s;
						}
						break t;
					}
					for (; s < n;) {
						const i = s + n >>> 1;
						t < e[i] ? n = i : s = i + 1;
					}
					if (i = e[s], r = e[s - 1], void 0 === r) return this._cachedIndex = 0, this.copySampleValue_(0);
					if (void 0 === i) return s = e.length, this._cachedIndex = s, this.copySampleValue_(s - 1);
				}
				this._cachedIndex = s, this.intervalChanged_(s, r, i);
			}
			return this.interpolate_(s, r, t, i);
		}
		getSettings_() {
			return this.settings || this.DefaultSettings_;
		}
		copySampleValue_(t) {
			const e = this.resultBuffer, s = this.sampleValues, i = this.valueSize, r = t * i;
			for (let n = 0; n !== i; ++n) e[n] = s[r + n];
			return e;
		}
		interpolate_() {
			throw new Error("THREE.Interpolant: Call to abstract method.");
		}
		intervalChanged_() {}
	}, ct = class extends ut {
		constructor(t, e, s, i) {
			super(t, e, s, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
				endingStart: 2400,
				endingEnd: 2400
			};
		}
		intervalChanged_(t, e, s) {
			const i = this.parameterPositions;
			let r = t - 2, n = t + 1, a = i[r], h = i[n];
			if (void 0 === a) switch (this.getSettings_().endingStart) {
				case 2401:
					r = t, a = 2 * e - s;
					break;
				case 2402:
					r = i.length - 2, a = e + i[r] - i[r + 1];
					break;
				default: r = t, a = s;
			}
			if (void 0 === h) switch (this.getSettings_().endingEnd) {
				case 2401:
					n = t, h = 2 * s - e;
					break;
				case 2402:
					n = 1, h = s + i[1] - i[0];
					break;
				default: n = t - 1, h = e;
			}
			const o = .5 * (s - e), l = this.valueSize;
			this._weightPrev = o / (e - a), this._weightNext = o / (h - s), this._offsetPrev = r * l, this._offsetNext = n * l;
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = t * a, o = h - a, l = this._offsetPrev, u = this._offsetNext, c = this._weightPrev, d = this._weightNext, p = (s - e) / (i - e), m = p * p, y = m * p, g = -c * y + 2 * c * m - c * p, x = (1 + c) * y + (-1.5 - 2 * c) * m + (-.5 + c) * p + 1, f = (-1 - d) * y + (1.5 + d) * m + .5 * p, M = d * y - d * m;
			for (let _ = 0; _ !== a; ++_) r[_] = g * n[l + _] + x * n[o + _] + f * n[h + _] + M * n[u + _];
			return r;
		}
	}, dt = class extends ut {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = t * a, o = h - a, l = (s - e) / (i - e), u = 1 - l;
			for (let c = 0; c !== a; ++c) r[c] = n[o + c] * u + n[h + c] * l;
			return r;
		}
	}, pt = class extends ut {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t) {
			return this.copySampleValue_(t - 1);
		}
	}, mt = class extends ut {
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = t * a, o = h - a, l = this.inTangents, u = this.outTangents;
			if (!l || !u) {
				const t = (s - e) / (i - e), l = 1 - t;
				for (let e = 0; e !== a; ++e) r[e] = n[o + e] * l + n[h + e] * t;
				return r;
			}
			const c = 2 * a, d = t - 1;
			for (let p = 0; p !== a; ++p) {
				const a = n[o + p], m = n[h + p], y = d * c + 2 * p, g = u[y], x = u[y + 1], f = t * c + 2 * p, M = l[f], _ = l[f + 1], b = solveBezierParameter(s, e, g, M, i);
				r[p] = cubicBezier(b, a, x, _, m);
			}
			return r;
		}
	};
	function cubicBezier(t, e, s, i, r) {
		const n = 1 - t;
		return n * n * n * e + 3 * n * n * t * s + 3 * n * t * t * i + t * t * t * r;
	}
	function cubicBezierSlope(t, e, s, i, r) {
		const n = 1 - t;
		return 3 * n * n * (s - e) + 6 * n * t * (i - s) + 3 * t * t * (r - i);
	}
	function solveBezierParameter(t, e, s, i, r) {
		let n = (t - e) / (r - e);
		for (let a = 0; a < 8; a++) {
			const a = cubicBezier(n, e, s, i, r) - t;
			if (Math.abs(a) < 1e-10) break;
			const h = cubicBezierSlope(n, e, s, i, r);
			if (Math.abs(h) < 1e-10) break;
			n = Math.max(0, Math.min(1, n - a / h));
		}
		return n;
	}
	var yt = class {
		constructor(t, e, s, i) {
			if (void 0 === t) throw new Error("THREE.KeyframeTrack: track name is undefined");
			if (void 0 === e || 0 === e.length) throw new Error("THREE.KeyframeTrack: no keyframes in track named " + t);
			this.name = t, this.times = convertArray(e, this.TimeBufferType), this.values = convertArray(s, this.ValueBufferType), this.setInterpolation(i || this.DefaultInterpolation);
		}
		static toJSON(t) {
			const e = t.constructor;
			let s;
			if (e.toJSON !== this.toJSON) s = e.toJSON(t);
			else {
				s = {
					name: t.name,
					times: convertArray(t.times, Array),
					values: convertArray(t.values, Array)
				};
				const e = t.getInterpolation();
				e !== t.DefaultInterpolation && (s.interpolation = e), hasTangents(t.settings) && (s.settings = {
					inTangents: convertArray(t.settings.inTangents, Array),
					outTangents: convertArray(t.settings.outTangents, Array)
				});
			}
			return s.type = t.ValueTypeName, s;
		}
		InterpolantFactoryMethodDiscrete(t) {
			return new pt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodLinear(t) {
			return new dt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodSmooth(t) {
			return new ct(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodBezier(t) {
			const e = new mt(this.times, this.values, this.getValueSize(), t);
			return this.settings && (e.inTangents = this.settings.inTangents, e.outTangents = this.settings.outTangents), e;
		}
		setInterpolation(t) {
			let r;
			switch (t) {
				case e:
					r = this.InterpolantFactoryMethodDiscrete;
					break;
				case s:
					r = this.InterpolantFactoryMethodLinear;
					break;
				case i:
					r = this.InterpolantFactoryMethodSmooth;
					break;
				case 2303: r = this.InterpolantFactoryMethodBezier;
			}
			if (void 0 === r) {
				const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (void 0 === this.createInterpolant) {
					if (t === this.DefaultInterpolation) throw new Error(e);
					this.setInterpolation(this.DefaultInterpolation);
				}
				return warn("KeyframeTrack:", e), this;
			}
			return this.createInterpolant = r, this;
		}
		getInterpolation() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete: return e;
				case this.InterpolantFactoryMethodLinear: return s;
				case this.InterpolantFactoryMethodSmooth: return i;
				case this.InterpolantFactoryMethodBezier: return 2303;
			}
		}
		getValueSize() {
			return this.values.length / this.times.length;
		}
		shift(t) {
			if (0 !== t) {
				const e = this.times;
				for (let s = 0, i = e.length; s !== i; ++s) e[s] += t;
				hasTangents(this.settings) && (shiftTangentTimes(this.settings.inTangents, t), shiftTangentTimes(this.settings.outTangents, t));
			}
			return this;
		}
		scale(t) {
			if (1 !== t) {
				const e = this.times;
				for (let s = 0, i = e.length; s !== i; ++s) e[s] *= t;
				hasTangents(this.settings) && (scaleTangentTimes(this.settings.inTangents, t), scaleTangentTimes(this.settings.outTangents, t));
			}
			return this;
		}
		trim(t, e) {
			const s = this.times, i = s.length;
			let r = 0, n = i - 1;
			for (; r !== i && s[r] < t;) ++r;
			for (; -1 !== n && s[n] > e;) --n;
			if (++n, 0 !== r || n !== i) {
				r >= n && (n = Math.max(n, 1), r = n - 1);
				const t = this.getValueSize();
				this.times = s.slice(r, n), this.values = this.values.slice(r * t, n * t);
			}
			return this;
		}
		validate() {
			let t = !0;
			const e = this.getValueSize();
			e - Math.floor(e) !== 0 && (error("KeyframeTrack: Invalid value size in track.", this), t = !1);
			const s = this.times, i = this.values, r = s.length;
			0 === r && (error("KeyframeTrack: Track is empty.", this), t = !1);
			let n = null;
			for (let a = 0; a !== r; a++) {
				const e = s[a];
				if ("number" == typeof e && isNaN(e)) {
					error("KeyframeTrack: Time is not a valid number.", this, a, e), t = !1;
					break;
				}
				if (null !== n && n > e) {
					error("KeyframeTrack: Out of order keys.", this, a, e, n), t = !1;
					break;
				}
				n = e;
			}
			if (void 0 !== i && function isTypedArray(t) {
				return ArrayBuffer.isView(t) && !(t instanceof DataView);
			}(i)) for (let a = 0, h = i.length; a !== h; ++a) {
				const e = i[a];
				if (isNaN(e)) {
					error("KeyframeTrack: Value is not a valid number.", this, a, e), t = !1;
					break;
				}
			}
			return t;
		}
		optimize() {
			const t = this.times.slice(), e = this.values.slice(), s = this.getValueSize(), r = this.getInterpolation() === i, n = t.length - 1;
			let a = 1;
			for (let i = 1; i < n; ++i) {
				let n = !1;
				const h = t[i];
				if (h !== t[i + 1] && (1 !== i || h !== t[0])) if (r) n = !0;
				else {
					const t = i * s, r = t - s, a = t + s;
					for (let i = 0; i !== s; ++i) {
						const s = e[t + i];
						if (s !== e[r + i] || s !== e[a + i]) {
							n = !0;
							break;
						}
					}
				}
				if (n) {
					if (i !== a) {
						t[a] = t[i];
						const r = i * s, n = a * s;
						for (let t = 0; t !== s; ++t) e[n + t] = e[r + t];
					}
					++a;
				}
			}
			if (n > 0) {
				t[a] = t[n];
				for (let t = n * s, i = a * s, r = 0; r !== s; ++r) e[i + r] = e[t + r];
				++a;
			}
			return a !== t.length ? (this.times = t.slice(0, a), this.values = e.slice(0, a * s)) : (this.times = t, this.values = e), this;
		}
		clone() {
			const t = this.times.slice(), e = this.values.slice(), s = new this.constructor(this.name, t, e);
			return s.createInterpolant = this.createInterpolant, hasTangents(this.settings) && (s.settings = {
				inTangents: this.settings.inTangents.slice(),
				outTangents: this.settings.outTangents.slice()
			}), s;
		}
	};
	function shiftTangentTimes(t, e) {
		for (let s = 0, i = t.length; s !== i; s += 2) t[s] += e;
	}
	function scaleTangentTimes(t, e) {
		for (let s = 0, i = t.length; s !== i; s += 2) t[s] *= e;
	}
	yt.prototype.ValueTypeName = "", yt.prototype.TimeBufferType = Float32Array, yt.prototype.ValueBufferType = Float32Array, yt.prototype.DefaultInterpolation = s;
	var gt = class extends yt {
		constructor(t, e, s) {
			super(t, e, s);
		}
	};
	gt.prototype.ValueTypeName = "bool", gt.prototype.ValueBufferType = Array, gt.prototype.DefaultInterpolation = e, gt.prototype.InterpolantFactoryMethodLinear = void 0, gt.prototype.InterpolantFactoryMethodSmooth = void 0;
	(class extends yt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "color";
	(class extends yt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "number";
	var xt = class extends ut {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = (s - e) / (i - e);
			let o = t * a;
			for (let l = o + a; o !== l; o += 4) y.slerpFlat(r, 0, n, o - a, n, o, h);
			return r;
		}
	}, ft = class extends yt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		InterpolantFactoryMethodLinear(t) {
			return new xt(this.times, this.values, this.getValueSize(), t);
		}
	};
	ft.prototype.ValueTypeName = "quaternion", ft.prototype.InterpolantFactoryMethodSmooth = void 0;
	var Mt = class extends yt {
		constructor(t, e, s) {
			super(t, e, s);
		}
	};
	Mt.prototype.ValueTypeName = "string", Mt.prototype.ValueBufferType = Array, Mt.prototype.DefaultInterpolation = e, Mt.prototype.InterpolantFactoryMethodLinear = void 0, Mt.prototype.InterpolantFactoryMethodSmooth = void 0;
	(class extends yt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "vector";
	const _t = /* @__PURE__ */ new RegExp("[\\[\\]\\.:\\/]", "g"), bt = "[^\\[\\]\\.:\\/]", wt = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", zt = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", bt) + /(WCOD+)?/.source.replace("WCOD", wt) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", bt) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", bt) + "$"), vt = [
		"material",
		"materials",
		"bones",
		"map"
	];
	var St = class PropertyBinding {
		constructor(t, e, s) {
			this.path = e, this.parsedPath = s || PropertyBinding.parseTrackName(e), this.node = PropertyBinding.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
		static create(t, e, s) {
			return t && t.isAnimationObjectGroup ? new PropertyBinding.Composite(t, e, s) : new PropertyBinding(t, e, s);
		}
		static sanitizeNodeName(t) {
			return t.replace(/\s/g, "_").replace(_t, "");
		}
		static parseTrackName(t) {
			const e = zt.exec(t);
			if (null === e) throw new Error("THREE.PropertyBinding: Cannot parse trackName: " + t);
			const s = {
				nodeName: e[2],
				objectName: e[3],
				objectIndex: e[4],
				propertyName: e[5],
				propertyIndex: e[6]
			}, i = s.nodeName && s.nodeName.lastIndexOf(".");
			if (void 0 !== i && -1 !== i) {
				const t = s.nodeName.substring(i + 1);
				-1 !== vt.indexOf(t) && (s.nodeName = s.nodeName.substring(0, i), s.objectName = t);
			}
			if (null === s.propertyName || 0 === s.propertyName.length) throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: " + t);
			return s;
		}
		static findNode(t, e) {
			if (void 0 === e || "" === e || "." === e || -1 === e || e === t.name || e === t.uuid) return t;
			if (t.skeleton) {
				const s = t.skeleton.getBoneByName(e);
				if (void 0 !== s) return s;
			}
			if (t.children) {
				const searchNodeSubtree = function(t) {
					for (let s = 0; s < t.length; s++) {
						const i = t[s];
						if (i.name === e || i.uuid === e) return i;
						const r = searchNodeSubtree(i.children);
						if (r) return r;
					}
					return null;
				}, s = searchNodeSubtree(t.children);
				if (s) return s;
			}
			return null;
		}
		_getValue_unavailable() {}
		_setValue_unavailable() {}
		_getValue_direct(t, e) {
			t[e] = this.targetObject[this.propertyName];
		}
		_getValue_array(t, e) {
			const s = this.resolvedProperty;
			for (let i = 0, r = s.length; i !== r; ++i) t[e++] = s[i];
		}
		_getValue_arrayElement(t, e) {
			t[e] = this.resolvedProperty[this.propertyIndex];
		}
		_getValue_toArray(t, e) {
			this.resolvedProperty.toArray(t, e);
		}
		_setValue_direct(t, e) {
			this.targetObject[this.propertyName] = t[e];
		}
		_setValue_direct_setNeedsUpdate(t, e) {
			this.targetObject[this.propertyName] = t[e], this.targetObject.needsUpdate = !0;
		}
		_setValue_direct_setMatrixWorldNeedsUpdate(t, e) {
			this.targetObject[this.propertyName] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_array(t, e) {
			const s = this.resolvedProperty;
			for (let i = 0, r = s.length; i !== r; ++i) s[i] = t[e++];
		}
		_setValue_array_setNeedsUpdate(t, e) {
			const s = this.resolvedProperty;
			for (let i = 0, r = s.length; i !== r; ++i) s[i] = t[e++];
			this.targetObject.needsUpdate = !0;
		}
		_setValue_array_setMatrixWorldNeedsUpdate(t, e) {
			const s = this.resolvedProperty;
			for (let i = 0, r = s.length; i !== r; ++i) s[i] = t[e++];
			this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_arrayElement(t, e) {
			this.resolvedProperty[this.propertyIndex] = t[e];
		}
		_setValue_arrayElement_setNeedsUpdate(t, e) {
			this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.needsUpdate = !0;
		}
		_setValue_arrayElement_setMatrixWorldNeedsUpdate(t, e) {
			this.resolvedProperty[this.propertyIndex] = t[e], this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_setValue_fromArray(t, e) {
			this.resolvedProperty.fromArray(t, e);
		}
		_setValue_fromArray_setNeedsUpdate(t, e) {
			this.resolvedProperty.fromArray(t, e), this.targetObject.needsUpdate = !0;
		}
		_setValue_fromArray_setMatrixWorldNeedsUpdate(t, e) {
			this.resolvedProperty.fromArray(t, e), this.targetObject.matrixWorldNeedsUpdate = !0;
		}
		_getValue_unbound(t, e) {
			this.bind(), this.getValue(t, e);
		}
		_setValue_unbound(t, e) {
			this.bind(), this.setValue(t, e);
		}
		bind() {
			let t = this.node;
			const e = this.parsedPath, s = e.objectName, i = e.propertyName;
			let r = e.propertyIndex;
			if (t || (t = PropertyBinding.findNode(this.rootNode, e.nodeName), this.node = t), this.getValue = this._getValue_unavailable, this.setValue = this._setValue_unavailable, !t) return void warn("PropertyBinding: No target node found for track: " + this.path + ".");
			if (s) {
				let i = e.objectIndex;
				switch (s) {
					case "materials":
						if (!t.material) return void error("PropertyBinding: Can not bind to material as node does not have a material.", this);
						if (!t.material.materials) return void error("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
						t = t.material.materials;
						break;
					case "bones":
						if (!t.skeleton) return void error("PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
						t = t.skeleton.bones;
						for (let e = 0; e < t.length; e++) if (t[e].name === i) {
							i = e;
							break;
						}
						break;
					case "map":
						if ("map" in t) {
							t = t.map;
							break;
						}
						if (!t.material) return void error("PropertyBinding: Can not bind to material as node does not have a material.", this);
						if (!t.material.map) return void error("PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
						t = t.material.map;
						break;
					default:
						if (void 0 === t[s]) return void error("PropertyBinding: Can not bind to objectName of node undefined.", this);
						t = t[s];
				}
				if (void 0 !== i) {
					if (void 0 === t[i]) return void error("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, t);
					t = t[i];
				}
			}
			const n = t[i];
			if (void 0 === n) {
				error("PropertyBinding: Trying to update property for track: " + e.nodeName + "." + i + " but it wasn't found.", t);
				return;
			}
			let a = this.Versioning.None;
			this.targetObject = t, !0 === t.isMaterial ? a = this.Versioning.NeedsUpdate : !0 === t.isObject3D && (a = this.Versioning.MatrixWorldNeedsUpdate);
			let h = this.BindingType.Direct;
			if (void 0 !== r) {
				if ("morphTargetInfluences" === i) {
					if (!t.geometry) return void error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					if (!t.geometry.morphAttributes) return void error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
				}
				h = this.BindingType.ArrayElement, this.resolvedProperty = n, this.propertyIndex = r;
			} else void 0 !== n.fromArray && void 0 !== n.toArray ? (h = this.BindingType.HasFromToArray, this.resolvedProperty = n) : Array.isArray(n) ? (h = this.BindingType.EntireArray, this.resolvedProperty = n) : this.propertyName = i;
			this.getValue = this.GetterByBindingType[h], this.setValue = this.SetterByBindingTypeAndVersioning[h][a];
		}
		unbind() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
	};
	St.Composite = class {
		constructor(t, e, s) {
			const i = s || St.parseTrackName(e);
			this._targetGroup = t, this._bindings = t.subscribe_(e, i);
		}
		getValue(t, e) {
			this.bind();
			const s = this._targetGroup.nCachedObjects_, i = this._bindings[s];
			void 0 !== i && i.getValue(t, e);
		}
		setValue(t, e) {
			const s = this._bindings;
			for (let i = this._targetGroup.nCachedObjects_, r = s.length; i !== r; ++i) s[i].setValue(t, e);
		}
		bind() {
			const t = this._bindings;
			for (let e = this._targetGroup.nCachedObjects_, s = t.length; e !== s; ++e) t[e].bind();
		}
		unbind() {
			const t = this._bindings;
			for (let e = this._targetGroup.nCachedObjects_, s = t.length; e !== s; ++e) t[e].unbind();
		}
	}, St.prototype.BindingType = {
		Direct: 0,
		EntireArray: 1,
		ArrayElement: 2,
		HasFromToArray: 3
	}, St.prototype.Versioning = {
		None: 0,
		NeedsUpdate: 1,
		MatrixWorldNeedsUpdate: 2
	}, St.prototype.GetterByBindingType = [
		St.prototype._getValue_direct,
		St.prototype._getValue_array,
		St.prototype._getValue_arrayElement,
		St.prototype._getValue_toArray
	], St.prototype.SetterByBindingTypeAndVersioning = [
		[
			St.prototype._setValue_direct,
			St.prototype._setValue_direct_setNeedsUpdate,
			St.prototype._setValue_direct_setMatrixWorldNeedsUpdate
		],
		[
			St.prototype._setValue_array,
			St.prototype._setValue_array_setNeedsUpdate,
			St.prototype._setValue_array_setMatrixWorldNeedsUpdate
		],
		[
			St.prototype._setValue_arrayElement,
			St.prototype._setValue_arrayElement_setNeedsUpdate,
			St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
		],
		[
			St.prototype._setValue_fromArray,
			St.prototype._setValue_fromArray_setNeedsUpdate,
			St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
		]
	];
	(class {
		static {
			this.prototype.isMatrix2 = !0;
		}
		constructor(t, e, s, i) {
			this.elements = [
				1,
				0,
				0,
				1
			], void 0 !== t && this.set(t, e, s, i);
		}
		identity() {
			return this.set(1, 0, 0, 1), this;
		}
		fromArray(t, e = 0) {
			for (let s = 0; s < 4; s++) this.elements[s] = t[s + e];
			return this;
		}
		set(t, e, s, i) {
			const r = this.elements;
			return r[0] = t, r[2] = e, r[1] = s, r[3] = i, this;
		}
	});
	"undefined" != typeof __THREE_DEVTOOLS__ && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register", { detail: { revision: "187" } })), "undefined" != typeof window && (window.__THREE__ ? warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = "187");
	const Tt = new g(-14.5, -2.5, -27.5), kt = new g(14.5, 11, 16.5);
	new g().subVectors(kt, Tt);
	function smin(t, e, s) {
		if (s <= 1e-5) return Math.min(t, e);
		const i = p.clamp(.5 + .5 * (e - t) / s, 0, 1);
		return t * i + e * (1 - i) - s * i * (1 - i);
	}
	function smax(t, e, s) {
		return -smin(-t, -e, s);
	}
	function leafKey(t, e, s, i) {
		const r = 1 + (1 << i);
		return t + r * (e + r * s);
	}
	function contourOctree(t, e, s, i, r, n = {
		from: 0,
		to: 1 << i,
		maxLeaf: 1 << i
	}) {
		const a = s / (1 << i), { from: h, to: o, maxLeaf: l } = n, u = [], c = [], d = [], p = [], m = [], add = (t, e, s, i) => (u.push(t), c.push(e), d.push(s), p.push(i), m.push(-1), u.length - 1), y = 1 + (1 << i);
		let g = 65536, x = new Float64Array(g).fill(-1), f = new Float32Array(g), M = 0;
		const slot = (t, e, s, i, r) => {
			const n = r.length - 1;
			let a = (Math.imul(t, 2654435761) ^ Math.imul(e, 2246822519) ^ Math.imul(s, 3266489917)) & n;
			for (; r[a] !== i && -1 !== r[a];) a = a + 1 & n;
			return a;
		}, corner = (s, i, r) => {
			const n = s + y * (i + y * r), h = slot(s, i, r, n, x);
			if (x[h] === n) return f[h];
			const o = t.distance(e.x + s * a, e.y + i * a, e.z + r * a);
			if (x[h] = n, f[h] = o, 2 * ++M > g) {
				const t = x, e = f;
				g *= 2, x = new Float64Array(g).fill(-1), f = new Float32Array(g);
				for (let s = 0; s < t.length; s++) {
					const i = t[s];
					if (-1 === i) continue;
					const r = i % y, n = Math.floor(i / y) % y, a = Math.floor(i / (y * y)), h = slot(r, n, a, i, x);
					x[h] = i, f[h] = e[s];
				}
			}
			return o;
		};
		let _ = 0;
		const b = /* @__PURE__ */ new Float32Array(8), cornersOf = () => {
			const t = p[_], e = u[_], s = c[_], i = d[_];
			for (let r = 0; r < 8; r++) b[r] = corner(e + (1 & r) * t, s + (r >> 1 & 1) * t, i + (r >> 2) * t);
			return b;
		}, build = (s, i) => {
			const r = p[s], n = d[s];
			if (!(n < o && n + r > h) && n + r !== h && n !== o) return;
			if (1 === r) return;
			_ = s;
			const y = t.visit(e.x + u[s] * a, e.y + c[s] * a, e.z + n * a, r * a, i, cornersOf);
			if (y || (m[s] = -2), !y || !y.split && r <= l) return;
			const g = r >> 1, x = u.length;
			for (let t = 0; t < 8; t++) add(u[s] + (1 & t) * g, c[s] + (t >> 1 & 1) * g, d[s] + (t >> 2) * g, g);
			m[s] = x;
			for (let t = 0; t < 8; t++) build(x + t, y.context);
		};
		build(add(0, 0, 0, 1 << i), r);
		const child = (t, e) => m[t] < 0 ? t : m[t] + e, leaf = (t) => m[t] < 0, empty = (t) => -2 === m[t], owned = (t) => d[t] >= h && d[t] < o, w = /* @__PURE__ */ new Map(), z = [], refer = (t) => {
			const e = leafKey(u[t], c[t], d[t], i);
			let s = w.get(e);
			return void 0 === s && (s = z.length, w.set(e, s), z.push(e)), -2 - s;
		}, v = new Int32Array(u.length).fill(-1), S = [], T = [], k = [], A = [], accumulate = (t, e, s, i) => {
			let r = v[t];
			return r < 0 && (r = v[t] = T.length, S.push(0, 0, 0), T.push(0), k.push(t)), S[3 * r] += e, S[3 * r + 1] += s, S[3 * r + 2] += i, T[r]++, r;
		}, C = [
			0,
			0,
			0
		], F = [
			0,
			0,
			0
		], E = /* @__PURE__ */ new Int32Array(4), V = /* @__PURE__ */ new Int32Array(4), edgeProc = (s, i, r, n, l) => {
			if (leaf(s) && leaf(i) && leaf(r) && leaf(n)) return void ((s, i, r, n, l) => {
				if (empty(s) || empty(i) || empty(r) || empty(n)) return;
				let m = 0, y = s;
				p[i] < p[y] && (m = 1, y = i), p[r] < p[y] && (m = 2, y = r), p[n] < p[y] && (m = 3, y = n);
				const g = p[y], x = (l + 1) % 3, f = (l + 2) % 3;
				C[0] = u[y], C[1] = c[y], C[2] = d[y], C[x] += (1 - (1 & m)) * g, C[f] += (1 - (m >> 1)) * g, F[0] = C[0], F[1] = C[1], F[2] = C[2], F[l] += g;
				const M = C[2] + F[2];
				if (M < 2 * h || M > 2 * o) return;
				if (t.emit && !t.emit(e.x + .5 * (C[0] + F[0]) * a, e.y + .5 * (C[1] + F[1]) * a, e.z + .5 * (C[2] + F[2]) * a)) return;
				const _ = corner(C[0], C[1], C[2]), b = corner(F[0], F[1], F[2]);
				if (_ >= 0 == b >= 0) return;
				const w = _ / (_ - b), z = e.x + (C[0] + (F[0] - C[0]) * w) * a, v = e.y + (C[1] + (F[1] - C[1]) * w) * a, S = e.z + (C[2] + (F[2] - C[2]) * w) * a;
				E[0] = s, E[1] = i, E[2] = n, E[3] = r;
				const T = M < 2 * o;
				let k = 0;
				for (let t = 0; t < 4; t++) {
					const e = E[t];
					e !== E[(t + 3) % 4] && (V[k++] = owned(e) ? accumulate(e, z, v, S) : T ? refer(e) : 0);
				}
				k < 3 || !T || (_ >= 0 ? 4 === k ? A.push(V[3], V[2], V[1], V[0]) : A.push(V[2], V[1], V[0], -1) : A.push(V[0], V[1], V[2], 4 === k ? V[3] : -1));
			})(s, i, r, n, l);
			const m = 1 << (l + 1) % 3, y = 1 << (l + 2) % 3;
			for (let t = 0; t < 2; t++) {
				const e = t << l;
				edgeProc(child(s, e | m | y), child(i, e | y), child(r, e | m), child(n, e), l);
			}
		}, faceProc = (t, e, s) => {
			if (leaf(t) && leaf(e)) return;
			const i = 1 << s, r = (s + 1) % 3, n = (s + 2) % 3, a = 1 << r, h = 1 << n;
			for (let o = 0; o < 2; o++) for (let r = 0; r < 2; r++) {
				const n = (o ? a : 0) | (r ? h : 0);
				faceProc(child(t, i | n), child(e, n), s);
			}
			for (let o = 0; o < 2; o++) {
				const s = o ? a : 0;
				edgeProc(child(t, i | s), child(t, i | s | h), child(e, s), child(e, s | h), r);
			}
			for (let o = 0; o < 2; o++) {
				const s = o ? h : 0;
				edgeProc(child(t, i | s), child(e, s), child(t, i | s | a), child(e, s | a), n);
			}
		}, cellProc = (t) => {
			if (!leaf(t)) {
				for (let e = 0; e < 8; e++) cellProc(child(t, e));
				for (let e = 0; e < 3; e++) for (let s = 0; s < 8; s++) s & 1 << e || faceProc(child(t, s), child(t, s | 1 << e), e);
				for (let e = 0; e < 3; e++) {
					const s = 1 << (e + 1) % 3, i = 1 << (e + 2) % 3;
					for (let r = 0; r < 2; r++) {
						const n = r << e;
						edgeProc(child(t, n), child(t, n | s), child(t, n | i), child(t, n | s | i), e);
					}
				}
			}
		};
		cellProc(0);
		const I = T.length, N = new Float32Array(3 * I), O = new Float32Array(4 * I), B = [], U = [];
		for (let R = 0; R < I; R++) {
			N[3 * R] = S[3 * R] / T[R], N[3 * R + 1] = S[3 * R + 1] / T[R], N[3 * R + 2] = S[3 * R + 2] / T[R];
			const t = k[R];
			O[4 * R] = e.x + u[t] * a, O[4 * R + 1] = e.y + c[t] * a, O[4 * R + 2] = e.z + d[t] * a, O[4 * R + 3] = p[t] * a, d[t] !== h && d[t] + p[t] !== o || (B.push(leafKey(u[t], c[t], d[t], i)), U.push(R));
		}
		return {
			positions: N,
			cells: O,
			quads: new Int32Array(A),
			foreign: new Float64Array(z),
			boundaryKeys: new Float64Array(B),
			boundaryVertices: new Int32Array(U)
		};
	}
	function triangulateQuads(t, e, s) {
		const i = new Uint32Array(1.5 * e.length);
		let r = 0;
		const n = t, a = s, dist2 = (t, e) => {
			const s = n[3 * t] - n[3 * e], i = n[3 * t + 1] - n[3 * e + 1], r = n[3 * t + 2] - n[3 * e + 2];
			return s * s + i * i + r * r;
		}, bend = (t, e) => a ? Math.abs((a[3 * t] - a[3 * e]) * (n[3 * e] - n[3 * t]) + (a[3 * t + 1] - a[3 * e + 1]) * (n[3 * e + 1] - n[3 * t + 1]) + (a[3 * t + 2] - a[3 * e + 2]) * (n[3 * e + 2] - n[3 * t + 2])) : 0, facing = (t, e, s) => {
			if (!a) return !0;
			const i = n[3 * e] - n[3 * t], r = n[3 * e + 1] - n[3 * t + 1], h = n[3 * e + 2] - n[3 * t + 2], o = n[3 * s] - n[3 * t], l = n[3 * s + 1] - n[3 * t + 1], u = n[3 * s + 2] - n[3 * t + 2];
			return (r * u - h * l) * (a[3 * t] + a[3 * e] + a[3 * s]) + (h * o - i * u) * (a[3 * t + 1] + a[3 * e + 1] + a[3 * s + 1]) + (i * l - r * o) * (a[3 * t + 2] + a[3 * e + 2] + a[3 * s + 2]) > 0;
		};
		for (let h = 0; h < e.length; h += 4) {
			const t = e[h], s = e[h + 1], n = e[h + 2], a = e[h + 3];
			if (a < 0) {
				i[r++] = t, i[r++] = s, i[r++] = n;
				continue;
			}
			let o = bend(t, n) + .02 * Math.sqrt(dist2(t, n)) <= bend(s, a) + .02 * Math.sqrt(dist2(s, a));
			const l = facing(t, s, n) && facing(t, n, a);
			l !== (facing(s, n, a) && facing(s, a, t)) && (o = l), o ? (i[r++] = t, i[r++] = s, i[r++] = n, i[r++] = t, i[r++] = n, i[r++] = a) : (i[r++] = s, i[r++] = n, i[r++] = a, i[r++] = s, i[r++] = a, i[r++] = t);
		}
		return i.slice(0, r);
	}
	function roundCone(t, e, s, i, r, n, a, h, o, l, u) {
		const c = h - i, d = o - r, p = l - n, m = c * c + d * d + p * p, y = a - u, g = m - y * y, x = t - i, f = e - r, M = s - n;
		if (g <= 1e-12) return Math.min(Math.hypot(x, f, M) - a, Math.hypot(t - h, e - o, s - l) - u);
		const _ = 1 / m, b = x * c + f * d + M * p, w = b - m, z = x * m - c * b, v = f * m - d * b, S = M * m - p * b, T = z * z + v * v + S * S, k = b * b * m, A = w * w * m, C = Math.sign(y) * y * y * T;
		return Math.sign(w) * g * A > C ? Math.sqrt(T + A) * _ - u : Math.sign(b) * g * k < C ? Math.sqrt(T + k) * _ - a : (Math.sqrt(T * g * _) + b * y) * _ - a;
	}
	function ellipsoid(t, e, s, i, r, n) {
		const a = Math.hypot(t / i, e / r, s / n);
		if (a < 1) return (a - 1) * Math.min(i, r, n);
		return a * (a - 1) / Math.hypot(t / (i * i), e / (r * r), s / (n * n));
	}
	const At = [
		.04,
		.1,
		.2,
		.34
	], Ct = [
		.4,
		.3,
		.2,
		.1
	];
	function clamp01(t) {
		return Math.min(1, Math.max(0, t));
	}
	function smoothstep(t, e, s) {
		const i = clamp01((s - t) / (e - t));
		return i * i * (3 - 2 * i);
	}
	function lattice(t, e, s) {
		let i = Math.imul(t, 668265261) ^ Math.imul(e, 374761393) ^ Math.imul(s, 1640531527);
		return i = Math.imul(i ^ i >>> 15, 2246822507), i = Math.imul(i ^ i >>> 13, 3266489909), ((i ^ i >>> 16) >>> 0) / 2147483648 - 1;
	}
	function noise3(t, e, s) {
		const i = Math.floor(t), r = Math.floor(e), n = Math.floor(s), a = t - i, h = e - r, o = s - n, l = a * a * a * (a * (6 * a - 15) + 10), u = h * h * h * (h * (6 * h - 15) + 10), c = o * o * o * (o * (6 * o - 15) + 10), lerp = (t, e, s) => t + (e - t) * s;
		return lerp(lerp(lerp(lattice(i, r, n), lattice(i + 1, r, n), l), lerp(lattice(i, r + 1, n), lattice(i + 1, r + 1, n), l), u), lerp(lerp(lattice(i, r, n + 1), lattice(i + 1, r, n + 1), l), lerp(lattice(i, r + 1, n + 1), lattice(i + 1, r + 1, n + 1), l), u), c);
	}
	function fbm3(t, e, s, i) {
		let r = 0, n = 1, a = 0;
		for (let h = 0; h < i; h++) {
			const i = 2.03 ** h;
			r += n * noise3(t * i + 7.1 * h, e * i - 3.3 * h, s * i + 5.7 * h), a += n, n *= .5;
		}
		return r / a;
	}
	function roundBox(t, e, s, i, r, n, a) {
		const h = Math.abs(t) - i + a, o = Math.abs(e) - r + a, l = Math.abs(s) - n + a;
		return Math.hypot(Math.max(h, 0), Math.max(o, 0), Math.max(l, 0)) + Math.min(Math.max(h, o, l), 0) - a;
	}
	function bedding(t) {
		return clamp01(1 - .75 * Math.abs(t));
	}
	function plinth(t, e, s, i, r) {
		return roundBox(t, e + .08, s, i, .1, r, .04) - .008 * fbm3(3 * t, 3 * e, 3 * s, 2);
	}
	function ceilingSlab(t, e, s, i, r) {
		return roundBox(t, e - 2.12, s, i, .24, r, .08) - .035 * fbm3(2.1 * t + 1.3, 2.1 * e, 2.1 * s - .7, 3);
	}
	const Ft = 1.88, Et = [
		.3,
		.62,
		.94,
		1.27,
		1.6
	], Vt = [
		.02,
		-.05,
		.07,
		-.01,
		.09,
		-.03
	];
	const It = {
		name: "Wall",
		min: new g(-.95, -.2, -.67),
		max: new g(.95, 1.95, .33),
		cell: .015,
		focus: new g(0, .95, 0),
		radius: 1.1,
		hanging: !1,
		sample(t, e, s, i) {
			const r = function wallFlowstone(t, e) {
				if (e > 1.78) return 0;
				const s = .18 + .07 * Math.sin(2.7 * e), i = (t - s) / (.11 + .17 * clamp01((1.75 - e) / 1.75));
				if (Math.abs(i) >= 1) return 0;
				const r = (1 - i * i) ** 2, n = .72 + .28 * Math.cos(40 * (t - s) + 1.5 * e);
				let a = 1;
				for (const h of Et) {
					const t = (e - h + .05) / .05;
					a += .7 * Math.exp(-t * t);
				}
				return .05 * r * n * a * smoothstep(1.78, 1.55, e);
			}(t, e), a = smax((s - function wallFace(t, e) {
				let s = Vt[0];
				for (let i = 0; i < Et.length; i++) {
					const t = Et[i];
					s += (Vt[i + 1] - Vt[i]) * smoothstep(t - .035, t + .035, e);
					const r = (e - t) / .03;
					s -= .03 * Math.exp(-r * r);
				}
				return s + .05 * fbm3(1.4 * t, 1.4 * e, .37, 3) + .018 * noise3(4.1 * t + 2.3, 4.1 * e, 5.1);
			}(t, e) - r) / 2.4, roundBox(t, e - .875, s + .17, .9, 1.03, .45, .06), .05), h = smoothstep(.003, .02, r), o = Math.exp(-(((t - .2) / .3) ** 2)) * smoothstep(1.95, 1.3, e), l = 1 - smoothstep(-.05, .4, e);
			i.add(a, 0, bedding(i.ny) * (1 - h), .9 * h, 0, Math.max(.7 * h, .55 * o, .8 * l));
		}
	}, Nt = [
		{
			x: -.3,
			z: .05,
			length: .95,
			radius: .075,
			flutes: 7,
			phase: .3
		},
		{
			x: .12,
			z: -.18,
			length: .62,
			radius: .06,
			flutes: 6,
			phase: 1.1
		},
		{
			x: .4,
			z: .16,
			length: .36,
			radius: .045,
			flutes: 8,
			phase: 2
		},
		{
			x: -.04,
			z: .3,
			length: .22,
			radius: .035,
			flutes: 6,
			phase: .7
		},
		{
			x: .56,
			z: -.26,
			length: .5,
			radius: .05,
			flutes: 7,
			phase: 2.6
		},
		{
			x: -.56,
			z: -.24,
			length: .3,
			radius: .04,
			flutes: 6,
			phase: 1.7
		},
		{
			x: .26,
			z: .34,
			length: .26,
			radius: .016,
			flutes: 0,
			phase: 0
		},
		{
			x: -.16,
			z: -.36,
			length: .18,
			radius: .016,
			flutes: 0,
			phase: 0
		}
	], Ot = .015, Bt = 1.97;
	function stalactite(t, e, s, i, r) {
		const n = Ft - t.length;
		r.t = clamp01((Ft - s) / t.length);
		const a = Math.max(Math.hypot(e - t.x, i - t.z) - 1.4 * t.radius, n - s, s - Bt - 1.3 * t.radius);
		if (a > .25) return a;
		if (0 === t.flutes) return roundCone(e, s, i, t.x, Bt, t.z, t.radius, t.x, n + t.radius, t.z, t.radius);
		const h = t.radius, o = Ft - .15 * t.length, l = Ft - .6 * t.length, u = .45 * h + .008;
		let c = Math.min(roundCone(e, s, i, t.x, Bt, t.z, 1.25 * h, t.x, o, t.z, h), roundCone(e, s, i, t.x, o, t.z, h, t.x, l, t.z, u), roundCone(e, s, i, t.x, l, t.z, u, t.x, n + Ot, t.z, Ot));
		return c -= .09 * (h + (Ot - h) * r.t ** .8) * Math.cos(t.flutes * Math.atan2(i - t.z, e - t.x) + t.phase), c -= .002 * Math.sin(90 * s + t.phase) * (1 - r.t), c;
	}
	const Ut = { t: 0 }, Rt = {
		name: "Stalactites",
		min: new g(-.9, .85, -.7),
		max: new g(.9, 2.45, .7),
		cell: .0125,
		focus: new g(0, 1.45, 0),
		radius: .95,
		hanging: !0,
		sample(t, e, s, i) {
			i.add(ceilingSlab(t, e, s, .8, .6), 0, bedding(i.ny), 0, 0, .2);
			for (const r of Nt) {
				const n = stalactite(r, t, e, s, Ut);
				i.add(n, .03 + .5 * r.radius, .15, .92, 0, .45 + .55 * smoothstep(.45, .95, Ut.t));
			}
		}
	};
	function curtainCurve(t) {
		return .11 * Math.sin(6.2 * t + .5) + .035 * Math.sin(15 * t + 1.3);
	}
	const Pt = {
		v: 0,
		thickness: 0,
		edge: 0
	};
	function curtainDistance(t, e, s) {
		const i = .001, r = curtainCurve(t), n = (curtainCurve(t + i) - curtainCurve(t - i)) / (2 * i), a = function curtainDrop(t) {
			const e = 2 * Math.abs(((9 * t + .3) % 1 + 1) % 1 - .5);
			return (.72 + .07 * Math.sin(11 * t) + .08 * e) * (.55 + .45 * smoothstep(.56, .2, Math.abs(t)));
		}(t), h = Ft - a, o = .019 + .012 * (1 - Math.abs(Math.sin(t * Math.PI * 7)) ** 3) + .02 * smoothstep(1.5299999999999998, 1.93, e), l = Math.abs(s - r) / Math.sqrt(1 + n * n), u = h + o - e, c = Math.abs(t) - .56 + o, d = e - 2.02;
		return Pt.v = a > .001 ? clamp01((Ft - e) / a) : 0, Pt.thickness = 2 * o, Pt.edge = e - h, Math.hypot(l, Math.max(u, 0), Math.max(c, 0), Math.max(d, 0)) - o;
	}
	const Lt = {
		name: "Drapery",
		min: new g(-.85, .95, -.6),
		max: new g(.85, 2.45, .6),
		cell: .0125,
		focus: new g(0, 1.45, 0),
		radius: .9,
		hanging: !0,
		lipschitz: 4,
		sample(t, e, s, i) {
			i.add(ceilingSlab(t, e, s, .75, .5), 0, bedding(i.ny), 0, 0, .2);
			const r = curtainDistance(t, e, s);
			i.add(r, .08, .1, .96, 0, .55 + .4 * Pt.v, Pt.thickness, Pt.edge);
		}
	}, Dt = [
		[
			.05,
			.92,
			-.2,
			.42,
			.14,
			.28
		],
		[
			-.12,
			.72,
			-.04,
			.38,
			.17,
			.24
		],
		[
			.15,
			.55,
			.04,
			.36,
			.16,
			.24
		],
		[
			-.05,
			.36,
			.13,
			.42,
			.17,
			.26
		],
		[
			.1,
			.17,
			.24,
			.5,
			.15,
			.3
		],
		[
			0,
			.04,
			.38,
			.62,
			.07,
			.36
		]
	], Wt = {
		name: "Flowstone",
		min: new g(-.92, -.22, -.8),
		max: new g(.92, 1.15, .8),
		cell: .015,
		focus: new g(0, .5, .05),
		radius: .95,
		hanging: !1,
		sample(t, e, s, i) {
			const r = roundBox(t, e - .45, s + .38, .75, .55, .32, .1) - .03 * fbm3(1.8 * t, 1.8 * e, 1.8 * s + 4, 2);
			i.add(r, 0, bedding(i.ny), 0, 0, .3), i.add(plinth(t, e, s, .85, .7), .06, 0, 0, 0, .45);
			let n = 1 / 0;
			for (const h of Dt) {
				const i = ellipsoid(t - h[0], e - h[1], s - h[2], h[3], h[4], h[5]);
				n = n === 1 / 0 ? i : smin(n, i, .1);
			}
			n -= .008 * Math.cos(30 * t + 2 * Math.sin(5 * e)) * smoothstep(.05, .25, e);
			const a = 1 - smoothstep(.02, .18, e);
			i.add(n, .06, .05, .88, .45 * a, .6 + .3 * (1 - clamp01(e)));
		}
	}, qt = [
		[
			0,
			.1,
			0,
			.23,
			.14,
			.22
		],
		[
			.015,
			.29,
			.005,
			.185,
			.13,
			.18
		],
		[
			.03,
			.47,
			0,
			.155,
			.12,
			.15
		],
		[
			.04,
			.63,
			-.005,
			.125,
			.1,
			.125
		],
		[
			.045,
			.77,
			-.01,
			.1,
			.09,
			.1
		],
		[
			.05,
			.88,
			-.01,
			.075,
			.06,
			.075
		]
	], jt = [
		[
			-.42,
			.05,
			.22,
			.11,
			.08,
			.1
		],
		[
			-.42,
			.15,
			.22,
			.07,
			.07,
			.07
		],
		[
			.38,
			.04,
			-.25,
			.09,
			.06,
			.09
		]
	];
	function stack(t, e, s, i, r) {
		let n = 1 / 0;
		for (const a of i) {
			const i = ellipsoid(t - a[0], e - a[1], s - a[2], a[3], a[4], a[5]);
			n = n === 1 / 0 ? i : smin(n, i, r);
		}
		return n;
	}
	const Ht = {
		name: "Stalagmite",
		min: new g(-.8, -.22, -.65),
		max: new g(.8, 1, .65),
		cell: .0125,
		focus: new g(0, .45, 0),
		radius: .8,
		hanging: !1,
		sample(t, e, s, i) {
			const r = Math.exp(-((t - .15) ** 2 + (s - .25) ** 2) / .09);
			i.add(plinth(t, e, s, .75, .6), 0, .3 * bedding(i.ny), 0, 0, .3 + .55 * r);
			let n = stack(t, e, s, qt, .06) - .003 * Math.sin(70 * e);
			n = smax(n, .045 - Math.hypot(t - .05, e - .955, s + .01), .015), i.add(n, .08, .1, .92, 0, .55 + .35 * smoothstep(.65, 1, e / .95)), i.add(stack(t, e, s, jt, .04), .05, .1, .9, 0, .5);
		}
	};
	const Yt = [
		.2,
		.11,
		.03
	], Gt = { dish: 0 };
	function gourHeight(t, e) {
		const s = function gourEdge0(t) {
			return .07 * Math.sin(5.3 * t + .4) - .25 + .03 * Math.sin(13 * t + 2);
		}(t), i = function gourEdge1(t) {
			return .18 + .06 * Math.sin(4.1 * t + 2.2) + .03 * Math.sin(11.5 * t + .7);
		}(t);
		let r = Yt[0] + (Yt[1] - Yt[0]) * smoothstep(s, s + .07, e) + (Yt[2] - Yt[1]) * smoothstep(i, i + .07, e);
		const n = (e - s + .005) / .02, a = (e - i + .005) / .02;
		return r += .03 * Math.exp(-n * n) + .028 * Math.exp(-a * a), Gt.dish = .012 * smoothstep(.02, .15, s - e) + .012 * smoothstep(.02, .12, e - s - .07) * smoothstep(.02, .12, i - e) + .01 * smoothstep(.02, .12, e - i - .07), r - Gt.dish + .004 * noise3(9 * t, .5, 9 * e);
	}
	const Xt = {
		name: "Rimstone",
		min: new g(-.9, -.22, -.7),
		max: new g(.9, .42, .7),
		cell: .0125,
		focus: new g(0, .1, 0),
		radius: .85,
		hanging: !1,
		sample(t, e, s, i) {
			const r = smax((e - gourHeight(t, s)) / 2, roundBox(t, e - .1, s, .85, .27, .65, .04), .03);
			i.add(r, 0, .2 * bedding(i.ny), .5, .9, .5 + .5 * smoothstep(.002, .008, Gt.dish));
		}
	}, Zt = [
		[
			0,
			-1,
			0,
			.36
		],
		[
			.15,
			1,
			.1,
			.38
		],
		[
			1,
			.1,
			.2,
			.55
		],
		[
			-1,
			.15,
			.1,
			.5
		],
		[
			.2,
			.05,
			1,
			.42
		],
		[
			.1,
			.2,
			-1,
			.45
		],
		[
			.8,
			.7,
			.3,
			.6
		],
		[
			-.7,
			.75,
			-.4,
			.55
		],
		[
			.6,
			-.2,
			-.8,
			.55
		],
		[
			-.6,
			.4,
			.75,
			.55
		]
	].map(([t, e, s, i]) => {
		const r = Math.hypot(t, e, s);
		return [
			t / r,
			e / r,
			s / r,
			i
		];
	});
	function polytope(t, e, s) {
		let i = -1 / 0;
		for (const [r, n, a, h] of Zt) {
			const o = r * t + n * e + a * s - h;
			i = i === -1 / 0 ? o : smax(i, o, .035);
		}
		return i;
	}
	const Jt = [
		It,
		Rt,
		Lt,
		Wt,
		Ht,
		Xt,
		{
			name: "Boulder",
			min: new g(-1, -.22, -.8),
			max: new g(1, .85, .8),
			cell: .015,
			focus: new g(0, .3, 0),
			radius: .9,
			hanging: !1,
			sample(t, e, s, i) {
				i.add(plinth(t, e, s, .95, .75), 0, .3 * bedding(i.ny), 0, 0, .15), i.add(polytope(t, e - .33, s) - .012 * fbm3(3 * t, 3 * e, 3 * s, 2), .03, bedding(i.ny), 0, 0, .05);
				const r = .35;
				i.add(polytope((s - .32) / r, (e - .11) / r, (.62 - t) / r) * r, .02, bedding(i.ny), 0, 0, .08);
			}
		}
	], Qt = new class {
		d = 1 / 0;
		ny = 0;
		zones = !1;
		zone = /* @__PURE__ */ new Float32Array(4);
		sheet = /* @__PURE__ */ new Float32Array(2);
		begin(t, e = 0) {
			return this.d = 1 / 0, this.zones = t, this.ny = e, this;
		}
		add(t, e, s, i, r, n, a = 1, h = 0) {
			if (this.d === 1 / 0) return this.d = t, void (this.zones && (this.zone.set([
				s,
				i,
				r,
				n
			]), this.sheet.set([a, h])));
			if (this.zones) {
				const o = clamp01(.5 + .5 * (this.d - t) / (2 * Math.max(e, .001))), l = this.zone;
				l[0] += (s - l[0]) * o, l[1] += (i - l[1]) * o, l[2] += (r - l[2]) * o, l[3] += (n - l[3]) * o, this.sheet[0] += (a - this.sheet[0]) * o, this.sheet[1] += (h - this.sheet[1]) * o;
			}
			this.d = smin(this.d, t, e);
		}
	}();
	function sculptSpecimen(t) {
		const e = t.cell, s = Math.max(t.max.x - t.min.x, t.max.y - t.min.y, t.max.z - t.min.z) + 2 * e, i = Math.ceil(Math.log2(s / e)), r = e * 2 ** i, n = (t.lipschitz ?? 2) * Math.sqrt(3) / 2, distance = (e, s, i) => function specimenDistance(t, e, s, i) {
			return t.sample(e, s, i, Qt.begin(!1)), Qt.d;
		}(t, e, s, i), a = contourOctree({
			distance,
			visit(t, s, i, r) {
				const a = distance(t + r / 2, s + r / 2, i + r / 2);
				return Math.abs(a) > n * r ? null : {
					split: r > 1.001 * e,
					context: null
				};
			}
		}, {
			x: t.min.x - e,
			y: t.min.y - e,
			z: t.min.z - e
		}, r, i, null), h = Float32Array.from(a.positions), o = h.length / 3, l = new Float32Array(3 * o), u = new Float32Array(4 * o), c = new Float32Array(2 * o), d = new Float32Array(o), p = /* @__PURE__ */ new Float32Array(3), gradient = (t, e, s, i) => {
			const r = distance(t + i, e - i, s - i), n = distance(t - i, e - i, s + i), a = distance(t - i, e + i, s - i), h = distance(t + i, e + i, s + i);
			return p[0] = (r - n - a + h) / (4 * i), p[1] = (-r - n + a + h) / (4 * i), p[2] = (-r + n - a + h) / (4 * i), p[0] * p[0] + p[1] * p[1] + p[2] * p[2];
		};
		for (let m = 0; m < o; m++) {
			let s = h[3 * m], i = h[3 * m + 1], r = h[3 * m + 2];
			for (let t = 0; t < 3; t++) {
				const t = distance(s, i, r), n = gradient(s, i, r, .1 * e);
				if (n < 1e-10) break;
				const a = Math.max(-e, Math.min(e, t / Math.sqrt(n))) / Math.sqrt(n);
				s -= p[0] * a, i -= p[1] * a, r -= p[2] * a;
			}
			h.set([
				s,
				i,
				r
			], 3 * m);
			const n = Math.sqrt(gradient(s, i, r, .25 * e)) || 1, a = p[0] / n, o = p[1] / n, y = p[2] / n;
			l.set([
				a,
				o,
				y
			], 3 * m), t.sample(s, i, r, Qt.begin(!0, o)), u.set(Qt.zone, 4 * m), c.set(Qt.sheet, 2 * m);
			let g = 0;
			for (let t = 0; t < At.length; t++) {
				const e = At[t];
				g += Ct[t] * clamp01((e - distance(s + a * e, i + o * e, r + y * e)) / e);
			}
			d[m] = 1 - g;
		}
		return {
			positions: h,
			normals: l,
			index: triangulateQuads(h, a.quads, l),
			zones: u,
			sheets: c,
			occlusion: d
		};
	}
	self.onmessage = (t) => {
		const e = t.data, s = sculptSpecimen(Jt[e]), i = [
			s.positions,
			s.normals,
			s.index,
			s.zones,
			s.sheets,
			s.occlusion
		].map((t) => t.buffer);
		self.postMessage({
			index: e,
			mesh: s
		}, i);
	};
})();
