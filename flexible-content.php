<?php

function ep_register_flexible_content()
{
  try {
    // Get all block directories inside of the build folder, following line removes files from scandir()
    $scanned_directory = array_diff(scandir(__DIR__ . '/flexible-content/build'), array('..', '.'));
  
    if ($scanned_directory) {
      foreach ($scanned_directory as $directory) {
        $block_name = implode("-", array_slice(preg_split('/-/', $directory), 1));

        if (is_dir(__DIR__ . "/flexible-content/build/$directory")) {
          /* 
            Get type of block to register
          */
  
          // Split string to get type
          $str_pos = strpos($directory, "-"); 
          $type = substr($directory, 0, $str_pos);
  
          switch (strtolower($type)) {
            case 'type':
              if(file_exists(__DIR__ . "/flexible-content/build/$directory/$block_name.php")) {
                require(__DIR__ . "/flexible-content/build/$directory/$block_name.php");

                register_block_type(__DIR__ . "/flexible-content/build/$directory", [
                  'render_callback' => "render_$block_name"
                ]);
              } else {
                register_block_type(__DIR__ . "/flexible-content/build/$directory");
              }
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
