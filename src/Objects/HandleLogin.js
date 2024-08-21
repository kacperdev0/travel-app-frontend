export const handleLoginError = (navigate, error, rd = "/") => {
    if (error.response) {
        console.log("401");
        if (error.response.status === 401) {
            console.log("blad 401");
            navigate("/login", { state: { message: "Your session expired", redirect: rd } });
        }
    }
};