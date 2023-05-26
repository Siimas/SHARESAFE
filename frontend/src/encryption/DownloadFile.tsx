import { getCookie } from "../auth/Cookies";
import { api_url } from "../auth/general";
import decryptFile from "./DecryptFile";

// Returns all the files of a specific group
async function downloadFile(group_id: number) {
  const body = {
    id: group_id,
  };

  return fetch(api_url + "files/receive", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: "Bearer " + getCookie("accessToken"),
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      if (!data) console.error("--> null data handler here");
      return data.files.data;
    })
    .catch((err) => {
      console.error(err.message);
      throw err;
    });
}

export default downloadFile;
