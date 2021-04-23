<?php

function console_log($output, $with_script_tags = true) {
    $js_code = 'console.log(' . json_encode($output, JSON_HEX_TAG) . 
');';
    if ($with_script_tags) {
        $js_code = '<script>' . $js_code . '</script>';
    }
    echo $js_code;
}

$ray = array('frosty','pookie', 'eddi', 'eddy' );
console_log($ray);
echo "Frosty";
echo "Pookie";
echo "Eddie";
echo "Eddy";
?> 
