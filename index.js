if (typeof window !== "undefined") {
  let savelead = [];

  let input_Tab = document.getElementById("input_tab");
  let Data = document.getElementById("data");
  let Save = document.getElementById("save");
  let Clear = document.getElementById("clear");
  let Fetch = document.getElementById("fetch");

  // localStorage.setItem("myleads", "www.youtube.com");
  // console.log(localStorage.getItem("myleads"));

  let local_var = JSON.parse(localStorage.getItem("mylead"));
  // console.log(local_var);

  //to open the saved leads
  if (local_var) {
    savelead = local_var;
    render_value(savelead);
  }

  Save.addEventListener("click", function () {
    console.log("hello wolrd");
    savelead.push(input_Tab.value);
    input_Tab.value = "";
    localStorage.setItem("mylead", JSON.stringify(savelead));
    render_value(savelead);
    // console.log(localStorage.getItem(savelead));
  });

  Clear.addEventListener("dblclick", function () {
    localStorage.clear();
    savelead = [];
    render_value(savelead);
  });

  Fetch.addEventListener("click", function () {
    // console.log(tabs[0].url);
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      savelead.push(tabs[0].url);
      localStorage.setItem("mylead", JSON.stringify(savelead));
      render_value(savelead);
    });
  });

  function render_value(leads) {
    let list = "";
    for (let i = 0; i < leads.length; i++) {
      //   list += "<li><a target='_blank' href=' " + savelead[i] + " '>" + savelead[i] + "</a></li>";
      //Template String
      list += `<li>
                <a target='_blank' href=' ${leads[i]} '> ${leads[i]} </a>
            </li>`;
    }
    Data.innerHTML = list;
  }
}

//To convert a string to an array

// let savelead = `["www.youtube.com"]`;
// savelead=JSON.parse(savelead)
// savelead.push("hello world")
// console.log(savelead)

//To convert an array to a string

// let savelead = ["www.youtube.com"];
// savelead=JSON.stringify(savelead)
// console.log(typeof savelead )
