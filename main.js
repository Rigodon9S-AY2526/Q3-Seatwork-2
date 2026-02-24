function seeDiscount() {
    let budget = document.getElementById("budget").value;
    let discounted = budget * 0.20;

    document.getElementById("discount").innerHTML = `
            <button type="button" class="badge">Brands & Discounts</button>

            <div class="container2 rounded">
                <button class="btn" type="button">Acer</button>
                <button class="btn" type="button">Apple</button>
                <button class="btn" type="button">Lenovo</button>
            </div>
    '

}