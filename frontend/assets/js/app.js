const app = 
{

    /**
     * initialize apply
     */
    init: function()
    {
        let form = document.querySelector('#addCard').addEventListener('submit', app.handleAddCard);
        let allCards = document.querySelector('#allCards').addEventListener('click', app.handleAllCards);
        let allCategories = document.querySelector('#allCategories').addEventListener('change', app.handleAllCategories);
    },

    /**
     * function du reset, remove div
     */
    reset : function()
    {
        let divCard = document.querySelectorAll('.card');
        if(divCard != null)
        {
            for (let currentDiv of divCard)
            {
                currentDiv.remove('div');
            }
        }
    },

    /**
     * function about fetch
     * @param {json} response 
     */
    handleResponseJSON: function(response)
    {
        return response.json();
    },

    /**
     * Function to use fetch in order to take all the cards in the DB when user click on "AllCards"
     * @param {event} evt 
     */
    handleAllCards: function(evt)
    {
        app.reset();

        let options= {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        }
        let url = 'http://localhost:8081/listCards';
        
        fetch(url, options)
        .then(app.handleResponseJSON)
        .then(app.handleCards);
    },

    /**
     * Function to use the response json to list all the cards
     * @param {object} object 
     */
    handleCards: function (object)
    {
        for(let currentObject of object)
         {
            app.getContent(currentObject.img_number, currentObject.id, currentObject.name, currentObject.category.id, currentObject.category.name, currentObject.description);
         }
    },


    /**
     * Function to use fetch in order to take the cards by a category in the DB when user click on "AllCategories" and choose a category
     * @param {event} evt 
     */
    handleAllCategories: function(evt)
    {
        app.reset();
        let id = document.querySelector("#allCategories").value;
        let options= {
            method: 'GET',
            mode: 'cors',
            cache: 'no-cache',
        }
        let url = 'http://localhost:8081/listCards/' + id;
        
        fetch(url, options)
        .then(app.handleResponseJSON)
        .then(app.handleCategories);

    },

    /**
     * Function to use the response json to list cards by category
     * @param {object} object 
     */
    handleCategories : function(object)
    {
        let cardList = object.card;
        for(let currentObject of cardList )
        {
           app.getContent(currentObject.img_number, currentObject.id, currentObject.name, object.id, object.name, currentObject.description);
        }
       
    },

    /**
     * Function to add a new card in the DB 
     * @param {event} evt 
     */
    handleAddCard: function(evt)
    {
        evt.stopImmediatePropagation();

        let name = evt.currentTarget.querySelector('#addCard #name');
        let nameValue = name.value;
        let description = evt.currentTarget.querySelector('#addCard #description');
        let descriptionValue = description.value;
        let category = evt.currentTarget.querySelector('#addCard #category');
        let categoryValue = category.value;
        let numberImage = evt.currentTarget.querySelector('#addCard #numberImage');
        let numberImageValue = numberImage.value;

       
        let data = {
            name: nameValue,
            description: descriptionValue,
            category_id: categoryValue,
            img_number: numberImageValue
        };

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let fetchOptions = {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            headers: myHeaders,
            body: JSON.stringify(data)
        };

        fetch('http://localhost:8081/listCards', fetchOptions)
        .then(
            function(response) 
            {
                console.log(response);
                if (response) {
                    alert('ajout effectué');
                }
                else {
                    alert('L\'ajout a échoué');
                }
            }
            ); 
    }, 

    /**
     * Function to update a card
     * @param {event} evt 
     */
    handleUpdate: function(evt)
    {
        evt.preventDefault();

        let currentCard = evt.currentTarget.closest('.card');
        console.log(currentCard);

        let name = currentCard.querySelector('.field .title');
        let nameValue = name.value;
        let id = currentCard.querySelector('.field .title');
        let idValue = id.dataset.id;
        let description = currentCard.querySelector('.field .description');
        let descriptionValue = description.value;
        let category = currentCard.querySelector('option:checked');
        let categoryValue = category.value;
        let img = currentCard.querySelector('img');
        let imgValue = img.dataset.img;
       
        let data = {
            id: idValue,
            name: nameValue,
            description: descriptionValue,
            category_id: categoryValue,
            img_number: imgValue
        };

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let fetchOptions = {
            method: 'PUT',
            mode: 'cors',
            cache: 'no-cache',
            headers: myHeaders,
            body: JSON.stringify(data)
        };

        fetch('http://localhost:8081/updateCard/' + idValue, fetchOptions)
        .then(
            function(response) 
            {
                console.log(response);
                if (response.status == 200) {
                    alert('modification effectuée');
                }
                else {
                    alert('La modification a échoué');
                }
            }
            );

    },

    /**
     * function to use the template to post a new card
     * @param {int} numberImageValue 
     * @param {int} idValue 
     * @param {string} nameValue 
     * @param {int} categoryId 
     * @param {string} categoryValue 
     * @param {string} descriptionValue 
     */
    getContent(numberImageValue, idValue, nameValue, categoryId, categoryValue, descriptionValue)
    {
        let currentTemplate = document.querySelector('#template').content.cloneNode(true);

        let img = currentTemplate.querySelector('img');
        img.setAttribute('src', 'https:\/\/randomfox.ca\/images\/' + numberImageValue + '.jpg');
        img.setAttribute('data-img', numberImageValue);

        let inputName = currentTemplate.querySelector('.title');
        inputName.setAttribute('value', nameValue );
        inputName.setAttribute('data-id', idValue);

        let selectCategory = currentTemplate.querySelector('#option');
        selectCategory.textContent = categoryValue;
        selectCategory.setAttribute('value', categoryId);

        let inputDescription = currentTemplate.querySelector('.description');
        inputDescription.setAttribute('value',descriptionValue);

        let updateCard = currentTemplate.querySelector('form');
        updateCard.addEventListener('submit', app.handleUpdate, ["capture"]);

        let containerCards = document.querySelector('#container_cards');
        containerCards.prepend(currentTemplate);
    }

}


document.addEventListener('DOMContentLoaded', app.init);



