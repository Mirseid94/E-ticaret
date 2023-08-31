const telefon_btn = document.getElementById("telefon_btn")
const main_container = document.getElementById("main_container")
const carouselExample = document.getElementById("carouselExample")
const img_url = document.getElementById("img_url")
const sebet_container = document.getElementById("sebet_container")
const harf_p = document.getElementById("harf_p")

const telefonlar = [{
        model: "iPhone 13",
        ram: "6 GB",
        resim: "https://irshad.az/resized/fit540x550/center/products/44263/4a84947213144d207984d3441434a652.jpg"
    },
    {
        model: "Samsung Galaxy S21",
        ram: "8 GB",
        resim: "https://qiymeti.net/wp-content/uploads/samsung-galaxy-s21-qiymeti-280x280.jpg"
    },
    {
        model: "Google Pixel 6",
        ram: "6 GB",
        resim: "https://www.cifrus.ru/photos/big/google/google-pixel-6-pro-128gb-12gb-dual-5g-stormy-black-global-1.jpg"
    },
    {
        model: "OnePlus 9 Pro",
        ram: "12 GB",
        resim: "https://qiymeti.net/wp-content/uploads/oneplus-9-pro-qiymeti-280x280.jpg"
    },
    {
        model: "Xiaomi Mi 11",
        ram: "8 GB",
        resim: "https://strgimgr.umico.az/sized/840/190892-1de6a277dcab7444e93cd45a2a9b7a69.jpg"
    },
    {
        model: "Huawei P40",
        ram: "8 GB",
        resim: "https://qiymeti.net/wp-content/uploads/huawei-p40-pro-qiymeti.jpg"
    },
    {
        model: "LG Velvet",
        ram: "6 GB",
        resim: "https://www.mobileghor.com/wp-content/uploads/2020/08/LG-Velvet-5G.jpg"
    },
    {
        model: "Sony Xperia 1 III",
        ram: "12 GB",
        resim: "https://m.media-amazon.com/images/I/71yBy0SPSjL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        model: "Oppo Find X3 Pro",
        ram: "8 GB",
        resim: "https://m.media-amazon.com/images/I/71LmqOZRV0L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        model: "Nokia 8.3",
        ram: "6 GB",
        resim: "https://www.cifrus.ru/photos/big/nokia/nokia-8-3-5g-128gb-8gb-dual-blue-rst-1.jpg"
    },
    // Diğer telefon bilgilerini buraya ekleyebilirsiniz
];

