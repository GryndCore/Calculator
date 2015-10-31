$(document).ready(function(){

	var display = $("#display");
	var opBtn = $(".needValue");
	var operator = null;
	var firstOperand = null;
	var secondOperand = null;
	var result = null;
	decimalMark=1;
	disableOperators();


	// disable operator buttons if there is no number entered currently
	function disableOperators(){
		if(display.html().length == 0){
			opBtn.prop("disabled",true);
		}else{
			opBtn.prop("disabled",false);
		}
	}
	// ^^disable operator buttons if there is no number entered currently^^


	// returns the result of a given operation
	function calculate(Operator){
		switch(Operator){
			case '+':
			return firstOperand+secondOperand;
			break;
			case '-':
			return firstOperand-secondOperand;
			break;
			case '*':
			return firstOperand*secondOperand;
			break;
			case '÷':
			return firstOperand/secondOperand;
			break;
			case '%':
			return firstOperand%secondOperand;
			break;
			default:
			return "Something went wrong!";
		}
	}
	// ^^returns the result of a given operation^^


	// gets the current value by calling the calculate() function with the current operator
	function getValue(){
		if(display.html()){
			secondOperand = parseFloat(display.html());
		}
		if(firstOperand == null || secondOperand == null || operator == null){
			result = 0;
			display.html(result);
		}else{
			result = parseFloat(calculate(operator));
			display.html(result);
			
		}

		operator = null;
	}
	// ^^gets the current value by calling the calculate() function with the current operator^^


	// looking for Operator button clicks and calls the appropriate funcion
	opBtn.click(function(){

		var currVal = $(this).attr("value");

		if(currVal == '='){
			if(result){
				firstOperand = result;
			}
			getValue();
		}else if(currVal == '+'){
			setFirstValAndOperator('+');
		}else if(currVal == '-'){
			setFirstValAndOperator('-');
		}else if(currVal == '*'){
			setFirstValAndOperator('*');
		}else if(currVal == '÷'){
			setFirstValAndOperator('÷');
		}else{
			setFirstValAndOperator('%');
		}
	});
	// ^^looking for Operator button clicks and calls the appropriate funcion^^


	// sets the first operand equal to the entered value and the operator to the clicked operator
	function setFirstValAndOperator(op){
		if(display.html()){
			firstOperand = parseFloat(display.html());
		}
		operator = op;
		display.empty();
	}
	// ^^sets the first operand equal to the entered value and the operator to the clicked operator^^


	// delete the values according the the delete operation
	$(".btn-danger").click(function(){
		if($(this).attr("value") == "AC"){
			firstOperand = null;
			secondOperand = null;
			result = null
			display.empty();
			disableOperators();
		}else{
			display.empty();
			secondOperand = null;
		}
		decimalMark=1;
	});
	// ^^delete the values according the the delete operation^^


	// enters a decimal mark (max 1 per input)
	$(".decMark").click(function(){
		if(decimalMark){
			display.append($(this).attr("value"));
			decimalMark--;
		}
	});
	// ^^enters a decimal mark (max 1 per input)^^


	// appends the clicked number to the display
	$(".num").click(function(){
		display.append($(this).attr("value"));
		disableOperators();
	});
	// ^^appends the clicked number to the display^^

});