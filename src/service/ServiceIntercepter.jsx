import axios from "axios";

    export const RequestFunc = () => {
        
        axios.interceptors.request.use((request) => {
            // console.log("request");

            return request;

        }, function (error) {
            // console.log("request error");

            return error.response;
        });
    }

    export const ResponseFunc = () => {
        axios.interceptors.response.use((response) => {
            // console.log("response", response);
            return response;
        }, function (error) {
            // console.log("response error", error);
            return error.response;
        });
    }
