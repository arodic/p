(function() {
	/**
	* @license
	* Copyright 2010-2026 Three.js Authors
	* SPDX-License-Identifier: MIT
	*/
	const t = 1001, e = 1016, s = 1023, i = 2300, r = 2301, n = 2302, a = "srgb", o = "srgb-linear", h = "linear";
	function createElementNS(t) {
		return document.createElementNS("http://www.w3.org/1999/xhtml", t);
	}
	const l = {};
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
		e in l || (l[e] = !0, warn(...t));
	}
	var u = class {
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
	const c = [
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
	function generateUUID() {
		const t = 4294967295 * Math.random() | 0, e = 4294967295 * Math.random() | 0, s = 4294967295 * Math.random() | 0, i = 4294967295 * Math.random() | 0;
		return (c[255 & t] + c[t >> 8 & 255] + c[t >> 16 & 255] + c[t >> 24 & 255] + "-" + c[255 & e] + c[e >> 8 & 255] + "-" + c[e >> 16 & 15 | 64] + c[e >> 24 & 255] + "-" + c[63 & s | 128] + c[s >> 8 & 255] + "-" + c[s >> 16 & 255] + c[s >> 24 & 255] + c[255 & i] + c[i >> 8 & 255] + c[i >> 16 & 255] + c[i >> 24 & 255]).toLowerCase();
	}
	function clamp(t, e, s) {
		return Math.max(e, Math.min(s, t));
	}
	function lerp(t, e, s) {
		return (1 - s) * t + s * e;
	}
	var d = class {
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
	}, p = class {
		constructor(t = 0, e = 0, s = 0, i = 1) {
			this.isQuaternion = !0, this._x = t, this._y = e, this._z = s, this._w = i;
		}
		static slerpFlat(t, e, s, i, r, n, a) {
			let o = s[i + 0], h = s[i + 1], l = s[i + 2], u = s[i + 3], c = r[n + 0], d = r[n + 1], p = r[n + 2], m = r[n + 3];
			if (u !== m || o !== c || h !== d || l !== p) {
				let t = o * c + h * d + l * p + u * m;
				t < 0 && (c = -c, d = -d, p = -p, m = -m, t = -t);
				let e = 1 - a;
				if (t < .9995) {
					const s = Math.acos(t), i = Math.sin(s);
					e = Math.sin(e * s) / i, o = o * e + c * (a = Math.sin(a * s) / i), h = h * e + d * a, l = l * e + p * a, u = u * e + m * a;
				} else {
					o = o * e + c * a, h = h * e + d * a, l = l * e + p * a, u = u * e + m * a;
					const t = 1 / Math.sqrt(o * o + h * h + l * l + u * u);
					o *= t, h *= t, l *= t, u *= t;
				}
			}
			t[e] = o, t[e + 1] = h, t[e + 2] = l, t[e + 3] = u;
		}
		static multiplyQuaternionsFlat(t, e, s, i, r, n) {
			const a = s[i], o = s[i + 1], h = s[i + 2], l = s[i + 3], u = r[n], c = r[n + 1], d = r[n + 2], p = r[n + 3];
			return t[e] = a * p + l * u + o * d - h * c, t[e + 1] = o * p + l * c + h * u - a * d, t[e + 2] = h * p + l * d + a * c - o * u, t[e + 3] = l * p - a * u - o * c - h * d, t;
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
			const s = t._x, i = t._y, r = t._z, n = t._order, a = Math.cos, o = Math.sin, h = a(s / 2), l = a(i / 2), u = a(r / 2), c = o(s / 2), d = o(i / 2), p = o(r / 2);
			switch (n) {
				case "XYZ":
					this._x = c * l * u + h * d * p, this._y = h * d * u - c * l * p, this._z = h * l * p + c * d * u, this._w = h * l * u - c * d * p;
					break;
				case "YXZ":
					this._x = c * l * u + h * d * p, this._y = h * d * u - c * l * p, this._z = h * l * p - c * d * u, this._w = h * l * u + c * d * p;
					break;
				case "ZXY":
					this._x = c * l * u - h * d * p, this._y = h * d * u + c * l * p, this._z = h * l * p + c * d * u, this._w = h * l * u - c * d * p;
					break;
				case "ZYX":
					this._x = c * l * u - h * d * p, this._y = h * d * u + c * l * p, this._z = h * l * p - c * d * u, this._w = h * l * u + c * d * p;
					break;
				case "YZX":
					this._x = c * l * u + h * d * p, this._y = h * d * u + c * l * p, this._z = h * l * p - c * d * u, this._w = h * l * u - c * d * p;
					break;
				case "XZY":
					this._x = c * l * u - h * d * p, this._y = h * d * u - c * l * p, this._z = h * l * p + c * d * u, this._w = h * l * u + c * d * p;
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
			const e = t.elements, s = e[0], i = e[4], r = e[8], n = e[1], a = e[5], o = e[9], h = e[2], l = e[6], u = e[10], c = s + a + u;
			if (c > 0) {
				const t = .5 / Math.sqrt(c + 1);
				this._w = .25 / t, this._x = (l - o) * t, this._y = (r - h) * t, this._z = (n - i) * t;
			} else if (s > a && s > u) {
				const t = 2 * Math.sqrt(1 + s - a - u);
				this._w = (l - o) / t, this._x = .25 * t, this._y = (i + n) / t, this._z = (r + h) / t;
			} else if (a > u) {
				const t = 2 * Math.sqrt(1 + a - s - u);
				this._w = (r - h) / t, this._x = (i + n) / t, this._y = .25 * t, this._z = (o + l) / t;
			} else {
				const t = 2 * Math.sqrt(1 + u - s - a);
				this._w = (n - i) / t, this._x = (r + h) / t, this._y = (o + l) / t, this._z = .25 * t;
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
			const s = t._x, i = t._y, r = t._z, n = t._w, a = e._x, o = e._y, h = e._z, l = e._w;
			return this._x = s * l + n * a + i * h - r * o, this._y = i * l + n * o + r * a - s * h, this._z = r * l + n * h + s * o - i * a, this._w = n * l - s * a - i * o - r * h, this._onChangeCallback(), this;
		}
		slerp(t, e) {
			let s = t._x, i = t._y, r = t._z, n = t._w, a = this.dot(t);
			a < 0 && (s = -s, i = -i, r = -r, n = -n, a = -a);
			let o = 1 - e;
			if (a < .9995) {
				const t = Math.acos(a), h = Math.sin(t);
				o = Math.sin(o * t) / h, e = Math.sin(e * t) / h, this._x = this._x * o + s * e, this._y = this._y * o + i * e, this._z = this._z * o + r * e, this._w = this._w * o + n * e, this._onChangeCallback();
			} else this._x = this._x * o + s * e, this._y = this._y * o + i * e, this._z = this._z * o + r * e, this._w = this._w * o + n * e, this.normalize();
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
	}, m = class {
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
			const e = this.x, s = this.y, i = this.z, r = t.x, n = t.y, a = t.z, o = t.w, h = 2 * (n * i - a * s), l = 2 * (a * e - r * i), u = 2 * (r * s - n * e);
			return this.x = e + o * h + n * u - a * l, this.y = s + o * l + a * h - r * u, this.z = i + o * u + r * l - n * h, this;
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
			const s = t.x, i = t.y, r = t.z, n = e.x, a = e.y, o = e.z;
			return this.x = i * o - r * a, this.y = r * n - s * o, this.z = s * a - i * n, this;
		}
		projectOnVector(t) {
			const e = t.lengthSq();
			if (0 === e) return this.set(0, 0, 0);
			const s = t.dot(this) / e;
			return this.copy(t).multiplyScalar(s);
		}
		projectOnPlane(t) {
			return y.copy(this).projectOnVector(t), this.sub(y);
		}
		reflect(t) {
			return this.sub(y.copy(t).multiplyScalar(2 * this.dot(t)));
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
	const y = new m(), f = new p();
	var g = class {
		static {
			this.prototype.isMatrix3 = !0;
		}
		constructor(t, e, s, i, r, n, a, o, h) {
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
			], void 0 !== t && this.set(t, e, s, i, r, n, a, o, h);
		}
		set(t, e, s, i, r, n, a, o, h) {
			const l = this.elements;
			return l[0] = t, l[1] = i, l[2] = a, l[3] = e, l[4] = r, l[5] = o, l[6] = s, l[7] = n, l[8] = h, this;
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
			const s = t.elements, i = e.elements, r = this.elements, n = s[0], a = s[3], o = s[6], h = s[1], l = s[4], u = s[7], c = s[2], d = s[5], p = s[8], m = i[0], y = i[3], f = i[6], g = i[1], x = i[4], _ = i[7], b = i[2], M = i[5], v = i[8];
			return r[0] = n * m + a * g + o * b, r[3] = n * y + a * x + o * M, r[6] = n * f + a * _ + o * v, r[1] = h * m + l * g + u * b, r[4] = h * y + l * x + u * M, r[7] = h * f + l * _ + u * v, r[2] = c * m + d * g + p * b, r[5] = c * y + d * x + p * M, r[8] = c * f + d * _ + p * v, this;
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[3] *= t, e[6] *= t, e[1] *= t, e[4] *= t, e[7] *= t, e[2] *= t, e[5] *= t, e[8] *= t, this;
		}
		determinant() {
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], o = t[6], h = t[7], l = t[8];
			return e * n * l - e * a * h - s * r * l + s * a * o + i * r * h - i * n * o;
		}
		invert() {
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], o = t[6], h = t[7], l = t[8], u = l * n - a * h, c = a * o - l * r, d = h * r - n * o, p = e * u + s * c + i * d;
			if (0 === p) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
			const m = 1 / p;
			return t[0] = u * m, t[1] = (i * h - l * s) * m, t[2] = (a * s - i * n) * m, t[3] = c * m, t[4] = (l * e - i * o) * m, t[5] = (i * r - a * e) * m, t[6] = d * m, t[7] = (s * o - h * e) * m, t[8] = (n * e - s * r) * m, this;
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
			const o = Math.cos(r), h = Math.sin(r);
			return this.set(s * o, s * h, -s * (o * n + h * a) + n + t, -i * h, i * o, -i * (-h * n + o * a) + a + e, 0, 0, 1), this;
		}
		scale(t, e) {
			return warnOnce("Matrix3: .scale() is deprecated. Use .makeScale() instead."), this.premultiply(x.makeScale(t, e)), this;
		}
		rotate(t) {
			return warnOnce("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."), this.premultiply(x.makeRotation(-t)), this;
		}
		translate(t, e) {
			return warnOnce("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."), this.premultiply(x.makeTranslation(t, e)), this;
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
	const x = new g(), _ = new g().set(.4123908, .3575843, .1804808, .212639, .7151687, .0721923, .0193308, .1191948, .9505322), b = new g().set(3.2409699, -1.5373832, -.4986108, -.9692436, 1.8759675, .0415551, .0556301, -.203977, 1.0569715);
	function createColorManagement() {
		const t = {
			enabled: !0,
			workingColorSpace: o,
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
				return "" === t ? h : this.spaces[t].transfer;
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
			[o]: {
				primaries: e,
				whitePoint: i,
				transfer: h,
				toXYZ: _,
				fromXYZ: b,
				luminanceCoefficients: s,
				workingColorSpaceConfig: { unpackColorSpace: a },
				outputColorSpaceConfig: { drawingBufferColorSpace: a }
			},
			[a]: {
				primaries: e,
				whitePoint: i,
				transfer: "srgb",
				toXYZ: _,
				fromXYZ: b,
				luminanceCoefficients: s,
				outputColorSpaceConfig: { drawingBufferColorSpace: a }
			}
		}), t;
	}
	const M = createColorManagement();
	function SRGBToLinear(t) {
		return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4);
	}
	function LinearToSRGB(t) {
		return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055;
	}
	let v;
	var z = class {
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
	var S = class {
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
		return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? z.getDataURL(t) : t.data ? {
			data: Array.from(t.data),
			width: t.width,
			height: t.height,
			type: t.data.constructor.name
		} : (warn("Texture: Unable to serialize Texture."), {});
	}
	let k = 0;
	const A = new m();
	var C = class Texture extends u {
		constructor(t = Texture.DEFAULT_IMAGE, e = Texture.DEFAULT_MAPPING, s = 1001, i = 1001, r = 1006, n = 1008, a = 1023, o = 1009, h = Texture.DEFAULT_ANISOTROPY, l = "") {
			super(), this.isTexture = !0, Object.defineProperty(this, "id", { value: k++ }), this.uuid = generateUUID(), this.name = "", this.source = new S(t), this.mipmaps = [], this.mapping = e, this.channel = 0, this.wrapS = s, this.wrapT = i, this.magFilter = r, this.minFilter = n, this.anisotropy = h, this.format = a, this.internalFormat = null, this.type = o, this.offset = new d(0, 0), this.repeat = new d(1, 1), this.center = new d(0, 0), this.rotation = 0, this.matrixAutoUpdate = !0, this.matrix = new g(), this.generateMipmaps = !0, this.mipmapsAutoUpdate = !0, this.premultiplyAlpha = !1, this.flipY = !0, this.unpackAlignment = 4, this.colorSpace = l, this.userData = {}, this.updateRanges = [], this.version = 0, this.onUpdate = null, this.renderTarget = null, this.isRenderTargetTexture = !1, this.isArrayTexture = !!(t && t.depth && t.depth > 1), this.pmremVersion = 0, this.isPMREMTexture = !1, this.normalized = !1;
		}
		get width() {
			return this.source.getSize(A).x;
		}
		get height() {
			return this.source.getSize(A).y;
		}
		get depth() {
			return this.source.getSize(A).z;
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
	C.DEFAULT_IMAGE = null, C.DEFAULT_MAPPING = 300, C.DEFAULT_ANISOTROPY = 1;
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
			const n = .01, a = .1, o = t.elements, h = o[0], l = o[4], u = o[8], c = o[1], d = o[5], p = o[9], m = o[2], y = o[6], f = o[10];
			if (Math.abs(l - c) < n && Math.abs(u - m) < n && Math.abs(p - y) < n) {
				if (Math.abs(l + c) < a && Math.abs(u + m) < a && Math.abs(p + y) < a && Math.abs(h + d + f - 3) < a) return this.set(1, 0, 0, 0), this;
				e = Math.PI;
				const t = (h + 1) / 2, o = (d + 1) / 2, g = (f + 1) / 2, x = (l + c) / 4, _ = (u + m) / 4, b = (p + y) / 4;
				return t > o && t > g ? t < n ? (s = 0, i = .707106781, r = .707106781) : (s = Math.sqrt(t), i = x / s, r = _ / s) : o > g ? o < n ? (s = .707106781, i = 0, r = .707106781) : (i = Math.sqrt(o), s = x / i, r = b / i) : g < n ? (s = .707106781, i = .707106781, r = 0) : (r = Math.sqrt(g), s = _ / r, i = b / r), this.set(s, i, r, e), this;
			}
			let g = Math.sqrt((y - p) * (y - p) + (u - m) * (u - m) + (c - l) * (c - l));
			return Math.abs(g) < .001 && (g = 1), this.x = (y - p) / g, this.y = (u - m) / g, this.z = (c - l) / g, this.w = Math.acos((h + d + f - 1) / 2), this;
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
	var U = class Matrix4 {
		static {
			this.prototype.isMatrix4 = !0;
		}
		constructor(t, e, s, i, r, n, a, o, h, l, u, c, d, p, m, y) {
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
			], void 0 !== t && this.set(t, e, s, i, r, n, a, o, h, l, u, c, d, p, m, y);
		}
		set(t, e, s, i, r, n, a, o, h, l, u, c, d, p, m, y) {
			const f = this.elements;
			return f[0] = t, f[4] = e, f[8] = s, f[12] = i, f[1] = r, f[5] = n, f[9] = a, f[13] = o, f[2] = h, f[6] = l, f[10] = u, f[14] = c, f[3] = d, f[7] = p, f[11] = m, f[15] = y, this;
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
			const e = this.elements, s = t.elements, i = 1 / E.setFromMatrixColumn(t, 0).length(), r = 1 / E.setFromMatrixColumn(t, 1).length(), n = 1 / E.setFromMatrixColumn(t, 2).length();
			return e[0] = s[0] * i, e[1] = s[1] * i, e[2] = s[2] * i, e[3] = 0, e[4] = s[4] * r, e[5] = s[5] * r, e[6] = s[6] * r, e[7] = 0, e[8] = s[8] * n, e[9] = s[9] * n, e[10] = s[10] * n, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
		}
		makeRotationFromEuler(t) {
			const e = this.elements, s = t.x, i = t.y, r = t.z, n = Math.cos(s), a = Math.sin(s), o = Math.cos(i), h = Math.sin(i), l = Math.cos(r), u = Math.sin(r);
			if ("XYZ" === t.order) {
				const t = n * l, s = n * u, i = a * l, r = a * u;
				e[0] = o * l, e[4] = -o * u, e[8] = h, e[1] = s + i * h, e[5] = t - r * h, e[9] = -a * o, e[2] = r - t * h, e[6] = i + s * h, e[10] = n * o;
			} else if ("YXZ" === t.order) {
				const t = o * l, s = o * u, i = h * l, r = h * u;
				e[0] = t + r * a, e[4] = i * a - s, e[8] = n * h, e[1] = n * u, e[5] = n * l, e[9] = -a, e[2] = s * a - i, e[6] = r + t * a, e[10] = n * o;
			} else if ("ZXY" === t.order) {
				const t = o * l, s = o * u, i = h * l, r = h * u;
				e[0] = t - r * a, e[4] = -n * u, e[8] = i + s * a, e[1] = s + i * a, e[5] = n * l, e[9] = r - t * a, e[2] = -n * h, e[6] = a, e[10] = n * o;
			} else if ("ZYX" === t.order) {
				const t = n * l, s = n * u, i = a * l, r = a * u;
				e[0] = o * l, e[4] = i * h - s, e[8] = t * h + r, e[1] = o * u, e[5] = r * h + t, e[9] = s * h - i, e[2] = -h, e[6] = a * o, e[10] = n * o;
			} else if ("YZX" === t.order) {
				const t = n * o, s = n * h, i = a * o, r = a * h;
				e[0] = o * l, e[4] = r - t * u, e[8] = i * u + s, e[1] = u, e[5] = n * l, e[9] = -a * l, e[2] = -h * l, e[6] = s * u + i, e[10] = t - r * u;
			} else if ("XZY" === t.order) {
				const t = n * o, s = n * h, i = a * o, r = a * h;
				e[0] = o * l, e[4] = -u, e[8] = h * l, e[1] = t * u + r, e[5] = n * l, e[9] = s * u - i, e[2] = i * u - s, e[6] = a * l, e[10] = r * u + t;
			}
			return e[3] = 0, e[7] = 0, e[11] = 0, e[12] = 0, e[13] = 0, e[14] = 0, e[15] = 1, this;
		}
		makeRotationFromQuaternion(t) {
			return this.compose(V, t, I);
		}
		lookAt(t, e, s) {
			const i = this.elements;
			return N.subVectors(t, e), 0 === N.lengthSq() && (N.z = 1), N.normalize(), R.crossVectors(s, N), 0 === R.lengthSq() && (1 === Math.abs(s.z) ? N.x += 1e-4 : N.z += 1e-4, N.normalize(), R.crossVectors(s, N)), R.normalize(), B.crossVectors(N, R), i[0] = R.x, i[4] = B.x, i[8] = N.x, i[1] = R.y, i[5] = B.y, i[9] = N.y, i[2] = R.z, i[6] = B.z, i[10] = N.z, this;
		}
		multiply(t) {
			return this.multiplyMatrices(this, t);
		}
		premultiply(t) {
			return this.multiplyMatrices(t, this);
		}
		multiplyMatrices(t, e) {
			const s = t.elements, i = e.elements, r = this.elements, n = s[0], a = s[4], o = s[8], h = s[12], l = s[1], u = s[5], c = s[9], d = s[13], p = s[2], m = s[6], y = s[10], f = s[14], g = s[3], x = s[7], _ = s[11], b = s[15], M = i[0], v = i[4], z = i[8], T = i[12], S = i[1], k = i[5], A = i[9], C = i[13], U = i[2], E = i[6], F = i[10], V = i[14], I = i[3], R = i[7], B = i[11], N = i[15];
			return r[0] = n * M + a * S + o * U + h * I, r[4] = n * v + a * k + o * E + h * R, r[8] = n * z + a * A + o * F + h * B, r[12] = n * T + a * C + o * V + h * N, r[1] = l * M + u * S + c * U + d * I, r[5] = l * v + u * k + c * E + d * R, r[9] = l * z + u * A + c * F + d * B, r[13] = l * T + u * C + c * V + d * N, r[2] = p * M + m * S + y * U + f * I, r[6] = p * v + m * k + y * E + f * R, r[10] = p * z + m * A + y * F + f * B, r[14] = p * T + m * C + y * V + f * N, r[3] = g * M + x * S + _ * U + b * I, r[7] = g * v + x * k + _ * E + b * R, r[11] = g * z + x * A + _ * F + b * B, r[15] = g * T + x * C + _ * V + b * N, this;
		}
		multiplyScalar(t) {
			const e = this.elements;
			return e[0] *= t, e[4] *= t, e[8] *= t, e[12] *= t, e[1] *= t, e[5] *= t, e[9] *= t, e[13] *= t, e[2] *= t, e[6] *= t, e[10] *= t, e[14] *= t, e[3] *= t, e[7] *= t, e[11] *= t, e[15] *= t, this;
		}
		determinant() {
			const t = this.elements, e = t[0], s = t[4], i = t[8], r = t[12], n = t[1], a = t[5], o = t[9], h = t[13], l = t[2], u = t[6], c = t[10], d = t[14], p = t[3], m = t[7], y = t[11], f = t[15], g = o * d - h * c, x = a * d - h * u, _ = a * c - o * u, b = n * d - h * l, M = n * c - o * l, v = n * u - a * l;
			return e * (m * g - y * x + f * _) - s * (p * g - y * b + f * M) + i * (p * x - m * b + f * v) - r * (p * _ - m * M + y * v);
		}
		determinantAffine() {
			const t = this.elements, e = t[0], s = t[4], i = t[8], r = t[1], n = t[5], a = t[9], o = t[2], h = t[6], l = t[10];
			return e * (n * l - a * h) - s * (r * l - a * o) + i * (r * h - n * o);
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
			const t = this.elements, e = t[0], s = t[1], i = t[2], r = t[3], n = t[4], a = t[5], o = t[6], h = t[7], l = t[8], u = t[9], c = t[10], d = t[11], p = t[12], m = t[13], y = t[14], f = t[15], g = e * a - s * n, x = e * o - i * n, _ = e * h - r * n, b = s * o - i * a, M = s * h - r * a, v = i * h - r * o, z = l * m - u * p, T = l * y - c * p, S = l * f - d * p, k = u * y - c * m, A = u * f - d * m, C = c * f - d * y, U = g * C - x * A + _ * k + b * S - M * T + v * z;
			if (0 === U) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
			const E = 1 / U;
			return t[0] = (a * C - o * A + h * k) * E, t[1] = (i * A - s * C - r * k) * E, t[2] = (m * v - y * M + f * b) * E, t[3] = (c * M - u * v - d * b) * E, t[4] = (o * S - n * C - h * T) * E, t[5] = (e * C - i * S + r * T) * E, t[6] = (y * _ - p * v - f * x) * E, t[7] = (l * v - c * _ + d * x) * E, t[8] = (n * A - a * S + h * z) * E, t[9] = (s * S - e * A - r * z) * E, t[10] = (p * M - m * _ + f * g) * E, t[11] = (u * _ - l * M - d * g) * E, t[12] = (a * T - n * k - o * z) * E, t[13] = (e * k - s * T + i * z) * E, t[14] = (m * x - p * b - y * g) * E, t[15] = (l * b - u * x + c * g) * E, this;
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
			const s = Math.cos(e), i = Math.sin(e), r = 1 - s, n = t.x, a = t.y, o = t.z, h = r * n, l = r * a;
			return this.set(h * n + s, h * a - i * o, h * o + i * a, 0, h * a + i * o, l * a + s, l * o - i * n, 0, h * o - i * a, l * o + i * n, r * o * o + s, 0, 0, 0, 0, 1), this;
		}
		makeScale(t, e, s) {
			return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, s, 0, 0, 0, 0, 1), this;
		}
		makeShear(t, e, s, i, r, n) {
			return this.set(1, s, r, 0, t, 1, n, 0, e, i, 1, 0, 0, 0, 0, 1), this;
		}
		compose(t, e, s) {
			const i = this.elements, r = e._x, n = e._y, a = e._z, o = e._w, h = r + r, l = n + n, u = a + a, c = r * h, d = r * l, p = r * u, m = n * l, y = n * u, f = a * u, g = o * h, x = o * l, _ = o * u, b = s.x, M = s.y, v = s.z;
			return i[0] = (1 - (m + f)) * b, i[1] = (d + _) * b, i[2] = (p - x) * b, i[3] = 0, i[4] = (d - _) * M, i[5] = (1 - (c + f)) * M, i[6] = (y + g) * M, i[7] = 0, i[8] = (p + x) * v, i[9] = (y - g) * v, i[10] = (1 - (c + m)) * v, i[11] = 0, i[12] = t.x, i[13] = t.y, i[14] = t.z, i[15] = 1, this;
		}
		decompose(t, e, s) {
			const i = this.elements;
			t.x = i[12], t.y = i[13], t.z = i[14];
			const r = this.determinantAffine();
			if (0 === r) return s.set(1, 1, 1), e.identity(), this;
			let n = E.set(i[0], i[1], i[2]).length();
			const a = E.set(i[4], i[5], i[6]).length(), o = E.set(i[8], i[9], i[10]).length();
			r < 0 && (n = -n), F.copy(this);
			const h = 1 / n, l = 1 / a, u = 1 / o;
			return F.elements[0] *= h, F.elements[1] *= h, F.elements[2] *= h, F.elements[4] *= l, F.elements[5] *= l, F.elements[6] *= l, F.elements[8] *= u, F.elements[9] *= u, F.elements[10] *= u, e.setFromRotationMatrix(F), s.x = n, s.y = a, s.z = o, this;
		}
		makePerspective(t, e, s, i, r, n, a = 2e3, o = !1) {
			const h = this.elements, l = 2 * r / (e - t), u = 2 * r / (s - i), c = (e + t) / (e - t), d = (s + i) / (s - i);
			let p, m;
			if (o) p = r / (n - r), m = n * r / (n - r);
			else if (2e3 === a) p = -(n + r) / (n - r), m = -2 * n * r / (n - r);
			else {
				if (2001 !== a) throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + a);
				p = -n / (n - r), m = -n * r / (n - r);
			}
			return h[0] = l, h[4] = 0, h[8] = c, h[12] = 0, h[1] = 0, h[5] = u, h[9] = d, h[13] = 0, h[2] = 0, h[6] = 0, h[10] = p, h[14] = m, h[3] = 0, h[7] = 0, h[11] = -1, h[15] = 0, this;
		}
		makeOrthographic(t, e, s, i, r, n, a = 2e3, o = !1) {
			const h = this.elements, l = 2 / (e - t), u = 2 / (s - i), c = -(e + t) / (e - t), d = -(s + i) / (s - i);
			let p, m;
			if (o) p = 1 / (n - r), m = n / (n - r);
			else if (2e3 === a) p = -2 / (n - r), m = -(n + r) / (n - r);
			else {
				if (2001 !== a) throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + a);
				p = -1 / (n - r), m = -r / (n - r);
			}
			return h[0] = l, h[4] = 0, h[8] = 0, h[12] = c, h[1] = 0, h[5] = u, h[9] = 0, h[13] = d, h[2] = 0, h[6] = 0, h[10] = p, h[14] = m, h[3] = 0, h[7] = 0, h[11] = 0, h[15] = 1, this;
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
	const E = new m(), F = new U(), V = new m(0, 0, 0), I = new m(1, 1, 1), R = new m(), B = new m(), N = new m(), O = new U(), D = new p();
	var L = class Euler {
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
			const i = t.elements, r = i[0], n = i[4], a = i[8], o = i[1], h = i[5], l = i[9], u = i[2], c = i[6], d = i[10];
			switch (e) {
				case "XYZ":
					this._y = Math.asin(clamp(a, -1, 1)), Math.abs(a) < .9999999 ? (this._x = Math.atan2(-l, d), this._z = Math.atan2(-n, r)) : (this._x = Math.atan2(c, h), this._z = 0);
					break;
				case "YXZ":
					this._x = Math.asin(-clamp(l, -1, 1)), Math.abs(l) < .9999999 ? (this._y = Math.atan2(a, d), this._z = Math.atan2(o, h)) : (this._y = Math.atan2(-u, r), this._z = 0);
					break;
				case "ZXY":
					this._x = Math.asin(clamp(c, -1, 1)), Math.abs(c) < .9999999 ? (this._y = Math.atan2(-u, d), this._z = Math.atan2(-n, h)) : (this._y = 0, this._z = Math.atan2(o, r));
					break;
				case "ZYX":
					this._y = Math.asin(-clamp(u, -1, 1)), Math.abs(u) < .9999999 ? (this._x = Math.atan2(c, d), this._z = Math.atan2(o, r)) : (this._x = 0, this._z = Math.atan2(-n, h));
					break;
				case "YZX":
					this._z = Math.asin(clamp(o, -1, 1)), Math.abs(o) < .9999999 ? (this._x = Math.atan2(-l, h), this._y = Math.atan2(-u, r)) : (this._x = 0, this._y = Math.atan2(a, d));
					break;
				case "XZY":
					this._z = Math.asin(-clamp(n, -1, 1)), Math.abs(n) < .9999999 ? (this._x = Math.atan2(c, h), this._y = Math.atan2(a, r)) : (this._x = Math.atan2(-l, d), this._y = 0);
					break;
				default: warn("Euler: .setFromRotationMatrix() encountered an unknown order: " + e);
			}
			return this._order = e, !0 === s && this._onChangeCallback(), this;
		}
		setFromQuaternion(t, e, s) {
			return O.makeRotationFromQuaternion(t), this.setFromRotationMatrix(O, e, s);
		}
		setFromVector3(t, e = this._order) {
			return this.set(t.x, t.y, t.z, e);
		}
		reorder(t) {
			return D.setFromEuler(this), this.setFromQuaternion(D, t);
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
	L.DEFAULT_ORDER = "XYZ";
	var P = class {
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
	const j = new m(), H = new p(), q = new U(), G = new m(), X = new m(), Y = new m(), Z = new p(), J = new m(1, 0, 0), Q = new m(0, 1, 0), $ = new m(0, 0, 1), K = { type: "added" }, tt = { type: "removed" }, et = {
		type: "childadded",
		child: null
	}, st = {
		type: "childremoved",
		child: null
	};
	var it = class Object3D extends u {
		constructor() {
			super(), this.isObject3D = !0, Object.defineProperty(this, "id", { value: W++ }), this.uuid = generateUUID(), this.name = "", this.type = "Object3D", this.parent = null, this.children = [], this.up = Object3D.DEFAULT_UP.clone();
			const t = new m(), e = new L(), s = new p(), i = new m(1, 1, 1);
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
				modelViewMatrix: { value: new U() },
				normalMatrix: { value: new g() }
			}), this.matrix = new U(), this.matrixWorld = new U(), this.matrixAutoUpdate = Object3D.DEFAULT_MATRIX_AUTO_UPDATE, this.matrixWorldAutoUpdate = Object3D.DEFAULT_MATRIX_WORLD_AUTO_UPDATE, this.matrixWorldNeedsUpdate = !1, this.layers = new P(), this.visible = !0, this.castShadow = !1, this.receiveShadow = !1, this.frustumCulled = !0, this.renderOrder = 0, this.animations = [], this.customDepthMaterial = void 0, this.customDistanceMaterial = void 0, this.static = !1, this.userData = {}, this.pivot = null;
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
			return this.rotateOnAxis(J, t);
		}
		rotateY(t) {
			return this.rotateOnAxis(Q, t);
		}
		rotateZ(t) {
			return this.rotateOnAxis($, t);
		}
		translateOnAxis(t, e) {
			return j.copy(t).applyQuaternion(this.quaternion), this.position.add(j.multiplyScalar(e)), this;
		}
		translateX(t) {
			return this.translateOnAxis(J, t);
		}
		translateY(t) {
			return this.translateOnAxis(Q, t);
		}
		translateZ(t) {
			return this.translateOnAxis($, t);
		}
		localToWorld(t) {
			return this.updateWorldMatrix(!0, !1), t.applyMatrix4(this.matrixWorld);
		}
		worldToLocal(t) {
			return this.updateWorldMatrix(!0, !1), t.applyMatrix4(q.copy(this.matrixWorld).invert());
		}
		lookAt(t, e, s) {
			t.isVector3 ? G.copy(t) : G.set(t, e, s);
			const i = this.parent;
			this.updateWorldMatrix(!0, !1), X.setFromMatrixPosition(this.matrixWorld), this.isCamera || this.isLight ? q.lookAt(X, G, this.up) : q.lookAt(G, X, this.up), this.quaternion.setFromRotationMatrix(q), i && (q.extractRotation(i.matrixWorld), H.setFromRotationMatrix(q), this.quaternion.premultiply(H.invert()));
		}
		add(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
				return this;
			}
			return t === this ? (error("Object3D.add: object can't be added as a child of itself.", t), this) : (t && t.isObject3D ? (t.removeFromParent(), t.parent = this, this.children.push(t), t.dispatchEvent(K), et.child = t, this.dispatchEvent(et), et.child = null) : error("Object3D.add: object not an instance of THREE.Object3D.", t), this);
		}
		remove(t) {
			if (arguments.length > 1) {
				for (let t = 0; t < arguments.length; t++) this.remove(arguments[t]);
				return this;
			}
			const e = this.children.indexOf(t);
			return -1 !== e && (t.parent = null, this.children.splice(e, 1), t.dispatchEvent(tt), st.child = t, this.dispatchEvent(st), st.child = null), this;
		}
		removeFromParent() {
			const t = this.parent;
			return null !== t && t.remove(this), this;
		}
		clear() {
			return this.remove(...this.children);
		}
		attach(t) {
			return this.updateWorldMatrix(!0, !1), q.copy(this.matrixWorld).invert(), null !== t.parent && (t.parent.updateWorldMatrix(!0, !1), q.multiply(t.parent.matrixWorld)), t.applyMatrix4(q), t.removeFromParent(), t.parent = this, this.children.push(t), t.updateWorldMatrix(!1, !0), t.dispatchEvent(K), et.child = t, this.dispatchEvent(et), et.child = null, this;
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
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(X, t, Y), t;
		}
		getWorldScale(t) {
			return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(X, Z, t), t;
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
				const e = extractFromCache(t.geometries), i = extractFromCache(t.materials), r = extractFromCache(t.textures), n = extractFromCache(t.images), a = extractFromCache(t.shapes), o = extractFromCache(t.skeletons), h = extractFromCache(t.animations), l = extractFromCache(t.nodes);
				e.length > 0 && (s.geometries = e), i.length > 0 && (s.materials = i), r.length > 0 && (s.textures = r), n.length > 0 && (s.images = n), a.length > 0 && (s.shapes = a), o.length > 0 && (s.skeletons = o), h.length > 0 && (s.animations = h), l.length > 0 && (s.nodes = l);
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
	it.DEFAULT_UP = new m(0, 1, 0), it.DEFAULT_MATRIX_AUTO_UPDATE = !0, it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
	const rt = {
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
	}, nt = {
		h: 0,
		s: 0,
		l: 0
	}, at = {
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
		setHex(t, e = a) {
			return t = Math.floor(t), this.r = (t >> 16 & 255) / 255, this.g = (t >> 8 & 255) / 255, this.b = (255 & t) / 255, M.colorSpaceToWorking(this, e), this;
		}
		setRGB(t, e, s, i = M.workingColorSpace) {
			return this.r = t, this.g = e, this.b = s, M.colorSpaceToWorking(this, i), this;
		}
		setHSL(t, e, s, i = M.workingColorSpace) {
			if (t = function euclideanModulo(t, e) {
				return (t % e + e) % e;
			}(t, 1), e = clamp(e, 0, 1), s = clamp(s, 0, 1), 0 === e) this.r = this.g = this.b = s;
			else {
				const i = s <= .5 ? s * (1 + e) : s + e - s * e, r = 2 * s - i;
				this.r = hue2rgb(r, i, t + 1 / 3), this.g = hue2rgb(r, i, t), this.b = hue2rgb(r, i, t - 1 / 3);
			}
			return M.colorSpaceToWorking(this, i), this;
		}
		setStyle(t, e = a) {
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
		setColorName(t, e = a) {
			const s = rt[t.toLowerCase()];
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
		getHex(t = a) {
			return M.workingToColorSpace(ht.copy(this), t), 65536 * Math.round(clamp(255 * ht.r, 0, 255)) + 256 * Math.round(clamp(255 * ht.g, 0, 255)) + Math.round(clamp(255 * ht.b, 0, 255));
		}
		getHexString(t = a) {
			return ("000000" + this.getHex(t).toString(16)).slice(-6);
		}
		getHSL(t, e = M.workingColorSpace) {
			M.workingToColorSpace(ht.copy(this), e);
			const s = ht.r, i = ht.g, r = ht.b, n = Math.max(s, i, r), a = Math.min(s, i, r);
			let o, h;
			const l = (a + n) / 2;
			if (a === n) o = 0, h = 0;
			else {
				const t = n - a;
				switch (h = l <= .5 ? t / (n + a) : t / (2 - n - a), n) {
					case s:
						o = (i - r) / t + (i < r ? 6 : 0);
						break;
					case i:
						o = (r - s) / t + 2;
						break;
					case r: o = (s - i) / t + 4;
				}
				o /= 6;
			}
			return t.h = o, t.s = h, t.l = l, t;
		}
		getRGB(t, e = M.workingColorSpace) {
			return M.workingToColorSpace(ht.copy(this), e), t.r = ht.r, t.g = ht.g, t.b = ht.b, t;
		}
		getStyle(t = a) {
			M.workingToColorSpace(ht.copy(this), t);
			const e = ht.r, s = ht.g, i = ht.b;
			return "srgb" !== t ? `color(${t} ${e.toFixed(3)} ${s.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(255 * e)},${Math.round(255 * s)},${Math.round(255 * i)})`;
		}
		offsetHSL(t, e, s) {
			return this.getHSL(nt), this.setHSL(nt.h + t, nt.s + e, nt.l + s);
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
			this.getHSL(nt), t.getHSL(at);
			const s = lerp(nt.h, at.h, e), i = lerp(nt.s, at.s, e), r = lerp(nt.l, at.l, e);
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
	const ht = new ot();
	ot.NAMES = rt;
	const lt = _generateTables();
	function _generateTables() {
		const t = /* @__PURE__ */ new ArrayBuffer(4), e = new Float32Array(t), s = new Uint32Array(t), i = /* @__PURE__ */ new Uint32Array(512), r = /* @__PURE__ */ new Uint32Array(512);
		for (let h = 0; h < 256; ++h) {
			const t = h - 127;
			t < -27 ? (i[h] = 0, i[256 | h] = 32768, r[h] = 24, r[256 | h] = 24) : t < -14 ? (i[h] = 1024 >> -t - 14, i[256 | h] = 1024 >> -t - 14 | 32768, r[h] = -t - 1, r[256 | h] = -t - 1) : t <= 15 ? (i[h] = t + 15 << 10, i[256 | h] = t + 15 << 10 | 32768, r[h] = 13, r[256 | h] = 13) : t < 128 ? (i[h] = 31744, i[256 | h] = 64512, r[h] = 24, r[256 | h] = 24) : (i[h] = 31744, i[256 | h] = 64512, r[h] = 13, r[256 | h] = 13);
		}
		const n = /* @__PURE__ */ new Uint32Array(2048), a = /* @__PURE__ */ new Uint32Array(64), o = /* @__PURE__ */ new Uint32Array(64);
		for (let h = 1; h < 1024; ++h) {
			let t = h << 13, e = 0;
			for (; !(8388608 & t);) t <<= 1, e -= 8388608;
			t &= -8388609, e += 947912704, n[h] = t | e;
		}
		for (let h = 1024; h < 2048; ++h) n[h] = 939524096 + (h - 1024 << 13);
		for (let h = 1; h < 31; ++h) a[h] = h << 23;
		a[31] = 1199570944, a[32] = 2147483648;
		for (let h = 33; h < 63; ++h) a[h] = 2147483648 + (h - 32 << 23);
		a[63] = 3347054592;
		for (let h = 1; h < 64; ++h) 32 !== h && (o[h] = 1024);
		return {
			floatView: e,
			uint32View: s,
			baseTable: i,
			shiftTable: r,
			mantissaTable: n,
			exponentTable: a,
			offsetTable: o
		};
	}
	var ut = class {
		static toHalfFloat(t) {
			return function toHalfFloat(t) {
				Math.abs(t) > 65504 && warn("DataUtils.toHalfFloat(): Value out of range."), t = clamp(t, -65504, 65504), lt.floatView[0] = t;
				const e = lt.uint32View[0], s = e >> 23 & 511;
				return lt.baseTable[s] + ((8388607 & e) >> lt.shiftTable[s]);
			}(t);
		}
		static fromHalfFloat(t) {
			return function fromHalfFloat(t) {
				const e = t >> 10;
				return lt.uint32View[0] = lt.mantissaTable[lt.offsetTable[e] + (1023 & t)] + lt.exponentTable[e], lt.floatView[0];
			}(t);
		}
	}, ct = class extends C {
		constructor(t = null, e = 1, s = 1, i, r, n, a, o, h = 1003, l = 1003, u, c) {
			super(null, n, a, o, h, l, i, r, u, c), this.isDataTexture = !0, this.image = {
				data: t,
				width: e,
				height: s
			}, this.generateMipmaps = !1, this.flipY = !1, this.unpackAlignment = 1;
		}
	};
	function convertArray(t, e) {
		return t && t.constructor !== e ? "number" == typeof e.BYTES_PER_ELEMENT ? new e(t) : Array.prototype.slice.call(t) : t;
	}
	function hasTangents(t) {
		return void 0 !== t && void 0 !== t.inTangents && void 0 !== t.outTangents;
	}
	var dt = class {
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
	}, pt = class extends dt {
		constructor(t, e, s, i) {
			super(t, e, s, i), this._weightPrev = -0, this._offsetPrev = -0, this._weightNext = -0, this._offsetNext = -0, this.DefaultSettings_ = {
				endingStart: 2400,
				endingEnd: 2400
			};
		}
		intervalChanged_(t, e, s) {
			const i = this.parameterPositions;
			let r = t - 2, n = t + 1, a = i[r], o = i[n];
			if (void 0 === a) switch (this.getSettings_().endingStart) {
				case 2401:
					r = t, a = 2 * e - s;
					break;
				case 2402:
					r = i.length - 2, a = e + i[r] - i[r + 1];
					break;
				default: r = t, a = s;
			}
			if (void 0 === o) switch (this.getSettings_().endingEnd) {
				case 2401:
					n = t, o = 2 * s - e;
					break;
				case 2402:
					n = 1, o = s + i[1] - i[0];
					break;
				default: n = t - 1, o = e;
			}
			const h = .5 * (s - e), l = this.valueSize;
			this._weightPrev = h / (e - a), this._weightNext = h / (o - s), this._offsetPrev = r * l, this._offsetNext = n * l;
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, o = t * a, h = o - a, l = this._offsetPrev, u = this._offsetNext, c = this._weightPrev, d = this._weightNext, p = (s - e) / (i - e), m = p * p, y = m * p, f = -c * y + 2 * c * m - c * p, g = (1 + c) * y + (-1.5 - 2 * c) * m + (-.5 + c) * p + 1, x = (-1 - d) * y + (1.5 + d) * m + .5 * p, _ = d * y - d * m;
			for (let b = 0; b !== a; ++b) r[b] = f * n[l + b] + g * n[h + b] + x * n[o + b] + _ * n[u + b];
			return r;
		}
	}, mt = class extends dt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, o = t * a, h = o - a, l = (s - e) / (i - e), u = 1 - l;
			for (let c = 0; c !== a; ++c) r[c] = n[h + c] * u + n[o + c] * l;
			return r;
		}
	}, yt = class extends dt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t) {
			return this.copySampleValue_(t - 1);
		}
	}, ft = class extends dt {
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, o = t * a, h = o - a, l = this.inTangents, u = this.outTangents;
			if (!l || !u) {
				const t = (s - e) / (i - e), l = 1 - t;
				for (let e = 0; e !== a; ++e) r[e] = n[h + e] * l + n[o + e] * t;
				return r;
			}
			const c = 2 * a, d = t - 1;
			for (let p = 0; p !== a; ++p) {
				const a = n[h + p], m = n[o + p], y = d * c + 2 * p, f = u[y], g = u[y + 1], x = t * c + 2 * p, _ = l[x], b = l[x + 1], M = solveBezierParameter(s, e, f, _, i);
				r[p] = cubicBezier(M, a, g, b, m);
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
			const o = cubicBezierSlope(n, e, s, i, r);
			if (Math.abs(o) < 1e-10) break;
			n = Math.max(0, Math.min(1, n - a / o));
		}
		return n;
	}
	var gt = class {
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
			return new yt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodLinear(t) {
			return new mt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodSmooth(t) {
			return new pt(this.times, this.values, this.getValueSize(), t);
		}
		InterpolantFactoryMethodBezier(t) {
			const e = new ft(this.times, this.values, this.getValueSize(), t);
			return this.settings && (e.inTangents = this.settings.inTangents, e.outTangents = this.settings.outTangents), e;
		}
		setInterpolation(t) {
			let e;
			switch (t) {
				case i:
					e = this.InterpolantFactoryMethodDiscrete;
					break;
				case r:
					e = this.InterpolantFactoryMethodLinear;
					break;
				case n:
					e = this.InterpolantFactoryMethodSmooth;
					break;
				case 2303: e = this.InterpolantFactoryMethodBezier;
			}
			if (void 0 === e) {
				const e = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
				if (void 0 === this.createInterpolant) {
					if (t === this.DefaultInterpolation) throw new Error(e);
					this.setInterpolation(this.DefaultInterpolation);
				}
				return warn("KeyframeTrack:", e), this;
			}
			return this.createInterpolant = e, this;
		}
		getInterpolation() {
			switch (this.createInterpolant) {
				case this.InterpolantFactoryMethodDiscrete: return i;
				case this.InterpolantFactoryMethodLinear: return r;
				case this.InterpolantFactoryMethodSmooth: return n;
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
			}(i)) for (let a = 0, o = i.length; a !== o; ++a) {
				const e = i[a];
				if (isNaN(e)) {
					error("KeyframeTrack: Value is not a valid number.", this, a, e), t = !1;
					break;
				}
			}
			return t;
		}
		optimize() {
			const t = this.times.slice(), e = this.values.slice(), s = this.getValueSize(), i = this.getInterpolation() === n, r = t.length - 1;
			let a = 1;
			for (let n = 1; n < r; ++n) {
				let r = !1;
				const o = t[n];
				if (o !== t[n + 1] && (1 !== n || o !== t[0])) if (i) r = !0;
				else {
					const t = n * s, i = t - s, a = t + s;
					for (let n = 0; n !== s; ++n) {
						const s = e[t + n];
						if (s !== e[i + n] || s !== e[a + n]) {
							r = !0;
							break;
						}
					}
				}
				if (r) {
					if (n !== a) {
						t[a] = t[n];
						const i = n * s, r = a * s;
						for (let t = 0; t !== s; ++t) e[r + t] = e[i + t];
					}
					++a;
				}
			}
			if (r > 0) {
				t[a] = t[r];
				for (let t = r * s, i = a * s, n = 0; n !== s; ++n) e[i + n] = e[t + n];
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
	gt.prototype.ValueTypeName = "", gt.prototype.TimeBufferType = Float32Array, gt.prototype.ValueBufferType = Float32Array, gt.prototype.DefaultInterpolation = r;
	var xt = class extends gt {
		constructor(t, e, s) {
			super(t, e, s);
		}
	};
	xt.prototype.ValueTypeName = "bool", xt.prototype.ValueBufferType = Array, xt.prototype.DefaultInterpolation = i, xt.prototype.InterpolantFactoryMethodLinear = void 0, xt.prototype.InterpolantFactoryMethodSmooth = void 0;
	(class extends gt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "color";
	(class extends gt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "number";
	var _t = class extends dt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		interpolate_(t, e, s, i) {
			const r = this.resultBuffer, n = this.sampleValues, a = this.valueSize, o = (s - e) / (i - e);
			let h = t * a;
			for (let l = h + a; h !== l; h += 4) p.slerpFlat(r, 0, n, h - a, n, h, o);
			return r;
		}
	}, bt = class extends gt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
		InterpolantFactoryMethodLinear(t) {
			return new _t(this.times, this.values, this.getValueSize(), t);
		}
	};
	bt.prototype.ValueTypeName = "quaternion", bt.prototype.InterpolantFactoryMethodSmooth = void 0;
	var wt = class extends gt {
		constructor(t, e, s) {
			super(t, e, s);
		}
	};
	wt.prototype.ValueTypeName = "string", wt.prototype.ValueBufferType = Array, wt.prototype.DefaultInterpolation = i, wt.prototype.InterpolantFactoryMethodLinear = void 0, wt.prototype.InterpolantFactoryMethodSmooth = void 0;
	(class extends gt {
		constructor(t, e, s, i) {
			super(t, e, s, i);
		}
	}).prototype.ValueTypeName = "vector";
	const Mt = /* @__PURE__ */ new RegExp("[\\[\\]\\.:\\/]", "g"), vt = "[^\\[\\]\\.:\\/]", zt = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", Tt = new RegExp("^" + /((?:WC+[\/:])*)/.source.replace("WC", vt) + /(WCOD+)?/.source.replace("WCOD", zt) + /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", vt) + /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", vt) + "$"), St = [
		"material",
		"materials",
		"bones",
		"map"
	];
	var kt = class PropertyBinding {
		constructor(t, e, s) {
			this.path = e, this.parsedPath = s || PropertyBinding.parseTrackName(e), this.node = PropertyBinding.findNode(t, this.parsedPath.nodeName), this.rootNode = t, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
		static create(t, e, s) {
			return t && t.isAnimationObjectGroup ? new PropertyBinding.Composite(t, e, s) : new PropertyBinding(t, e, s);
		}
		static sanitizeNodeName(t) {
			return t.replace(/\s/g, "_").replace(Mt, "");
		}
		static parseTrackName(t) {
			const e = Tt.exec(t);
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
				-1 !== St.indexOf(t) && (s.nodeName = s.nodeName.substring(0, i), s.objectName = t);
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
			let o = this.BindingType.Direct;
			if (void 0 !== r) {
				if ("morphTargetInfluences" === i) {
					if (!t.geometry) return void error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
					if (!t.geometry.morphAttributes) return void error("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
					void 0 !== t.morphTargetDictionary[r] && (r = t.morphTargetDictionary[r]);
				}
				o = this.BindingType.ArrayElement, this.resolvedProperty = n, this.propertyIndex = r;
			} else void 0 !== n.fromArray && void 0 !== n.toArray ? (o = this.BindingType.HasFromToArray, this.resolvedProperty = n) : Array.isArray(n) ? (o = this.BindingType.EntireArray, this.resolvedProperty = n) : this.propertyName = i;
			this.getValue = this.GetterByBindingType[o], this.setValue = this.SetterByBindingTypeAndVersioning[o][a];
		}
		unbind() {
			this.node = null, this.getValue = this._getValue_unbound, this.setValue = this._setValue_unbound;
		}
	};
	kt.Composite = class {
		constructor(t, e, s) {
			const i = s || kt.parseTrackName(e);
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
	}, kt.prototype.BindingType = {
		Direct: 0,
		EntireArray: 1,
		ArrayElement: 2,
		HasFromToArray: 3
	}, kt.prototype.Versioning = {
		None: 0,
		NeedsUpdate: 1,
		MatrixWorldNeedsUpdate: 2
	}, kt.prototype.GetterByBindingType = [
		kt.prototype._getValue_direct,
		kt.prototype._getValue_array,
		kt.prototype._getValue_arrayElement,
		kt.prototype._getValue_toArray
	], kt.prototype.SetterByBindingTypeAndVersioning = [
		[
			kt.prototype._setValue_direct,
			kt.prototype._setValue_direct_setNeedsUpdate,
			kt.prototype._setValue_direct_setMatrixWorldNeedsUpdate
		],
		[
			kt.prototype._setValue_array,
			kt.prototype._setValue_array_setNeedsUpdate,
			kt.prototype._setValue_array_setMatrixWorldNeedsUpdate
		],
		[
			kt.prototype._setValue_arrayElement,
			kt.prototype._setValue_arrayElement_setNeedsUpdate,
			kt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate
		],
		[
			kt.prototype._setValue_fromArray,
			kt.prototype._setValue_fromArray_setNeedsUpdate,
			kt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate
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
	/*!
	fflate - fast JavaScript compression/decompression
	<https://101arrowz.github.io/fflate>
	Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
	version 0.8.3
	*/
	var At = Uint8Array, Ct = Uint16Array, Ut = Int32Array, Et = new At([
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		1,
		1,
		1,
		1,
		2,
		2,
		2,
		2,
		3,
		3,
		3,
		3,
		4,
		4,
		4,
		4,
		5,
		5,
		5,
		5,
		0,
		0,
		0,
		0
	]), Ft = new At([
		0,
		0,
		0,
		0,
		1,
		1,
		2,
		2,
		3,
		3,
		4,
		4,
		5,
		5,
		6,
		6,
		7,
		7,
		8,
		8,
		9,
		9,
		10,
		10,
		11,
		11,
		12,
		12,
		13,
		13,
		0,
		0
	]), Vt = new At([
		16,
		17,
		18,
		0,
		8,
		7,
		9,
		6,
		10,
		5,
		11,
		4,
		12,
		3,
		13,
		2,
		14,
		1,
		15
	]), freb = function(t, e) {
		for (var s = new Ct(31), i = 0; i < 31; ++i) s[i] = e += 1 << t[i - 1];
		var r = new Ut(s[30]);
		for (i = 1; i < 30; ++i) for (var n = s[i]; n < s[i + 1]; ++n) r[n] = n - s[i] << 5 | i;
		return {
			b: s,
			r
		};
	}, It = freb(Et, 2), Rt = It.b, Bt = It.r;
	Rt[28] = 258, Bt[258] = 28;
	for (var Nt = freb(Ft, 0), Ot = (Nt.b, Nt.r), Dt = new Ct(32768), Lt = 0; Lt < 32768; ++Lt) {
		var Pt = (43690 & Lt) >> 1 | (21845 & Lt) << 1;
		Pt = (61680 & (Pt = (52428 & Pt) >> 2 | (13107 & Pt) << 2)) >> 4 | (3855 & Pt) << 4, Dt[Lt] = ((65280 & Pt) >> 8 | (255 & Pt) << 8) >> 1;
	}
	var hMap = function(t, e, s) {
		for (var i = t.length, r = 0, n = new Ct(e); r < i; ++r) t[r] && ++n[t[r] - 1];
		var a, o = new Ct(e);
		for (r = 1; r < e; ++r) o[r] = o[r - 1] + n[r - 1] << 1;
		if (s) {
			a = new Ct(1 << e);
			var h = 15 - e;
			for (r = 0; r < i; ++r) if (t[r]) for (var l = r << 4 | t[r], u = e - t[r], c = o[t[r] - 1]++ << u, d = c | (1 << u) - 1; c <= d; ++c) a[Dt[c] >> h] = l;
		} else for (a = new Ct(i), r = 0; r < i; ++r) t[r] && (a[r] = Dt[o[t[r] - 1]++] >> 15 - t[r]);
		return a;
	}, Wt = new At(288);
	for (Lt = 0; Lt < 144; ++Lt) Wt[Lt] = 8;
	for (Lt = 144; Lt < 256; ++Lt) Wt[Lt] = 9;
	for (Lt = 256; Lt < 280; ++Lt) Wt[Lt] = 7;
	for (Lt = 280; Lt < 288; ++Lt) Wt[Lt] = 8;
	var jt = new At(32);
	for (Lt = 0; Lt < 32; ++Lt) jt[Lt] = 5;
	var Ht = hMap(Wt, 9, 0), qt = hMap(jt, 5, 0), shft = function(t) {
		return (t + 7) / 8 | 0;
	}, wbits = function(t, e, s) {
		s <<= 7 & e;
		var i = e / 8 | 0;
		t[i] |= s, t[i + 1] |= s >> 8;
	}, wbits16 = function(t, e, s) {
		s <<= 7 & e;
		var i = e / 8 | 0;
		t[i] |= s, t[i + 1] |= s >> 8, t[i + 2] |= s >> 16;
	}, hTree = function(t, e) {
		for (var s = [], i = 0; i < t.length; ++i) t[i] && s.push({
			s: i,
			f: t[i]
		});
		var r = s.length, n = s.slice();
		if (!r) return {
			t: Xt,
			l: 0
		};
		if (1 == r) {
			var a = new At(s[0].s + 1);
			return a[s[0].s] = 1, {
				t: a,
				l: 1
			};
		}
		s.sort(function(t, e) {
			return t.f - e.f;
		}), s.push({
			s: -1,
			f: 25001
		});
		var o = s[0], h = s[1], l = 0, u = 1, c = 2;
		for (s[0] = {
			s: -1,
			f: o.f + h.f,
			l: o,
			r: h
		}; u != r - 1;) o = s[s[l].f < s[c].f ? l++ : c++], h = s[l != u && s[l].f < s[c].f ? l++ : c++], s[u++] = {
			s: -1,
			f: o.f + h.f,
			l: o,
			r: h
		};
		var d = n[0].s;
		for (i = 1; i < r; ++i) n[i].s > d && (d = n[i].s);
		var p = new Ct(d + 1), m = ln(s[u - 1], p, 0);
		if (m > e) {
			i = 0;
			var y = 0, f = m - e, g = 1 << f;
			for (n.sort(function(t, e) {
				return p[e.s] - p[t.s] || t.f - e.f;
			}); i < r; ++i) {
				var x = n[i].s;
				if (!(p[x] > e)) break;
				y += g - (1 << m - p[x]), p[x] = e;
			}
			for (y >>= f; y > 0;) {
				var _ = n[i].s;
				p[_] < e ? y -= 1 << e - p[_]++ - 1 : ++i;
			}
			for (; i >= 0 && y; --i) {
				var b = n[i].s;
				p[b] == e && (--p[b], ++y);
			}
			m = e;
		}
		return {
			t: new At(p),
			l: m
		};
	}, ln = function(t, e, s) {
		return -1 == t.s ? Math.max(ln(t.l, e, s + 1), ln(t.r, e, s + 1)) : e[t.s] = s;
	}, lc = function(t) {
		for (var e = t.length; e && !t[--e];);
		for (var s = new Ct(++e), i = 0, r = t[0], n = 1, w = function(t) {
			s[i++] = t;
		}, a = 1; a <= e; ++a) if (t[a] == r && a != e) ++n;
		else {
			if (!r && n > 2) {
				for (; n > 138; n -= 138) w(32754);
				n > 2 && (w(n > 10 ? n - 11 << 5 | 28690 : n - 3 << 5 | 12305), n = 0);
			} else if (n > 3) {
				for (w(r), --n; n > 6; n -= 6) w(8304);
				n > 2 && (w(n - 3 << 5 | 8208), n = 0);
			}
			for (; n--;) w(r);
			n = 1, r = t[a];
		}
		return {
			c: s.subarray(0, i),
			n: e
		};
	}, clen = function(t, e) {
		for (var s = 0, i = 0; i < e.length; ++i) s += t[i] * e[i];
		return s;
	}, wfblk = function(t, e, s) {
		var i = s.length, r = shft(e + 2);
		t[r] = 255 & i, t[r + 1] = i >> 8, t[r + 2] = 255 ^ t[r], t[r + 3] = 255 ^ t[r + 1];
		for (var n = 0; n < i; ++n) t[r + n + 4] = s[n];
		return 8 * (r + 4 + i);
	}, wblk = function(t, e, s, i, r, n, a, o, h, l, u) {
		wbits(e, u++, s), ++r[256];
		for (var c = hTree(r, 15), d = c.t, p = c.l, m = hTree(n, 15), y = m.t, f = m.l, g = lc(d), x = g.c, _ = g.n, b = lc(y), M = b.c, v = b.n, z = new Ct(19), T = 0; T < x.length; ++T) ++z[31 & x[T]];
		for (T = 0; T < M.length; ++T) ++z[31 & M[T]];
		for (var S = hTree(z, 7), k = S.t, A = S.l, C = 19; C > 4 && !k[Vt[C - 1]]; --C);
		var U, E, F, V, I = l + 5 << 3, R = clen(r, Wt) + clen(n, jt) + a, B = clen(r, d) + clen(n, y) + a + 14 + 3 * C + clen(z, k) + 2 * z[16] + 3 * z[17] + 7 * z[18];
		if (h >= 0 && I <= R && I <= B) return wfblk(e, u, t.subarray(h, h + l));
		if (wbits(e, u, 1 + (B < R)), u += 2, B < R) {
			U = hMap(d, p, 0), E = d, F = hMap(y, f, 0), V = y;
			var N = hMap(k, A, 0);
			wbits(e, u, _ - 257), wbits(e, u + 5, v - 1), wbits(e, u + 10, C - 4), u += 14;
			for (T = 0; T < C; ++T) wbits(e, u + 3 * T, k[Vt[T]]);
			u += 3 * C;
			for (var O = [x, M], D = 0; D < 2; ++D) {
				var L = O[D];
				for (T = 0; T < L.length; ++T) {
					var P = 31 & L[T];
					wbits(e, u, N[P]), u += k[P], P > 15 && (wbits(e, u, L[T] >> 5 & 127), u += L[T] >> 12);
				}
			}
		} else U = Ht, E = Wt, F = qt, V = jt;
		for (T = 0; T < o; ++T) {
			var W = i[T];
			if (W > 255) {
				wbits16(e, u, U[(P = W >> 18 & 31) + 257]), u += E[P + 257], P > 7 && (wbits(e, u, W >> 23 & 31), u += Et[P]);
				var j = 31 & W;
				wbits16(e, u, F[j]), u += V[j], j > 3 && (wbits16(e, u, W >> 5 & 8191), u += Ft[j]);
			} else wbits16(e, u, U[W]), u += E[W];
		}
		return wbits16(e, u, U[256]), u + E[256];
	}, Gt = new Ut([
		65540,
		131080,
		131088,
		131104,
		262176,
		1048704,
		1048832,
		2114560,
		2117632
	]), Xt = new At(0), dflt = function(t, e, s, i, r, n) {
		var a = n.z || t.length, o = new At(i + a + 5 * (1 + Math.ceil(a / 7e3)) + r), h = o.subarray(i, o.length - r), l = n.l, u = 7 & (n.r || 0);
		if (e) {
			u && (h[0] = n.r >> 3);
			for (var c = Gt[e - 1], d = c >> 13, p = 8191 & c, m = (1 << s) - 1, y = n.p || new Ct(32768), f = n.h || new Ct(m + 1), g = Math.ceil(s / 3), x = 2 * g, hsh = function(e) {
				return (t[e] ^ t[e + 1] << g ^ t[e + 2] << x) & m;
			}, _ = new Ut(25e3), b = new Ct(288), M = new Ct(32), v = 0, z = 0, T = n.i || 0, S = 0, k = n.w || 0, A = 0; T + 2 < a; ++T) {
				var C = hsh(T), U = 32767 & T, E = f[C];
				if (y[U] = E, f[C] = U, k <= T) {
					var F = a - T;
					if ((v > 7e3 || S > 24576) && (F > 423 || !l)) {
						u = wblk(t, h, 0, _, b, M, z, S, A, T - A, u), S = v = z = 0, A = T;
						for (var V = 0; V < 286; ++V) b[V] = 0;
						for (V = 0; V < 30; ++V) M[V] = 0;
					}
					var I = 2, R = 0, B = p, N = U - E & 32767;
					if (F > 2 && C == hsh(T - N)) for (var O = Math.min(d, F) - 1, D = Math.min(32767, T), L = Math.min(258, F); N <= D && --B && U != E;) {
						if (t[T + I] == t[T + I - N]) {
							for (var P = 0; P < L && t[T + P] == t[T + P - N]; ++P);
							if (P > I) {
								if (I = P, R = N, P > O) break;
								var W = Math.min(N, P - 2), j = 0;
								for (V = 0; V < W; ++V) {
									var H = T - N + V & 32767, q = H - y[H] & 32767;
									q > j && (j = q, E = H);
								}
							}
						}
						N += (U = E) - (E = y[U]) & 32767;
					}
					if (R) {
						_[S++] = 268435456 | Bt[I] << 18 | Ot[R];
						var G = 31 & Bt[I], X = 31 & Ot[R];
						z += Et[G] + Ft[X], ++b[257 + G], ++M[X], k = T + I, ++v;
					} else _[S++] = t[T], ++b[t[T]];
				}
			}
			for (T = Math.max(T, k); T < a; ++T) _[S++] = t[T], ++b[t[T]];
			u = wblk(t, h, l, _, b, M, z, S, A, T - A, u), l || (n.r = 7 & u | h[u / 8 | 0] << 3, u -= 7, n.h = f, n.p = y, n.i = T, n.w = k);
		} else {
			for (T = n.w || 0; T < a + l; T += 65535) {
				var Y = T + 65535;
				Y >= a && (h[u / 8 | 0] = l, Y = a), u = wfblk(h, u + 1, t.subarray(T, Y));
			}
			n.i = a;
		}
		return function(t, e, s) {
			return (null == e || e < 0) && (e = 0), (null == s || s > t.length) && (s = t.length), new At(t.subarray(e, s));
		}(o, 0, i + shft(u) + r);
	}, adler = function() {
		var t = 1, e = 0;
		return {
			p: function(s) {
				for (var i = t, r = e, n = 0 | s.length, a = 0; a != n;) {
					for (var o = Math.min(a + 2655, n); a < o; ++a) r += i += s[a];
					i = (65535 & i) + 15 * (i >> 16), r = (65535 & r) + 15 * (r >> 16);
				}
				t = i, e = r;
			},
			d: function() {
				return (255 & (t %= 65521)) << 24 | (65280 & t) << 8 | (255 & (e %= 65521)) << 8 | e >> 8;
			}
		};
	}, wbytes = function(t, e, s) {
		for (; s; ++e) t[e] = s, s >>>= 8;
	};
	function zlibSync(t, e) {
		e || (e = {});
		var s = adler();
		s.p(t);
		var i = function(t, e, s, i, r) {
			if (!r && (r = { l: 1 }, e.dictionary)) {
				var n = e.dictionary.subarray(-32768), a = new At(n.length + t.length);
				a.set(n), a.set(t, n.length), t = a, r.w = n.length;
			}
			return dflt(t, null == e.level ? 6 : e.level, null == e.mem ? r.l ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 20 : 12 + e.mem, s, i, r);
		}(t, e, e.dictionary ? 6 : 2, 4);
		return function(t, e) {
			var s = e.level, i = 0 == s ? 0 : s < 6 ? 1 : 9 == s ? 3 : 2;
			if (t[0] = 120, t[1] = i << 6 | (e.dictionary && 32), t[1] |= 31 - (t[0] << 8 | t[1]) % 31, e.dictionary) {
				var r = adler();
				r.p(e.dictionary), wbytes(t, 2, r.d());
			}
		}(i, e), wbytes(i, i.length - 4, s.d()), i;
	}
	var Yt = "undefined" != typeof TextDecoder && new TextDecoder();
	try {
		Yt.decode(Xt, { stream: !0 });
	} catch (te) {}
	const Zt = new TextEncoder(), Jt = 65535, Qt = 65537;
	function reorganizeDataBuffer(t, e) {
		const s = e.width, i = e.height, r = {
			r: 0,
			g: 0,
			b: 0,
			a: 0
		}, n = { value: 0 }, a = 4 == e.numOutputChannels ? 1 : 0, o = 1015 == e.type ? getFloat32 : getFloat16, h = 1 == e.dataType ? setFloat16 : setFloat32, l = new Uint8Array(e.width * e.height * e.numOutputChannels * e.dataSize), u = new DataView(l.buffer);
		for (let c = 0; c < i; ++c) for (let l = 0; l < s; ++l) {
			const d = c * s * 4 + 4 * l, p = o(t, d), m = o(t, d + 1), y = o(t, d + 2), f = o(t, d + 3), g = (i - c - 1) * s * (3 + a) * e.dataSize;
			decodeLinear(r, p, m, y, f), n.value = g + l * e.dataSize, h(u, r.a, n), n.value = g + a * s * e.dataSize + l * e.dataSize, h(u, r.b, n), n.value = g + (1 + a) * s * e.dataSize + l * e.dataSize, h(u, r.g, n), n.value = g + (2 + a) * s * e.dataSize + l * e.dataSize, h(u, r.r, n);
		}
		return l;
	}
	function compressData(t, e) {
		let s, i, r = 0;
		const n = {
			data: new Array(),
			totalSize: 0
		}, a = e.width * e.numOutputChannels * e.blockLines * e.dataSize;
		switch (e.compression) {
			case 0:
				s = compressNONE;
				break;
			case 1:
				s = compressRLE;
				break;
			case 2:
			case 3:
				s = compressZIP;
				break;
			case 4: s = compressPIZ;
		}
		0 !== e.compression && (i = new Uint8Array(a));
		for (let o = 0; o < e.numBlocks; ++o) {
			const h = t.subarray(a * o, a * (o + 1));
			let l = s(h, i, e);
			l.length >= h.length && (l = h), r += l.length, n.data.push({
				dataChunk: l,
				size: l.length
			});
		}
		return n.totalSize = r, n;
	}
	function compressNONE(t) {
		return t;
	}
	function reorderAndPredict(t, e) {
		e = e.subarray(0, t.length);
		let s = 0, i = Math.floor((t.length + 1) / 2), r = 0;
		const n = t.length - 1;
		for (; !(r > n || (e[s++] = t[r++], r > n));) e[i++] = t[r++];
		let a = e[0];
		for (let o = 1; o < e.length; o++) {
			const t = e[o] - a + 384;
			a = e[o], e[o] = t;
		}
		return e;
	}
	function compressRLE(t, e) {
		e = reorderAndPredict(t, e);
		const s = new Uint8Array(2 * e.length), i = e.length;
		let r = 0, n = 1, a = 0;
		for (; r < i;) {
			let t = 0;
			for (; n < i && e[r] === e[n] && t < 127;) n++, t++;
			if (t >= 2) s[a++] = t, s[a++] = e[r], r = n;
			else {
				for (t++; n < i && (n + 1 >= i || e[n] !== e[n + 1] || n + 2 >= i || e[n + 1] !== e[n + 2]) && t < 127;) t++, n++;
				for (s[a++] = -t; r < n;) s[a++] = e[r++];
			}
			n++;
		}
		return s.slice(0, a);
	}
	function compressZIP(t, e) {
		return zlibSync(e = reorderAndPredict(t, e));
	}
	function compressPIZ(t, e, s) {
		const i = s.numOutputChannels, r = s.dataSize / 2, n = s.width, a = n * s.dataSize, o = t.length / (a * i), h = t.length / 2, l = new Uint16Array(h);
		for (let b = 0; b < o; b++) for (let e = 0; e < i; e++) {
			const s = (b * i + e) * a, r = (e * o + b) * a / 2;
			for (let e = 0; e < a / 2; e++) l[r + e] = t[s + 2 * e] | t[s + 2 * e + 1] << 8;
		}
		const u = /* @__PURE__ */ new Uint8Array(8192);
		for (let b = 0; b < h; b++) u[l[b] >> 3] |= 1 << (7 & l[b]);
		u[0] &= -2;
		let c = 8191, d = 0;
		for (let b = 0; b < 8192; b++) u[b] && (c > b && (c = b), d < b && (d = b));
		const p = /* @__PURE__ */ new Uint16Array(65536);
		let m = 0;
		for (let b = 0; b < 65536; b++) (0 === b || u[b >> 3] & 1 << (7 & b)) && (p[b] = m++);
		const y = m - 1;
		for (let b = 0; b < h; b++) l[b] = p[l[b]];
		for (let b = 0; b < i; b++) for (let t = 0; t < r; t++) wav2Encode(l, b * n * o * r + t, n, r, o, r * n, y);
		const f = c <= d ? d - c + 1 : 0, g = function hufCompress(t, e) {
			const s = new Float64Array(Qt);
			for (let c = 0; c < t.length; c++) s[t[c]]++;
			const i = function hufBuildEncTable(t) {
				const e = new Uint32Array(Qt), s = [];
				let i = 0, r = 0;
				for (; !t[i];) i++;
				for (let u = i; u < Qt; u++) e[u] = u, t[u] && (s.push(u), r = u);
				r++, t[r] = 1, s.push(r);
				let n = s.length;
				const greater = (e, s) => t[e] > t[s] || t[e] === t[s] && e > s;
				(function makeHeap(t, e, s) {
					if (e < 2) return;
					for (let i = Math.floor((e - 2) / 2); i >= 0; i--) adjustHeap(t, i, e, t[i], s);
				})(s, n, greater);
				const a = new Uint8Array(Qt);
				for (; n > 1;) {
					const i = s[0];
					popHeap(s, n, greater), n--;
					const r = s[0];
					popHeap(s, n, greater), t[r] += t[i], pushHeap(s, n, greater);
					for (let t = r;; t = e[t]) if (a[t]++, e[t] === t) {
						e[t] = i;
						break;
					}
					for (let t = i; a[t]++, e[t] !== t; t = e[t]);
				}
				const o = /* @__PURE__ */ new Float64Array(59);
				for (let u = 0; u < Qt; u++) o[a[u]]++;
				let h = 0;
				for (let u = 58; u > 0; u--) {
					const t = Math.floor((h + o[u]) / 2);
					o[u] = h, h = t;
				}
				const l = new Float64Array(Qt);
				for (let u = 0; u < Qt; u++) a[u] > 0 && (l[u] = o[a[u]]++);
				return {
					codes: l,
					lengths: a,
					im: i,
					iM: r
				};
			}(s), r = new Uint8Array(e), n = {
				out: r,
				offset: 20,
				c: 0,
				lc: 0,
				overflow: !1
			};
			(function hufPackEncTable(t, e) {
				const { lengths: s, iM: i } = t;
				for (let r = t.im; r <= i; r++) {
					const t = s[r];
					if (0 === t) {
						let t = 1;
						for (; r < i && t < 261 && !(s[r + 1] > 0);) r++, t++;
						if (t >= 2) {
							t >= 6 ? (outputBits(e, 6, 63), outputBits(e, 8, t - 6)) : outputBits(e, 6, 59 + t - 2);
							continue;
						}
					}
					outputBits(e, 6, t);
				}
				e.lc > 0 && outputBits(e, 8 - e.lc, 0);
			})(i, n);
			const a = n.offset - 20, o = n.offset;
			n.c = 0, n.lc = 0, function hufEncode(t, e, s) {
				const { codes: i, lengths: r, iM: n } = t, sendCode = (t, e) => {
					if (r[t] + r[n] + 8 < r[t] * e) outputBits(s, r[t], i[t]), outputBits(s, r[n], i[n]), outputBits(s, 8, e);
					else for (; e-- >= 0;) outputBits(s, r[t], i[t]);
				};
				let a = e[0], o = 0;
				for (let h = 1; h < e.length; h++) {
					const t = e[h];
					255 === o || a !== t ? (sendCode(a, o), o = 0, a = t) : o++;
				}
				sendCode(a, o), s.lc > 0 && (s.offset < s.out.length ? s.out[s.offset] = s.c << 8 - s.lc & 255 : s.overflow = !0);
			}(i, t, n);
			const h = 8 * (n.offset - o) + n.lc, l = o + Math.ceil(h / 8);
			if (n.overflow || l >= e) return null;
			const u = new DataView(r.buffer);
			return u.setUint32(0, i.im, !0), u.setUint32(4, i.iM, !0), u.setUint32(8, a, !0), u.setUint32(12, h, !0), u.setUint32(16, 0, !0), r.subarray(0, l);
		}(l, t.length);
		if (null === g) return t;
		const x = new Uint8Array(8 + f + g.length), _ = new DataView(x.buffer);
		return _.setUint16(0, c, !0), _.setUint16(2, d, !0), x.set(u.subarray(c, c + f), 4), _.setUint32(4 + f, g.length, !0), x.set(g, 8 + f), x;
	}
	const $t = {
		l: 0,
		h: 0
	};
	function wenc14(t, e, s) {
		const i = t << 16 >> 16, r = e << 16 >> 16;
		s.l = i + r >> 1 & 65535, s.h = i - r & 65535;
	}
	function wenc16(t, e, s) {
		const i = t + 32768 & Jt;
		let r = i + e >> 1;
		const n = i - e;
		n < 0 && (r = r + 32768 & Jt), s.l = r, s.h = n & Jt;
	}
	function wav2Encode(t, e, s, i, r, n, a) {
		const o = a < 16384 ? wenc14 : wenc16, h = s > r ? r : s;
		let l = 1, u = 2;
		for (; u <= h;) {
			let a = e;
			const h = e + n * (r - u), c = n * l, d = n * u, p = i * l, m = i * u;
			for (; a <= h; a += d) {
				let e = a;
				const r = a + i * (s - u);
				for (; e <= r; e += m) {
					const s = e + p, i = e + c, r = i + p;
					o(t[e], t[s], $t);
					const n = $t.l, a = $t.h;
					o(t[i], t[r], $t);
					const h = $t.l, l = $t.h;
					o(n, h, $t), t[e] = $t.l, t[i] = $t.h, o(a, l, $t), t[s] = $t.l, t[r] = $t.h;
				}
				if (s & l) {
					const s = e + c;
					o(t[e], t[s], $t), t[e] = $t.l, t[s] = $t.h;
				}
			}
			if (r & l) {
				let e = a;
				const r = a + i * (s - u);
				for (; e <= r; e += m) {
					const s = e + p;
					o(t[e], t[s], $t), t[e] = $t.l, t[s] = $t.h;
				}
			}
			l = u, u <<= 1;
		}
	}
	function pushHeapHole(t, e, s, i, r) {
		let n = Math.floor((e - 1) / 2);
		for (; e > s && r(t[n], i);) t[e] = t[n], e = n, n = Math.floor((e - 1) / 2);
		t[e] = i;
	}
	function adjustHeap(t, e, s, i, r) {
		const n = e;
		let a = e;
		for (; a < Math.floor((s - 1) / 2);) a = 2 * (a + 1), r(t[a], t[a - 1]) && a--, t[e] = t[a], e = a;
		1 & s || a !== (s - 2) / 2 || (a = 2 * (a + 1), t[e] = t[a - 1], e = a - 1), pushHeapHole(t, e, n, i, r);
	}
	function pushHeap(t, e, s) {
		pushHeapHole(t, e - 1, 0, t[e - 1], s);
	}
	function popHeap(t, e, s) {
		if (e > 1) {
			const i = e - 1, r = t[i];
			t[i] = t[0], adjustHeap(t, 0, i, r, s);
		}
	}
	function outputBits(t, e, s) {
		for (; e > 0;) {
			const i = Math.min(e, 16);
			for (e -= i, t.c = t.c << i | Math.floor(s / 2 ** e) % (1 << i), t.lc += i; t.lc >= 8;) t.lc -= 8, t.offset < t.out.length ? t.out[t.offset++] = t.c >> t.lc : t.overflow = !0;
			t.c &= (1 << t.lc) - 1;
		}
	}
	function fillData(t, e) {
		const s = 8 * e.numBlocks, i = 259 + 18 * e.numOutputChannels, r = { value: i + s }, n = new Uint8Array(i + s + t.totalSize + 8 * e.numBlocks), a = new DataView(n.buffer);
		(function fillHeader(t, e, s) {
			const i = { value: 0 }, r = new DataView(t.buffer);
			setUint32(r, 20000630, i), setUint32(r, 2, i), setString(r, "compression", i), setString(r, "compression", i), setUint32(r, 1, i), setUint8(r, s.compression, i), setString(r, "screenWindowCenter", i), setString(r, "v2f", i), setUint32(r, 8, i), setUint32(r, 0, i), setUint32(r, 0, i), setString(r, "screenWindowWidth", i), setString(r, "float", i), setUint32(r, 4, i), setFloat32(r, 1, i), setString(r, "pixelAspectRatio", i), setString(r, "float", i), setUint32(r, 4, i), setFloat32(r, 1, i), setString(r, "lineOrder", i), setString(r, "lineOrder", i), setUint32(r, 1, i), setUint8(r, 0, i), setString(r, "dataWindow", i), setString(r, "box2i", i), setUint32(r, 16, i), setUint32(r, 0, i), setUint32(r, 0, i), setUint32(r, s.width - 1, i), setUint32(r, s.height - 1, i), setString(r, "displayWindow", i), setString(r, "box2i", i), setUint32(r, 16, i), setUint32(r, 0, i), setUint32(r, 0, i), setUint32(r, s.width - 1, i), setUint32(r, s.height - 1, i), setString(r, "channels", i), setString(r, "chlist", i), setUint32(r, 18 * s.numOutputChannels + 1, i), setString(r, "A", i), setUint32(r, s.dataType, i), i.value += 4, setUint32(r, 1, i), setUint32(r, 1, i), setString(r, "B", i), setUint32(r, s.dataType, i), i.value += 4, setUint32(r, 1, i), setUint32(r, 1, i), setString(r, "G", i), setUint32(r, s.dataType, i), i.value += 4, setUint32(r, 1, i), setUint32(r, 1, i), setString(r, "R", i), setUint32(r, s.dataType, i), i.value += 4, setUint32(r, 1, i), setUint32(r, 1, i), setUint8(r, 0, i), setUint8(r, 0, i);
			let n = i.value + 8 * s.numBlocks;
			for (let a = 0; a < e.data.length; ++a) setUint64(r, n, i), n += e.data[a].size + 8;
		})(n, t, e);
		for (let o = 0; o < t.data.length; ++o) {
			const s = t.data[o].dataChunk, i = t.data[o].size;
			setUint32(a, o * e.blockLines, r), setUint32(a, i, r), n.set(s, r.value), r.value += i;
		}
		return n;
	}
	function decodeLinear(t, e, s, i, r) {
		t.r = e, t.g = s, t.b = i, t.a = r;
	}
	function setUint8(t, e, s) {
		t.setUint8(s.value, e), s.value += 1;
	}
	function setUint32(t, e, s) {
		t.setUint32(s.value, e, !0), s.value += 4;
	}
	function setFloat16(t, e, s) {
		t.setUint16(s.value, ut.toHalfFloat(e), !0), s.value += 2;
	}
	function setFloat32(t, e, s) {
		t.setFloat32(s.value, e, !0), s.value += 4;
	}
	function setUint64(t, e, s) {
		t.setBigUint64(s.value, BigInt(e), !0), s.value += 8;
	}
	function setString(t, e, s) {
		const i = Zt.encode(e + "\0");
		for (let r = 0; r < i.length; ++r) setUint8(t, i[r], s);
	}
	function getFloat16(t, e) {
		return function decodeFloat16(t) {
			const e = (31744 & t) >> 10, s = 1023 & t;
			return (t >> 15 ? -1 : 1) * (e ? 31 === e ? s ? NaN : 1 / 0 : Math.pow(2, e - 15) * (1 + s / 1024) : s / 1024 * 6103515625e-14);
		}(t[e]);
	}
	function getFloat32(t, e) {
		return t[e];
	}
	const Kt = new class {
		async parse(t, e, s) {
			if (!t || !(t.isWebGLRenderer || t.isWebGPURenderer || t.isDataTexture)) throw Error("EXRExporter.parse: Unsupported first parameter, expected instance of WebGLRenderer, WebGPURenderer or DataTexture.");
			if (t.isWebGLRenderer || t.isWebGPURenderer) {
				const i = t, r = e, n = s;
				(function supportedRTT(t, e = {}) {
					if (!t || !t.isRenderTarget) throw Error("EXRExporter.parse: Unsupported second parameter, expected instance of WebGLRenderTarget.");
					const s = void 0 !== e.textureIndex ? e.textureIndex : 0, i = t.textures[s];
					if (void 0 === i) throw Error("EXRExporter.parse: Invalid textureIndex, the render target has " + t.textures.length + " texture(s).");
					if (t.isCubeRenderTarget || t.isWebGLCubeRenderTarget || t.isWebGL3DRenderTarget || t.isWebGLArrayRenderTarget) throw Error("EXRExporter.parse: Unsupported render target type, expected instance of WebGLRenderTarget.");
					if (1015 !== i.type && 1016 !== i.type) throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture type.");
					if (1023 !== i.format) throw Error("EXRExporter.parse: Unsupported WebGLRenderTarget texture format, expected RGBAFormat.");
				})(r, n);
				const a = function buildInfoRTT(t, e = {}) {
					const s = {
						0: 1,
						1: 1,
						2: 1,
						3: 16,
						4: 32
					}, i = void 0 !== e.textureIndex ? e.textureIndex : 0, r = t.textures[i], n = t.width, a = t.height, o = r.type, h = r.format, l = void 0 !== e.compression ? e.compression : 3, u = 1015 === (void 0 !== e.type ? e.type : 1016) ? 2 : 1, c = s[l];
					return {
						width: n,
						height: a,
						type: o,
						format: h,
						compression: l,
						blockLines: c,
						dataType: u,
						dataSize: 2 * u,
						numBlocks: Math.ceil(a / c),
						numInputChannels: 4,
						numOutputChannels: 4,
						textureIndex: i
					};
				}(r, n);
				return fillData(compressData(reorganizeDataBuffer(await async function getPixelData(t, e, s) {
					let i;
					t.isWebGLRenderer ? (i = 1015 === s.type ? new Float32Array(s.width * s.height * s.numInputChannels) : new Uint16Array(s.width * s.height * s.numInputChannels), await t.readRenderTargetPixelsAsync(e, 0, 0, s.width, s.height, i, void 0, s.textureIndex)) : i = await t.readRenderTargetPixelsAsync(e, 0, 0, s.width, s.height, s.textureIndex);
					return i;
				}(i, r, a), a), a), a);
			}
			if (t.isDataTexture) {
				const s = t, i = e;
				(function supportedDT(t) {
					if (1015 !== t.type && 1016 !== t.type) throw Error("EXRExporter.parse: Unsupported DataTexture texture type.");
					if (1023 !== t.format) throw Error("EXRExporter.parse: Unsupported DataTexture texture format, expected RGBAFormat.");
					if (!t.image.data) throw Error("EXRExporter.parse: Invalid DataTexture image data.");
					if (1015 === t.type && "Float32Array" !== t.image.data.constructor.name) throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Float32Array'.");
					if (1016 === t.type && "Uint16Array" !== t.image.data.constructor.name) throw Error("EXRExporter.parse: DataTexture image data doesn't match type, expected 'Uint16Array'.");
				})(s);
				const r = function buildInfoDT(t, e = {}) {
					const s = {
						0: 1,
						1: 1,
						2: 1,
						3: 16,
						4: 32
					}, i = t.image.width, r = t.image.height, n = t.type, a = t.format, o = void 0 !== e.compression ? e.compression : 3, h = 1015 === (void 0 !== e.type ? e.type : 1016) ? 2 : 1, l = s[o];
					return {
						width: i,
						height: r,
						type: n,
						format: a,
						compression: o,
						blockLines: l,
						dataType: h,
						dataSize: 2 * h,
						numBlocks: Math.ceil(r / l),
						numInputChannels: 4,
						numOutputChannels: 4
					};
				}(s, i);
				return fillData(compressData(reorganizeDataBuffer(s.image.data, r), r), r);
			}
		}
	}();
	self.addEventListener("message", (t) => {
		const i = t.data;
		(async function encode(t) {
			const { width: i, height: r, pixels: n } = t;
			if ("exr" === t.format) {
				const t = new ct(n, i, r, s, e);
				return Kt.parse(t, {
					type: e,
					compression: 3
				});
			}
			const a = new OffscreenCanvas(i, r), o = new Uint8ClampedArray(n.buffer, n.byteOffset, n.byteLength);
			return a.getContext("2d").putImageData(new ImageData(o, i, r), 0, 0), a.convertToBlob({ type: "image/png" });
		})(i).then((t) => async function write(t, e) {
			const s = await (await t.directory.getFileHandle(t.name, { create: !0 })).createWritable();
			await s.write(e), await s.close();
		}(i, t)).then(() => self.postMessage({ id: i.id }), (t) => self.postMessage({
			id: i.id,
			error: String(t)
		}));
	});
})();
