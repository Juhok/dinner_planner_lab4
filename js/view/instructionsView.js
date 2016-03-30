//InstructionView Object constructor
var InstructionsView = function (container, model) {

this.container = container;

    string = "";


string = '<div class="row">'+
'    <div class="col-md-10 smvertcont">'+
'      <ul class="list-inline">'+
'        <li><h2>My Dinner: 4 People</h2></li>'+
'        <li>'+
'          <div>'+
'            <button id="backToOverView" input class="btn btn-default routing" data-state="overview">'+
'              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> go back and Edit Dinner'+
'            </button>'+
'          </div>'+
'        </li>'+
'      </ul>'+
'      <div class="row">'+
'          <div class="row" id="instructions">'+
'            </div>'+
'        </div>'+
'        <div class="col-md-6">'+
'          <h2>Preparation</h2>'+
'          <p>'+
'            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
'          </p>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  </div>';


this.container.html(string);



//     string = '<div class="row" id="instructions">'+
// '    <div class="col-md-10 smvertcont">'+
// '      <ul class="list-inline">'+
// '        <li><h2>My Dinner: <span id="numberOfGuests"> People</h2></li>'+
// '        <li>'+
// '          <div>'+
// '            <button id="backToOverView" input class="btn btn-default routing" data-state="overview">'+
// '              <span class="glyphicon glyphicon-backward" aria-hidden="true"></span> go back and Edit Dinner'+
// '            </button>'+
// '          </div>'+
// '        </li>'+
// '      </ul>'+
// '     '+
// '      <div class="row" id="menu">'+
// '      <p>Total: SEK <span id="totalPrice"></span></p>'+
// ''+
// '        <div class="col-md-6">'+
// '          <h2>Preparation</h2>'+
// '          <p>'+
// '            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
// '          </p>'+
// '        </div>'+
// '      </div>'+
// '    </div>'+
// '  '+
// '  </div>';
	


    // View 6/6
    // Implement in Screen for instructions

model.addObserver(this);
 
     var htmlMenu;
     var jsMenu = model.getFullMenu();
 
    this.BackToOverView = container.find("#backToOverView");
     this.instructions = container.find('#instructions');
 
  	this.updateInstructions = function(model){
 
  	    htmlMenu = "";
  	    jsMenu = model.getFullMenu();
 
  	    // Generate html code that will be displayed id dishItem in index.html
  	    for (i = 0; i < jsMenu.length; i++) {
 
  	        if (jsMenu[i].id != 0) {
  	            console.log(jsMenu[i].id);
  	            htmlMenu += "<div class='col-lg-2 col-sm-6 col-md-4>'"
                        + "<div class='thumbnail'>"
                        + "<a href='#' class='thumbnail'>"
                        + "<img src='images/" + model.getDish(jsMenu[i].id).image + "'/>"
                        + "</a>"
                        + "<div class='caption'>"
                        + "<h3>" + model.getDish(jsMenu[i].id).name + "</h3>"
                        + "<p>" + model.getDish(jsMenu[i].id).description + "</p>"
                        + "</div>"
                        + "</div>"
                        + "</div>"
  	        }
 	        else {
 
  	            htmlMenu += "<div class='caption'>" + "<h3>" + "No" + model.getDish(jsMenu[i].id).type + "</h3>"
                 + "</div>"
 
  	        }
  	    }
  	    return htmlMenu;
 
 	}
 
     // Update function. Called from the model.
  	this.update = function (model, arg) {
       //   if (arg == "newGuestsNumber"){
  	    this.instructions.html(this.updateInstructions(model));
      //}
  	}
 		
     



	
	

}
 
