<?php

namespace App\Http\Controllers;

use Laravel\Lumen\Routing\Controller as BaseController;

class Controller extends BaseController
{
    /**
     * Provide a centralized display of a JSON, with CORS, to all Controllers
     *
     * @param mixed $data
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendJsonResponse($data, $httpStatusCode=200) {

        return response()->json($data, $httpStatusCode)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    }

    /**
     * Provide a centralized empty response, with CORS, to all Controllers
     *
     * @param integer $httpStatusCode
     * @return void
     */
    protected function sendEmptyResponse($httpStatusCode=200) {

        return response('', $httpStatusCode)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
    }

     /**
     * Returns a JSON 404
     *
     * @param int $code HTTP status code
     * @param string $message Error message
     */
    protected function abortJson(int $code, string $message)
    {
        return response()->json(['error' => $message], $code);
    }
}
