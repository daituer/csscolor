	function getRGB() {
		var panelCOLOR = $('#color').val().toUpperCase();
		$('#hex').val(panelCOLOR);
		var hex = [panelCOLOR.substr(1, 2), panelCOLOR.substr(3, 2), panelCOLOR.substr(5, 2)];
		var rgb = [undefined, undefined, undefined];
		var hexABC = ['A', 'B', 'C', 'D', 'E', 'F'];
		var hexNum = [10, 11, 12, 13, 14, 15];
		var i = -1;
		for (var x of hex) {
			i = i + 1;
			var m = x.substr(0, 1);
			var n = x.substr(1, 1);

			if (isNaN(x) == false) {
				rgb[i] = parseInt(m) * 16 + parseInt(n);
				var rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
			} else {
				if (hexABC.indexOf(m) > -1) {
					var p = hexABC.indexOf(m);
					m = hexNum[p];
				}
				if (hexABC.indexOf(n) > -1) {
					var q = hexABC.indexOf(n);
					n = hexNum[q];
				}
				rgb[i] = parseInt(m) * 16 + parseInt(n);
				rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
			}
		}
		$('#rgb').val(rgbColor);

	}
	$("#btn").on("click", function() {
		var panelCOLOR = $('#color').val().toUpperCase();
		$('#hex').val(panelCOLOR);
		var hex = [panelCOLOR.substr(1, 2), panelCOLOR.substr(3, 2), panelCOLOR.substr(5, 2)];
		var rgb = [undefined, undefined, undefined];
		var hexABC = ['A', 'B', 'C', 'D', 'E', 'F'];
		var hexNum = [10, 11, 12, 13, 14, 15];
		var i = -1;
		for (var x of hex) {
			i = i + 1;
			var m = x.substr(0, 1);
			var n = x.substr(1, 1);

			if (isNaN(x) == false) {
				rgb[i] = parseInt(m) * 16 + parseInt(n);
				var rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
			} else {
				if (hexABC.indexOf(m) > -1) {
					var p = hexABC.indexOf(m);
					m = hexNum[p];
				}
				if (hexABC.indexOf(n) > -1) {
					var q = hexABC.indexOf(n);
					n = hexNum[q];
				}
				rgb[i] = parseInt(m) * 16 + parseInt(n);
				rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
			}
		}
		$('#rgb').val(rgbColor);

		var panelCOLOR = $('#color').val().toUpperCase();
		$('#hex').val(panelCOLOR);
		var hex = [panelCOLOR.substr(1, 2), panelCOLOR.substr(3, 2), panelCOLOR.substr(5, 2)];
		var rgb = [undefined, undefined, undefined];
		var hexABC = ['A', 'B', 'C', 'D', 'E', 'F'];
		var hexNum = [10, 11, 12, 13, 14, 15];
		var i = -1;
		for (var x of hex) {
			i = i + 1;
			var m = x.substr(0, 1);
			var n = x.substr(1, 1);

			if (isNaN(x) == false) {
				rgb[i] = parseInt(m) * 16 + parseInt(n);
				var rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
			} else {
				if (hexABC.indexOf(m) > -1) {
					var p = hexABC.indexOf(m);
					m = hexNum[p];
				}
				if (hexABC.indexOf(n) > -1) {
					var q = hexABC.indexOf(n);
					n = hexNum[q];
				}
				rgb[i] = parseInt(m) * 16 + parseInt(n);
				rgbColor = 'rgb(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ')';
			}
		}
		$('#rgb').val(rgbColor);
		var hex = $("#hex");
		hex.select(); // 选择对象
		document.execCommand("Copy"); // 执行浏览器复制命令
		alert('复制成功');
	});
