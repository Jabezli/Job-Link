const btnCreatePost = document.querySelector('.btn-CSS2');
const formJobPost = document.querySelector('.CreateJob');
const btnPostJob = document.querySelector('.saveJobPosting');
const savePostForUser = document.querySelector('.jobListContainer');

formJobPost.style.display = "none";
btnCreatePost.style.display = "block";

async function PostingJobsForFetch(e) {
    e.preventDefault()
    btnCreatePost.style.display = "block";
    const Companyname = document.querySelector('.postCompany').value;
    const Job_Title = document.querySelector('.form-select').value;
    const Salary_Range = document.querySelector('.postSalary').value;
    const Description = document.querySelector('.postDescription').value;
    const Years_of_Experience = document.querySelector('.postExperience').value;
    const Office_Location = document.querySelector('.postEmail').value;
    
    if (!Companyname || !Job_Title || !Salary_Range || !Description) {
        alert('please fill out each question')
        return
    }
    else {
        const response = await fetch('http://localhost:3001/create', {
            method: 'POST',
            body: JSON.stringify({
                Companyname: Companyname,
                Job_Title: Job_Title,
                Salary_Range: Salary_Range,
                Office_Location: Office_Location,
                Years_of_Experience: Years_of_Experience,
                Description: Description
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/')
        } else {
            alert('Failed to add Job Post');
        }
    }
}

function ShowJobPost() {
    btnCreatePost.style.display = "none";
    if (formJobPost.style.display === "none") {
        formJobPost.style.display = "block";
    } else {
        formJobPost.style.display = "none";
    }
}

async function SaveSpecificPost(e) {

    const target = e.target.dataset.value;
}

btnCreatePost.addEventListener('click', ShowJobPost);
btnPostJob.addEventListener('click', PostingJobsForFetch);
savePostForUser.addEventListener('click', SaveSpecificPost);

