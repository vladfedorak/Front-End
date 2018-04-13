var fruits = [

    {
        "name": "Satsuma Mandarins",
        "brand": "Family Tree Farms",
        "image": "tang_stsma_bag_z.jpg",
        "price": 7.99
    },
    {
        "name": "Blueberries",
        "brand": "Driscoll's Jumbo",
        "image": "fru_pid_2210412_z.jpg",
        "price": 5.99
    },
    {
        "name": "Apples",
        "brand": "Organic Lady Alice",
        "image": "frorg_ldyalcappl_z.jpg",
        "price": 6.99
    },
    {
        "name": "Honeycrisp Apples",
        "brand": "Rainier Organic",
        "image": "fru_apl_hnycrsp_org4_z.jpg",
        "price": 9.99
    },
    {
        "name": "Pink Lady Apples",
        "brand": "Rainier Organic",
        "image": "fru_apl_pnkldy_4pk_z.jpg",
        "price": 6.99
    },
    {
        "name": "Organic Opal Apples",
        "brand": "Rainier Organic",
        "image": "fru_dmy_10091_z.jpg",
        "price": 5.99
    },
    {
        "name": "Fuji Apples",
        "brand": "Rainier Organic",
        "image": "fru_pid_2210739_z.jpg",
        "price": 4.99
    },
    {
        "name": "Empire Apples",
        "brand": "Red Jacket Orchards",
        "image": "fru_rjo_empire_4pk_z.jpg",
        "price": 3.99
    },
    {
        "name": "Hass Avocado",
        "brand": "Avocados from Mexico",
        "image": "avc_has_z.jpg",
        "price": 1.99
    }
];

$(document).ready(function() {
    $("#shop").append("<main class='container-fluid'></main>");
    $("#shop .container-fluid").append("<section class='row'><div class'col-12'><h1>Виберіть товари</h1></div></section>");
    $("#shop .container-fluid h1").append("<section class='row'><div class'col-2 offset-col-10'><h3>Вибрано: <span id='totalPrice'></span></h3></div></section>");
    $("#shop .container-fluid").append("<section class='row'></section>");
    fruits.forEach(function(item, index) {
        $("#shop .container-fluid .row").append("<div id='goods" + index + "' class='col-xs-12 col-sm-6 col-md-4 col-lg-3 my-3'></div>");
        $("#goods" + index).append("<div class='card'></div>");
        $("#goods" + index + " .card").append("<img class='card-img-top' src='imgs/" + item.image + "'>");
        $("#goods" + index + " .card").append("<div class='card-body'></div>");
        $("#goods" + index + " .card").append("<h5 class='card-title'>" + item.name + "</h5>");
        $("#goods" + index + " .card").append("<p class='card-text'>" + item.brand + "</p>");
        $("#goods" + index + " .card").append("<p class='text-right pr-2'><b>Ціна:" + item.price + " грн.</b> </p>")
        $("#goods" + index + " .card")
            .append("<a onclick='addItem(" + index + ")' <a class='btn btn-primary'><i class='fa fa-cart-plus' aria-hidden='true'></i></a>");
    });

    function addItem(index) {

    }
});