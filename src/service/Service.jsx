import axios from 'axios';

const url = "https://demo.univaf.com/api";

const postLogin = async(values, getCurrentUserData) => {

    await axios.post(url + "/login",{
        email: values.email,
        password: values.password,
    })
    .then((response) => {
        console.log(response.data);
        getCurrentUserData(response.data);
    }, (error) => {
        console.log(error);
    });
}

const postRegister = async({ values }, getStatusCode) => {

    console.log(values);

    await axios.post(url + "/register",{
        first_name: values.name,
        sur_name: values.surname,
        email: values.email,
        phone: values.phoneNumber,
        password: values.password,
        password2: values.confirmPassword,
    })
    .then((response) => {
        console.log(response);
        getStatusCode(response.status);
    }, (error) => {
        console.log(error);
    });
}



const postApplication = async(course_id, intakes, first_lang) => {

    await axios.post(url + "/create-application",{
        course_id: course_id,
        intakes: intakes,
        first_lang: first_lang,
    })
    .then((response) => {
        console.log(response);
    }, (error) => {
        console.log(error);
    });
}

const getCourses = async() => {

    const { data, status } = await axios.get(url + "/all-courses")
        .then((response) => response);
            if (status >= 400)
            {
                return [null, true]
            }
        return [data, null];
}

const getAssestments = async() => {

    const { data, status } = await axios.get(url + "/assesments")
        .then((response) => response);
            if (status >= 400)
            {
                return [null, true]
            }
        return [data, null];
}

// const getImages = async() => {

//     const { data, status } = await axios.get(url + "/all-courses")
//         .then((response) => response);
            
//             // console.log("status" + status)
//             if (status >= 400)
//             {
//                 // console.log("status" + status);
//                 return [null, true]
//             }

//         return [data, null];
//     }


const getHomePage = async() => {

    const { data, status } = await axios.get(url + "/home")
        .then((response) => response);
            if (status >= 400) 
            {
                return [null, true]
            }
        return [data, null];
}


export { getCourses, postApplication, postLogin, postRegister, getHomePage, getAssestments };