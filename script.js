// =========================
// SCROLL FUNCTIONS
// =========================

function scrollToFinder(){

    document.getElementById("finder").scrollIntoView({
        behavior:"smooth"
    });

}

function showFeatures(){

    document.getElementById("features").scrollIntoView({
        behavior:"smooth"
    });

}

// =========================
// CONTACT
// =========================

function showMessage(){

    alert(
        "MetaBite AI uses AI + GPS technology to recommend the best restaurants in Mozambique."
    );

}

// =========================
// GPS LOCATION
// =========================

let userLatitude = null;
let userLongitude = null;

navigator.geolocation.getCurrentPosition(

    (position)=>{

        userLatitude = position.coords.latitude;
        userLongitude = position.coords.longitude;

        console.log("Latitude:", userLatitude);
        console.log("Longitude:", userLongitude);

    },

    ()=>{

        console.log("Location access denied.");

    }

);

// =========================
// FAVORITES
// =========================

let favorites =
JSON.parse(localStorage.getItem("favorites")) || [];

function saveRestaurant(name){

    if(!favorites.includes(name)){

        favorites.push(name);

        localStorage.setItem(
            "favorites",
            JSON.stringify(favorites)
        );

        alert(name + " added to favorites ⭐");

    }

    else{

        alert(name + " is already saved ⭐");

    }

}

// =========================
// RESTAURANT DATABASE
// =========================

