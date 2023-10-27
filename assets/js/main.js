"use strict";

// ===================================================
//    JS-Vertiefung – Project Mehrwertsteuer-Rechner
// ===================================================

console.log(
	"%c JS-Vertiefung – Project Mehrwertsteuer-Rechner",
	"color: tomato"
);

const btnSubmit = document.querySelector("#btn-submit");

// Radio Buttons - MwSt aufschlagen/abziehen
let rdBtnNetGross = document.querySelectorAll("input[name='netGross']");
// Radio Buttons - Mehrwertsteuersatz
let rdBtnVatRate = document.querySelectorAll("input[name='vatRate']");

// Textaustausch von Labeltext des Numberfeldes und h2 von .grossNetAmount
const labelNetAmount = document.querySelector(".netAmount");
const grossNetHeadline = document.querySelector(".grossNetAmount h2");

rdBtnNetGross[0].addEventListener("click", () => {
	labelNetAmount.innerHTML =
		"Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span>*</span>";
	grossNetHeadline.textContent = "Bruttobetrag (Endpreis)";
});

rdBtnNetGross[1].addEventListener("click", () => {
	labelNetAmount.innerHTML =
		"Bruttobetrag (Preis inklusive Mehrwertsteuer) in Euro<span>*</span>";
	grossNetHeadline.textContent = "Nettobetrag";
});


// Button Klick-Function für MwSt-Berechnung
btnSubmit.addEventListener("click", (event) => {
	event.preventDefault();

	// Number Eingabe
	const netGrossAmountInput = Number(
		document.querySelector("#netAmount").value
	);

	// Mehrwertsteuerbetrag
	const vatAmountOutput = document.querySelector(".vatAmount p");
	// Brutto-/Netto-Betrag
	const grossNetOutput = document.querySelector(".grossNetAmount p");

	if (rdBtnNetGross[0].checked && rdBtnVatRate[0].checked) {
		// 19% MwSt aufschlagen
		let vatAmountResult = Number((netGrossAmountInput * 0.19).toFixed(2));
		vatAmountOutput.textContent = `${vatAmountResult} €`;
		grossNetOutput.textContent = `${(
			netGrossAmountInput + vatAmountResult
		).toFixed(2)} €`;
	} else if (rdBtnNetGross[0].checked && rdBtnVatRate[1].checked) {
		// 7% MwSt aufschlagen
		let vatAmountResult = Number((netGrossAmountInput * 0.07).toFixed(2));
		vatAmountOutput.textContent = `${vatAmountResult} €`;
		grossNetOutput.textContent = `${(
			netGrossAmountInput + vatAmountResult
		).toFixed(2)} €`;
	} else if (rdBtnNetGross[1].checked && rdBtnVatRate[0].checked) {
		// 19% MwSt abziehen
		let netAmountResult = Number(
			((netGrossAmountInput * 100) / 119).toFixed(2)
		);
		grossNetOutput.textContent = `${netAmountResult} €`;
		vatAmountOutput.textContent = `${(
			netGrossAmountInput - netAmountResult
		).toFixed(2)} €`;
	} else if (rdBtnNetGross[1].checked && rdBtnVatRate[1].checked) {
		// 7% MwSt abziehen
		let netAmountResult = Number(
			((netGrossAmountInput * 100) / 107).toFixed(2)
		);
		grossNetOutput.textContent = `${netAmountResult} €`;
		vatAmountOutput.textContent = `${(
			netGrossAmountInput - netAmountResult
		).toFixed(2)} €`;
	}
});
