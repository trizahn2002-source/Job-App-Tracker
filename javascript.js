// Get existing from localStorage
let jobs =JSON.parse(localStorage.getItem("jobs"));

//Save jobs to localStorage
function saveJobs() {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}
//Add Job
const form = document.getElementById("jobForm");
if (form {
  form.addEventListener("submit", function (e) {e.preventDefault();
    const company = document.getElementById("company").value;
    const position = document.getElementById("position").value;
    const status = document.getElementById("status").value;
    //Crete job object
    const newJob = {
      company: company,
      position: position,
      status: status
    };
    //Add to array
    jobs.push(newJob);

    //Save
    saveJobs();

    //Reset form
    form.reset();

    //Optional message
    alert("Job added successfully!");
  });

  //Display the jobs
  const container =

}) 