const bilgisayarlar = [{
        model: "Dell XPS 15",
        ram: "16 GB",
        resim: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-13-9320/media-gallery/xs9320nt-xnb-shot-5-1-sl.psd?fmt=pjpg&pscan=auto&scl=1&wid=3782&hei=2988&qlt=100,1&resMode=sharp2&size=3782,2988&chrss=full&imwidth=5000"
    },
    {
        model: "HP Spectre x360",
        ram: "8 GB",
        resim: "https://atechmall.pk/wp-content/uploads/2020/07/HP-Spectre-x360-13aw0013dx.jpg"
    },
    {
        model: "Apple MacBook Pro",
        ram: "16 GB",
        resim: "https://www.apple.com/newsroom/images/product/mac/standard/Apple_16-inch-MacBook-Pro_111319_big.jpg.large.jpg"
    },
    {
        model: "Lenovo ThinkPad X1 Carbon",
        ram: "8 GB",
        resim: "https://www.notebookcheck.net/fileadmin/Notebooks/Lenovo/ThinkPad_X1_Carbon_2017-20HQS03P00_/teaser_4_3.JPG"
    },
    {
        model: "Asus ROG Zephyrus G14",
        ram: "16 GB",
        resim: "https://www.excaliberpc.com/images/788816_1/large.jpg"
    },
    {
        model: "Acer Predator Helios 300",
        ram: "16 GB",
        resim: "https://www.bakuelectronics.az/assets/images/products/81829/acer-predator-helios-300-ph315-156-i-1.jpg"
    },
    {
        model: "MSI GS66 Stealth",
        ram: "32 GB",
        resim: "https://www.notebookcheck.net/uploads/tx_nbc2/4_zu_3_gs66_01.jpg"
    },
    {
        model: "Razer Blade 15",
        ram: "16 GB",
        resim: "https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_Razer_Blade_15_Advanced_Model_2020.jpg"
    },


    {
        model: "Lenovo Yoga C940",
        ram: "12 GB",
        resim: "https://www.bakuelectronics.az/assets/images/products/92865/30047084b2.jpg"
    },
    {
        model: "HP Envy x360",
        ram: "16 GB",
        resim: "https://agroup.by/upload/Sh/imageCache/948/178/178450136033981.jpg"
    },
    {
        model: "Acer Swift 3",
        ram: "8 GB",
        resim: "https://electrostore.az/image/cache/catalog/photo1/8/az-sized-840-296371-23b2ec635f4e9c80656d8c4e2f7d9bf2-750x750.jpg"
    },
    {
        model: "Microsoft Surface Laptop 4",
        ram: "16 GB",
        resim: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4LEgb?ver=421a&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"
    },
    {
        model: "Dell Inspiron 14",
        ram: "8 GB",
        resim: "https://kontakt.az/wp-content/uploads/2021/02/1000-12-5.jpg"
    },
    {
        model: "LG Gram 14",
        ram: "16 GB",
        resim: "https://www.notebookcheck.net/uploads/tx_nbc2/4zu3_LG_Gram_17_17Z90Q.jpg"
    },
    {
        model: "Huawei MateBook X Pro",
        ram: "16 GB",
        resim: "https://static.komputronik.pl/product-picture/6/NBHUAMBD53011QPK-1.jpg"
    },
    {
        model: "Samsung Galaxy Book Pro",
        ram: "16 GB",
        resim: "https://images.samsung.com/is/image/samsung/p6pim/hk_en/galaxy-book/feature/hk_en-feature-thin-as-a-smartphone--powerful-as-a-pc-430930566?$FB_TYPE_A_MO_JPG$"
    },
    {
        model: "Lenovo Legion 5",
        ram: "16 GB",
        resim: "https://strgimgr.umico.az/sized/840/423610-d7dd9bc103782d3d47b5bf0bc3940f43.jpg"
    },
    {
        model: "Asus VivoBook S14",
        ram: "8 GB",
        resim: "https://www.asus.com/media/Odin/Websites/uk/ProductLine/20220622095904.png"
    },
    {
        model: "HP Omen 15",
        ram: "16 GB",
        resim: "https://m.media-amazon.com/images/I/81mqj7ISVmL.jpg"
    },
    {
        model: "MSI Prestige 14",
        ram: "16 GB",
        resim: "https://www.onoff.az/storage/uploads/products/12-67093.jpg"
    }
]

const kulakliklar = [{
        model: "Sony WH-1000XM4",
        resim: "https://m.media-amazon.com/images/I/71+Uwt-oIgL.jpg",
        fiyat: 1499.99
    },
    {
        model: "Bose QuietComfort 35 II",
        resim: "https://m.media-amazon.com/images/I/81+jNVOUsJL.jpg",
        fiyat: 1299.99
    },
    {
        model: "Apple AirPods Pro",
        resim: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQD83?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1660803972361",
        fiyat: 899.99
    },
    {
        model: "Sennheiser HD 660 S",
        resim: "https://cdn.dsmcdn.com/mnresize/500/-/ty132/product/media/images/20210623/23/103670753/192627961/2/2_org.jpg",
        fiyat: 1399.99
    },
    {
        model: "JBL Quantum 800",
        resim: "https://maxi.az/upload/resize_cache/iblock/bf4/450_550_140cd750bba9870f18aada2478b24840a/bf4123149b11ec20d80dc6ce99a5b8f9.jpg",
        fiyat: 799.99
    },
    {
        model: "Beats Solo Pro",
        resim: "https://m.media-amazon.com/images/I/519YHkvtutL.jpg",
        fiyat: 1199.99
    },
    {
        model: "SteelSeries Arctis 7",
        resim: "https://m.media-amazon.com/images/I/81pCpKFjBZL.jpg",
        fiyat: 699.99
    },
    {
        model: "Audio-Technica ATH-M50x",
        resim: "https://m.media-amazon.com/images/I/41XSPbIt4nL._AC_.jpg",
        fiyat: 999.99
    },
    {
        model: "Samsung Galaxy Buds Pro",
        resim: "https://m.media-amazon.com/images/I/51TkK-s68qS.jpg",
        fiyat: 799.99
    },
    {
        model: "Razer BlackShark V2",
        resim: "https://m.media-amazon.com/images/I/61wrOi+03FL.jpg",
        fiyat: 899.99
    },
    // Diğer 10 kulaklık modelini buraya ekleyebilirsiniz
];


