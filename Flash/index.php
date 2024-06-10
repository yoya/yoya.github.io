<?php

listFile(".");
function listFile($dname) {
    echo "<ul>\n";
    $d = opendir($dname);
    while ($f = readdir($d)) {
        if ($dname === ".") {
            $path = $f;
        } else {
            $path = "$dname/$f";
        }
        $firstchar = substr($path, 0, 1);
        $lastchar = substr($path, -1);
        if (($f[0] === ".") ||
            ($path === "index.php") || ($path === "index.html") ||
            ($lastchar === "~") || ($lastchar === "#")) {
            ; // skip
        } else if (is_dir($path)) {
            echo "<li> $path".PHP_EOL;
            listFile($path);
        } else if (is_file($path)) {
            echo "<li> <a href='$path'> $path </a>".PHP_EOL;
        } else {
            echo "<li> $path".PHP_EOL;
        }
    }
    echo "</ul>\n";
}
