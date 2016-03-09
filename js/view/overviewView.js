//ExampleView Object constructor
var OverviewView = function (container, model) {

this.container = container;

    string = "";

    string = '<div class="col-xs-12 col-sm-12 col-md-8 mvertcontselect">'+
'      <ul class="list-inline">'+
'        <li><h2>My Dinner: <span id="numberOfGuests"></span> People</h2></li>'+
'        <li>'+
'          <div>'+
'            <button id="backToSelectDish" input class="btn btn-default routing" data-state="selectSide">'+
'              <span class="glyphicon glyphicon-backward" aria-hidden="true"></span> go back and Edit Dinner'+
'            </button>'+
'          </div>'+
'        </li>'+
'      </ul>'+
'      <hr>'+
'      <div class="row" id="menu"> </div>'+
'      <p>Total: SEK <span id="totalPrice"></span></p>'+
'      <hr>'+
'      <br />'+
'      <input id="printRecipeButton" class="btn btn-success routing" type="button" value="Print full recipe" data-state="instructions">'+
'      <br />'+
'      <br />'+
'    </div>';

this.container.html(string);
	
    // View 5/6 Screen for overview
	
    this.numberOfGuests = container.find("#numberOfGuests");
    this.menu = container.find("#menu");
    this.totalPrice = container.find("#totalPrice");
    this.BackToSelectDish = container.find("#backToSelectDish");
    this.PrintRecipeButton = container.find("#printRecipeButton");

    model.addObserver(this);

    this.updateHtmlMenu = function (model) {
        var htmlMenu = "";
        var jsMenu = model.getFullMenu();

        for (var i = 0; i < jsMenu.length; i++) {

            htmlMenu += "<div class='col-lg-2 col-sm-6 col-md-4'>"
            + "<div class='thumbnail'>"
            + "<a href='#' class='thumbnail'>"
            + "<img src=" + "'images/" + model.getDish(jsMenu[i].id).image + "' alt='Mountain View'>"
            + "</a>"
            + "<div class='caption'>"
            + "<h3>" + model.getDish(jsMenu[i].id).name + "</h3>"
            + "<p>" + model.getDish(jsMenu[i].id).description + "</p>"
            + "</div>"
            + "</div>"
            + "</div>";
        }

        return htmlMenu;
    }

    // Update function. Called from the model.
    this.update = function (model, arg) {
           console.log("Overviewview UPDATED!")
           // Update this view
           this.numberOfGuests.html(model.getNumberOfGuests());
           this.menu.html(this.updateHtmlMenu(model));
           this.totalPrice.html(model.getTotalMenuPrice());
        
    }


}
 
