<?php

function render_quiz($attributes)
{
  wp_enqueue_script( "edgepressQuizFrontend", get_template_directory(__FILE__) . '/quiz.js', array("wp-element"), true);
  ob_start(); ?>
  <div class="edgepress-quiz-block">
    <h1>Hello World</h1>
  </div>
<?php
  return ob_get_clean();
}
