export const JobCreatedByPromise = email => {
    return fetch(`http://localhost:3000/careerCood?email=${email}`).then(res => res.json())
}