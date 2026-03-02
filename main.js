function seeDiscount() {

    let budget = document.getElementById("priceRange").value;
    let discounted = budget * 0.20;

    document.getElementById("discountDisplay").innerHTML = `
                <div class="card discount-card p-4 text-center">

                <h5>Recommended Brands:</h5>

                    <button class="btn btn-outline-light btn-sm">Acer</button>
                    <button class="btn btn-outline-light btn-sm">Apple</button>
                    <button class="btn btn-outline-light btn-sm">Lenovo</button>

                    <br><br>

                    <p>Eligible Discount: <span class="badge bg-light">${discounted}</span></p>
                </div>

                `;

}
