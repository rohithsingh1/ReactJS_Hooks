export const productListFiltersDataObj={
    filters: {
        title: "filters",
        values: [
            {
                title: "Brands",
                hasSearch: true,
                multiSelect: true,
                key: 'brands',
                values: [
                    {
                        "key": "Bjain",
                        "name": "Bjain",
                        "selected": false,
                    },
                    {
                        "key": "SBL",
                        "name": "SBL",
                        "selected": false,
                    },
                    {
                        "key": "Wheezal",
                        "name": "Wheezal",
                        "selected": false,
                    },
                    {
                        "key": "Sai Herbs",
                        "name": "Sai Herbs",
                        "selected": false,
                    }
                ]
            },
            {
                key: "product_form",
                title: "Product Form",
                hasSearch: true,
                multiSelect: true,
                values: [
                    {
                        "key": "Bottle",
                        "name": "Bottle",
                        "selected": false,
                    },
                    {
                        "key": "Cream",
                        "name": "Cream",
                        "selected": false,
                    },
                    {
                        "key": "Powder",
                        "name": "Powder",
                        "selected": false,
                    }
                ]
            }
        ]
    },
    products: [
        {
            id: 1,
            "name": "Organic Apple Cider Vinegar  (500ml Each) ACV with “Mother of Vinegar” | Healthy Weight & Wellbeing | by Tata 1mg",
            "available": true,
            price: '₹310.94',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 407,
                "average_rating": 4.4
            },
            filters: {
                product_form: 'Bottle',
                brands: "Wheezal"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/3d6861fe130246dca9666480bdb7a468.jpg"
        },
        {
            id: 2,
            "name": "Wartoguard Wart Removal Lotion (5ml Each)",
            "available": true,
            price: '₹240',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 407,
                "average_rating": 4.4
            },
            filters: {
                product_form: 'Bottle',
                brands: "Bjain"
            },
            image_url: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/082fbc14cf9f4ec5bf8fc357d5db51ec.jpg"
        },
        {
            id: 3,
            "name": "Smlkh Salicylic Acid Face Serum For Pimple & Acne Care Formula | Best for Oily Skin (15 Each)",
            "available": true,
            price: '₹599',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 407,
                "average_rating": 4.4
            },
            filters: {
                product_form: 'Bottle',
                brands: "SBL"
            },
            image_url: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/55e7021cf760467a8701f0401fd97a91.jpg"
        },
        {
            id: 4,
            "name": "Cutisoins Luxury Matte Sunscreen (50gm Each) SPF 50+++",
            "available": true,
            price: '₹690',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 407,
                "average_rating": 4.4
            },
            filters: {
                product_form: 'Bottle',
                brands: "Sai Herbs"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/9307e51300e5495881b7ea0dbeb164bb.jpg"
        },
        {
            id: 5,
            "name": "Tretin 0.025% Cream",
            "available": true,
            price: '₹210.94',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Cream',
                brands: "Bjain"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/b7e687e89c72483fb2f276d9c19494bd.jpg"
        },
        {
            id: 6,
            "name": "Glyco 6 Glycolic Acid Cream | For Dry Skin, Acne & Hyperpigmentation",
            "available": true,
            price: '₹225.94',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Cream',
                brands: "SBL"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2ba88a3bed064dff9e1c88884f3f63ff.jpg"
        },
        {
            id: 7,
            "name": "Cetaphil Moisturising Cream | Face Care Product for Dry to Normal, Sensitive Skin",
            "available": true,
            price: '₹699.94',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Cream',
                brands: "Wheezal"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/80e2d53e1c36474eb3e6b9480a7ef2e3.jpg"
        },
        {
            id: 8,
            "name": "Boroline SX Antiseptic Ayurvedic Cream for Dry Skin",
            "available": true,
            price: '80.94',
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Cream',
                brands: "Sai Herbs"
            },
            image_url: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/453b1cc5-4031-4e70-8fec-6cde9a414ad9.jpeg"
        },
        {
            id: 9,
            "name": "Chemist At Play Odour Control Underarm Roll On | Lactic Acid Deodrants White Jasmine",
            price: '₹80',
            "available": true,
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Powder',
                brands: "Bjain"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/2b2ddc54b8e04acf8638b43c53b512b6.jpg"
        },
        {
            id: 10,
            "name": "Himalaya Gentle Baby Powder | Keeps Baby's Skin Soft & Dry | Paraben-Free",
            price: '₹111',
            "available": true,
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Powder',
                brands: "SBL"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5ee3a75e4b0b4a5b9b5293913ec42698.jpg"
        },
        {
            id: 11,
            "name": "Dermi Cool Prickly Heat Powder Menthol Regular",
            price: '₹277',
            "available": true,
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Powder',
                brands: "Wheezal"
            },
            image_url: "https://onemg.gumlet.io/l_watermark_346,w_380,h_380/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/caf37a3c394342fabc71b7b9a55d6aa6.jpg"
        },
        {
            id: 12,
            "name": "ADPL Salicylic Acid I.P. Powder",
            price: '₹544',
            "available": true,
            cta: "Add to cart",
            "ratings": {
                "total_ratings": 207,
                "average_rating": 3.2
            },
            filters: {
                product_form: 'Powder',
                brands: "Sai Herbs"
            },
            image_url: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/d16997cecb9c40c28aa87f74741e13bc.jpg"
        },
    ]
}