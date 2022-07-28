<?php

function render_quiz($attributes)
{
  // Pull in webpack and version info, and enqueue script
  $webpack_info = include 'quiz.asset.php';
  wp_enqueue_script( "edgepressQuizFrontend", get_stylesheet_directory_uri() . '/flexible-content/build/type-quiz/quiz.js', $webpack_info["dependencies"], $webpack_info["version"], true);
  ob_start(); ?>
  <div class="edgepress-quiz-block"><pre class="hidden"><?= wp_json_encode( $attributes ); ?></pre></div>
<?php
  return ob_get_clean();
}
