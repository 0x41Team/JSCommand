"use strict";

var fs = require('fs');

console.log(node_env);


var jsCommand = require('jsCommand');

jsCommand('ls'); // return total file, total folder, display all
jsCommand('cd'); // move folder | return messages
jsCommand('cd ..'); // move back folder | return message
jsCommand('rmdir','fileName'); // remove folder | return message
jsCommand('mkdir','folderName'); // create folder | return message
jsCommand('mv','Path','newPath'); // move file | return message
jsCommand('rm','fileName'); // remove file | return message
jsCommand('cp','path','newPath'); // copy file | return message
jsCommand('tar','options'); // compress
jsCommand('gzip','options');
jsCommand('unzip','options');
jsCommand('chmod','755','pathFile'); // chmod file or directory | return message
jsCommand('grep','string'); // return rows has string, message
jsCommand('awk','options'); // return column and print | message
jsCommand('whoami'); // return name | message
jsCommand('pwd'); // return directory | message
jsCommand('uname'); // return kernel information
jsCommand('tree'); // return tree file
jsCommand('content','>','fileName'); // create fileName
jsCommand('help','command'); // help command was jsCommand
jsCommand('whatis','command'); // what is
jsCommand('man','detail command'); // print detail command syntax