const restaurants = [

    // =========================
    // BURGERS
    // =========================

    {
        name:"Mundo's",
        type:"burger",
        dessert:true,
        budget:700,
        distance:3,
        image:"https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=2081&auto=format&fit=crop",
        description:"Popular burgers and grilled meals.",
        hours:"10:00 AM - 10:00 PM",
        price:"400 - 800 MZN",
        location:"Maputo",
        rating:4.7,
        menu:"https://www.google.com/search?q=Mundos+Maputo+menu",
        maps:"https://www.google.com/maps/search/Mundos+Maputo"
    },

    {
        name:"Jimmy's Bar & Grill",
        type:"burger",
        dessert:false,
        budget:900,
        distance:5,
        image:"https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2070&auto=format&fit=crop",
        description:"Grilled burgers, steaks and cocktails.",
        hours:"10:00 AM - 01:00 AM",
        price:"500 - 1200 MZN",
        location:"Maputo",
        rating:4.4,
        menu:"https://www.google.com/search?q=Jimmys+Bar+and+Grill+Maputo",
        maps:"https://www.google.com/maps/search/Jimmys+Bar+and+Grill+Maputo"
    },

    {
        name:"Jimmys Killer Grills",
        type:"burger",
        dessert:false,
        budget:850,
        distance:5,
        image:"https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&w=2070&auto=format&fit=crop",
        description:"African grilled food and burgers.",
        hours:"10:00 AM - 11:00 PM",
        price:"400 - 1000 MZN",
        location:"Maputo",
        rating:4.2,
        menu:"https://www.google.com/search?q=Jimmys+Killer+Grills+Maputo",
        maps:"https://www.google.com/maps/search/Jimmys+Killer+Grills+Maputo"
    },

    {
        name:"Steers Baia Mall",
        type:"burger",
        dessert:true,
        budget:600,
        distance:6,
        image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
        description:"Fast food burgers and fries.",
        hours:"09:00 AM - 09:00 PM",
        price:"250 - 700 MZN",
        location:"Baia Mall, Maputo",
        rating:4.2,
        menu:"https://www.google.com/search?q=Steers+Baia+Mall+Maputo",
        maps:"https://www.google.com/maps/search/Steers+Baia+Mall+Maputo"
    },

    // =========================
    // PIZZA
    // =========================

    {
        name:"Pizza Hut Mozambique",
        type:"pizza",
        dessert:true,
        budget:1000,
        distance:5,
        image:"https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop",
        description:"Classic pizzas and desserts.",
        hours:"10:00 AM - 11:00 PM",
        price:"500 - 1200 MZN",
        location:"Maputo",
        rating:4.5,
        menu:"https://www.google.com/search?q=Pizza+Hut+Mozambique+menu",
        maps:"https://www.google.com/maps/search/Pizza+Hut+Mozambique"
    },

    // =========================
    // CHICKEN
    // =========================

    {
        name:"KFC Mozambique",
        type:"chicken",
        dessert:true,
        budget:500,
        distance:2,
        image:"https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?q=80&w=2070&auto=format&fit=crop",
        description:"Fried chicken combos and fries.",
        hours:"8:00 AM - 10:00 PM",
        price:"250 - 700 MZN",
        location:"Maputo",
        rating:4.4,
        menu:"https://www.google.com/search?q=KFC+Mozambique+menu",
        maps:"https://www.google.com/maps/search/KFC+Mozambique"
    },

    // =========================
    // DESSERTS
    // =========================

    {
        name:"Creamy Desserts",
        type:"dessert",
        dessert:true,
        budget:450,
        distance:4,
        image:"https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1974&auto=format&fit=crop",
        description:"Ice cream, cakes, waffles and milkshakes.",
        hours:"9:00 AM - 11:00 PM",
        price:"200 - 500 MZN",
        location:"Maputo",
        rating:4.8,
        menu:"https://www.google.com/search?q=Dessert+restaurants+Maputo",
        maps:"https://www.google.com/maps/search/Dessert+restaurants+Maputo"
    },

    {
        name:"Froooties Baia Mall",
        type:"dessert",
        dessert:true,
        budget:400,
        distance:6,
        image:"https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1974&auto=format&fit=crop",
        description:"Smoothies, juices and sweet snacks.",
        hours:"09:00 AM - 09:00 PM",
        price:"150 - 500 MZN",
        location:"Baía Mall, Maputo",
        rating:4.3,
        menu:"https://www.google.com/search?q=Froooties+Baia+Mall+Maputo",
        maps:"https://www.google.com/maps/search/Froooties+Baia+Mall+Maputo"
    },

    // =========================
    // SEAFOOD
    // =========================

    {
        name:"Costa do Sol",
        type:"seafood",
        dessert:true,
        budget:1500,
        distance:10,
        image:"https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1974&auto=format&fit=crop",
        description:"Luxury seafood restaurant with ocean views.",
        hours:"9:00 AM - 11:00 PM",
        price:"900 - 1800 MZN",
        location:"Maputo",
        rating:4.9,
        menu:"https://www.google.com/search?q=Costa+do+Sol+Maputo+menu",
        maps:"https://www.google.com/maps/search/Costa+do+Sol+Maputo"
    },

    // =========================
    // HEALTHY
    // =========================

    {
        name:"Healthy Bowl",
        type:"healthy",
        dessert:false,
        budget:600,
        distance:3,
        image:"https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=2070&auto=format&fit=crop",
        description:"Healthy meals, salads and smoothies.",
        hours:"8:00 AM - 9:00 PM",
        price:"350 - 700 MZN",
        location:"Maputo",
        rating:4.6,
        menu:"https://www.google.com/search?q=Healthy+food+Maputo",
        maps:"https://www.google.com/maps/search/Healthy+food+Maputo"
    },

    {
        name:"AQI - Baía Mall",
        type:"healthy",
        dessert:false,
        budget:800,
        distance:6,
        image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop",
        description:"Healthy bowls, wraps and modern meals.",
        hours:"09:00 AM - 09:00 PM",
        price:"400 - 900 MZN",
        location:"Baía Mall, Maputo",
        rating:4.1,
        menu:"https://www.google.com/search?q=AQI+Baia+Mall+Maputo",
        maps:"https://www.google.com/maps/search/AQI+Baia+Mall+Maputo"
    },

    {
        name:"Mugg & Bean Baia Mall",
        type:"healthy",
        dessert:true,
        budget:1000,
        distance:6,
        image:"https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=1974&auto=format&fit=crop",
        description:"Coffee, breakfast, desserts and meals.",
        hours:"09:00 AM - 09:00 PM",
        price:"500 - 1200 MZN",
        location:"Baía Mall, Maputo",
        rating:4.6,
        menu:"https://www.google.com/search?q=Mugg+and+Bean+Baia+Mall+Maputo",
        maps:"https://www.google.com/maps/search/Mugg+and+Bean+Baia+Mall+Maputo"
    },

    // =========================
    // TRADITIONAL
    // =========================

    {
        name:"Txhapo Txhapo",
        type:"traditional",
        dessert:false,
        budget:700,
        distance:6,
        image:"https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop",
        description:"Traditional Mozambican dishes and local flavors.",
        hours:"9:00 AM - 9:00 PM",
        price:"300 - 800 MZN",
        location:"Maputo",
        rating:4.7,
        menu:"https://www.google.com/search?q=Traditional+food+Maputo",
        maps:"https://www.google.com/maps/search/Traditional+food+Maputo"
    },

    {
        name:"Galaxy Indian Restaurant",
        type:"traditional",
        dessert:false,
        budget:700,
        distance:5,
        image:"https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2070&auto=format&fit=crop",
        description:"Indian curries, naan and spicy dishes.",
        hours:"10:00 AM - 10:30 PM",
        price:"300 - 900 MZN",
        location:"Maputo",
        rating:4.1,
        menu:"https://www.google.com/search?q=Galaxy+Indian+Restaurant+Maputo",
        maps:"https://www.google.com/maps/search/Galaxy+Indian+Restaurant+Maputo"
    },

    // =========================
    // FRIES
    // =========================

    {
        name:"Fries Republic",
        type:"fries",
        dessert:true,
        budget:400,
        distance:2,
        image:"https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=1974&auto=format&fit=crop",
        description:"Loaded fries, burgers and snacks.",
        hours:"11:00 AM - 11:00 PM",
        price:"200 - 500 MZN",
        location:"Maputo",
        rating:4.3,
        menu:"https://www.google.com/search?q=Fries+restaurant+Maputo",
        maps:"https://www.google.com/maps/search/Fries+restaurant+Maputo"
    }

];

