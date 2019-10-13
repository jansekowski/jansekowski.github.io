$(function(){

let zamowienie=$("#zamowienie");
let imie=$("#imie");
let nazwisko=$("#nazwisko");
let ulica=$("#ulica");
let dom=$("#dom");
let kod=$("#kod");
let miasto=$("#miasto");
let rodzaj=$("#rodzaj");
let sos1=$("#sos1");
let sos2=$("#sos2");
let rodo=$("#rodo");
let button=$("#button");
let errors=$("#errors");
let cena=$("#cena");


let tabelaCen=[
    {value: 1, price: 21},
    {value: 2, price: 22},
    {value: 3, price: 23},
    {value: 4, price: 24},
    {value: 5, price: 25},
];

rodzaj.change(function(){

    let rodzajPizzy= $(this).val();

    if(rodzajPizzy=="brak"){
        cena.text("0 PLN");
        return;
    }

    tabelaCen.forEach(function(elementTablicy){

        if(rodzajPizzy==elementTablicy.value){
            cena.text(elementTablicy.price + "PLN");
            return;
        }

    });
});


zamowienie.submit(function(){

    errors.empty();
    let tablicaBledow=[];

    if($.trim(imie.val())==""){
        tablicaBledow.push("Wpisz imię!");
    };

    if($.trim(nazwisko.val())==""){
        tablicaBledow.push("Wpisz nazwisko!");
    };

    if($.trim(ulica.val())==""){
        tablicaBledow.push("Wpisz ulicę!");
    };

    if($.trim(dom.val())==""){
        tablicaBledow.push("Wpisz numer domu!");
    };

    if($.trim(kod.val())==""){
        tablicaBledow.push("Wpisz kod pocztowy!");
    };

    if($.trim(miasto.val())==""){
        tablicaBledow.push("Wpisz miasto!");
    };

    if(rodzaj.val()=="brak"){
        tablicaBledow.push("Wybierz pizzę!");
    };
    
    if (rodo.is(':checked') == false){
        tablicaBledow.push("Musisz wyrazić zgodę na RODO!");        
    };
    

    if(tablicaBledow.length != 0){
        tablicaBledow.forEach(function(error){
            let liError = "<li>" + error + "</li>";
            errors.append(liError);
        });
    return false;
    };
    
    let zamowienieObiekt = {
        imie: $.trim(imie.val()),
        nazwisko: $.trim(nazwisko.val()),
        ulica: $.trim(ulica.val()),
        numerDomu: $.trim(dom.val()),
        kodPocztowy: $.trim(kod.val()),
        miasto: $.trim(miasto.val()),
        wybranaPizza: $.trim(rodzaj.val()),
        sosy: [
            sos1.is(":checked"),
            sos2.is(":checked")
        ]
    };
    console.log(zamowienieObiekt);
    console.log(JSON.stringify(zamowienieObiekt));

    return false;
});


});