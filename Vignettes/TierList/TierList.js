/*

To Do,

Make Separate list for series

*/

row_A = document.getElementById("row_S")
row_A = document.getElementById("row_A")
row_B = document.getElementById("row_B")
row_C = document.getElementById("row_C")
row_D = document.getElementById("row_D")
row_E = document.getElementById("row_E")
row_F = document.getElementById("row_F")
unrated = document.getElementById("unrated")

const TierTypes = {
    "S" : "row_S",
    "A" : "row_A",
    "B" : "row_B",
    "C" : "row_C",
    "D" : "row_D",
    "E" : "row_E",
    "F" : "row_F",
    "Unrated" : "unrated",
}

const TierList = { "items":
    [
        {
            "name": "The Hobbit",
            "tier": TierTypes.S
        },
        {
            "name": "The Little Prince",
            "tier": TierTypes.S
        },
        {
            "name": "Sorcerer's Stone",
            "tier": TierTypes.S
        },
        {
            "name": "Eugine",
            "tier": TierTypes.S
        },
        {
            "name": "The Hobbit",
            "tier": TierTypes.S
        },
        {
            "name": "A Horse and His Boy",
            "tier": TierTypes.S
        },
        {
            "name": "The last king of Narnia",
            "tier": TierTypes.S
        },
        {
            "name": "The Witch the lion and the Wardrobe",
            "tier": TierTypes.S
        },
        {
            "name": "The Midnight Library",
            "tier": TierTypes.A
        },
        {
            "name": "LOTR III",
            "title" : "Return of the King",
            "tier": TierTypes.A
        },
        {
            "name": "LOTR II",
            "title" : "The Two Towers",
            "tier": TierTypes.A
        },
        
        {
            "name": "HP Series (Excluding 1 and 6)",
            "tier": TierTypes.A
        },
        
        {
            "name": "Narnia Series (Excluding 2,3,8)",
            "title" : "",
            "tier": TierTypes.A
        },
        {
            "name": "The English Patient",
            "tier": TierTypes.A
        },
        {
            "name": "The Alchemist",
            "tier": TierTypes.A
        },
        
        {
            "name": "Discworld Series (Book 1 and 2)",
            "tier": TierTypes.A
        },
        
        {
            "name": "Sobachie Sertse",
            "tier": TierTypes.A
        },
        {
            "name": "Earthsea Series (Excluding 4)",
            "tier": TierTypes.B
        },
        
        {
            "name": "Master i Margarita",
            "tier": TierTypes.B
        },
        {
            "name": "Half-Blood Prince",
            "tier": TierTypes.C
        },
        {
            "name": "Voyage of the Dawn Treader",
            "tier": TierTypes.C
        },
        
        {
            "name": "LOTR I",
            "tier": TierTypes.C
        },
        {
            "name": "Deerslayer",
            "tier": TierTypes.D
        },
        {
            "name": "Tehanu",
            "tier": TierTypes.F
        },
        
        {
            "name": "Tales From Earthsea",
            "tier": TierTypes.Unrated
        },
        
        {
            "name": "Last of the Mohicans",
            "tier": TierTypes.Unrated
        },
        
        {
            "name": "Call of the Wild",
            "tier": TierTypes.Unrated
        },
        
        {
            "name": "Alice in Wonderland",
            "tier": TierTypes.Unrated
        },
    ],
}


function UL() {
    this.list = document.createElement('ul')

    this.Add = function (item) {
        this.li = document.createElement('ul')
        this.li.innerHTML = item
        this.list.appendChild(this.li)
    }

    this.GetElement = function () {
        return this.list
    }
}

for(const [key, value] of Object.entries(TierTypes)){

    var list = new UL()

    var row = document.getElementById(value)

    for (var item of TierList.items) {

        if(item.tier == value)
            list.Add(item.name)
    }

    row.appendChild(list.GetElement())
    
}






