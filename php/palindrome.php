 <?php

    /**
    * A number based palindrome checker
    * @param Integer $num number to check
    * @return Boolean indication of palindrome or not
    */
    function palindrome(int $num): bool {
        //numberical palinndrome
        $temp = $num;   
        $new_number = 0;   
        while (floor($temp)) {
            $digit = $temp % 10;   
            $new_number = $new_number * 10 + $digit;   
            $temp = $temp/10;
        }

        return $new_number == $num; 
    }

    $original = 87778;  
    if (palindrome($original)){   
        echo "$original Is A Palindrome";   
    }  
    else {   
        echo "$original Is Not A Palindrome";   
    } 

  ?>
