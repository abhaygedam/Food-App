

async function getData(url) {
    try {
        let res = await fetch(url);
        let data = await res.json();

       console.log(data);
        return data;

    }
    catch (e) {
        console.log(e);
    }
}

var i = 0;

function appendData(products, parent) {
   

    products.meals.forEach((res) => {
        console.log(res.strInstructions);

        let div = document.createElement("div");
        let div_content = document.createElement("div");
        div_content.style.display = "flex";
        let name = document.createElement("h1");
        let p = document.createElement("p");
        let img = document.createElement("img");
        img.style.width = "200px";
        img.style.height = "160px";
        img.style.marginRight = "20px";
        img.src = res.strMealThumb;
        name.textContent = res.strMeal;
        p.textContent = res.strInstructions;  

        div_content.append(img, p);
        div.append(name, div_content);
        parent.append(div);
    });


    // for (var key in products) {
    //     console.log(key);

    //     if (products.meals[key] == `strIngredient${i}`) {
    //         console.log(products.meals[key]);
    //     }
    //     i++;
           
        
    // }
   
}

export { getData, appendData };