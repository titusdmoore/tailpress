<?php

function render_quiz($attributes) {
    ob_start(); ?>
        <div>
            <h1>Hello World</h1>
        </div>
    <?php
    return ob_get_clean();
}