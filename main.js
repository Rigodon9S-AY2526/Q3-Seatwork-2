function seeDiscount() {}
    let budget = document.getElementById("budget").value;
    let discounted = budget * 0.20;

    document.getElementById("discount").innerHTML = `
            <button class="btn btn-light mb-2">Brand & Discounts</button>

                <div class="card discount-card p-4 text-center">

                <h5>Recommended Brands:</h5>

                    <button class="btn btn-outline-light btn-sm">Acer</button>
                    <button class="btn btn-outline-light btn-sm">Apple</button>
                    <button class="btn btn-outline-light btn-sm">Lenovo</button>

                `;
