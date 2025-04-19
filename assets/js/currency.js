const apiKey = "8d1415d58173a1549d13809d"; // Replace with your own API key

const currencyMap = {
    AED: { country: "United Arab Emirates", code: "ae" },
    AFN: { country: "Afghanistan", code: "af" },
    ALL: { country: "Albania", code: "al" },
    AMD: { country: "Armenia", code: "am" },
    AOA: { country: "Angola", code: "ao" },
    ARS: { country: "Argentina", code: "ar" },
    AUD: { country: "Australia", code: "au" },
    AWG: { country: "Aruba", code: "aw" },
    AZN: { country: "Azerbaijan", code: "az" },
    BAM: { country: "Bosnia and Herzegovina", code: "ba" },
    BBD: { country: "Barbados", code: "bb" },
    BDT: { country: "Bangladesh", code: "bd" },
    BGN: { country: "Bulgaria", code: "bg" },
    BHD: { country: "Bahrain", code: "bh" },
    BIF: { country: "Burundi", code: "bi" },
    BMD: { country: "Bermuda", code: "bm" },
    BND: { country: "Brunei", code: "bn" },
    BOB: { country: "Bolivia", code: "bo" },
    BRL: { country: "Brazil", code: "br" },
    BSD: { country: "Bahamas", code: "bs" },
    BTN: { country: "Bhutan", code: "bt" },
    BWP: { country: "Botswana", code: "bw" },
    BYN: { country: "Belarus", code: "by" },
    BZD: { country: "Belize", code: "bz" },
    CAD: { country: "Canada", code: "ca" },
    CDF: { country: "Democratic Republic of the Congo", code: "cd" },
    CHF: { country: "Switzerland", code: "ch" },
    CLP: { country: "Chile", code: "cl" },
    CNY: { country: "China", code: "cn" },
    COP: { country: "Colombia", code: "co" },
    CRC: { country: "Costa Rica", code: "cr" },
    CUP: { country: "Cuba", code: "cu" },
    CVE: { country: "Cape Verde", code: "cv" },
    CZK: { country: "Czech Republic", code: "cz" },
    DJF: { country: "Djibouti", code: "dj" },
    DKK: { country: "Denmark", code: "dk" },
    DOP: { country: "Dominican Republic", code: "do" },
    DZD: { country: "Algeria", code: "dz" },
    EGP: { country: "Egypt", code: "eg" },
    ERN: { country: "Eritrea", code: "er" },
    ETB: { country: "Ethiopia", code: "et" },
    EUR: { country: "European Union", code: "eu" },
    FJD: { country: "Fiji", code: "fj" },
    FKP: { country: "Falkland Islands", code: "fk" },
    FOK: { country: "Faroe Islands", code: "fo" },
    GBP: { country: "United Kingdom", code: "gb" },
    GEL: { country: "Georgia", code: "ge" },
    GGP: { country: "Guernsey", code: "gg" },
    GHS: { country: "Ghana", code: "gh" },
    GIP: { country: "Gibraltar", code: "gi" },
    GMD: { country: "The Gambia", code: "gm" },
    GNF: { country: "Guinea", code: "gn" },
    GTQ: { country: "Guatemala", code: "gt" },
    GYD: { country: "Guyana", code: "gy" },
    HKD: { country: "Hong Kong", code: "hk" },
    HNL: { country: "Honduras", code: "hn" },
    HRK: { country: "Croatia", code: "hr" },
    HTG: { country: "Haiti", code: "ht" },
    HUF: { country: "Hungary", code: "hu" },
    IDR: { country: "Indonesia", code: "id" },
    ILS: { country: "Israel", code: "il" },
    IMP: { country: "Isle of Man", code: "im" },
    INR: { country: "India", code: "in" },
    IQD: { country: "Iraq", code: "iq" },
    IRR: { country: "Iran", code: "ir" },
    ISK: { country: "Iceland", code: "is" },
    JEP: { country: "Jersey", code: "je" },
    JMD: { country: "Jamaica", code: "jm" },
    JOD: { country: "Jordan", code: "jo" },
    JPY: { country: "Japan", code: "jp" },
    KES: { country: "Kenya", code: "ke" },
    KGS: { country: "Kyrgyzstan", code: "kg" },
    KHR: { country: "Cambodia", code: "kh" },
    KID: { country: "Kiribati", code: "ki" },
    KMF: { country: "Comoros", code: "km" },
    KRW: { country: "South Korea", code: "kr" },
    KWD: { country: "Kuwait", code: "kw" },
    KYD: { country: "Cayman Islands", code: "ky" },
    KZT: { country: "Kazakhstan", code: "kz" },
    LAK: { country: "Laos", code: "la" },
    LBP: { country: "Lebanon", code: "lb" },
    LKR: { country: "Sri Lanka", code: "lk" },
    LRD: { country: "Liberia", code: "lr" },
    LSL: { country: "Lesotho", code: "ls" },
    LYD: { country: "Libya", code: "ly" },
    MAD: { country: "Morocco", code: "ma" },
    MDL: { country: "Moldova", code: "md" },
    MGA: { country: "Madagascar", code: "mg" },
    MKD: { country: "North Macedonia", code: "mk" },
    MMK: { country: "Myanmar", code: "mm" },
    MNT: { country: "Mongolia", code: "mn" },
    MOP: { country: "Macau", code: "mo" },
    MRU: { country: "Mauritania", code: "mr" },
    MUR: { country: "Mauritius", code: "mu" },
    MVR: { country: "Maldives", code: "mv" },
    MWK: { country: "Malawi", code: "mw" },
    MXN: { country: "Mexico", code: "mx" },
    MYR: { country: "Malaysia", code: "my" },
    MZN: { country: "Mozambique", code: "mz" },
    NAD: { country: "Namibia", code: "na" },
    NGN: { country: "Nigeria", code: "ng" },
    NIO: { country: "Nicaragua", code: "ni" },
    NOK: { country: "Norway", code: "no" },
    NPR: { country: "Nepal", code: "np" },
    NZD: { country: "New Zealand", code: "nz" },
    OMR: { country: "Oman", code: "om" },
    PAB: { country: "Panama", code: "pa" },
    PEN: { country: "Peru", code: "pe" },
    PGK: { country: "Papua New Guinea", code: "pg" },
    PHP: { country: "Philippines", code: "ph" },
    PKR: { country: "Pakistan", code: "pk" },
    PLN: { country: "Poland", code: "pl" },
    PYG: { country: "Paraguay", code: "py" },
    QAR: { country: "Qatar", code: "qa" },
    RON: { country: "Romania", code: "ro" },
    RSD: { country: "Serbia", code: "rs" },
    RUB: { country: "Russia", code: "ru" },
    RWF: { country: "Rwanda", code: "rw" },
    SAR: { country: "Saudi Arabia", code: "sa" },
    SBD: { country: "Solomon Islands", code: "sb" },
    SCR: { country: "Seychelles", code: "sc" },
    SDG: { country: "Sudan", code: "sd" },
    SEK: { country: "Sweden", code: "se" },
    SGD: { country: "Singapore", code: "sg" },
    SHP: { country: "Saint Helena", code: "sh" },
    SLE: { country: "Sierra Leone", code: "sl" },
    SOS: { country: "Somalia", code: "so" },
    SRD: { country: "Suriname", code: "sr" },
    SSP: { country: "South Sudan", code: "ss" },
    STN: { country: "São Tomé and Príncipe", code: "st" },
    SYP: { country: "Syria", code: "sy" },
    SZL: { country: "Eswatini", code: "sz" },
    THB: { country: "Thailand", code: "th" },
    TJS: { country: "Tajikistan", code: "tj" },
    TMT: { country: "Turkmenistan", code: "tm" },
    TND: { country: "Tunisia", code: "tn" },
    TOP: { country: "Tonga", code: "to" },
    TRY: { country: "Turkey", code: "tr" },
    TTD: { country: "Trinidad and Tobago", code: "tt" },
    TVD: { country: "Tuvalu", code: "tv" },
    TWD: { country: "Taiwan", code: "tw" },
    TZS: { country: "Tanzania", code: "tz" },
    UAH: { country: "Ukraine", code: "ua" },
    UGX: { country: "Uganda", code: "ug" },
    USD: { country: "United States", code: "us" },
    UYU: { country: "Uruguay", code: "uy" },
    UZS: { country: "Uzbekistan", code: "uz" },
    VES: { country: "Venezuela", code: "ve" },
    VND: { country: "Vietnam", code: "vn" },
    VUV: { country: "Vanuatu", code: "vu" },
    WST: { country: "Samoa", code: "ws" },
    YER: { country: "Yemen", code: "ye" },
    ZAR: { country: "South Africa", code: "za" },
    ZMW: { country: "Zambia", code: "zm" },
    ZWL: { country: "Zimbabwe", code: "zw" }
  };

  function formatCurrency(option) {
    if (!option.id) return option.text;
    const item = currencyMap[option.id];
    if (!item) return option.text;
    const flagUrl = `https://flagcdn.com/24x18/${item.code}.png`;
    return $(`<span><img src="${flagUrl}" class="me-1" /> ${item.country} - ${option.id}</span>`);
  }

  function initDropdown(selectId) {
    const $select = $(`#${selectId}`);
    for (const code in currencyMap) {
      const item = currencyMap[code];
      $select.append(new Option(`${item.country} - ${code}`, code));
    }

    $select.select2({
      templateResult: formatCurrency,
      templateSelection: formatCurrency,
      width: "100%"
    });
  }

  function convertCurrency() {
    const amount = parseFloat($("#amount").val());
    const from = $("#fromCurrency").val();
    const to = $("#toCurrency").val();
    const resultEl = $("#result");

    if (!amount || !from || !to) {
      resultEl.removeClass("d-none").addClass("text-danger").text("Please enter amount and select currencies.");
      return;
    }

    resultEl.removeClass("d-none text-danger").addClass("text-primary").text("Converting...");

    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.result !== "success") {
          resultEl.removeClass("text-primary").addClass("text-danger").text("Conversion failed.");
          return;
        }
        const converted = (amount * data.conversion_rate).toFixed(2);
        resultEl.html(`${amount} ${from} = <strong class="text-primary">${converted} ${to}</strong>`);
      })
      .catch(() => {
        resultEl.removeClass("text-primary").addClass("text-danger").text("API error. Try again later.");
      });
  }

  $(document).ready(function () {
    initDropdown("fromCurrency");
    initDropdown("toCurrency");
    $("#fromCurrency").val("USD").trigger("change");
    $("#toCurrency").val("EUR").trigger("change");
  });