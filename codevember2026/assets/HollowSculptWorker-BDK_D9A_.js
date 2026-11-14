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
	let c = 1234567;
	const u = Math.PI / 180, m = 180 / Math.PI;
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
	function denormalize(t, e) {
		if (e.constructor === Float32Array) return t;
		const s = getNormalizationScale(e);
		if (void 0 === s) throw new Error("THREE.MathUtils: Invalid component type.");
		return Math.max(t / s, -1);
	}
	function normalize(t, e) {
		if (e.constructor === Float32Array) return t;
		const s = getNormalizationScale(e);
		if (void 0 === s) throw new Error("THREE.MathUtils: Invalid component type.");
		return Math.round(t * s);
	}
	const d = {
		DEG2RAD: u,
		RAD2DEG: m,
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
		smoothstep: function smoothstep$2(t, e, s) {
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
			void 0 !== t && (c = t);
			let e = c += 1831565813;
			return e = Math.imul(e ^ e >>> 15, 1 | e), e ^= e + Math.imul(e ^ e >>> 7, 61 | e), ((e ^ e >>> 14) >>> 0) / 4294967296;
		},
		degToRad: function degToRad(t) {
			return t * u;
		},
		radToDeg: function radToDeg(t) {
			return t * m;
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
			const n = Math.cos, a = Math.sin, h = n(s / 2), o = a(s / 2), l = n((e + i) / 2), c = a((e + i) / 2), u = n((e - i) / 2), m = a((e - i) / 2), d = n((i - e) / 2), p = a((i - e) / 2);
			switch (r) {
				case "XYX":
					t.set(h * c, o * u, o * m, h * l);
					break;
				case "YZY":
					t.set(o * m, h * c, o * u, h * l);
					break;
				case "ZXZ":
					t.set(o * u, o * m, h * c, h * l);
					break;
				case "XZX":
					t.set(h * c, o * p, o * d, h * l);
					break;
				case "YXY":
					t.set(o * d, h * c, o * p, h * l);
					break;
				case "ZYZ":
					t.set(o * p, o * d, h * c, h * l);
					break;
				default: warn("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + r);
			}
		},
		normalize,
		denormalize
	};
	var p = class {
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
			let h = s[i + 0], o = s[i + 1], l = s[i + 2], c = s[i + 3], u = r[n + 0], m = r[n + 1], d = r[n + 2], p = r[n + 3];
			if (c !== p || h !== u || o !== m || l !== d) {
				let t = h * u + o * m + l * d + c * p;
				t < 0 && (u = -u, m = -m, d = -d, p = -p, t = -t);
				let e = 1 - a;
				if (t < .9995) {
					const s = Math.acos(t), i = Math.sin(s);
					e = Math.sin(e * s) / i, h = h * e + u * (a = Math.sin(a * s) / i), o = o * e + m * a, l = l * e + d * a, c = c * e + p * a;
				} else {
					h = h * e + u * a, o = o * e + m * a, l = l * e + d * a, c = c * e + p * a;
					const t = 1 / Math.sqrt(h * h + o * o + l * l + c * c);
					h *= t, o *= t, l *= t, c *= t;
				}
			}
			t[e] = h, t[e + 1] = o, t[e + 2] = l, t[e + 3] = c;
		}
		static multiplyQuaternionsFlat(t, e, s, i, r, n) {
			const a = s[i], h = s[i + 1], o = s[i + 2], l = s[i + 3], c = r[n], u = r[n + 1], m = r[n + 2], d = r[n + 3];
			return t[e] = a * d + l * c + h * m - o * u, t[e + 1] = h * d + l * u + o * c - a * m, t[e + 2] = o * d + l * m + a * u - h * c, t[e + 3] = l * d - a * c - h * u - o * m, t;
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
			const s = t._x, i = t._y, r = t._z, n = t._order, a = Math.cos, h = Math.sin, o = a(s / 2), l = a(i / 2), c = a(r / 2), u = h(s / 2), m = h(i / 2), d = h(r / 2);
			switch (n) {
				case "XYZ":
					this._x = u * l * c + o * m * d, this._y = o * m * c - u * l * d, this._z = o * l * d + u * m * c, this._w = o * l * c - u * m * d;
					break;
				case "YXZ":
					this._x = u * l * c + o * m * d, this._y = o * m * c - u * l * d, this._z = o * l * d - u * m * c, this._w = o * l * c + u * m * d;
					break;
				case "ZXY":
					this._x = u * l * c - o * m * d, this._y = o * m * c + u * l * d, this._z = o * l * d + u * m * c, this._w = o * l * c - u * m * d;
					break;
				case "ZYX":
					this._x = u * l * c - o * m * d, this._y = o * m * c + u * l * d, this._z = o * l * d - u * m * c, this._w = o * l * c + u * m * d;
					break;
				case "YZX":
					this._x = u * l * c + o * m * d, this._y = o * m * c + u * l * d, this._z = o * l * d - u * m * c, this._w = o * l * c - u * m * d;
					break;
				case "XZY":
					this._x = u * l * c - o * m * d, this._y = o * m * c - u * l * d, this._z = o * l * d + u * m * c, this._w = o * l * c + u * m * d;
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
			const e = t.elements, s = e[0], i = e[4], r = e[8], n = e[1], a = e[5], h = e[9], o = e[2], l = e[6], c = e[10], u = s + a + c;
			if (u > 0) {
				const t = .5 / Math.sqrt(u + 1);
				this._w = .25 / t, this._x = (l - h) * t, this._y = (r - o) * t, this._z = (n - i) * t;
			} else if (s > a && s > c) {
				const t = 2 * Math.sqrt(1 + s - a - c);
				this._w = (l - h) / t, this._x = .25 * t, this._y = (i + n) / t, this._z = (r + o) / t;
			} else if (a > c) {
				const t = 2 * Math.sqrt(1 + a - s - c);
				this._w = (r - o) / t, this._x = (i + n) / t, this._y = .25 * t, this._z = (h + l) / t;
			} else {
				const t = 2 * Math.sqrt(1 + c - s - a);
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
	}, x = class {
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
			return this.applyQuaternion(g.setFromEuler(t));
		}
		applyAxisAngle(t, e) {
			return this.applyQuaternion(g.setFromAxisAngle(t, e));
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
			const e = this.x, s = this.y, i = this.z, r = t.x, n = t.y, a = t.z, h = t.w, o = 2 * (n * i - a * s), l = 2 * (a * e - r * i), c = 2 * (r * s - n * e);
			return this.x = e + h * o + n * c - a * l, this.y = s + h * l + a * o - r * c, this.z = i + h * c + r * l - n * o, this;
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
			return f.copy(this).projectOnVector(t), this.sub(f);
		}
		reflect(t) {
			return this.sub(f.copy(t).multiplyScalar(2 * this.dot(t)));
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
	const f = new x(), g = new y();
	var b = class {
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
			const s = t.elements, i = e.elements, r = this.elements, n = s[0], a = s[3], h = s[6], o = s[1], l = s[4], c = s[7], u = s[2], m = s[5], d = s[8], p = i[0], y = i[3], x = i[6], f = i[1], g = i[4], b = i[7], M = i[2], w = i[5], z = i[8];
			return r[0] = n * p + a * f + h * M, r[3] = n * y + a * g + h * w, r[6] = n * x + a * b + h * z, r[1] = o * p + l * f + c * M, r[4] = o * y + l * g + c * w, r[7] = o * x + l * b + c * z, r[2] = u * p + m * f + d * M, r[5] = u * y + m * g + d * w, r[8] = u * x + m * b + d * z, this;
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
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], h = t[6], o = t[7], l = t[8], c = l * n - a * o, u = a * h - l * r, m = o * r - n * h, d = e * c + s * u + i * m;
			if (0 === d) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const p = 1 / d;
			return t[0] = c * p, t[1] = (i * o - l * s) * p, t[2] = (a * s - i * n) * p, t[3] = u * p, t[4] = (l * e - i * h) * p, t[5] = (i * r - a * e) * p, t[6] = m * p, t[7] = (s * h - o * e) * p, t[8] = (n * e - s * r) * p, this;
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
			return warnOnce("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(M.makeScale(t, e)), this;
		}
		rotate(t) {
			return warnOnce("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(M.makeRotation(-t)), this;
		}
		translate(t, e) {
			return warnOnce("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(M.makeTranslation(t, e)), this;
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
	const M = new b(), w = new b().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), z = new b().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
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
				toXYZ: w,
				fromXYZ: z,
				luminanceCoefficients: s,
				workingColorSpaceConfig: { unpackColorSpace: r },
				outputColorSpaceConfig: { drawingBufferColorSpace: r }
			},
			[r]: {
				primaries: e,
				whitePoint: i,
				transfer: "srgb",
				toXYZ: w,
				fromXYZ: z,
				luminanceCoefficients: s,
				outputColorSpaceConfig: { drawingBufferColorSpace: r }
			}
		}), t;
	}
	const _ = createColorManagement();
	function SRGBToLinear(t) {
		return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
	}
	function LinearToSRGB(t) {
		return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
	}
	let S;
	var A = class {
		static getDataURL(t, e = "image/png") {
			if (/^data:/i.test(t.src)) return t.src;
			if ("undefined" == typeof HTMLCanvasElement) return t.src;
			let s;
			if (t instanceof HTMLCanvasElement) s = t;
			else {
				void 0 === S && (S = createElementNS("canvas")), S.width = t.width, S.height = t.height;
				const e = S.getContext("2d");
				t instanceof ImageData ? e.putImageData(t, 0, 0) : e.drawImage(t, 0, 0, t.width, t.height), s = S;
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
		return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? A.getDataURL(t) : t.data ? {
			data: Array.from(t.data),
			width: t.width,
			height: t.height,
			type: t.data.constructor.name
		} : (warn("Texture: Unable to serialize Texture."), {});
	}
	let B = 0;
	const C = new x();
	var R = class Texture extends o {
		constructor(t = Texture.DEFAULT_IMAGE, e = Texture.DEFAULT_MAPPING, s = 1001, i = 1001, r = 1006, n = 1008, a = 1023, h = 1009, o = Texture.DEFAULT_ANISOTROPY, l = "") {
			super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: B++ }), this.uuid = generateUUID(), this.name = "", this.source = new k(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = s, this.wrapT = i, this.magFilter = r, this.minFilter = n, this.anisotropy = o, this.format = a, this.internalFormat = null, this.type = h, this.offset = new p(0, 0), this.repeat = new p(1, 1), this.center = new p(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new b(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = l, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
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
	R.DEFAULT_IMAGE = null, R.DEFAULT_MAPPING = 300, R.DEFAULT_ANISOTROPY = 1;
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
			const n = .01, a = .1, h = t.elements, o = h[0], l = h[4], c = h[8], u = h[1], m = h[5], d = h[9], p = h[2], y = h[6], x = h[10];
			if (Math.abs(l - u) < n && Math.abs(c - p) < n && Math.abs(d - y) < n) {
				if (Math.abs(l + u) < a && Math.abs(c + p) < a && Math.abs(d + y) < a && Math.abs(o + m + x - 3) < a) return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				const t = (o + 1) / 2, h = (m + 1) / 2, f = (x + 1) / 2, g = (l + u) / 4, b = (c + p) / 4, M = (d + y) / 4;
				return t > h && t > f ? t < n ? (s = 0, i = .707106781, r = .707106781) : (s = Math.sqrt(t), i = g / s, r = b / s) : h > f ? h < n ? (s = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(h), s = g / i, r = M / i) : f < n ? (s = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(f), s = b / r, i = M / r), this.set(s, i, r, e), this;
			}
			let f = Math.sqrt((y - d) * (y - d) + (c - p) * (c - p) + (u - l) * (u - l));
			return Math.abs(f) < .001 && (f = 1), this.x = (y - d) / f, this.y = (c - p) / f, this.z = (u - l) / f, this.w = Math.acos((o + m + x - 1) / 2), this;
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
		constructor(t, e, s, i, r, n, a, h, o, l, c, u, m, d, p, y) {
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
			], void 0 !== t && this.set(t, e, s, i, r, n, a, h, o, l, c, u, m, d, p, y);
		}
		set(t, e, s, i, r, n, a, h, o, l, c, u, m, d, p, y) {
			const x = this.elements;
			return x[0] = t, x[4] = e, x[8] = s, x[12] = i, x[1] = r, x[5] = n, x[9] = a, x[13] = h, x[2] = o, x[6] = l, x[10] = c, x[14] = u, x[3] = m, x[7] = d, x[11] = p, x[15] = y, this;
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
			const e = this.elements, s = t.elements, i = 1 / F.setFromMatrixColumn(t, 0).length(), r = 1 / F.setFromMatrixColumn(t, 1).length(), n = 1 / F.setFromMatrixColumn(t, 2).length();
			return e[0] = s[0] * i, e[1] = s[1] * i, e[2] = s[2] * i, e[3] = 0, e[4] = s[4] * r, e[5] = s[5] * r, e[6] = s[6] * r, e[7] = 0, e[8] = s[8] * n, e[9] = s[9] * n, e[10] = s[10] * n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
		}
		makeRotationFromEuler(t) {
			const e = this.elements, s = t.x, i = t.y, r = t.z, n = Math.cos(s), a = Math.sin(s), h = Math.cos(i), o = Math.sin(i), l = Math.cos(r), c = Math.sin(r);
			if ("XYZ" === t.order) {
				const t = n * l, s = n * c, i = a * l, r = a * c;
				e[0] = h * l, e[4] = -h * c, e[8] = o, e[1] = s + i * o, e[5] = t - r * o, e[9] = -a * h, e[2] = r - t * o, e[6] = i + s * o, e[10] = n * h;
			} else if ("YXZ" === t.order) {
				const t = h * l, s = h * c, i = o * l, r = o * c;
				e[0] = t + r * a, e[4] = i * a - s, e[8] = n * o, e[1] = n * c, e[5] = n * l, e[9] = -a, e[2] = s * a - i, e[6] = r + t * a, e[10] = n * h;
			} else if ("ZXY" === t.order) {
				const t = h * l, s = h * c, i = o * l, r = o * c;
				e[0] = t - r * a, e[4] = -n * c, e[8] = i + s * a, e[1] = s + i * a, e[5] = n * l, e[9] = r - t * a, e[2] = -n * o, e[6] = a, e[10] = n * h;
			} else if ("ZYX" === t.order) {
				const t = n * l, s = n * c, i = a * l, r = a * c;
				e[0] = h * l, e[4] = i * o - s, e[8] = t * o + r, e[1] = h * c, e[5] = r * o + t, e[9] = s * o - i, e[2] = -o, e[6] = a * h, e[10] = n * h;
			} else if ("YZX" === t.order) {
				const t = n * h, s = n * o, i = a * h, r = a * o;
				e[0] = h * l, e[4] = r - t * c, e[8] = i * c + s, e[1] = c, e[5] = n * l, e[9] = -a * l, e[2] = -o * l, e[6] = s * c + i, e[10] = t - r * c;
			} else if ("XZY" === t.order) {
				const t = n * h, s = n * o, i = a * h, r = a * o;
				e[0] = h * l, e[4] = -c, e[8] = o * l, e[1] = t * c + r, e[5] = n * l, e[9] = s * c - i, e[2] = i * c - s, e[6] = a * l, e[10] = r * c + t;
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
		}
		makeRotationFromQuaternion(t) {
			return this.compose(N, t, V);
		}
		lookAt(t, e, s) {
			const i = this.elements;
			return D.subVectors(t, e), 0 === D.lengthSq() && (D.z = 1), D.normalize(), I.crossVectors(s, D), 0 === I.lengthSq() && (1 === Math.abs(s.z) ? D.x += 1e-4 : D.z += 1e-4, D.normalize(), I.crossVectors(s, D)), I.normalize(), O.crossVectors(D, I), i[0] = I.x, i[4] = O.x, i[8] = D.x, i[1] = I.y, i[5] = O.y, i[9] = D.y, i[2] = I.z, i[6] = O.z, i[10] = D.z, this;
		}
		multiply(t) {
			return this.multiplyMatrices(this, t);
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this);
		}
		multiplyMatrices(t, e) {
			const s = t.elements, i = e.elements, r = this.elements, n = s[0], a = s[4], h = s[8], o = s[12], l = s[1], c = s[5], u = s[9], m = s[13], d = s[2], p = s[6], y = s[10], x = s[14], f = s[3], g = s[7], b = s[11], M = s[15], w = i[0], z = i[4], _ = i[8], S = i[12], A = i[1], T = i[5], k = i[9], B = i[13], C = i[2], R = i[6], E = i[10], F = i[14], P = i[3], N = i[7], V = i[11], I = i[15];
			return r[0] = n * w + a * A + h * C + o * P, r[4] = n * z + a * T + h * R + o * N, r[8] = n * _ + a * k + h * E + o * V, r[12] = n * S + a * B + h * F + o * I, r[1] = l * w + c * A + u * C + m * P, r[5] = l * z + c * T + u * R + m * N, r[9] = l * _ + c * k + u * E + m * V, r[13] = l * S + c * B + u * F + m * I, r[2] = d * w + p * A + y * C + x * P, r[6] = d * z + p * T + y * R + x * N, r[10] = d * _ + p * k + y * E + x * V, r[14] = d * S + p * B + y * F + x * I, r[3] = f * w + g * A + b * C + M * P, r[7] = f * z + g * T + b * R + M * N, r[11] = f * _ + g * k + b * E + M * V, r[15] = f * S + g * B + b * F + M * I, this;
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
		}
		determinant() {
			const t = this.elements, e = t[0], s = t[4], i = t[8], r = t[12], n = t[1], a = t[5], h = t[9], o = t[13], l = t[2], c = t[6], u = t[10], m = t[14], d = t[3], p = t[7], y = t[11], x = t[15], f = h * m - o * u, g = a * m - o * c, b = a * u - h * c, M = n * m - o * l, w = n * u - h * l, z = n * c - a * l;
			return e * (p * f - y * g + x * b) - s * (d * f - y * M + x * w) + i * (d * g - p * M + x * z) - r * (d * b - p * w + y * z);
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
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], h = t[6], o = t[7], l = t[8], c = t[9], u = t[10], m = t[11], d = t[12], p = t[13], y = t[14], x = t[15], f = e * a - s * n, g = e * h - i * n, b = e * o - r * n, M = s * h - i * a, w = s * o - r * a, z = i * o - r * h, _ = l * p - c * d, S = l * y - u * d, A = l * x - m * d, T = c * y - u * p, k = c * x - m * p, B = u * x - m * y, C = f * B - g * k + b * T + M * A - w * S + z * _;
			if (0 === C) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const R = 1 / C;
			return t[0] = (a * B - h * k + o * T) * R, t[1] = (i * k - s * B - r * T) * R, t[2] = (p * z - y * w + x * M) * R, t[3] = (u * w - c * z - m * M) * R, t[4] = (h * A - n * B - o * S) * R, t[5] = (e * B - i * A + r * S) * R, t[6] = (y * b - d * z - x * g) * R, t[7] = (l * z - u * b + m * g) * R, t[8] = (n * k - a * A + o * _) * R, t[9] = (s * A - e * k - r * _) * R, t[10] = (d * w - p * b + x * f) * R, t[11] = (c * b - l * w - m * f) * R, t[12] = (a * S - n * T - h * _) * R, t[13] = (e * T - s * S + i * _) * R, t[14] = (p * g - d * M - y * f) * R, t[15] = (l * M - c * g + u * f) * R, this;
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
			const i = this.elements, r = e._x, n = e._y, a = e._z, h = e._w, o = r + r, l = n + n, c = a + a, u = r * o, m = r * l, d = r * c, p = n * l, y = n * c, x = a * c, f = h * o, g = h * l, b = h * c, M = s.x, w = s.y, z = s.z;
			return i[0] = (1 - (p + x)) * M, i[1] = (m + b) * M, i[2] = (d - g) * M, i[3] = 0, i[4] = (m - b) * w, i[5] = (1 - (u + x)) * w, i[6] = (y + f) * w, i[7] = 0, i[8] = (d + g) * z, i[9] = (y - f) * z, i[10] = (1 - (u + p)) * z, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
		}
		decompose(t, e, s) {
			const i = this.elements;
			t.x = i[12], t.y = i[13], t.z = i[14];
			const r = this.determinantAffine();
			if (0 === r) return s.set(1, 1, 1), e.identity(), this;
			let n = F.set(i[0], i[1], i[2]).length();
			const a = F.set(i[4], i[5], i[6]).length(), h = F.set(i[8], i[9], i[10]).length();
			r < 0 && (n = -n), P.copy(this);
			const o = 1 / n, l = 1 / a, c = 1 / h;
			return P.elements[0] *= o, P.elements[1] *= o, P.elements[2] *= o, P.elements[4] *= l, P.elements[5] *= l, P.elements[6] *= l, P.elements[8] *= c, P.elements[9] *= c, P.elements[10] *= c, e.setFromRotationMatrix(P), s.x = n, s.y = a, s.z = h, this;
		}
		makePerspective(t, e, s, i, r, n, a = 2e3, h = !1) {
			const o = this.elements, l = 2 * r / (e - t), c = 2 * r / (s - i), u = (e + t) / (e - t), m = (s + i) / (s - i);
			let d, p;
			if (h) d = r / (n - r), p = n * r / (n - r);
			else if (2e3 === a) d = -(n + r) / (n - r), p = -2 * n * r / (n - r);
			else {
				if (2001 !== a) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
				d = -n / (n - r), p = -n * r / (n - r);
			}
			return o[0] = l, o[4] = 0, o[8] = u, o[12] = 0, o[1] = 0, o[5] = c, o[9] = m, o[13] = 0, o[2] = 0, o[6] = 0, o[10] = d, o[14] = p, o[3] = 0, o[7] = 0, o[11] = -1, o[15] = 0, this;
		}
		makeOrthographic(t, e, s, i, r, n, a = 2e3, h = !1) {
			const o = this.elements, l = 2 / (e - t), c = 2 / (s - i), u = -(e + t) / (e - t), m = -(s + i) / (s - i);
			let d, p;
			if (h) d = 1 / (n - r), p = n / (n - r);
			else if (2e3 === a) d = -2 / (n - r), p = -(n + r) / (n - r);
			else {
				if (2001 !== a) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
				d = -1 / (n - r), p = -r / (n - r);
			}
			return o[0] = l, o[4] = 0, o[8] = 0, o[12] = u, o[1] = 0, o[5] = c, o[9] = 0, o[13] = m, o[2] = 0, o[6] = 0, o[10] = d, o[14] = p, o[3] = 0, o[7] = 0, o[11] = 0, o[15] = 1, this;
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
	const F = new x(), P = new E(), N = new x(0, 0, 0), V = new x(1, 1, 1), I = new x(), O = new x(), D = new x(), U = new E(), L = new y();
	var q = class Euler {
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
			const i = t.elements, r = i[0], n = i[4], a = i[8], h = i[1], o = i[5], l = i[9], c = i[2], u = i[6], m = i[10];
			switch (e) {
				case "XYZ":
					this._y = Math.asin(clamp(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-l, m), this._z = Math.atan2(-n, r)) : (this._x = Math.atan2(u, o), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-clamp(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(a, m), this._z = Math.atan2(h, o)) : (this._y = Math.atan2(-c, r), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(clamp(u, -1, 1)), Math.abs(u) < .9999999 ? (this._y = Math.atan2(-c, m), this._z = Math.atan2(-n, o)) : (this._y = 0, this._z = Math.atan2(h, r));
					break;
				case "ZYX":
					this._y = Math.asin(-clamp(c, -1, 1)), Math.abs(c) < .9999999 ? (this._x = Math.atan2(u, m), this._z = Math.atan2(h, r)) : (this._x = 0, this._z = Math.atan2(-n, o));
					break;
				case "YZX":
					this._z = Math.asin(clamp(h, -1, 1)), Math.abs(h) < .9999999 ? (this._x = Math.atan2(-l, o), this._y = Math.atan2(-c, r)) : (this._x = 0, this._y = Math.atan2(a, m));
					break;
				case "XZY":
					this._z = Math.asin(-clamp(n, -1, 1)), Math.abs(n) < .9999999 ? (this._x = Math.atan2(u, o), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-l, m), this._y = 0);
					break;
				default: warn("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
			}
			return this._order = e, !0 === s && this._onChangeCallback(), this;
		}
		setFromQuaternion(t, e, s) {
			return U.makeRotationFromQuaternion(t), this.setFromRotationMatrix(U, e, s);
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
	q.DEFAULT_ORDER = "XYZ";
	var Z = class {
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
	let W = 0;
	const X = new x(), j = new y(), Y = new E(), G = new x(), H = new x(), $ = new x(), J = new y(), Q = new x(1, 0, 0), K = new x(0, 1, 0), tt = new x(0, 0, 1), et = { type: "added" }, st = { type: "removed" }, it = {
		type: "childadded",
		child: null
	}, rt = {
		type: "childremoved",
		child: null
	};
	var nt = class Object3D extends o {
		constructor() {
			super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: W++ }), this.uuid = generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Object3D.DEFAULT_UP.clone();
			const t = new x(), e = new q(), s = new y(), i = new x(1, 1, 1);
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
				normalMatrix: { value: new b() }
			}), this.matrix = new E(), this.matrixWorld = new E(), this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new Z(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
			return j.setFromAxisAngle(t, e), this.quaternion.multiply(j), this;
		}
		rotateOnWorldAxis(t, e) {
			return j.setFromAxisAngle(t, e), this.quaternion.premultiply(j), this;
		}
		rotateX(t) {
			return this.rotateOnAxis(Q, t);
		}
		rotateY(t) {
			return this.rotateOnAxis(K, t);
		}
		rotateZ(t) {
			return this.rotateOnAxis(tt, t);
		}
		translateOnAxis(t, e) {
			return X.copy(t).applyQuaternion(this.quaternion), this.position.add(X.multiplyScalar(e)), this;
		}
		translateX(t) {
			return this.translateOnAxis(Q, t);
		}
		translateY(t) {
			return this.translateOnAxis(K, t);
		}
		translateZ(t) {
			return this.translateOnAxis(tt, t);
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
			this.updateWorldMatrix(!0, !1), H.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? Y.lookAt(H, G, this.up) : Y.lookAt(G, H, this.up), this.quaternion.setFromRotationMatrix(Y), i && (Y.extractRotation(i.matrixWorld), j.setFromRotationMatrix(Y), this.quaternion.premultiply(j.invert()));
		}
		add(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this;
			}
			return t === this ? (error("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(et), it.child = t, this.dispatchEvent(it), it.child = null) : error("Object3D.add: object not an instance of THREE.Object3D.", t), this);
		}
		remove(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this;
			}
			const e = this.children.indexOf(t);
			return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(st), rt.child = t, this.dispatchEvent(rt), rt.child = null), this;
		}
		removeFromParent() {
			const t = this.parent;
			return null !== t && t.remove(this), this;
		}
		clear() {
			return this.remove(...this.children);
		}
		attach(t) {
			return this.updateWorldMatrix(!0, !1), Y.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), Y.multiply(t.parent.matrixWorld)), t.applyMatrix4(Y), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(et), it.child = t, this.dispatchEvent(it), it.child = null, this;
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
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(H, t, $), t;
		}
		getWorldScale(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(H, J, t), t;
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
	nt.DEFAULT_UP = new x(0, 1, 0), nt.DEFAULT_MATRIX_AUTO_UPDATE = !0, nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
	const at = {
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
	}, ht = {
		h: 0,
		s: 0,
		l: 0
	}, ot = {
		h: 0,
		s: 0,
		l: 0
	};
	function hue2rgb(t, e, s) {
		return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? t + 6 * (e - t) * s : s < .5 ? e : s < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - s) : t;
	}
	var lt = class {
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
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, _.colorSpaceToWorking(this, e), this;
		}
		setRGB(t, e, s, i = _.workingColorSpace) {
			return this.r = t, this.g = e, this.b = s, _.colorSpaceToWorking(this, i), this;
		}
		setHSL(t, e, s, i = _.workingColorSpace) {
			if (t = euclideanModulo(t, 1), e = clamp(e, 0, 1), s = clamp(s, 0, 1), 0 === e) this.r = this.g = this.b = s;
			else {
				const i = s <= .5 ? s * (1 + e) : s + e - s * e, r = 2 * s - i;
				this.r = hue2rgb(r, i, t + 1 / 3), this.g = hue2rgb(r, i, t), this.b = hue2rgb(r, i, t - 1 / 3);
			}
			return _.colorSpaceToWorking(this, i), this;
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
			const s = at[t.toLowerCase()];
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
			return _.workingToColorSpace(ct.copy(this), t), 65536 * Math.round(clamp(255 * ct.r, 0, 255)) + 256 * Math.round(clamp(255 * ct.g, 0, 255)) + Math.round(clamp(255 * ct.b, 0, 255));
		}
		getHexString(t = r) {
			return ("000000" + this.getHex(t).toString(16)).slice(-6);
		}
		getHSL(t, e = _.workingColorSpace) {
			_.workingToColorSpace(ct.copy(this), e);
			const s = ct.r, i = ct.g, r = ct.b, n = Math.max(s, i, r), a = Math.min(s, i, r);
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
		getRGB(t, e = _.workingColorSpace) {
			return _.workingToColorSpace(ct.copy(this), e), t.r = ct.r, t.g = ct.g, t.b = ct.b, t;
		}
		getStyle(t = r) {
			_.workingToColorSpace(ct.copy(this), t);
			const e = ct.r, s = ct.g, i = ct.b;
			return "srgb" !== t ? `color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * s)},${Math.round(255 * i)})`;
		}
		offsetHSL(t, e, s) {
			return this.getHSL(ht), this.setHSL(ht.h + t, ht.s + e, ht.l + s);
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
			this.getHSL(ht), t.getHSL(ot);
			const s = lerp(ht.h, ot.h, e), i = lerp(ht.s, ot.s, e), r = lerp(ht.l, ot.l, e);
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
	const ct = new lt();
	lt.NAMES = at;
	var ut = class {
		constructor(t = new x(1 / 0, 1 / 0, 1 / 0), e = new x(-1 / 0, -1 / 0, -1 / 0)) {
			this.isBox3 = !0, this.min = t, this.max = e;
		}
		set(t, e) {
			return this.min.copy(t), this.max.copy(e), this;
		}
		setFromArray(t) {
			this.makeEmpty();
			for (let e = 0, s = t.length; e < s; e += 3) this.expandByPoint(dt.fromArray(t, e));
			return this;
		}
		setFromBufferAttribute(t) {
			this.makeEmpty();
			for (let e = 0, s = t.count; e < s; e++) this.expandByPoint(dt.fromBufferAttribute(t, e));
			return this;
		}
		setFromPoints(t) {
			this.makeEmpty();
			for (let e = 0, s = t.length; e < s; e++) this.expandByPoint(t[e]);
			return this;
		}
		setFromCenterAndSize(t, e) {
			const s = dt.copy(e).multiplyScalar(.5);
			return this.min.copy(t).sub(s), this.max.copy(t).add(s), this;
		}
		setFromObject(t, e = !1) {
			return this.makeEmpty(), this.expandByObject(t, e);
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			return this.min.copy(t.min), this.max.copy(t.max), this;
		}
		makeEmpty() {
			return this.min.x = this.min.y = this.min.z = 1 / 0, this.max.x = this.max.y = this.max.z = -1 / 0, this;
		}
		isEmpty() {
			return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
		}
		getCenter(t) {
			return this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5);
		}
		getSize(t) {
			return this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min);
		}
		expandByPoint(t) {
			return this.min.min(t), this.max.max(t), this;
		}
		expandByVector(t) {
			return this.min.sub(t), this.max.add(t), this;
		}
		expandByScalar(t) {
			return this.min.addScalar(-t), this.max.addScalar(t), this;
		}
		expandByObject(t, e = !1) {
			t.updateWorldMatrix(!1, !1);
			const s = t.geometry;
			if (void 0 !== s) {
				const i = s.getAttribute("position");
				if (!0 === e && void 0 !== i && !0 !== t.isInstancedMesh && !0 !== t.isBatchedMesh) for (let e = 0, s = i.count; e < s; e++) !0 === t.isMesh ? t.getVertexPosition(e, dt) : dt.fromBufferAttribute(i, e), dt.applyMatrix4(t.matrixWorld), this.expandByPoint(dt);
				else void 0 !== t.boundingBox ? (null === t.boundingBox && t.computeBoundingBox(), pt.copy(t.boundingBox)) : (null === s.boundingBox && s.computeBoundingBox(), pt.copy(s.boundingBox)), pt.applyMatrix4(t.matrixWorld), this.union(pt);
			}
			const i = t.children;
			for (let r = 0, n = i.length; r < n; r++) this.expandByObject(i[r], e);
			return this;
		}
		containsPoint(t) {
			return t.x >= this.min.x && t.x <= this.max.x && t.y >= this.min.y && t.y <= this.max.y && t.z >= this.min.z && t.z <= this.max.z;
		}
		containsBox(t) {
			return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z;
		}
		getParameter(t, e) {
			return e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z));
		}
		intersectsBox(t) {
			return t.max.x >= this.min.x && t.min.x <= this.max.x && t.max.y >= this.min.y && t.min.y <= this.max.y && t.max.z >= this.min.z && t.min.z <= this.max.z;
		}
		intersectsSphere(t) {
			return this.clampPoint(t.center, dt), dt.distanceToSquared(t.center) <= t.radius * t.radius;
		}
		intersectsPlane(t) {
			let e, s;
			return t.normal.x > 0 ? (e = t.normal.x * this.min.x, s = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x, s = t.normal.x * this.min.x), t.normal.y > 0 ? (e += t.normal.y * this.min.y, s += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y, s += t.normal.y * this.min.y), t.normal.z > 0 ? (e += t.normal.z * this.min.z, s += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z, s += t.normal.z * this.min.z), e <= -t.constant && s >= -t.constant;
		}
		intersectsTriangle(t) {
			if (this.isEmpty()) return !1;
			this.getCenter(wt), zt.subVectors(this.max, wt), yt.subVectors(t.a, wt), xt.subVectors(t.b, wt), ft.subVectors(t.c, wt), gt.subVectors(xt, yt), bt.subVectors(ft, xt), Mt.subVectors(yt, ft);
			let e = [
				0,
				-gt.z,
				gt.y,
				0,
				-bt.z,
				bt.y,
				0,
				-Mt.z,
				Mt.y,
				gt.z,
				0,
				-gt.x,
				bt.z,
				0,
				-bt.x,
				Mt.z,
				0,
				-Mt.x,
				-gt.y,
				gt.x,
				0,
				-bt.y,
				bt.x,
				0,
				-Mt.y,
				Mt.x,
				0
			];
			return !!satForAxes(e, yt, xt, ft, zt) && (e = [
				1,
				0,
				0,
				0,
				1,
				0,
				0,
				0,
				1
			], !!satForAxes(e, yt, xt, ft, zt) && (_t.crossVectors(gt, bt), e = [
				_t.x,
				_t.y,
				_t.z
			], satForAxes(e, yt, xt, ft, zt)));
		}
		clampPoint(t, e) {
			return e.copy(t).clamp(this.min, this.max);
		}
		distanceToPoint(t) {
			return this.clampPoint(t, dt).distanceTo(t);
		}
		getBoundingSphere(t) {
			return this.isEmpty() ? t.makeEmpty() : (this.getCenter(t.center), t.radius = .5 * this.getSize(dt).length()), t;
		}
		intersect(t) {
			return this.min.max(t.min), this.max.min(t.max), this.isEmpty() && this.makeEmpty(), this;
		}
		union(t) {
			return this.min.min(t.min), this.max.max(t.max), this;
		}
		applyMatrix4(t) {
			return this.isEmpty() || (mt[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t), mt[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t), mt[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t), mt[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t), mt[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t), mt[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t), mt[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t), mt[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t), this.setFromPoints(mt)), this;
		}
		translate(t) {
			return this.min.add(t), this.max.add(t), this;
		}
		equals(t) {
			return t.min.equals(this.min) && t.max.equals(this.max);
		}
		toJSON() {
			return {
				min: this.min.toArray(),
				max: this.max.toArray()
			};
		}
		fromJSON(t) {
			return this.min.fromArray(t.min), this.max.fromArray(t.max), this;
		}
	};
	const mt = [
		new x(),
		new x(),
		new x(),
		new x(),
		new x(),
		new x(),
		new x(),
		new x()
	], dt = new x(), pt = new ut(), yt = new x(), xt = new x(), ft = new x(), gt = new x(), bt = new x(), Mt = new x(), wt = new x(), zt = new x(), _t = new x(), St = new x();
	function satForAxes(t, e, s, i, r) {
		for (let n = 0, a = t.length - 3; n <= a; n += 3) {
			St.fromArray(t, n);
			const a = r.x * Math.abs(St.x) + r.y * Math.abs(St.y) + r.z * Math.abs(St.z), h = e.dot(St), o = s.dot(St), l = i.dot(St);
			if (Math.max(-Math.max(h, o, l), Math.min(h, o, l)) > a) return !1;
		}
		return !0;
	}
	const vt = new x(), At = new p();
	let Tt = 0;
	var kt = class extends o {
		constructor(t, e, s = !1) {
			if (super(), Array.isArray(t)) throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
			this.isBufferAttribute = !0, Object.defineProperty(this, "id", { value: Tt++ }), this.name = "", this.array = t, this.itemSize = e, this.count = void 0 !== t ? t.length / e : 0, this.normalized = s, this.usage = 35044, this.updateRanges = [], this.gpuType = 1015, this.version = 0, this._normalizationScale = void 0 !== t ? getNormalizationScale(t) : void 0;
		}
		onUploadCallback() {}
		set needsUpdate(t) {
			!0 === t && this.version++;
		}
		setUsage(t) {
			return this.usage = t, this;
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
		copy(t) {
			return this.name = t.name, this.array = new t.array.constructor(t.array), this.itemSize = t.itemSize, this.count = t.count, this.normalized = t.normalized, this.usage = t.usage, this.gpuType = t.gpuType, this._normalizationScale = t._normalizationScale, this;
		}
		copyAt(t, e, s) {
			t *= this.itemSize, s *= e.itemSize;
			for (let i = 0, r = this.itemSize; i < r; i++) this.array[t + i] = e.array[s + i];
			return this;
		}
		copyArray(t) {
			return this.array.set(t), this;
		}
		applyMatrix3(t) {
			if (2 === this.itemSize) for (let e = 0, s = this.count; e < s; e++) At.fromBufferAttribute(this, e), At.applyMatrix3(t), this.setXY(e, At.x, At.y);
			else if (3 === this.itemSize) for (let e = 0, s = this.count; e < s; e++) vt.fromBufferAttribute(this, e), vt.applyMatrix3(t), this.setXYZ(e, vt.x, vt.y, vt.z);
			return this;
		}
		applyMatrix4(t) {
			for (let e = 0, s = this.count; e < s; e++) vt.fromBufferAttribute(this, e), vt.applyMatrix4(t), this.setXYZ(e, vt.x, vt.y, vt.z);
			return this;
		}
		applyNormalMatrix(t) {
			for (let e = 0, s = this.count; e < s; e++) vt.fromBufferAttribute(this, e), vt.applyNormalMatrix(t), this.setXYZ(e, vt.x, vt.y, vt.z);
			return this;
		}
		transformDirection(t) {
			for (let e = 0, s = this.count; e < s; e++) vt.fromBufferAttribute(this, e), vt.transformDirection(t), this.setXYZ(e, vt.x, vt.y, vt.z);
			return this;
		}
		set(t, e = 0) {
			return this.array.set(t, e), this;
		}
		getComponent(t, e) {
			let s = this.array[t * this.itemSize + e];
			return this.normalized && (s = this._denormalize(s)), s;
		}
		setComponent(t, e, s) {
			return this.normalized && (s = this._normalize(s)), this.array[t * this.itemSize + e] = s, this;
		}
		getX(t) {
			let e = this.array[t * this.itemSize];
			return this.normalized && (e = this._denormalize(e)), e;
		}
		setX(t, e) {
			return this.normalized && (e = this._normalize(e)), this.array[t * this.itemSize] = e, this;
		}
		getY(t) {
			let e = this.array[t * this.itemSize + 1];
			return this.normalized && (e = this._denormalize(e)), e;
		}
		setY(t, e) {
			return this.normalized && (e = this._normalize(e)), this.array[t * this.itemSize + 1] = e, this;
		}
		getZ(t) {
			let e = this.array[t * this.itemSize + 2];
			return this.normalized && (e = this._denormalize(e)), e;
		}
		setZ(t, e) {
			return this.normalized && (e = this._normalize(e)), this.array[t * this.itemSize + 2] = e, this;
		}
		getW(t) {
			let e = this.array[t * this.itemSize + 3];
			return this.normalized && (e = this._denormalize(e)), e;
		}
		setW(t, e) {
			return this.normalized && (e = this._normalize(e)), this.array[t * this.itemSize + 3] = e, this;
		}
		setXY(t, e, s) {
			return t *= this.itemSize, this.normalized && (e = this._normalize(e), s = this._normalize(s)), this.array[t + 0] = e, this.array[t + 1] = s, this;
		}
		setXYZ(t, e, s, i) {
			return t *= this.itemSize, this.normalized && (e = this._normalize(e), s = this._normalize(s), i = this._normalize(i)), this.array[t + 0] = e, this.array[t + 1] = s, this.array[t + 2] = i, this;
		}
		setXYZW(t, e, s, i, r) {
			return t *= this.itemSize, this.normalized && (e = this._normalize(e), s = this._normalize(s), i = this._normalize(i), r = this._normalize(r)), this.array[t + 0] = e, this.array[t + 1] = s, this.array[t + 2] = i, this.array[t + 3] = r, this;
		}
		onUpload(t) {
			return this.onUploadCallback = t, this;
		}
		clone() {
			return new this.constructor(this.array, this.itemSize).copy(this);
		}
		toJSON() {
			const t = {
				itemSize: this.itemSize,
				type: this.array.constructor.name,
				array: Array.from(this.array),
				normalized: this.normalized
			};
			return t.name = this.name, t.usage = this.usage, t.gpuType = this.gpuType, t;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
		_denormalize(t) {
			const e = this._normalizationScale;
			return void 0 !== e ? Math.max(t / e, -1) : denormalize(t, this.array);
		}
		_normalize(t) {
			const e = this._normalizationScale;
			return void 0 !== e ? Math.round(t * e) : normalize(t, this.array);
		}
	}, Bt = class extends kt {
		constructor(t, e, s) {
			super(new Uint16Array(t), e, s);
		}
	}, Ct = class extends kt {
		constructor(t, e, s) {
			super(new Uint32Array(t), e, s);
		}
	}, Rt = class extends kt {
		constructor(t, e, s) {
			super(new Float32Array(t), e, s);
		}
	};
	const Et = new ut(), Ft = new x(), Pt = new x();
	var Nt = class {
		constructor(t = new x(), e = -1) {
			this.isSphere = !0, this.center = t, this.radius = e;
		}
		set(t, e) {
			return this.center.copy(t), this.radius = e, this;
		}
		setFromPoints(t, e) {
			const s = this.center;
			void 0 !== e ? s.copy(e) : Et.setFromPoints(t).getCenter(s);
			let i = 0;
			for (let r = 0, n = t.length; r < n; r++) i = Math.max(i, s.distanceToSquared(t[r]));
			return this.radius = Math.sqrt(i), this;
		}
		copy(t) {
			return this.center.copy(t.center), this.radius = t.radius, this;
		}
		isEmpty() {
			return this.radius < 0;
		}
		makeEmpty() {
			return this.center.set(0, 0, 0), this.radius = -1, this;
		}
		containsPoint(t) {
			return t.distanceToSquared(this.center) <= this.radius * this.radius;
		}
		distanceToPoint(t) {
			return t.distanceTo(this.center) - this.radius;
		}
		intersectsSphere(t) {
			const e = this.radius + t.radius;
			return t.center.distanceToSquared(this.center) <= e * e;
		}
		intersectsBox(t) {
			return t.intersectsSphere(this);
		}
		intersectsPlane(t) {
			return Math.abs(t.distanceToPoint(this.center)) <= this.radius;
		}
		clampPoint(t, e) {
			const s = this.center.distanceToSquared(t);
			return e.copy(t), s > this.radius * this.radius && (e.sub(this.center).normalize(), e.multiplyScalar(this.radius).add(this.center)), e;
		}
		getBoundingBox(t) {
			return this.isEmpty() ? (t.makeEmpty(), t) : (t.set(this.center, this.center), t.expandByScalar(this.radius), t);
		}
		applyMatrix4(t) {
			return this.center.applyMatrix4(t), this.radius = this.radius * t.getMaxScaleOnAxis(), this;
		}
		translate(t) {
			return this.center.add(t), this;
		}
		expandByPoint(t) {
			if (this.isEmpty()) return this.center.copy(t), this.radius = 0, this;
			Ft.subVectors(t, this.center);
			const e = Ft.lengthSq();
			if (e > this.radius * this.radius) {
				const t = Math.sqrt(e), s = .5 * (t - this.radius);
				this.center.addScaledVector(Ft, s / t), this.radius += s;
			}
			return this;
		}
		union(t) {
			return t.isEmpty() ? this : this.isEmpty() ? (this.copy(t), this) : (!0 === this.center.equals(t.center) ? this.radius = Math.max(this.radius, t.radius) : (Pt.subVectors(t.center, this.center).setLength(t.radius), this.expandByPoint(Ft.copy(t.center).add(Pt)), this.expandByPoint(Ft.copy(t.center).sub(Pt))), this);
		}
		equals(t) {
			return t.center.equals(this.center) && t.radius === this.radius;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		toJSON() {
			return {
				radius: this.radius,
				center: this.center.toArray()
			};
		}
		fromJSON(t) {
			return this.radius = t.radius, this.center.fromArray(t.center), this;
		}
	};
	let Vt = 0;
	const It = new E(), Ot = new nt(), Dt = new x(), Ut = new ut(), Lt = new ut(), qt = new x();
	var Zt = class BufferGeometry extends o {
		constructor() {
			super(), this.isBufferGeometry = !0, Object.defineProperty(this, "id", { value: Vt++ }), this.uuid = generateUUID(), this.name = "", this.type = "BufferGeometry", this.index = null, this.indirect = null, this.indirectOffset = 0, this.attributes = {}, this.morphAttributes = {}, this.morphTargetsRelative = !1, this.groups = [], this.boundingBox = null, this.boundingSphere = null, this.drawRange = {
				start: 0,
				count: 1 / 0
			}, this.userData = {}, this._transformed = !1;
		}
		getIndex() {
			return this.index;
		}
		setIndex(t) {
			return Array.isArray(t) ? this.index = new (function arrayNeedsUint32(t) {
				for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
				return !1;
			}(t) ? Ct : Bt)(t, 1) : this.index = t, this;
		}
		setIndirect(t, e = 0) {
			return this.indirect = t, this.indirectOffset = e, this;
		}
		getIndirect() {
			return this.indirect;
		}
		getAttribute(t) {
			return this.attributes[t];
		}
		setAttribute(t, e) {
			return this.attributes[t] = e, this;
		}
		deleteAttribute(t) {
			return delete this.attributes[t], this;
		}
		hasAttribute(t) {
			return void 0 !== this.attributes[t];
		}
		addGroup(t, e, s = 0) {
			this.groups.push({
				start: t,
				count: e,
				materialIndex: s
			});
		}
		clearGroups() {
			this.groups = [];
		}
		setDrawRange(t, e) {
			this.drawRange.start = t, this.drawRange.count = e;
		}
		applyMatrix4(t) {
			const e = this.attributes.position;
			void 0 !== e && (e.applyMatrix4(t), e.needsUpdate = !0);
			const s = this.attributes.normal;
			if (void 0 !== s) {
				const e = new b().getNormalMatrix(t);
				s.applyNormalMatrix(e), s.needsUpdate = !0;
			}
			const i = this.attributes.tangent;
			return void 0 !== i && (i.transformDirection(t), i.needsUpdate = !0), null !== this.boundingBox && this.computeBoundingBox(), null !== this.boundingSphere && this.computeBoundingSphere(), this._transformed = !0, this;
		}
		applyQuaternion(t) {
			return It.makeRotationFromQuaternion(t), this.applyMatrix4(It), this;
		}
		rotateX(t) {
			return It.makeRotationX(t), this.applyMatrix4(It), this;
		}
		rotateY(t) {
			return It.makeRotationY(t), this.applyMatrix4(It), this;
		}
		rotateZ(t) {
			return It.makeRotationZ(t), this.applyMatrix4(It), this;
		}
		translate(t, e, s) {
			return It.makeTranslation(t, e, s), this.applyMatrix4(It), this;
		}
		scale(t, e, s) {
			return It.makeScale(t, e, s), this.applyMatrix4(It), this;
		}
		lookAt(t) {
			return Ot.lookAt(t), Ot.updateMatrix(), this.applyMatrix4(Ot.matrix), this;
		}
		center() {
			return this.computeBoundingBox(), this.boundingBox.getCenter(Dt).negate(), this.translate(Dt.x, Dt.y, Dt.z), this;
		}
		setFromPoints(t) {
			const e = this.getAttribute("position");
			if (void 0 === e) {
				const e = [];
				for (let s = 0, i = t.length; s < i; s++) {
					const i = t[s];
					e.push(i.x, i.y, i.z || 0);
				}
				this.setAttribute("position", new Rt(e, 3));
			} else {
				const s = Math.min(t.length, e.count);
				for (let i = 0; i < s; i++) {
					const s = t[i];
					e.setXYZ(i, s.x, s.y, s.z || 0);
				}
				t.length > e.count && warn("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."), e.needsUpdate = !0;
			}
			return this;
		}
		computeBoundingBox() {
			null === this.boundingBox && (this.boundingBox = new ut());
			const t = this.attributes.position, e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute) return error("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this), void this.boundingBox.set(new x(-1 / 0, -1 / 0, -1 / 0), new x(1 / 0, 1 / 0, 1 / 0));
			if (void 0 !== t) {
				if (this.boundingBox.setFromBufferAttribute(t), e) for (let s = 0, i = e.length; s < i; s++) {
					const t = e[s];
					Ut.setFromBufferAttribute(t), this.morphTargetsRelative ? (qt.addVectors(this.boundingBox.min, Ut.min), this.boundingBox.expandByPoint(qt), qt.addVectors(this.boundingBox.max, Ut.max), this.boundingBox.expandByPoint(qt)) : (this.boundingBox.expandByPoint(Ut.min), this.boundingBox.expandByPoint(Ut.max));
				}
			} else this.boundingBox.makeEmpty();
			(isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && error("BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
		}
		computeBoundingSphere() {
			null === this.boundingSphere && (this.boundingSphere = new Nt());
			const t = this.attributes.position, e = this.morphAttributes.position;
			if (t && t.isGLBufferAttribute) return error("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this), void this.boundingSphere.set(new x(), 1 / 0);
			if (t) {
				const s = this.boundingSphere.center;
				if (Ut.setFromBufferAttribute(t), e) for (let t = 0, r = e.length; t < r; t++) {
					const s = e[t];
					Lt.setFromBufferAttribute(s), this.morphTargetsRelative ? (qt.addVectors(Ut.min, Lt.min), Ut.expandByPoint(qt), qt.addVectors(Ut.max, Lt.max), Ut.expandByPoint(qt)) : (Ut.expandByPoint(Lt.min), Ut.expandByPoint(Lt.max));
				}
				Ut.getCenter(s);
				let i = 0;
				for (let e = 0, r = t.count; e < r; e++) qt.fromBufferAttribute(t, e), i = Math.max(i, s.distanceToSquared(qt));
				if (e) for (let r = 0, n = e.length; r < n; r++) {
					const n = e[r], a = this.morphTargetsRelative;
					for (let e = 0, r = n.count; e < r; e++) qt.fromBufferAttribute(n, e), a && (Dt.fromBufferAttribute(t, e), qt.add(Dt)), i = Math.max(i, s.distanceToSquared(qt));
				}
				this.boundingSphere.radius = Math.sqrt(i), isNaN(this.boundingSphere.radius) && error("BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
			}
		}
		computeTangents() {
			const t = this.index, e = this.attributes;
			if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv) return void error("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
			const s = e.position, i = e.normal, r = e.uv;
			let n = this.getAttribute("tangent");
			void 0 !== n && n.count === s.count || (n = new kt(new Float32Array(4 * s.count), 4), this.setAttribute("tangent", n));
			const a = [], h = [], o = new Uint8Array(s.count);
			for (let p = 0; p < s.count; p++) a[p] = new x(), h[p] = new x();
			const l = new x(), c = new x(), u = new x(), m = new p(), d = new p(), y = new p(), f = new x(), g = new x();
			function handleTriangle(t, e, i) {
				o[t] = o[e] = o[i] = 1, l.fromBufferAttribute(s, t), c.fromBufferAttribute(s, e), u.fromBufferAttribute(s, i), m.fromBufferAttribute(r, t), d.fromBufferAttribute(r, e), y.fromBufferAttribute(r, i), c.sub(l), u.sub(l), d.sub(m), y.sub(m);
				const n = 1 / (d.x * y.y - y.x * d.y);
				isFinite(n) && (f.copy(c).multiplyScalar(y.y).addScaledVector(u, -d.y).multiplyScalar(n), g.copy(u).multiplyScalar(d.x).addScaledVector(c, -y.x).multiplyScalar(n), a[t].add(f), a[e].add(f), a[i].add(f), h[t].add(g), h[e].add(g), h[i].add(g));
			}
			let b = this.groups;
			0 === b.length && (b = [{
				start: 0,
				count: t.count
			}]);
			for (let p = 0, x = b.length; p < x; ++p) {
				const e = b[p], s = e.start;
				for (let i = s, r = s + e.count; i < r; i += 3) handleTriangle(t.getX(i + 0), t.getX(i + 1), t.getX(i + 2));
			}
			const M = new x(), w = new x(), z = new x(), _ = new x();
			function handleVertex(t) {
				z.fromBufferAttribute(i, t), _.copy(z);
				const e = a[t];
				M.copy(e), M.sub(z.multiplyScalar(z.dot(e))).normalize(), w.crossVectors(_, e);
				const s = w.dot(h[t]) < 0 ? -1 : 1;
				n.setXYZW(t, M.x, M.y, M.z, s);
			}
			for (let p = 0, x = s.count; p < x; ++p) o[p] && handleVertex(p);
			this._transformed = !0;
		}
		computeVertexNormals() {
			const t = this.index, e = this.getAttribute("position");
			if (void 0 !== e) {
				let s = this.getAttribute("normal");
				if (void 0 === s || s.count !== e.count) s = new kt(new Float32Array(3 * e.count), 3), this.setAttribute("normal", s);
				else for (let t = 0, e = s.count; t < e; t++) s.setXYZ(t, 0, 0, 0);
				const i = new x(), r = new x(), n = new x(), a = new x(), h = new x(), o = new x(), l = new x(), c = new x();
				if (t) for (let u = 0, m = t.count; u < m; u += 3) {
					const m = t.getX(u + 0), d = t.getX(u + 1), p = t.getX(u + 2);
					i.fromBufferAttribute(e, m), r.fromBufferAttribute(e, d), n.fromBufferAttribute(e, p), l.subVectors(n, r), c.subVectors(i, r), l.cross(c), a.fromBufferAttribute(s, m), h.fromBufferAttribute(s, d), o.fromBufferAttribute(s, p), a.add(l), h.add(l), o.add(l), s.setXYZ(m, a.x, a.y, a.z), s.setXYZ(d, h.x, h.y, h.z), s.setXYZ(p, o.x, o.y, o.z);
				}
				else for (let t = 0, u = e.count; t < u; t += 3) i.fromBufferAttribute(e, t + 0), r.fromBufferAttribute(e, t + 1), n.fromBufferAttribute(e, t + 2), l.subVectors(n, r), c.subVectors(i, r), l.cross(c), s.setXYZ(t + 0, l.x, l.y, l.z), s.setXYZ(t + 1, l.x, l.y, l.z), s.setXYZ(t + 2, l.x, l.y, l.z);
				this.normalizeNormals(), s.needsUpdate = !0;
			}
		}
		normalizeNormals() {
			const t = this.attributes.normal;
			for (let e = 0, s = t.count; e < s; e++) qt.fromBufferAttribute(t, e), qt.normalize(), t.setXYZ(e, qt.x, qt.y, qt.z);
		}
		toNonIndexed() {
			function convertBufferAttribute(t, e) {
				const s = t.array, i = t.itemSize, r = t.normalized, n = new s.constructor(e.length * i);
				let a = 0, h = 0;
				for (let o = 0, l = e.length; o < l; o++) {
					a = t.isInterleavedBufferAttribute ? e[o] * t.data.stride + t.offset : e[o] * i;
					for (let t = 0; t < i; t++) n[h++] = s[a++];
				}
				return new kt(n, i, r);
			}
			if (null === this.index) return warn("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."), this;
			const t = new BufferGeometry(), e = this.index.array, s = this.attributes;
			for (const n in s) {
				const i = convertBufferAttribute(s[n], e);
				t.setAttribute(n, i);
			}
			const i = this.morphAttributes;
			for (const n in i) {
				const s = [], r = i[n];
				for (let t = 0, i = r.length; t < i; t++) {
					const i = convertBufferAttribute(r[t], e);
					s.push(i);
				}
				t.morphAttributes[n] = s;
			}
			t.morphTargetsRelative = this.morphTargetsRelative;
			const r = this.groups;
			for (let n = 0, a = r.length; n < a; n++) {
				const e = r[n];
				t.addGroup(e.start, e.count, e.materialIndex);
			}
			return t;
		}
		toJSON() {
			const t = { metadata: {
				version: 4.7,
				type: "BufferGeometry",
				generator: "BufferGeometry.toJSON"
			} };
			if (t.uuid = this.uuid, t.type = void 0 !== this.parameters && !0 === this._transformed ? "BufferGeometry" : this.type, t.name = this.name, Object.keys(this.userData).length > 0 && (t.userData = this.userData), void 0 !== this.parameters && !0 !== this._transformed) {
				const e = this.parameters;
				for (const s in e) void 0 !== e[s] && (t[s] = e[s]);
				return t;
			}
			t.data = { attributes: {} };
			const e = this.index;
			null !== e && (t.data.index = {
				type: e.array.constructor.name,
				array: Array.prototype.slice.call(e.array)
			});
			const s = this.attributes;
			for (const h in s) {
				const e = s[h];
				t.data.attributes[h] = e.toJSON(t.data);
			}
			const i = {};
			let r = !1;
			for (const h in this.morphAttributes) {
				const e = this.morphAttributes[h], s = [];
				for (let i = 0, r = e.length; i < r; i++) {
					const r = e[i];
					s.push(r.toJSON(t.data));
				}
				s.length > 0 && (i[h] = s, r = !0);
			}
			r && (t.data.morphAttributes = i, t.data.morphTargetsRelative = this.morphTargetsRelative);
			const n = this.groups;
			n.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(n)));
			const a = this.boundingSphere;
			return null !== a && (t.data.boundingSphere = a.toJSON()), t;
		}
		clone() {
			return new this.constructor().copy(this);
		}
		copy(t) {
			this.index = null, this.attributes = {}, this.morphAttributes = {}, this.groups = [], this.boundingBox = null, this.boundingSphere = null;
			const e = {};
			this.name = t.name;
			const s = t.index;
			null !== s && this.setIndex(s.clone());
			const i = t.attributes;
			for (const o in i) {
				const t = i[o];
				this.setAttribute(o, t.clone(e));
			}
			const r = t.morphAttributes;
			for (const o in r) {
				const t = [], s = r[o];
				for (let i = 0, r = s.length; i < r; i++) t.push(s[i].clone(e));
				this.morphAttributes[o] = t;
			}
			this.morphTargetsRelative = t.morphTargetsRelative;
			const n = t.groups;
			for (let o = 0, l = n.length; o < l; o++) {
				const t = n[o];
				this.addGroup(t.start, t.count, t.materialIndex);
			}
			const a = t.boundingBox;
			null !== a && (this.boundingBox = a.clone());
			const h = t.boundingSphere;
			return null !== h && (this.boundingSphere = h.clone()), this.drawRange.start = t.drawRange.start, this.drawRange.count = t.drawRange.count, this.userData = t.userData, this._transformed = t._transformed, this;
		}
		dispose() {
			this.dispatchEvent({ type: "dispose" });
		}
	};
	function convertArray(t, e) {
		return t && t.constructor !== e ? "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) : t;
	}
	function hasTangents(t) {
		return void 0 !== t && void 0 !== t.inTangents && void 0 !== t.outTangents;
	}
	var Wt = class {
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
	}, Xt = class extends Wt {
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
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = t * a, o = h - a, l = this._offsetPrev, c = this._offsetNext, u = this._weightPrev, m = this._weightNext, d = (s - e) / (i - e), p = d * d, y = p * d, x = -u * y + 2 * u * p - u * d, f = (1 + u) * y + (-1.5 - 2 * u) * p + (-.5 + u) * d + 1, g = (-1 - m) * y + (1.5 + m) * p + .5 * d, b = m * y - m * p;
			for (let M = 0; M !== a; ++M) r[M] = x * n[l + M] + f * n[o + M] + g * n[h + M] + b * n[c + M];
			return r;
		}
	}, jt = class extends Wt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = t * a, o = h - a, l = (s - e) / (i - e), c = 1 - l;
			for (let u = 0; u !== a; ++u) r[u] = n[o + u] * c + n[h + u] * l;
			return r;
		}
	}, Yt = class extends Wt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t) {
			return this.copySampleValue_(t - 1);
		}
	}, Gt = class extends Wt {
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = t * a, o = h - a, l = this.inTangents, c = this.outTangents;
			if (!l || !c) {
				const t = (s - e) / (i - e), l = 1 - t;
				for (let e = 0; e !== a; ++e) r[e] = n[o + e] * l + n[h + e] * t;
				return r;
			}
			const u = 2 * a, m = t - 1;
			for (let d = 0; d !== a; ++d) {
				const a = n[o + d], p = n[h + d], y = m * u + 2 * d, x = c[y], f = c[y + 1], g = t * u + 2 * d, b = l[g], M = l[g + 1], w = solveBezierParameter(s, e, x, b, i);
				r[d] = cubicBezier(w, a, f, M, p);
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
	var Ht = class {
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
			return new Yt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodLinear(t) {
			return new jt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodSmooth(t) {
			return new Xt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodBezier(t) {
			const e = new Gt(this.times, this.values, this.getValueSize(), t);
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
	Ht.prototype.ValueTypeName = "", Ht.prototype.TimeBufferType = Float32Array, Ht.prototype.ValueBufferType = Float32Array, Ht.prototype.DefaultInterpolation = s;
	var $t = class extends Ht {
		constructor(t, e, s) {
			super(t, e, s);
		}
	};
	$t.prototype.ValueTypeName = "bool", $t.prototype.ValueBufferType = Array, $t.prototype.DefaultInterpolation = e, $t.prototype.InterpolantFactoryMethodLinear = void 0, $t.prototype.InterpolantFactoryMethodSmooth = void 0;
	(class extends Ht {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "color";
	(class extends Ht {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "number";
	var Jt = class extends Wt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, h = (s - e) / (i - e);
			let o = t * a;
			for (let l = o + a; o !== l; o += 4) y.slerpFlat(r, 0, n, o - a, n, o, h);
			return r;
		}
	}, Qt = class extends Ht {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		InterpolantFactoryMethodLinear(t) {
			return new Jt(this.times, this.values, this.getValueSize(), t);
		}
	};
	Qt.prototype.ValueTypeName = "quaternion", Qt.prototype.InterpolantFactoryMethodSmooth = void 0;
	var Kt = class extends Ht {
		constructor(t, e, s) {
			super(t, e, s);
		}
	};
	Kt.prototype.ValueTypeName = "string", Kt.prototype.ValueBufferType = Array, Kt.prototype.DefaultInterpolation = e, Kt.prototype.InterpolantFactoryMethodLinear = void 0, Kt.prototype.InterpolantFactoryMethodSmooth = void 0;
	(class extends Ht {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "vector";
	const te = /* @__PURE__ */ new RegExp("[\\[\\]\\.:\\/]", "g"), ee = "[^\\[\\]\\.:\\/]", se = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", ie = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", ee) + /(WCOD+)?/.source.replace("WCOD", se) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ee) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ee) + "$"), re = [
		"material",
		"materials",
		"bones",
		"map"
	];
	var ne = class PropertyBinding {
		constructor(t, e, s) {
			this.path = e, this.parsedPath = s || PropertyBinding.parseTrackName(e), this.node = PropertyBinding.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
		static create(t, e, s) {
			return t && t.isAnimationObjectGroup ? new PropertyBinding.Composite(t, e, s) : new PropertyBinding(t, e, s);
		}
		static sanitizeNodeName(t) {
			return t.replace(/\s/g, "_").replace(te, "");
		}
		static parseTrackName(t) {
			const e = ie.exec(t);
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
				-1 !== re.indexOf(t) && (s.nodeName = s.nodeName.substring(0, i), s.objectName = t);
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
	ne.Composite = class {
		constructor(t, e, s) {
			const i = s || ne.parseTrackName(e);
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
	}, ne.prototype.BindingType = {
		Direct: 0,
		EntireArray: 1,
		ArrayElement: 2,
		HasFromToArray: 3
	}, ne.prototype.Versioning = {
		None: 0,
		NeedsUpdate: 1,
		MatrixWorldNeedsUpdate: 2
	}, ne.prototype.GetterByBindingType = [
		ne.prototype._getValue_direct,
		ne.prototype._getValue_array,
		ne.prototype._getValue_arrayElement,
		ne.prototype._getValue_toArray
	], ne.prototype.SetterByBindingTypeAndVersioning = [
		[
			ne.prototype._setValue_direct,
			ne.prototype._setValue_direct_setNeedsUpdate,
			ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate
		],
		[
			ne.prototype._setValue_array,
			ne.prototype._setValue_array_setNeedsUpdate,
			ne.prototype._setValue_array_setMatrixWorldNeedsUpdate
		],
		[
			ne.prototype._setValue_arrayElement,
			ne.prototype._setValue_arrayElement_setNeedsUpdate,
			ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
		],
		[
			ne.prototype._setValue_fromArray,
			ne.prototype._setValue_fromArray_setNeedsUpdate,
			ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
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
	const ae = new x(-14.5, -2.5, -27.5), he = new x(14.5, 11, 16.5), oe = (new x().subVectors(he, ae), {
		seed: 1056,
		cavernWidth: 1,
		vaultHeight: 1,
		meander: 1,
		strataStrength: 1,
		skylightSize: 1,
		terraceSteps: 10,
		rimstoneScale: 1,
		waterLevel: 0
	}), le = 32, ce = 31;
	function createHollowRandom(t) {
		let e = Math.imul(2654435769 ^ Math.floor(t), 2246822507) >>> 0 || 1;
		return () => {
			e = e + 1831565813 >>> 0;
			let t = Math.imul(e ^ e >>> 15, 1 | e);
			return t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t, ((t ^ t >>> 14) >>> 0) / 4294967296;
		};
	}
	function smin(t, e, s) {
		if (s <= 1e-5) return Math.min(t, e);
		const i = d.clamp(.5 + .5 * (e - t) / s, 0, 1);
		return t * i + e * (1 - i) - s * i * (1 - i);
	}
	function smax(t, e, s) {
		return -smin(-t, -e, s);
	}
	function smoothstep$1(t, e, s) {
		const i = d.clamp((s - t) / (e - t), 0, 1);
		return i * i * (3 - 2 * i);
	}
	function lip(t, e) {
		const s = t / .03;
		return e * Math.exp(-s * s);
	}
	var ue = class {
		bounds = new ut(ae.clone(), he.clone());
		params = { ...oe };
		fireOrigin = new x(-6.8, 1.85, 10.4);
		skylightCenter = new x(1.35, 9.8, -18.8);
		skylightDirection = new x(.12, .82, -.56).normalize();
		rimstoneCenter = new x(-2.15, 0, 1.15);
		cinemaPose = {
			startX: .62,
			startZ: 6.95,
			targetX: -.18,
			targetY: 1.38,
			targetZ: -12.2,
			height: 1.68,
			fov: 39
		};
		heroSide = 1;
		featureDensity = 1;
		cinemaTracks = {
			forward: 1.1,
			lateral: -.42,
			lookDrift: .22
		};
		lattice = /* @__PURE__ */ new Float32Array(32768);
		spinePhase1 = 0;
		spinePhase2 = 0;
		spineAmp1 = .85;
		spineAmp2 = 1.35;
		spineFreq1 = .19;
		spineFreq2 = .14;
		spineBias = 0;
		rearSwing = 1.35;
		rimPhase1 = 0;
		rimPhase2 = 0;
		rimRotC = .92;
		rimRotS = .39;
		rimRx = 2.05;
		rimRz = 1.38;
		ribPhase = 0;
		ribDiagX = .78;
		ribDiagZ = .62;
		browZ = -12;
		bedOffset = 0;
		cascadeStartZ = -10;
		cascadeEndZ = -20.4;
		cascadeRise = 2.35;
		leftGalleryStrength = 1;
		rightBenchStrength = 1;
		thalwegBias = .25;
		vaultCrown = 5.05;
		widthBias = 1;
		vaultBias = 1;
		meanderBias = 1;
		wallLeftSpan = 6.6;
		wallRightSpan = 5.5;
		channelDepth = 1.55;
		fireAlcoveRx = 2.8;
		fireAlcoveRy = 2.1;
		fireAlcoveRz = 2.6;
		spillPillar = new x(-3.4, 1.4, 8.2);
		lakeExtentCache = null;
		memoSpine = (/* @__PURE__ */ new Float64Array(2)).fill(NaN);
		memoRim = (/* @__PURE__ */ new Float64Array(4)).fill(NaN);
		lastLip = 1 / 0;
		constructor(t) {
			this.configure(t ?? {});
		}
		get widthScale() {
			return this.params.cavernWidth * this.widthBias;
		}
		get gallerySide() {
			return -this.heroSide;
		}
		get rimstoneReach() {
			return Math.max(this.rimRx, this.rimRz) * Math.max(.35, this.params.rimstoneScale) * 1.6;
		}
		get cascadeStart() {
			return this.cascadeStartZ;
		}
		get cascadeEnd() {
			return this.cascadeEndZ;
		}
		configure(t) {
			this.params = {
				...this.params,
				...t
			};
			const e = createHollowRandom(this.params.seed);
			for (let h = 0; h < this.lattice.length; h++) this.lattice[h] = 2 * e() - 1;
			const s = Math.floor(5 * e());
			this.widthBias = 2 === s ? 1.15 + .35 * e() : 1 === s ? .72 + .22 * e() : .82 + .45 * e(), this.vaultBias = 4 === s ? 1.15 + .4 * e() : 1 === s ? .78 + .28 * e() : .85 + .45 * e(), this.meanderBias = 1 === s ? .55 + .55 * e() : .7 + 1.15 * e(), this.wallLeftSpan = (3 === s ? 7.4 : 5.4) + 3.2 * e(), this.wallRightSpan = (2 === s ? 6.8 : 4.4) + 2.8 * e(), this.channelDepth = 1.05 + 1.35 * e(), e(), e(), this.spinePhase1 = e() * Math.PI * 2, this.spinePhase2 = e() * Math.PI * 2, this.spineAmp1 = .55 + 2.4 * e(), this.spineAmp2 = .55 + 1.85 * e(), this.spineFreq1 = .08 + .26 * e(), this.spineFreq2 = .06 + .28 * e(), this.spineBias = 8.5 * (e() - .5), this.rearSwing = .6 + 3.6 * e(), e() < .5 && (this.spineAmp1 *= -1, this.spineAmp2 *= -1, this.rearSwing *= -1), this.rimPhase1 = e() * Math.PI * 2, this.rimPhase2 = e() * Math.PI * 2;
			const i = 2.4 * (e() - .5);
			this.rimRotC = Math.cos(i), this.rimRotS = Math.sin(i), this.rimRx = 1.25 + 2.15 * e(), this.rimRz = .85 + 1.55 * e(), this.ribPhase = e() * Math.PI * 2, this.ribDiagX = .35 + 1.05 * e(), this.ribDiagZ = .25 + 1 * e(), e() < .5 && (this.ribDiagX *= -1), this.browZ = -7.5 - 10.5 * e(), this.bedOffset = 5 * e(), this.cascadeStartZ = -5.5 - 8.5 * e(), this.cascadeEndZ = this.cascadeStartZ - (6 + 10.5 * e()), this.cascadeRise = 1.15 + 3.1 * e(), this.leftGalleryStrength = 3 === s ? 1.1 + 1.2 * e() : .15 + 1.75 * e(), this.rightBenchStrength = .1 + 1.85 * e(), this.thalwegBias = 1.45 * (e() - .5), this.vaultCrown = 3.6 + 3.8 * e(), this.heroSide = e() < .5 ? 1 : -1, this.featureDensity = .45 + 1.55 * e(), this.placeCinema(e), this.skylightCenter.set(this.spineBias + 11 * (e() - .5), 7.8 + 3 * e(), d.clamp(this.cascadeEndZ + 4.5 * (e() - .5), -26.5, -12));
			const r = .85 * (e() - .5), n = -.15 - .7 * e();
			this.skylightDirection.set(r, .45 + .5 * e(), n).normalize();
			const a = e() < .82 ? -this.heroSide : this.heroSide;
			this.rimstoneCenter.set(this.cinemaPose.startX + a * (.6 + 3.8 * e()) + 1.8 * (e() - .5), this.params.waterLevel, d.clamp(5.2 * e() - 1.8, -2.4, 4.2)), this.lakeExtentCache = null, this.clearMemos(), this.ensureClearView(), this.clearMemos();
		}
		clearMemos() {
			this.memoSpine.fill(NaN), this.memoRim.fill(NaN);
		}
		placeCinema(t) {
			const e = 4.2 + 5.8 * t(), s = .15 * this.spineBias + 6.5 * (t() - .5), i = Math.floor(3 * t()), r = 0 === i ? -6 - 5.5 * t() : 1 === i ? this.cascadeStartZ - 4 * t() : this.cascadeEndZ + 2 + 4 * t(), n = this.spineBias * (.25 + .55 * t()) + 5.5 * (t() - .5);
			this.cinemaPose.startX = s, this.cinemaPose.startZ = e, this.cinemaPose.targetX = n, this.cinemaPose.targetY = .55 + 2.2 * t(), this.cinemaPose.targetZ = Math.min(r, e - 6), this.cinemaPose.height = .85 + 2.15 * t(), this.cinemaPose.fov = 28 + 22 * t(), this.cinemaTracks.forward = .35 + 2 * t(), this.cinemaTracks.lateral = 2.2 * (t() - .5), this.cinemaTracks.lookDrift = 1.4 * (t() - .5);
			const a = this.params.waterLevel + this.cinemaPose.height, h = this.cinemaPose.targetX - s, o = this.params.waterLevel + this.cinemaPose.targetY - a, l = this.cinemaPose.targetZ - e, c = Math.hypot(h, o, l) || 1, u = h / c, m = o / c, p = l / c;
			let y = p, x = -u;
			const f = Math.hypot(y, x) || 1;
			y /= f, x /= f;
			const g = t() < .72 ? -1 : 1, b = 3.4 + 5.5 * t(), M = g * (3.6 + 5.5 * t());
			this.fireOrigin.set(s - u * b + y * M, this.params.waterLevel + .95 + 1.85 * t(), e - p * b + x * M), this.fireOrigin.x = d.clamp(this.fireOrigin.x, ae.x + 2.5, he.x - 2.5), this.fireOrigin.z = d.clamp(this.fireOrigin.z, e + 2.2, he.z - 1.5);
			{
				const t = (this.fireOrigin.x - s) * u + (this.fireOrigin.y - a) * m + (this.fireOrigin.z - e) * p;
				if (t > -2.8) {
					const s = t + 2.8;
					this.fireOrigin.x -= u * s, this.fireOrigin.y -= m * s, this.fireOrigin.z -= p * s, this.fireOrigin.z = Math.max(this.fireOrigin.z, e + 2.2);
				}
			}
			this.fireAlcoveRx = 2 + 2.4 * t(), this.fireAlcoveRy = 1.45 + 1.7 * t(), this.fireAlcoveRz = 1.8 + 2.4 * t(), this.spillPillar.set(d.lerp(this.fireOrigin.x, s, .38 + .28 * t()), this.params.waterLevel + .75 + 1.35 * t(), d.lerp(this.fireOrigin.z, e - .6, .28 + .3 * t()));
		}
		viewClearance() {
			const t = this.cinemaPose, e = this.cinemaTracks, s = this.params.waterLevel;
			let i = 1;
			for (const r of [
				0,
				.5,
				1
			]) {
				const n = t.startX + e.lateral * (r - .5), a = t.startZ - e.forward * (r - .5), h = Math.max(s + t.height, this.floorHeightAt(n, a, !0) + .42), o = t.targetX + e.lookDrift * (r - .5) - n, l = s + t.targetY - h, c = t.targetZ - a, u = Math.hypot(o, l, c), m = Math.min(12, u) / u;
				let d = 0;
				for (let t = 1; t <= 48; t++) {
					const e = t / 48 * m;
					this.sample(n + o * e, h + l * e, a + c * e) > 0 && d++;
				}
				i = Math.min(i, d / 48);
			}
			return i;
		}
		ensureClearView() {
			let t = this.viewClearance();
			if (t >= .95) return;
			const snapshot = () => ({
				pose: { ...this.cinemaPose },
				tracks: { ...this.cinemaTracks },
				fire: this.fireOrigin.clone(),
				alcove: [
					this.fireAlcoveRx,
					this.fireAlcoveRy,
					this.fireAlcoveRz
				],
				pillar: this.spillPillar.clone()
			});
			let e = snapshot();
			const s = createHollowRandom(613 * this.params.seed + 17);
			for (let i = 0; i < 24 && t < .95; i++) {
				this.placeCinema(s);
				const i = this.viewClearance();
				i > t && (t = i, e = snapshot());
			}
			Object.assign(this.cinemaPose, e.pose), Object.assign(this.cinemaTracks, e.tracks), this.fireOrigin.copy(e.fire), [this.fireAlcoveRx, this.fireAlcoveRy, this.fireAlcoveRz] = e.alcove, this.spillPillar.copy(e.pillar);
		}
		noise3(t, e, s) {
			const i = Math.floor(t), r = Math.floor(e), n = Math.floor(s), a = t - i, h = e - r, o = s - n, l = a * a * (3 - 2 * a), c = h * h * (3 - 2 * h), u = o * o * (3 - 2 * o), m = i & ce, d = i + 1 & ce, p = (r & ce) * le, y = (r + 1 & ce) * le, x = (n & ce) * le * le, f = (n + 1 & ce) * le * le, g = this.lattice, b = g[m + p + x], M = g[d + p + x], w = g[m + y + x], z = g[d + y + x], _ = g[m + p + f], S = g[d + p + f], A = g[m + y + f], T = b + (M - b) * l, k = _ + (S - _) * l, B = T + (w + (z - w) * l - T) * c;
			return B + (k + (A + (g[d + y + f] - A) * l - k) * c - B) * u;
		}
		fbm3(t, e, s, i = 3) {
			let r = 0, n = .55, a = t, h = e, o = s, l = 0;
			for (let c = 0; c < i; c++) r += n * this.noise3(a, h, o), l += n, n *= .5, a = 2.03 * a + 7.13, h = 2.03 * h + 3.71, o = 2.03 * o + 11.3;
			return r / l;
		}
		spineX(t) {
			const e = this.memoSpine;
			return e[0] === t ? e[1] : (e[0] = t, e[1] = this.computeSpineX(t));
		}
		computeSpineX(t) {
			const e = this.params.meander * this.meanderBias, s = -this.spineAmp1 * Math.sin((t + 1.5) * this.spineFreq1) + this.rearSwing * smoothstep$1(-8, -18.5, t), i = .22 * this.spineAmp2 * Math.sin(t * this.spineFreq2 + this.spinePhase1) + .11 * this.spineAmp2 * Math.cos(t * (1.9 * this.spineFreq2) + this.spinePhase2);
			return this.spineBias + s * e + i * d.clamp(e, .25, 1.8);
		}
		rimstoneCoord(t, e) {
			const s = this.memoRim;
			return s[0] === t && s[1] === e ? s[2] : (s[0] = t, s[1] = e, s[2] = this.computeRimstoneCoord(t, e));
		}
		rimstoneCrestDistance(t, e) {
			return (this.rimstoneCoord(t, e) - .92) * this.memoRim[3];
		}
		computeRimstoneCoord(t, e) {
			const s = Math.max(.35, this.params.rimstoneScale), i = t - this.rimstoneCenter.x, r = e - this.rimstoneCenter.z, n = this.rimRotC, a = this.rimRotS, h = this.rimRx * s, o = this.rimRz * s, l = (-a * i + n * r) / o, c = (n * i + a * r) / h - .18 * l * l, u = Math.sqrt(c * c + l * l), m = c / (u * h), d = l * (1 - .36 * c) / (u * o), p = u > 1e-6 ? 1 / Math.hypot(m, d) : Math.sqrt(h * o);
			if (u > 2.75) return this.memoRim[3] = p, u;
			const y = Math.atan2(l, c), x = 1 + .1 * Math.cos(2 * y + this.rimPhase1) + .06 * Math.sin(3 * y + this.rimPhase2) + .022 * Math.cos(9 * y);
			return this.memoRim[3] = p * x, u / x;
		}
		terrace(t, e, s) {
			const i = Math.max(3, Math.round(this.params.terraceSteps)), r = t - s, n = 2.1 * t + this.rimPhase1, a = 5.3 * t + this.rimPhase2, h = e + .065 * r * r + .11 * Math.sin(n) + .05 * Math.sin(a), o = .13 * r + .231 * Math.cos(n) + .265 * Math.cos(a), l = this.cascadeStartZ - .2, c = this.cascadeEndZ + .2, u = d.clamp((h - l) / (c - l), 0, 1), m = u * u * (3 - 2 * u) * i, p = 6 * u * (1 - u) * i / Math.abs(c - l) * Math.sqrt(1 + o * o), y = 1 / Math.max(p, 1 / 3), x = Math.min(.6, this.cascadeRise / i / 1.3 / y), f = Math.floor(m), g = m - f, b = .96, M = g >= b ? g - b : g + 1 - b;
			this.lastLip = Math.min(M, 1 - M) * y;
			const w = (1 - x) * y, z = M * y, _ = .02 * smoothstep$1(.02, .15, z) * (1 - smoothstep$1(w - .15, w - .02, z));
			return (f + smoothstep$1(b - x, b, g)) / i * this.cascadeRise + lip(this.lastLip, .03) - _;
		}
		cascadeLipDistance(t, e) {
			return smoothstep$1(this.cascadeStartZ + .2, this.cascadeStartZ - 1.2, e) <= 0 ? 1 / 0 : (this.terrace(t, e, this.spineX(e)), this.lastLip);
		}
		rimstoneWaterMask(t, e) {
			return 1 - smoothstep$1(.86, .98, this.rimstoneCoord(t, e));
		}
		floorHeightAt(t, e, s = !0) {
			const i = this.params.waterLevel, r = this.widthScale, n = this.spineX(e), a = (t - n) / r, h = a - this.thalwegBias;
			let o = i + (-this.channelDepth + .16 * h * h + (a * this.thalwegBias < 0 ? .045 * a * a : .11 * a * a));
			const l = smoothstep$1(1.4, 4.1, e);
			if (l > 0) {
				const s = i + .22 + .26 * smoothstep$1(.2, 3.6, t * this.heroSide) + .16 * smoothstep$1(1.8, 5.6, e), r = i + .45 * smoothstep$1(3.8, 7.2, e);
				o = d.lerp(o, Math.max(s, r), l);
			}
			const c = smoothstep$1(-.8, -2.8, e) * (1 - smoothstep$1(-9.8, -12.8, e)), u = smoothstep$1(-2.3, -4.3, -a * this.heroSide);
			if (c * u * this.leftGalleryStrength > 0) {
				const t = i + (.85 + .55 * this.leftGalleryStrength) + .42 * smoothstep$1(-4.5, -6.8, -a * this.heroSide), e = d.clamp(c * u * this.leftGalleryStrength, 0, 1);
				o = d.lerp(o, Math.max(o, t), e);
			}
			const m = smoothstep$1(-8.2, -5.8, e) * (1 - smoothstep$1(2.2, 4.5, e)), p = smoothstep$1(1.55, 3.05, a * this.heroSide);
			if (m * p * this.rightBenchStrength > 0) {
				const t = i + .18 + .56 * this.rightBenchStrength * smoothstep$1(2.3, 4.4, a * this.heroSide), e = d.clamp(m * p * this.rightBenchStrength, 0, 1);
				o = d.lerp(o, Math.max(o, t), e);
			}
			if (smoothstep$1(this.cascadeStartZ, this.cascadeEndZ, e) > 0) {
				const s = .065 * Math.max(0, Math.abs(a) - 2.1) * Math.max(0, Math.abs(a) - 2.1), r = i + .05 + this.terrace(t, e, n) + s, h = this.cascadeStartZ + .2, l = this.cascadeStartZ - 1.2;
				o = d.lerp(o, Math.max(o, r), smoothstep$1(h, l, e));
			}
			if (this.params.rimstoneScale > .05) {
				const s = this.rimstoneCoord(t, e);
				if (s < 2.2) {
					const r = this.memoRim[3], n = (s - .92) * r + .022 * this.noise3(6 * t, 2.5, 6 * e) + .01 * this.noise3(15 * t, 4.5, 15 * e), a = .006 * this.noise3(3.2 * t, .5, 3.2 * e) * smoothstep$1(-.1, 0, n), h = i + function rimstoneProfile(t, e) {
						if (t < 0) return .025 + .07200000000000001 * smoothstep$1(-.06 - .01, -.005, t) + lip(t, .035);
						let s = .097 + lip(t, .035);
						for (let r = 0; r < 2; r++) {
							const i = r * e;
							r > 0 && (s += lip(t - i, .02)), s -= .04 * smoothstep$1(i + .005, i + .005 + .06, t);
						}
						const i = t - 2 * e;
						return s - 1.25 * (i + Math.sqrt(i * i + .0025));
					}(n, d.clamp(.12 * r, .1, .22)) + a;
					o = s < .92 ? h : d.lerp(o, Math.max(o, h), 1 - smoothstep$1(1.95, 2.15, s));
				}
			}
			if (s) {
				const s = smoothstep$1(.85, 1.15, this.rimstoneCoord(t, e));
				o += .22 * this.fbm3(.28 * t + 3.1, 1.7, .28 * e - 2.4, 3) * s;
			}
			return o;
		}
		lakeDepthAt(t, e) {
			if (this.params.rimstoneScale > .05 && this.rimstoneCoord(t, e) < 1.02) return 0;
			const s = this.params.waterLevel - this.floorHeightAt(t, e, !0);
			return s <= 0 || this.macroSample(t, this.params.waterLevel + .05, e) <= 0 ? 0 : s;
		}
		get lakeExtent() {
			if (this.lakeExtentCache) return this.lakeExtentCache;
			let t = 1 / 0, e = -1 / 0, s = 1 / 0, i = -1 / 0;
			for (let r = ae.z; r <= he.z; r += .25) for (let n = ae.x; n <= he.x; n += .25) this.lakeDepthAt(n, r) <= 0 || (t = Math.min(t, n), e = Math.max(e, n), s = Math.min(s, r), i = Math.max(i, r));
			if (t > e) {
				const r = this.spineX(-4);
				t = r - 1, e = r + 1, s = -5, i = -3;
			}
			return this.lakeExtentCache = {
				minX: t - .5,
				maxX: e + .5,
				minZ: s - .5,
				maxZ: i + .5
			}, this.lakeExtentCache;
		}
		get lakeCenterZ() {
			const t = this.lakeExtent;
			return .5 * (t.minZ + t.maxZ);
		}
		ceilingRibMask(t, e) {
			const s = .85 * (this.ribDiagX * t + this.ribDiagZ * e) + this.ribPhase, i = .5 + .5 * Math.cos(s), r = i * i, n = r * r * r, a = this.spineX(e), h = .22 + .78 * (smoothstep$1(a + 1.2, a - 2.4, t) + smoothstep$1(a + 2.2, a + 4.2, t)), o = .95 * Math.exp(-Math.pow((e - this.browZ) / 1.55, 2));
			return d.clamp(n * h + o, 0, 1.25);
		}
		ceilingHeightAt(t, e, s = !0) {
			const i = this.params.vaultHeight * this.vaultBias, r = this.widthScale, n = (t - this.spineX(e)) / (6.6 * r), a = 1 - .19 * Math.exp(-Math.pow((e - this.browZ) / 2.5, 2)), h = 2.1 * smoothstep$1(this.browZ - .5, this.skylightCenter.z - .2, e);
			let o = (this.vaultCrown * a + h - 1.5 * n * n) * i;
			if (o -= .72 * (this.ceilingRibMask(t, e) * (1 - smoothstep$1(this.browZ - 2, this.browZ - 5, e))) * i, s) o += .45 * this.fbm3(.22 * t - 5.2, 4.3, .22 * e + 1.9, 3);
			return o;
		}
		macroSample(t, e, s) {
			const i = this.widthScale, r = this.spineX(s), n = 1.7 * smoothstep$1(-.5, -5, s) * (1 - smoothstep$1(-9.5, -13.5, s)) * d.clamp(this.leftGalleryStrength, .2, 1.6), a = .9 * d.clamp(this.rightBenchStrength - .5, 0, 1.2), h = t - (r - (this.wallLeftSpan + (this.heroSide > 0 ? n : a)) * i), o = r + (this.wallRightSpan - .7 * smoothstep$1(-9, -16, s) + (this.heroSide > 0 ? a : n)) * i - t, l = s - -24.8, c = he.z - .6 - s;
			let u = smin(smin(smin(h, o, 1.4), smin(l, c, 1.8), 1.4), smin(e - this.floorHeightAt(t, s, !1), this.ceilingHeightAt(t, s, !1) - e, 1.1), 1.15);
			const m = (t - this.fireOrigin.x) / this.fireAlcoveRx, p = (e - (this.fireOrigin.y + .25)) / this.fireAlcoveRy, y = (s - this.fireOrigin.z) / this.fireAlcoveRz;
			u = smax(u, 2.9 * (1 - Math.sqrt(m * m + p * p + y * y)), 1.05);
			const x = (t - this.spillPillar.x) / 1.35, f = (s - this.spillPillar.z) / 1.15;
			u = smin(u, 1.35 * (Math.sqrt(x * x + f * f) - 1), .65);
			const g = this.cinemaPose, b = (t - (g.startX + 4.1 * this.heroSide * i)) / 1.75, M = (s - (g.startZ - 5.4)) / 1.55;
			u = smin(u, 1.5 * (Math.sqrt(b * b + M * M) - 1), .75);
			const w = Math.max(.45, this.params.skylightSize), z = d.clamp((e - 2.8) / 8, 0, 1), _ = this.skylightCenter.z + 2.2, S = (t - d.lerp(r + .25, this.skylightCenter.x, z)) / (3.65 * w * (1.08 - .16 * z)), A = (s - d.lerp(_, this.skylightCenter.z, z)) / (3.05 * w * (1.08 - .14 * z));
			return u = smax(u, 3.2 * (1 - Math.sqrt(S * S + A * A)) * w - 6 * (1 - smoothstep$1(1.4, 3.8, e)), 1.15), u;
		}
		sample(t, e, s) {
			let i = this.macroSample(t, e, s);
			if (Math.abs(i) < 2.15) {
				const r = this.params.strataStrength, n = .42 * this.fbm3(.16 * t, .18 * e, .16 * s, 2), a = (e + .035 * t - .025 * s + this.bedOffset + n) / .96, h = Math.floor(a), o = a - h, l = .5 + .5 * Math.sin(2.17 * h + 1.3), c = .45 + .55 * smoothstep$1(-.35, .45, this.noise3(.19 * t + 4.2, .7 * h, .19 * s - 1.8)), u = Math.sin(o * Math.PI * 2) * (.08 + .13 * l) * c, m = smoothstep$1(.95, 1.32, this.rimstoneCoord(t, s)), p = u * r * (smoothstep$1(-.1, .5, e - this.params.waterLevel) * (1 - smoothstep$1(3.6, 5.8, e))) * m;
				i += .38 * this.fbm3(.3 * t + 1.7, .36 * e - 3.1, .3 * s + 5.4, 3) * d.lerp(.15, 1, m) - p;
			}
			return i;
		}
		sampleNormal(t, e, s, i = new x(), r = .06) {
			const n = this.sample(t + r, e, s) - this.sample(t - r, e, s), a = this.sample(t, e + r, s) - this.sample(t, e - r, s), h = this.sample(t, e, s + r) - this.sample(t, e, s - r), o = Math.hypot(n, a, h);
			return o < 1e-7 ? i.set(0, 1, 0) : i.set(n / o, a / o, h / o);
		}
		findCeilingY(t, e) {
			const s = d.clamp(.5 * (this.floorHeightAt(t, e, !1) + this.ceilingHeightAt(t, e, !1)), .8, 5);
			if (this.sample(t, s, e) <= .05) return null;
			let i = s;
			for (let r = s + .35; r <= he.y - .25; r += .35) {
				if (this.sample(t, r, e) <= 0) {
					let s = i, n = r;
					for (let i = 0; i < 7; i++) {
						const i = .5 * (s + n);
						this.sample(t, i, e) > 0 ? s = i : n = i;
					}
					return .5 * (s + n);
				}
				i = r;
			}
			return null;
		}
		findFloorY(t, e, s = 4.2) {
			let i = ae.y + .15, r = this.sample(t, i, e);
			for (let n = i + .3; n <= s; n += .3) {
				const s = this.sample(t, n, e);
				if (r <= 0 && s > 0) {
					let s = i, r = n;
					for (let i = 0; i < 7; i++) {
						const i = .5 * (s + r);
						this.sample(t, i, e) <= 0 ? s = i : r = i;
					}
					return .5 * (s + r);
				}
				i = n, r = s;
			}
			return null;
		}
		zonesAt(t, e, s, i) {
			const r = this.params.waterLevel, n = this.rimstoneCoord(t, s), a = smoothstep$1(this.cascadeStartZ + .2, this.cascadeStartZ - 2.5, s) * (1 - smoothstep$1(r + this.cascadeRise + .5, r + this.cascadeRise + 1.7, e)), h = a * smoothstep$1(.25, .75, i), o = (1 - smoothstep$1(.85, 1.32, n)) * (1 - smoothstep$1(r + .35, r + .85, e)), l = a * (1 - smoothstep$1(2, 3.2, Math.abs(t - this.spineX(s)) / this.widthScale)) * smoothstep$1(.35, .6, i) * .9, c = Math.max(o, l), u = o > 0 ? o * (.5 + .4 * smoothstep$1(.01, .07, Math.abs(this.rimstoneCrestDistance(t, s)))) : 0, m = l > 0 ? l * (.4 + .5 * smoothstep$1(.01, .08, this.cascadeLipDistance(t, s))) : 0, p = smoothstep$1(2.8, 5.2, (t - this.spineX(s)) * this.gallerySide) * smoothstep$1(r + .6, r + 1.3, e) * (1 - smoothstep$1(r + 3, r + 4.2, e)) * .65, y = d.clamp(Math.max(h, p, .85 * c), 0, 1), x = d.clamp((1 - .75 * Math.abs(i)) * (1 - .8 * c), 0, 1), f = 1 - smoothstep$1(r - .05, r + .72, e), g = .45 * smoothstep$1(.2, .75, this.noise3(.85 * t, .18 * e, .85 * s));
			return {
				strata: x,
				travertine: y,
				rimstone: c,
				wetness: d.clamp(Math.max(f, u, m, .4 * h, g), 0, 1)
			};
		}
	};
	function leafKey(t, e, s, i) {
		const r = 1 + (1 << i);
		return t + r * (e + r * s);
	}
	function contourOctree(t, e, s, i, r, n = {
		from: 0,
		to: 1 << i,
		maxLeaf: 1 << i
	}) {
		const a = s / (1 << i), { from: h, to: o, maxLeaf: l } = n, c = [], u = [], m = [], d = [], p = [], add = (t, e, s, i) => (c.push(t), u.push(e), m.push(s), d.push(i), p.push(-1), c.length - 1), y = 1 + (1 << i);
		let x = 65536, f = new Float64Array(x).fill(-1), g = new Float32Array(x), b = 0;
		const slot = (t, e, s, i, r) => {
			const n = r.length - 1;
			let a = (Math.imul(t, 2654435761) ^ Math.imul(e, 2246822519) ^ Math.imul(s, 3266489917)) & n;
			for (; r[a] !== i && -1 !== r[a];) a = a + 1 & n;
			return a;
		}, corner = (s, i, r) => {
			const n = s + y * (i + y * r), h = slot(s, i, r, n, f);
			if (f[h] === n) return g[h];
			const o = t.distance(e.x + s * a, e.y + i * a, e.z + r * a);
			if (f[h] = n, g[h] = o, 2 * ++b > x) {
				const t = f, e = g;
				x *= 2, f = new Float64Array(x).fill(-1), g = new Float32Array(x);
				for (let s = 0; s < t.length; s++) {
					const i = t[s];
					if (-1 === i) continue;
					const r = i % y, n = Math.floor(i / y) % y, a = Math.floor(i / (y * y)), h = slot(r, n, a, i, f);
					f[h] = i, g[h] = e[s];
				}
			}
			return o;
		};
		let M = 0;
		const w = /* @__PURE__ */ new Float32Array(8), cornersOf = () => {
			const t = d[M], e = c[M], s = u[M], i = m[M];
			for (let r = 0; r < 8; r++) w[r] = corner(e + (1 & r) * t, s + (r >> 1 & 1) * t, i + (r >> 2) * t);
			return w;
		}, build = (s, i) => {
			const r = d[s], n = m[s];
			if (!(n < o && n + r > h) && n + r !== h && n !== o) return;
			if (1 === r) return;
			M = s;
			const y = t.visit(e.x + c[s] * a, e.y + u[s] * a, e.z + n * a, r * a, i, cornersOf);
			if (y || (p[s] = -2), !y || !y.split && r <= l) return;
			const x = r >> 1, f = c.length;
			for (let t = 0; t < 8; t++) add(c[s] + (1 & t) * x, u[s] + (t >> 1 & 1) * x, m[s] + (t >> 2) * x, x);
			p[s] = f;
			for (let t = 0; t < 8; t++) build(f + t, y.context);
		};
		build(add(0, 0, 0, 1 << i), r);
		const child = (t, e) => p[t] < 0 ? t : p[t] + e, leaf = (t) => p[t] < 0, empty = (t) => -2 === p[t], owned = (t) => m[t] >= h && m[t] < o, z = /* @__PURE__ */ new Map(), _ = [], refer = (t) => {
			const e = leafKey(c[t], u[t], m[t], i);
			let s = z.get(e);
			return void 0 === s && (s = _.length, z.set(e, s), _.push(e)), -2 - s;
		}, S = new Int32Array(c.length).fill(-1), A = [], T = [], k = [], B = [], accumulate = (t, e, s, i) => {
			let r = S[t];
			return r < 0 && (r = S[t] = T.length, A.push(0, 0, 0), T.push(0), k.push(t)), A[3 * r] += e, A[3 * r + 1] += s, A[3 * r + 2] += i, T[r]++, r;
		}, C = [
			0,
			0,
			0
		], R = [
			0,
			0,
			0
		], E = /* @__PURE__ */ new Int32Array(4), F = /* @__PURE__ */ new Int32Array(4), edgeProc = (s, i, r, n, l) => {
			if (leaf(s) && leaf(i) && leaf(r) && leaf(n)) return void ((s, i, r, n, l) => {
				if (empty(s) || empty(i) || empty(r) || empty(n)) return;
				let p = 0, y = s;
				d[i] < d[y] && (p = 1, y = i), d[r] < d[y] && (p = 2, y = r), d[n] < d[y] && (p = 3, y = n);
				const x = d[y], f = (l + 1) % 3, g = (l + 2) % 3;
				C[0] = c[y], C[1] = u[y], C[2] = m[y], C[f] += (1 - (1 & p)) * x, C[g] += (1 - (p >> 1)) * x, R[0] = C[0], R[1] = C[1], R[2] = C[2], R[l] += x;
				const b = C[2] + R[2];
				if (b < 2 * h || b > 2 * o) return;
				if (t.emit && !t.emit(e.x + .5 * (C[0] + R[0]) * a, e.y + .5 * (C[1] + R[1]) * a, e.z + .5 * (C[2] + R[2]) * a)) return;
				const M = corner(C[0], C[1], C[2]), w = corner(R[0], R[1], R[2]);
				if (M >= 0 == w >= 0) return;
				const z = M / (M - w), _ = e.x + (C[0] + (R[0] - C[0]) * z) * a, S = e.y + (C[1] + (R[1] - C[1]) * z) * a, A = e.z + (C[2] + (R[2] - C[2]) * z) * a;
				E[0] = s, E[1] = i, E[2] = n, E[3] = r;
				const T = b < 2 * o;
				let k = 0;
				for (let t = 0; t < 4; t++) {
					const e = E[t];
					e !== E[(t + 3) % 4] && (F[k++] = owned(e) ? accumulate(e, _, S, A) : T ? refer(e) : 0);
				}
				k < 3 || !T || (M >= 0 ? 4 === k ? B.push(F[3], F[2], F[1], F[0]) : B.push(F[2], F[1], F[0], -1) : B.push(F[0], F[1], F[2], 4 === k ? F[3] : -1));
			})(s, i, r, n, l);
			const p = 1 << (l + 1) % 3, y = 1 << (l + 2) % 3;
			for (let t = 0; t < 2; t++) {
				const e = t << l;
				edgeProc(child(s, e | p | y), child(i, e | y), child(r, e | p), child(n, e), l);
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
		const P = T.length, N = new Float32Array(3 * P), V = new Float32Array(4 * P), I = [], O = [];
		for (let D = 0; D < P; D++) {
			N[3 * D] = A[3 * D] / T[D], N[3 * D + 1] = A[3 * D + 1] / T[D], N[3 * D + 2] = A[3 * D + 2] / T[D];
			const t = k[D];
			V[4 * D] = e.x + c[t] * a, V[4 * D + 1] = e.y + u[t] * a, V[4 * D + 2] = e.z + m[t] * a, V[4 * D + 3] = d[t] * a, m[t] !== h && m[t] + d[t] !== o || (I.push(leafKey(c[t], u[t], m[t], i)), O.push(D));
		}
		return {
			positions: N,
			cells: V,
			quads: new Int32Array(B),
			foreign: new Float64Array(_),
			boundaryKeys: new Float64Array(I),
			boundaryVertices: new Int32Array(O)
		};
	}
	const me = .0125, de = 64, pe = [
		.04,
		.1,
		.2,
		.34
	], ye = [
		.4,
		.3,
		.2,
		.1
	];
	function smoothstep(t, e, s) {
		const i = d.clamp((s - t) / (e - t), 0, 1);
		return i * i * (3 - 2 * i);
	}
	function boundsDistance(t, e, s, i) {
		const r = Math.max(0, t.min.x - e, e - t.max.x), n = Math.max(0, t.min.y - s, s - t.max.y), a = Math.max(0, t.min.z - i, i - t.max.z);
		return Math.sqrt(r * r + n * n + a * a);
	}
	function roundCone(t, e, s, i, r, n, a, h, o, l, c) {
		const u = h - i, m = o - r, d = l - n, p = u * u + m * m + d * d, y = a - c, x = p - y * y, f = t - i, g = e - r, b = s - n;
		if (x <= 1e-12) return Math.min(Math.hypot(f, g, b) - a, Math.hypot(t - h, e - o, s - l) - c);
		const M = 1 / p, w = f * u + g * m + b * d, z = w - p, _ = f * p - u * w, S = g * p - m * w, A = b * p - d * w, T = _ * _ + S * S + A * A, k = w * w * p, B = z * z * p, C = Math.sign(y) * y * y * T;
		return Math.sign(z) * x * B > C ? Math.sqrt(T + B) * M - c : Math.sign(w) * x * k < C ? Math.sqrt(T + k) * M - a : (Math.sqrt(T * x * M) + w * y) * M - a;
	}
	function ellipsoid(t, e, s, i, r, n) {
		const a = Math.hypot(t / i, e / r, s / n);
		if (a < 1) return (a - 1) * Math.min(i, r, n);
		return a * (a - 1) / Math.hypot(t / (i * i), e / (r * r), s / (n * n));
	}
	function stalactiteCell(t, e) {
		return d.clamp(.2 * t * e, me, .04 * e);
	}
	function bodyZones(t, e, s, i, r) {
		switch (t.kind) {
			case "stalactite":
				r.set([
					.15,
					.92,
					0,
					"straw" === t.form ? .7 + .3 * e : .45 + .55 * smoothstep(.45, .95, e)
				]);
				return;
			case "stalagmite":
				r.set([
					.1,
					.92,
					0,
					"boss" === t.form ? .5 : .55 + .35 * smoothstep(.65, 1, e)
				]);
				return;
			case "flowstone":
				r.set([
					.05,
					.88,
					.5 * smoothstep(.6, .9, s) * smoothstep(.5, .9, e),
					.6 + .3 * e
				]);
				return;
			case "drapery":
				r.set([
					.1,
					.96,
					0,
					.55 + .4 * e
				]);
				return;
			case "rock": r.set([
				Math.max(i.strata, .55),
				i.travertine,
				i.rimstone,
				i.wetness
			]);
		}
	}
	var xe = class {
		field;
		bodies;
		reach;
		nx;
		ny;
		nz;
		cells;
		rimMin = new x();
		rimMax = new x();
		rimRadius;
		cascadeMin;
		cascadeMax;
		all;
		lastT = 0;
		lastRadius = 0;
		lastSheet = /* @__PURE__ */ new Float32Array(2);
		lastRim = 0;
		own = /* @__PURE__ */ new Float32Array(4);
		featureCell = .05;
		constructor(t, e) {
			this.field = t, this.bodies = e, this.reach = new Float32Array(e.map((t) => Math.max(1.5, 2) * t.blend)), this.nx = Math.ceil((he.x - ae.x) / 1), this.ny = Math.ceil((he.y - ae.y) / 1), this.nz = Math.ceil((he.z - ae.z) / 1);
			const s = Array.from({ length: this.nx * this.ny * this.nz }, () => []);
			e.forEach((t, e) => {
				const i = this.reach[e], r = this.cellIndex(t.min.x - i, 0, this.nx), n = this.cellIndex(t.min.y - i, 1, this.ny), a = this.cellIndex(t.min.z - i, 2, this.nz), h = this.cellIndex(t.max.x + i, 0, this.nx), o = this.cellIndex(t.max.y + i, 1, this.ny), l = this.cellIndex(t.max.z + i, 2, this.nz);
				for (let c = a; c <= l; c++) for (let t = n; t <= o; t++) for (let i = r; i <= h; i++) s[i + this.nx * (t + this.ny * c)].push(e);
			}), this.cells = s.map((t) => new Int32Array(t)), this.all = new Int32Array(e.map((t, e) => e));
			const i = t.params.waterLevel;
			this.rimRadius = Math.max(.3, t.rimstoneReach / 1.6 * .5);
			const r = 1.15 * t.rimstoneReach + .5;
			this.rimMin.set(t.rimstoneCenter.x - r, i - .4, t.rimstoneCenter.z - r), this.rimMax.set(t.rimstoneCenter.x + r, i + .55, t.rimstoneCenter.z + r), this.cascadeMin = t.cascadeEnd - 1.5, this.cascadeMax = t.cascadeStart + .5;
		}
		cellIndex(t, e, s) {
			return d.clamp(Math.floor((t - ae.getComponent(e)) / 1), 0, s - 1);
		}
		bodiesAt(t, e, s) {
			return this.cells[this.cellIndex(t, 0, this.nx) + this.nx * (this.cellIndex(e, 1, this.ny) + this.ny * this.cellIndex(s, 2, this.nz))];
		}
		reaches(t, e, s, i) {
			const r = this.bodies[t], n = this.reach[t];
			return e > r.min.x - n && e < r.max.x + n && s > r.min.y - n && s < r.max.y + n && i > r.min.z - n && i < r.max.z + n;
		}
		caveDistance(t, e, s) {
			const i = Math.min(t - ae.x, he.x - t, s - ae.z, he.z - s, e - ae.y) - .1;
			return i < -.5 ? i : Math.min(this.field.sample(t, e, s), i);
		}
		bodyDistance(t, e, s, i, r = 1 / 0) {
			switch (t.kind) {
				case "stalactite": return this.stalactiteDistance(t, e, s, i, r);
				case "stalagmite": return this.stalagmiteDistance(t, e, s, i, r);
				case "flowstone": return this.flowstoneDistance(t, e, s, i, r);
				case "drapery": return this.draperyDistance(t, e, s, i);
				case "rock": return this.rockDistance(t, e, s, i);
			}
		}
		rockDistance(t, e, s, i) {
			const r = t.rotation, n = e - t.center.x, a = s - t.center.y, h = i - t.center.z, o = r[0] * n + r[1] * a + r[2] * h, l = r[3] * n + r[4] * a + r[5] * h, c = r[6] * n + r[7] * a + r[8] * h, u = 1.12 * t.radii.x, m = 1.12 * t.radii.y, d = 1.12 * t.radii.z, p = o / u, y = l / m, x = c / d, f = Math.sqrt(p * p + y * y + x * x), g = Math.sqrt(p * p / (u * u) + y * y / (m * m) + x * x / (d * d));
			let b = g > 1e-9 ? f * (f - 1) / g : -Math.min(u, m, d);
			const M = t.planes;
			for (let A = 0; A < M.length; A += 4) b = smax(b, M[A] * o + M[A + 1] * l + M[A + 2] * c - M[A + 3], t.bevel);
			const w = o / t.radii.x, z = l / t.radii.y, _ = c / t.radii.z, S = Math.sqrt(w * w + z * z + _ * _);
			if (S > 1e-6) {
				const i = t.seed;
				b -= t.relief * this.field.fbm3(w / S * 2.3 + .13 * i, z / S * 2.8 - .07 * i, _ / S * 2.3 + .19 * i, 3), b += .022 * Math.sin(13.5 * (s + .04 * e)) * (Math.sqrt(w * w + _ * _) / S);
			}
			return b;
		}
		stalactiteDistance(t, e, s, i, r) {
			const n = t.spine, a = t.segments, h = n.length / 4 - 1;
			let o = r, l = -1;
			const c = n[n.length - 4] - n[4], u = n[n.length - 3] - n[5], m = n[n.length - 2] - n[6], p = ((e - n[4]) * c + (s - n[5]) * u + (i - n[6]) * m) / (c * c + u * u + m * m), y = d.clamp(Math.round(p * (h - 1)) + 1, 0, h - 1);
			for (let d = 0; d < h; d++) {
				const t = 0 === d ? y : d <= y ? d - 1 : d, r = 4 * t, h = o + a[r + 3];
				if (h >= 0) {
					const t = e - a[r], n = s - a[r + 1], o = i - a[r + 2];
					if (t * t + n * n + o * o >= h * h) continue;
				}
				const c = roundCone(e, s, i, n[r], n[r + 1], n[r + 2], n[r + 3], n[r + 4], n[r + 5], n[r + 6], n[r + 7]);
				c < o && (o = c, l = t);
			}
			if (l < 0) return r;
			const x = 4 * l, f = n[x + 4] - n[x], g = n[x + 5] - n[x + 1], b = n[x + 6] - n[x + 2], M = f * f + g * g + b * b, w = M > 0 ? d.clamp(((e - n[x]) * f + (s - n[x + 1]) * g + (i - n[x + 2]) * b) / M, 0, 1) : 0, z = d.clamp((l - 1 + w) / (h - 1), 0, 1);
			this.lastT = z;
			const _ = d.lerp(n[x + 3], n[x + 7], w);
			this.lastRadius = _;
			const S = d.lerp(t.fluteDepth[l], t.fluteDepth[l + 1], w);
			if (S > 1e-4) {
				const s = n[x] + f * w, r = n[x + 2] + b * w, a = t.frame, h = e - s, l = i - r, c = Math.atan2(a[2] * h + a[3] * l, a[0] * h + a[1] * l);
				o -= S * Math.cos(t.flutes * c + t.phase + .8 * z);
			}
			if (t.ridge > 0) {
				const e = stalactiteCell(_, t.coarsen);
				o -= t.ridge * (1 - z) * smoothstep(3 * e, 5 * e, .07) * Math.sin(s * (2 * Math.PI / .07) + t.phase);
			}
			return o;
		}
		stalagmiteDistance(t, e, s, i, r) {
			const n = t.plates, a = t.smooth;
			this.lastT = d.clamp((s - t.foot) / (t.top - t.foot), 0, 1);
			let h = 1 / 0;
			for (let u = 0; u < n.length; u += 7) h = Math.min(h, Math.hypot(e - n[u], s - n[u + 1], i - n[u + 2]) - n[u + 6]);
			const o = h - .25 * a - t.ridge;
			if (o >= r) return o;
			let l = 1 / 0;
			for (let u = 0; u < n.length; u += 7) {
				const t = e - n[u], r = s - n[u + 1], h = i - n[u + 2];
				if (Math.hypot(t, r, h) - n[u + 6] >= l + a) continue;
				const o = ellipsoid(t, r, h, n[u + 3], n[u + 4], n[u + 5]);
				l = l === 1 / 0 ? o : smin(l, o, a);
			}
			t.ridge > 0 && (l -= t.ridge * Math.sin(s * (2 * Math.PI / .09) + t.phase));
			const c = t.cup;
			return c[3] > 0 && (l = smax(l, c[3] - Math.hypot(e - c[0], s - c[1], i - c[2]), .015)), l;
		}
		flowstoneDistance(t, e, s, i, r) {
			const n = t.lobes, a = t.smooth;
			let h = 1 / 0;
			for (let m = 0; m < n.length; m += 17) h = Math.min(h, Math.hypot(e - n[m], s - n[m + 1], i - n[m + 2]) - n[m + 15]);
			const o = h - .25 * a - .008;
			if (o >= r) return o;
			let l = 1 / 0, c = 1 / 0;
			for (let m = 0; m < n.length; m += 17) {
				const t = e - n[m], r = s - n[m + 1], h = i - n[m + 2];
				if (Math.hypot(t, r, h) - n[m + 15] >= l + a) continue;
				const o = ellipsoid(n[m + 3] * t + n[m + 4] * r + n[m + 5] * h, n[m + 6] * t + n[m + 7] * r + n[m + 8] * h, n[m + 9] * t + n[m + 10] * r + n[m + 11] * h, n[m + 12], n[m + 13], n[m + 14]);
				o < c && (c = o, this.lastT = n[m + 16]), l = l === 1 / 0 ? o : smin(l, o, a);
			}
			const u = t.ribs;
			return l - .008 * smoothstep(t.footY + .04, t.footY + .3, s) * Math.cos(30 * (e * u[0] + i * u[1]) + 2 * Math.sin(5 * s) + u[2]);
		}
		draperyDistance(t, e, s, i) {
			const r = t.curve, n = t.tangents, a = n.length / 3;
			let h = 1 / 0, o = 0;
			for (let N = 0; N < a; N++) {
				const t = e - r[3 * N], s = i - r[3 * N + 2], a = d.clamp(t * n[3 * N] + s * n[3 * N + 1], 0, n[3 * N + 2]), l = t - n[3 * N] * a, c = s - n[3 * N + 1] * a, u = l * l + c * c;
				u < h && (h = u, o = N);
			}
			const l = n[3 * o], c = n[3 * o + 1], u = n[3 * o + 2], m = e - r[3 * o], p = i - r[3 * o + 2], y = m * l + p * c, x = p * l - m * c;
			let f = 0;
			0 === o && y < 0 ? f = -y : o === a - 1 && y > u && (f = y - u);
			const g = d.clamp(y / u, 0, 1), b = (o + g) / a, M = r[3 * o + 1] + (r[3 * o + 4] - r[3 * o + 1]) * g, w = .72 * Math.sin(b * Math.PI) + .28, z = Math.sin(13 * b + t.foldPhase), _ = .5 + .5 * Math.cos(34 * b + t.flutePhase), S = t.drop * w * (.68 + .32 * Math.pow(_, 1.8) + .14 * z), A = t.drop * w * (.84 + .14 * z), T = d.clamp((M - s) / S, 0, 1), k = Math.abs(Math.sin(34 * b + .5 * t.flutePhase)), B = 1 - k * k * k, C = 1 - smoothstep(0, .18, T), R = smax(.3 * t.thickness * (1 - .65 * T) * (.55 + .75 * B), .038, .01) + .1 * C * C, E = .5 * R, F = x - .055 * Math.sin(19 * b + t.foldPhase) * smoothstep(.05, .5, T), P = Math.max(M - S + E - s, s - M - .25, 0);
			return this.lastT = T, this.lastSheet[0] = R, this.lastSheet[1] = s - (M - A), this.lastRim = Math.min(s - (M - S), b * t.length, (1 - b) * t.length) - f, Math.sqrt(F * F + P * P + f * f) - E;
		}
		distanceWith(t, e, s, i) {
			let r = this.caveDistance(t, e, s);
			for (let n = 0; n < i.length; n++) {
				const a = i[n];
				if (!this.reaches(a, t, e, s)) continue;
				const h = this.bodies[a], o = r + h.blend;
				boundsDistance(h, t, e, s) >= o || (r = smin(r, this.bodyDistance(h, t, e, s, o), h.blend));
			}
			return r;
		}
		distance(t, e, s) {
			return this.distanceWith(t, e, s, this.bodiesAt(t, e, s));
		}
		zonesAt(t, e, s, i, r, n) {
			const a = this.field.zonesAt(t, e, s, i);
			r[0] = a.strata, r[1] = a.travertine, r[2] = a.rimstone, r[3] = a.wetness, n[0] = 1, n[1] = 0;
			const h = this.bodiesAt(t, e, s);
			if (!h.length) return;
			const o = this.own;
			let l = this.caveDistance(t, e, s);
			for (let c = 0; c < h.length; c++) {
				const u = h[c];
				if (!this.reaches(u, t, e, s)) continue;
				const m = this.bodies[u], p = l + 2 * m.blend;
				if (boundsDistance(m, t, e, s) >= p) continue;
				const y = this.bodyDistance(m, t, e, s, p), x = d.clamp(.5 + .5 * (l - y) / (2 * m.blend), 0, 1);
				bodyZones(m, this.lastT, i, a, o);
				for (let t = 0; t < 4; t++) r[t] += (o[t] - r[t]) * x;
				"drapery" === m.kind ? (n[0] += (this.lastSheet[0] - n[0]) * x, n[1] += (this.lastSheet[1] - n[1]) * x) : n[0] += (1 - n[0]) * x, l = smin(l, y, m.blend);
			}
		}
		cellFor(t, e, s, i, r) {
			let n = .2, a = .05;
			const h = this.rimMin, o = this.rimMax, l = .5 * i, c = l * Math.sqrt(3);
			t < o.x && t + i > h.x && e < o.y && e + i > h.y && s < o.z && s + i > h.z && this.field.rimstoneCoord(t + l, s + l) < 1.45 + 2 * i / this.rimRadius && (n = .05, a = me), s < this.cascadeMax && s + i > this.cascadeMin && this.field.cascadeLipDistance(t + l, s + l) < .12 + c && Math.abs(e + l - this.field.floorHeightAt(t + l, s + l, !1)) < .25 + c && (n = .05, a = .025);
			for (let u = 0; u < r.length; u++) {
				const h = this.bodies[r[u]], o = Math.max(0, h.min.x - (t + i), t - h.max.x), m = Math.max(0, h.min.y - (e + i), e - h.max.y), d = Math.max(0, h.min.z - (s + i), s - h.max.z);
				let p = Math.sqrt(o * o + m * m + d * d);
				if (h.cell + .65 * p >= n && p >= h.blend) continue;
				p = Math.max(p, Math.abs(this.bodyDistance(h, t + l, e + l, s + l)) - c);
				const y = "stalactite" === h.kind ? stalactiteCell(this.lastRadius, h.coarsen) : h.cell;
				if (n = Math.min(n, y + .65 * p), p >= h.blend) continue;
				const x = "drapery" === h.kind && this.lastRim < .06 + c;
				a = Math.min(a, x ? me : "stalactite" === h.kind ? y : h.feature);
			}
			return this.featureCell = a, n;
		}
		visit(t, e, s, i, r, n) {
			if (t >= he.x || e >= he.y || s >= he.z) return null;
			const a = [];
			for (let z = 0; z < r.length; z++) {
				const n = r[z], h = this.bodies[n], o = this.reach[n];
				t < h.max.x + o && t + i > h.min.x - o && e < h.max.y + o && e + i > h.min.y - o && s < h.max.z + o && s + i > h.min.z - o && a.push(n);
			}
			const h = .5 * i, o = this.distanceWith(t + h, e + h, s + h, a), l = h * Math.sqrt(3);
			if (Math.abs(o) > 9 * l) return null;
			const c = a.length === r.length ? r : new Int32Array(a), u = n(), m = o < 0;
			let d = !1, p = 0, y = Math.abs(o), x = o, f = o;
			for (let z = 0; z < 8; z++) u[z] < 0 !== m && (d = !0), p += u[z], y = Math.min(y, Math.abs(u[z])), x = Math.min(x, u[z]), f = Math.max(f, u[z]);
			if (!d && y > Math.max(1.2 * l, f - x)) return {
				split: !1,
				context: c
			};
			if (i > 1.001 * this.cellFor(t, e, s, i, a)) return {
				split: !0,
				context: c
			};
			if (!d || i <= 1.001 * this.featureCell) return {
				split: !1,
				context: c
			};
			const g = u[1] - u[0] + u[3] - u[2] + u[5] - u[4] + u[7] - u[6], b = u[2] - u[0] + u[3] - u[1] + u[6] - u[4] + u[7] - u[5], M = u[4] - u[0] + u[5] - u[1] + u[6] - u[2] + u[7] - u[3], w = Math.sqrt(g * g + b * b + M * M) / (4 * i);
			return {
				split: Math.abs(p / 8 - o) / Math.max(w, .001) > .12 * i,
				context: c
			};
		}
		sculptSlab(t) {
			const e = contourOctree({
				distance: (t, e, s) => this.distance(t, e, s),
				visit: (t, e, s, i, r, n) => this.visit(t, e, s, i, r, n),
				emit: (t, e) => e < he.y
			}, ae, 51.2, 12, this.all, t), { positions: s, cells: i } = e, r = s.length / 3, n = new Float32Array(3 * r), a = new Float32Array(4 * r), h = new Float32Array(2 * r), o = new Float32Array(r), l = /* @__PURE__ */ new Float32Array(4), c = /* @__PURE__ */ new Float32Array(2), u = [
				0,
				0,
				0
			], gradient = (t, e, s, i) => {
				const r = this.distance(t + i, e - i, s - i), n = this.distance(t - i, e - i, s + i), a = this.distance(t - i, e + i, s - i), h = this.distance(t + i, e + i, s + i);
				return u[0] = (r - n - a + h) / (4 * i), u[1] = (-r - n + a + h) / (4 * i), u[2] = (-r + n - a + h) / (4 * i), this.distance(t, e, s);
			}, m = new Float32Array(r).fill(1), project = (t, e, r) => {
				let a = s[3 * t], h = s[3 * t + 1], o = s[3 * t + 2];
				const l = i[4 * t + 3];
				let c;
				if (r) {
					c = gradient(a, h, o, d.clamp(.15 * l, .004, .02));
					const e = Math.sqrt(u[0] * u[0] + u[1] * u[1] + u[2] * u[2]);
					e > 1e-5 && (n[3 * t] = u[0] / e, n[3 * t + 1] = u[1] / e, n[3 * t + 2] = u[2] / e, m[t] = e);
				} else c = this.distance(a, h, o);
				const p = d.clamp(c / m[t], -.5 * l, .5 * l), y = e * l;
				a = d.clamp(a - n[3 * t] * p, i[4 * t] - y, i[4 * t] + l + y), h = d.clamp(h - n[3 * t + 1] * p, i[4 * t + 1] - y, i[4 * t + 1] + l + y), o = d.clamp(o - n[3 * t + 2] * p, i[4 * t + 2] - y, i[4 * t + 2] + l + y), s[3 * t] = a, s[3 * t + 1] = h, s[3 * t + 2] = o;
			};
			for (let d = 0; d < r; d++) n[3 * d + 1] = 1, project(d, 0, !0);
			const { quads: p } = e, y = new Int32Array(r + 1), x = new Uint8Array(r);
			for (const d of e.boundaryVertices) x[d] = 1;
			const eachSide = (t) => {
				for (let e = 0; e < p.length; e += 4) {
					const s = -1 === p[e + 3] ? 3 : 4;
					for (let i = 0; i < s; i++) t(p[e + i], p[e + (i + 1) % s]);
				}
			};
			eachSide((t, e) => {
				t >= 0 && e >= 0 ? (y[t + 1]++, y[e + 1]++) : (t >= 0 && (x[t] = 1), e >= 0 && (x[e] = 1));
			});
			for (let d = 0; d < r; d++) y[d + 1] += y[d];
			const f = y.slice(0, r), g = new Int32Array(y[r]);
			eachSide((t, e) => {
				t < 0 || e < 0 || (g[f[t]++] = e, g[f[e]++] = t);
			});
			for (let d = 0; d < 3; d++) {
				const t = s.slice();
				for (let e = 0; e < r; e++) {
					if (x[e] || y[e + 1] === y[e]) continue;
					let i = 0, r = 0, a = 0;
					for (let s = y[e]; s < y[e + 1]; s++) i += t[3 * g[s]], r += t[3 * g[s] + 1], a += t[3 * g[s] + 2];
					const h = 1 / (y[e + 1] - y[e]), o = i * h - t[3 * e], l = r * h - t[3 * e + 1], c = a * h - t[3 * e + 2], u = n[3 * e], m = n[3 * e + 1], d = n[3 * e + 2], p = o * u + l * m + c * d;
					s[3 * e] = t[3 * e] + .5 * (o - p * u), s[3 * e + 1] = t[3 * e + 1] + .5 * (l - p * m), s[3 * e + 2] = t[3 * e + 2] + .5 * (c - p * d), project(e, .5, !1);
				}
			}
			for (let d = 0; d < r; d++) project(d, .5, !0);
			for (let b = 0; b < r; b++) {
				const t = s[3 * b], e = s[3 * b + 1], i = s[3 * b + 2], r = n[3 * b], u = n[3 * b + 1], m = n[3 * b + 2];
				this.zonesAt(t, e, i, u, l, c), a.set(l, 4 * b), h.set(c, 2 * b);
				let p = 0;
				for (let s = 0; s < pe.length; s++) {
					const n = pe[s], a = this.distance(t + r * n, e + u * n, i + m * n);
					p += ye[s] * d.clamp((n - a) / n, 0, 1);
				}
				o[b] = 1 - p;
			}
			return {
				contour: e,
				normals: n,
				zones: a,
				sheets: h,
				occlusion: o
			};
		}
		buildGeometry() {
			return function assembleSculpt(t) {
				const { offsets: e, count: s, quads: i } = function stitchSlabs(t) {
					const e = [];
					let s = 0;
					const i = /* @__PURE__ */ new Map();
					for (const a of t) e.push(s), a.boundaryKeys.forEach((t, e) => i.set(t, s + a.boundaryVertices[e])), s += a.positions.length / 3;
					const r = new Int32Array(t.reduce((t, e) => t + e.quads.length, 0));
					let n = 0;
					return t.forEach((t, s) => {
						const a = t.quads;
						for (let h = 0; h < a.length; h++) {
							const o = a[h];
							if (o >= 0) r[n++] = e[s] + o;
							else if (-1 === o) r[n++] = -1;
							else {
								const e = i.get(t.foreign[-o - 2]);
								if (void 0 === e) throw new Error("stitchSlabs: a polygon refers to a leaf no slab has");
								r[n++] = e;
							}
						}
					}), {
						offsets: e,
						count: s,
						quads: r
					};
				}(t.map((t) => t.contour)), r = new Float32Array(3 * s), n = new Float32Array(3 * s), a = new Float32Array(4 * s), h = new Float32Array(2 * s), o = new Float32Array(s);
				t.forEach((t, s) => {
					r.set(t.contour.positions, 3 * e[s]), n.set(t.normals, 3 * e[s]), a.set(t.zones, 4 * e[s]), h.set(t.sheets, 2 * e[s]), o.set(t.occlusion, e[s]);
				});
				const l = function triangulateQuads(t, e, s) {
					const i = new Uint32Array(1.5 * e.length);
					let r = 0;
					const n = t, a = s, dist2 = (t, e) => {
						const s = n[3 * t] - n[3 * e], i = n[3 * t + 1] - n[3 * e + 1], r = n[3 * t + 2] - n[3 * e + 2];
						return s * s + i * i + r * r;
					}, bend = (t, e) => a ? Math.abs((a[3 * t] - a[3 * e]) * (n[3 * e] - n[3 * t]) + (a[3 * t + 1] - a[3 * e + 1]) * (n[3 * e + 1] - n[3 * t + 1]) + (a[3 * t + 2] - a[3 * e + 2]) * (n[3 * e + 2] - n[3 * t + 2])) : 0, facing = (t, e, s) => {
						if (!a) return !0;
						const i = n[3 * e] - n[3 * t], r = n[3 * e + 1] - n[3 * t + 1], h = n[3 * e + 2] - n[3 * t + 2], o = n[3 * s] - n[3 * t], l = n[3 * s + 1] - n[3 * t + 1], c = n[3 * s + 2] - n[3 * t + 2];
						return (r * c - h * l) * (a[3 * t] + a[3 * e] + a[3 * s]) + (h * o - i * c) * (a[3 * t + 1] + a[3 * e + 1] + a[3 * s + 1]) + (i * l - r * o) * (a[3 * t + 2] + a[3 * e + 2] + a[3 * s + 2]) > 0;
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
				}(r, i, n), c = new Uint32Array(l.length);
				let u = 0, m = l.length;
				for (let y = 0; y < l.length; y += 3) {
					const t = l[y], e = l[y + 1], s = l[y + 2];
					let i = u;
					Math.min(h[2 * t], h[2 * e], h[2 * s]) < fe ? i = m -= 3 : u += 3, c[i] = t, c[i + 1] = e, c[i + 2] = s;
				}
				const d = new Zt();
				d.setAttribute("position", new kt(r, 3)), d.setAttribute("normal", new kt(n, 3)), d.setAttribute("aZone", new kt(a, 4)), d.setAttribute("aSheet", new kt(h, 2)), d.setAttribute("aOcclusion", new kt(o, 1)), d.setIndex(new kt(c, 1)), d.addGroup(0, u, 0), d.addGroup(u, l.length - u, 1);
				const p = new ut(ae.clone(), he.clone());
				return d.boundingBox = p, d.boundingSphere = p.getBoundingSphere(new Nt()), d;
			}(function hollowSlabs() {
				const t = [], e = Math.ceil((he.z - ae.z) / me);
				for (let s = 0; s < e; s += de) t.push({
					from: s,
					to: s + de,
					maxLeaf: de
				});
				return t;
			}().map((t) => this.sculptSlab(t)));
		}
	};
	const fe = .5;
	function reviveBody(t) {
		const v = (t) => new x(t.x, t.y, t.z);
		return "rock" === t.kind ? {
			...t,
			min: v(t.min),
			max: v(t.max),
			center: v(t.center),
			radii: v(t.radii)
		} : {
			...t,
			min: v(t.min),
			max: v(t.max)
		};
	}
	let ge = null, be = -1;
	self.onmessage = (t) => {
		const e = t.data;
		if ("init" === e.kind) return ge = new xe(new ue(e.params), e.bodies.map(reviveBody)), void (be = e.job);
		if (!ge || e.job !== be) return;
		const s = ge.sculptSlab(e.slab), { contour: i } = s, r = {
			job: be,
			index: e.index,
			part: s
		}, n = [
			i.positions,
			i.cells,
			i.quads,
			i.foreign,
			i.boundaryKeys,
			i.boundaryVertices,
			s.normals,
			s.zones,
			s.sheets,
			s.occlusion
		].map((t) => t.buffer);
		self.postMessage(r, n);
	};
})();