// =========================
// GENERATE RESTAURANTS
// =========================

function generateRestaurant(){

    const foodType =
    document.getElementById("foodType").value;

    const budget =
    parseInt(document.getElementById("budget").value);

    const distance =
    parseInt(document.getElementById("distance").value);

    const dessert =
    document.getElementById("dessert").value;

    const mood =
    document.getElementById("mood").value;

    const resultsContainer =
    document.getElementById("resultsContainer");

    resultsContainer.innerHTML = "";

    // =========================
    // FILTER SYSTEM
    // =========================

    const filteredRestaurants = restaurants.filter(

        restaurant => {

            let typeMatch = false;

            // FIXED DESSERT CATEGORY
            if(foodType === "dessert"){

                typeMatch =
                restaurant.type === "dessert";

            }

            else{

                typeMatch =
                restaurant.type === foodType;

            }

            const budgetMatch =
            restaurant.budget <= budget;

            const distanceMatch =
            restaurant.distance <= distance;

            const dessertMatch =

            dessert === "No"

            ? true

            : restaurant.dessert === true;

            return (
                typeMatch &&
                budgetMatch &&
                distanceMatch &&
                dessertMatch
            );

        }

    );

    // =========================
    // NO RESULTS
    // =========================

    if(filteredRestaurants.length === 0){

        resultsContainer.innerHTML = `

            <div class="restaurant-card">

                <div class="restaurant-content">

                    <h3>
                        No Restaurants Found
                    </h3>

                    <p>
                        Try increasing your budget or distance.
                    </p>

                </div>

            </div>

        `;

        return;

    }

    // =========================
    // AI SORTING
    // =========================

    filteredRestaurants.sort((a,b)=>{

        let scoreA = a.rating;
        let scoreB = b.rating;

        if(mood === "Energetic" && a.type === "burger"){
            scoreA += 0.4;
        }

        if(mood === "Relaxed" && a.type === "seafood"){
            scoreA += 0.5;
        }

        if(mood === "Tired" && a.type === "healthy"){
            scoreA += 0.6;
        }

        return scoreB - scoreA;

    });

    // =========================
    // DISPLAY RESULTS
    // =========================

    filteredRestaurants.forEach(restaurant => {

        resultsContainer.innerHTML += `

            <div class="restaurant-card">

                <img src="${restaurant.image}">

                <div class="restaurant-content">

                    <h3>
                        ${restaurant.name}
                    </h3>

                    <p>
                        ${restaurant.description}
                    </p>

                    <p>
                        📍 ${restaurant.location}
                    </p>

                    <p>
                        📏 Distance:
                        ${restaurant.distance} km
                    </p>

                    <p>
                        ⏰ ${restaurant.hours}
                    </p>

                    <p>
                        ⭐ ${restaurant.rating}
                    </p>

                    <p class="price">
                        ${restaurant.price}
                    </p>

                    <p class="open">
                        ● Open Now
                    </p>

                    <div class="restaurant-buttons">

                        <button onclick="openMenu('${restaurant.menu}')">
                            View Menu
                        </button>

                        <button onclick="openMaps('${restaurant.maps}')">
                            Open GPS Route
                        </button>

                        <button onclick="saveRestaurant('${restaurant.name}')">
                            Save Favorite
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

    // =========================
    // AUTO SCROLL TO RESULTS
    // =========================

    document.querySelector(".results-section").scrollIntoView({
        behavior:"smooth"
    });

}

// =========================
// MENU BUTTON
// =========================

function openMenu(url){

    window.open(
        url,
        "_blank"
    );

}

// =========================
// GPS BUTTON
// =========================

function openMaps(url){

    window.open(
        url,
        "_blank"
    );

}

// =========================
// AUTO LOAD
// =========================

window.onload = function(){

    generateRestaurant();

};