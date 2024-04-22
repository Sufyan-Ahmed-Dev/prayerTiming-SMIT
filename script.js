let inputForm = document.querySelector("#tableForm");
let input = document.querySelector("#default-search");
let tableRow = document.querySelector("#rows");

// let tableRows ;
inputForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let getCityName = input.value;

  var currentDate = new Date();

  try {
    const res = await axios.get(
      `https://api.aladhan.com/v1/timingsByAddress/${currentDate}?address=${getCityName}`
    );
    let getData = res.data.data.timings;
    tableRow.innerHTML = "";
    // console.log(res)
    console.log(res?.data?.data?.meta?.latitude);
    console.log(res?.data?.data?.meta?.longitude);

    Object.entries(getData).forEach(([key, value]) => {
      console.log(`${key}: ${value}`);
      tableRow.innerHTML += ` <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${key}
        </th>
        <td class="px-6 py-4">
        ${value}
        </td>
       
    </tr>`;
    });
    input.value = ""

    console.log(getData);
  } catch (err) {
    console.log(err);
  }

});
