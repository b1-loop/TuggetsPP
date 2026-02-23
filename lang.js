const translations = {
  sv: {
    // Navigation
    nav_home: 'Hem',
    nav_menu: 'Meny',
    nav_lunch: 'Lunch',
    nav_about: 'Om oss',
    nav_find: 'Hitta hit',
    nav_order: 'Beställ Online',

    // Footer
    footer_find: 'Hitta Hit',
    footer_contact: 'Kontakt',
    footer_hours: 'Öppettider',
    footer_weekdays: 'Mån - Fre',
    footer_weekend: 'Lör - Sön',

    // Mobile bottom bar
    bar_call: 'Ring oss',
    bar_order: 'Beställ',

    // Hero (index.html)
    hero_title: 'Äkta Pizza. Äkta Kärlek.',
    hero_sub: 'Pan Pizza • Italiensk Pizza • Pasta • Sallad',
    hero_btn: 'Se Vår Meny',

    // Menu section
    menu_title: 'Vår Meny',
    menu_divider: '~ Utvalda råvaror & kärlek till hantverket ~',

    // Category nav
    cat_pan: 'Pan Pizzor',
    cat_ordinarie: 'Ordinarie',
    cat_veg: 'Vegetariskt',
    cat_skaldjur: 'Skaldjur',
    cat_mex: 'Mexikanskt',
    cat_kottfars: 'Köttfärs',
    cat_kyckling: 'Kyckling',
    cat_oxfile: 'Oxfilé',
    cat_kebabpizza: 'Kebabpizza',
    cat_salami: 'Salami',
    cat_inbakad: 'Inbakade',
    cat_bbq: 'BBQ',
    cat_gourmet: 'Gourmet',
    cat_ratter: 'Kebabrätter',
    cat_sallad: 'Sallad',
    cat_burgare: 'Hamburgare',
    cat_pasta: 'Pasta',
    cat_barn: 'Barn & Övrigt',

    // Category headings
    heading_pan: 'Pan Pizzor (Nyhet)',
    heading_pan_desc: 'Frasig surdegspizza med riktiga fluffiga kanter.',
    heading_dessert_pan: 'Dessert Panpizzor (M: 220:- / L: 280:-)',
    heading_ordinarie: 'Ordinarie Pizzor',
    heading_ordinarie_desc: 'Tomatsås & ost ingår.',
    heading_veg: 'Vegetariska Pizzor',
    heading_skaldjur: 'Skaldjurs Pizzor',
    heading_mex: 'Mexikanska Pizzor',
    heading_kottfars: 'Köttfärs Pizzor',
    heading_kyckling: 'Kyckling Pizzor',
    heading_oxfile: 'Oxfilé Pizzor',
    heading_kebabpizza: 'Kebab Pizzor',
    heading_kebabpizza_desc: 'Välj mellan fläsk, nöt eller kycklingkebab.',
    heading_salami: 'Salami Pizzor',
    heading_inbakad: 'Inbakade Pizzor',
    heading_bbq: 'BBQ Pizzor',
    heading_gourmet: 'Gourmet Pizzor',
    heading_gourmet_desc: 'Mozzarella, tomatsås, olivolja ingår.',
    heading_ratter: 'Kebabrätter & Tallrikar',
    heading_ibrod: 'I Bröd / Rulle (Nybakat bröd)',
    heading_ratter_desc: 'Inkl. isberg, tomater, gurka, feferoni, rödlök, valfri sås.',
    heading_tallrikar: 'Tallrikar (Ris eller Pommes)',
    heading_sallad: 'Sallader',
    heading_sallad_desc: 'Inkl. nybakat bröd, isberg, tomater, gurka, valfri sås.',
    heading_burgare: 'Hamburgare',
    heading_burgare_desc: 'Inkl. isberg, tomater, gurka, rödlök, dressing.',
    heading_pasta: 'Pasta',
    heading_pasta_desc: 'Pennepasta ingår i samtliga rätter.',
    heading_barn: 'Barnmeny & Övrigt',
    extras_title: 'Extra Tillbehör',
    extras_meat: 'Kött/Skaldjur: 35:-',
    extras_veg: 'Grönsaker/Ost: 25:-',
    extras_sauce: 'Sås: 15:-',
    extras_gluten: 'Glutenfri botten: 40:-',
    extras_fries: 'Pommes/Ris tallrik: 65:-',
    extras_child: 'Barnpizza: -10:- från ordinarie',
    extras_family: 'Familjepizza: Dubbla priset + 25:-',
    extras_drink_title: 'Dryck',

    // Pan pizza descriptions
    desc_pan_1: 'Tomatsås, ost, mozzarella, skinka, bacon, salami.',
    desc_pan_2: 'Tomatsås, ost, mozzarella, pepperoni, salami, champinjoner, hot honey.',
    desc_pan_3: 'Tomatsås, ost, mozzarella, lufttorkad skinka, olivolja, ruccola.',
    desc_pan_4: 'Tomatsås, ost, mozzarella, kebabkött, valfri sås.',
    desc_pan_5: 'Tomatsås, ost, mozzarella, champinjoner, pesto, ruccola.',
    desc_pan_6: 'Tomatsås, ost, mozzarella, olivolja, ruccola.',
    desc_pan_d1: 'Creme fraiche, nutella, valnötter, banan, bär, strössel.',
    desc_pan_d2: 'Creme fraiche, nutella, marshmallow, banan, bär, strössel.',

    // Ordinarie descriptions
    desc_ord_1: 'Tomatsås, ost.',
    desc_ord_2: 'Skinka.',
    desc_ord_3: 'Skinka, champinjoner.',
    desc_ord_4: 'Skinka, räkor.',
    desc_ord_5: 'Skinka, räkor, champinjoner, kronärtskocka.',
    desc_ord_6: 'Skinka, köttfärs.',
    desc_ord_7: 'Skinka, bacon, lök.',
    desc_ord_8: 'Skinka, banan, ananas.',
    desc_ord_9: 'Skinka, ananas.',

    // Vegetarian descriptions
    desc_veg_1: 'Lök, champinjoner, paprika, sparris, kronärtskocka, oliver.',
    desc_veg_2: 'Feta, lök, tomater, oliver, feferoni.',
    desc_veg_3: 'Mozzarella, champinjoner, tomater, vitlök.',
    desc_veg_4: 'Champinjoner.',
    desc_veg_5: 'Mozzarella, gorgonzola, tomater, feta.',
    desc_veg_6: 'Vegansk ost, tomatsås, champinjoner, ananas, lök.',

    // Seafood descriptions
    desc_ska_1: 'Räkor, tonfisk.',
    desc_ska_2: 'Räkor, musslor.',
    desc_ska_3: 'Räkor, tonfisk, musslor, krabfisk.',

    // Mexican descriptions
    desc_mex_1: 'Köttfärs, paprika, jalapeno, lök, tabasco.',
    desc_mex_2: 'Oxfilé, champinjoner, jalapeno, lök, vitlök, tacokrydda, tacosås.',
    desc_mex_3: 'Skinka, köttfärs, champinjoner, jalapeno, tabasco.',

    // Minced meat descriptions
    desc_kot_1: 'Köttfärs, tomater, lök, vitlök, feta, valfri sås.',
    desc_kot_2: 'Skinka, köttfärs, bacon, champinjoner, vitlök, bearnaisesås.',
    desc_kot_3: 'Köttfärs, feta, tomater, isbergssallad, lök, vitlök, valfri sås.',

    // Chicken descriptions
    desc_kyc_1: 'Kyckling, banan, jordnötter, curry.',
    desc_kyc_2: 'Kyckling, majs, champinjoner, lök, valfri sås.',
    desc_kyc_3: 'Kyckling, tomater, lök, isbergssallad, feta, valfri sås.',

    // Beef fillet descriptions
    desc_oxf_1: 'Oxfilé, köttfärs, skinka, bacon, champinjoner, vitlök, valfri sås.',
    desc_oxf_2: 'Oxfilé, banan, ananas, jordnötter, curry.',
    desc_oxf_3: 'Oxfilé, champinjoner, sparris, gorgonzola.',
    desc_oxf_4: 'Oxfilé, ägg, bearnaisesås.',
    desc_oxf_5: 'Oxfilé, champinjoner, lök, bearnaisesås.',

    // Kebab pizza descriptions
    desc_keb_1: 'Kebabkött, skinka, feferoni, lök, valfri sås.',
    desc_keb_2: 'Kebabkött, feferoni, valfri sås.',
    desc_keb_3: 'Kebabkött, tomater, gurka, feferoni, lök, isbergssallad, valfri sås.',
    desc_keb_4: 'Kebabkött, tomater, feferoni, lök, feta, tzatziki.',
    desc_keb_5: 'Kebabkött, skinka, bacon, feferoni, valfri sås.',
    desc_keb_6: 'Kebabkött, tomater, feferoni, lök, isbergssallad, pommes, valfri sås.',
    desc_keb_7: 'Kebabkött, champinjoner, feferoni, lök, valfri sås.',

    // Salami descriptions
    desc_sal_1: 'Salami.',
    desc_sal_2: 'Salami, feta, feferoni, oliver.',
    desc_sal_3: 'Salami, mozzarella, gorgonzola, tomater.',
    desc_sal_4: 'Pepperoni korv, mozzarella.',
    desc_sal_5: 'Ananas, salami, pepperoni korv.',

    // Folded descriptions
    desc_inb_1: 'Skinka.',
    desc_inb_2: 'Oxfilé, champinjoner, lök, vitlök.',
    desc_inb_3: 'Oxfilé, gorgonzola, lök, vitlök.',
    desc_inb_4: 'Skinka, pepperoni korv.',

    // BBQ descriptions
    desc_bbq_1: 'BBQ sås, kyckling, bacon, rödlök.',
    desc_bbq_2: 'BBQ sås, bacon, ananas, kebab, valfri sås.',

    // Gourmet descriptions
    desc_gou_1: 'Valnötter, chèvre, honung, ruccola, olivolja.',
    desc_gou_2: 'Prosciutto, paprika, tomater, vitlök, ruccola.',
    desc_gou_3: 'Prosciutto, ruccola, pesto.',
    desc_gou_4: 'Chèvre, soltorkade tomater, ruccola, honung.',
    desc_gou_5: 'Prosciutto, parmesan, soltorkade tomater, ruccola.',

    // Kebab dishes descriptions
    desc_ibr_1: 'Kebabkött, feta, tzatziki.',
    desc_ibr_2: 'Kebabkött, ananas.',
    desc_ibr_3: 'Kebabkött.',

    // Salad descriptions (text part)
    desc_sall_1: 'Kyckling, majs, rödlök.',
    desc_sall_2: 'Räkor, ananas, rödlök, citron.',
    desc_sall_3: 'Skinka, ost, ananas.',
    desc_sall_4: 'Tonfisk, majs, rödlök, citron.',
    desc_sall_5: 'Feta, oliver, paprika, rödlök, olivolja.',
    desc_sall_6: 'Kebabkött, feferoni, rödlök.',
    desc_sall_7: 'Falafel, rödlök, majs, ananas.',
    desc_sall_8: 'Kyckling, bacon, krutonger, parmesan.',

    // Burger descriptions
    desc_bur_bread: 'Med bröd.',
    desc_bur_fries: 'Med pommes.',
    desc_bur_bbq: 'BBQ sås, ost, pommes.',

    // Pasta descriptions
    desc_pas_1: 'Bacon, lök, parmesan, gräddsås, svartpeppar.',
    desc_pas_2: 'Oxfilé, lök, parmesan, champinjoner, gräddsås.',
    desc_pas_3: 'Kyckling, lök, parmesan, champinjoner, vitlök, gräddsås.',
    desc_pas_4: 'Krämig köttfärssås, parmesan.',
    desc_pas_5: 'Grillade grönsaker, parmesan, tomatsås.',
    desc_pas_6: 'Hemlagad.',

    // Kids menu descriptions
    desc_bar_1: 'Inkl. dip.',
    desc_bar_2: 'Med pommes och dip.',
    desc_bar_4: 'Med pommes.',

    // Lunch page
    lunch_title: 'Dagens Lunch',
    lunch_subtitle: 'En paus i vardagen',
    lunch_heading: 'Vardagslyx på Södra Vägen',
    lunch_lead: 'Unna dig en riktig paus mitt på dagen. Hos oss njuter du av vällagad mat i en avslappnad miljö.',
    lunch_applies: 'Gäller samtliga rätter på vår lunchmeny',
    lunch_always: 'Alltid Inkluderat',
    lunch_item1: 'Fräsch salladsbuffé & Dressing',
    lunch_item2: 'Nybakat bröd & Smör',
    lunch_item3: 'Valfri 33cl dryck (Coca-Cola Company)',
    lunch_item4: 'Kaffe & Kaka efter maten',
    lunch_served_html: '<strong>Serveras vardagar 11:00 – 14:00</strong><br>Välkommen in i värmen för en lunch som ger dig energi för resten av dagen.',
    lunch_bon: 'Smaklig måltid!',

    // About page
    about_title: 'Vår Historia',
    about_subtitle: 'Mer än bara pizza',
    about_heading: 'Familj, Tradition & Hantverk',
    about_lead: 'Välkommen till Tuggets – en plats där varje gäst är en del av familjen.',
    about_p1: 'På Södra Vägen 73, i hjärtat av Göteborg, har vi skapat en oas för dig som älskar mat lagad med omsorg. För oss är en pizzeria inte bara en restaurang; det är ett andra vardagsrum. Vi är ett familjeägt företag som drivs av en enkel men kraftfull filosofi: att bemöta våra gäster precis som vi bemöter våra egna familjemedlemmar.',
    about_p2_html: '<strong>Kärleken till råvaran</strong><br>Vi tror inte på genvägar. I vårt kök råder en ständig strävan efter kvalitet. Det betyder att vi handplockar våra ingredienser och förbereder allt från grunden. Vi strävar alltid efter att erbjuda rätter tillagade med färska ingredienser av hög kvalité.',
    about_p3: 'Att tillaga våra rätter i vårt eget kök betyder att du som gäst får en färsk, god och hemmagjord matupplevelse. Oavsett om du beställer en klassisk Vesuvio, en lyxig Oxfilépizza eller vår populära Pan Pizza, kan du känna smaken av äkta hantverk i varje tugga.',
    about_signoff: 'Varmt välkommen hem till oss.',
  },

  en: {
    // Navigation
    nav_home: 'Home',
    nav_menu: 'Menu',
    nav_lunch: 'Lunch',
    nav_about: 'About us',
    nav_find: 'Find us',
    nav_order: 'Order Online',

    // Footer
    footer_find: 'Find Us',
    footer_contact: 'Contact',
    footer_hours: 'Opening Hours',
    footer_weekdays: 'Mon - Fri',
    footer_weekend: 'Sat - Sun',

    // Mobile bottom bar
    bar_call: 'Call us',
    bar_order: 'Order',

    // Hero
    hero_title: 'Authentic Pizza. Authentic Love.',
    hero_sub: 'Pan Pizza • Italian Pizza • Pasta • Salad',
    hero_btn: 'See Our Menu',

    // Menu section
    menu_title: 'Our Menu',
    menu_divider: '~ Carefully selected ingredients & love for the craft ~',

    // Category nav
    cat_pan: 'Pan Pizzas',
    cat_ordinarie: 'Regular',
    cat_veg: 'Vegetarian',
    cat_skaldjur: 'Seafood',
    cat_mex: 'Mexican',
    cat_kottfars: 'Minced Meat',
    cat_kyckling: 'Chicken',
    cat_oxfile: 'Beef Fillet',
    cat_kebabpizza: 'Kebab Pizza',
    cat_salami: 'Salami',
    cat_inbakad: 'Folded',
    cat_bbq: 'BBQ',
    cat_gourmet: 'Gourmet',
    cat_ratter: 'Kebab Dishes',
    cat_sallad: 'Salad',
    cat_burgare: 'Burgers',
    cat_pasta: 'Pasta',
    cat_barn: 'Kids & Other',

    // Category headings
    heading_pan: 'Pan Pizzas (New!)',
    heading_pan_desc: 'Crispy sourdough pizza with truly fluffy crusts.',
    heading_dessert_pan: 'Dessert Pan Pizzas (M: 220:- / L: 280:-)',
    heading_ordinarie: 'Regular Pizzas',
    heading_ordinarie_desc: 'Tomato sauce & cheese included.',
    heading_veg: 'Vegetarian Pizzas',
    heading_skaldjur: 'Seafood Pizzas',
    heading_mex: 'Mexican Pizzas',
    heading_kottfars: 'Minced Meat Pizzas',
    heading_kyckling: 'Chicken Pizzas',
    heading_oxfile: 'Beef Fillet Pizzas',
    heading_kebabpizza: 'Kebab Pizzas',
    heading_kebabpizza_desc: 'Choose between pork, beef or chicken kebab.',
    heading_salami: 'Salami Pizzas',
    heading_inbakad: 'Folded Pizzas',
    heading_bbq: 'BBQ Pizzas',
    heading_gourmet: 'Gourmet Pizzas',
    heading_gourmet_desc: 'Mozzarella, tomato sauce, olive oil included.',
    heading_ratter: 'Kebab Dishes & Plates',
    heading_ibrod: 'In Bread / Roll (Freshly baked)',
    heading_ratter_desc: 'Incl. iceberg, tomatoes, cucumber, pepperoncini, red onion, choice of sauce.',
    heading_tallrikar: 'Plates (Rice or Fries)',
    heading_sallad: 'Salads',
    heading_sallad_desc: 'Incl. freshly baked bread, iceberg, tomatoes, cucumber, choice of sauce.',
    heading_burgare: 'Burgers',
    heading_burgare_desc: 'Incl. iceberg, tomatoes, cucumber, red onion, dressing.',
    heading_pasta: 'Pasta',
    heading_pasta_desc: 'Penne pasta included in all dishes.',
    heading_barn: 'Kids Menu & Other',
    extras_title: 'Extra Sides',
    extras_meat: 'Meat/Seafood: 35:-',
    extras_veg: 'Vegetables/Cheese: 25:-',
    extras_sauce: 'Sauce: 15:-',
    extras_gluten: 'Gluten-free base: 40:-',
    extras_fries: 'Fries/Rice plate: 65:-',
    extras_child: 'Child pizza: -10:- from regular',
    extras_family: 'Family pizza: Double price + 25:-',
    extras_drink_title: 'Drinks',

    // Pan pizza descriptions
    desc_pan_1: 'Tomato sauce, cheese, mozzarella, ham, bacon, salami.',
    desc_pan_2: 'Tomato sauce, cheese, mozzarella, pepperoni, salami, mushrooms, hot honey.',
    desc_pan_3: 'Tomato sauce, cheese, mozzarella, air-dried ham, olive oil, arugula.',
    desc_pan_4: 'Tomato sauce, cheese, mozzarella, kebab meat, choice of sauce.',
    desc_pan_5: 'Tomato sauce, cheese, mozzarella, mushrooms, pesto, arugula.',
    desc_pan_6: 'Tomato sauce, cheese, mozzarella, olive oil, arugula.',
    desc_pan_d1: 'Crème fraîche, Nutella, walnuts, banana, berries, sprinkles.',
    desc_pan_d2: 'Crème fraîche, Nutella, marshmallow, banana, berries, sprinkles.',

    // Ordinarie descriptions
    desc_ord_1: 'Tomato sauce, cheese.',
    desc_ord_2: 'Ham.',
    desc_ord_3: 'Ham, mushrooms.',
    desc_ord_4: 'Ham, prawns.',
    desc_ord_5: 'Ham, prawns, mushrooms, artichoke.',
    desc_ord_6: 'Ham, minced meat.',
    desc_ord_7: 'Ham, bacon, onion.',
    desc_ord_8: 'Ham, banana, pineapple.',
    desc_ord_9: 'Ham, pineapple.',

    // Vegetarian descriptions
    desc_veg_1: 'Onion, mushrooms, bell pepper, asparagus, artichoke, olives.',
    desc_veg_2: 'Feta, onion, tomatoes, olives, pepperoncini.',
    desc_veg_3: 'Mozzarella, mushrooms, tomatoes, garlic.',
    desc_veg_4: 'Mushrooms.',
    desc_veg_5: 'Mozzarella, gorgonzola, tomatoes, feta.',
    desc_veg_6: 'Vegan cheese, tomato sauce, mushrooms, pineapple, onion.',

    // Seafood descriptions
    desc_ska_1: 'Prawns, tuna.',
    desc_ska_2: 'Prawns, mussels.',
    desc_ska_3: 'Prawns, tuna, mussels, crab.',

    // Mexican descriptions
    desc_mex_1: 'Minced meat, bell pepper, jalapeño, onion, tabasco.',
    desc_mex_2: 'Beef fillet, mushrooms, jalapeño, onion, garlic, taco spice, taco sauce.',
    desc_mex_3: 'Ham, minced meat, mushrooms, jalapeño, tabasco.',

    // Minced meat descriptions
    desc_kot_1: 'Minced meat, tomatoes, onion, garlic, feta, choice of sauce.',
    desc_kot_2: 'Ham, minced meat, bacon, mushrooms, garlic, béarnaise sauce.',
    desc_kot_3: 'Minced meat, feta, tomatoes, iceberg lettuce, onion, garlic, choice of sauce.',

    // Chicken descriptions
    desc_kyc_1: 'Chicken, banana, peanuts, curry.',
    desc_kyc_2: 'Chicken, corn, mushrooms, onion, choice of sauce.',
    desc_kyc_3: 'Chicken, tomatoes, onion, iceberg lettuce, feta, choice of sauce.',

    // Beef fillet descriptions
    desc_oxf_1: 'Beef fillet, minced meat, ham, bacon, mushrooms, garlic, choice of sauce.',
    desc_oxf_2: 'Beef fillet, banana, pineapple, peanuts, curry.',
    desc_oxf_3: 'Beef fillet, mushrooms, asparagus, gorgonzola.',
    desc_oxf_4: 'Beef fillet, egg, béarnaise sauce.',
    desc_oxf_5: 'Beef fillet, mushrooms, onion, béarnaise sauce.',

    // Kebab pizza descriptions
    desc_keb_1: 'Kebab meat, ham, pepperoncini, onion, choice of sauce.',
    desc_keb_2: 'Kebab meat, pepperoncini, choice of sauce.',
    desc_keb_3: 'Kebab meat, tomatoes, cucumber, pepperoncini, onion, iceberg lettuce, choice of sauce.',
    desc_keb_4: 'Kebab meat, tomatoes, pepperoncini, onion, feta, tzatziki.',
    desc_keb_5: 'Kebab meat, ham, bacon, pepperoncini, choice of sauce.',
    desc_keb_6: 'Kebab meat, tomatoes, pepperoncini, onion, iceberg lettuce, fries, choice of sauce.',
    desc_keb_7: 'Kebab meat, mushrooms, pepperoncini, onion, choice of sauce.',

    // Salami descriptions
    desc_sal_1: 'Salami.',
    desc_sal_2: 'Salami, feta, pepperoncini, olives.',
    desc_sal_3: 'Salami, mozzarella, gorgonzola, tomatoes.',
    desc_sal_4: 'Pepperoni sausage, mozzarella.',
    desc_sal_5: 'Pineapple, salami, pepperoni sausage.',

    // Folded descriptions
    desc_inb_1: 'Ham.',
    desc_inb_2: 'Beef fillet, mushrooms, onion, garlic.',
    desc_inb_3: 'Beef fillet, gorgonzola, onion, garlic.',
    desc_inb_4: 'Ham, pepperoni sausage.',

    // BBQ descriptions
    desc_bbq_1: 'BBQ sauce, chicken, bacon, red onion.',
    desc_bbq_2: 'BBQ sauce, bacon, pineapple, kebab, choice of sauce.',

    // Gourmet descriptions
    desc_gou_1: 'Walnuts, chèvre, honey, arugula, olive oil.',
    desc_gou_2: 'Prosciutto, bell pepper, tomatoes, garlic, arugula.',
    desc_gou_3: 'Prosciutto, arugula, pesto.',
    desc_gou_4: 'Chèvre, sun-dried tomatoes, arugula, honey.',
    desc_gou_5: 'Prosciutto, parmesan, sun-dried tomatoes, arugula.',

    // Kebab dishes descriptions
    desc_ibr_1: 'Kebab meat, feta, tzatziki.',
    desc_ibr_2: 'Kebab meat, pineapple.',
    desc_ibr_3: 'Kebab meat.',

    // Salad descriptions (text part)
    desc_sall_1: 'Chicken, corn, red onion.',
    desc_sall_2: 'Prawns, pineapple, red onion, lemon.',
    desc_sall_3: 'Ham, cheese, pineapple.',
    desc_sall_4: 'Tuna, corn, red onion, lemon.',
    desc_sall_5: 'Feta, olives, bell pepper, red onion, olive oil.',
    desc_sall_6: 'Kebab meat, pepperoncini, red onion.',
    desc_sall_7: 'Falafel, red onion, corn, pineapple.',
    desc_sall_8: 'Chicken, bacon, croutons, parmesan.',

    // Burger descriptions
    desc_bur_bread: 'With bread.',
    desc_bur_fries: 'With fries.',
    desc_bur_bbq: 'BBQ sauce, cheese, fries.',

    // Pasta descriptions
    desc_pas_1: 'Bacon, onion, parmesan, cream sauce, black pepper.',
    desc_pas_2: 'Beef fillet, onion, parmesan, mushrooms, cream sauce.',
    desc_pas_3: 'Chicken, onion, parmesan, mushrooms, garlic, cream sauce.',
    desc_pas_4: 'Creamy meat sauce, parmesan.',
    desc_pas_5: 'Grilled vegetables, parmesan, tomato sauce.',
    desc_pas_6: 'Homemade.',

    // Kids menu descriptions
    desc_bar_1: 'Incl. dip.',
    desc_bar_2: 'With fries and dip.',
    desc_bar_4: 'With fries.',

    // Lunch page
    lunch_title: "Today's Lunch",
    lunch_subtitle: 'A break in the day',
    lunch_heading: 'Everyday Luxury at Södra Vägen',
    lunch_lead: 'Treat yourself to a real midday break. With us you enjoy well-prepared food in a relaxed atmosphere.',
    lunch_applies: 'Applies to all dishes on our lunch menu',
    lunch_always: 'Always Included',
    lunch_item1: 'Fresh salad buffet & Dressing',
    lunch_item2: 'Freshly baked bread & Butter',
    lunch_item3: 'Choice of 33cl drink (Coca-Cola Company)',
    lunch_item4: 'Coffee & Cookie after the meal',
    lunch_served_html: '<strong>Served weekdays 11:00 – 14:00</strong><br>Welcome in for a lunch that gives you energy for the rest of the day.',
    lunch_bon: 'Enjoy your meal!',

    // About page
    about_title: 'Our Story',
    about_subtitle: 'More than just pizza',
    about_heading: 'Family, Tradition & Craftsmanship',
    about_lead: 'Welcome to Tuggets – a place where every guest is part of the family.',
    about_p1: 'At Södra Vägen 73, in the heart of Gothenburg, we have created an oasis for those who love food made with care. For us, a pizzeria is not just a restaurant; it is a second living room. We are a family-owned business driven by a simple but powerful philosophy: to treat our guests just as we treat our own family members.',
    about_p2_html: '<strong>Love for the Ingredients</strong><br>We don\'t believe in shortcuts. In our kitchen there is a constant pursuit of quality. This means we hand-pick our ingredients and prepare everything from scratch. We always strive to offer dishes prepared with fresh, high-quality ingredients.',
    about_p3: 'Preparing our dishes in our own kitchen means that you as a guest get a fresh, delicious and homemade food experience. Whether you order a classic Vesuvio, a luxurious Beef Fillet pizza or our popular Pan Pizza, you can taste the flavour of true craftsmanship in every bite.',
    about_signoff: 'A warm welcome home to us.',
  }
};

function applyTranslations(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang] && translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'sv' ? 'sv' : 'en';
  localStorage.setItem('tuggets_lang', lang);
}

function initLanguage() {
  const saved = localStorage.getItem('tuggets_lang') || 'sv';
  applyTranslations(saved);
  document.addEventListener('click', e => {
    const btn = e.target.closest('.lang-btn');
    if (btn) {
      applyTranslations(btn.dataset.lang);
    }
  });
}

initLanguage();
