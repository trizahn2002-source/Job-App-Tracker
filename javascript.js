// Get existing jobs from localStorage
let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

//Save jobs to localStorage
function saveJobs() {
  localStorage.setItem("jobs", JSON.stringify(jobs));
}
    //Add Job
const form = document.getElementById("jobForm");

if (form) {
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


    alert("Job added successfully!");
  });
}

  //Display the jobs
  const container = document.getElementById("jobsContainer");

  if (container) {
    displayJobs();
  }

  function displayJobs() {
    container.innerHTML = "";

    jobs.forEach(function (job, index)  {
      const div = document.createElement("div");
      div.classList.add("job-card");

      div.innerHTML = `
          <h3>${job.company}</h3>
          <p>Position: ${job.position}</p>
          <p>Status: ${job.status}</p>
          <button onclick="deleteJob(${index})">Delete</button>
      `;
      
      container.appendChild(div);
    });
  }  
    //Delete Jobs
    function deleteJob(index) {
      jobs.splice(index, 1);
      saveJobs();
      displayJobs();
    }
