//ExampleView Object constructor
var InstructionsView = function (container, model) {

this.container = container;

    string = "";

    string = '<div class="row">'+
'    <div class="col-md-10 smvertcont">'+
'      <ul class="list-inline">'+
'        <li><h2>My Dinner: <span id="numberOfGuests"> People</h2></li>'+
'        <li>'+
'          <div>'+
'            <button id="backToOverView" input class="btn btn-default routing" data-state="overview">'+
'              <span class="glyphicon glyphicon-backward" aria-hidden="true"></span> go back and Edit Dinner'+
'            </button>'+
'          </div>'+
'        </li>'+
'      </ul>'+
'     '+
'      <div class="row" id="menu">'+
'      <p>Total: SEK <span id="totalPrice"></span></p>'+
''+
'        <div class="col-md-6">'+
'          <h2>Preparation</h2>'+
'          <p>'+
'            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'+
'          </p>'+
'        </div>'+
'      </div>'+
'    </div>'+
'  '+
'  </div>';
	
this.container.html(string);




 	this.BackToOverView = container.find("#backToOverView");


 

	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	
    // View 6/6
    // Implement in Screen for instructions
	

}
 
