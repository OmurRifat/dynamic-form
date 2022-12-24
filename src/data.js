const sectors = [
    {
        MainSector: "Manufacturing",
        ParentSector: [
            {
                SubParentSector: "Construction materials"
            },
            {
                SubParentSector: "Electronics and Optics"
            },
            {
                SubParentSector: "Food and Beverage",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Bakery & confectionery products"
                    },
                    {
                        SubChildrenSector: "Beverage"
                    },
                    {
                        SubChildrenSector: "Fish & fish products"
                    },
                    {
                        SubChildrenSector: "Meat & meat products"
                    },
                    {
                        SubChildrenSector: "Milk & dairy products"
                    },
                    {
                        SubChildrenSector: "Other"
                    },
                    {
                        SubChildrenSector: "Sweets & snack food"
                    },
                ],
            },
            {
                SubParentSector: "Furniture",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Bathroom/sauna"
                    },
                    {
                        SubChildrenSector: "Bedroom"
                    },
                    {
                        SubChildrenSector: "Children's room"
                    },
                    {
                        SubChildrenSector: "Kitchen"
                    },
                    {
                        SubChildrenSector: "Living room"
                    },
                    {
                        SubChildrenSector: "Office"
                    },
                    {
                        SubChildrenSector: "Other (Furniture)"
                    },
                    {
                        SubChildrenSector: "Outdoor"
                    },
                    {
                        SubChildrenSector: "Project furniture"
                    },
                ],
            },
            {
                SubParentSector: "Machinery",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Machinery components"
                    },
                    {
                        SubChildrenSector: "Machinery equipment/tools"
                    },
                    {
                        SubChildrenSector: "Manufacture of machinery"
                    },
                    {
                        SubChildrenSector: "Maritime",
                        childrenSector: [
                            "Aluminium and steel workboats",
                            "Boat/Yacht building",
                            "Ship repair and conversion"
                        ]
                    },
                    {
                        SubChildrenSector: "Metal structures"
                    },
                    {
                        SubChildrenSector: "Other"
                    },
                    {
                        SubChildrenSector: "Repair and maintenance service"
                    }
                ],
            },
            {
                SubParentSector: "Metalworking",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Construction of metal structures"
                    },
                    {
                        SubChildrenSector: "Houses and buildings"
                    },
                    {
                        SubChildrenSector: "Metal Products"
                    },
                    {
                        SubChildrenSector: "Metal works",
                        childrenSector: [
                            "CNC-machining",
                            "Forgings, Fasterners",
                            "Gas, Plasma, Laser cutting",
                            "MIG, TIG, Aluminum welding",
                        ]
                    },
                ],
            },
            {
                SubParentSector: "Plastic and Rubber",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Packaging"
                    },
                    {
                        SubChildrenSector: "Plastic goods"
                    },
                    {
                        SubChildrenSector: "Plastic processing technology",
                        childrenSector: [
                            "Blowing",
                            "Moulding",
                            "Plastics welding and processing",
                        ]
                    },
                    {
                        SubChildrenSector: "Plastic profiles"
                    },
                ],
            },
            {
                SubParentSector: "Printing",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Advertising"
                    },
                    {
                        SubChildrenSector: "Book/Periodicals printing"
                    },
                    {
                        SubChildrenSector: "Labelling and packaging printing"
                    },
                ]
            },
            {
                SubParentSector: "Textile and Clothing",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Clothing"
                    },
                    {
                        SubChildrenSector: "Textile"
                    },
                ]
            },
            {
                SubParentSector: "Wood",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Other (Wood)"
                    },
                    {
                        SubChildrenSector: "Wooden building materials"
                    },
                    {
                        SubChildrenSector: "Wooden houses"
                    },
                ],
            },
        ],
    },
    {
        MainSector: "Other",
        ParentSector: [
            {
                SubParentSector: "Creative industries"
            },
            {
                SubParentSector: "Energy technology"
            },
            {
                SubParentSector: "Environment"
            },
        ]
    },
    {
        MainSector: "Service",
        ParentSector: [
            {
                SubParentSector: "Business services"
            },
            {
                SubParentSector: "Engineering"
            },
            {
                SubParentSector: "Information Technology and Telecommunications",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Data processing, Web portals, E-marketing"
                    },
                    {
                        SubChildrenSector: "Programming, Consultancy"
                    },
                    {
                        SubChildrenSector: "Software, Hardware"
                    },
                    {
                        SubChildrenSector: "Telecommunications"
                    }
                ]
            },
            {
                SubParentSector: "Tourism"
            },
            {
                SubParentSector: "Translation services"
            },
            {
                SubParentSector: "Transport and Logistics",
                SuperChildrenSector: [
                    {
                        SubChildrenSector: "Air"
                    },
                    {
                        SubChildrenSector: "Rail"
                    },
                    {
                        SubChildrenSector: "Road"
                    },
                    {
                        SubChildrenSector: "Water"
                    }
                ],
            },
        ],
    },
]