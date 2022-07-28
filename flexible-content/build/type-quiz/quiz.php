<?php

function render_quiz($attributes)
{
  wp_enqueue_script( "edgepressQuizFrontend", __DIR__ . '/quiz.js', array("wp-element"));
  ob_start(); ?>
  <div class="edgepress-quiz-block">
    <h1>Hello World</h1>
  </div>
<?php
  return ob_get_clean();
}
