function onSubmit() {
	//Confirm details are included for P1 Incidents if the Incident creator is not a Major Incident Manager
	if (g_form.getValue('impact') == 1 && g_form.getValue('urgency') == 1 && !g_user.hasRoleExactly('major_inc_mgr')) {
        //Create a confirmation dialog window
		var ans = confirm("Hello " + g_user.firstName + ",\n\nThe customer is notified of all Priority-1 Incidents. Confirm basic information is included before submitting this P1 Incident.\n\nSelect OK to submit , or Cancel to return to the record.");
		if (!ans) {
            //When 'Cancel' is selected, notate recommended fields
			g_form.addInfoMessage("Incident is not submitted");
			g_form.addInfoMessage("If base information is unavailable, use the 'Additional comments' field to document why it is missing.");
			g_form.showFieldMsg('category', "Major Incident base field");
			g_form.showFieldMsg('cmdb ci', "Major Incident base field");
			g_form.showFieldMsg('assignment_group', "Major Incident base field");
			g_form.showFieldMsg('short_description', "Major Incident base field");		   
		}
		return ans;
	}
}