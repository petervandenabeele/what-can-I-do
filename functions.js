/*******************************************************************************
 * f_ProcessInput:
 * starts the overall calculation for a set of inputs.
 ******************************************************************************/

function f_ProcessInput ()
{
// Read input parameters from form
  var grams_of_meat_per_week = parseInt (document.getElementById("grams_of_meat_per_week").value) ;

// Calculate
  var co2_meat = (60 + 24 + 7 + 6) / 4.0
  var total_yearly_CO2_emission = grams_of_meat_per_week * (1.0/1000) * (364.75 / 52) * co2_meat * (1.0/1000);

// fill-in output form
  document.getElementById("total_yearly_CO2_emission").value = total_yearly_CO2_emission.toFixed(2) ;
  return 1 ;
}
