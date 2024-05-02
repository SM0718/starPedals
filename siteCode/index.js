export const productDetails = [
    {
        "flyPedal": {
            "first": {
                name: "Fly Pedal V2 White",
                pic: "../public/flyPedal_V2/flyPedal_V2.webp",
                price: "3999",
                color: "White",
                features: {
                    "1": "Made from 100% aircraft-grade aluminum so the pedals are lightweight yet durable; Includes lifetime guarantee.",
                    "2": "Works with most clipless pedals that have 2 and 3 hole cleat options; see below for all supported pedals."
                },
                compatilibility: {
                    "1": "Shimano SPD / SPD-SL",
                    "2": "Look KEO",
                    "3": "Clic & RXS, Infinity Pedals, and S-Track & Delta."
                },
                NOTE: "Fly Pedals do not connect directly to the pedals. They require the proper cleats to attach the adapters to the pedals."
            },
            "second": {
                name: "Fly Pedal V2 Black",
                pic: "../public/flyPedal_V2/flyPedal_V2_black.webp",
                price: "3989",
                color: "Black",
                features: {
                    "1": "Made from 100% aircraft-grade aluminum so the pedals are lightweight yet durable; Includes lifetime guarantee.",
                    "2": "Works with most clipless pedals that have 2 and 3 hole cleat options; see below for all supported pedals."
                },
                compatilibility: {
                    "1": "Shimano SPD / SPD-SL",
                    "2": "Look KEO",
                    "3": "Clic & RXS, Infinity Pedals, and S-Track & Delta."
                },
                NOTE: "Fly Pedals do not connect directly to the pedals. They require the proper cleats to attach the adapters to the pedals."
            },
            "third": {
                name: "Fly Pedal V2 Green",
                pic: "../public/flyPedal_V2/flyPedal_V2_green.webp",
                price: "3999",
                color: "Green",
                features: {
                    "1": "Made from 100% aircraft-grade aluminum so the pedals are lightweight yet durable; Includes lifetime guarantee.",
                    "2": "Works with most clipless pedals that have 2 and 3 hole cleat options; see below for all supported pedals."
                },
                compatilibility: {
                    "1": "Shimano SPD / SPD-SL",
                    "2": "Look KEO",
                    "3": "Clic & RXS, Infinity Pedals, and S-Track & Delta."
                },
                NOTE: "Fly Pedals do not connect directly to the pedals. They require the proper cleats to attach the adapters to the pedals."
            },
            
            // pic: {
            //     '2': "./flyPedal_V2/flyPedal_V2_green.webp",
            //     '3': "./flyPedal_V2/flyPedal_V2_black.webp"
            // },
            // price: "",
            
        }
    }
    
]
document.querySelector('img').src = productDetails[0].flyPedal.first.pic
console.log(productDetails[0].flyPedal.first.pic)