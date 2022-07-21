<?php

function ep_register_flexible_content()
{
  // Get all block directories inside of the build folder, following line removes files from scandir()
  $scanned_directory = array_diff(scandir(__DIR__ . '/build'), array('..', '.'));

  if ($scanned_directory) {
    foreach ($scanned_directory as $directory) {
      if (is_dir(__DIR__ . "/build/$directory")) {
        register_block_type(__DIR__ . "/build/$directory");
      }
    }
  }
}

add_action('init', 'ep_register_flexible_content');
