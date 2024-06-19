<?php

listFile(".", 0);

function listFile($dname, $depth) {
    $indent = str_repeat(" ", $depth*2);
    echo "$indent<ul>\n";
    $flist = [];
    foreach (scandir($dname) as $f) {
        $lastchar = substr($f, -1);
        if (($f[0] !== ".") &&
            ($f !== "index.php") && ($f !== "index.html") &&
            ($lastchar !== "~") && ($lastchar !== "#")) {
            $flist []= $f;
        }
    }
    foreach ($flist as $f) {
        $path = ($dname === ".")? $f: "$dname/$f";
        if (is_file($path)) {
            echo "$indent  <li> <a href='".urlencode($path)."'> $path </a>".PHP_EOL;
        }
    }
    foreach ($flist as $f) {
        $path = ($dname === ".")? $f: "$dname/$f";
        if (is_dir($path)) {
            echo "$indent  <li> $path".PHP_EOL;
            listFile($path, $depth + 1);
        }
    }
    echo "$indent</ul>\n";
}
