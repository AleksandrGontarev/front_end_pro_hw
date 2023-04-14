const age = prompt("How are old ?");
if (age == null) { alert("It's a pity that you didn't want to enter your age"); }
else {
    const city = prompt("where do you city live ?");
    if (city == null) { alert("It's a pity that you didn't want to enter your city"); }
    else {
        const favoritSport = prompt("What is your favorite sport ?");
        if (favoritSport == null) { alert("It's a pity that you didn't want to enter your favoritsport"); }
        else {

            if (city == "Kyiv" || city == "London" || city == "Washington") {
                if (favoritSport == "box") {
                    alert(`Your age ${age}\nYou live in the capital ${city}\nCool! Do you want to become Volodimir Klichko?`);
                }
                else if (favoritSport == "footbal") {
                    alert(`Your age ${age}\nYou live in the capital ${city}\nCool! Do you want to become Andriy Shevchenko?`);
                }
                else if (favoritSport == "swimming") {
                    alert(`Your age ${age}\nYou live in the capital ${city}\nCool! Do you want to become Yana Klochkova?`);
                }
            }

            else {
                if (favoritSport == "box") {
                    alert(`Your age ${age}\nYou live in the city ${city}\nCool! Do you want to become Volodimir Klichko?`);
                }
                else if (favoritSport == "footbal") {
                    alert(`Your age ${age}\nYou live in the city ${city}\nCool! Do you want to become Andriy Shevchenko?`);
                }
                else if (favoritSport == "swimming") {
                    alert(`Your age ${age}\nYou live in the city ${city}\nCool! Do you want to become Yana Klochkova?`);
                }

            }
        }

    }
}

