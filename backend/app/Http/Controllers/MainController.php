<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Card;
use App\Models\Category;
use Illuminate\Http\Request;



class MainController extends Controller
{
    /**
     * method to return all the cards, use "join" to have category name
     *
     */
    public function listCards()
    {
        $list = Card::orderBy('created_at')->get();
        $list->load('category');

        // Return JSON of this list
        return $this->sendJsonResponse($list, 200);

    }

    /**
     * method to return a card by its id
     *
     * @param [int] $id
     *
     */
    public function listByCategory($id)
    {
        $listByCategory = Category::find($id);
        $listByCategory->load('card');

        return response()->json($listByCategory);
    }

    /**
     * method to add a new card in the db
     *
     * @param Request $request
     *
     */
    public function addCard(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|string',
            'category_id' => 'required|integer|exists:categories,id',
            'description' => 'required|string',
            'img_number' => 'integer|min:0|max:121',
        ]);

        $name = $request->input('name');
        $category_id = $request->input('category_id');
        $description = $request->input('description');
        $numberImg = $request->input('img_number');

        $card = new Card();

        $card->name = $name;
        $card->category_id = $category_id;
        $card->description = $description;
        $card->img_number= $numberImg;
        $card->updated_at = null;

        $success = $card->save();

        if (!$success) {

            return $this->abortJson(500, 'Impossible de sauvegarder dans la base de données...');
        }

        return response()->json($card->load('category'), 201, [

            'Location' => route('/listCards'),
        ]);
    }


    /**
     * method to update a card
     *
     * @param Request $request
     * @param [int] $id
     */
    public function updateCard(Request $request, $id)
    {
        $card = Card::find($id);

        if (!$card) {
            return $this->abortJson(404, 'Carte non trouvée');
        }

        if(
            $request->has('name') === false &&

            $request->has('category_id') === false &&

            $request->has('description') === false
        )
        {

                return $this->abortJson(422, 'Au moins une donnée de la carte est requise.');
        }

        $this->validate($request, [
            'name' => 'required|string',
            'category_id' => 'required|integer|exists:categories,id',
            'description' => 'required|string',
        ]);

        if ($request->has('name')) {
            $card->name = $request->input('name');
        }

        if ($request->has('category_id')) {
            $card->category_id = $request->input('category_id');
        }

        if ($request->has('description')) {
            $card->description = $request->input('description');
        }

        $success = $card->save();

        if (!$success) {

            return $this->abortJson(500, 'Impossible de sauvegarder dans la base de données...');
        }

        return response()->json($card, 200);
    }


}
