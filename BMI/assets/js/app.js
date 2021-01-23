let personProfile = {
    firstName:"",
    weight:"",
    height:"",
    status:"",
    calcBMI:function(){
        return this.BMIvalue = Number(this.weight/Math.pow(this.height,2)).toFixed(1);
    },
    BMIstatus:function(){
        let BMIvalue = this.calcBMI();
        if (BMIvalue < 18.5){
            status = "underweight";
    }
    else if (BMIvalue > 18.5 && BMIvalue < 24.9){
        status = "normal or healthy weight";
    }
    else if (BMIvalue > 25 && BMIvalue < 29.9){
        status = " overweight";
    }
    else status="obese";
       return status;
    }
}
personProfile.firstName=prompt("Enter your name:");
personProfile.weight=prompt("Enter your weight in Kg:");
personProfile.height=prompt("Enter your height in meters:");
(function(){
    console.log("Here is your profile");
    console.log("Name: " + personProfile.firstName);
    console.log("BMI: " + personProfile.calcBMI());
    console.log("status: " + personProfile.BMIstatus());
})();