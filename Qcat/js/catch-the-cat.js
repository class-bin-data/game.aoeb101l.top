!
function(t) {
	var e = {};

	function n(o) {
		if (e[o]) return e[o].exports;
		var r = e[o] = {
			i: o,
			l: !1,
			exports: {}
		};
		return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
	}
	n.m = t, n.c = e, n.d = function(t, e, o) {
		n.o(t, e) || Object.defineProperty(t, e, {
			enumerable: !0,
			get: o
		})
	}, n.r = function(t) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(t, "__esModule", {
			value: !0
		})
	}, n.t = function(t, e) {
		if (1 & e && (t = n(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var o = Object.create(null);
		if (n.r(o), Object.defineProperty(o, "default", {
			enumerable: !0,
			value: t
		}), 2 & e && "string" != typeof t) for (var r in t) n.d(o, r, function(e) {
			return t[e]
		}.bind(null, r));
		return o
	}, n.n = function(t) {
		var e = t && t.__esModule ?
		function() {
			return t.
		default
		} : function() {
			return t
		};
		return n.d(e, "a", e), e
	}, n.o = function(t, e) {
		return Object.prototype.hasOwnProperty.call(t, e)
	}, n.p = "", n(n.s = 3)
}([function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i, s = n(1),
		a = n(20),
		l = n(22),
		d = n(23),
		h = n(24),
		u = n(25),
		f = n(2),
		p = n(26),
		c = n(27);
	!
	function(t) {
		t.PLAYING = "playing", t.WIN = "win", t.LOSE = "lose"
	}(i || (i = {}));
	var k = function(t) {
			function e(e, n, o) {
				var r = t.call(this, {
					key: "MainScene"
				}) || this;
				return r.w = e, r.h = n, r.r = o, r.dx = 2 * r.r, r.dy = r.r * Math.sqrt(3), r
			}
			return r(e, t), Object.defineProperty(e.prototype, "blocks", {
				get: function() {
					return this.data.get("blocks")
				},
				set: function(t) {
					this.data.set("blocks", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "blocksData", {
				get: function() {
					var t = [];
					return this.blocks.forEach(function(e, n) {
						t[n] = [], e.forEach(function(e, o) {
							t[n][o] = e.isWall
						})
					}), t
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "cat", {
				get: function() {
					return this.data.get("cat")
				},
				set: function(t) {
					this.data.set("cat", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "statusBar", {
				get: function() {
					return this.data.get("status_bar")
				},
				set: function(t) {
					this.data.set("status_bar", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "creditText", {
				get: function() {
					return this.data.get("credit_text")
				},
				set: function(t) {
					this.data.set("credit_text", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "state", {
				get: function() {
					return this.data.get("state")
				},
				set: function(t) {
					switch (t) {
					case i.PLAYING:
						break;
					case i.LOSE:
						this.setStatusText(f.
                    default ("猫已经跑到地图边缘了，你输了"));
						break;
					case i.WIN:
						this.setStatusText(f.
					default ("猫已经无路可走，你赢了"));
						break;
					default:
						return
					}
					this.data.set("state", t)
				},
				enumerable: !0,
				configurable: !0
			}), e.getNeighbours = function(t, e) {
				var n, o, r, i, s = {
					i: t - 1,
					j: e
				},
					a = {
						i: t + 1,
						j: e
					};
				0 == (1 & e) ? (n = {
					i: t - 1,
					j: e - 1
				}, o = {
					i: t,
					j: e - 1
				}, r = {
					i: t - 1,
					j: e + 1
				}, i = {
					i: t,
					j: e + 1
				}) : (n = {
					i: t,
					j: e - 1
				}, o = {
					i: t + 1,
					j: e - 1
				}, r = {
					i: t,
					j: e + 1
				}, i = {
					i: t + 1,
					j: e + 1
				});
				var l = [];
				return l[0] = s, l[1] = n, l[2] = o, l[3] = a, l[4] = i, l[5] = r, l
			}, e.prototype.preload = function() {
				var t = this.r / s.
			default.catStepLength;
				for (var e in s.
			default.textures) this.load.addFile(new c.
			default (this.load, e, s.
			default.textures[e], {
					scale: t
				}))
			}, e.prototype.create = function() {
				this.createAnimations(), this.createBlocks(), this.createCat(), this.createStatusText(), this.createResetButton(), this.createCreditText(), this.reset(), this.game.solver && (this.cat.solver = this.game.solver)
			}, e.prototype.getPosition = function(t, e) {
				return {
					x: 3 * this.r + (0 == (1 & e) ? this.r : this.dx) + t * this.dx,
					y: 3 * this.r + this.r + e * this.dy
				}
			}, e.prototype.getBlock = function(t, e) {
				return t >= 0 && t < this.w && e >= 0 && e < this.h ? this.blocks[t][e] : null
			}, e.prototype.playerClick = function(t, e) {
				if (this.cat.anims.isPlaying && this.cat.anims.stop(), this.state !== i.PLAYING) return this.setStatusText(f.
			default ("游戏已经结束，重新开局")), document.getElementById("time").innerHTML = 0,this.reset(), !1;
				var n = this.getBlock(t, e);
				return n ? n.isWall ? (this.setStatusText(f.
			default ("点击位置已经是墙了，禁止点击")), !1) : this.cat.i === t && this.cat.j === e ? (this.setStatusText(f.
			default ("点击位置是猫当前位置，禁止点击")), !1) : (n.isWall = !0, this.cat.isCaught() ? (this.setStatusText(f.
			default ("猫已经无路可走，你赢了")), this.state = i.WIN, !1) : (this.setStatusText(f.
			default ("您点击了 ") + "(" + t + ", " + e + ")"), this.cat.step() || (this.setStatusText(f.
			default ("猫认输，你赢了！")), this.state = i.WIN), !0)) : (this.setStatusText(f.
			default ("代码错误，当前位置不存在")), !1)
			}, e.prototype.reset = function() {
				time = 0;
				this.cat.reset(), this.resetBlocks(), this.randomWall(), this.state = i.PLAYING, this.setStatusText(f.
			default ("点击小圆点，围住小猫"))
			}, e.prototype.setStatusText = function(t) {
				this.statusBar.setText(t)
			}, e.prototype.createAnimations = function() {
				var t = this;
				s.
			default.animations.forEach(function(e) {
					var n = [];
					e.textures.forEach(function(t) {
						n.push({
							key: t,
							frame: 0
						})
					}), t.anims.create({
						key: e.name,
						frames: n,
						frameRate: s.
					default.frameRate,
						repeat:
						e.repeat
					})
				})
			}, e.prototype.createBlocks = function() {
				for (var t = [], e = 0; e < this.w; e++) {
					t[e] = [];
					for (var n = 0; n < this.h; n++) {
						var o = new l.
					default (this, e, n, .9 * this.r);
						t[e][n] = o, this.add.existing(o), o.on("player_click", this.playerClick.bind(this))
					}
				}
				this.blocks = t
			}, e.prototype.createCat = function() {
				var t = this,
					e = new a.
				default (this);
				e.on("escaped", function() {
					t.state = i.LOSE
				}), e.on("win", function() {
					t.state = i.WIN
				}), e.solver = p.
			default, this.cat = e, this.add.existing(e)
			}, e.prototype.createStatusText = function() {
				var t = new h.
			default (this);
				this.statusBar = t, this.add.existing(t)
			}, e.prototype.createResetButton = function() {
				var t = this,
					e = new d.
				default (this);
				this.add.existing(e), e.on("pointerup", function() {
					time = 0;
					t.reset()
				})
			}, e.prototype.createCreditText = function() {
				var t = new u.
			default (this);
				this.creditText = t, this.add.existing(t)
			}, e.prototype.resetBlocks = function() {
				this.blocks.forEach(function(t) {
					t.forEach(function(t) {
						t.isWall = !1
					})
				})
			}, e.prototype.randomWall = function() {
				for (var t = 0; t < 8; t++) {
					var e = Math.floor(this.w * Math.random()),
						n = Math.floor(this.h * Math.random());
					e === this.cat.i && n === this.cat.j || (this.getBlock(e, n).isWall = !0)
				}
			}, e
		}(Phaser.Scene);
	e.
default = k
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(5),
		r = n(6),
		i = n(7),
		s = n(8),
		a = n(9),
		l = n(10),
		d = n(11),
		h = n(12),
		u = n(13),
		f = n(14),
		p = n(15),
		c = n(16),
		k = n(17),
		g = n(18),
		w = n(19);
	e.
default = {
		textures: {
			bottom_left_1: o,
			bottom_left_2: r,
			bottom_left_3: i,
			bottom_left_4: s,
			bottom_left_5: a,
			left_1: l,
			left_2: d,
			left_3: h,
			left_4: u,
			left_5: f,
			top_left_1: p,
			top_left_2: c,
			top_left_3: k,
			top_left_4: g,
			top_left_5: w
		},
		animations: [{
			name: "left_step",
			textures: ["left_1", "left_2", "left_3", "left_4", "left_5"],
			repeat: 0
		}, {
			name: "top_left_step",
			textures: ["top_left_1", "top_left_2", "top_left_3", "top_left_4", "top_left_5"],
			repeat: 0
		}, {
			name: "bottom_left_step",
			textures: ["bottom_left_1", "bottom_left_2", "bottom_left_3", "bottom_left_4", "bottom_left_5"],
			repeat: 0
		}, {
			name: "left_run",
			textures: ["left_2", "left_3", "left_4", "left_5"],
			repeat: 3
		}, {
			name: "top_left_run",
			textures: ["top_left_2", "top_left_3", "top_left_4", "top_left_5"],
			repeat: 3
		}, {
			name: "bottom_left_run",
			textures: ["bottom_left_2", "bottom_left_3", "bottom_left_4", "bottom_left_5"],
			repeat: 3
		}],
		origins: {
			left: {
				x: .75,
				y: .75
			},
			top_left: {
				x: .63,
				y: .83
			},
			bottom_left: {
				x: .65,
				y: .5
			}
		},
		stopTextures: {
			left: "left_1",
			top_left: "top_left_1",
			bottom_left: "bottom_left_1"
		},
		cannotEscapeTextures: {
			left: "left_2",
			top_left: "top_left_2",
			bottom_left: "bottom_left_2"
		},
		directions: [{
			scaleX: 1,
			name: "left"
		}, {
			scaleX: 1,
			name: "top_left"
		}, {
			scaleX: -1,
			name: "top_left"
		}, {
			scaleX: -1,
			name: "left"
		}, {
			scaleX: -1,
			name: "bottom_left"
		}, {
			scaleX: 1,
			name: "bottom_left"
		}],
		catDefaultDirection: 5,
		catStepLength: 20,
		frameRate: 15,
		translations: {}
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(1);
	e.
default = function(t) {
		var e = o.
	default.translations[t];
		return void 0 === e ? t:
		e
	}
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(4);
	window.CatchTheCatGame = o.
default
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(0),
		s = function(t) {
			function e(e) {
				var n = this;
				e.credit || (e.credit = "github.com/ganlvtech"), e.backgroundColor || (e.backgroundColor = 15658734);
				var o = e.w,
					r = e.h,
					s = e.r * window.devicePixelRatio,
					a = 1 / window.devicePixelRatio,
					l = Math.floor((6.5 + 2 * o) * s),
					d = Math.floor((6 + Math.sqrt(3) * r) * s),
					h = new i.
				default (o, r, s),
					u = {
						width: l,
						height: d,
						type: Phaser.AUTO,
						parent: e.parent,
						backgroundColor: e.backgroundColor,
						scene: h,
						zoom: a
					};
				return (n = t.call(this, u) || this).myConfig = e, n.mainScene = h, n
			}
			return r(e, t), Object.defineProperty(e.prototype, "solver", {
				get: function() {
					return this._solver
				},
				set: function(t) {
					this._solver = t;
					try {
						this.mainScene.cat.solver = t
					} finally {}
				},
				enumerable: !0,
				configurable: !0
			}), e
		}(Phaser.Game);

	e.
default = s
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="70.15px" width="49.75px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 32.75, 36.25)">\n    <use height="41.55" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.35, -33.05)" width="29.35" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -35.9)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 12.35, 33.05)">\n      <path d="M11.4 -6.8 Q12.65 -7.45 13.55 -9.3 14.5 -11.1 14.5 -12.8 14.5 -16.3 11.9 -20.5 9.25 -24.75 9.25 -26.35 L9.35 -28.5 Q9.65 -29.65 10.9 -30.55" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M10.3 -5.9 Q10.3 -2.6 8.05 -0.25 5.8 2.1 2.6 2.1 -0.6 2.1 -2.85 -0.25 -5.1 -2.6 -5.1 -5.9 -5.1 -9.2 -2.85 -11.55 -0.6 -13.9 2.6 -13.9 5.8 -13.9 8.05 -11.55 10.3 -9.2 10.3 -5.9" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M10.3 -5.9 Q10.3 -2.6 8.05 -0.25 5.8 2.1 2.6 2.1 -0.6 2.1 -2.85 -0.25 -5.1 -2.6 -5.1 -5.9 -5.1 -9.2 -2.85 -11.55 -0.6 -13.9 2.6 -13.9 5.8 -13.9 8.05 -11.55 10.3 -9.2 10.3 -5.9 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M3.4 -13.3 Q3.4 -10.65 1.6 -8.8 -0.25 -6.9 -2.85 -6.9 -5.4 -6.9 -7.25 -8.8 -9.1 -10.65 -9.1 -13.3 -9.1 -15.95 -7.25 -17.85 -5.4 -19.7 -2.85 -19.7 -0.25 -19.7 1.6 -17.85 3.4 -15.95 3.4 -13.3" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M3.4 -13.3 Q3.4 -10.65 1.6 -8.8 -0.25 -6.9 -2.85 -6.9 -5.4 -6.9 -7.25 -8.8 -9.1 -10.65 -9.1 -13.3 -9.1 -15.95 -7.25 -17.85 -5.4 -19.7 -2.85 -19.7 -0.25 -19.7 1.6 -17.85 3.4 -15.95 3.4 -13.3 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M4.95 2.6 L9.6 -0.8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-9.0 -12.7 L-6.85 -3.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-6.85 -3.5 L-8.6 4.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-8.6 4.75 L-9.85 4.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-0.5 -11.05 L1.25 -2.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M1.25 -2.25 L-1.25 5.85" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-1.15 5.6 L-3.45 6.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="70.15px" width="49.75px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 32.75, 36.25)">\n    <use height="44.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.15, -36.25)" width="30.15" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -23.55, -24.35)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.15, 36.25)">\n      <path d="M11.4 -11.2 Q12.65 -11.8 13.55 -13.6 14.5 -15.3 14.5 -16.9 14.5 -20.2 11.9 -24.2 9.25 -28.25 9.25 -29.75 L9.35 -31.8 Q9.65 -32.9 10.9 -33.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M8.7 -6.95 Q6.45 -4.6 3.25 -4.6 0.05 -4.6 -2.2 -6.95 -4.45 -9.3 -4.45 -12.6 -4.45 -15.9 -2.2 -18.25 0.05 -20.6 3.25 -20.6 6.45 -20.6 8.7 -18.25 10.95 -15.9 10.95 -12.6 10.95 -9.3 8.7 -6.95" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M8.7 -6.95 Q6.45 -4.6 3.25 -4.6 0.05 -4.6 -2.2 -6.95 -4.45 -9.3 -4.45 -12.6 -4.45 -15.9 -2.2 -18.25 0.05 -20.6 3.25 -20.6 6.45 -20.6 8.7 -18.25 10.95 -15.9 10.95 -12.6 10.95 -9.3 8.7 -6.95 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M-0.45 -8.35 Q-2.3 -6.45 -4.9 -6.45 -7.45 -6.45 -9.3 -8.35 -11.15 -10.2 -11.15 -12.85 -11.15 -15.5 -9.3 -17.4 -7.45 -19.25 -4.9 -19.25 -2.3 -19.25 -0.45 -17.4 1.35 -15.5 1.35 -12.85 1.35 -10.2 -0.45 -8.35" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-0.45 -8.35 Q-2.3 -6.45 -4.9 -6.45 -7.45 -6.45 -9.3 -8.35 -11.15 -10.2 -11.15 -12.85 -11.15 -15.5 -9.3 -17.4 -7.45 -19.25 -4.9 -19.25 -2.3 -19.25 -0.45 -17.4 1.35 -15.5 1.35 -12.85 1.35 -10.2 -0.45 -8.35 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M7.8 0.4 L10.1 -4.9" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-9.0 -12.7 L-6.85 -3.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-6.85 -3.5 L-8.6 4.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-8.6 4.75 L-9.85 4.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-0.5 -11.05 L1.25 -2.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M1.25 -2.25 L-1.25 5.85" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-1.15 5.6 L-3.45 6.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="70.15px" width="49.75px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 32.75, 36.25)">\n    <use height="61.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -19.15, -36.25)" width="34.65" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -23.95, -10.45)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 19.15, 36.25)">\n      <path d="M13.0 -33.75 Q10.3 -33.75 9.7 -30.65 9.5 -29.75 9.5 -24.75 9.5 -21.55 7.25 -20.35 4.25 -18.75 3.5 -17.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M4.95 -4.95 Q2.7 -2.6 -0.5 -2.6 -3.7 -2.6 -5.95 -4.95 -8.2 -7.3 -8.2 -10.6 -8.2 -13.9 -5.95 -16.25 -3.7 -18.6 -0.5 -18.6 2.7 -18.6 4.95 -16.25 7.2 -13.9 7.2 -10.6 7.2 -7.3 4.95 -4.95" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M4.95 -4.95 Q2.7 -2.6 -0.5 -2.6 -3.7 -2.6 -5.95 -4.95 -8.2 -7.3 -8.2 -10.6 -8.2 -13.9 -5.95 -16.25 -3.7 -18.6 -0.5 -18.6 2.7 -18.6 4.95 -16.25 7.2 -13.9 7.2 -10.6 7.2 -7.3 4.95 -4.95 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M-6.45 0.15 Q-8.3 2.05 -10.9 2.05 -13.45 2.05 -15.3 0.15 -17.15 -1.7 -17.15 -4.35 -17.15 -7.0 -15.3 -8.9 -13.45 -10.75 -10.9 -10.75 -8.3 -10.75 -6.45 -8.9 -4.65 -7.0 -4.65 -4.35 -4.65 -1.7 -6.45 0.15" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-6.45 0.15 Q-8.3 2.05 -10.9 2.05 -13.45 2.05 -15.3 0.15 -17.15 -1.7 -17.15 -4.35 -17.15 -7.0 -15.3 -8.9 -13.45 -10.75 -10.9 -10.75 -8.3 -10.75 -6.45 -8.9 -4.65 -7.0 -4.65 -4.35 -4.65 -1.7 -6.45 0.15 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M8.2 0.6 L7.55 -5.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-15.75 8.25 L-16.0 16.1 -16.25 23.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-3.75 1.0 Q-3.75 4.9 -6.35 6.4 -9.9 8.45 -10.25 9.0 -12.0 11.95 -12.55 13.6 -13.6 16.65 -13.0 19.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="70.15px" width="49.75px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 32.75, 36.25)">\n    <use height="59.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -27.0, -28.25)" width="36.75" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -29.5, 4.05)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 27.0, 28.25)">\n      <path d="M-5.5 -13.0 Q-5.85 -15.55 -2.55 -16.1 1.1 -16.7 1.25 -19.25 1.35 -21.4 2.6 -23.25 4.3 -25.8 7.25 -25.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-2.55 0.65 Q-4.8 3.0 -8.0 3.0 -11.2 3.0 -13.45 0.65 -15.7 -1.7 -15.7 -5.0 -15.7 -8.3 -13.45 -10.65 -11.2 -13.0 -8.0 -13.0 -4.8 -13.0 -2.55 -10.65 -0.3 -8.3 -0.3 -5.0 -0.3 -1.7 -2.55 0.65" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-2.55 0.65 Q-4.8 3.0 -8.0 3.0 -11.2 3.0 -13.45 0.65 -15.7 -1.7 -15.7 -5.0 -15.7 -8.3 -13.45 -10.65 -11.2 -13.0 -8.0 -13.0 -4.8 -13.0 -2.55 -10.65 -0.3 -8.3 -0.3 -5.0 -0.3 -1.7 -2.55 0.65 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M-10.6 8.3 Q-12.45 10.2 -15.05 10.2 -17.6 10.2 -19.45 8.3 -21.3 6.45 -21.3 3.8 -21.3 1.15 -19.45 -0.75 -17.6 -2.6 -15.05 -2.6 -12.45 -2.6 -10.6 -0.75 -8.8 1.15 -8.8 3.8 -8.8 6.45 -10.6 8.3" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-10.6 8.3 Q-12.45 10.2 -15.05 10.2 -17.6 10.2 -19.45 8.3 -21.3 6.45 -21.3 3.8 -21.3 1.15 -19.45 -0.75 -17.6 -2.6 -15.05 -2.6 -12.45 -2.6 -10.6 -0.75 -8.8 1.15 -8.8 3.8 -8.8 6.45 -10.6 8.3 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M-1.25 -3.0 Q-0.5 -3.15 1.6 -4.55 L4.25 -6.25 4.25 1.25 Q4.0 1.25 4.0 1.75 L3.75 1.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-11.5 11.25 Q-10.0 10.4 -9.5 10.5 L-9.5 13.75 -12.0 21.75 Q-12.3 22.65 -13.2 23.3 L-14.75 24.5 -16.0 26.3 Q-16.65 27.0 -17.7 26.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-24.5 29.0 L-22.75 29.0 Q-19.65 23.1 -20.25 13.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="70.15px" width="49.75px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 32.75, 36.25)">\n    <use height="54.15" transform="matrix(1.0, 0.0, 0.0, 1.0, -28.6, -20.25)" width="33.1" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -32.75, 6.05)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 28.6, 20.25)">\n      <path d="M-9.0 -2.0 Q-7.2 -3.0 -5.75 -5.25 L-3.25 -10.0 -0.15 -13.55 Q1.85 -15.6 2.0 -17.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-7.55 11.45 Q-9.8 13.8 -13.0 13.8 -16.2 13.8 -18.45 11.45 -20.7 9.1 -20.7 5.8 -20.7 2.5 -18.45 0.15 -16.2 -2.2 -13.0 -2.2 -9.8 -2.2 -7.55 0.15 -5.3 2.5 -5.3 5.8 -5.3 9.1 -7.55 11.45" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-7.55 11.45 Q-9.8 13.8 -13.0 13.8 -16.2 13.8 -18.45 11.45 -20.7 9.1 -20.7 5.8 -20.7 2.5 -18.45 0.15 -16.2 -2.2 -13.0 -2.2 -9.8 -2.2 -7.55 0.15 -5.3 2.5 -5.3 5.8 -5.3 9.1 -7.55 11.45 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M-15.6 4.75 Q-13.8 6.65 -13.8 9.3 -13.8 11.95 -15.6 13.8 -17.45 15.7 -20.05 15.7 -22.6 15.7 -24.45 13.8 -26.3 11.95 -26.3 9.3 -26.3 6.65 -24.45 4.75 -22.6 2.9 -20.05 2.9 -17.45 2.9 -15.6 4.75" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-15.6 4.75 Q-13.8 6.65 -13.8 9.3 -13.8 11.95 -15.6 13.8 -17.45 15.7 -20.05 15.7 -22.6 15.7 -24.45 13.8 -26.3 11.95 -26.3 9.3 -26.3 6.65 -24.45 4.75 -22.6 2.9 -20.05 2.9 -17.45 2.9 -15.6 4.75 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4.0"/>\n      <path d="M-5.0 6.5 L-5.0 6.75 -7.75 9.7 Q-9.6 12.0 -10.0 13.25 L-10.0 16.0 -9.0 16.0 Q-8.75 15.25 -7.25 13.75 L-7.25 14.1 -9.05 18.05 Q-10.15 20.5 -10.75 23.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-15.25 11.25 L-15.25 11.5 -15.0 18.75 Q-15.0 21.95 -16.6 26.15 -18.35 30.8 -20.25 30.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-26.1 31.4 Q-24.95 30.5 -24.75 27.3 L-24.75 22.0 -23.2 16.85 Q-22.25 13.35 -22.5 11.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="40.05px" width="76.4px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 53.65, 32.95)">\n    <use height="36.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -12.3, -30.05)" width="33.3" xlink:href="#shape0"/>\n    <use height="16.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -17.5, -32.95)" width="16.3" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 12.3, 30.05)">\n      <path d="M15.4 -3.8 Q16.65 -4.45 17.55 -6.3 18.5 -8.1 18.5 -9.8 18.5 -13.3 15.9 -17.5 13.25 -21.75 13.25 -23.35 L13.35 -25.5 Q13.65 -26.65 14.9 -27.55" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M12.5 -5.9 Q12.5 -2.6 10.25 -0.25 8.0 2.1 4.8 2.1 1.6 2.1 -0.65 -0.25 -2.9 -2.6 -2.9 -5.9 -2.9 -9.2 -0.65 -11.55 1.6 -13.9 4.8 -13.9 8.0 -13.9 10.25 -11.55 12.5 -9.2 12.5 -5.9" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M12.5 -5.9 Q12.5 -2.6 10.25 -0.25 8.0 2.1 4.8 2.1 1.6 2.1 -0.65 -0.25 -2.9 -2.6 -2.9 -5.9 -2.9 -9.2 -0.65 -11.55 1.6 -13.9 4.8 -13.9 8.0 -13.9 10.25 -11.55 12.5 -9.2 12.5 -5.9 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-4.3 -13.5 Q-6.45 -14.45 -7.9 -16.4 -9.35 -18.35 -9.3 -20.2 -9.4 -22.0 -7.9 -22.6 -6.35 -23.2 -4.25 -22.25 -2.2 -21.3 -0.7 -19.35 0.75 -17.4 0.75 -15.55 0.7 -13.8 -0.85 -13.2 -2.3 -12.6 -4.3 -13.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-4.3 -13.5 Q-6.45 -14.45 -7.9 -16.4 -9.35 -18.35 -9.3 -20.2 -9.4 -22.0 -7.9 -22.6 -6.35 -23.2 -4.25 -22.25 -2.2 -21.3 -0.7 -19.35 0.75 -17.4 0.75 -15.55 0.7 -13.8 -0.85 -13.2 -2.3 -12.6 -4.3 -13.5 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-0.65 4.25 L3.95 3.45 8.65 3.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M0.0 -17.35 L1.1 -17.35 Q1.65 -16.4 2.8 -16.05 4.0 -15.7 4.65 -14.8 5.45 -13.75 5.75 -12.55 L6.05 -10.05" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-9.8 -18.65 Q-8.5 -18.5 -7.75 -16.8 -7.05 -15.2 -6.0 -15.25 L-5.3 -9.95 Q-4.6 -5.75 -4.6 -3.7 -4.6 -0.5 -5.15 1.05 -5.95 3.3 -8.0 3.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.5, 40.55)">\n      <path d="M1.05 -33.65 Q4.2 -30.55 1.65 -26.85 L0.5 -25.5 Q-0.2 -25.0 -1.5 -24.85 L-4.2 -24.15 -6.5 -24.25 Q-8.6 -23.9 -10.55 -24.95 -13.2 -26.65 -13.5 -29.85 L-12.05 -31.1 Q-11.95 -33.7 -10.2 -35.5 -9.15 -36.75 -7.75 -37.15 L-7.35 -40.55 Q-0.9 -35.6 1.05 -33.65" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="40.05px" width="76.4px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 53.65, 32.95)">\n    <use height="38.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -11.0, -32.15)" width="33.75" xlink:href="#shape0"/>\n    <use height="16.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -20.9, -23.95)" width="16.3" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.0, 32.15)">\n      <path d="M15.65 -12.65 Q18.0 -12.65 18.75 -13.7 19.25 -14.45 19.25 -16.55 19.25 -18.8 18.15 -20.3 17.05 -21.85 17.05 -22.95 17.05 -24.2 18.65 -27.0 L20.25 -29.65" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M16.0 -11.0 Q16.0 -8.25 13.5 -6.3 11.0 -4.3 7.45 -4.3 3.9 -4.3 1.45 -6.3 -1.05 -8.25 -1.05 -11.0 -1.05 -13.8 1.45 -15.75 3.9 -17.7 7.45 -17.7 11.0 -17.7 13.5 -15.75 16.0 -13.8 16.0 -11.0" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M16.0 -11.0 Q16.0 -8.25 13.5 -6.3 11.0 -4.3 7.45 -4.3 3.9 -4.3 1.45 -6.3 -1.05 -8.25 -1.05 -11.0 -1.05 -13.8 1.45 -15.75 3.9 -17.7 7.45 -17.7 11.0 -17.7 13.5 -15.75 16.0 -13.8 16.0 -11.0 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-3.5 -8.3 Q-5.65 -9.25 -7.1 -11.2 -8.55 -13.15 -8.5 -15.0 -8.6 -16.8 -7.1 -17.4 -5.55 -18.0 -3.45 -17.05 -1.4 -16.1 0.1 -14.15 1.55 -12.2 1.55 -10.35 1.5 -8.6 -0.05 -8.0 -1.5 -7.4 -3.5 -8.3" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-3.5 -8.3 Q-5.65 -9.25 -7.1 -11.2 -8.55 -13.15 -8.5 -15.0 -8.6 -16.8 -7.1 -17.4 -5.55 -18.0 -3.45 -17.05 -1.4 -16.1 0.1 -14.15 1.55 -12.2 1.55 -10.35 1.5 -8.6 -0.05 -8.0 -1.5 -7.4 -3.5 -8.3 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M0.0 -17.35 L1.1 -17.35 Q1.65 -16.4 2.8 -16.05 4.0 -15.7 4.65 -14.8 5.45 -13.75 5.75 -12.55 L6.05 -10.05" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M3.8 4.0 L8.0 4.0 Q8.8 1.7 10.45 -0.1 12.3 -2.1 14.45 -2.65 L10.65 -7.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-7.8 3.6 Q-6.05 3.6 -2.9 0.15 0.0 -3.0 0.0 -3.85 0.0 -4.8 -3.55 -8.85 L-7.4 -13.05" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.5, 40.55)">\n      <path d="M1.05 -33.65 Q4.2 -30.55 1.65 -26.85 L0.5 -25.5 Q-0.2 -25.0 -1.5 -24.85 L-4.2 -24.15 -6.5 -24.25 Q-8.6 -23.9 -10.55 -24.95 -13.2 -26.65 -13.5 -29.85 L-12.05 -31.1 Q-11.95 -33.7 -10.2 -35.5 -9.15 -36.75 -7.75 -37.15 L-7.35 -40.55 Q-0.9 -35.6 1.05 -33.65" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="40.05px" width="76.4px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 53.65, 32.95)">\n    <use height="39.3" transform="matrix(1.0, 0.0, 0.0, 1.0, -37.75, -32.6)" width="54.1" xlink:href="#shape0"/>\n    <use height="16.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -39.75, -32.05)" width="16.3" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 37.75, 32.6)">\n      <path d="M2.4 -17.65 Q5.2 -17.3 5.35 -20.7 L5.65 -25.85 Q8.6 -31.15 13.85 -29.85" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M0.15 -15.95 Q0.15 -13.2 -2.35 -11.25 -4.85 -9.25 -8.4 -9.25 -11.95 -9.25 -14.4 -11.25 -16.9 -13.2 -16.9 -15.95 -16.9 -18.75 -14.4 -20.7 -11.95 -22.65 -8.4 -22.65 -4.85 -22.65 -2.35 -20.7 0.15 -18.75 0.15 -15.95" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M0.15 -15.95 Q0.15 -13.2 -2.35 -11.25 -4.85 -9.25 -8.4 -9.25 -11.95 -9.25 -14.4 -11.25 -16.9 -13.2 -16.9 -15.95 -16.9 -18.75 -14.4 -20.7 -11.95 -22.65 -8.4 -22.65 -4.85 -22.65 -2.35 -20.7 0.15 -18.75 0.15 -15.95 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-16.85 -14.45 L-22.35 -14.85 Q-24.9 -15.75 -25.85 -17.4 -26.9 -19.0 -25.6 -20.5 -24.25 -22.05 -21.45 -22.5 L-16.0 -22.1 Q-13.4 -21.2 -12.45 -19.5 -11.55 -17.9 -12.95 -16.35 -14.2 -14.9 -16.85 -14.45" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-16.85 -14.45 L-22.35 -14.85 Q-24.9 -15.75 -25.85 -17.4 -26.9 -19.0 -25.6 -20.5 -24.25 -22.05 -21.45 -22.5 L-16.0 -22.1 Q-13.4 -21.2 -12.45 -19.5 -11.55 -17.9 -12.95 -16.35 -14.2 -14.9 -16.85 -14.45 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M1.0 -14.4 Q0.7 -12.05 -0.6 -9.15 L-3.05 -4.4 -2.05 -4.4 3.6 -6.0 5.4 -6.0 5.4 -1.0 Q4.8 0.7 4.6 4.2 L2.8 4.2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-6.05 -11.6 Q-5.65 -8.8 -5.65 -6.6 -4.95 -6.85 -4.6 -6.35 -4.35 -5.9 -4.4 -5.2 L-3.85 -5.0 -4.45 -5.0 -4.4 -5.2 -5.6 -6.05 Q-6.45 -6.9 -6.45 -7.7 L-6.25 -8.4" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-22.8 -16.45 L-22.15 -15.2 Q-21.95 -14.5 -21.6 -14.45 L-20.05 -14.0 Q-19.6 -13.75 -19.6 -13.15 -19.6 -11.9 -23.0 -11.9 L-26.85 -12.05 Q-28.8 -11.45 -29.55 -10.6 -30.5 -9.55 -30.25 -7.45" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-35.25 -5.45 Q-34.65 -8.8 -31.5 -11.8 -28.4 -14.75 -24.85 -15.45" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.5, 40.55)">\n      <path d="M1.05 -33.65 Q4.2 -30.55 1.65 -26.85 L0.5 -25.5 Q-0.2 -25.0 -1.5 -24.85 L-4.2 -24.15 -6.5 -24.25 Q-8.6 -23.9 -10.55 -24.95 -13.2 -26.65 -13.5 -29.85 L-12.05 -31.1 Q-11.95 -33.7 -10.2 -35.5 -9.15 -36.75 -7.75 -37.15 L-7.35 -40.55 Q-0.9 -35.6 1.05 -33.65" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="40.05px" width="76.4px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 53.65, 32.95)">\n    <use height="37.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -42.6, -31.75)" width="46.9" xlink:href="#shape0"/>\n    <use height="16.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -48.25, -23.45)" width="16.3" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 42.6, 31.75)">\n      <path d="M-14.2 -18.25 Q-11.15 -17.9 -9.2 -19.65 -8.0 -20.65 -6.3 -23.6 -4.6 -26.55 -3.4 -27.65 -1.35 -29.45 1.8 -29.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-10.6 -17.7 Q-9.9 -15.2 -11.8 -12.75 -13.75 -10.35 -17.2 -9.4 L-23.45 -9.6 Q-26.35 -10.75 -27.05 -13.25 -27.7 -15.8 -25.8 -18.2 -23.85 -20.65 -20.45 -21.55 L-14.15 -21.35 Q-11.25 -20.25 -10.6 -17.7" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-10.6 -17.7 Q-9.9 -15.2 -11.8 -12.75 -13.75 -10.35 -17.2 -9.4 L-23.45 -9.6 Q-26.35 -10.75 -27.05 -13.25 -27.7 -15.8 -25.8 -18.2 -23.85 -20.65 -20.45 -21.55 L-14.15 -21.35 Q-11.25 -20.25 -10.6 -17.7 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-32.8 -10.55 Q-35.35 -11.45 -36.3 -13.1 -37.35 -14.7 -36.05 -16.2 -34.7 -17.75 -31.9 -18.2 L-26.45 -17.8 Q-23.85 -16.9 -22.9 -15.2 -22.0 -13.6 -23.4 -12.05 -24.65 -10.6 -27.3 -10.15 -30.15 -9.65 -32.8 -10.55" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-32.8 -10.55 Q-35.35 -11.45 -36.3 -13.1 -37.35 -14.7 -36.05 -16.2 -34.7 -17.75 -31.9 -18.2 L-26.45 -17.8 Q-23.85 -16.9 -22.9 -15.2 -22.0 -13.6 -23.4 -12.05 -24.65 -10.6 -27.3 -10.15 -30.15 -9.65 -32.8 -10.55 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-7.1 -8.85 Q-9.2 -7.8 -11.75 -5.35 -14.05 -3.15 -15.75 -0.8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-14.85 -8.35 L-13.45 -9.05 -13.25 -9.25 -14.3 -8.85 -14.55 -8.75 -14.85 -8.35 Q-15.8 -7.2 -17.1 -7.1 L-20.4 -7.15 -20.2 -7.15 -17.55 -7.9 -18.65 -7.9 -18.45 -8.65 Q-17.55 -8.65 -14.25 -9.65 L-7.1 -9.65 M-17.55 -7.9 L-16.6 -8.15 -14.55 -8.75 M-14.85 -8.35 L-15.95 -7.9 -17.55 -7.9" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-39.9 3.6 L-33.1 -4.6 Q-29.0 -9.7 -29.65 -12.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-33.5 -9.2 L-35.3 -1.15 Q-36.9 3.7 -40.1 3.2" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.5, 40.55)">\n      <path d="M1.05 -33.65 Q4.2 -30.55 1.65 -26.85 L0.5 -25.5 Q-0.2 -25.0 -1.5 -24.85 L-4.2 -24.15 -6.5 -24.25 Q-8.6 -23.9 -10.55 -24.95 -13.2 -26.65 -13.5 -29.85 L-12.05 -31.1 Q-11.95 -33.7 -10.2 -35.5 -9.15 -36.75 -7.75 -37.15 L-7.35 -40.55 Q-0.9 -35.6 1.05 -33.65" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="40.05px" width="76.4px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 53.65, 32.95)">\n    <use height="32.65" transform="matrix(1.0, 0.0, 0.0, 1.0, -44.65, -25.55)" width="45.75" xlink:href="#shape0"/>\n    <use height="16.6" transform="matrix(1.0, 0.0, 0.0, 1.0, -53.65, -26.6)" width="16.3" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 44.65, 25.55)">\n      <path d="M-18.4 -16.8 Q-15.5 -16.65 -10.1 -20.0 -4.8 -23.3 -1.4 -23.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-19.9 -11.55 Q-21.85 -9.15 -25.3 -8.2 L-31.55 -8.4 Q-34.45 -9.55 -35.15 -12.05 -35.8 -14.6 -33.9 -17.0 -31.95 -19.45 -28.55 -20.35 L-22.25 -20.15 Q-19.35 -19.05 -18.7 -16.5 -18.0 -14.0 -19.9 -11.55" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-19.9 -11.55 Q-21.85 -9.15 -25.3 -8.2 L-31.55 -8.4 Q-34.45 -9.55 -35.15 -12.05 -35.8 -14.6 -33.9 -17.0 -31.95 -19.45 -28.55 -20.35 L-22.25 -20.15 Q-19.35 -19.05 -18.7 -16.5 -18.0 -14.0 -19.9 -11.55 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-38.2 -11.4 Q-40.75 -12.3 -41.7 -13.95 -42.75 -15.55 -41.45 -17.05 -40.1 -18.6 -37.3 -19.05 L-31.85 -18.65 Q-29.25 -17.75 -28.3 -16.05 -27.4 -14.45 -28.8 -12.9 -30.05 -11.45 -32.7 -11.0 -35.55 -10.5 -38.2 -11.4" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-38.2 -11.4 Q-40.75 -12.3 -41.7 -13.95 -42.75 -15.55 -41.45 -17.05 -40.1 -18.6 -37.3 -19.05 L-31.85 -18.65 Q-29.25 -17.75 -28.3 -16.05 -27.4 -14.45 -28.8 -12.9 -30.05 -11.45 -32.7 -11.0 -35.55 -10.5 -38.2 -11.4 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-23.0 -11.6 Q-25.3 -10.6 -26.65 -6.4 L-22.4 -6.4 -22.4 -2.4 -24.65 1.65 Q-25.9 4.3 -28.05 4.6" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-41.45 4.2 Q-41.25 4.0 -40.15 3.75 -39.15 3.5 -38.85 3.0 L-37.85 0.4 -35.95 -2.15 Q-34.85 -3.65 -34.85 -4.1 L-35.45 -4.8 -36.05 -5.6 Q-36.15 -7.05 -36.45 -7.6 L-37.25 -9.75 -37.85 -11.8 -37.85 -13.0 Q-34.95 -12.95 -34.65 -6.6 -34.15 -6.85 -33.85 -7.8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 13.5, 40.55)">\n      <path d="M1.05 -33.65 Q4.2 -30.55 1.65 -26.85 L0.5 -25.5 Q-0.2 -25.0 -1.5 -24.85 L-4.2 -24.15 -6.5 -24.25 Q-8.6 -23.9 -10.55 -24.95 -13.2 -26.65 -13.5 -29.85 L-12.05 -31.1 Q-11.95 -33.7 -10.2 -35.5 -9.15 -36.75 -7.75 -37.15 L-7.35 -40.55 Q-0.9 -35.6 1.05 -33.65" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="68.95px" width="46.9px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 28.9, 59.25)">\n    <use height="33.35" transform="matrix(1.0, 0.0, 0.0, 1.0, -11.6, -23.65)" width="27.35" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -13.95, -35.9)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.6, 23.65)">\n      <path d="M10.15 2.6 Q11.4 1.95 12.3 0.1 13.25 -1.7 13.25 -3.4 13.25 -6.9 10.65 -11.1 8.0 -15.35 8.0 -16.95 L8.1 -19.1 Q8.4 -20.25 9.65 -21.15" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M9.6 -0.8 Q9.6 2.5 7.35 4.85 5.1 7.2 1.9 7.2 -1.3 7.2 -3.55 4.85 -5.8 2.5 -5.8 -0.8 -5.8 -4.1 -3.55 -6.45 -1.3 -8.8 1.9 -8.8 5.1 -8.8 7.35 -6.45 9.6 -4.1 9.6 -0.8" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M9.6 -0.8 Q9.6 2.5 7.35 4.85 5.1 7.2 1.9 7.2 -1.3 7.2 -3.55 4.85 -5.8 2.5 -5.8 -0.8 -5.8 -4.1 -3.55 -6.45 -1.3 -8.8 1.9 -8.8 5.1 -8.8 7.35 -6.45 9.6 -4.1 9.6 -0.8 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M3.4 -13.3 Q3.4 -10.65 1.6 -8.8 -0.25 -6.9 -2.85 -6.9 -5.4 -6.9 -7.25 -8.8 -9.1 -10.65 -9.1 -13.3 -9.1 -15.95 -7.25 -17.85 -5.4 -19.7 -2.85 -19.7 -0.25 -19.7 1.6 -17.85 3.4 -15.95 3.4 -13.3" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M3.4 -13.3 Q3.4 -10.65 1.6 -8.8 -0.25 -6.9 -2.85 -6.9 -5.4 -6.9 -7.25 -8.8 -9.1 -10.65 -9.1 -13.3 -9.1 -15.95 -7.25 -17.85 -5.4 -19.7 -2.85 -19.7 -0.25 -19.7 1.6 -17.85 3.4 -15.95 3.4 -13.3 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-7.25 2.75 Q-7.0 4.45 -5.75 4.4 -4.3 4.3 -4.0 5.0 -3.45 6.1 -2.7 6.5 L-0.5 6.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-7.25 -15.0 L-7.0 -4.35 -7.1 -0.75 Q-7.45 1.25 -8.75 1.0 L-8.75 2.25 -8.5 2.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M3.0 -12.25 Q4.05 -12.4 4.45 -10.6 4.9 -8.75 6.25 -8.75 6.15 -7.85 6.55 -6.15 L7.0 -4.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="68.95px" width="46.9px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 28.9, 59.25)">\n    <use height="45.2" transform="matrix(1.0, 0.0, 0.0, 1.0, -14.25, -35.95)" width="30.0" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -18.95, -36.05)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 14.25, 35.95)">\n      <path d="M10.15 -9.7 Q11.4 -10.35 12.3 -12.2 13.25 -14.0 13.25 -15.7 13.25 -19.2 10.65 -23.4 8.0 -27.65 8.0 -29.25 L8.1 -31.4 Q8.4 -32.55 9.65 -33.45" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M11.15 -8.3 Q11.15 -5.0 8.9 -2.65 6.65 -0.3 3.45 -0.3 0.25 -0.3 -2.0 -2.65 -4.25 -5.0 -4.25 -8.3 -4.25 -11.6 -2.0 -13.95 0.25 -16.3 3.45 -16.3 6.65 -16.3 8.9 -13.95 11.15 -11.6 11.15 -8.3" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M11.15 -8.3 Q11.15 -5.0 8.9 -2.65 6.65 -0.3 3.45 -0.3 0.25 -0.3 -2.0 -2.65 -4.25 -5.0 -4.25 -8.3 -4.25 -11.6 -2.0 -13.95 0.25 -16.3 3.45 -16.3 6.65 -16.3 8.9 -13.95 11.15 -11.6 11.15 -8.3 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M0.75 -18.9 Q0.75 -16.25 -1.05 -14.4 -2.9 -12.5 -5.5 -12.5 -8.05 -12.5 -9.9 -14.4 -11.75 -16.25 -11.75 -18.9 -11.75 -21.55 -9.9 -23.45 -8.05 -25.3 -5.5 -25.3 -2.9 -25.3 -1.05 -23.45 0.75 -21.55 0.75 -18.9" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M0.75 -18.9 Q0.75 -16.25 -1.05 -14.4 -2.9 -12.5 -5.5 -12.5 -8.05 -12.5 -9.9 -14.4 -11.75 -16.25 -11.75 -18.9 -11.75 -21.55 -9.9 -23.45 -8.05 -25.3 -5.5 -25.3 -2.9 -25.3 -1.05 -23.45 0.75 -21.55 0.75 -18.9 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-2.5 6.75 Q-0.2 6.05 -0.15 1.85 -0.05 -2.85 1.0 -3.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M6.25 5.25 Q6.95 5.15 9.3 1.9 11.75 -1.4 11.75 -2.6 11.75 -3.15 10.7 -4.3 L9.25 -5.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-11.05 -16.9 L-8.05 -6.7 -7.2 -3.15 Q-7.05 -1.15 -8.35 -1.1 L-8.0 0.1 -7.75 0.05" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M3.0 -12.25 Q4.05 -12.4 4.45 -10.6 4.9 -8.75 6.25 -8.75 6.15 -7.85 6.55 -6.15 L7.0 -4.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M0.35 -23.0 L-1.25 -23.0 0.5 -21.45 Q1.35 -20.55 2.5 -20.25 3.2 -20.05 3.6 -19.0 L3.9 -18.0 4.25 -18.0 4.5 -18.0 Q3.85 -18.75 2.5 -21.4 1.7 -23.0 0.35 -23.0 M1.5 -19.5 Q2.6 -19.15 3.0 -17.75 3.2 -17.95 3.9 -18.0 L4.25 -17.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="68.95px" width="46.9px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 28.9, 59.25)">\n    <use height="48.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -22.5, -40.8)" width="40.5" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -23.7, -53.1)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 22.5, 40.8)">\n      <path d="M4.25 -20.5 L12.3 -21.85 Q15.5 -23.2 15.5 -28.15 15.5 -29.45 15.0 -31.2 L14.5 -33.4 Q14.5 -34.25 15.0 -35.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M6.25 -21.3 Q6.25 -18.0 4.0 -15.65 1.75 -13.3 -1.45 -13.3 -4.65 -13.3 -6.9 -15.65 -9.15 -18.0 -9.15 -21.3 -9.15 -24.6 -6.9 -26.95 -4.65 -29.3 -1.45 -29.3 1.75 -29.3 4.0 -26.95 6.25 -24.6 6.25 -21.3" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M6.25 -21.3 Q6.25 -18.0 4.0 -15.65 1.75 -13.3 -1.45 -13.3 -4.65 -13.3 -6.9 -15.65 -9.15 -18.0 -9.15 -21.3 -9.15 -24.6 -6.9 -26.95 -4.65 -29.3 -1.45 -29.3 1.75 -29.3 4.0 -26.95 6.25 -24.6 6.25 -21.3 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-1.25 -31.9 Q-1.25 -29.25 -3.05 -27.4 -4.9 -25.5 -7.5 -25.5 -10.05 -25.5 -11.9 -27.4 -13.75 -29.25 -13.75 -31.9 -13.75 -34.55 -11.9 -36.45 -10.05 -38.3 -7.5 -38.3 -4.9 -38.3 -3.05 -36.45 -1.25 -34.55 -1.25 -31.9" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-1.25 -31.9 Q-1.25 -29.25 -3.05 -27.4 -4.9 -25.5 -7.5 -25.5 -10.05 -25.5 -11.9 -27.4 -13.75 -29.25 -13.75 -31.9 -13.75 -34.55 -11.9 -36.45 -10.05 -38.3 -7.5 -38.3 -4.9 -38.3 -3.05 -36.45 -1.25 -34.55 -1.25 -31.9 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-3.2 5.5 Q-2.45 4.65 -2.5 0.4 -2.6 -3.7 -1.2 -4.75 -3.25 -7.55 -2.95 -16.0 L-4.7 -16.0 Q-4.7 -15.8 -5.25 -15.4 -5.85 -15.0 -6.2 -15.0 L-6.2 -12.75 -5.1 -9.65 Q-4.9 -8.7 -4.25 -7.9 -3.6 -7.1 -3.45 -6.0 L-2.95 -6.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M4.0 3.25 L4.75 3.25 Q4.75 -1.0 5.5 -2.5 L6.75 -5.25 7.5 -7.15 Q7.5 -7.75 5.0 -9.7 2.5 -11.7 2.5 -13.0 L2.65 -14.0 2.75 -15.25 5.25 -15.5 5.25 -11.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-20.0 -30.75 L-19.6 -28.35 Q-19.05 -27.0 -17.5 -27.25 L-17.5 -24.75 -15.0 -24.75 -14.5 -25.75 -14.75 -25.5 -14.75 -26.0 Q-14.75 -26.8 -15.5 -30.65 -15.5 -31.2 -15.0 -31.4 L-14.0 -31.75 -15.0 -32.0 -14.85 -32.7 Q-14.65 -33.1 -14.25 -33.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="68.95px" width="46.9px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 28.9, 59.25)">\n    <use height="40.8" transform="matrix(1.0, 0.0, 0.0, 1.0, -22.75, -49.3)" width="40.75" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -28.4, -57.0)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 22.75, 49.3)">\n      <path d="M2.5 -34.25 L4.15 -35.0 Q5.35 -35.75 5.25 -36.75 L7.75 -36.75 Q7.4 -34.5 9.25 -34.5 L9.5 -33.0 14.0 -33.0 14.85 -34.0 15.5 -34.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M3.7 -32.55 Q3.7 -29.25 1.45 -26.9 -0.8 -24.55 -4.0 -24.55 -7.2 -24.55 -9.45 -26.9 -11.7 -29.25 -11.7 -32.55 -11.7 -35.85 -9.45 -38.2 -7.2 -40.55 -4.0 -40.55 -0.8 -40.55 1.45 -38.2 3.7 -35.85 3.7 -32.55" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M3.7 -32.55 Q3.7 -29.25 1.45 -26.9 -0.8 -24.55 -4.0 -24.55 -7.2 -24.55 -9.45 -26.9 -11.7 -29.25 -11.7 -32.55 -11.7 -35.85 -9.45 -38.2 -7.2 -40.55 -4.0 -40.55 -0.8 -40.55 1.45 -38.2 3.7 -35.85 3.7 -32.55 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-5.5 -40.4 Q-5.5 -37.75 -7.3 -35.9 -9.15 -34.0 -11.75 -34.0 -14.3 -34.0 -16.15 -35.9 -18.0 -37.75 -18.0 -40.4 -18.0 -43.05 -16.15 -44.95 -14.3 -46.8 -11.75 -46.8 -9.15 -46.8 -7.3 -44.95 -5.5 -43.05 -5.5 -40.4" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-5.5 -40.4 Q-5.5 -37.75 -7.3 -35.9 -9.15 -34.0 -11.75 -34.0 -14.3 -34.0 -16.15 -35.9 -18.0 -37.75 -18.0 -40.4 -18.0 -43.05 -16.15 -44.95 -14.3 -46.8 -11.75 -46.8 -9.15 -46.8 -7.3 -44.95 -5.5 -43.05 -5.5 -40.4 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-9.5 -26.5 Q-9.5 -24.25 -7.75 -19.0 L-5.25 -19.0 Q-4.75 -20.0 -4.75 -21.0 L-4.5 -21.0 Q-4.65 -19.7 -3.85 -15.85 -3.1 -12.1 -3.25 -11.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M4.5 -13.25 Q4.5 -14.25 5.0 -14.75 L5.0 -23.75 2.75 -23.5 2.5 -29.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-19.5 -39.0 L-19.25 -30.75 -19.25 -30.25 -18.85 -30.75 Q-17.5 -32.45 -17.5 -36.0 -17.0 -35.5 -15.75 -35.5 L-15.75 -29.0 -15.25 -29.0 Q-14.85 -30.1 -13.4 -31.75 -11.95 -33.35 -11.5 -34.75 M-19.25 -30.25 L-19.25 -27.75 -20.0 -27.75 -20.1 -27.9 -20.25 -28.4 Q-20.25 -29.0 -19.25 -30.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e) {
	t.exports = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<svg xmlns:xlink="http://www.w3.org/1999/xlink" height="68.95px" width="46.9px" xmlns="http://www.w3.org/2000/svg">\n  <g transform="matrix(1.0, 0.0, 0.0, 1.0, 28.9, 59.25)">\n    <use height="32.85" transform="matrix(1.0, 0.0, 0.0, 1.0, -25.25, -54.6)" width="42.0" xlink:href="#shape0"/>\n    <use height="19.75" transform="matrix(1.0, 0.0, 0.0, 1.0, -28.9, -59.25)" width="18.45" xlink:href="#shape1"/>\n  </g>\n  <defs>\n    <g id="shape0" transform="matrix(1.0, 0.0, 0.0, 1.0, 25.25, 54.6)">\n      <path d="M-1.5 -40.75 Q1.3 -41.15 7.65 -40.75 12.9 -40.8 14.25 -43.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-0.6 -39.55 Q-0.6 -36.25 -2.85 -33.9 -5.1 -31.55 -8.3 -31.55 -11.5 -31.55 -13.75 -33.9 -16.0 -36.25 -16.0 -39.55 -16.0 -42.85 -13.75 -45.2 -11.5 -47.55 -8.3 -47.55 -5.1 -47.55 -2.85 -45.2 -0.6 -42.85 -0.6 -39.55" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-0.6 -39.55 Q-0.6 -36.25 -2.85 -33.9 -5.1 -31.55 -8.3 -31.55 -11.5 -31.55 -13.75 -33.9 -16.0 -36.25 -16.0 -39.55 -16.0 -42.85 -13.75 -45.2 -11.5 -47.55 -8.3 -47.55 -5.1 -47.55 -2.85 -45.2 -0.6 -42.85 -0.6 -39.55 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-9.0 -45.7 Q-9.0 -43.05 -10.8 -41.2 -12.65 -39.3 -15.25 -39.3 -17.8 -39.3 -19.65 -41.2 -21.5 -43.05 -21.5 -45.7 -21.5 -48.35 -19.65 -50.25 -17.8 -52.1 -15.25 -52.1 -12.65 -52.1 -10.8 -50.25 -9.0 -48.35 -9.0 -45.7" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M-9.0 -45.7 Q-9.0 -43.05 -10.8 -41.2 -12.65 -39.3 -15.25 -39.3 -17.8 -39.3 -19.65 -41.2 -21.5 -43.05 -21.5 -45.7 -21.5 -48.35 -19.65 -50.25 -17.8 -52.1 -15.25 -52.1 -12.65 -52.1 -10.8 -50.25 -9.0 -48.35 -9.0 -45.7 Z" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-10.25 -37.25 Q-10.95 -37.0 -11.85 -35.55 L-13.0 -33.75 -13.0 -31.75 -6.75 -31.5 -6.75 -30.25 -10.2 -27.95 Q-12.3 -26.4 -12.25 -24.25" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-1.25 -32.0 Q-1.8 -30.8 -3.65 -28.7 -5.35 -26.8 -5.75 -25.75 L-7.75 -25.75" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-21.25 -40.75 L-21.0 -40.75 -20.75 -35.0 Q-20.3 -33.15 -20.35 -31.35 -20.4 -27.85 -22.75 -27.5" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n      <path d="M-16.5 -37.0 L-16.45 -32.45 Q-16.45 -29.75 -17.0 -28.5 -16.75 -28.5 -16.25 -29.0" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.0"/>\n    </g>\n    <g id="shape1" transform="matrix(1.0, 0.0, 0.0, 1.0, 11.15, 40.2)">\n      <path d="M7.25 -27.25 Q6.95 -24.0 4.1 -22.8 1.4 -20.15 -3.0 -20.5 -5.55 -21.35 -7.95 -22.65 -10.9 -24.3 -11.15 -27.85 -11.35 -31.25 -9.15 -33.9 -6.95 -36.6 -3.55 -37.05 -0.15 -37.45 2.65 -35.55 5.45 -33.6 6.7 -30.45 7.4 -28.95 7.25 -27.25" fill="#000000" fill-rule="evenodd" stroke="none"/>\n      <path d="M2.35 -40.15 Q4.05 -40.6 5.85 -33.7 6.4 -31.55 6.35 -30.85 L5.1 -30.5 Q2.45 -31.6 0.95 -32.6 -1.1 -33.95 -1.9 -35.55 L-1.8 -35.6 -1.7 -35.8 -0.95 -35.6 -0.6 -35.45 0.45 -37.8 Q1.55 -39.95 2.35 -40.15 M-10.7 -35.5 L-10.25 -39.95 Q-8.95 -39.25 -7.85 -38.35 -6.05 -36.95 -5.7 -35.8 -5.35 -34.35 -6.85 -32.8 -8.1 -31.4 -9.8 -30.8 -10.75 -32.55 -10.7 -35.5" fill="#000000" fill-rule="evenodd" stroke="none"/>\n    </g>\n  </defs>\n</svg>\n'
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(0),
		s = n(1),
		a = n(21),
		l = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, 0, "__DEFAULT") || this;
				return n.on("animationrepeat", function() {
					n.moveForward()
				}), n.solver = a.
			default, n.direction = s.
			default.catDefaultDirection, n.reset(), n
			}
			return r(e, t), Object.defineProperty(e.prototype, "i", {
				get: function() {
					return this.getData("i")
				},
				set: function(t) {
					this.setData("i", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "j", {
				get: function() {
					return this.getData("j")
				},
				set: function(t) {
					this.setData("j", t)
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "direction", {
				get: function() {
					return this.getData("direction")
				},
				set: function(t) {
					this.setData("direction", t), this.resetTextureToStop(), this.resetOriginAndScale()
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(e.prototype, "solver", {
				get: function() {
					return this.getData("solver")
				},
				set: function(t) {
					this.setData("solver", t)
				},
				enumerable: !0,
				configurable: !0
			}), e.prototype.reset = function() {
				this.anims.stop(), this.direction = s.
			default.catDefaultDirection, this.resetIJ()
			}, e.prototype.step = function() {
				var t = this.solver.call(this, this.scene.blocksData, this.i, this.j);
				return t < 0 || t > 6 ? (this.caught(), !1) : !! this.stepDirection(t) || (this.caught(), !1)
			}, e.prototype.isCaught = function() {
				var t = this;
				return !this.getCurrentNeighbours().some(function(e, n) {
					var o = t.scene.getBlock(e.i, e.j);
					return null !== o && !o.isWall
				})
			}, e.prototype.caught = function() {
				this.setTexture(s.
			default.cannotEscapeTextures[s.
			default.directions[this.direction].name])
			}, e.prototype.escape = function() {
				0 === this.j || this.j === this.scene.h - 1 ? this.runForward() : 0 === this.i ? this.runDirection(0) : this.i === this.scene.w - 1 && this.runDirection(3)
			}, e.prototype.setIJ = function(t, e) {
				this.i = t, this.j = e;
				var n = this.scene.getPosition(t, e);
				return this.setPosition(n.x, n.y)
			}, e.prototype.resetIJ = function() {
				this.setIJ(Math.floor(this.scene.w / 2), Math.floor(this.scene.h / 2))
			}, e.prototype.isEscaped = function() {
				return this.i <= 0 || this.i >= this.scene.w - 1 || this.j <= 0 || this.j >= this.scene.h - 1
			}, e.prototype.checkState = function() {
				this.isEscaped() ? (this.escape(), this.emit("escaped")) : this.isCaught() && (this.caught(), this.emit("win"))
			}, e.prototype.getCurrentNeighbours = function() {
				return i.
			default.getNeighbours(this.i, this.j)
			}, e.prototype.resetTextureToStop = function() {
				this.setTexture(s.
			default.stopTextures[s.
			default.directions[this.direction].name])
			}, e.prototype.resetOriginAndScale = function() {
				var t = s.
			default.directions[this.direction],
					e = s.
				default.origins[t.name];
				this.setOrigin(e.x, e.y), this.scaleX = t.scaleX
			}, e.prototype.moveForward = function() {
				var t = this.getCurrentNeighbours()[this.direction];
				this.setIJ(t.i, t.j), this.checkState()
			}, e.prototype.stepForward = function() {
				var t = this,
					e = this.getCurrentNeighbours()[this.direction],
					n = this.scene.getBlock(e.i, e.j);
				return null !== n && (!n.isWall && (this.play(s.
			default.directions[this.direction].name + "_step"), this.once("animationcomplete", function() {
					t.moveForward(), t.resetTextureToStop()
				}), !0))
			}, e.prototype.stepDirection = function(t) {
				return this.direction = t, this.stepForward()
			}, e.prototype.runForward = function() {
				this.play(s.
			default.directions[this.direction].name + "_run")
			}, e.prototype.runDirection = function(t) {
				this.direction = t, this.runForward()
			}, e
		}(Phaser.GameObjects.Sprite);
	e.
default = l
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(0);
	e.
default = function(t, e, n) {
		var r = -1;
		return o.
	default.getNeighbours(e, n).forEach(function(e, n) {
			-1 === r && (void 0 === t[e.i] || void 0 === t[e.i][e.j] || t[e.i][e.j] || (r = n))
		}), r
	}
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function(t) {
			function e(e, n, o, r) {
				var i = this,
					s = e.getPosition(n, o);
				(i = t.call(this, e, s.x, s.y, r, 0, 360, !1, 0, 1) || this).i = n, i.j = o, i.r = r, i.isWall = !1;
				var a = new Phaser.Geom.Circle(i.r / 2, i.r / 2, i.r);
				return i.setInteractive(a, Phaser.Geom.Circle.Contains), i.on("pointerdown", function() {
					i.emit("player_click", i.i, i.j)
				}), i
			}
			return r(e, t), Object.defineProperty(e.prototype, "isWall", {
				get: function() {
					return this._isWall
				},
				set: function(t) {
					this._isWall = t, this.fillColor = t ? 13158 : 11786751
				},
				enumerable: !0,
				configurable: !0
			}), e
		}(Phaser.GameObjects.Arc);
	e.
default = i
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(2),
		s = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, 0, i.
			default ("重置"), {}) || this;
				n.setColor("#000000");
				var o = e.r;
				n.setFontSize(o), n.setPadding(o, o, o, o), n.setPosition(0, e.game.canvas.height), n.setOrigin(0, 1);
				var r = new Phaser.Geom.Rectangle(0, 0, n.width, n.height);
				return n.setInteractive(r, Phaser.Geom.Rectangle.Contains), n
			}
			return r(e, t), e
		}(Phaser.GameObjects.Text);
	e.
default = s
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, 0, "", {}) || this;
				n.setColor("#000000");
				var o = e.r;
				return n.setFontSize(o), "center" === e.game.myConfig.statusBarAlign && (n.setX(e.game.canvas.width / 2), n.setOrigin(.5, 0)), n.setPadding(o, o, o, o), n
			}
			return r(e, t), e
		}(Phaser.GameObjects.Text);
	e.
default = i
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = function(t) {
			function e(e) {
				var n = t.call(this, e, 0, 0, "", {}) || this;
				n.setColor("#000000"), n.setPosition(e.game.canvas.width, e.game.canvas.height), n.setOrigin(1, 1);
				var o = e.r;
				return n.setFontSize(.8 * o), n.setPadding(o, o, o, o), n.setText(e.game.myConfig.credit), n
			}
			return r(e, t), e
		}(Phaser.GameObjects.Text);
	e.
default = i
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(0),
		r = function() {
			function t(t, e, n, o) {
				this.i = e, this.j = n, this.isWall = o, this.distance = 1 / 0, this.parent = t, this.isEdge = this.i <= 0 || this.i >= this.parent.w - 1 || this.j <= 0 || this.j >= this.parent.h - 1
			}
			return Object.defineProperty(t.prototype, "routesCount", {
				get: function() {
					var t = this;
					if (void 0 === this._routesCount) if (this.isEdge) this._routesCount = 1;
					else {
						var e = 0;
						this.neighbours.forEach(function(n) {
							null === n || n.isWall || n.distance < t.distance && (e += n.routesCount)
						}), this._routesCount = e
					}
					return this._routesCount
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "neighbours", {
				get: function() {
					var t = this;
					if (void 0 === this._neighbours) {
						var e = o.
					default.getNeighbours(this.i, this.j);
						this._neighbours = e.map(function(e) {
							return t.parent.getBlock(e.i, e.j)
						})
					}
					return this._neighbours
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "directions", {
				get: function() {
					var t = this,
						e = [];
					return this.neighbours.forEach(function(n, o) {
						null === n || n.isWall || n.distance < t.distance && e.push(o)
					}), e
				},
				enumerable: !0,
				configurable: !0
			}), Object.defineProperty(t.prototype, "direction", {
				get: function() {
					var t = this,
						e = 0,
						n = -1;
					return this.directions.forEach(function(o) {
						var r = t.neighbours[o];
						r.routesCount > e && (e = r.routesCount, n = o)
					}), n
				},
				enumerable: !0,
				configurable: !0
			}), t
		}(),
		i = function() {
			function t(t) {
				var e = this;
				if (this.w = t.length, this.w <= 0) throw new Error("empty blocks");
				this.h = t[0].length, this.blocks = t.map(function(n, o) {
					return n.map(function(n, i) {
						return new r(e, o, i, t[o][i])
					})
				})
			}
			return t.prototype.getBlock = function(t, e) {
				return t >= 0 && t < this.w && e >= 0 && e < this.h ? this.blocks[t][e] : null
			}, t.prototype.calcAllDistances = function() {
				var t = [];
				this.blocks.forEach(function(e) {
					e.forEach(function(e) {
						e.isEdge && !e.isWall && (e.distance = 0, t.push(e))
					})
				});
				for (var e = function() {
						var e = t.shift();
						e.neighbours.forEach(function(n) {
							null === n || n.isEdge || n.isWall || n.distance > e.distance + 1 && (n.distance = e.distance + 1, t.indexOf(n) < 0 && t.push(n))
						})
					}; t.length > 0;) e()
			}, t.prototype.toString = function() {
				for (var t = [], e = 0; e < this.h; e++) {
					for (var n = [], o = 0; o < this.w; o++) {
						var r = this.getBlock(o, e);
						r.isWall ? n.push("*") : r.distance === 1 / 0 ? n.push("-") : n.push(r.distance)
					}
					var i = n.join(" ");
					1 == (1 & e) && (i = " " + i), t.push(i)
				}
				return t.join("\n")
			}, t.prototype.toString2 = function() {
				for (var t = [], e = 0; e < this.h; e++) {
					for (var n = [], o = 0; o < this.w; o++) {
						var r = this.getBlock(o, e);
						r.isWall ? n.push("*") : r.routesCount === 1 / 0 ? n.push("-") : n.push(r.routesCount)
					}
					var i = n.join(" ");
					1 == (1 & e) && (i = " " + i), t.push(i)
				}
				return t.join("\n")
			}, t
		}();
	e.nearestSolver = function(t, e, n) {
		var o = new i(t);
		o.calcAllDistances();
		var r = o.getBlock(e, n).directions;
		return r.length > 0 ? r[0] : -1
	}, e.
default = function(t, e, n) {
		var o = new i(t);
		return o.calcAllDistances(), o.getBlock(e, n).direction
	}
}, function(t, e, n) {
	"use strict";
	var o, r = this && this.__extends || (o = function(t, e) {
		return (o = Object.setPrototypeOf || {
			__proto__: []
		}
		instanceof Array &&
		function(t, e) {
			t.__proto__ = e
		} ||
		function(t, e) {
			for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
		})(t, e)
	}, function(t, e) {
		function n() {
			this.constructor = t
		}
		o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
	});
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var i = n(28),
		s = function(t) {
			function e(e, n, o, r) {
				var i = t.call(this, e, n, void 0, r) || this;
				return i.rawData = o, i
			}
			return r(e, t), e.prototype.load = function() {
				this.state === Phaser.Loader.FILE_POPULATED ? this.loader.nextFile(this, !0) : this.xhrLoader = i.
			default (this, this.loader.xhr)
			}, e
		}(Phaser.Loader.FileTypes.SVGFile);
	e.
default = s
}, function(t, e, n) {
	"use strict";
	Object.defineProperty(e, "__esModule", {
		value: !0
	});
	var o = n(29);
	e.
default = function(t, e) {
		var n = new o.
	default;
		return n.open("GET", t.src, e.async, e.user, e.password), n.responseType = t.xhrSettings.responseType, n.timeout = e.timeout, e.header && e.headerValue && n.setRequestHeader(e.header, e.headerValue), e.requestedWith && n.setRequestHeader("X-Requested-With", e.requestedWith), e.overrideMimeType && n.overrideMimeType(e.overrideMimeType), n.onload = t.onLoad.bind(t, n), n.onerror = t.onError.bind(t), n.onprogress = t.onProgress.bind(t), n.send(), setTimeout(function() {
			n.respond(200, {
				"Content-Type": "application/octet-stream"
			}, t.rawData)
		}, 1), n
	}
}, function(t, e, n) {
	"use strict";
	n.r(e);
	var o = function(t, e, n, o) {
			this.type = t, this.bubbles = e, this.cancelable = n, this.target = o
		};
	o.prototype = {
		stopPropagation: function() {},
		preventDefault: function() {
			this.defaultPrevented = !0
		}
	};
	var r = {
		100: "Continue",
		101: "Switching Protocols",
		200: "OK",
		201: "Created",
		202: "Accepted",
		203: "Non-Authoritative Information",
		204: "No Content",
		205: "Reset Content",
		206: "Partial Content",
		300: "Multiple Choice",
		301: "Moved Permanently",
		302: "Found",
		303: "See Other",
		304: "Not Modified",
		305: "Use Proxy",
		307: "Temporary Redirect",
		400: "Bad Request",
		401: "Unauthorized",
		402: "Payment Required",
		403: "Forbidden",
		404: "Not Found",
		405: "Method Not Allowed",
		406: "Not Acceptable",
		407: "Proxy Authentication Required",
		408: "Request Timeout",
		409: "Conflict",
		410: "Gone",
		411: "Length Required",
		412: "Precondition Failed",
		413: "Request Entity Too Large",
		414: "Request-URI Too Long",
		415: "Unsupported Media Type",
		416: "Requested Range Not Satisfiable",
		417: "Expectation Failed",
		422: "Unprocessable Entity",
		500: "Internal Server Error",
		501: "Not Implemented",
		502: "Bad Gateway",
		503: "Service Unavailable",
		504: "Gateway Timeout",
		505: "HTTP Version Not Supported"
	};
	var i = {
		"Accept-Charset": !0,
		"Accept-Encoding": !0,
		Connection: !0,
		"Content-Length": !0,
		Cookie: !0,
		Cookie2: !0,
		"Content-Transfer-Encoding": !0,
		Date: !0,
		Expect: !0,
		Host: !0,
		"Keep-Alive": !0,
		Referer: !0,
		TE: !0,
		Trailer: !0,
		"Transfer-Encoding": !0,
		Upgrade: !0,
		"User-Agent": !0,
		Via: !0
	};

	function s(t, e) {
		e.addEventListener(t, function(n) {
			var o = e["on" + t];
			o && "function" == typeof o && o.call(n.target, n)
		})
	}
	function a() {
		this._eventListeners = {};
		for (var t = ["loadstart", "progress", "load", "abort", "loadend"], e = t.length - 1; e >= 0; e--) s(t[e], this)
	}
	function l() {
		a.call(this), this.readyState = l.UNSENT, this.requestHeaders = {}, this.requestBody = null, this.status = 0, this.statusText = "", this.upload = new a
	}
	a.prototype = {
		addEventListener: function(t, e) {
			this._eventListeners[t] = this._eventListeners[t] || [], this._eventListeners[t].push(e)
		},
		removeEventListener: function(t, e) {
			for (var n = this._eventListeners[t] || [], o = 0, r = n.length; o < r; ++o) if (n[o] == e) return n.splice(o, 1)
		},
		dispatchEvent: function(t) {
			for (var e = t.type, n = this._eventListeners[e] || [], o = 0; o < n.length; o++)"function" == typeof n[o] ? n[o].call(this, t) : n[o].handleEvent(t);
			return !!t.defaultPrevented
		},
		_progress: function(t, e, n) {
			var r = new o("progress");
			r.target = this, r.lengthComputable = t, r.loaded = e, r.total = n, this.dispatchEvent(r)
		}
	}, l.prototype = new a, l.UNSENT = 0, l.OPENED = 1, l.HEADERS_RECEIVED = 2, l.LOADING = 3, l.DONE = 4;
	var d = {
		UNSENT: 0,
		OPENED: 1,
		HEADERS_RECEIVED: 2,
		LOADING: 3,
		DONE: 4,
		async: !0,
		withCredentials: !1,
		open: function(t, e, n, o, r) {
			this.method = t, this.url = e, this.async = "boolean" != typeof n || n, this.username = o, this.password = r, this.responseText = null, this.responseXML = null, this.responseURL = e, this.requestHeaders = {}, this.sendFlag = !1, this._readyStateChange(l.OPENED)
		},
		setRequestHeader: function(t, e) {
			if (u(this), i[t] || /^(Sec-|Proxy-)/.test(t)) throw new Error('Refused to set unsafe header "' + t + '"');
			this.requestHeaders[t] ? this.requestHeaders[t] += "," + e : this.requestHeaders[t] = e
		},
		send: function(t) {
			if (u(this), !/^(get|head)$/i.test(this.method)) {
				var e = !1;
				Object.keys(this.requestHeaders).forEach(function(t) {
					"content-type" === t.toLowerCase() && (e = !0)
				}), e || (t || "").toString().match("FormData") || (this.requestHeaders["Content-Type"] = "text/plain;charset=UTF-8"), this.requestBody = t
			}
			this.errorFlag = !1, this.sendFlag = this.async, this._readyStateChange(l.OPENED), "function" == typeof this.onSend && this.onSend(this), this.dispatchEvent(new o("loadstart", !1, !1, this))
		},
		abort: function() {
			this.aborted = !0, this.responseText = null, this.errorFlag = !0, this.requestHeaders = {}, this.dispatchEvent(new o("abort", !1, !1, this)), this.readyState > l.UNSENT && this.sendFlag && (this._readyStateChange(l.UNSENT), this.sendFlag = !1), "function" == typeof this.onerror && this.onerror()
		},
		getResponseHeader: function(t) {
			if (this.readyState < l.HEADERS_RECEIVED) return null;
			if (/^Set-Cookie2?$/i.test(t)) return null;
			for (var e in t = t.toLowerCase(), this.responseHeaders) if (e.toLowerCase() == t) return this.responseHeaders[e];
			return null
		},
		getAllResponseHeaders: function() {
			if (this.readyState < l.HEADERS_RECEIVED) return "";
			var t = "";
			for (var e in this.responseHeaders) this.responseHeaders.hasOwnProperty(e) && !/^Set-Cookie2?$/i.test(e) && (t += e + ": " + this.responseHeaders[e] + "\r\n");
			return t
		},
		overrideMimeType: function(t) {
			"string" == typeof t && (this.forceMimeType = t.toLowerCase())
		},
		_readyStateChange: function(t) {
			this.readyState = t, "function" == typeof this.onreadystatechange && this.onreadystatechange(new o("readystatechange")), this.dispatchEvent(new o("readystatechange")), this.readyState == l.DONE && this.dispatchEvent(new o("load", !1, !1, this)), this.readyState != l.UNSENT && this.readyState != l.DONE || this.dispatchEvent(new o("loadend", !1, !1, this))
		},
		_setResponseHeaders: function(t) {
			for (var e in this.responseHeaders = {}, t) t.hasOwnProperty(e) && (this.responseHeaders[e] = t[e]);
			this.forceMimeType && (this.responseHeaders["Content-Type"] = this.forceMimeType), this.async ? this._readyStateChange(l.HEADERS_RECEIVED) : this.readyState = l.HEADERS_RECEIVED
		},
		_setResponseBody: function(t) {
			!
			function(t) {
				if (t.readyState == l.DONE) throw new Error("Request done")
			}(this), function(t) {
				if (t.async && t.readyState != l.HEADERS_RECEIVED) throw new Error("No headers received")
			}(this), function(t) {
				if ("string" != typeof t) {
					var e = new Error("Attempted to respond to fake XMLHttpRequest with " + t + ", which is not a string.");
					throw e.name = "InvalidBodyException", e
				}
			}(t);
			var e = this.chunkSize || 10,
				n = 0;
			this.responseText = "";
			do {
				this.async && this._readyStateChange(l.LOADING), this.responseText += t.substring(n, n + e), n += e
			} while (n < t.length);
			var o, r, i = this.getResponseHeader("Content-Type");
			if (this.responseText && (!i || /(text\/xml)|(application\/xml)|(\+xml)/.test(i))) try {
				this.responseXML = (o = this.responseText, "undefined" != typeof DOMParser ? r = (new DOMParser).parseFromString(o, "text/xml") : ((r = new ActiveXObject("Microsoft.XMLDOM")).async = "false", r.loadXML(o)), r)
			} catch (t) {}
			this.async ? this._readyStateChange(l.DONE) : this.readyState = l.DONE
		},
		respond: function(t, e, n) {
			this._setResponseHeaders(e || {}), this.status = "number" == typeof t ? t : 200, this.statusText = r[this.status], this._setResponseBody(n || "")
		}
	};
	for (var h in d) l.prototype[h] = d[h];

	function u(t) {
		if (t.readyState !== l.OPENED) throw new Error("INVALID_STATE_ERR");
		if (t.sendFlag) throw new Error("INVALID_STATE_ERR")
	}
	e.
default = l
}]);