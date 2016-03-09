//ExampleView Object constructor
var DetailsView = function (container, model) {

this.container = container;

    string = "";

    string = '<div class="col-xs-12 col-sm-12 col-md-8 mvertcontselect">'+
'    <h2>Lasagne</h2>'+
'    <div class="row">'+
'      <div class="col-md-6">'+
'        <img id="drag2" src="" alt="lasagne" draggable="true" ondragstart="drag(event)" width="95%" hight="95%"/>'+
'        <br />'+
'        <br />'+
'        <p>'+
'          Lasagne originated in Italy, traditionally ascribed to the city of Naples (Campania), where the first modern recipe was created in the Middle Ages and published in Liber de Coquina (The Book of Cookery), and became a traditional dish.'+
'        </p>'+
'        <br />'+
'        <div>'+
'          <button id = "backToSelectDish" input class="btn btn-default routing" data-state="selectSide">'+
'            <span class="glyphicon glyphicon-backward" aria-hidden="true"></span> Back to selected dish </button>'+
'          </div>'+
'        </div>'+
'        <div class="col-md-6">'+
'          <div class="panel panel-default">'+
'            <!-- Default panel contents -->'+
'            <div class="panel-heading"><h4><span id="numberOfGuests"></span></h4></div>'+
'            <!-- Table -->'+
'            <table class="table" id="ingTable">'+
'            </table>'+
'          </div>'+
'          <ul class="list-inline">'+
'            <li> <button id="confirmDish" class="btn btn-primary routing" data-state="selectSide" type="button">Confirm Dish</button></li>'+
'            <li class="pull-right"><p>SEK</p></li>'+
'            <li class="pull-right"><div><span id="total"></span></div></li>'+
'          </ul>'+
'        </div>'+
'      </div>'+
'      <h2>Preparation</h2>'+
'      <p>'+
'       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '+
'     </p>'+
'   </div>';

this.container.html(string);


    // View 4/6 Screen for Details

    // Html elements in index.html
    this.backToSelectDish = container.find("#backToSelectDish"); //Button
    this.ingTable = container.find("#ingTable"); //Table with ingredients
    this.totalCost = container.find("#total"); // Number
    this.numberOfGuests = container.find('#numberOfGuests'); // Number
    this.dishImage = container.find('#drag2'); // Image
    this.confirmDishButton = container.find('#confirmDish'); //Button


    // console.log(this.confirmDishButton);

    // Adding detailsView as observer
    model.addObserver(this);

    // Update table with ingredients depending on dish
    this.updateIngTable = function (model) {
        console.log("updateIngtable detailsView")
        var ingredients = model.getIngredient();
        var row;
        for (ingredient in ingredients) {
            row += "<tr>"
            row += "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['quantity'] + " " + ingredients[ingredient]['unit'] + "</td>"
            + "<td>" + ingredients[ingredient]['name'] + "</td>"
            + "<td>" + "SEK" + "</td>"
            + "<td>" + model.getNumberOfGuests() * ingredients[ingredient]['price'] + "</td>";
            row += "</tr>"
        }
        return row;
    }

    // Update function called from the model (for all observers).
    this.update = function (model, arg) {
        // Update this view

        //Update anything related to number of guests
        if (arg == "setNumberOfGuests") {
            this.numberOfGuests.html("Ingredients for "+model.getNumberOfGuests()+" people");
            this.ingTable.html(this.updateIngTable(model));
            this.totalCost.html(model.getDishCost(model.getDetailsDishID()));
        }

        // Update  anthing related to specific dish
        else if (arg == "detailsDish") {
            document.getElementById("drag2").src = "images/" + model.getImage(model.getDish(model.getDetailsDishID()));

            this.numberOfGuests.html("Ingredients for " + model.getNumberOfGuests() + " people");
            this.ingTable.html(this.updateIngTable(model));
            this.totalCost.html(model.getDishCost(model.getDetailsDishID()));
        }

    }

}