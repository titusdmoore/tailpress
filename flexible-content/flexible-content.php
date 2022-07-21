<?php

function ep_register_flexible_content()
{
  try {
    // Get all block directories inside of the build folder, following line removes files from scandir()
    $scanned_directory = array_diff(scandir(__DIR__ . '/build'), array('..', '.'));
  
    if ($scanned_directory) {
      foreach ($scanned_directory as $directory) {
        if (is_dir(__DIR__ . "/build/$directory")) {
          /* 
            Get type of block to register
          */
  
          // Split string to get type
          $str_pos = strpos($directory, "-");
          $type = substr($directory, 0, $str_pos);
  
          switch (strtolower($type)) {
            case 'type':
              register_block_type(__DIR__ . "/build/$directory");
              break;
            case 'pattern':
              // TODO add register pattern
              break;
            case 'layout':
              // TODO add register layout
              break;
            default:
              throw new Exception("[EDGEPRESS" . __FILE__ . ":" . __LINE__ . "]Block of type $type is not a valid block type. Valid block types are Type, Pattern, and Layout.");
          }
        }
      }
    }
  } catch (\Exception $e) {
    error_log($e->getMessage());
  } 
}

add_action('init', 'ep_register_flexible_content');
