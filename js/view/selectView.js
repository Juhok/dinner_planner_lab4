//ExampleView Object constructor
var SelectView = function (container, model) {

    this.container = container;

    string = "";

    string = '<div class="col-xs-12 col-sm-12 col-md-8 mvertcontselect">'+
'    <h2>Select Dish</h2>'+
'    <hr>'+
'    <form class="form-inline">'+
'      <div class="col-lg-3 col-md-6 col-xs-12">'+
'        <div class="input-group">'+
'          <input type="text" class="form-control" placeholder="Search for...">'+
'          <span class="input-group-btn">'+
'            <button class="btn btn-default" type="button">Go!</button>'+
'          </span>'+
'        </div>'+
'      </div>'+
'      <div class="btn-group">'+
'        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">Browse Menus  '+
'          <span class="caret"></span>'+
'        </button>'+
'        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">'+
'          <li><a href="#"><span id ="starterSelect">Starter</span></a></li>'+
'          <li><a href="#"><span id="mainDishSelect">Main Dish</span></a></li>'+
'          <li><a href="#"><span id="dessertSelect">Dessert</span></a></li>'+
'        </ul>'+
'      </div>'+
'    </form>'+
'    <hr>'+
'    <br />'+
'    <br />'+
'    <div class="row routing" id="dishItem" data-state="detailsSide">'+
'    </div>'+
'  </div>';


this.container.html(string);




    // View 3/6
    // Implement in Screen for select

    this.dishItem = container.find("#dishItem");
    
    // console.log("dishItem" +dishItem);

    var dishItemString = container.find('#dishItem').tostring;

    this.starterSelect = container.find("#starterSelect");
    this.mainDishSelect = container.find("#mainDishSelect");
    this.dessertSelect = container.find("#dessertSelect");





    this.getDishItem = function () {
        return this.dishItem;
    }

    this.setType = function (newType) {
        type = newType;
    };

    var htmlDishes;
    var type = 'main dish'; // Start type
    var dishes;

    model.addObserver(this);

    //this.createDishSelection(model);

    this.createDishSelection = function (model) {
        htmlDishes = "";
        dishes = model.getAllDishes(type);
        // Generate html code that will be displayed id dishItem in index.html
        for (i = 0; i < dishes.length; i++) {

            //TODO: Create button to that does 1) update overallstatecontroller to show detailsview 2) update details id.
            htmlDishes += "<div class='col-lg-2 col-sm-6 col-md-4>'"
            + "<div class='thumbnail'>"
            + "<button type='button' button class='btn btn-default routing' data-state='detailsSide' input id='" + dishes[i].id + "'>"
            + "<img src='images/" + dishes[i].image + "'/>"
            + "</button>"
            + "<div class='caption'>"
            + "<h3>" + dishes[i].name + "</h3>"
            + "<p>" + dishes[i].description + "</p>"
            + "</div>"
            + "</div>"
            
        }
        return htmlDishes;

    }

    this.createDishSelection(model);
    
    // Update function. Called from the model.
    this.update = function (model, arg) {
        if (arg == "selectView dropDown") {
            console.log("In selectView update function");
            // this.dishItem.html(this.createDishSelection(model));
        }
    }


    // For controller
    this.getDishes = function () {
        return dishes;
    }
    

}
 