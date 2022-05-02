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

const Bias = {
    "Harsh" : "HarshWarning",
    "Generous" : "GenerousWarning"
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
            "name": "Евгений Онегин",
            "tier": TierTypes.S
        },
        {
            "name": "A Horse and His Boy",
            "tier": TierTypes.S
        },
        {
            "name": "The Last Battle",
            "tier": TierTypes.S
        },
        {
            "name": "The Lion The Witch and The Wardrobe",
            "tier": TierTypes.S
        },
        {
            "name": "The Midnight Library",
            "tier": TierTypes.S
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
            "name": "Собачье Сердце",
            "tier": TierTypes.A
        },
        {
            "name": "Earthsea Series (Excluding 4)",
            "tier": TierTypes.B
        },
        
        {
            "name": "Мастер и Маргарита",
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
            "tier": TierTypes.D,
            "bias": Bias.Harsh
        },
        {
            "name": "Tehanu",
            "tier": TierTypes.F,
            "bias": Bias.Harsh
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
        var li = document.createElement('li')
        li.innerHTML = item
        li.classList.add("ml12");
        this.list.appendChild(li)
        return li;
    }

    this.GetElement = function () {
        return this.list
    }
}

for(const [key, value] of Object.entries(TierTypes)){

    var list = new UL()

    var row = document.getElementById(value)

    for (var item of TierList.items) {

        if(item.tier == value){
            var li = list.Add(item.name);
            if('bias' in item){
                li.classList.add(item.bias)
            }
        }

    }

    row.appendChild(list.GetElement())
    
}

anime.timeline({loop: false})
  .add({
    targets: '.ml12',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 7000,
    delay: (el, i) => 500 + 30 * i
  })


function ToIndex(){
    window.location.replace("../../Index.html")
}

