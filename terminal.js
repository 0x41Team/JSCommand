"use strict";

let exec = require('child_process').exec;
let fs = require('fs');

var checkType = function(path) {
	process.argv.forEach(function(val, index, array) {

	})

}

var Executable = (function(command) {
	return {
		result: exec(command, function(error, stdout, stderr) {
			console.log(stdout);
			if (error) {
				console.log('-bash: ',command,' command not found' ,error);
			}
		})
	}
})

var terminal = (function(name) {
	var DEFAULTS = {
		echo: 'Hello 0xgi'
	}
	return {
		mkdir: function() {

		},
		rmdir: function() {

		},
		rm: function() {

		},
		mv: function(oldPath, path) {

		},
		cp: function() {

		}
	}
})

var compress = (function() {
	return {
		tar: function() {

		},
		gzip: function() {

		},
		unzip: function() {

		}
	}
})

var permission = (function() {
	return {
		chmod: function() {

		}
	}
})

var stringify = (function() {
	return {
		grep: function() {

		},
		awk: function() {

		}
	}
})

var profile = (function() {
	return {
		whoami: function() {

		},
		pwd: function() {

		},
		uname: function() {

		}
	}
})

var process = (function() {
	return {
		free: function() {

		},
		df: function() {

		},
		ps: function() {

		},
		top: function() {

		},
		htop: function() {

		}
	}
})

var ls = (function() {
	return {

Nod
	}
})

var directory = (function() {
	return {
		tree: function() {

		}
	}
})

var readFile = (function(fileName) {
	return {
		cat: function() {

		},
		tail: function() {

		},
		head: function() {

		},
		more: function() {

		},
		less: function() {

		}
	}
})

var helper = (function() {
	return {
		help: function() {

		},
		whatis: function() {

		},
		man: function() {

		}
	}
})