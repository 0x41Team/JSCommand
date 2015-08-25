"use strict";

var exec = require('child_process').exec;
var fs = require('fs');
var path = require('path');

var obj = path.parse('/home/Users/0xgi/Desktop/passwd.crypt');
console.log(obj);

console.log(path.format(obj));
// return string path
process.argv.forEach(function(val, index, array) {

});

var validation = function(path) {
    return {
        isDirectory: function() {
            return fs.statSync(path).isDirectory();
        },
        isFile: function() {
            return fs.statSync(path).isFile();
        },
        hasPath: function() {
            if (fs.existsSync(path)) {
                return true;
            } else {
                return false;
            }
        }
    }
};

var Executable = (function(command) {
	return {
		result: exec(command, function(error, stdout, stderr) {
			console.log(stdout);
			if (error) {
				console.log('-bash: ',command,' command not found' ,error);
			}
		})
	}
});

var terminal = (function() {
	var DEFAULTS = {
		echo: 'Hello 0xgi',
        flags: false
	};
	return {
		mkdir: function(folderName) {

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
});

var compress = (function() {
	return {
		tar: function() {

		},
		gzip: function() {

		},
		unzip: function() {

		}
	}
});

var permission = (function() {
	return {
		chmod: function() {

		}
	}
});

var stringify = (function() {
	return {
		grep: function() {

		},
		awk: function() {

		}
	}
});

var profile = (function() {
	return {
		whoami: function() {

		},
		pwd: function() {

		},
		uname: function() {

		}
	}
});

// Todo
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
});

var ls = (function() {
	return {

	}
});

var directory = (function() {
	return {
		tree: function() {

		}
	}
});

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
});

var helper = (function() {
	return {
		help: function() {

		},
		whatis: function() {

		},
		man: function() {

		}
	}
});
