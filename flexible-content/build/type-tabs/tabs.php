<?php

function render_tabs($attributes)
{
  ob_start(); ?>
  <div class="border border-solid border-slate-200 mb-12 rounded">
    <ul class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
      <li class="nav-item list-none" role="presentation">
        <a href="#tabs-home" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
      active
    " id="tabs-home-tab" data-bs-toggle="pill" data-bs-target="#tabs-home" role="tab" aria-controls="tabs-home" aria-selected="true">Home</a>
      </li>
      <li class="nav-item list-none" role="presentation">
        <a href="#tabs-profile" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-profile-tab" data-bs-toggle="pill" data-bs-target="#tabs-profile" role="tab" aria-controls="tabs-profile" aria-selected="false">Profile</a>
      </li>
      <li class="nav-item list-none" role="presentation">
        <a href="#tabs-messages" class="
      nav-link
      block
      font-medium
      text-xs
      leading-tight
      uppercase
      border-x-0 border-t-0 border-b-2 border-transparent
      px-6
      py-3
      my-2
      hover:border-transparent hover:bg-gray-100
      focus:border-transparent
    " id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">Messages</a>
      </li>
      <li class="nav-item list-none" role="presentation">
        <a href="#tabs-contact" class="nav-link disabled pointer-events-none block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-contact-tab" data-bs-toggle="pill" data-bs-target="#tabs-contact" role="tab" aria-controls="tabs-contact" aria-selected="false">Contact</a>
      </li>
      <?php if ($attributes["tabs"]) : ?>
        <?php foreach ($attributes["tabs"] as $tab) : ?>
          <li class="nav-item list-none" role="presentation">
            <a href="#tabs-<?= $tab["title"]; ?>" class="nav-link disabled pointer-events-none block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-<?= $tab->title; ?>-tab" data-bs-toggle="pill" data-bs-target="#tabs-<?= $tab["title"]; ?>" role="tab" aria-controls="tabs-<?= $tab["title"]; ?>" aria-selected="false"><?= $tab["title"]; ?></a>
          </li>
        <?php endforeach; ?>
      <?php endif; ?>
    </ul>
    <div class="tab-content" id="tabs-tabContent">
      <div class="tab-pane fade show active" id="tabs-home" role="tabpanel" aria-labelledby="tabs-home-tab">
        Tab 1 content
      </div>
      <div class="tab-pane fade" id="tabs-profile" role="tabpanel" aria-labelledby="tabs-profile-tab">
        Tab 2 content
      </div>
      <div class="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
        Tab 3 content
      </div>
      <div class="tab-pane fade" id="tabs-contact" role="tabpanel" aria-labelledby="tabs-contact-tab">
        Tab 4 content
      </div>
    </div>
  </div>
<?php return ob_get_clean();
}
