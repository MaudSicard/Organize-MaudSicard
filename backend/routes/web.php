<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get(
    '/listCards',
    [
        'uses' => 'MainController@listCards',
        'as'   => 'main-listCards'
    ]
);

$router->get(
    '/listCards/{id}',
    [
        'uses' => 'MainController@listByCategory',
        'as'   => 'main-listByCategory'
    ]
);

$router->post(
    '/listCards',
    [
        'uses' => 'MainController@addCard',
        'as'   => 'main-addCard'
    ]
);

$router->put(
    '/updateCard/{id}',
    [
        'uses' => 'MainController@updateCard',
        'as'   => 'main-updateCard'
    ]
);



