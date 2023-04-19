import axios from "axios";

export async function sendAnswer({ label, input, output }) {
  axios.post("http://127.0.0.1:8080/api/create", {
    label,
    input,
    output,
  });
}