const elektronikEsyalar = [{
        model: "Samsung QLED Q80A",
        resim: "https://cdn1.smartprix.com/rx-id3LaP52q-w1200-h1200/d3LaP52q.jpg",
        fiyat: 5999.99
    },
    {
        model: "Dyson V11 Absolute",
        resim: "https://strgimgr.umico.az/sized/840/285213-961ef5b24272d3baa0dbaacc092dce8c.jpg",
        fiyat: 1899.99
    },
    {
        model: "Rowenta DW5080",
        resim: "https://w2f2z6e6.stackpathcdn.com/photos/32/28/444303_14165_XXL.jpg",
        fiyat: 299.99
    },
    {
        model: "LG InstaView Door-in-Door",
        resim: "https://www.lg.com/za/images/RF/REF-InstaView-DID-Sub-Category-P-Next6-02-1-Award-M.jpg",
        fiyat: 4999.99
    },
    {
        model: "Apple MacBook Pro",
        resim: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1664497359481",
        fiyat: 7999.99
    },
    {
        model: "Samsung Galaxy S21 Ultra",
        resim: "https://cdn.dxomark.com/wp-content/uploads/medias/post-73433/galaxys21_ultra-2048x1536-1.jpg",
        fiyat: 4999.99
    },
    {
        model: "Sony WH-1000XM4",
        resim: "https://m.media-amazon.com/images/I/71+Uwt-oIgL.jpg",
        fiyat: 1499.99
    },
    {
        model: "PlayStation 5",
        resim: "https://almali.store/wp-content/uploads/2022/11/PS5_RENDER_WITHNOTICE_01-2.jpg",
        fiyat: 2999.99
    },
    {
        model: "Apple Watch Series 7",
        resim: "https://i5.walmartimages.com/asr/3580b718-154d-427d-898c-05b3e46332ba.779952d7e83af1cd4883757c516eb7b5.png",
        fiyat: 1499.99
    },
    {
        model: "LG BP175 Blu-ray Oynatıcı",
        resim: "https://m.media-amazon.com/images/I/61SnEVzHkCS.jpg",
        fiyat: 399.99
    },
    // Diğer 10 elektronik eşyayı buraya ekleyebilirsiniz
];


let sebet = []

function sebeteEkle(urun) {
    sebet.push(urun)
}

function sebetCikar() {
    for (let i = 0; i < sebet.length; i++) {
        sebet.splice(i, 1);
    }
    sebetGoster()

}


let rakam = 0









function goster() {
    event.preventDefault()
    carouselExample.innerHTML = ""
    main_container.innerHTML = ""

    for (let i = 0; i < telefonlar.length; i++) {
        const div = document.createElement("div")
        div.className = "inner-container"

        const img = document.createElement("img")

        img.src = telefonlar[i].resim
        const h1 = document.createElement("h1")
        h1.innerText = telefonlar[i].model
        const p = document.createElement("p")
        p.innerText = telefonlar[i].ram

        const button = document.createElement("button")
        button.className = "btn-container"
        button.innerText = "SEBETE EKLE"
        button.addEventListener("click", function() {
            sebeteEkle(telefonlar[i])
            rakam = rakam + 1
            harf_p.innerText = rakam

        })

        main_container.appendChild(div)
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(button)




    }

}

