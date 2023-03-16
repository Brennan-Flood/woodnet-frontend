import axios from "axios";
// import Header from "../components/Header";

export const getUsers = function () {
    const config = {
        headers: {
            "Content-Type": "application/json",
            NS: "test",
            DB: "test",
        },
        auth: {
            username: "root",
            password: "root",
        },
    };

    axios.post("http://localhost:8000/sql", "SELECT * FROM user;", config);
};

// curl -v localhost:8000/sql --data @test\db\create_user.sql
//  --header "Content-Type: application/json"
// --header "NS: test"
// --header "DB: test" --user "root:root"
// *   Trying 127.0.0.1:8000...
// * Connected to localhost (127.0.0.1) port 8000 (#0)
// * Server auth using Basic with user 'root'
// > POST /sql HTTP/1.1
// > Host: localhost:8000
// > Authorization: Basic cm9vdDpyb290
// > User-Agent: curl/7.84.0
// > Accept: */*
// > Content-Type: application/json
// > NS: test
// > DB: test
