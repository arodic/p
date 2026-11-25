(function() {
	function segmentCrossesTriangle(t, e, n, o, s, r) {
		const a = t[3 * o], i = t[3 * o + 1], l = t[3 * o + 2], h = t[3 * s] - a, c = t[3 * s + 1] - i, f = t[3 * s + 2] - l, u = t[3 * r] - a, p = t[3 * r + 1] - i, g = t[3 * r + 2] - l, m = t[3 * e], d = t[3 * e + 1], M = t[3 * e + 2], y = t[3 * n] - m, x = t[3 * n + 1] - d, w = t[3 * n + 2] - M, A = x * g - w * p, b = w * u - y * g, v = y * p - x * u, C = h * A + c * b + f * v;
		if (Math.abs(C) < 1e-14) return !1;
		const F = 1 / C, S = m - a, k = d - i, I = M - l, P = (S * A + k * b + I * v) * F;
		if (P <= 0 || P >= 1) return !1;
		const q = k * f - I * c, U = I * h - S * f, T = S * c - k * h, L = (y * q + x * U + w * T) * F;
		if (L <= 0 || P + L >= 1) return !1;
		const $ = (u * q + p * U + g * T) * F;
		return $ > 0 && $ < 1;
	}
	const t = [
		{
			species: "green",
			holdfast: [
				0,
				0,
				0
			],
			scale: 1,
			fronds: [4, 6],
			generations: [3, 4],
			spread: 1,
			lobe: 1,
			facing: .4,
			budget: 1e4
		},
		{
			species: "green",
			holdfast: [
				27,
				-3,
				-32
			],
			scale: 1.1,
			fronds: [4, 5],
			generations: [3, 4],
			spread: 1,
			lobe: 1,
			facing: -.3,
			budget: 9e3
		},
		{
			species: "brown",
			holdfast: [
				27,
				-2,
				6
			],
			scale: .7,
			fronds: [4, 5],
			generations: [3, 4],
			spread: 1.15,
			lobe: 1.5,
			facing: .9,
			budget: 5e3
		}
	], e = t.length;
	function createRandom(t) {
		let e = t >>> 0 || 2654435769;
		const next = () => {
			e = e + 1831565813 >>> 0;
			let t = e;
			return t = Math.imul(t ^ t >>> 15, 1 | t), t ^= t + Math.imul(t ^ t >>> 7, 61 | t), ((t ^ t >>> 14) >>> 0) / 4294967296;
		};
		return {
			next,
			range: (t, e) => t + (e - t) * next(),
			int: (t, e) => Math.min(e, Math.floor(t + (e - t + 1) * next()))
		};
	}
	function hash2(t, e, n) {
		let o = Math.imul(t, 668265261) ^ Math.imul(e, 374761393) ^ Math.imul(n, 2654435761);
		return o = Math.imul(o ^ o >>> 15, 2246822507), o = Math.imul(o ^ o >>> 13, 3266489909), o ^= o >>> 16, (o >>> 0) / 4294967296;
	}
	function valueNoise(t, e, n) {
		const o = Math.floor(t), s = Math.floor(e), r = t - o, a = e - s, i = r * r * (3 - 2 * r), l = a * a * (3 - 2 * a), h = hash2(o, s, n), c = hash2(o + 1, s, n), f = hash2(o, s + 1, n);
		return h + (c - h) * i + (f - h) * l + (h - c - f + hash2(o + 1, s + 1, n)) * i * l;
	}
	function smin(t, e, n) {
		const o = Math.max(n - Math.abs(t - e), 0) / n;
		return Math.min(t, e) - o * o * n * .25;
	}
	function smoothstep(t, e, n) {
		const o = Math.min(1, Math.max(0, (n - t) / (e - t)));
		return o * o * (3 - 2 * o);
	}
	function segmentDistance(t, e, n) {
		const o = e - t.ax, s = n - t.ay, r = o * t.dx + s * t.dy;
		return function unevenCapsule(t, e, n, o, s) {
			t = Math.abs(t);
			const r = (n - o) / s, a = Math.sqrt(Math.max(1 - r * r, 0)), i = -r * t + a * e;
			return i < 0 ? Math.hypot(t, e) - n : i > a * s ? Math.hypot(t, e - s) - o : a * t + r * e - n;
		}(o * t.dy - s * t.dx, r, t.ra, t.rb, t.len);
	}
	function segmentParameter(t, e, n) {
		const o = (e - t.ax) * t.dx + (n - t.ay) * t.dy;
		return Math.min(1, Math.max(0, o / t.len));
	}
	let n = /* @__PURE__ */ new Float64Array(64);
	const o = {
		outline: 0,
		margin: 0,
		age: 0,
		radius: 0,
		thickness: 0,
		ux: 1,
		uy: 0
	};
	function evaluateOutline(t, e, o, s) {
		const r = t.segments;
		let a = 1 / 0, i = 1 / 0;
		n.length < r.length && (n = new Float64Array(2 * r.length));
		for (let g = 0; g < r.length; g++) {
			const t = segmentDistance(r[g], e, o);
			n[g] = t, a = a === 1 / 0 ? t : smin(a, t, .6), t < i && (i = t);
		}
		let l = 0, h = 0, c = 0;
		for (let g = 0; g < r.length; g++) {
			const t = r[g], s = n[g];
			if (s - i > 3.3) continue;
			const a = Math.exp(-(s - i) / .35), f = segmentParameter(t, e, o);
			l += a, h += a * (t.s0 + f * t.len), c += a * (t.ra + (t.rb - t.ra) * f);
		}
		h /= l, c /= l;
		const f = 1 - Math.min(1, h / t.maxPath), u = .7 * valueNoise(e / t.lobeScale, o / t.lobeScale, t.noiseSeed) + .3 * valueNoise(e / t.lobeScale * 2.3, o / t.lobeScale * 2.3, t.noiseSeed + 1), p = t.lobeAmplitude * Math.sqrt(1 - f) * smoothstep(.78, 1.4, c);
		return s.outline = a - u * p, s.age = f, s.radius = c, s.outline;
	}
	function outlineDistance(t, e, n) {
		return evaluateOutline(t, e, n, o);
	}
	function chartDistance(t, e, n) {
		return Math.max(outlineDistance(t, e, n), -n);
	}
	function frondFields(t, e, n, o = {
		outline: 0,
		margin: 0,
		age: 0,
		radius: 0,
		thickness: 0,
		ux: 1,
		uy: 0
	}) {
		evaluateOutline(t, e, n, o), function nearestRim(t, e, n, o) {
			const { segments: r, cell: a, originX: i, originY: l, columns: h, rows: c, starts: f, items: u } = t, p = Math.floor((e - i) / a), g = Math.floor((n - l) / a);
			let m = 36, d = -1;
			const M = Math.ceil(s / a) + 1;
			for (let s = 0; s <= M; s++) {
				const t = Math.max(0, s - 1) * a;
				if (d >= 0 && t * t > m) break;
				for (let o = g - s; o <= g + s; o++) {
					if (o < 0 || o >= c) continue;
					const t = o === g - s || o === g + s;
					for (let a = p - s; a <= p + s; a += t ? 1 : 2 * s) {
						if (a >= 0 && a < h) {
							const t = o * h + a;
							for (let o = f[t]; o < f[t + 1]; o++) {
								const t = u[o], s = r[4 * t], a = r[4 * t + 1], i = r[4 * t + 2] - s, l = r[4 * t + 3] - a, h = Math.min(1, Math.max(0, ((e - s) * i + (n - a) * l) / (i * i + l * l))), c = s + i * h - e, f = a + l * h - n, p = c * c + f * f;
								p < m && (m = p, d = t);
							}
						}
						if (0 === s) break;
					}
				}
			}
			if (o.margin = Math.sqrt(m), d < 0) return o.ux = 1, void (o.uy = 0);
			const y = r[4 * d + 2] - r[4 * d], x = r[4 * d + 3] - r[4 * d + 1], w = Math.hypot(y, x);
			o.ux = y / w, o.uy = x / w;
		}(t.rimIndex, e, n, o);
		return o.thickness = .004 + (.009 + .026000000000000002 * o.age * o.age - .004) * smoothstep(0, .6, o.margin), o;
	}
	const s = 6;
	function buildRimIndex(t) {
		const e = .6;
		let n = 1 / 0, o = 1 / 0, s = -1 / 0, r = -1 / 0;
		for (let g = 0; g < t.length; g += 2) n = Math.min(n, t[g]), s = Math.max(s, t[g]), o = Math.min(o, t[g + 1]), r = Math.max(r, t[g + 1]);
		const a = n - e, i = o - e, l = Math.ceil((s - a) / e) + 2, h = Math.ceil((r - i) / e) + 2, c = t.length / 4, f = Array.from({ length: l * h }, () => []);
		for (let g = 0; g < c; g++) {
			const n = t[4 * g], o = t[4 * g + 1], s = t[4 * g + 2], r = t[4 * g + 3], h = Math.floor((Math.min(n, s) - a) / e), c = Math.floor((Math.max(n, s) - a) / e), u = Math.floor((Math.min(o, r) - i) / e), p = Math.floor((Math.max(o, r) - i) / e);
			for (let t = u; t <= p; t++) for (let e = h; e <= c; e++) f[t * l + e].push(g);
		}
		const u = new Int32Array(l * h + 1);
		for (let g = 0; g < f.length; g++) u[g + 1] = u[g] + f[g].length;
		const p = new Int32Array(u[f.length]);
		for (let g = 0; g < f.length; g++) p.set(f[g], u[g]);
		return {
			segments: t,
			cell: e,
			originX: a,
			originY: i,
			columns: l,
			rows: h,
			starts: u,
			items: p
		};
	}
	function rimSegments(t) {
		const e = edgeCounts(Array.from(t.triangles)), n = [];
		for (const [o, s] of e) {
			if (1 !== s) continue;
			const e = Math.floor(o / 2097152), r = o % 2097152;
			t.base[e] && t.base[r] || n.push(t.material[2 * e], t.material[2 * e + 1], t.material[2 * r], t.material[2 * r + 1]);
		}
		return Float64Array.from(n);
	}
	function growSkeleton(t, e) {
		const n = e.scale, o = t.int(e.generations[0], e.generations[1]), s = [], r = Math.PI / 2 + t.range(-.12, .12), a = t.range(6, 9) * n, i = Math.max(.68, .5 * n);
		s.push(makeSegment(0, 0, r, a, i, i * t.range(1.05, 1.2), 0, 0, -1));
		let l = [0];
		for (let h = 1; h <= o; h++) {
			const n = [], r = h === o;
			for (const o of l) {
				const a = s[o], i = t.next(), l = i < .78 ? 2 : i < .9 ? 1 : 3, c = Math.atan2(a.dy, a.dx), f = t.range(.3, .55) * e.spread * (1 === h ? 1.1 : .9), u = t.range(-.15, .15), p = a.ax + a.dx * a.len, g = a.ay + a.dy * a.len;
				for (let e = 0; e < l; e++) {
					const i = 1 === l ? t.range(-.2, .2) : 2 === l ? (0 === e ? -1 : 1) * f * t.range(.65, 1.05) : (e - 1) * f * t.range(.9, 1.2);
					let m = c + i + u;
					m = Math.min(Math.PI / 2 + 1.25, Math.max(Math.PI / 2 - 1.25, m));
					let d = a.len * t.range(.8, 1.05) * (r ? t.range(1, 1.3) : 1);
					const M = Math.max(.68, a.rb * t.range(.62, .8));
					let y = r ? M * t.range(2.2, 3) : M * t.range(1.2, 1.5);
					y = Math.min(y, M + .8 * d);
					let x = null;
					for (let t = 0; t < 6 && !x; t++) {
						const t = makeSegment(p, g, m, d, M, y, a.s0 + a.len, h, o);
						overlapsOthers(t, s, o) ? (m += .12 * (i >= 0 ? 1 : -1), m = Math.min(Math.PI / 2 + 1.25, Math.max(Math.PI / 2 - 1.25, m)), d *= .87, y = Math.max(M, .87 * y)) : x = t;
					}
					x && (s.push(x), r || n.push(s.length - 1));
				}
			}
			l = n;
		}
		return s;
	}
	function makeSegment(t, e, n, o, s, r, a, i, l) {
		return {
			ax: t,
			ay: e,
			dx: Math.cos(n),
			dy: Math.sin(n),
			len: o,
			ra: s,
			rb: r,
			s0: a,
			gen: i,
			parent: l
		};
	}
	function overlapsOthers(t, e, n) {
		for (let o = 0; o < e.length; o++) {
			if (o === n) continue;
			const s = e[o];
			for (let e = 0; e <= 6; e++) {
				const n = .35 + .65 * e / 6, o = t.ax + t.dx * t.len * n, r = t.ay + t.dy * t.len * n, a = t.ra + (t.rb - t.ra) * n;
				if (segmentDistance(s, o, r) < -.5 * a) return !0;
			}
		}
		return !1;
	}
	const r = 11 * Math.PI / 180;
	function triangleOk(t, e, n, o, s, a) {
		const i = t[o] - t[n], l = e[o] - e[n], h = t[s] - t[n];
		return !(.5 * (i * (e[s] - e[n]) - l * h) < .25 * a) && function minAngle(t, e, n, o, s) {
			const r = Math.hypot(t[o] - t[s], e[o] - e[s]), a = Math.hypot(t[n] - t[s], e[n] - e[s]), i = Math.hypot(t[n] - t[o], e[n] - e[o]), angle = (t, e, n) => Math.acos(Math.min(1, Math.max(-1, (e * e + n * n - t * t) / (2 * e * n))));
			return Math.min(angle(r, a, i), angle(a, r, i), angle(i, r, a));
		}(t, e, n, o, s) >= r;
	}
	function resamplePolyline(t, e) {
		const n = [0];
		for (let i = 1; i < t.length; i++) n.push(n[i - 1] + Math.hypot(t[i][0] - t[i - 1][0], t[i][1] - t[i - 1][1]));
		const o = n[n.length - 1], s = Math.max(1, Math.round(o / e)), r = [];
		let a = 0;
		for (let i = 0; i <= s; i++) {
			const e = o * i / s;
			for (; a < t.length - 2 && n[a + 1] < e;) a++;
			const l = n[a + 1] - n[a], h = l > 0 ? Math.min(1, Math.max(0, (e - n[a]) / l)) : 0;
			r.push([t[a][0] + (t[a + 1][0] - t[a][0]) * h, t[a][1] + (t[a + 1][1] - t[a][1]) * h]);
		}
		return r;
	}
	function seedBoundary(t, e, n, o, s) {
		const outline = (e, n) => outlineDistance(t, e, n), r = s / 4, a = function outlineLoop(t, e, n, o, s) {
			const r = Math.ceil((n - e) / s) + 1, a = Math.ceil((o + s) / s) + 1, i = -s / 2, l = new Float64Array(r * a);
			for (let g = 0; g < a; g++) for (let n = 0; n < r; n++) l[g * r + n] = t(e + n * s, i + g * s);
			const h = /* @__PURE__ */ new Map(), crossing = (t) => {
				let n = h.get(t);
				if (n) return n;
				const o = t >> 1, a = o % r, c = Math.floor(o / r), f = l[o], u = f / (f - (1 & t ? l[o + r] : l[o + 1]));
				return n = 1 & t ? [e + a * s, i + (c + u) * s] : [e + (a + u) * s, i + c * s], h.set(t, n), n;
			}, c = /* @__PURE__ */ new Map(), link = (t, e) => {
				for (const [n, o] of [[t, e], [e, t]]) {
					const t = c.get(n);
					t ? t.push(o) : c.set(n, [o]);
				}
			};
			for (let g = 0; g < a - 1; g++) for (let t = 0; t < r - 1; t++) {
				const e = g * r + t, n = [
					l[e] < 0,
					l[e + 1] < 0,
					l[e + r + 1] < 0,
					l[e + r] < 0
				], o = 2 * e, s = 2 * (e + 1) + 1, a = 2 * (e + r), i = 2 * e + 1, h = [
					o,
					s,
					a,
					i
				].filter((t, e) => n[e] !== n[(e + 1) % 4]);
				if (2 === h.length) link(h[0], h[1]);
				else if (4 === h.length) {
					const t = (l[e] + l[e + 1] + l[e + r + 1] + l[e + r]) / 4 < 0;
					n[0] === t ? (link(o, s), link(a, i)) : (link(i, o), link(s, a));
				}
			}
			let f = [], u = 0;
			const p = /* @__PURE__ */ new Set();
			for (const g of c.keys()) {
				if (p.has(g)) continue;
				const t = [];
				let e = -1, n = g;
				for (; !p.has(n);) {
					p.add(n), t.push(crossing(n));
					const o = c.get(n).find((t) => t !== e && !p.has(t));
					if (void 0 === o) break;
					e = n, n = o;
				}
				let o = 0;
				for (let s = 0; s < t.length; s++) {
					const [e, n] = t[s], [r, a] = t[(s + 1) % t.length];
					o += e * a - n * r;
				}
				Math.abs(o) > Math.abs(u) && (u = o, f = t);
			}
			return u < 0 && f.reverse(), f;
		}((e, n) => chartDistance(t, e, n), e, n, o, r), i = a.map(([, t]) => Math.abs(t) < 1e-9), project = ([t, e]) => function projectToZero(t, e, n) {
			const o = .01;
			for (let s = 0; s < 6; s++) {
				const s = t(e, n);
				if (Math.abs(s) < 1e-5) break;
				const r = (t(e + o, n) - t(e - o, n)) / (2 * o), a = (t(e, n + o) - t(e, n - o)) / (2 * o), i = r * r + a * a;
				if (i < 1e-12) break;
				e -= s * r / i, n -= s * a / i;
			}
			return [e, n];
		}(outline, t, e);
		if (i.filter(Boolean).length < 2) return resamplePolyline([...a, a[0]].map(project), s).slice(0, -1).map(project);
		let l = i.findIndex((t, e) => t && !i[(e - 1 + a.length) % a.length]);
		l < 0 && (l = 0);
		const h = [...a.slice(l), ...a.slice(0, l)], c = h.findIndex(([, t]) => Math.abs(t) >= 1e-9), f = h.slice(0, c), u = h.slice(c), corner = (t, e) => {
			let n = t, o = t;
			for (; outline(o, 0) < 0;) n = o, o += e * r;
			for (let s = 0; s < 40; s++) {
				const t = (n + o) / 2;
				outline(t, 0) < 0 ? n = t : o = t;
			}
			return (n + o) / 2;
		}, p = corner(f[0][0], -1), g = corner(f[f.length - 1][0], 1), m = resamplePolyline([
			[g, 0],
			...u.map(project),
			[p, 0]
		], s);
		for (let y = 1; y < m.length - 1; y++) m[y] = project(m[y]), m[y][1] = Math.max(m[y][1], .25 * s);
		const d = Math.max(1, Math.round((g - p) / s)), M = [];
		for (let y = 0; y < d; y++) M.push([p + (g - p) * y / d, 0]);
		return [...M, ...m.slice(0, -1)];
	}
	function insidePolygon(t, e, n) {
		let o = !1;
		for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
			const [a, i] = t[s], [l, h] = t[r];
			i > n != h > n && e < (l - a) * (n - i) / (h - i) + a && (o = !o);
		}
		return o;
	}
	function polygonDistance(t, e, n) {
		let o = 1 / 0;
		for (let s = 0, r = t.length - 1; s < t.length; r = s++) {
			const [a, i] = t[r], [l, h] = t[s], c = l - a, f = h - i, u = Math.min(1, Math.max(0, ((e - a) * c + (n - i) * f) / (c * c + f * f || 1)));
			o = Math.min(o, Math.hypot(e - a - c * u, n - i - f * u));
		}
		return o;
	}
	function buildSeedMesh(t) {
		const e = .45, n = e * Math.sqrt(3) / 2, o = e * n / 2;
		let s = 1 / 0, r = -1 / 0, a = -1 / 0;
		for (const S of t.segments) {
			const e = Math.max(S.ra, S.rb) + t.lobeAmplitude + .6;
			for (const t of [0, 1]) {
				const n = S.ax + S.dx * S.len * t, o = S.ay + S.dy * S.len * t;
				s = Math.min(s, n - e), r = Math.max(r, n + e), a = Math.max(a, o + e);
			}
		}
		const i = seedBoundary(t, s - e, r + e, a + e, e), l = i.map(([t]) => t), h = i.map(([, t]) => t), c = i.length, f = Math.ceil((r - s) / e) + 3, u = Math.ceil(a / n) + 2;
		for (let S = 1; S < u; S++) for (let t = 0; t < f; t++) {
			const o = s - e + t * e + (1 & S ? e / 2 : 0), r = S * n;
			insidePolygon(i, o, r) && polygonDistance(i, o, r) > .55 * e && (l.push(o), h.push(r));
		}
		const p = l.length, g = Float64Array.from(l), m = Float64Array.from(h);
		let d = [];
		const M = function delaunay(t, e) {
			const n = t.length;
			let o = 1 / 0, s = 1 / 0, r = -1 / 0, a = -1 / 0;
			for (let m = 0; m < n; m++) o = Math.min(o, t[m]), r = Math.max(r, t[m]), s = Math.min(s, e[m]), a = Math.max(a, e[m]);
			const i = 20 * Math.max(r - o, a - s), l = (o + r) / 2, h = (s + a) / 2, c = [
				...t,
				l - i,
				l + i,
				l
			], f = [
				...e,
				h - i,
				h - i,
				h + i
			];
			let u = [
				n,
				n + 1,
				n + 2
			];
			const circle = (t, e, n) => {
				const o = c[t], s = f[t], r = c[e] - o, a = f[e] - s, i = c[n] - o, l = f[n] - s, h = 2 * (r * l - a * i), u = r * r + a * a, p = i * i + l * l, g = (l * u - a * p) / h, m = (r * p - i * u) / h;
				return [
					o + g,
					s + m,
					g * g + m * m
				];
			};
			let p = circle(n, n + 1, n + 2);
			for (let m = 0; m < n; m++) {
				const t = [], e = [], o = /* @__PURE__ */ new Map();
				for (let s = 0; s < u.length / 3; s++) {
					const r = c[m] - p[3 * s], a = f[m] - p[3 * s + 1];
					if (r * r + a * a < p[3 * s + 2]) for (let t = 0; t < 3; t++) {
						const e = u[3 * s + t], r = u[3 * s + (t + 1) % 3], a = r * (n + 3) + e;
						o.has(a) ? o.delete(a) : o.set(e * (n + 3) + r, [e, r]);
					}
					else t.push(u[3 * s], u[3 * s + 1], u[3 * s + 2]), e.push(p[3 * s], p[3 * s + 1], p[3 * s + 2]);
				}
				for (const [n, s] of o.values()) t.push(n, s, m), e.push(...circle(n, s, m));
				u = t, p = e;
			}
			const g = [];
			for (let m = 0; m < u.length; m += 3) u[m] < n && u[m + 1] < n && u[m + 2] < n && g.push(u[m], u[m + 1], u[m + 2]);
			return g;
		}(l, h);
		for (let S = 0; S < M.length; S += 3) {
			const t = M[S], e = M[S + 1], n = M[S + 2];
			insidePolygon(i, (g[t] + g[e] + g[n]) / 3, (m[t] + m[e] + m[n]) / 3) && d.push(t, e, n);
		}
		d = function largestComponent(t) {
			const e = t.length / 3, n = /* @__PURE__ */ new Map();
			for (let i = 0; i < e; i++) for (let e = 0; e < 3; e++) {
				const o = edgeKey(t[3 * i + e], t[3 * i + (e + 1) % 3]), s = n.get(o);
				s ? s.push(i) : n.set(o, [i]);
			}
			const o = new Int32Array(e).fill(-1), s = [];
			for (let i = 0; i < e; i++) {
				if (o[i] >= 0) continue;
				const e = s.length;
				let r = 0;
				const a = [i];
				for (o[i] = e; a.length;) {
					const s = a.pop();
					r++;
					for (let r = 0; r < 3; r++) for (const i of n.get(edgeKey(t[3 * s + r], t[3 * s + (r + 1) % 3]))) o[i] < 0 && (o[i] = e, a.push(i));
				}
				s.push(r);
			}
			let r = 0;
			for (let i = 1; i < s.length; i++) s[i] > s[r] && (r = i);
			const a = [];
			for (let i = 0; i < e; i++) o[i] === r && a.push(t[3 * i], t[3 * i + 1], t[3 * i + 2]);
			return a;
		}(function removeBowTies(t, e, n, o, s) {
			for (let r = 0; r < 64; r++) {
				const r = edgeCounts(t), a = new Uint16Array(e);
				for (const [t, e] of r) 1 === e && (a[Math.floor(t / 2097152)]++, a[t % 2097152]++);
				const i = /* @__PURE__ */ new Set(), l = incidentTriangles(t, e);
				for (let c = 0; c < e; c++) {
					if (a[c] <= 2) continue;
					let e = -1, h = -1 / 0;
					for (const a of l[c]) {
						const i = t[a], l = t[a + 1], c = t[a + 2];
						if (1 !== r.get(edgeKey(i, l)) && 1 !== r.get(edgeKey(l, c)) && 1 !== r.get(edgeKey(c, i))) continue;
						const f = s((n[i] + n[l] + n[c]) / 3, (o[i] + o[l] + o[c]) / 3);
						f > h && (h = f, e = a);
					}
					e >= 0 && i.add(e);
				}
				if (0 === i.size) return t;
				const h = [];
				for (let e = 0; e < t.length; e += 3) i.has(e) || h.push(t[e], t[e + 1], t[e + 2]);
				t = h;
			}
			return t;
		}(d, p, g, m, (e, n) => chartDistance(t, e, n)));
		const y = incidentTriangles(d, p), valid = (t) => y[t].every((t) => triangleOk(g, m, d[t], d[t + 1], d[t + 2], o));
		for (let S = 0; S < 6; S++) for (let t = c; t < p; t++) {
			if (0 === y[t].length) continue;
			let e = 0, n = 0, o = 0;
			for (const a of y[t]) for (let s = 0; s < 3; s++) {
				const r = d[a + s];
				r !== t && (e += g[r], n += m[r], o++);
			}
			const s = g[t], r = m[t];
			g[t] = s + .5 * (e / o - s), m[t] = r + .5 * (n / o - r), valid(t) || (g[t] = s, m[t] = r);
		}
		const x = new Int32Array(p).fill(-1);
		let w = 0;
		const A = new Uint8Array(p);
		for (const S of d) A[S] = 1;
		for (let S = 0; S < p; S++) A[S] && (x[S] = w++);
		const b = new Float64Array(2 * w), v = new Uint8Array(w), C = new Uint8Array(w), F = new Set(function boundaryVertices(t) {
			const e = edgeCounts(t), n = /* @__PURE__ */ new Set();
			for (const [o, s] of e) 1 === s && (n.add(Math.floor(o / 2097152)), n.add(o % 2097152));
			return [...n].sort((t, e) => t - e);
		}(d));
		for (let S = 0; S < p; S++) {
			const t = x[S];
			t < 0 || (b[2 * t] = g[S], b[2 * t + 1] = m[S], F.has(S) && (m[S] < .001 ? C[t] = 1 : v[t] = 1));
		}
		return {
			count: w,
			material: b,
			triangles: Uint32Array.from(d, (t) => x[t]),
			rim: v,
			base: C
		};
	}
	function edgeKey(t, e) {
		return t < e ? 2097152 * t + e : 2097152 * e + t;
	}
	function edgeCounts(t) {
		const e = /* @__PURE__ */ new Map();
		for (let n = 0; n < t.length; n += 3) for (let o = 0; o < 3; o++) {
			const s = edgeKey(t[n + o], t[n + (o + 1) % 3]);
			e.set(s, (e.get(s) ?? 0) + 1);
		}
		return e;
	}
	function incidentTriangles(t, e) {
		const n = Array.from({ length: e }, () => []);
		for (let o = 0; o < t.length; o += 3) n[t[o]].push(o), n[t[o + 1]].push(o), n[t[o + 2]].push(o);
		return n;
	}
	function cross(t, e) {
		return [
			t[1] * e[2] - t[2] * e[1],
			t[2] * e[0] - t[0] * e[2],
			t[0] * e[1] - t[1] * e[0]
		];
	}
	function normalize(t) {
		const e = Math.hypot(t[0], t[1], t[2]);
		return [
			t[0] / e,
			t[1] / e,
			t[2] / e
		];
	}
	function placeFrond(t, e, n, o) {
		const s = [
			Math.sin(e),
			0,
			Math.cos(e)
		], r = normalize([
			s[0] * Math.sin(n),
			Math.cos(n),
			s[2] * Math.sin(n)
		]), a = normalize([
			s[0] * Math.cos(n),
			-Math.sin(n),
			s[2] * Math.cos(n)
		]), i = cross(r, a), l = normalize(cross(r, normalize([
			a[0] * Math.cos(o) + i[0] * Math.sin(o),
			a[1] * Math.cos(o) + i[1] * Math.sin(o),
			a[2] * Math.cos(o) + i[2] * Math.sin(o)
		])));
		return {
			origin: [
				t[0] + 1 * s[0],
				t[1] + .3,
				t[2] + 1 * s[2]
			],
			ex: l,
			ey: r,
			normal: cross(l, r)
		};
	}
	function flatPositions(t) {
		const { material: e, count: n } = t.mesh, o = new Float32Array(3 * n);
		for (let s = 0; s < n; s++) frondToWorld(t, e[2 * s], e[2 * s + 1], o, 3 * s);
		return o;
	}
	function placementViolations(t, e) {
		if (!e.length) return 0;
		const n = flatPositions(t), o = e.reduce((t, e) => t + e.mesh.count, t.mesh.count), s = new Float32Array(3 * o), r = new Uint16Array(o), a = [];
		let i = 0;
		for (const [g, m] of [t, ...e].entries()) {
			s.set(0 === g ? n : flatPositions(m), 3 * i), r.fill(g, i, i + m.mesh.count);
			for (const t of m.mesh.triangles) a.push(t + i);
			i += m.mesh.count;
		}
		const l = function countCrossings(t, e, n, o, s = 1, r = -1, a, i) {
			const l = e.length / 3, h = /* @__PURE__ */ new Map(), key = (t, e, n) => 1024 * (1024 * (t + 512) + (e + 512)) + (n + 512);
			for (let u = 0; u < l; u++) {
				let n = [
					1 / 0,
					1 / 0,
					1 / 0
				], o = [
					-1 / 0,
					-1 / 0,
					-1 / 0
				];
				for (let s = 0; s < 3; s++) {
					const r = e[3 * u + s];
					for (let e = 0; e < 3; e++) n[e] = Math.min(n[e], t[3 * r + e]), o[e] = Math.max(o[e], t[3 * r + e]);
				}
				n = n.map((t) => Math.floor(t / s)), o = o.map((t) => Math.floor(t / s));
				for (let t = n[0]; t <= o[0]; t++) for (let e = n[1]; e <= o[1]; e++) for (let s = n[2]; s <= o[2]; s++) {
					const n = key(t, e, s), o = h.get(n);
					o ? o.push(u) : h.set(n, [u]);
				}
			}
			const c = {
				frond: 0,
				plant: 0,
				plants: 0,
				local: 0
			}, f = /* @__PURE__ */ new Set();
			for (let u = 0; u < l; u++) for (let l = 0; l < 3; l++) {
				const p = e[3 * u + l], g = e[3 * u + (l + 1) % 3];
				if (p > g) continue;
				f.clear();
				const m = [
					0,
					1,
					2
				].map((e) => Math.floor(Math.min(t[3 * p + e], t[3 * g + e]) / s)), d = [
					0,
					1,
					2
				].map((e) => Math.floor(Math.max(t[3 * p + e], t[3 * g + e]) / s));
				for (let s = m[0]; s <= d[0]; s++) for (let l = m[1]; l <= d[1]; l++) for (let u = m[2]; u <= d[2]; u++) for (const m of h.get(key(s, l, u)) ?? []) {
					if (f.has(m)) continue;
					f.add(m);
					const s = e[3 * m], l = e[3 * m + 1], h = e[3 * m + 2];
					s !== p && l !== p && h !== p && s !== g && l !== g && h !== g && (r >= 0 && (o[p] === o[s] || o[p] !== r && o[s] !== r) || segmentCrossesTriangle(t, p, g, s, l, h) && (i?.push(p, g, s, l, h), a && Math.hypot(a[3 * p] - a[3 * s], a[3 * p + 1] - a[3 * s + 1], a[3 * p + 2] - a[3 * s + 2]) < 1 && c.local++, n[p] !== n[s] ? c.plants++ : o[p] !== o[s] ? c.plant++ : c.frond++));
				}
			}
			return c;
		}(s, Uint32Array.from(a), new Uint8Array(o), r, 1, 0), h = .5, c = /* @__PURE__ */ new Map();
		for (let g = t.mesh.count; g < o; g++) {
			const t = `${Math.floor(s[3 * g] / h)},${Math.floor(s[3 * g + 1] / h)},${Math.floor(s[3 * g + 2] / h)}`, e = c.get(t);
			e ? e.push(g) : c.set(t, [g]);
		}
		const nearBase = (n) => {
			const o = r[n], s = 0 === o ? t : e[o - 1];
			let a = 0;
			for (let r = 0; r < o; r++) a += (0 === r ? t : e[r - 1]).mesh.count;
			return s.mesh.material[2 * (n - a) + 1] < 2.5;
		};
		let f = 0;
		for (let g = 0; g < t.mesh.count; g++) {
			if (t.mesh.material[2 * g + 1] < 2.5) continue;
			const e = Math.floor(s[3 * g] / h), n = Math.floor(s[3 * g + 1] / h), o = Math.floor(s[3 * g + 2] / h);
			let r = !1;
			for (let t = -1; t <= 1 && !r; t++) for (let a = -1; a <= 1 && !r; a++) for (let i = -1; i <= 1 && !r; i++) for (const l of c.get(`${e + t},${n + a},${o + i}`) ?? []) if (Math.hypot(s[3 * l] - s[3 * g], s[3 * l + 1] - s[3 * g + 1], s[3 * l + 2] - s[3 * g + 2]) < .5 && !nearBase(l)) {
				r = !0;
				break;
			}
			r && f++;
		}
		const u = /* @__PURE__ */ new Map();
		for (let g = t.mesh.count; g < o; g++) {
			if (e[r[g] - 1].plant === t.plant) continue;
			const n = `${Math.floor(s[3 * g] / 3)},${Math.floor(s[3 * g + 1] / 3)},${Math.floor(s[3 * g + 2] / 3)}`, o = u.get(n);
			o ? o.push(g) : u.set(n, [g]);
		}
		let p = 0;
		for (let g = 0; g < t.mesh.count && u.size; g++) {
			const t = Math.floor(s[3 * g] / 3), e = Math.floor(s[3 * g + 1] / 3), n = Math.floor(s[3 * g + 2] / 3);
			let o = !1;
			for (let r = -1; r <= 1 && !o; r++) for (let a = -1; a <= 1 && !o; a++) for (let i = -1; i <= 1 && !o; i++) for (const l of u.get(`${t + r},${e + a},${n + i}`) ?? []) if (Math.hypot(s[3 * l] - s[3 * g], s[3 * l + 1] - s[3 * g + 1], s[3 * l + 2] - s[3 * g + 2]) < 3) {
				o = !0;
				break;
			}
			o && p++;
		}
		return 1e3 * (l.plant + l.plants + p) + f;
	}
	function frondToWorld(t, e, n, o, s = 0) {
		o[s] = t.origin[0] + e * t.ex[0] + n * t.ey[0], o[s + 1] = t.origin[1] + e * t.ex[1] + n * t.ey[1], o[s + 2] = t.origin[2] + e * t.ex[2] + n * t.ey[2];
	}
	const a = {
		rim: .45,
		inside: .8
	}, i = {
		rim: .15,
		inside: .8
	}, l = {
		frilliness: 1,
		simSteps: 240,
		renderSteps: 60,
		bending: .5,
		iterations: 3
	};
	var h = class {
		vertexCount = 0;
		vertexCapacity = 0;
		halfedgeCount = 0;
		halfedgeCapacity = 0;
		x = /* @__PURE__ */ new Float64Array(0);
		y = /* @__PURE__ */ new Float64Array(0);
		p = /* @__PURE__ */ new Float64Array(0);
		v = /* @__PURE__ */ new Float64Array(0);
		w = /* @__PURE__ */ new Float64Array(0);
		plant = /* @__PURE__ */ new Uint8Array(0);
		frond = /* @__PURE__ */ new Uint16Array(0);
		flags = /* @__PURE__ */ new Uint8Array(0);
		age = /* @__PURE__ */ new Float64Array(0);
		margin = /* @__PURE__ */ new Float64Array(0);
		thickness = /* @__PURE__ */ new Float64Array(0);
		excess = /* @__PURE__ */ new Float64Array(0);
		ux = /* @__PURE__ */ new Float64Array(0);
		uy = /* @__PURE__ */ new Float64Array(0);
		out = /* @__PURE__ */ new Int32Array(0);
		corner = /* @__PURE__ */ new Int32Array(0);
		opposite = /* @__PURE__ */ new Int32Array(0);
		reserveVertices(t) {
			if (t <= this.vertexCapacity) return;
			const e = Math.max(t, Math.ceil(1.5 * this.vertexCapacity)), grow = (t, n) => {
				const o = new t.constructor(e * n);
				return o.set(t), o;
			};
			this.x = grow(this.x, 1), this.y = grow(this.y, 1), this.p = grow(this.p, 3), this.v = grow(this.v, 3), this.w = grow(this.w, 1), this.plant = grow(this.plant, 1), this.frond = grow(this.frond, 1), this.flags = grow(this.flags, 1), this.age = grow(this.age, 1), this.margin = grow(this.margin, 1), this.thickness = grow(this.thickness, 1), this.excess = grow(this.excess, 1), this.ux = grow(this.ux, 1), this.uy = grow(this.uy, 1), this.out = grow(this.out, 1), this.vertexCapacity = e;
		}
		reserveHalfedges(t) {
			if (t <= this.halfedgeCapacity) return;
			const e = Math.max(t, Math.ceil(1.5 * this.halfedgeCapacity)), n = new Int32Array(e);
			n.set(this.corner);
			const o = new Int32Array(e);
			o.set(this.opposite), this.corner = n, this.opposite = o, this.halfedgeCapacity = e;
		}
	};
	const next = (t) => t - t % 3 + (t + 1) % 3, prev = (t) => t - t % 3 + (t + 2) % 3;
	function hingeAngle(t, e, n, o, s, r) {
		const a = t[3 * e], i = t[3 * e + 1], l = t[3 * e + 2], h = t[3 * n], c = t[3 * n + 1], f = t[3 * n + 2], u = t[3 * o], p = t[3 * o + 1], g = t[3 * o + 2], m = t[3 * s], d = t[3 * s + 1], M = t[3 * s + 2], y = h - a, x = c - i, w = f - l, A = Math.hypot(y, x, w);
		if (A < 1e-12) return NaN;
		const b = u - a, v = p - i, C = g - l, F = u - h, S = p - c, k = g - f, I = v * k - C * S, P = C * F - b * k, q = b * S - v * F, U = m - h, T = d - c, L = M - f, $ = m - a, D = d - i, O = M - l, K = T * O - L * D, V = L * $ - U * O, N = U * D - T * $, z = I * I + P * P + q * q, E = K * K + V * V + N * N;
		if (z < 1e-20 || E < 1e-20) return NaN;
		const R = Math.sqrt(z), B = Math.sqrt(E), j = (I * K + P * V + q * N) / (R * B), H = ((P * N - q * V) * y + (q * K - I * N) * x + (I * V - P * K) * w) / (R * B * A), W = Math.atan2(H, j), X = -1 * A / z, Y = -1 * A / E;
		r[6] = X * I, r[7] = X * P, r[8] = X * q, r[9] = Y * K, r[10] = Y * V, r[11] = Y * N;
		const Z = ((u - h) * y + (p - c) * x + (g - f) * w) / A, G = ((m - h) * y + (d - c) * x + (M - f) * w) / A, J = ((u - a) * y + (p - i) * x + (g - l) * w) / A, Q = ((m - a) * y + (d - i) * x + (M - l) * w) / A, _ = -1 / z, tt = -1 / E;
		return r[0] = Z * _ * I + G * tt * K, r[1] = Z * _ * P + G * tt * V, r[2] = Z * _ * q + G * tt * N, r[3] = -(J * _ * I + Q * tt * K), r[4] = -(J * _ * P + Q * tt * V), r[5] = -(J * _ * q + Q * tt * N), W;
	}
	var c = class {
		mesh = new h();
		fronds = [];
		options;
		tau = 0;
		steps = 0;
		level = a;
		fields = {
			outline: 0,
			margin: 0,
			age: 0,
			radius: 0,
			thickness: 0,
			ux: 1,
			uy: 0
		};
		gradient = /* @__PURE__ */ new Float64Array(12);
		timings = {
			split: 0,
			flip: 0,
			stretch: 0,
			bend: 0,
			repel: 0
		};
		correction = /* @__PURE__ */ new Float64Array(0);
		radius = /* @__PURE__ */ new Float64Array(0);
		rest = /* @__PURE__ */ new Float64Array(0);
		corrections = /* @__PURE__ */ new Float64Array(0);
		constructor(t, e = {}) {
			this.options = {
				...l,
				...e
			};
			const n = this.mesh;
			let o = 0, s = 0;
			for (const r of t.plants) for (const t of r.fronds) this.fronds.push(t), o += t.mesh.count, s += t.mesh.triangles.length / 3;
			n.reserveVertices(2 * o), n.reserveHalfedges(3 * s * 2);
			for (let r = 0; r < this.fronds.length; r++) {
				const t = this.fronds[r], { material: e, triangles: o, base: s, rim: a, count: i } = t.mesh, l = n.vertexCount;
				for (let c = 0; c < i; c++) {
					const o = e[2 * c], i = e[2 * c + 1], l = this.addVertex(r, t.plant, o, i, s[c] ? 1 : a[c] ? 2 : 0), h = .01 * (valueNoise(o / 2, i / 2, t.noiseSeed + 7) - .5) * 2 * Math.min(1, i / 2);
					for (let e = 0; e < 3; e++) n.p[3 * l + e] = t.origin[e] + o * t.ex[e] + i * t.ey[e] + h * t.normal[e];
				}
				const h = n.halfedgeCount;
				for (let n = 0; n < o.length; n += 3) this.addTriangle(o[n] + l, o[n + 1] + l, o[n + 2] + l);
				this.linkOpposites(h, n.halfedgeCount);
			}
		}
		run() {
			const t = performance.now(), { simSteps: e, renderSteps: n } = this.options;
			this.level = a;
			for (let r = 0; r < e; r++) this.tau = Math.min(1, (r + 1) / (.85 * e)), this.step();
			const o = this.mesh.vertexCount, s = this.triangles();
			this.level = i, this.tau = 1;
			for (let r = 0; r < n; r++) this.step();
			return this.result(o, s, performance.now() - t);
		}
		step() {
			this.steps++ % 2 == 0 && (this.timed("split", () => this.split()), this.timed("flip", () => this.flip())), this.relax();
		}
		timed(t, e) {
			const n = performance.now();
			e(), this.timings[t] += performance.now() - n;
		}
		addVertex(t, e, n, o, s) {
			const r = this.mesh;
			r.reserveVertices(r.vertexCount + 1);
			const a = r.vertexCount++;
			r.x[a] = n, r.y[a] = o, r.frond[a] = t, r.plant[a] = e, r.flags[a] = s, r.w[a] = 1 & s ? 0 : 1, r.v[3 * a] = r.v[3 * a + 1] = r.v[3 * a + 2] = 0;
			const i = frondFields(this.fronds[t], n, o, this.fields);
			return r.margin[a] = 2 & s ? 0 : i.margin, r.age[a] = i.age, r.thickness[a] = i.thickness, r.ux[a] = i.ux, r.uy[a] = i.uy, r.excess[a] = function marginExcess(t, e) {
				const n = 1.6 + -1.5 * smoothstep(0, .85, t.age), o = .3 * smoothstep(1.3, .6, t.radius) * Math.exp(-t.margin / .25);
				return e * (n * (Math.exp(-t.margin / .4) + .8 * Math.exp(-t.margin / 1.8)) + o);
			}({
				...i,
				margin: r.margin[a]
			}, this.options.frilliness), r.out[a] = -1, a;
		}
		addTriangle(t, e, n) {
			const o = this.mesh;
			o.reserveHalfedges(o.halfedgeCount + 3);
			const s = o.halfedgeCount;
			return o.halfedgeCount += 3, o.corner[s] = t, o.corner[s + 1] = e, o.corner[s + 2] = n, o.opposite[s] = o.opposite[s + 1] = o.opposite[s + 2] = -1, o.out[t] = s, o.out[e] = s + 1, o.out[n] = s + 2, s;
		}
		linkOpposites(t, e) {
			const n = this.mesh, o = /* @__PURE__ */ new Map();
			for (let s = t; s < e; s++) {
				const t = n.corner[s], e = n.corner[next(s)], r = 16777216 * e + t, a = o.get(r);
				void 0 !== a ? (n.opposite[s] = a, n.opposite[a] = s, o.delete(r)) : o.set(16777216 * t + e, s);
			}
		}
		restLengthSquared(t, e) {
			const n = this.mesh, o = n.x[e] - n.x[t], s = n.y[e] - n.y[t], r = n.ux[t] * o + n.uy[t] * s, a = n.ux[e] * o + n.uy[e] * s;
			return o * o + s * s + .5 * this.tau * (n.excess[t] * r * r + n.excess[e] * a * a);
		}
		hMax(t, e) {
			const n = Math.min(this.mesh.margin[t], this.mesh.margin[e]), o = Math.min(1, n / 1), s = o * o * (3 - 2 * o);
			return this.level.rim + (this.level.inside - this.level.rim) * s;
		}
		split() {
			const t = this.mesh, e = [], n = [];
			for (let r = 0; r < t.halfedgeCount; r++) {
				const o = t.opposite[r];
				if (o >= 0 && o < r) continue;
				const s = t.corner[r], a = t.corner[next(r)], i = this.hMax(s, a), l = this.restLengthSquared(s, a);
				l > i * i && (e.push(r), n.push(l));
			}
			if (!e.length) return;
			const o = e.map((t, e) => e).sort((t, o) => n[o] - n[t] || e[t] - e[o]), s = new Uint8Array(t.halfedgeCount + 6 * e.length);
			for (const r of o) {
				const n = e[r], o = t.opposite[n];
				if (s[n - n % 3] || o >= 0 && s[o - o % 3]) continue;
				const a = this.splitEdge(n);
				s[n - n % 3] = 1, o >= 0 && (s[o - o % 3] = 1);
				for (const t of a) s[t] = 1;
			}
		}
		splitEdge(t) {
			const e = this.mesh, n = next(t), o = prev(t), s = e.corner[t], r = e.corner[n], a = e.corner[o], i = e.opposite[t], l = i < 0, h = l ? 1 & e.flags[s] && 1 & e.flags[r] ? 1 : 2 : 0, c = this.addVertex(e.frond[s], e.plant[s], (e.x[s] + e.x[r]) / 2, (e.y[s] + e.y[r]) / 2, h);
			for (let y = 0; y < 3; y++) e.p[3 * c + y] = (e.p[3 * s + y] + e.p[3 * r + y]) / 2, e.v[3 * c + y] = (e.v[3 * s + y] + e.v[3 * r + y]) / 2;
			const f = e.opposite[n];
			e.corner[n] = c;
			const u = this.addTriangle(c, r, a);
			if (e.opposite[u + 1] = f, f >= 0 && (e.opposite[f] = u + 1), e.opposite[u + 2] = n, e.opposite[n] = u + 2, e.out[s] = t, e.out[a] = o, l) return e.opposite[t] = -1, e.opposite[u] = -1, [u];
			const p = next(i), g = prev(i), m = e.corner[g], d = e.opposite[p];
			e.corner[p] = c;
			const M = this.addTriangle(c, s, m);
			return e.opposite[M + 1] = d, d >= 0 && (e.opposite[d] = M + 1), e.opposite[M + 2] = p, e.opposite[p] = M + 2, e.opposite[t] = M, e.opposite[M] = t, e.opposite[i] = u, e.opposite[u] = i, e.out[r] = i, e.out[m] = g, [u, M];
		}
		connected(t, e) {
			const n = this.mesh, o = n.out[t];
			let s = o;
			for (let r = 0; r < 64; r++) {
				if (n.corner[next(s)] === e || n.corner[prev(s)] === e) return !0;
				const t = n.opposite[prev(s)];
				if (t < 0) break;
				if (s = t, s === o) return !1;
			}
			s = o;
			for (let r = 0; r < 64; r++) {
				const t = n.opposite[s];
				if (t < 0) return !1;
				if (s = next(t), n.corner[next(s)] === e || n.corner[prev(s)] === e) return !0;
				if (s === o) return !1;
			}
			return !1;
		}
		flip() {
			const t = this.mesh;
			for (let e = 0; e < t.halfedgeCount; e++) {
				const n = t.opposite[e];
				if (n < 0 || n < e) continue;
				const o = t.corner[e], s = t.corner[next(e)], r = t.corner[prev(e)], a = t.corner[prev(n)];
				if (r === a) continue;
				const i = this.restLengthSquared(o, s), l = this.restLengthSquared(o, r), h = this.restLengthSquared(s, r), c = this.restLengthSquared(o, a), f = this.restLengthSquared(s, a);
				(l + h - i) / Math.sqrt(Math.max(2 * (l * h + h * i + i * l) - l * l - h * h - i * i, 1e-20)) + (c + f - i) / Math.sqrt(Math.max(2 * (c * f + f * i + i * c) - c * c - f * f - i * i, 1e-20)) >= -1e-6 || this.connected(r, a) || this.ccw(r, o, a) && this.ccw(a, s, r) && this.flipEdge(e);
			}
		}
		ccw(t, e, n) {
			const o = this.mesh;
			return (o.x[e] - o.x[t]) * (o.y[n] - o.y[t]) - (o.y[e] - o.y[t]) * (o.x[n] - o.x[t]) > 1e-12;
		}
		flipEdge(t) {
			const e = this.mesh, n = e.opposite[t], o = next(t), s = prev(t), r = next(n), a = prev(n), i = e.corner[t], l = e.corner[o], h = e.corner[s], c = e.corner[a], f = e.opposite[o], u = e.opposite[s], p = e.opposite[r], g = e.opposite[a];
			e.corner[t] = h, e.corner[o] = i, e.corner[s] = c, e.corner[n] = c, e.corner[r] = l, e.corner[a] = h;
			const link = (t, n) => {
				e.opposite[t] = n, n >= 0 && (e.opposite[n] = t);
			};
			link(t, u), link(o, p), link(s, a), link(n, g), link(r, f), e.out[h] = t, e.out[i] = o, e.out[c] = n, e.out[l] = r;
		}
		relax() {
			const t = this.mesh, e = t.vertexCount, n = t.p, o = t.v, s = t.w, r = new Float64Array(n.subarray(0, 3 * e));
			for (let a = 0; a < 3 * e; a++) n[a] += .85 * o[a];
			for (let a = 0; a < e; a++) 0 === s[a] && (n[3 * a] = r[3 * a], n[3 * a + 1] = r[3 * a + 1], n[3 * a + 2] = r[3 * a + 2]);
			this.timed("stretch", () => {
				this.restLengths();
				for (let t = 0; t < this.options.iterations; t++) this.stretch();
			}), this.timed("bend", () => this.bend()), this.steps % 2 == 0 && this.timed("repel", () => this.repel());
			for (let a = 0; a < 3 * e; a++) o[a] = n[a] - r[a];
		}
		restLengths() {
			const t = this.mesh;
			this.rest.length < t.halfedgeCount && (this.rest = new Float64Array(t.halfedgeCapacity));
			for (let e = 0; e < t.halfedgeCount; e++) {
				const n = t.opposite[e];
				n >= 0 && n < e || (this.rest[e] = Math.sqrt(this.restLengthSquared(t.corner[e], t.corner[next(e)])));
			}
		}
		stretch() {
			const t = this.mesh, e = t.p, n = t.w;
			for (let o = 0; o < t.halfedgeCount; o++) {
				const s = t.opposite[o];
				if (s >= 0 && s < o) continue;
				const r = t.corner[o], a = t.corner[next(o)], i = n[r], l = n[a];
				if (i + l === 0) continue;
				const h = e[3 * a] - e[3 * r], c = e[3 * a + 1] - e[3 * r + 1], f = e[3 * a + 2] - e[3 * r + 2], u = Math.hypot(h, c, f);
				if (u < 1e-12) continue;
				const p = (u - this.rest[o]) / (u * (i + l));
				e[3 * r] += i * p * h, e[3 * r + 1] += i * p * c, e[3 * r + 2] += i * p * f, e[3 * a] -= l * p * h, e[3 * a + 1] -= l * p * c, e[3 * a + 2] -= l * p * f;
			}
		}
		bend() {
			const t = this.mesh, e = t.p, n = t.w, o = this.gradient, s = this.options.bending;
			for (let r = 0; r < t.halfedgeCount; r++) {
				const a = t.opposite[r];
				if (a < 0 || a < r) continue;
				const i = t.corner[r], l = t.corner[next(r)], h = t.corner[prev(r)], c = t.corner[prev(a)], f = hingeAngle(e, i, l, h, c, o);
				if (!(Math.abs(f) > 1e-9)) continue;
				const u = (t.thickness[i] + t.thickness[l]) / .02, p = Math.min(1, s * u * u * u), g = [
					i,
					l,
					h,
					c
				];
				let m = 0;
				for (let t = 0; t < 4; t++) m += n[g[t]] * (o[3 * t] * o[3 * t] + o[3 * t + 1] * o[3 * t + 1] + o[3 * t + 2] * o[3 * t + 2]);
				if (m < 1e-12) continue;
				const d = -p * f / m;
				for (let t = 0; t < 4; t++) {
					const s = g[t], r = n[s] * d;
					e[3 * s] += r * o[3 * t], e[3 * s + 1] += r * o[3 * t + 1], e[3 * s + 2] += r * o[3 * t + 2];
				}
			}
		}
		spacing(t) {
			const e = Math.min(1, this.mesh.margin[t] / 1), n = e * e * (3 - 2 * e);
			return this.level.rim + (this.level.inside - this.level.rim) * n;
		}
		repel() {
			const t = this.mesh, e = t.vertexCount, n = t.p, o = t.w, s = .2;
			let r = 1;
			for (; r < 2 * e;) r <<= 1;
			const a = new Int32Array(r + 1), i = new Int32Array(e), l = r - 1, hash = (t, e, n) => (Math.imul(t, 73856093) ^ Math.imul(e, 19349663) ^ Math.imul(n, 83492791)) >>> 0 & l;
			this.radius.length < e && (this.radius = new Float64Array(t.vertexCapacity));
			const h = this.radius;
			for (let m = 0; m < e; m++) {
				h[m] = .8 * this.spacing(m);
				const t = hash(Math.floor(n[3 * m] / s), Math.floor(n[3 * m + 1] / s), Math.floor(n[3 * m + 2] / s));
				i[m] = t, a[t + 1]++;
			}
			for (let m = 0; m < r; m++) a[m + 1] += a[m];
			const c = a.slice(0, r), f = new Int32Array(e);
			for (let m = 0; m < e; m++) f[c[i[m]]++] = m;
			this.correction.length < 3 * e && (this.correction = new Float64Array(3 * t.vertexCapacity), this.corrections = new Float64Array(t.vertexCapacity));
			const u = this.correction, p = this.corrections;
			u.fill(0, 0, 3 * e), p.fill(0, 0, e);
			const g = t.frond;
			for (let m = 0; m < e; m++) {
				const t = n[3 * m], e = n[3 * m + 1], o = n[3 * m + 2], r = h[m], i = Math.ceil(r / s), l = Math.floor(t / s), c = Math.floor(e / s), d = Math.floor(o / s);
				for (let s = -i; s <= i; s++) for (let M = -i; M <= i; M++) for (let y = -i; y <= i; y++) {
					const i = hash(l + y, c + M, d + s);
					for (let s = a[i]; s < a[i + 1]; s++) {
						const a = f[s], i = h[a];
						if (i > r || i === r && a <= m) continue;
						const l = .5 * (r + i), c = n[3 * a] - t, d = n[3 * a + 1] - e, M = n[3 * a + 2] - o, y = c * c + d * d + M * M;
						if (y >= l * l || y < 1e-16) continue;
						if (g[m] === g[a] && this.restLengthSquared(m, a) < 6.25 * l * l) continue;
						const x = Math.sqrt(y), w = (l - x) / x * .5;
						u[3 * m] -= c * w, u[3 * m + 1] -= d * w, u[3 * m + 2] -= M * w, u[3 * a] += c * w, u[3 * a + 1] += d * w, u[3 * a + 2] += M * w, p[m]++, p[a]++;
					}
				}
			}
			for (let m = 0; m < e; m++) {
				if (!p[m] || 0 === o[m]) continue;
				const t = 1 / Math.sqrt(p[m]);
				n[3 * m] += u[3 * m] * t, n[3 * m + 1] += u[3 * m + 1] * t, n[3 * m + 2] += u[3 * m + 2] * t;
			}
		}
		triangles() {
			const t = this.mesh;
			return Uint32Array.from(t.corner.subarray(0, t.halfedgeCount));
		}
		result(t, e, n) {
			const o = this.mesh, s = o.vertexCount, toFloat = (t, e) => Float32Array.from(t.subarray(0, s * e)), r = new Float32Array(2 * s);
			for (let a = 0; a < s; a++) r[2 * a] = o.x[a], r[2 * a + 1] = o.y[a];
			return {
				count: s,
				simCount: t,
				positions: toFloat(o.p, 3),
				material: r,
				plant: o.plant.slice(0, s),
				frond: o.frond.slice(0, s),
				flags: o.flags.slice(0, s),
				age: toFloat(o.age, 1),
				margin: toFloat(o.margin, 1),
				thickness: toFloat(o.thickness, 1),
				excess: toFloat(o.excess, 1),
				triangles: this.triangles(),
				simTriangles: e,
				milliseconds: n,
				timings: this.timings
			};
		}
	};
	self.addEventListener("message", (n) => {
		const { id: o, seed: s, plants: r, plant: a, options: i } = n.data;
		try {
			const n = function buildKelpPattern(n, o = e) {
				const s = [];
				let r = 0, a = 0;
				const i = [];
				for (let l = 0; l < Math.min(o, e); l++) {
					const e = t[l], o = createRandom(Math.imul(n + 1, 625341585) ^ Math.imul(l + 1, 2654435769)), h = o.int(e.fronds[0], e.fronds[1]), c = [];
					let f = 0;
					for (let t = 0; t < h; t++) {
						const n = growSkeleton(o, e);
						let s = 0;
						for (const t of n) s = Math.max(s, t.s0 + t.len);
						const u = {
							plant: l,
							index: t,
							segments: n,
							maxPath: s,
							lobeAmplitude: o.range(.15, .3) * e.lobe * e.scale,
							lobeScale: o.range(2, 3.5) * e.scale,
							noiseSeed: Math.floor(2147483647 * o.next()),
							...placeFrond(e.holdfast, 0, 0, 0),
							mesh: {
								count: 0,
								material: /* @__PURE__ */ new Float64Array(0),
								triangles: /* @__PURE__ */ new Uint32Array(0),
								rim: /* @__PURE__ */ new Uint8Array(0),
								base: /* @__PURE__ */ new Uint8Array(0)
							},
							rimIndex: buildRimIndex(/* @__PURE__ */ new Float64Array(4))
						};
						u.mesh = buildSeedMesh(u), u.rimIndex = buildRimIndex(rimSegments(u.mesh));
						const p = e.facing + t * Math.PI * 2 / h;
						let g = null, m = 1 / 0;
						for (let t = 0; t < 16 && m > 0; t++) {
							const n = .35 + .08 * t, s = placeFrond(e.holdfast, p + o.range(-n, n), o.range(.2, .6), o.range(-.5, .5));
							Object.assign(u, s);
							const r = placementViolations(u, [...i, ...c]);
							r < m && (m = r, g = s);
						}
						if (Object.assign(u, g), !(m >= 1e3)) {
							if (f += u.mesh.count, f > e.budget && c.length >= 2) break;
							r += u.mesh.count, a += u.mesh.triangles.length / 3, c.push(u);
						}
					}
					i.push(...c), s.push({
						index: l,
						species: e.species,
						holdfast: e.holdfast,
						scale: e.scale,
						fronds: c
					});
				}
				return {
					seed: n,
					plants: s,
					vertexCount: r,
					triangleCount: a
				};
			}(s, r), l = function growKelp(t, e = {}) {
				return new c(t, e).run();
			}({
				...n,
				plants: [n.plants[a]]
			}, i), h = [
				l.positions,
				l.material,
				l.plant,
				l.frond,
				l.flags,
				l.age,
				l.margin,
				l.thickness,
				l.excess,
				l.triangles,
				l.simTriangles
			].map((t) => t.buffer);
			self.postMessage({
				id: o,
				grown: l
			}, { transfer: h });
		} catch (l) {
			self.postMessage({
				id: o,
				error: String(l)
			});
		}
	});
})();