function anaSayfa(event) {

    main_container.innerHTML = ""

    document.location.href = "index.html"

}


function bilgisayarGoster() {
    event.preventDefault()
    carouselExample.innerHTML = ""
    main_container.innerHTML = ""

    for (let i = 0; i < bilgisayarlar.length; i++) {
        const div = document.createElement("div")
        div.className = "inner-container"

        const img = document.createElement("img")

        img.src = bilgisayarlar[i].resim
        const h1 = document.createElement("h1")
        h1.innerText = bilgisayarlar[i].model
        const p = document.createElement("p")
        p.innerText = bilgisayarlar[i].ram
        const button = document.createElement("button")
        button.className = "btn-container"
        button.innerText = "SEBETE EKLE"
        button.addEventListener("click", function() {
            sebeteEkle(bilgisayarlar[i])
            rakam = rakam + 1
            harf_p.innerText = rakam

        })

        main_container.appendChild(div)
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(button)




    }

}


function kulaklikGoster() {
    event.preventDefault()
    carouselExample.innerHTML = ""
    main_container.innerHTML = ""

    for (let i = 0; i < kulakliklar.length; i++) {
        const div = document.createElement("div")
        div.className = "inner-container"

        const img = document.createElement("img")

        img.src = kulakliklar[i].resim
        const h1 = document.createElement("h1")
        h1.innerText = kulakliklar[i].model
        const p = document.createElement("p")
        p.innerText = kulakliklar[i].fiyat
        const button = document.createElement("button")


        button.className = "btn-container"
        button.innerText = "SEBETE EKLE"
        button.addEventListener("click", function() {
            sebeteEkle(kulakliklar[i])
            rakam = rakam + 1
            harf_p.innerText = rakam

        })

        main_container.appendChild(div)
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(button)




    }

}



function elektronikGoster() {
    event.preventDefault()
    carouselExample.innerHTML = ""
    main_container.innerHTML = ""

    for (let i = 0; i < elektronikEsyalar.length; i++) {
        const div = document.createElement("div")
        div.className = "inner-container"

        const img = document.createElement("img")

        img.src = elektronikEsyalar[i].resim
        const h1 = document.createElement("h1")
        h1.innerText = elektronikEsyalar[i].model
        const p = document.createElement("p")
        p.innerText = elektronikEsyalar[i].fiyat

        const button = document.createElement("button")
        button.className = "btn-container"
        button.innerText = "SEBETE EKLE"

        button.addEventListener("click", function() {
            sebeteEkle(elektronikEsyalar[i])
            rakam = rakam + 1
            harf_p.innerText = rakam

        })

        main_container.appendChild(div)
        div.appendChild(img)
        div.appendChild(h1)
        div.appendChild(p)
        div.appendChild(button)




    }



}


function sebetGoster() {
    event.preventDefault()
    sebet_container.style.display = "block"
    sebet_container.innerHTML = '';
    for (let i = 0; i < sebet.length; i++) {

        const div2 = document.createElement("div")
        div2.className = "inner-inner-container"
        const img = document.createElement("img")


        img.src = sebet[i].resim
        const h1 = document.createElement("h1")
        h1.innerText = sebet[i].model
        const p = document.createElement("p")
        p.innerText = sebet[i].fiyat
        const removeIcon = document.createElement("a");
        removeIcon.innerHTML = '<i class="fa-solid fa-trash"></i>'; // FontAwesome ikonunu burada kullanıyorsunuz
        removeIcon.href = "#";
        removeIcon.className = "remove-icon";
        removeIcon.addEventListener("click", function(event) {
            event.preventDefault();
            rakam = rakam - 1
            harf_p.innerText = rakam

            sebetCikar()
                // Sepetten ürünü kaldırma işlemleri
        });




        const button = document.createElement("button")



        div2.appendChild(img)
        div2.appendChild(h1)
        div2.appendChild(p)
        sebet_container.appendChild(div2)
        div2.appendChild(removeIcon)
    }
}