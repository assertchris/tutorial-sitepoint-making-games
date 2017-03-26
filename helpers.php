<?php

# This file is generated, changes you make will be lost.
# Make your changes in /Users/assertchris/Source/assertchris-tutorials/sitepoint-making-games/helpers.pre instead.

use Amp\Coroutine;

function mix($path)
{
    $generator = call_user_func(function ($context·cfcd208495d565ef66e7dff9f98764da) {
        return function () use ($context·cfcd208495d565ef66e7dff9f98764da) {
            extract($context·cfcd208495d565ef66e7dff9f98764da);
            $manifest = yield Amp\File\get(
            __DIR__ ."/public/mix-manifest.json"
        );

            $manifest = json_decode($manifest, true);

            if (isset($manifest[$path])) {
                return $manifest[$path];
            }

            throw new Exception("{$path} not found");
        };
    }, get_defined_vars());

    return new Coroutine($generator());
}
